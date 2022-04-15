import React from 'react';
import {Text, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SwipeToDeleteI} from '../../interfaces/SwipeToDeleteInterface';
import {styles} from './SwipeToDeleteStyles';
import {LIST_ITEM_HEIGHT} from '../../constants/constants';
import {windowWidth} from '../../utils/globalFunctions';

const TRANSLATE_X_THRESHOLD = -(windowWidth * 0.3);

export const SwipeToDelete = ({
  item,
  hasEdit = false,
  hasDelete = true,
  onEdit,
  onDelete,
  simultaneousHandlers,
}: SwipeToDeleteI) => {
  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {startX: number}
  >({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
    },
    onEnd: () => {
      const shouldHold = translateX.value < TRANSLATE_X_THRESHOLD;

      /**
       * * if the user swipes beyond the defined
       * * threshold, the item should hold the position
       */
      if (shouldHold) {
        translateX.value = withTiming(TRANSLATE_X_THRESHOLD);
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const itemContainerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  return (
    <View style={styles.root}>
      <View
        style={[
          styles.iconContainer,
          {
            width:
              hasEdit && hasDelete ? LIST_ITEM_HEIGHT * 1.5 : LIST_ITEM_HEIGHT,
            right: hasEdit && hasDelete ? '5%' : '10%',
          },
        ]}>
        {hasEdit && (
          <Icon
            name={'edit'}
            size={LIST_ITEM_HEIGHT * 0.4}
            color={'#007FFF'}
            onPress={onEdit}
          />
        )}
        {hasDelete && (
          <Icon
            name={'trash-o'}
            size={LIST_ITEM_HEIGHT * 0.4}
            color={'red'}
            onPress={onDelete}
          />
        )}
      </View>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}>
        <Animated.View style={[styles.itemContainer, itemContainerStyle]}>
          <Text style={styles.itemText}>{item.todo}</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

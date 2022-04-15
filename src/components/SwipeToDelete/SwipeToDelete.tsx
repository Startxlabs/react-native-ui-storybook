import React from 'react';
import {Text} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
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
  onDelete,
  simultaneousHandlers,
}: SwipeToDeleteI) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(10);
  const iconOpacity = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldDismiss = translateX.value < TRANSLATE_X_THRESHOLD;

      /**
       * * if the user swipes beyond the defined
       * * threshold, the item should be deleted
       */
      if (shouldDismiss) {
        translateX.value = withTiming(-windowWidth);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        iconOpacity.value = withTiming(0, undefined, isFinished => {
          if (isFinished && onDelete) {
            /**
             * * runOnJS will run this on JS thread
             * * pass the args to onDelete
             * * as runOnJS(onDelete)(args)
             */
            runOnJS(onDelete)();
          }
        });
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

  const iconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0,
    );
    return {opacity};
  });

  const itemHeightStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: iconOpacity.value,
    };
  });

  return (
    <Animated.View style={[styles.root, itemHeightStyle]}>
      <Animated.View style={[styles.iconContainer, iconContainerStyle]}>
        <Icon name={'trash-o'} size={LIST_ITEM_HEIGHT * 0.4} color={'red'} />
      </Animated.View>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}>
        <Animated.View style={[styles.itemContainer, itemContainerStyle]}>
          <Text style={styles.itemText}>{item.todo}</Text>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

import React, {useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {BottomSheetI} from './BottomSheetInterface';
import {styles} from './BottomSheetStyles';
import {windowHeight} from '../../utils/globalFunctions';

export const BottomSheet = ({
  isVisible,
  handleDismiss,
  hasPanGesture = true,
  bottomSheetContent,
  bottomSheetContainerStyle,
}: BottomSheetI) => {
  const gapOnTop = hasPanGesture ? 50 : 0;
  const MAX_TRANSLATE_Y = -windowHeight + gapOnTop;
  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});
  const panGesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -windowHeight / 3) {
        translateY.value = withTiming(0);
      } else if (translateY.value < -windowHeight / 1.5) {
        translateY.value = withTiming(MAX_TRANSLATE_Y);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + gapOnTop, MAX_TRANSLATE_Y],
      [20, 5],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
      transform: [{translateY: translateY.value}],
    };
  });

  useEffect(() => {
    // * toggle opening and closing of bottom sheet
    translateY.value = withTiming(isVisible ? -windowHeight / 3 : 0);
  }, [isVisible]);

  return (
    <GestureHandlerRootView style={styles.root}>
      <TouchableOpacity
        activeOpacity={0.95}
        style={{
          width: '100%',
          flex: 1,
          position: 'relative',
        }}
        onPress={handleDismiss}
      />
      {hasPanGesture ? (
        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={[
              styles.bottomSheetContainer,
              rBottomSheetStyle,
              bottomSheetContainerStyle,
            ]}>
            <View style={styles.line} />
            {bottomSheetContent?.()}
          </Animated.View>
        </GestureDetector>
      ) : (
        <Animated.View
          style={[
            styles.bottomSheetContainer,
            rBottomSheetStyle,
            {paddingVertical: 20},
            bottomSheetContainerStyle,
          ]}>
          {bottomSheetContent?.()}
        </Animated.View>
      )}
    </GestureHandlerRootView>
  );
};

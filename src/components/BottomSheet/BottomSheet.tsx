import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
} from 'react';
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
import {BottomSheetI, BottomSheetRefPropsI} from './BottomSheetInterface';
import {styles} from './BottomSheetStyles';
import {windowHeight} from '../../utils/globalFunctions';

export const BottomSheet = forwardRef<BottomSheetRefPropsI, BottomSheetI>(
  (
    {
      isVisible,
      handleDismiss,
      hasPanGesture = true,
      bottomSheetContent,
      bottomSheetContainerStyle,
    },
    ref,
  ) => {
    const gapOnTop = hasPanGesture ? 50 : 0;
    const MAX_TRANSLATE_Y = -windowHeight + gapOnTop;
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);

    const scrollTo = useCallback((destination: number) => {
      'worklet';

      // * toggle bottom sheet active based on destination
      active.value = destination !== 0;

      translateY.value = withTiming(destination);
    }, []);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useImperativeHandle(ref, () => ({scrollTo, isActive}), [
      scrollTo,
      isActive,
    ]);

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
          scrollTo(0);
        } else if (translateY.value < -windowHeight / 1.5) {
          scrollTo(MAX_TRANSLATE_Y);
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
      // * for testing
      // scrollTo(isVisible ? -windowHeight / 3 : 0);
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
  },
);

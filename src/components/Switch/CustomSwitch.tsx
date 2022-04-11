import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {COLORS} from '../../constants/colors';
import {CustomSwitchI} from '../../interfaces/SwitchInterface';
import {styles} from './SwitchStyles';

export const CustomSwitch = ({
  width = 70,
  height = 30,
  thumbWidth = 25,
  thumbHeight = 25,
  horizontalMargin = 2,
  disabled = false,
  trackColor = {true: COLORS.purple_rgba(0.8), false: COLORS.black_rgba(0.1)},
  activeThumbColor = '#fff',
  inactiveThumbColor = '#fff',
  value,
  handleToggle,
}: CustomSwitchI) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const switchOffset = useSharedValue(0);
  const toggle = () => setIsEnabled(prevValue => !prevValue);

  const switchAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX:
            value || isEnabled
              ? withTiming(width - (thumbWidth + horizontalMargin * 2), {
                  duration: 300,
                })
              : withTiming(0, {duration: 300}),
        },
      ],
    };
  });

  const toggleSwitch = () => {
    if (!disabled) {
      if (handleToggle) {
        handleToggle();
      } else {
        toggle();
      }
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={toggleSwitch}
      style={[
        styles.switchContainer,
        {
          width: width,
          height: height,
          backgroundColor: value ? trackColor?.true : trackColor?.false,
        },
      ]}>
      <Animated.View
        style={[
          styles.thumbStyle,
          switchAnimatedStyles,
          {
            width: thumbWidth,
            height: thumbHeight,
            backgroundColor: value ? activeThumbColor : inactiveThumbColor,
            marginHorizontal: horizontalMargin,
          },
        ]}
      />
    </TouchableOpacity>
  );
};

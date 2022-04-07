import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './ButtonStyles';

interface Props {
  disabled?: boolean;
  bgColor?: string;
  borderColor?: string;
  text: string;
  textColor?: string;
  handlePress?: () => void;
}

export const Button = ({
  disabled = false,
  bgColor = '#0D0113',
  borderColor = '#0D0113',
  text = 'Button',
  textColor = '#fff',
  handlePress,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        // console.log("Button clicked!");
        if (!disabled && handlePress) {
          handlePress();
        }
      }}
      style={[
        styles.buttonWrapper,
        {
          backgroundColor:
            bgColor && !disabled ? bgColor : 'rgba(13, 1, 19, 0.2)',
          borderColor:
            borderColor && !disabled
              ? borderColor
              : disabled
              ? 'transparent'
              : '#0D0113',
        },
      ]}
      disabled={disabled}>
      <Text
        style={[
          styles.buttonText,
          {
            color: textColor ?? '#fff',
          },
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

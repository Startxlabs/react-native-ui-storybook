import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonI} from './ButtonInterface';
import styles from './ButtonStyles';

export const Button = ({
  disabled = false,
  text = 'Button',
  buttonContainerStyle = {},
  buttonTextStyle = {},
  handlePress,
}: ButtonI) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        if (!disabled && handlePress) {
          handlePress();
        }
      }}
      style={[styles.buttonWrapper, buttonContainerStyle]}
      disabled={disabled}>
      <Text style={[styles.buttonText, buttonTextStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

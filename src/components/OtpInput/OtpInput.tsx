import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {COLORS} from '../../constants/colors';
import {OtpInputI} from './OtpInputInterface';

export const OtpInput = React.forwardRef(
  (
    {
      value,
      textInputFocus,
      textInputBlur,
      onSubmitEditing = () => {},
      onChangeText = () => {},
      onKeyPress = () => {},
      inputStatusType = 'default',
    }: OtpInputI,
    ref: any,
  ) => {
    const [isInputFocused, setIsInputFocused] = useState(false);

    // border color for otp input
    let bColor = {borderColor: COLORS.black_rgba(0.3)};
    let fontColor = {color: COLORS.black_rgba(0.5)};

    if (isInputFocused) {
      bColor.borderColor = COLORS.purple_rgba(0.7);
      fontColor = {color: COLORS.black_rgba(1)};
    }

    if (['error', 'success'].includes(inputStatusType)) {
      bColor.borderColor =
        inputStatusType === 'error' ? COLORS.danger : COLORS.success;
    }

    return (
      <>
        <TextInput
          style={[styles.otpInputBox, bColor, fontColor]}
          keyboardType={'numeric'}
          returnKeyType={'next'}
          textAlign={'center'}
          ref={ref}
          value={value}
          onFocus={event => {
            setIsInputFocused(true);
            textInputFocus(event);
          }}
          onBlur={event => {
            setIsInputFocused(false);
            textInputBlur(event);
          }}
          onSubmitEditing={event => onSubmitEditing(event)}
          onChangeText={text => onChangeText(text)}
          onKeyPress={nativeEvent => onKeyPress(nativeEvent)}
        />
      </>
    );
  },
);

const styles = StyleSheet.create({
  otpInputBox: {
    width: 48,
    height: 52,
    borderRadius: 12,
    borderWidth: 0.5,
    marginHorizontal: 4,
  },
});

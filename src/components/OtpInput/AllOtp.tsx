import React, {RefObject, useEffect, useRef, useState} from 'react';
import {Keyboard, TextInput, View} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import {OtpInput} from '.';
import {OtpI} from './OtpInputInterface';

export const AllOtp = ({inputStatusType, onSubmit}: OtpI) => {
  const otpInputRef: Array<RefObject<any>> = [
    useRef<TextInput>(),
    useRef<TextInput>(),
    useRef<TextInput>(),
    useRef<TextInput>(),
    useRef<TextInput>(),
    useRef<TextInput>(),
  ];

  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  useEffect(() => {
    if (onSubmit) {
      onSubmit(otp);
    }
  }, [otp]);

  const handleChange = (index: number, text: string) => {
    let arr = [...otp];
    arr[index] = text[text.length - 1];
    setOtp([...arr]);

    if (text.length > 0) {
      switch (index) {
        case 5:
          Keyboard.dismiss();
          break;
        case index:
          otpInputRef[index + 1].current?.focus();
          break;
      }
    }
  };

  const handleJumpCursor = (index: number, direction: string) => {
    if (index === 0 && direction === 'prev') return;
    if (index === 5 && direction === 'next') return;

    switch (direction) {
      case 'next':
        otpInputRef[index + 1]?.current.focus?.();
        break;
      case 'prev':
        otpInputRef[index - 1]?.current.focus?.();
        break;
      default:
        break;
    }
  };

  const goBack = (index: number) => {
    if (index === 0) {
      return;
    }

    otpInputRef[index - 1].current?.focus();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      {otp.map((item, index) => {
        let ref = otpInputRef[index];

        return (
          <OtpInput
            key={uuidv4()}
            ref={ref}
            value={item}
            textInputFocus={() => {}}
            textInputBlur={() => {}}
            onChangeText={text => handleChange(index, text)}
            onSubmitEditing={() => handleJumpCursor(index, 'next')}
            onKeyPress={() => goBack(index)}
            inputStatusType={inputStatusType}
          />
        );
      })}
    </View>
  );
};

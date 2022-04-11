import React, {forwardRef, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../constants/colors';
import {KEYBOARD_TYPE} from '../../enums/emuns';
import {InputI} from '../../interfaces/InputInterface';
import {getDefaultInputProps} from '../../utils/globalFunctions';
import InlineMessage from './InlineMessage';
import {styles} from './InputStyles';

export const Input = forwardRef<HTMLInputElement, InputI>(
  (
    {
      label,
      disabled,
      inputType,
      inputStatus,
      inputContainerStyle,
      inputTextStyle,
      message,
      onFocus,
      textInputProps,
      hasMessageIcon = true,
      isMessageRight = false,
      ...props
    },
    ref: any,
  ) => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [showISDPicker, setShowISDPicker] = React.useState(false);
    const [secret, toggleSecret] = React.useState(true);
    const [selectedIsd, setSelectedIsd] = React.useState('+61');

    let borderColor = {borderColor: COLORS.black_rgba(0.3)};

    // change border color based on input status
    switch (inputStatus) {
      case 'success':
        borderColor.borderColor = COLORS.success;
        break;
      case 'error':
        borderColor.borderColor = COLORS.danger;
        break;
      default:
        borderColor.borderColor = COLORS.black_rgba(0.3);
        break;
    }

    // change border color on focus
    if (isInputFocused) {
      borderColor.borderColor = COLORS.purple_rgba(0.7);
    }

    // render input field based on keyboard type
    switch (inputType) {
      case KEYBOARD_TYPE.PASSWORD_TYPE:
        return (
          <View style={styles.root}>
            <View
              style={[styles.inputContainer, inputContainerStyle, borderColor]}>
              <TextInput
                ref={ref}
                {...getDefaultInputProps(inputType, isInputFocused)}
                style={[styles.inputText, inputTextStyle]}
                secureTextEntry={secret}
                {...textInputProps}
                onFocus={() => {
                  onFocus?.();
                  setIsInputFocused(true);
                }}
                onBlur={() => {
                  setIsInputFocused(false);
                }}
                {...props}
              />
            </View>
            {message ? (
              <InlineMessage
                message={message}
                style={{
                  color:
                    inputStatus === 'error' ? COLORS.danger : COLORS.success,
                }}
                inputStatus={inputStatus}
                hasMessageIcon={hasMessageIcon}
                isMessageRight={isMessageRight}
              />
            ) : null}
          </View>
        );
      default: {
        let textAreaStyle = {};
        if (inputType === KEYBOARD_TYPE.DESCRIPTION_TYPE) {
          textAreaStyle = {
            textAlignVertical: 'top',
          };
        }

        return (
          <View style={styles.root}>
            <View
              style={[
                styles.inputContainer,
                inputContainerStyle,
                borderColor,
                inputType === KEYBOARD_TYPE.DESCRIPTION_TYPE && styles.textArea,
              ]}>
              {inputType === KEYBOARD_TYPE.PHONE_NUMBER_TYPE && (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    if (disabled) {
                      setShowISDPicker(true);
                    }
                  }}
                  style={styles.isdContainer}>
                  <Text style={styles.isdText}>{selectedIsd}</Text>
                  <Icon
                    name="angle-down"
                    size={15}
                    color={COLORS.black_rgba(0.4)}
                  />
                  <View style={styles.line} />
                </TouchableOpacity>
              )}
              <TextInput
                ref={ref}
                {...getDefaultInputProps(inputType, isInputFocused)}
                style={[
                  styles.inputText,
                  inputTextStyle,
                  textAreaStyle,
                  inputType === KEYBOARD_TYPE.PHONE_NUMBER_TYPE && {
                    paddingLeft: 80,
                  },
                ]}
                {...textInputProps}
                onFocus={() => {
                  onFocus?.();
                  setIsInputFocused(true);
                }}
                onBlur={() => {
                  setIsInputFocused(false);
                }}
                {...props}
              />
            </View>
            {message ? (
              <InlineMessage
                message={message}
                style={{
                  color:
                    inputStatus === 'error' ? COLORS.danger : COLORS.success,
                }}
                inputStatus={inputStatus}
                hasMessageIcon={hasMessageIcon}
                isMessageRight={isMessageRight}
              />
            ) : null}
          </View>
        );
      }
    }
  },
);

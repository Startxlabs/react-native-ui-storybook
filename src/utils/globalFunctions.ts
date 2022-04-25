import { Dimensions, Platform } from "react-native";
import { COLORS } from "../constants/colors";
import { KEYBOARD_ACTUAL_TYPE, KEYBOARD_TYPE } from "../enums/emuns";

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const isIos = () => {
  return Platform.OS === "ios";
};

export const isAndroid = () => {
  return Platform.OS === "android";
};

export const getDefaultInputProps = (inputType: any, isInputFocused: boolean) => {
  let defaultType: any = {
    keyboardType: inputType
      ? KEYBOARD_ACTUAL_TYPE[inputType]
      : KEYBOARD_ACTUAL_TYPE[KEYBOARD_TYPE.NAME_TYPE],
    blurOnSubmit: false,
    placeholderTextColor: isInputFocused
      ? COLORS.black_rgba(0.9)
      : COLORS.black_rgba(0.5),
    selectionColor: isInputFocused
      ? COLORS.black_rgba(0.9)
      : COLORS.black_rgba(0.5),
    multiline: false,
    allowFontScaling: false,
  };

  switch (inputType) {
    case KEYBOARD_TYPE.DESCRIPTION_TYPE:
      defaultType.maxLength = 500;
      defaultType.multiline = true;
      defaultType.autoCapitalize = 'none';
      break;
    case KEYBOARD_TYPE.ADDRESS_TYPE:
      defaultType.maxLength = 200;
      defaultType.autoCapitalize = 'none';
      break;
    case KEYBOARD_TYPE.PASSWORD_TYPE:
      defaultType.maxLength = 50;
      defaultType.autoCapitalize = 'none';
      break;
    case KEYBOARD_TYPE.NUMBER_TYPE:
      defaultType.maxLength = 30;
      break;
    case KEYBOARD_TYPE.DECIMAL_NUMBER_TYPE:
      defaultType.maxLength = 30;
      break;
    case KEYBOARD_TYPE.NUMERIC_TYPE:
      defaultType.maxLength = 100;
      break;
    case KEYBOARD_TYPE.EMAIL_TYPE:
      defaultType.maxLength = 150;
      defaultType.autoCapitalize = 'none';
      break;
    case KEYBOARD_TYPE.PHONE_NUMBER_TYPE:
      defaultType.maxLength = 30;
      break;
    default:
      defaultType.maxLength = 100;
      defaultType.autoCapitalize = 'none';
      break;
  }

  return defaultType;
};

export const padNumber = (num: number) => {
  return num.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
}

/**
 * * Format time
 * @params time (in seconds)
 */

export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60)
  ;
  const seconds = padNumber(time % 60);

  return `${minutes}:${seconds}`;
} 

import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type inputStatusType = 'success' | 'error' | 'default';
export interface InputI {
  isFloating?: boolean;
  label?: string;
  disabled?: boolean;
  inputStatus?: inputStatusType;
  inputType?: string;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputTextStyle?: StyleProp<TextStyle>;
  message?: string;
  textInputProps?: object;
  hasMessageIcon?: boolean;
  isMessageRight?: boolean;
  onFocus?: () => void;
};

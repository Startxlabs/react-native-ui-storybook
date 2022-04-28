import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type inputStatusType = 'success' | 'error' | 'default';
export interface InputI {
  showLabel?: boolean;
  isFloating?: boolean;
  label?: string;
  labelTextStyle?: StyleProp<TextStyle>;
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

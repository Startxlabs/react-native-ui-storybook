import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type inputStatusType = 'success' | 'error' | 'default';

export interface InputI {
  label?: string;
  disabled?: boolean;
  inputStatus?: inputStatusType;
  inputType?: string;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputTextStyle?: StyleProp<TextStyle>;
  message?: string;
  textInputProps?: object;
  onFocus?: () => void;
};

import { TextStyle, ViewStyle } from "react-native";

export interface ButtonI {
  disabled?: boolean;
  buttonContainerStyle?: ViewStyle;
  text: string;
  buttonTextStyle?: TextStyle;
  handlePress?: () => void;
}

export interface GradientButtonI {
  text: string;
  colorsArray?: Array<string>;
  handlePress?: () => void;
}
import { ViewStyle } from "react-native";

export interface RadioI {
  value: boolean;
  handleChange?: () => void;
  radioStyle?: ViewStyle;
  hasGradient?: boolean;
};

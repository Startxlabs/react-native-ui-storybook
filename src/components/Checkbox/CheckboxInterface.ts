import { ViewStyle } from "react-native";

export interface CheckboxI {
  value: boolean;
  handleChange?: () => void;
  checkboxStyle?: ViewStyle;
  hasGradient?: boolean;
};

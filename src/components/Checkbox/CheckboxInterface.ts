import { ViewStyle } from "react-native";

export interface CheckboxI {
  variant?: 'square' | 'circle';
  value: boolean;
  handleChange?: () => void;
  checkboxStyle?: ViewStyle;
  hasGradient?: boolean;
};

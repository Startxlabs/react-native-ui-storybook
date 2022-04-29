import { ViewStyle } from "react-native";

export interface BottomSheetI {
  isVisible?: boolean;
  handleDismiss?: () => void;
  hasPanGesture?: boolean;
  bottomSheetContent?: Function;
  bottomSheetContainerStyle?: ViewStyle;
};

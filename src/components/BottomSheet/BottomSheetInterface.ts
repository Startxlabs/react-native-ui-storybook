import { ViewStyle } from "react-native";

export interface BottomSheetI {
  isVisible?: boolean;
  handleDismiss?: () => void;
  hasPanGesture?: boolean;
  bottomSheetContent?: Function;
  bottomSheetContainerStyle?: ViewStyle;
};

export interface BottomSheetRefPropsI {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
}

import { TextStyle, ViewStyle } from "react-native";

export interface OnboardI {
  logo?: Function;
  renderSlides?: Function;
  slides?: Array<Record<string, any>>;
  sliderContainerStyle?: ViewStyle;
  defaultText?: string;
  defaultTextStyle?: TextStyle;
  renderPagination?: Function;
  paginationStyle?: ViewStyle;
  footer?: Function;
}

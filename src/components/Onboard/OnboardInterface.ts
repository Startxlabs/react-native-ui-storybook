import { TextStyle, ViewStyle } from "react-native";

export interface SlideI {
  image?: any;
  slideText?: string;
}

export interface OnboardI {
  logo?: Function;
  renderSlides?: Function;
  slides?: Array<SlideI>;
  sliderContainerStyle?: ViewStyle;
  sliderTextStyle?: TextStyle;
  defaultText?: string;
  defaultTextStyle?: TextStyle;
  renderPagination?: Function;
  paginationStyle?: ViewStyle;
  button?: Function;
  loginOption?: Function;
}
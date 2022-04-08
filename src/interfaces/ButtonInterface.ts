export interface ButtonI {
  disabled?: boolean;
  bgColor?: string;
  borderColor?: string;
  text: string;
  textColor?: string;
  handlePress?: () => void;
}

export interface GradientButtonI {
  text: string;
  colorsArray?: Array<string>;
  handlePress?: () => void;
}
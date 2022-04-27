export type trackColorType = {false: string, true: string};

export interface DefaultSwitchI {
  disabled?: boolean;
  trackColor?: trackColorType;
  activeThumbColor?: string;
  inactiveThumbColor?: string;
  ios_backgroundColor?: string;
  value?: boolean;
  handleToggle?: () => void;
};

export interface CustomSwitchI {
  width?: number;
  height?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  horizontalMargin?: number;
  disabled?: boolean;
  trackColor?: trackColorType;
  activeThumbColor?: string;
  inactiveThumbColor?: string;
  value?: boolean;
  handleToggle?: () => void;
};

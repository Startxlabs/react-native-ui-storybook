import { Animated, ViewStyle } from "react-native";


export interface ControlIconsI {
  playIcon?: Function;
  pauseIcon?: Function;
  backwardIcon?: Function;
  forwardIcon?: Function;
}

export interface CustomTrackStylePropsI {
  trackStyle?: ViewStyle;
  minimumTrackTintColor?: string;
  maximumTrackTintColor?: string;
}

export interface VideoPlayerI {
  videoSource: string;
  videoPlayerContainerStyles: ViewStyle;
  controlIcons?: ControlIconsI;
  sliderWrapperStyle?: (isFullScreen?: boolean) => ViewStyle;
  customThumbComponent?: (isBigThumb?: boolean) => JSX.Element;
  customTrackStyle?: CustomTrackStylePropsI;
}

export interface AdditionalControlPropsI {
  handleBackward: () => void;
  handlePlayPause: () => void;
  handleForward: () => void;
  handleToggleFullScreen: () => void;
  showSettings: boolean;
  handleCloseSettingsModal: (value: boolean) => void;
  showPlaybackModal: boolean;
  handleClosePlaybackModal: (value: boolean) => void;
  activeSpeed: number;
  handlePlaybackSpeed: (speed: number) => void;
  loop: boolean;
  handleLoop: (value: boolean) => void;
  controlIcons?: ControlIconsI;
}

export interface VideoPlayerControlsI {
  isPaused: boolean;
  isFullScreen: boolean;
  currentTime: number;
  totalDuration: number;
  handleToggleControls?: () => void;
  additionalControlProps: AdditionalControlPropsI;
}

export interface VideoSliderI {
  showControls?: boolean;
  value: Animated.Value | number | Array<number>;
  min: number;
  max: number;
  onValuesChangeStart?: (value: number | Array<number>) => void;
  onValuesChangeFinish?: (value: number | Array<number>) => void;
  disabled?: boolean;
  isBigThumb?: boolean;
  customThumbComponent?: (isBigThumb?: boolean) => JSX.Element;
  customTrackStyle?: CustomTrackStylePropsI;
}

export interface MoreSettingsPropsI {
  activeSpeed: number;
  handlePlaybackModal: (value: boolean) => void;
  loop: boolean;
  handleToggleLoop: (value: boolean) => void;
  isFullScreen: boolean;
}

export interface MoreSettingsI {
  showSettings?: boolean;
  onClose?: () => void;
  moreSettingsProps: MoreSettingsPropsI
}

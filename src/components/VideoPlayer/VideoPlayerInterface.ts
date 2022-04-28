import { ViewStyle } from "react-native";


export interface ControlIconsI {
  playIcon?: Function;
  pauseIcon?: Function;
  backwardIcon?: Function;
  forwardIcon?: Function;
}

export interface VideoPlayerI {
  videoSource: string;
  videoPlayerContainerStyles: ViewStyle;
  controlIcons?: ControlIconsI
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
  value: number;
  min: number;
  max: number;
  onValuesChangeStart?: (value: number) => void;
  onValuesChangeFinish?: (value: number) => void;
  disabled?: boolean;
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

import { ViewStyle } from "react-native";

export interface VideoPlayerI {
  videoSource: string;
  videoPlayerContainerStyles: ViewStyle;
};

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
}

export interface VideoPlayerControlsI {
  isPaused: boolean;
  isFullScreen?: boolean;
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
  sliderLength?: number;
  onValuesChangeStart?: () => void;
  onValuesChangeFinish?: (range: Array<number>) => void;
  enableOne?: boolean;
}

export interface MoreSettingsI {
  showSettings?: boolean;
  onClose?: () => void;
  handlePlaybackModal?: (value: boolean) => void;
}

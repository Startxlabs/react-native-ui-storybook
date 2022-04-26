import { ViewStyle } from "react-native";

export interface VideoPlayerI {
  videoSource: string;
  videoPlayerContainerStyles: ViewStyle;
};

export interface VideoPlayerControlsI {
  isPaused: boolean;
  isFullScreen?: boolean;
  currentTime: number;
  totalDuration: number;
  handleToggleControls?: () => void;
  handleBackward?: () => void;
  handlePlayPause?: () => void;
  handleForward?: () => void;
  handleToggleFullScreen?: () => void;
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

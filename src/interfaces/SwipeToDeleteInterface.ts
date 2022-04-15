import { PanGestureHandlerProps } from "react-native-gesture-handler";

export interface SwipeToDeleteI extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  item: any;
  onDelete?: () => void;
};

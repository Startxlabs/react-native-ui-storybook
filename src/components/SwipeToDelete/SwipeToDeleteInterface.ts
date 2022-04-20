import { PanGestureHandlerProps } from "react-native-gesture-handler";

export interface SwipeToDeleteI extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  item: any;
  hasEdit?: boolean;
  hasDelete?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
};

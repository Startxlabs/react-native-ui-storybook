import { ViewStyle } from "react-native";

export interface WeekViewI {
  initialDate?: Date;
  onDateChange?: (date: Date) => void;
  weekDaysContainerStyle?: ViewStyle;
};

export interface WeekDayI {
  formatted: string;
  date: Date;
  day: number;
};

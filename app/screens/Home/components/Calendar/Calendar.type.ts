import {SharedValue} from 'react-native-reanimated';

export interface DateI {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}
export interface DayComponentDateI {
  date: DateI;
}
export interface CalendarI {
  amountOfWeek: SharedValue<number>;
}

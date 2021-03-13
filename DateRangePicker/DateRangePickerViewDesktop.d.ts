/// <reference types="react" />
import { MuiStyles } from '@material-ui/core/styles';
import { DateRange } from './RangeTypes';
import { PickersCalendarProps } from '../DayPicker/PickersCalendar';
import { DateRangePickerDayProps } from '../DateRangePickerDay';
import { ExportedArrowSwitcherProps } from '../internal/pickers/PickersArrowSwitcher';
import { DateValidationProps } from '../internal/pickers/date-utils';
export interface ExportedDesktopDateRangeCalendarProps<TDate> {
    /**
     * The number of calendars that render on **desktop**.
     * @default 2
     */
    calendars?: 1 | 2 | 3;
    /**
     * Custom renderer for `<DateRangePicker />` days. @DateIOType
     * @example (date, DateRangePickerDayProps) => <DateRangePickerDay {...DateRangePickerDayProps} />
     */
    renderDay?: (date: TDate, DateRangePickerDayProps: DateRangePickerDayProps<TDate>) => JSX.Element;
}
interface DesktopDateRangeCalendarProps<TDate> extends ExportedDesktopDateRangeCalendarProps<TDate>, Omit<PickersCalendarProps<TDate>, 'renderDay' | 'onFocusedDayChange'>, DateValidationProps<TDate>, ExportedArrowSwitcherProps {
    date: DateRange<TDate | null>;
    changeMonth: (date: TDate) => void;
    currentlySelectingRangeEnd: 'start' | 'end';
}
declare type DateRangePickerViewDesktopClassKey = 'root' | 'rangeCalendarContainer' | 'calendar' | 'arrowSwitcher';
export declare const styles: MuiStyles<DateRangePickerViewDesktopClassKey>;
declare const _default: <TDate>(props: DesktopDateRangeCalendarProps<TDate>) => JSX.Element;
export default _default;

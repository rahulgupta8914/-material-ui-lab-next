import * as React from 'react';
import { MuiStyles } from '@material-ui/core/styles';
import { ExportedCalendarProps } from './PickersCalendar';
import { PickerOnChangeFn } from '../internal/pickers/hooks/useViews';
import { ExportedCalendarHeaderProps } from './PickersCalendarHeader';
import { ExportedYearPickerProps } from '../YearPicker/YearPicker';
import { DatePickerView } from '../internal/pickers/typings/Views';
export interface DayPickerProps<TDate, TView extends DatePickerView = DatePickerView> extends ExportedCalendarProps<TDate>, ExportedYearPickerProps<TDate>, ExportedCalendarHeaderProps<TDate> {
    className?: string;
    date: TDate | null;
    /**
     * Default calendar month displayed when `value={null}`.
     */
    defaultCalendarMonth?: TDate;
    /**
     * @default false
     */
    disableFuture?: boolean;
    /**
     * @default false
     */
    disablePast?: boolean;
    /**
     * Max selectable date. @DateIOType
     */
    maxDate?: TDate;
    /**
     * Min selectable date. @DateIOType
     */
    minDate?: TDate;
    /**
     * Callback fired on view change.
     */
    onViewChange?: (view: TView) => void;
    /**
     * Callback fired on date change
     */
    onChange: PickerOnChangeFn<TDate>;
    /**
     * Callback firing on month change. @DateIOType
     */
    onMonthChange?: (date: TDate) => void;
    /**
     * Initially open view.
     * @default 'date'
     */
    openTo?: TView;
    /**
     * Disable heavy animations.
     * @default typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent)
     */
    reduceAnimations?: boolean;
    /**
     * Component displaying when passed `loading` true.
     * @default () => <span data-mui-test="loading-progress">...</span>
     */
    renderLoading?: () => React.ReactNode;
    /**
     * Disable specific date. @DateIOType
     */
    shouldDisableDate?: (day: TDate) => boolean;
    /**
     * Controlled open view.
     */
    view?: TView;
    /**
     * Views for day picker.
     * @default ['year', 'date']
     */
    views?: TView[];
}
export declare type ExportedDayPickerProps<TDate> = Omit<DayPickerProps<TDate>, 'date' | 'view' | 'views' | 'openTo' | 'onChange' | 'changeView' | 'slideDirection' | 'currentMonth' | 'className'>;
export declare type DayPickerClassKey = 'root' | 'viewTransitionContainer' | 'fullHeightContainer';
export declare const styles: MuiStyles<DayPickerClassKey>;
export declare const defaultReduceAnimations: boolean;
declare const _default: <TDate>(props: DayPickerProps<TDate, DatePickerView> & React.RefAttributes<HTMLDivElement>) => JSX.Element;
/**
 *
 * API:
 *
 * - [DayPicker API](https://material-ui.com/api/day-picker/)
 */
export default _default;

import * as React from 'react';
import { StyleRules, Theme } from '@material-ui/core/styles';
import { PickersDayProps } from '../PickersDay/PickersDay';
import { PickerOnChangeFn } from '../internal/pickers/hooks/useViews';
import { SlideDirection, SlideTransitionProps } from './PickersSlideTransition';
export interface ExportedCalendarProps<TDate> extends Pick<PickersDayProps<TDate>, 'disableHighlightToday' | 'showDaysOutsideCurrentMonth' | 'allowSameDateSelection'> {
    /**
     * Calendar onChange.
     */
    onChange: PickerOnChangeFn<TDate>;
    /**
     * Custom renderer for day. Check the [PickersDay](https://material-ui.com/api/pickers-day/) component.
     */
    renderDay?: (day: TDate, selectedDates: Array<TDate | null>, DayComponentProps: PickersDayProps<TDate>) => JSX.Element;
    /**
     * Enables keyboard listener for moving between days in calendar.
     * Defaults to `true` unless the `ClockPicker` is used inside a `Static*` picker component.
     */
    allowKeyboardControl?: boolean;
    /**
     * If `true` renders `LoadingComponent` in calendar instead of calendar view.
     * Can be used to preload information and show it in calendar.
     * @default false
     */
    loading?: boolean;
    /**
     * Component displaying when passed `loading` true.
     * @default () => "..."
     */
    renderLoading?: () => React.ReactNode;
}
export interface PickersCalendarProps<TDate> extends ExportedCalendarProps<TDate> {
    date: TDate | [TDate | null, TDate | null] | null;
    isDateDisabled: (day: TDate) => boolean;
    slideDirection: SlideDirection;
    currentMonth: TDate;
    reduceAnimations: boolean;
    focusedDay: TDate | null;
    onFocusedDayChange: (newFocusedDay: TDate) => void;
    isMonthSwitchingAnimating: boolean;
    onMonthSwitchingAnimationEnd: () => void;
    TransitionProps?: Partial<SlideTransitionProps>;
    className?: string;
}
export declare type PickersCalendarClassKey = 'root' | 'loadingContainer' | 'weekContainer' | 'week' | 'daysHeader' | 'weekDayLabel';
export declare const styles: (theme: Theme) => StyleRules<PickersCalendarClassKey>;
declare const _default: <TDate>(props: PickersCalendarProps<TDate>) => JSX.Element;
export default _default;

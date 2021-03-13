import * as React from 'react';
import PropTypes from 'prop-types';
import { BasePickerProps } from '../internal/pickers/typings/BasePicker';
import { DateRangeInputProps } from './DateRangePickerInput';
import { DateRange, CurrentlySelectingRangeEndProps } from './RangeTypes';
import { ExportedDayPickerProps } from '../DayPicker/DayPicker';
import { ExportedDesktopDateRangeCalendarProps } from './DateRangePickerViewDesktop';
import { PickerSelectionState } from '../internal/pickers/hooks/usePickerState';
import { WrapperVariant } from '../internal/pickers/wrappers/Wrapper';
declare type BaseCalendarPropsToReuse<TDate> = Omit<ExportedDayPickerProps<TDate>, 'onYearChange' | 'renderDay'>;
export interface ExportedDateRangePickerViewProps<TDate> extends BaseCalendarPropsToReuse<TDate>, ExportedDesktopDateRangeCalendarProps<TDate>, Omit<BasePickerProps, 'value' | 'onChange'> {
    /**
     * If `true`, after selecting `start` date calendar will not automatically switch to the month of `end` date.
     * @default false
     */
    disableAutoMonthSwitching?: boolean;
}
interface DateRangePickerViewProps<TDate> extends CurrentlySelectingRangeEndProps, ExportedDateRangePickerViewProps<TDate> {
    open: boolean;
    startText: React.ReactNode;
    endText: React.ReactNode;
    isMobileKeyboardViewOpen: boolean;
    toggleMobileKeyboardView: () => void;
    DateInputProps: DateRangeInputProps;
    date: DateRange<TDate>;
    onDateChange: (date: DateRange<TDate>, currentWrapperVariant: WrapperVariant, isFinish?: PickerSelectionState) => void;
}
/**
 * @ignore - internal component.
 */
export declare function DateRangePickerView<TDate>(props: DateRangePickerViewProps<TDate>): JSX.Element;
export declare namespace DateRangePickerView {
    var propTypes: {
        calendars: PropTypes.Requireable<number>;
        disableAutoMonthSwitching: PropTypes.Requireable<boolean>;
    };
}
export {};

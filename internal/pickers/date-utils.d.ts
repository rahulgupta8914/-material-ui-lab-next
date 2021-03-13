import { RangeInput, NonEmptyDateRange, DateRange } from '../../DateRangePicker/RangeTypes';
import { ParsableDate } from './constants/prop-types';
import { DatePickerView } from './typings/Views';
import { MuiPickersAdapter } from './hooks/useUtils';
interface FindClosestDateParams<TDate> {
    date: TDate;
    utils: MuiPickersAdapter<TDate>;
    minDate: TDate;
    maxDate: TDate;
    disableFuture: boolean;
    disablePast: boolean;
    shouldDisableDate: (date: TDate) => boolean;
}
export declare const findClosestEnabledDate: <TDate>({ date, utils, minDate, maxDate, disableFuture, disablePast, shouldDisableDate, }: FindClosestDateParams<TDate>) => TDate | null;
export declare const isYearOnlyView: (views: readonly DatePickerView[]) => boolean;
export declare const isYearAndMonthViews: (views: readonly DatePickerView[]) => boolean;
export declare const getFormatAndMaskByViews: (views: readonly DatePickerView[], utils: MuiPickersAdapter<unknown>) => {
    mask: string;
    inputFormat: any;
    disableMaskedInput?: undefined;
} | {
    disableMaskedInput: boolean;
    inputFormat: any;
    mask?: undefined;
};
export declare function parsePickerInputValue(utils: MuiPickersAdapter, value: unknown): unknown;
export declare function parseRangeInputValue<TDate>(utils: MuiPickersAdapter, value?: RangeInput<TDate>): DateRange<TDate>;
export declare const isRangeValid: <TDate>(utils: MuiPickersAdapter<TDate>, range: DateRange<TDate> | null) => range is NonEmptyDateRange<TDate>;
export declare const isWithinRange: <TDate>(utils: MuiPickersAdapter<TDate>, day: TDate, range: DateRange<TDate> | null) => boolean;
export declare const isStartOfRange: <TDate>(utils: MuiPickersAdapter<TDate>, day: TDate, range: DateRange<TDate> | null) => boolean;
export declare const isEndOfRange: <TDate>(utils: MuiPickersAdapter<TDate>, day: TDate, range: DateRange<TDate> | null) => boolean;
export interface DateValidationProps<TDate> {
    /**
     * Min selectable date. @DateIOType
     * @default Date(1900-01-01)
     */
    minDate?: TDate;
    /**
     * Max selectable date. @DateIOType
     * @default Date(2099-31-12)
     */
    maxDate?: TDate;
    /**
     * Disable specific date. @DateIOType
     */
    shouldDisableDate?: (day: TDate) => boolean;
    /**
     * Disable past dates.
     * @default false
     */
    disablePast?: boolean;
    /**
     * Disable future dates.
     * @default false
     */
    disableFuture?: boolean;
}
export declare const validateDate: <TDate>(utils: MuiPickersAdapter<TDate>, value: unknown, { minDate, maxDate, disableFuture, shouldDisableDate, disablePast }: DateValidationProps<TDate>) => "invalidDate" | "shouldDisableDate" | "disableFuture" | "disablePast" | "minDate" | "maxDate" | null;
export declare type DateValidationError = ReturnType<typeof validateDate>;
declare type DateRangeValidationErrorValue = DateValidationError | 'invalidRange' | null;
export declare const validateDateRange: <TDate>(utils: MuiPickersAdapter<TDate>, value: RangeInput<TDate>, dateValidationProps: DateValidationProps<TDate>) => [DateRangeValidationErrorValue, DateRangeValidationErrorValue];
export declare type DateRangeValidationError = ReturnType<typeof validateDateRange>;
export {};

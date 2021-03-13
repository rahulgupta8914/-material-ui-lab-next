import { ParsableDate } from '../internal/pickers/constants/prop-types';
import { MuiPickersAdapter } from '../internal/pickers/hooks/useUtils';
import { DateValidationProps } from '../internal/pickers/date-utils';
import { TimeValidationProps } from '../internal/pickers/time-utils';
export declare function validateDateAndTime<TDate>(utils: MuiPickersAdapter<TDate>, value: ParsableDate<TDate>, { minDate, maxDate, disableFuture, shouldDisableDate, disablePast, ...timeValidationProps }: DateValidationProps<TDate> & TimeValidationProps<TDate>): "invalidDate" | "minTime" | "maxTime" | "shouldDisableTime-hours" | "shouldDisableTime-minutes" | "shouldDisableTime-seconds" | "shouldDisableDate" | "disableFuture" | "disablePast" | "minDate" | "maxDate" | null;
export declare type DateAndTimeValidationError = ReturnType<typeof validateDateAndTime>;

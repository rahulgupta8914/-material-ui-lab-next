import * as React from 'react';
import { SomeWrapper, PublicWrapperProps } from '../internal/pickers/wrappers/Wrapper';
import { RangeInput, AllSharedDateRangePickerProps } from './RangeTypes';
import { ValidationProps } from '../internal/pickers/hooks/useValidation';
import { ExportedDateRangePickerViewProps } from './DateRangePickerView';
import { ExportedDateRangePickerInputProps } from './DateRangePickerInput';
import { DateRangeValidationError } from '../internal/pickers/date-utils';
export interface BaseDateRangePickerProps<TDate> extends ExportedDateRangePickerViewProps<TDate>, ValidationProps<DateRangeValidationError, RangeInput<TDate>>, ExportedDateRangePickerInputProps {
    /**
     * Text for start input label and toolbar placeholder.
     * @default "Start"
     */
    startText?: React.ReactNode;
    /**
     * Text for end input label and toolbar placeholder.
     * @default "end"
     */
    endText?: React.ReactNode;
}
export declare type DateRangePickerComponent<TWrapper extends SomeWrapper> = (<TDate>(props: BaseDateRangePickerProps<TDate> & PublicWrapperProps<TWrapper> & AllSharedDateRangePickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes: unknown;
};
export declare const useDateRangeValidation: (value: RangeInput<unknown>, props: BaseDateRangePickerProps<any>) => ["invalidDate" | "shouldDisableDate" | "disableFuture" | "disablePast" | "minDate" | "maxDate" | "invalidRange" | null, "invalidDate" | "shouldDisableDate" | "disableFuture" | "disablePast" | "minDate" | "maxDate" | "invalidRange" | null];
export declare function makeDateRangePicker<TWrapper extends SomeWrapper>(name: string, Wrapper: TWrapper): DateRangePickerComponent<TWrapper>;

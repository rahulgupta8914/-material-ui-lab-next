import * as React from 'react';
import { MuiStyles } from '@material-ui/core/styles';
import { PickerOnChangeFn } from '../internal/pickers/hooks/useViews';
export interface ExportedYearPickerProps<TDate> {
    /**
     * Callback firing on year change @DateIOType.
     */
    onYearChange?: (date: TDate) => void;
    /**
     * Disable specific years dynamically.
     * Works like `shouldDisableDate` but for year selection view @DateIOType.
     */
    shouldDisableYear?: (day: TDate) => boolean;
}
export interface YearPickerProps<TDate> extends ExportedYearPickerProps<TDate> {
    allowKeyboardControl?: boolean;
    onFocusedDayChange?: (day: TDate) => void;
    date: TDate | null;
    disableFuture?: boolean | null;
    disablePast?: boolean | null;
    isDateDisabled: (day: TDate) => boolean;
    maxDate: TDate;
    minDate: TDate;
    onChange: PickerOnChangeFn<TDate>;
    className?: string;
}
export declare type YearPickerClassKey = 'root';
export declare const styles: MuiStyles<YearPickerClassKey>;
declare const _default: <TDate>(props: YearPickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element;
/**
 *
 * API:
 *
 * - [YearPicker API](https://material-ui.com/api/year-picker/)
 */
export default _default;

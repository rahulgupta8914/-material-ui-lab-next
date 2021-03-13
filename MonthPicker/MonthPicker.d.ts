import * as React from 'react';
import { MuiStyles } from '@material-ui/core/styles';
import { PickerOnChangeFn } from '../internal/pickers/hooks/useViews';
export interface MonthPickerProps<TDate> {
    /** Date value for the MonthPicker */
    date: TDate | null;
    /** Minimal selectable date. */
    minDate: TDate;
    /** Maximal selectable date. */
    maxDate: TDate;
    /** Callback fired on date change. */
    onChange: PickerOnChangeFn<TDate>;
    /** If `true` past days are disabled. */
    disablePast?: boolean | null;
    /** If `true` future days are disabled. */
    disableFuture?: boolean | null;
    className?: string;
    onMonthChange?: (date: TDate) => void | Promise<void>;
}
export declare type MonthPickerClassKey = 'root';
export declare const styles: MuiStyles<MonthPickerClassKey>;
declare const _default: <TDate>(props: MonthPickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element;
/**
 *
 * API:
 *
 * - [MonthPicker API](https://material-ui.com/api/month-picker/)
 */
export default _default;

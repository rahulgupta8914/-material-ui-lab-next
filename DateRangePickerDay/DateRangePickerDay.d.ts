import * as React from 'react';
import { PickersDayProps } from '../PickersDay/PickersDay';
export interface DateRangePickerDayProps<TDate> extends PickersDayProps<TDate> {
    /**
     * Set to `true` if the `day` is in a highlighted date range.
     */
    isHighlighting: boolean;
    /**
     * Set to `true` if the `day` is the end of a highlighted date range.
     */
    isEndOfHighlighting: boolean;
    /**
     * Set to `true` if the `day` is the start of a highlighted date range.
     */
    isStartOfHighlighting: boolean;
    /**
     * Set to `true` if the `day` is in a preview date range.
     */
    isPreviewing: boolean;
    /**
     * Set to `true` if the `day` is the start of a highlighted date range.
     */
    isEndOfPreviewing: boolean;
    /**
     * Set to `true` if the `day` is the end of a highlighted date range.
     */
    isStartOfPreviewing: boolean;
}
declare const _default: <TDate>(props: DateRangePickerDayProps<TDate> & React.RefAttributes<HTMLButtonElement>) => JSX.Element;
/**
 *
 * API:
 *
 * - [DateRangePickerDay API](https://material-ui.com/api/date-range-picker-day/)
 */
export default _default;

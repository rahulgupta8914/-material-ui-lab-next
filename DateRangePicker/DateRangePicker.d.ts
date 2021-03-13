/// <reference types="react" />
/**
 *
 * Demos:
 *
 * - [Date Range Picker](https://material-ui.com/components/date-range-picker/)
 *
 * API:
 *
 * - [DateRangePicker API](https://material-ui.com/api/date-range-picker/)
 */
declare const DateRangePicker: import("./makeDateRangePicker").DateRangePickerComponent<import("react").FC<import("../internal/pickers/wrappers/ResponsiveWrapper").ResponsiveWrapperProps & import("../internal/pickers/wrappers/WrapperProps").PrivateWrapperProps>>;
export declare type DateRangePickerProps = React.ComponentProps<typeof DateRangePicker>;
export declare type DateRange<T> = import('./RangeTypes').DateRange<T>;
export default DateRangePicker;

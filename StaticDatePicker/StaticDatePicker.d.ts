/// <reference types="react" />
import { DatePickerGenericComponent } from '../DatePicker/DatePicker';
/**
 *
 * API:
 *
 * - [StaticDatePicker API](https://material-ui.com/api/static-date-picker/)
 */
declare const StaticDatePicker: DatePickerGenericComponent<import("react").FC<import("../internal/pickers/wrappers/WrapperProps").PrivateWrapperProps & import("../internal/pickers/wrappers/WrapperProps").StaticWrapperProps>>;
export declare type StaticDatePickerProps = React.ComponentProps<typeof StaticDatePicker>;
export default StaticDatePicker;

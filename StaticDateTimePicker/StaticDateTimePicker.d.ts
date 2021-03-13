/// <reference types="react" />
import { DateTimePickerGenericComponent } from '../DateTimePicker/DateTimePicker';
/**
 *
 * Demos:
 *
 * - [Date Time Picker](https://material-ui.com/components/date-time-picker/)
 *
 * API:
 *
 * - [StaticDateTimePicker API](https://material-ui.com/api/static-date-time-picker/)
 */
declare const StaticDateTimePicker: DateTimePickerGenericComponent<import("react").FC<import("../internal/pickers/wrappers/WrapperProps").PrivateWrapperProps & import("../internal/pickers/wrappers/WrapperProps").StaticWrapperProps>>;
export declare type StaticDateTimePickerProps = React.ComponentProps<typeof StaticDateTimePicker>;
export default StaticDateTimePicker;

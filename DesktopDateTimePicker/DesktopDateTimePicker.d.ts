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
 * - [DesktopDateTimePicker API](https://material-ui.com/api/desktop-date-time-picker/)
 */
declare const DesktopDateTimePicker: DateTimePickerGenericComponent<import("react").FC<import("../internal/pickers/wrappers/WrapperProps").PrivateWrapperProps & import("../internal/pickers/wrappers/WrapperProps").DesktopWrapperProps>>;
export declare type DesktopDateTimePickerProps = React.ComponentProps<typeof DesktopDateTimePicker>;
export default DesktopDateTimePicker;

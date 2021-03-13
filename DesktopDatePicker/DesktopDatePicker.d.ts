/// <reference types="react" />
import { DatePickerGenericComponent } from '../DatePicker/DatePicker';
/**
 *
 * API:
 *
 * - [DesktopDatePicker API](https://material-ui.com/api/desktop-date-picker/)
 */
declare const DesktopDatePicker: DatePickerGenericComponent<import("react").FC<import("../internal/pickers/wrappers/WrapperProps").PrivateWrapperProps & import("../internal/pickers/wrappers/WrapperProps").DesktopWrapperProps>>;
export declare type DesktopDatePickerProps = React.ComponentProps<typeof DesktopDatePicker>;
export default DesktopDatePicker;

/// <reference types="react" />
import { TimePickerGenericComponent } from '../TimePicker/TimePicker';
/**
 *
 * API:
 *
 * - [DesktopTimePicker API](https://material-ui.com/api/desktop-time-picker/)
 */
declare const DesktopTimePicker: TimePickerGenericComponent<import("react").FC<import("../internal/pickers/wrappers/WrapperProps").PrivateWrapperProps & import("../internal/pickers/wrappers/WrapperProps").DesktopWrapperProps>>;
export declare type DesktopTimePickerProps = React.ComponentProps<typeof DesktopTimePicker>;
export default DesktopTimePicker;

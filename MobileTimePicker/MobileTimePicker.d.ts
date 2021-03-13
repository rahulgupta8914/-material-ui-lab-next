/// <reference types="react" />
import { TimePickerGenericComponent } from '../TimePicker/TimePicker';
/**
 *
 * API:
 *
 * - [MobileTimePicker API](https://material-ui.com/api/mobile-time-picker/)
 */
declare const MobileTimePicker: TimePickerGenericComponent<import("react").FC<import("../internal/pickers/wrappers/WrapperProps").MobileWrapperProps & import("../internal/pickers/wrappers/WrapperProps").PrivateWrapperProps>>;
export declare type MobileTimePickerProps = React.ComponentProps<typeof MobileTimePicker>;
export default MobileTimePicker;

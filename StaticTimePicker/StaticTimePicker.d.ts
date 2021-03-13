/// <reference types="react" />
import { TimePickerGenericComponent } from '../TimePicker/TimePicker';
/**
 *
 * API:
 *
 * - [StaticTimePicker API](https://material-ui.com/api/static-time-picker/)
 */
declare const StaticTimePicker: TimePickerGenericComponent<import("react").FC<import("../internal/pickers/wrappers/WrapperProps").PrivateWrapperProps & import("../internal/pickers/wrappers/WrapperProps").StaticWrapperProps>>;
export declare type StaticTimePickerProps = React.ComponentProps<typeof StaticTimePicker>;
export default StaticTimePicker;

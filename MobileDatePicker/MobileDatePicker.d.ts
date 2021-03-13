/// <reference types="react" />
import { DatePickerGenericComponent } from '../DatePicker/DatePicker';
/**
 *
 * API:
 *
 * - [MobileDatePicker API](https://material-ui.com/api/mobile-date-picker/)
 */
declare const MobileDatePicker: DatePickerGenericComponent<import("react").FC<import("../internal/pickers/wrappers/WrapperProps").MobileWrapperProps & import("../internal/pickers/wrappers/WrapperProps").PrivateWrapperProps>>;
export declare type MobileDatePickerProps = React.ComponentProps<typeof MobileDatePicker>;
export default MobileDatePicker;

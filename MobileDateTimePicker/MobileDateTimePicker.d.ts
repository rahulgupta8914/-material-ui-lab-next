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
 * - [MobileDateTimePicker API](https://material-ui.com/api/mobile-date-time-picker/)
 */
declare const MobileDateTimePicker: DateTimePickerGenericComponent<import("react").FC<import("../internal/pickers/wrappers/WrapperProps").MobileWrapperProps & import("../internal/pickers/wrappers/WrapperProps").PrivateWrapperProps>>;
export declare type MobileDateTimePickerProps = React.ComponentProps<typeof MobileDateTimePicker>;
export default MobileDateTimePicker;

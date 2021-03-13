import * as React from 'react';
import { ParsableDate } from '../internal/pickers/constants/prop-types';
import { ExportedClockPickerProps } from '../ClockPicker/ClockPicker';
import { MuiPickersAdapter } from '../internal/pickers/hooks/useUtils';
import { TimeValidationError } from '../internal/pickers/time-utils';
import { WithViewsProps, AllSharedPickerProps } from '../internal/pickers/Picker/SharedPickerProps';
import { ValidationProps } from '../internal/pickers/hooks/useValidation';
import { OverrideParsableDateProps } from '../internal/pickers/hooks/date-helpers-hooks';
import { SomeWrapper } from '../internal/pickers/wrappers/Wrapper';
import { SharedPickerProps } from '../internal/pickers/Picker/makePickerWithState';
export interface BaseTimePickerProps<TDate = unknown> extends ValidationProps<TimeValidationError, ParsableDate<TDate>>, WithViewsProps<'hours' | 'minutes' | 'seconds'>, OverrideParsableDateProps<TDate, ExportedClockPickerProps<TDate>, 'minTime' | 'maxTime'> {
}
export declare function getTextFieldAriaText(value: ParsableDate, utils: MuiPickersAdapter): string;
declare function useInterceptProps({ ampm, inputFormat, maxTime: __maxTime, minTime: __minTime, openTo, views, ...other }: BaseTimePickerProps & AllSharedPickerProps): {
    onError?: ((reason: "invalidDate" | "minTime" | "maxTime" | "shouldDisableTime-hours" | "shouldDisableTime-minutes" | "shouldDisableTime-seconds" | null, value: unknown) => void) | undefined;
    shouldDisableTime?: ((timeValue: number, clockType: "hours" | "minutes" | "seconds") => boolean) | undefined;
    disableIgnoringDatePartForTimeValidation?: boolean | undefined;
    allowKeyboardControl?: boolean | undefined;
    ampmInClock?: boolean | undefined;
    getClockLabelText?: ((view: "hours" | "minutes" | "seconds", time: unknown, adapter: MuiPickersAdapter<unknown>) => string) | undefined;
    minutesStep?: number | undefined;
    value: any;
    onChange: (date: any, keyboardInputValue?: string | undefined) => void;
    disableCloseOnSelect?: boolean | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    onAccept?: ((date: any) => void) | undefined;
    onOpen?: (() => void) | undefined;
    onClose?: (() => void) | undefined;
    open?: boolean | undefined;
    showToolbar?: boolean | undefined;
    orientation?: "portrait" | "landscape" | undefined;
    ToolbarComponent?: React.ComponentType<import("../internal/pickers/typings/BasePicker").ToolbarComponentProps<unknown, import("../internal/pickers/typings/Views").AllAvailableViews>> | undefined;
    toolbarTitle?: React.ReactNode;
    toolbarPlaceholder?: React.ReactNode;
    toolbarFormat?: string | undefined;
    className?: string | undefined;
    label?: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined;
    mask: string;
    ref?: React.Ref<HTMLInputElement> | undefined;
    InputProps?: Partial<import("@material-ui/core").InputProps> | Partial<import("@material-ui/core").FilledInputProps> | Partial<import("@material-ui/core").OutlinedInputProps> | undefined;
    ignoreInvalidInputs?: boolean | undefined;
    renderInput: (props: import("@material-ui/core").TextFieldProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    openPickerIcon: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | JSX.Element | null;
    acceptRegex: RegExp;
    InputAdornmentProps?: Partial<import("@material-ui/core").InputAdornmentProps<"div", {}>> | undefined;
    OpenPickerButtonProps?: Partial<import("@material-ui/core").IconButtonProps<"button", {}>> | undefined;
    rifmFormatter?: ((str: string) => string) | undefined;
    disableOpenPicker?: boolean | undefined;
    disableMaskedInput: boolean;
    getOpenDialogAriaText: ((value: unknown, utils: MuiPickersAdapter<unknown>) => string) | typeof getTextFieldAriaText;
    views: ("hours" | "minutes" | "seconds")[];
    openTo: "hours" | "minutes" | "seconds";
    minTime: unknown;
    maxTime: unknown;
    ampm: boolean;
    inputFormat: string;
};
export declare const timePickerConfig: {
    useInterceptProps: typeof useInterceptProps;
    useValidation: (value: unknown, props: BaseTimePickerProps<unknown>) => "invalidDate" | "minTime" | "maxTime" | "shouldDisableTime-hours" | "shouldDisableTime-minutes" | "shouldDisableTime-seconds" | null;
    DefaultToolbarComponent: React.JSXElementConstructor<Omit<import("../DayPicker/DayPicker").ExportedDayPickerProps<unknown> & ExportedClockPickerProps<unknown> & {
        ampmInClock?: boolean | undefined;
        date: unknown;
        dateRangeIcon?: React.ReactNode;
        getMobileKeyboardInputViewButtonText?: (() => string) | undefined;
        hideTabs?: boolean | undefined;
        isLandscape: boolean;
        isMobileKeyboardViewOpen: boolean;
        onChange: import("../internal/pickers/hooks/useViews").PickerOnChangeFn<unknown>;
        openView: import("../internal/pickers/typings/Views").AllAvailableViews;
        setOpenView: (view: import("../internal/pickers/typings/Views").AllAvailableViews) => void;
        timeIcon?: React.ReactNode;
        toggleMobileKeyboardView: () => void;
        toolbarFormat?: string | undefined;
        toolbarPlaceholder?: React.ReactNode;
        toolbarTitle?: React.ReactNode;
        views: import("../internal/pickers/typings/Views").AllAvailableViews[];
    } & {
        classes: import("@material-ui/styles").ClassNameMap<import("./TimePickerToolbar").TimePickerToolbarClassKey>;
    } & {
        children?: React.ReactNode;
    }, "classes"> & import("@material-ui/styles").StyledComponentProps<import("./TimePickerToolbar").TimePickerToolbarClassKey> & object>;
};
export declare type TimePickerGenericComponent<TWrapper extends SomeWrapper> = (<TDate>(props: BaseTimePickerProps<TDate> & SharedPickerProps<TDate, TWrapper>) => JSX.Element) & {
    propTypes?: any;
};
/**
 *
 * Demos:
 *
 * - [Time Picker](https://material-ui.com/components/time-picker/)
 *
 * API:
 *
 * - [TimePicker API](https://material-ui.com/api/time-picker/)
 */
declare const TimePicker: TimePickerGenericComponent<React.FC<import("../internal/pickers/wrappers/ResponsiveWrapper").ResponsiveWrapperProps & import("../internal/pickers/wrappers/WrapperProps").PrivateWrapperProps>>;
export declare type TimePickerProps = React.ComponentProps<typeof TimePicker>;
export default TimePicker;

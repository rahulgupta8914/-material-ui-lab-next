import * as React from 'react';
import { ExportedClockPickerProps } from '../ClockPicker/ClockPicker';
import { OverrideParsableDateProps } from '../internal/pickers/hooks/date-helpers-hooks';
import { ExportedDayPickerProps } from '../DayPicker/DayPicker';
import { SharedPickerProps } from '../internal/pickers/Picker/makePickerWithState';
import { SomeWrapper } from '../internal/pickers/wrappers/Wrapper';
import { WithViewsProps, AllSharedPickerProps } from '../internal/pickers/Picker/SharedPickerProps';
import { DateAndTimeValidationError } from './date-time-utils';
import { ValidationProps } from '../internal/pickers/hooks/useValidation';
import { ParsableDate } from '../internal/pickers/constants/prop-types';
declare type DateTimePickerViewsProps<TDate> = OverrideParsableDateProps<TDate, ExportedClockPickerProps<TDate> & ExportedDayPickerProps<TDate>, 'minDate' | 'maxDate' | 'minTime' | 'maxTime'>;
export interface BaseDateTimePickerProps<TDate> extends WithViewsProps<'year' | 'date' | 'month' | 'hours' | 'minutes'>, ValidationProps<DateAndTimeValidationError, ParsableDate>, DateTimePickerViewsProps<TDate> {
    /**
     * To show tabs.
     */
    hideTabs?: boolean;
    /**
     * Date tab icon.
     */
    dateRangeIcon?: React.ReactNode;
    /**
     * Time tab icon.
     */
    timeIcon?: React.ReactNode;
    /**
     * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
     */
    minDateTime?: ParsableDate<TDate>;
    /**
     * Minimal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
     */
    maxDateTime?: ParsableDate<TDate>;
    /**
     * Date format, that is displaying in toolbar.
     */
    toolbarFormat?: string;
}
declare function useInterceptProps({ ampm, inputFormat, maxDate: __maxDate, maxDateTime: __maxDateTime, maxTime: __maxTime, minDate: __minDate, minDateTime: __minDateTime, minTime: __minTime, openTo, orientation, views, ...other }: BaseDateTimePickerProps<unknown> & AllSharedPickerProps): {
    /**
     * To show tabs.
     */
    hideTabs?: boolean | undefined;
    /**
     * Date tab icon.
     */
    dateRangeIcon?: React.ReactNode;
    /**
     * Time tab icon.
     */
    timeIcon?: React.ReactNode;
    toolbarFormat?: string | undefined;
    onError?: ((reason: "invalidDate" | "minTime" | "maxTime" | "shouldDisableTime-hours" | "shouldDisableTime-minutes" | "shouldDisableTime-seconds" | "shouldDisableDate" | "disableFuture" | "disablePast" | "minDate" | "maxDate" | null, value: unknown) => void) | undefined;
    shouldDisableTime?: ((timeValue: number, clockType: "hours" | "minutes" | "seconds") => boolean) | undefined;
    disableIgnoringDatePartForTimeValidation: boolean;
    loading?: boolean | undefined;
    onViewChange?: ((view: import("../internal/pickers/typings/Views").DatePickerView) => void) | undefined;
    disablePast?: boolean | undefined;
    disableFuture?: boolean | undefined;
    onMonthChange?: ((date: unknown) => void) | undefined;
    reduceAnimations?: boolean | undefined;
    components?: ({
        LeftArrowButton?: React.ElementType<any> | undefined;
        LeftArrowIcon?: React.ElementType<any> | undefined;
        RightArrowButton?: React.ElementType<any> | undefined;
        RightArrowIcon?: React.ElementType<any> | undefined;
    } & {
        SwitchViewButton?: React.ElementType<any> | undefined;
        SwitchViewIcon?: React.ElementType<any> | undefined;
    }) | undefined;
    componentsProps?: ({
        leftArrowButton?: any;
        rightArrowButton?: any;
    } & {
        switchViewButton?: any; /**
         * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
         */
    }) | undefined;
    shouldDisableDate?: ((day: unknown) => boolean) | undefined;
    defaultCalendarMonth?: unknown;
    disableHighlightToday?: boolean | undefined;
    showDaysOutsideCurrentMonth?: boolean | undefined;
    allowSameDateSelection: boolean;
    leftArrowButtonText?: string | undefined;
    rightArrowButtonText?: string | undefined;
    getViewSwitchingButtonText?: ((currentView: import("../internal/pickers/typings/Views").DatePickerView) => string) | undefined;
    renderLoading?: (() => React.ReactNode) | undefined;
    renderDay?: ((day: unknown, selectedDates: unknown[], DayComponentProps: import("../PickersDay/PickersDay").PickersDayProps<unknown>) => JSX.Element) | undefined;
    allowKeyboardControl?: boolean | undefined;
    onYearChange?: ((date: unknown) => void) | undefined;
    shouldDisableYear?: ((day: unknown) => boolean) | undefined;
    ampmInClock: boolean;
    getClockLabelText?: ((view: "hours" | "minutes" | "seconds", time: unknown, adapter: import("../internal/pickers/hooks/useUtils").MuiPickersAdapter<unknown>) => string) | undefined;
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
    showToolbar: boolean;
    ToolbarComponent?: React.ComponentType<import("../internal/pickers/typings/BasePicker").ToolbarComponentProps<unknown, import("../internal/pickers/typings/Views").AllAvailableViews>> | undefined;
    toolbarTitle?: React.ReactNode;
    toolbarPlaceholder?: React.ReactNode;
    className?: string | undefined;
    label?: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined;
    mask: string;
    ref?: React.Ref<HTMLInputElement> | undefined;
    InputProps?: Partial<import("@material-ui/core").InputProps> | Partial<import("@material-ui/core").FilledInputProps> | Partial<import("@material-ui/core").OutlinedInputProps> | undefined;
    ignoreInvalidInputs?: boolean | undefined;
    renderInput: (props: import("@material-ui/core").TextFieldProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    openPickerIcon?: React.ReactNode;
    acceptRegex: RegExp;
    InputAdornmentProps?: Partial<import("@material-ui/core").InputAdornmentProps<"div", {}>> | undefined;
    OpenPickerButtonProps?: Partial<import("@material-ui/core").IconButtonProps<"button", {}>> | undefined;
    rifmFormatter?: ((str: string) => string) | undefined;
    disableOpenPicker?: boolean | undefined;
    disableMaskedInput: boolean;
    getOpenDialogAriaText?: ((value: unknown, utils: import("../internal/pickers/hooks/useUtils").MuiPickersAdapter<unknown>) => string) | undefined;
    openTo: "hours" | "minutes" | "date" | "month" | "year";
    views: ("hours" | "minutes" | "date" | "month" | "year")[];
    ampm: boolean;
    orientation: "portrait";
    showTabs: boolean;
    minDate: unknown;
    minTime: unknown;
    maxDate: unknown;
    maxTime: unknown;
    inputFormat: string;
};
export declare const dateTimePickerConfig: {
    useInterceptProps: typeof useInterceptProps;
    useValidation: (value: unknown, props: BaseDateTimePickerProps<unknown>) => "invalidDate" | "minTime" | "maxTime" | "shouldDisableTime-hours" | "shouldDisableTime-minutes" | "shouldDisableTime-seconds" | "shouldDisableDate" | "disableFuture" | "disablePast" | "minDate" | "maxDate" | null;
    DefaultToolbarComponent: React.JSXElementConstructor<Omit<ExportedDayPickerProps<unknown> & ExportedClockPickerProps<unknown> & {
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
        classes: import("@material-ui/styles").ClassNameMap<"root" | "separator" | "penIcon" | "timeContainer" | "dateContainer" | "timeTypography">;
    } & {
        children?: React.ReactNode;
    }, "classes"> & import("@material-ui/styles").StyledComponentProps<"root" | "separator" | "penIcon" | "timeContainer" | "dateContainer" | "timeTypography"> & object>;
};
export declare type DateTimePickerGenericComponent<TWrapper extends SomeWrapper> = (<TDate>(props: BaseDateTimePickerProps<TDate> & SharedPickerProps<TDate, TWrapper>) => JSX.Element) & {
    propTypes?: unknown;
};
/**
 *
 * Demos:
 *
 * - [Date Time Picker](https://material-ui.com/components/date-time-picker/)
 *
 * API:
 *
 * - [DateTimePicker API](https://material-ui.com/api/date-time-picker/)
 */
declare const DateTimePicker: DateTimePickerGenericComponent<React.FC<import("../internal/pickers/wrappers/ResponsiveWrapper").ResponsiveWrapperProps & import("../internal/pickers/wrappers/WrapperProps").PrivateWrapperProps>>;
export declare type DateTimePickerProps = React.ComponentProps<typeof DateTimePicker>;
export default DateTimePicker;

/// <reference types="react" />
import type { WithViewsProps } from '../internal/pickers/Picker/SharedPickerProps';
import { OverrideParsableDateProps } from '../internal/pickers/hooks/date-helpers-hooks';
import type { ExportedDayPickerProps } from '../DayPicker/DayPicker';
import { SomeWrapper } from '../internal/pickers/wrappers/Wrapper';
import { ValidationProps } from '../internal/pickers/hooks/useValidation';
import { ParsableDate } from '../internal/pickers/constants/prop-types';
import { AllPickerProps, SharedPickerProps } from '../internal/pickers/Picker/makePickerWithState';
import { DateValidationError } from '../internal/pickers/date-utils';
export declare type DatePickerView = 'year' | 'date' | 'month';
export interface BaseDatePickerProps<TDate> extends WithViewsProps<'year' | 'date' | 'month'>, ValidationProps<DateValidationError, ParsableDate>, OverrideParsableDateProps<TDate, ExportedDayPickerProps<TDate>, 'minDate' | 'maxDate'> {
}
export declare const datePickerConfig: {
    useValidation: (value: unknown, props: BaseDatePickerProps<unknown>) => "invalidDate" | "shouldDisableDate" | "disableFuture" | "disablePast" | "minDate" | "maxDate" | null;
    DefaultToolbarComponent: import("react").JSXElementConstructor<Omit<ExportedDayPickerProps<unknown> & import("../ClockPicker/ClockPicker").ExportedClockPickerProps<unknown> & {
        ampmInClock?: boolean | undefined;
        date: unknown;
        dateRangeIcon?: import("react").ReactNode;
        getMobileKeyboardInputViewButtonText?: (() => string) | undefined;
        hideTabs?: boolean | undefined;
        isLandscape: boolean;
        isMobileKeyboardViewOpen: boolean;
        onChange: import("../internal/pickers/hooks/useViews").PickerOnChangeFn<unknown>;
        openView: import("../internal/pickers/typings/Views").AllAvailableViews;
        setOpenView: (view: import("../internal/pickers/typings/Views").AllAvailableViews) => void;
        timeIcon?: import("react").ReactNode;
        toggleMobileKeyboardView: () => void;
        toolbarFormat?: string | undefined;
        toolbarPlaceholder?: import("react").ReactNode;
        toolbarTitle?: import("react").ReactNode;
        views: import("../internal/pickers/typings/Views").AllAvailableViews[];
    } & {
        classes: import("@material-ui/styles").ClassNameMap<import("./DatePickerToolbar").DatePickerToolbarClassKey>;
    } & {
        children?: import("react").ReactNode;
    }, "classes"> & import("@material-ui/styles").StyledComponentProps<import("./DatePickerToolbar").DatePickerToolbarClassKey> & object>;
    useInterceptProps: ({ openTo, views, minDate: __minDate, maxDate: __maxDate, ...other }: AllPickerProps<BaseDatePickerProps<unknown>>) => {
        onError?: ((reason: "invalidDate" | "shouldDisableDate" | "disableFuture" | "disablePast" | "minDate" | "maxDate" | null, value: unknown) => void) | undefined;
        loading?: boolean | undefined;
        onViewChange?: ((view: import("../internal/pickers/typings/Views").DatePickerView) => void) | undefined;
        disablePast?: boolean | undefined;
        disableFuture?: boolean | undefined;
        onMonthChange?: ((date: unknown) => void) | undefined;
        reduceAnimations?: boolean | undefined;
        components?: ({
            LeftArrowButton?: import("react").ElementType<any> | undefined;
            LeftArrowIcon?: import("react").ElementType<any> | undefined;
            RightArrowButton?: import("react").ElementType<any> | undefined;
            RightArrowIcon?: import("react").ElementType<any> | undefined;
        } & {
            SwitchViewButton?: import("react").ElementType<any> | undefined;
            SwitchViewIcon?: import("react").ElementType<any> | undefined;
        }) | undefined;
        componentsProps?: ({
            leftArrowButton?: any;
            rightArrowButton?: any;
        } & {
            switchViewButton?: any;
        }) | undefined;
        shouldDisableDate?: ((day: unknown) => boolean) | undefined;
        defaultCalendarMonth?: unknown;
        disableHighlightToday?: boolean | undefined;
        showDaysOutsideCurrentMonth?: boolean | undefined;
        allowSameDateSelection?: boolean | undefined;
        leftArrowButtonText?: string | undefined;
        rightArrowButtonText?: string | undefined;
        getViewSwitchingButtonText?: ((currentView: import("../internal/pickers/typings/Views").DatePickerView) => string) | undefined;
        renderLoading?: (() => import("react").ReactNode) | undefined;
        renderDay?: ((day: unknown, selectedDates: unknown[], DayComponentProps: import("../PickersDay/PickersDay").PickersDayProps<unknown>) => JSX.Element) | undefined;
        allowKeyboardControl?: boolean | undefined;
        onYearChange?: ((date: unknown) => void) | undefined;
        shouldDisableYear?: ((day: unknown) => boolean) | undefined;
        value: any;
        onChange: (date: any, keyboardInputValue?: string | undefined) => void;
        disableCloseOnSelect?: boolean | undefined;
        inputFormat: any;
        disabled?: boolean | undefined;
        readOnly?: boolean | undefined;
        onAccept?: ((date: any) => void) | undefined;
        onOpen?: (() => void) | undefined;
        onClose?: (() => void) | undefined;
        open?: boolean | undefined;
        showToolbar?: boolean | undefined;
        orientation?: "portrait" | "landscape" | undefined;
        ToolbarComponent?: import("react").ComponentType<import("../internal/pickers/typings/BasePicker").ToolbarComponentProps<unknown, import("../internal/pickers/typings/Views").AllAvailableViews>> | undefined;
        toolbarTitle?: import("react").ReactNode;
        toolbarPlaceholder?: import("react").ReactNode;
        toolbarFormat?: string | undefined;
        className?: string | undefined;
        label?: string | number | boolean | {} | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactNodeArray | import("react").ReactPortal | null | undefined;
        mask: string;
        ref?: import("react").Ref<HTMLInputElement> | undefined;
        InputProps?: Partial<import("@material-ui/core").InputProps> | Partial<import("@material-ui/core").FilledInputProps> | Partial<import("@material-ui/core").OutlinedInputProps> | undefined;
        ignoreInvalidInputs?: boolean | undefined;
        renderInput: (props: import("@material-ui/core").TextFieldProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        openPickerIcon?: import("react").ReactNode;
        acceptRegex?: RegExp | undefined;
        InputAdornmentProps?: Partial<import("@material-ui/core").InputAdornmentProps<"div", {}>> | undefined;
        OpenPickerButtonProps?: Partial<import("@material-ui/core").IconButtonProps<"button", {}>> | undefined;
        rifmFormatter?: ((str: string) => string) | undefined;
        disableOpenPicker?: boolean | undefined;
        disableMaskedInput?: boolean | undefined;
        getOpenDialogAriaText?: ((value: unknown, utils: import("../internal/pickers/hooks/useUtils").MuiPickersAdapter<unknown>) => string) | undefined;
        children?: import("react").ReactNode;
        views: ("date" | "month" | "year")[];
        openTo: "date" | "month" | "year";
        minDate: unknown;
        maxDate: unknown;
    } | {
        onError?: ((reason: "invalidDate" | "shouldDisableDate" | "disableFuture" | "disablePast" | "minDate" | "maxDate" | null, value: unknown) => void) | undefined;
        loading?: boolean | undefined;
        onViewChange?: ((view: import("../internal/pickers/typings/Views").DatePickerView) => void) | undefined;
        disablePast?: boolean | undefined;
        disableFuture?: boolean | undefined;
        onMonthChange?: ((date: unknown) => void) | undefined;
        reduceAnimations?: boolean | undefined;
        components?: ({
            LeftArrowButton?: import("react").ElementType<any> | undefined;
            LeftArrowIcon?: import("react").ElementType<any> | undefined;
            RightArrowButton?: import("react").ElementType<any> | undefined;
            RightArrowIcon?: import("react").ElementType<any> | undefined;
        } & {
            SwitchViewButton?: import("react").ElementType<any> | undefined;
            SwitchViewIcon?: import("react").ElementType<any> | undefined;
        }) | undefined;
        componentsProps?: ({
            leftArrowButton?: any;
            rightArrowButton?: any;
        } & {
            switchViewButton?: any;
        }) | undefined;
        shouldDisableDate?: ((day: unknown) => boolean) | undefined;
        defaultCalendarMonth?: unknown;
        disableHighlightToday?: boolean | undefined;
        showDaysOutsideCurrentMonth?: boolean | undefined;
        allowSameDateSelection?: boolean | undefined;
        leftArrowButtonText?: string | undefined;
        rightArrowButtonText?: string | undefined;
        getViewSwitchingButtonText?: ((currentView: import("../internal/pickers/typings/Views").DatePickerView) => string) | undefined;
        renderLoading?: (() => import("react").ReactNode) | undefined;
        renderDay?: ((day: unknown, selectedDates: unknown[], DayComponentProps: import("../PickersDay/PickersDay").PickersDayProps<unknown>) => JSX.Element) | undefined;
        allowKeyboardControl?: boolean | undefined;
        onYearChange?: ((date: unknown) => void) | undefined;
        shouldDisableYear?: ((day: unknown) => boolean) | undefined;
        value: any;
        onChange: (date: any, keyboardInputValue?: string | undefined) => void;
        disableCloseOnSelect?: boolean | undefined;
        inputFormat: any;
        disabled?: boolean | undefined;
        readOnly?: boolean | undefined;
        onAccept?: ((date: any) => void) | undefined;
        onOpen?: (() => void) | undefined;
        onClose?: (() => void) | undefined;
        open?: boolean | undefined;
        showToolbar?: boolean | undefined;
        orientation?: "portrait" | "landscape" | undefined;
        ToolbarComponent?: import("react").ComponentType<import("../internal/pickers/typings/BasePicker").ToolbarComponentProps<unknown, import("../internal/pickers/typings/Views").AllAvailableViews>> | undefined;
        toolbarTitle?: import("react").ReactNode;
        toolbarPlaceholder?: import("react").ReactNode;
        toolbarFormat?: string | undefined;
        className?: string | undefined;
        label?: string | number | boolean | {} | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactNodeArray | import("react").ReactPortal | null | undefined;
        mask?: string | undefined;
        ref?: import("react").Ref<HTMLInputElement> | undefined;
        InputProps?: Partial<import("@material-ui/core").InputProps> | Partial<import("@material-ui/core").FilledInputProps> | Partial<import("@material-ui/core").OutlinedInputProps> | undefined;
        ignoreInvalidInputs?: boolean | undefined;
        renderInput: (props: import("@material-ui/core").TextFieldProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        openPickerIcon?: import("react").ReactNode;
        acceptRegex?: RegExp | undefined;
        InputAdornmentProps?: Partial<import("@material-ui/core").InputAdornmentProps<"div", {}>> | undefined;
        OpenPickerButtonProps?: Partial<import("@material-ui/core").IconButtonProps<"button", {}>> | undefined;
        rifmFormatter?: ((str: string) => string) | undefined;
        disableOpenPicker?: boolean | undefined;
        disableMaskedInput: boolean;
        getOpenDialogAriaText?: ((value: unknown, utils: import("../internal/pickers/hooks/useUtils").MuiPickersAdapter<unknown>) => string) | undefined;
        children?: import("react").ReactNode;
        views: ("date" | "month" | "year")[];
        openTo: "date" | "month" | "year";
        minDate: unknown;
        maxDate: unknown;
    };
};
export declare type DatePickerGenericComponent<TWrapper extends SomeWrapper> = (<TDate>(props: BaseDatePickerProps<TDate> & SharedPickerProps<TDate, TWrapper>) => JSX.Element) & {
    propTypes?: any;
};
/**
 *
 * Demos:
 *
 * - [Date Picker](https://material-ui.com/components/date-picker/)
 *
 * API:
 *
 * - [DatePicker API](https://material-ui.com/api/date-picker/)
 */
declare const DatePicker: DatePickerGenericComponent<import("react").FC<import("../internal/pickers/wrappers/WrapperProps").MobileWrapperProps & import("../internal/pickers/wrappers/WrapperProps").PrivateWrapperProps>>;
export declare type DatePickerProps = React.ComponentProps<typeof DatePicker>;
export default DatePicker;

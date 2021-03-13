import * as React from 'react';
import { TextFieldProps as MuiTextFieldPropsType } from '@material-ui/core/TextField';
import { IconButtonProps } from '@material-ui/core/IconButton';
import { InputAdornmentProps } from '@material-ui/core/InputAdornment';
import { ParsableDate } from './constants/prop-types';
import { MuiPickersAdapter } from './hooks/useUtils';
export declare type MuiTextFieldProps = MuiTextFieldPropsType | Omit<MuiTextFieldPropsType, 'variant'>;
export interface DateInputProps<TInputValue = ParsableDate, TDateValue = unknown> {
    open: boolean;
    rawValue: TInputValue;
    inputFormat: string;
    onChange: (date: TDateValue, keyboardInputValue?: string) => void;
    openPicker: () => void;
    readOnly?: boolean;
    disabled?: boolean;
    validationError?: boolean;
    label?: MuiTextFieldProps['label'];
    InputProps?: MuiTextFieldProps['InputProps'];
    TextFieldProps?: Partial<MuiTextFieldProps>;
    onBlur?: () => void;
    ignoreInvalidInputs?: boolean;
    /**
     * The `renderInput` prop allows you to customize the rendered input.
     * The `props` argument of this render prop contains props of [TextField](https://material-ui.com/api/text-field/#textfield-api) that you need to forward.
     * Pay specific attention to the `ref` and `inputProps` keys.
     * @example ```jsx
     * renderInput={props => <TextField {...props} />}
     * ````
     */
    renderInput: (props: MuiTextFieldPropsType) => React.ReactElement;
    /**
     * Icon displaying for open picker button.
     */
    openPickerIcon?: React.ReactNode;
    /**
     * Custom mask. Can be used to override generate from format. (e.g. `__/__/____ __:__` or `__/__/____ __:__ _M`).
     */
    mask?: string;
    /**
     * Regular expression to detect "accepted" symbols.
     * @default /\dap/gi
     */
    acceptRegex?: RegExp;
    /**
     * Props to pass to keyboard input adornment.
     */
    InputAdornmentProps?: Partial<InputAdornmentProps>;
    /**
     * Props to pass to keyboard adornment button.
     */
    OpenPickerButtonProps?: Partial<IconButtonProps>;
    /**
     * Custom formatter to be passed into Rifm component.
     */
    rifmFormatter?: (str: string) => string;
    /**
     * Do not render open picker button (renders only text field with validation).
     * @default false
     */
    disableOpenPicker?: boolean;
    /**
     * Disable mask on the keyboard, this should be used rarely. Consider passing proper mask for your format.
     * @default false
     */
    disableMaskedInput?: boolean;
    /**
     * Get aria-label text for control that opens picker dialog. Aria-label text must include selected date. @DateIOType
     * @default (value, utils) => `Choose date, selected date is ${utils.format(utils.date(value), 'fullDate')}`
     */
    getOpenDialogAriaText?: (value: ParsableDate, utils: MuiPickersAdapter) => string;
    ref?: React.Ref<HTMLInputElement>;
}
export declare type ExportedDateInputProps<TInputValue, TDateValue> = Omit<DateInputProps<TInputValue, TDateValue>, 'openPicker' | 'inputValue' | 'onChange' | 'inputFormat' | 'validationError' | 'rawValue' | 'open' | 'TextFieldProps' | 'onBlur'>;
export interface DateInputRefs {
    inputRef?: React.Ref<HTMLInputElement>;
    containerRef?: React.Ref<HTMLDivElement>;
}
export declare const PureDateInput: React.ForwardRefExoticComponent<Pick<DateInputProps<unknown, unknown> & DateInputRefs, "label" | "mask" | "open" | "disabled" | "readOnly" | "onBlur" | "onChange" | "InputProps" | "openPicker" | "inputFormat" | "validationError" | "rawValue" | "TextFieldProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText" | keyof DateInputRefs> & React.RefAttributes<HTMLInputElement>>;

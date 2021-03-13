import * as React from 'react';
import { MuiStyles } from '@material-ui/core/styles';
import { RangeInput, DateRange, CurrentlySelectingRangeEndProps } from './RangeTypes';
import { DateRangeValidationError } from '../internal/pickers/date-utils';
import { DateInputProps, MuiTextFieldProps } from '../internal/pickers/PureDateInput';
export declare type DateRangePickerInputClassKey = 'root' | 'toLabelDelimiter';
export declare const styles: MuiStyles<DateRangePickerInputClassKey>;
export interface ExportedDateRangePickerInputProps {
    /**
     * The `renderInput` prop allows you to customize the rendered input.
     * The `startProps` and `endProps` arguments of this render prop contains props of [TextField](https://material-ui.com/api/text-field/#textfield-api),
     * that you need to forward to the range start/end inputs respectively.
     * Pay specific attention to the `ref` and `inputProps` keys.
     * @example
     * ```jsx
     * <DateRangePicker
     *  renderInput={(startProps, endProps) => (
     *   <React.Fragment>
     *     <TextField {...startProps} />
     *     <Box sx={{ mx: 2 }}> to </Box>
     *     <TextField {...endProps} />
     *   </React.Fragment>;
     *  )}
     * />
     * ````
     */
    renderInput: (startProps: MuiTextFieldProps, endProps: MuiTextFieldProps) => React.ReactElement;
}
export interface DateRangeInputProps extends ExportedDateRangePickerInputProps, CurrentlySelectingRangeEndProps, Omit<DateInputProps<RangeInput<any>, DateRange<any>>, 'validationError' | 'renderInput' | 'forwardedRef'> {
    startText: React.ReactNode;
    endText: React.ReactNode;
    forwardedRef?: React.Ref<HTMLDivElement>;
    containerRef?: React.Ref<HTMLDivElement>;
    validationError: DateRangeValidationError;
}
declare const _default: React.JSXElementConstructor<Omit<DateRangeInputProps & {
    classes: import("@material-ui/styles").ClassNameMap<DateRangePickerInputClassKey>;
} & {
    children?: React.ReactNode;
}, "classes"> & import("@material-ui/core/styles").StyledComponentProps<DateRangePickerInputClassKey> & object>;
export default _default;

import * as React from 'react';
import { MuiStyles } from '@material-ui/core/styles';
import { WrapperVariant } from '../wrappers/Wrapper';
import { DateInputPropsLike } from '../wrappers/WrapperProps';
import { PickerSelectionState } from '../hooks/usePickerState';
import { BasePickerProps, CalendarAndClockProps } from '../typings/BasePicker';
import { WithViewsProps } from './SharedPickerProps';
import { AllAvailableViews } from '../typings/Views';
export interface ExportedPickerProps<TView extends AllAvailableViews> extends Omit<BasePickerProps, 'value' | 'onChange'>, CalendarAndClockProps<unknown>, WithViewsProps<TView> {
    dateRangeIcon?: React.ReactNode;
    timeIcon?: React.ReactNode;
}
export interface PickerProps<TView extends AllAvailableViews, TDateValue = any> extends ExportedPickerProps<TView> {
    isMobileKeyboardViewOpen: boolean;
    toggleMobileKeyboardView: () => void;
    DateInputProps: DateInputPropsLike;
    date: TDateValue;
    onDateChange: (date: TDateValue, currentWrapperVariant: WrapperVariant, isFinish?: PickerSelectionState) => void;
}
export declare const MobileKeyboardInputView: React.ComponentType<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "classes" | "className"> & import("@material-ui/core/styles").StyledComponentProps<"root"> & {
    className?: string | undefined;
}>;
export declare type PickerClassKey = 'root' | 'landscape' | 'pickerView';
export declare const styles: MuiStyles<PickerClassKey>;
declare const _default: React.JSXElementConstructor<Omit<PickerProps<AllAvailableViews, any> & {
    classes: import("@material-ui/styles").ClassNameMap<"root" | "landscape" | "pickerView">;
}, "classes"> & import("@material-ui/core/styles").StyledComponentProps<PickerClassKey> & object>;
export default _default;

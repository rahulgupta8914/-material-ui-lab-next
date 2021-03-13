import * as React from 'react';
import { MuiStyles } from '@material-ui/core/styles';
export interface MonthProps {
    children: React.ReactNode;
    disabled?: boolean;
    onSelect: (value: any) => void;
    selected?: boolean;
    value: any;
}
export declare type PickersMonthClassKey = 'root' | 'selected';
export declare const styles: MuiStyles<PickersMonthClassKey>;
declare const _default: React.JSXElementConstructor<Omit<MonthProps & {
    classes: import("@material-ui/styles").ClassNameMap<PickersMonthClassKey>;
} & {
    children?: React.ReactNode;
}, "classes"> & import("@material-ui/core/styles").StyledComponentProps<PickersMonthClassKey> & object>;
export default _default;

import * as React from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
import { MuiStyles } from '@material-ui/core/styles';
import { ExtendMui } from './typings/helpers';
export interface PickersToolbarTextProps extends ExtendMui<TypographyProps> {
    selected?: boolean;
    value: React.ReactNode;
}
export declare type PickersToolbarTextClassKey = 'root' | 'selected';
export declare const styles: MuiStyles<PickersToolbarTextClassKey>;
declare const _default: React.JSXElementConstructor<Omit<PickersToolbarTextProps & {
    classes: import("@material-ui/styles").ClassNameMap<PickersToolbarTextClassKey>;
} & {
    children?: React.ReactNode;
}, "classes"> & import("@material-ui/core/styles").StyledComponentProps<PickersToolbarTextClassKey> & object>;
export default _default;

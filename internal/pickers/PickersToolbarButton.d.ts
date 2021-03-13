import * as React from 'react';
import { ButtonProps } from '@material-ui/core/Button';
import { MuiStyles } from '@material-ui/core/styles';
import { TypographyProps } from '@material-ui/core/Typography';
import { ExtendMui } from './typings/helpers';
export interface ToolbarButtonProps extends ExtendMui<ButtonProps, 'value' | 'variant'> {
    align?: TypographyProps['align'];
    selected: boolean;
    typographyClassName?: string;
    value: React.ReactNode;
    variant: TypographyProps['variant'];
}
export declare type PickersToolbarButtonClassKey = 'root';
export declare const styles: MuiStyles<PickersToolbarButtonClassKey>;
declare const _default: React.JSXElementConstructor<Omit<ToolbarButtonProps & {
    classes: import("@material-ui/styles").ClassNameMap<"root">;
} & {
    children?: React.ReactNode;
}, "classes"> & import("@material-ui/core/styles").StyledComponentProps<"root"> & object>;
export default _default;

import * as React from 'react';
import { MuiStyles, WithStyles } from '@material-ui/core/styles';
import { ClockViewType } from '../internal/pickers/constants/ClockType';
export declare type ClockPointerClassKey = 'root' | 'animateTransform' | 'thumb' | 'noPoint';
export declare const styles: MuiStyles<ClockPointerClassKey>;
export interface ClockPointerProps extends React.HTMLProps<HTMLDivElement>, WithStyles<typeof styles> {
    hasSelected: boolean;
    isInner: boolean;
    type: ClockViewType;
    value: number;
}
declare const _default: React.JSXElementConstructor<Omit<ClockPointerProps, "classes"> & import("@material-ui/core/styles").StyledComponentProps<ClockPointerClassKey> & object>;
export default _default;

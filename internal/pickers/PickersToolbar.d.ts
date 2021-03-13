import * as React from 'react';
import { MuiStyles } from '@material-ui/core/styles';
import { ToolbarComponentProps } from './typings/BasePicker';
export declare type PickersToolbarClassKey = 'root' | 'toolbarLandscape' | 'dateTitleContainer';
export declare const styles: MuiStyles<PickersToolbarClassKey>;
export interface PickersToolbarProps extends Pick<ToolbarComponentProps, 'getMobileKeyboardInputViewButtonText' | 'isMobileKeyboardViewOpen' | 'toggleMobileKeyboardView'> {
    className?: string;
    isLandscape: boolean;
    landscapeDirection?: 'row' | 'column';
    penIconClassName?: string;
    toolbarTitle: React.ReactNode;
}
declare const _default: React.JSXElementConstructor<Omit<PickersToolbarProps & {
    classes: import("@material-ui/styles").ClassNameMap<PickersToolbarClassKey>;
} & {
    children?: React.ReactNode;
}, "classes"> & import("@material-ui/core/styles").StyledComponentProps<PickersToolbarClassKey> & object>;
export default _default;

import * as React from 'react';
import { MuiStyles } from '@material-ui/core/styles';
interface FadeTransitionProps {
    transKey: React.Key;
    className?: string;
    reduceAnimations: boolean;
    children: React.ReactElement;
}
export declare type PickersFadeTransitionGroupClassKey = 'root' | 'fadeEnter' | 'fadeEnterActive' | 'fadeExit' | 'fadeExitActive';
export declare const styles: MuiStyles<PickersFadeTransitionGroupClassKey>;
declare const _default: React.JSXElementConstructor<Omit<FadeTransitionProps & {
    classes: import("@material-ui/styles").ClassNameMap<PickersFadeTransitionGroupClassKey>;
} & {
    children?: React.ReactNode;
}, "classes"> & import("@material-ui/core/styles").StyledComponentProps<PickersFadeTransitionGroupClassKey> & object>;
export default _default;

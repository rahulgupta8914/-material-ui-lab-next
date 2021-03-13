import * as React from 'react';
import { MuiStyles } from '@material-ui/core/styles';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
export declare type SlideDirection = 'right' | 'left';
export interface SlideTransitionProps extends Omit<CSSTransitionProps, 'timeout'> {
    transKey: React.Key;
    className?: string;
    reduceAnimations: boolean;
    slideDirection: SlideDirection;
    children: React.ReactElement;
}
export declare type PickersSlideTransitionClassKey = 'root' | 'slideEnter-left' | 'slideEnter-right' | 'slideEnterActive' | 'slideEnterActive' | 'slideExit' | 'slideExitActiveLeft-left' | 'slideExitActiveLeft-right';
export declare const slideAnimationDuration = 350;
export declare const styles: MuiStyles<PickersSlideTransitionClassKey>;
declare const _default: React.JSXElementConstructor<Omit<SlideTransitionProps & {
    classes: import("@material-ui/styles").ClassNameMap<PickersSlideTransitionClassKey>;
} & {
    children?: React.ReactNode;
}, "classes"> & import("@material-ui/core/styles").StyledComponentProps<PickersSlideTransitionClassKey> & object>;
export default _default;

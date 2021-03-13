import * as React from 'react';
import { MuiStyles } from '@material-ui/core/styles';
export interface YearProps {
    autoFocus?: boolean;
    children: React.ReactNode;
    disabled?: boolean;
    onClick: (event: React.MouseEvent, value: number) => void;
    onKeyDown: (event: React.KeyboardEvent, value: number) => void;
    selected: boolean;
    value: number;
    forwardedRef?: React.Ref<HTMLButtonElement>;
}
export declare type PickersYearClassKey = 'root' | 'modeDesktop' | 'yearButton' | 'disabled' | 'selected';
export declare const styles: MuiStyles<PickersYearClassKey>;
declare const _default: React.JSXElementConstructor<Omit<YearProps & {
    classes: import("@material-ui/styles").ClassNameMap<PickersYearClassKey>;
} & React.RefAttributes<HTMLButtonElement>, "classes"> & import("@material-ui/core/styles").StyledComponentProps<PickersYearClassKey> & object>;
export default _default;

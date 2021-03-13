/// <reference types="react" />
import { MuiStyles } from '@material-ui/core/styles';
export interface ClockNumberProps {
    disabled: boolean;
    index: number;
    inner: boolean;
    label: string;
    selected: boolean;
    'aria-label': string;
}
export declare type ClockNumberClassKey = 'root' | 'selected' | 'disabled' | 'inner';
export declare const styles: MuiStyles<ClockNumberClassKey>;
declare const _default: (props: ClockNumberProps) => JSX.Element;
export default _default;

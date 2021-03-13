import * as React from 'react';
import { MuiStyles } from '@material-ui/core/styles';
import { DateTimePickerView } from '../internal/pickers/typings/Views';
export interface DateTimePickerTabsProps {
    dateRangeIcon?: React.ReactNode;
    onChange: (view: DateTimePickerView) => void;
    timeIcon?: React.ReactNode;
    view: DateTimePickerView;
}
export declare type DateTimePickerTabsClassKey = 'root' | 'modeDesktop' | 'tabs';
export declare const styles: MuiStyles<DateTimePickerTabsClassKey>;
declare const _default: React.JSXElementConstructor<Omit<DateTimePickerTabsProps & {
    classes: import("@material-ui/styles").ClassNameMap<DateTimePickerTabsClassKey>;
} & {
    children?: React.ReactNode;
}, "classes"> & import("@material-ui/core/styles").StyledComponentProps<DateTimePickerTabsClassKey> & object>;
export default _default;

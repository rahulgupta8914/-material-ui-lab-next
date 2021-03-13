import * as React from 'react';
import { MuiStyles } from '@material-ui/core/styles';
import { PickersCalendarClassKey } from '../DayPicker/PickersCalendar';
export interface PickersCalendarSkeletonProps extends React.HTMLProps<HTMLDivElement> {
}
export declare type PickersCalendarSkeletonClassKey = PickersCalendarClassKey | 'root' | 'daySkeleton' | 'hidden';
export declare const styles: MuiStyles<PickersCalendarSkeletonClassKey>;
declare const _default: React.JSXElementConstructor<Omit<PickersCalendarSkeletonProps & {
    classes: import("@material-ui/styles").ClassNameMap<PickersCalendarSkeletonClassKey>;
} & {
    children?: React.ReactNode;
}, "classes"> & import("@material-ui/core/styles").StyledComponentProps<PickersCalendarSkeletonClassKey> & object>;
/**
 *
 * API:
 *
 * - [PickersCalendarSkeleton API](https://material-ui.com/api/pickers-calendar-skeleton/)
 */
export default _default;

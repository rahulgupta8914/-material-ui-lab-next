import * as React from 'react';
import { MuiStyles } from '@material-ui/core/styles';
export declare type TimePickerToolbarClassKey = 'separator' | 'hourMinuteLabel' | 'hourMinuteLabelLandscape' | 'hourMinuteLabelReverse' | 'ampmSelection' | 'ampmLandscape' | 'ampmLabel' | 'penIconLandscape';
export declare const styles: MuiStyles<TimePickerToolbarClassKey>;
declare const _default: React.JSXElementConstructor<Omit<import("../DayPicker/DayPicker").ExportedDayPickerProps<unknown> & import("../ClockPicker/ClockPicker").ExportedClockPickerProps<unknown> & {
    ampmInClock?: boolean | undefined;
    date: unknown;
    dateRangeIcon?: React.ReactNode;
    getMobileKeyboardInputViewButtonText?: (() => string) | undefined;
    hideTabs?: boolean | undefined;
    isLandscape: boolean;
    isMobileKeyboardViewOpen: boolean;
    onChange: import("../internal/pickers/hooks/useViews").PickerOnChangeFn<unknown>;
    openView: import("../internal/pickers/typings/Views").AllAvailableViews;
    setOpenView: (view: import("../internal/pickers/typings/Views").AllAvailableViews) => void;
    timeIcon?: React.ReactNode;
    toggleMobileKeyboardView: () => void;
    toolbarFormat?: string | undefined;
    toolbarPlaceholder?: React.ReactNode;
    toolbarTitle?: React.ReactNode;
    views: import("../internal/pickers/typings/Views").AllAvailableViews[];
} & {
    classes: import("@material-ui/styles").ClassNameMap<TimePickerToolbarClassKey>;
} & {
    children?: React.ReactNode;
}, "classes"> & import("@material-ui/core/styles").StyledComponentProps<TimePickerToolbarClassKey> & object>;
export default _default;

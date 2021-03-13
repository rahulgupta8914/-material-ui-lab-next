import * as React from 'react';
import { MuiStyles, WithStyles } from '@material-ui/core/styles';
export declare const styles: MuiStyles<'root' | 'separator' | 'timeContainer' | 'dateContainer' | 'timeTypography' | 'penIcon'>;
export declare type DateTimePickerToolbarClassKey = keyof WithStyles<typeof styles>['classes'];
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
    classes: import("@material-ui/styles").ClassNameMap<"root" | "separator" | "penIcon" | "timeContainer" | "dateContainer" | "timeTypography">;
} & {
    children?: React.ReactNode;
}, "classes"> & import("@material-ui/core/styles").StyledComponentProps<"root" | "separator" | "penIcon" | "timeContainer" | "dateContainer" | "timeTypography"> & object>;
export default _default;

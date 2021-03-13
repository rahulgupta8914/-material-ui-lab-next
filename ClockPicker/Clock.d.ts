import * as React from 'react';
import { MuiStyles } from '@material-ui/core/styles';
import { MuiPickersAdapter } from '../internal/pickers/hooks/useUtils';
import { ClockViewType } from '../internal/pickers/constants/ClockType';
import { PickerSelectionState } from '../internal/pickers/hooks/usePickerState';
import { useMeridiemMode } from '../internal/pickers/hooks/date-helpers-hooks';
export interface ClockProps<TDate> extends ReturnType<typeof useMeridiemMode> {
    date: TDate | null;
    type: ClockViewType;
    value: number;
    isTimeDisabled: (timeValue: number, type: ClockViewType) => boolean;
    children: React.ReactNode[];
    onChange: (value: number, isFinish?: PickerSelectionState) => void;
    ampm: boolean;
    minutesStep?: number;
    ampmInClock: boolean;
    allowKeyboardControl?: boolean;
    getClockLabelText: (view: 'hours' | 'minutes' | 'seconds', time: TDate, adapter: MuiPickersAdapter<TDate>) => string;
}
export declare type ClockClassKey = 'root' | 'clock' | 'squareMask' | 'pin' | 'amButton' | 'pmButton' | 'meridiemButtonSelected';
export declare const styles: MuiStyles<ClockClassKey>;
declare const _default: <TDate>(props: ClockProps<TDate>) => JSX.Element;
export default _default;

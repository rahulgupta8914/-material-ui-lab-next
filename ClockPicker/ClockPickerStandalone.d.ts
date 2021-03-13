import * as React from 'react';
import { ClockPickerProps } from './ClockPicker';
import { TimePickerView } from '../internal/pickers/typings/Views';
export interface ClockPickerStandaloneProps<TDate> extends Omit<ClockPickerProps<TDate>, 'view' | 'openNextView' | 'openPreviousView' | 'nextViewAvailable' | 'previousViewAvailable'> {
    /** Controlled clock view. */
    view?: TimePickerView;
    /** Available views for clock. */
    views?: TimePickerView[];
    /** Callback fired on view change. */
    onViewChange?: (view: TimePickerView) => void;
    /** Initially opened view. */
    openTo?: TimePickerView;
    className?: string;
}
declare const _default: <TDate>(props: ClockPickerStandaloneProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element;
/**
 * Wrapping public API for better standalone usage of './ClockPicker'
 * @ignore - internal component.
 */
export default _default;

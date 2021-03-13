import * as React from 'react';
import { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import { MuiStyles } from '@material-ui/core/styles';
import { ExtendMui } from '../internal/pickers/typings/helpers';
import { PickerSelectionState } from '../internal/pickers/hooks/usePickerState';
export declare type PickersDayClassKey = 'root' | 'dayWithMargin' | 'dayOutsideMonth' | 'hiddenDaySpacingFiller' | 'today' | 'selected' | 'disabled';
export declare const styles: MuiStyles<PickersDayClassKey>;
export interface PickersDayProps<TDate> extends ExtendMui<ButtonBaseProps> {
    /**
     * The date to show.
     */
    day: TDate;
    /**
     * If `true`, day is outside of month and will be hidden.
     */
    outsideCurrentMonth: boolean;
    /**
     * If `true`, renders as today date.
     * @default false
     */
    today?: boolean;
    /**
     * If `true`, renders as disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, renders as selected.
     * @default false
     */
    selected?: boolean;
    /**
     * If `true`, keyboard control and focus management is enabled.
     */
    allowKeyboardControl?: boolean;
    /**
     * If `true`, days are rendering without margin. Useful for displaying linked range of days.
     * @default false
     */
    disableMargin?: boolean;
    /**
     * If `true`, days that have `outsideCurrentMonth={true}` are displayed.
     * @default false
     */
    showDaysOutsideCurrentMonth?: boolean;
    /**
     * If `true`, todays date is rendering without highlighting with circle.
     * @default false
     */
    disableHighlightToday?: boolean;
    /**
     * If `true`, `onChange` is fired on click even if the same date is selected.
     * @default false
     */
    allowSameDateSelection?: boolean;
    isAnimating?: boolean;
    onDayFocus?: (day: TDate) => void;
    onDaySelect: (day: TDate, isFinish: PickerSelectionState) => void;
}
export declare const areDayPropsEqual: (prevProps: PickersDayProps<any>, nextProps: PickersDayProps<any>) => boolean;
declare const _default: <TDate>(props: PickersDayProps<TDate> & React.RefAttributes<HTMLButtonElement>) => JSX.Element;
/**
 *
 * Demos:
 *
 * - [Date Picker](https://material-ui.com/components/date-picker/)
 *
 * API:
 *
 * - [PickersDay API](https://material-ui.com/api/pickers-day/)
 */
export default _default;

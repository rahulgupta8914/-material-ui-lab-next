import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import { isRangeValid } from '../internal/pickers/date-utils';
import { calculateRangeChange } from './date-range-manager';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import DateRangePickerToolbar from './DateRangePickerToolbar';
import { useCalendarState } from '../DayPicker/useCalendarState';
import { DateRangePickerViewMobile } from './DateRangePickerViewMobile';
import { WrapperVariantContext } from '../internal/pickers/wrappers/WrapperVariantContext';
import { MobileKeyboardInputView } from '../internal/pickers/Picker/Picker';
import DateRangePickerInput from './DateRangePickerInput';
import { defaultReduceAnimations } from '../DayPicker/DayPicker';
import DateRangePickerViewDesktop from './DateRangePickerViewDesktop';

/**
 * @ignore - internal component.
 */
export function DateRangePickerView(props) {
  const {
    calendars = 2,
    className,
    currentlySelectingRangeEnd,
    date,
    DateInputProps,
    defaultCalendarMonth,
    disableAutoMonthSwitching = false,
    disableFuture,
    disableHighlightToday,
    disablePast,
    endText,
    isMobileKeyboardViewOpen,
    maxDate,
    minDate,
    onDateChange,
    onMonthChange,
    open,
    reduceAnimations = defaultReduceAnimations,
    setCurrentlySelectingRangeEnd,
    shouldDisableDate,
    showToolbar,
    startText,
    toggleMobileKeyboardView,
    toolbarFormat,
    toolbarTitle
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["calendars", "className", "currentlySelectingRangeEnd", "date", "DateInputProps", "defaultCalendarMonth", "disableAutoMonthSwitching", "disableFuture", "disableHighlightToday", "disablePast", "endText", "isMobileKeyboardViewOpen", "maxDate", "minDate", "onDateChange", "onMonthChange", "open", "reduceAnimations", "setCurrentlySelectingRangeEnd", "shouldDisableDate", "showToolbar", "startText", "toggleMobileKeyboardView", "toolbarFormat", "toolbarTitle"]);

  const utils = useUtils();
  const wrapperVariant = React.useContext(WrapperVariantContext);
  const [start, end] = date;
  const {
    changeMonth,
    calendarState,
    isDateDisabled,
    onMonthSwitchingAnimationEnd,
    changeFocusedDay
  } = useCalendarState({
    date: start || end,
    defaultCalendarMonth,
    disableFuture,
    disablePast,
    disableSwitchToMonthOnDayFocus: true,
    maxDate,
    minDate,
    onMonthChange,
    reduceAnimations,
    shouldDisableDate
  });
  const toShowToolbar = showToolbar ?? wrapperVariant !== 'desktop';

  const scrollToDayIfNeeded = day => {
    if (!day || !utils.isValid(day) || isDateDisabled(day)) {
      return;
    }

    const currentlySelectedDate = currentlySelectingRangeEnd === 'start' ? start : end;

    if (currentlySelectedDate === null) {
      // do not scroll if one of ages is not selected
      return;
    }

    const displayingMonthRange = wrapperVariant === 'mobile' ? 0 : calendars - 1;
    const currentMonthNumber = utils.getMonth(calendarState.currentMonth);
    const requestedMonthNumber = utils.getMonth(day);

    if (!utils.isSameYear(calendarState.currentMonth, day) || requestedMonthNumber < currentMonthNumber || requestedMonthNumber > currentMonthNumber + displayingMonthRange) {
      const newMonth = currentlySelectingRangeEnd === 'start' ? currentlySelectedDate : // If need to focus end, scroll to the state when "end" is displaying in the last calendar
      utils.addMonths(currentlySelectedDate, -displayingMonthRange);
      changeMonth(newMonth);
    }
  };

  React.useEffect(() => {
    if (disableAutoMonthSwitching || !open) {
      return;
    }

    scrollToDayIfNeeded(currentlySelectingRangeEnd === 'start' ? start : end);
  }, [currentlySelectingRangeEnd, date]); // eslint-disable-line

  const handleChange = React.useCallback(newDate => {
    const {
      nextSelection,
      newRange
    } = calculateRangeChange({
      newDate,
      utils,
      range: date,
      currentlySelectingRangeEnd
    });
    setCurrentlySelectingRangeEnd(nextSelection);
    const isFullRangeSelected = currentlySelectingRangeEnd === 'end' && isRangeValid(utils, newRange);
    onDateChange(newRange, wrapperVariant, isFullRangeSelected ? 'finish' : 'partial');
  }, [currentlySelectingRangeEnd, date, onDateChange, setCurrentlySelectingRangeEnd, utils, wrapperVariant]);

  const renderView = () => {
    const sharedCalendarProps = _extends({
      date,
      isDateDisabled,
      changeFocusedDay,
      onChange: handleChange,
      reduceAnimations,
      disableHighlightToday,
      onMonthSwitchingAnimationEnd,
      changeMonth,
      currentlySelectingRangeEnd,
      disableFuture,
      disablePast,
      minDate,
      maxDate
    }, calendarState, other);

    switch (wrapperVariant) {
      case 'desktop':
        {
          return /*#__PURE__*/React.createElement(DateRangePickerViewDesktop, _extends({
            calendars: calendars
          }, sharedCalendarProps));
        }

      default:
        {
          return /*#__PURE__*/React.createElement(DateRangePickerViewMobile, sharedCalendarProps);
        }
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, toShowToolbar && /*#__PURE__*/React.createElement(DateRangePickerToolbar, {
    date: date,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    currentlySelectingRangeEnd: currentlySelectingRangeEnd,
    setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
    startText: startText,
    endText: endText,
    toolbarTitle: toolbarTitle,
    toolbarFormat: toolbarFormat
  }), isMobileKeyboardViewOpen ? /*#__PURE__*/React.createElement(MobileKeyboardInputView, null, /*#__PURE__*/React.createElement(DateRangePickerInput, _extends({
    disableOpenPicker: true,
    ignoreInvalidInputs: true
  }, DateInputProps))) : renderView());
}
process.env.NODE_ENV !== "production" ? DateRangePickerView.propTypes = {
  calendars: PropTypes.oneOf([1, 2, 3]),
  disableAutoMonthSwitching: PropTypes.bool
} : void 0;
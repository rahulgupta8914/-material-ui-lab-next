"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRangePickerView = DateRangePickerView;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateUtils = require("../internal/pickers/date-utils");

var _dateRangeManager = require("./date-range-manager");

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _DateRangePickerToolbar = _interopRequireDefault(require("./DateRangePickerToolbar"));

var _useCalendarState = require("../DayPicker/useCalendarState");

var _DateRangePickerViewMobile = require("./DateRangePickerViewMobile");

var _WrapperVariantContext = require("../internal/pickers/wrappers/WrapperVariantContext");

var _Picker = require("../internal/pickers/Picker/Picker");

var _DateRangePickerInput = _interopRequireDefault(require("./DateRangePickerInput"));

var _DayPicker = require("../DayPicker/DayPicker");

var _DateRangePickerViewDesktop = _interopRequireDefault(require("./DateRangePickerViewDesktop"));

/**
 * @ignore - internal component.
 */
function DateRangePickerView(props) {
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
    reduceAnimations = _DayPicker.defaultReduceAnimations,
    setCurrentlySelectingRangeEnd,
    shouldDisableDate,
    showToolbar,
    startText,
    toggleMobileKeyboardView,
    toolbarFormat,
    toolbarTitle
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["calendars", "className", "currentlySelectingRangeEnd", "date", "DateInputProps", "defaultCalendarMonth", "disableAutoMonthSwitching", "disableFuture", "disableHighlightToday", "disablePast", "endText", "isMobileKeyboardViewOpen", "maxDate", "minDate", "onDateChange", "onMonthChange", "open", "reduceAnimations", "setCurrentlySelectingRangeEnd", "shouldDisableDate", "showToolbar", "startText", "toggleMobileKeyboardView", "toolbarFormat", "toolbarTitle"]);
  const utils = (0, _useUtils.useUtils)();
  const wrapperVariant = React.useContext(_WrapperVariantContext.WrapperVariantContext);
  const [start, end] = date;
  const {
    changeMonth,
    calendarState,
    isDateDisabled,
    onMonthSwitchingAnimationEnd,
    changeFocusedDay
  } = (0, _useCalendarState.useCalendarState)({
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
  const toShowToolbar = showToolbar !== null && showToolbar !== void 0 ? showToolbar : wrapperVariant !== 'desktop';

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
    } = (0, _dateRangeManager.calculateRangeChange)({
      newDate,
      utils,
      range: date,
      currentlySelectingRangeEnd
    });
    setCurrentlySelectingRangeEnd(nextSelection);
    const isFullRangeSelected = currentlySelectingRangeEnd === 'end' && (0, _dateUtils.isRangeValid)(utils, newRange);
    onDateChange(newRange, wrapperVariant, isFullRangeSelected ? 'finish' : 'partial');
  }, [currentlySelectingRangeEnd, date, onDateChange, setCurrentlySelectingRangeEnd, utils, wrapperVariant]);

  const renderView = () => {
    const sharedCalendarProps = (0, _extends2.default)({
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
          return /*#__PURE__*/React.createElement(_DateRangePickerViewDesktop.default, (0, _extends2.default)({
            calendars: calendars
          }, sharedCalendarProps));
        }

      default:
        {
          return /*#__PURE__*/React.createElement(_DateRangePickerViewMobile.DateRangePickerViewMobile, sharedCalendarProps);
        }
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, toShowToolbar && /*#__PURE__*/React.createElement(_DateRangePickerToolbar.default, {
    date: date,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    currentlySelectingRangeEnd: currentlySelectingRangeEnd,
    setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
    startText: startText,
    endText: endText,
    toolbarTitle: toolbarTitle,
    toolbarFormat: toolbarFormat
  }), isMobileKeyboardViewOpen ? /*#__PURE__*/React.createElement(_Picker.MobileKeyboardInputView, null, /*#__PURE__*/React.createElement(_DateRangePickerInput.default, (0, _extends2.default)({
    disableOpenPicker: true,
    ignoreInvalidInputs: true
  }, DateInputProps))) : renderView());
}

process.env.NODE_ENV !== "production" ? DateRangePickerView.propTypes = {
  calendars: _propTypes.default.oneOf([1, 2, 3]),
  disableAutoMonthSwitching: _propTypes.default.bool
} : void 0;
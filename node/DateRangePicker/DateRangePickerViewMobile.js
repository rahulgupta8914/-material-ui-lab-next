"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRangePickerViewMobile = DateRangePickerViewMobile;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _PickersCalendarHeader = _interopRequireDefault(require("../DayPicker/PickersCalendarHeader"));

var _DateRangePickerDay = _interopRequireDefault(require("../DateRangePickerDay"));

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _PickersCalendar = _interopRequireDefault(require("../DayPicker/PickersCalendar"));

var _propTypes = require("../internal/pickers/constants/prop-types");

var _dateUtils = require("../internal/pickers/date-utils");

var _utils = require("../internal/pickers/utils");

const onlyDateView = ['date'];
/**
 * @ignore - internal component.
 */

function DateRangePickerViewMobile(props) {
  const {
    changeMonth,
    components,
    componentsProps,
    date,
    leftArrowButtonText,
    maxDate: maxDateProp,
    minDate: minDateProp,
    onChange,
    renderDay = (_, dayProps) => /*#__PURE__*/React.createElement(_DateRangePickerDay.default, dayProps),
    rightArrowButtonText
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["changeMonth", "components", "componentsProps", "date", "leftArrowButtonText", "maxDate", "minDate", "onChange", "renderDay", "rightArrowButtonText"]);
  const utils = (0, _useUtils.useUtils)();
  const minDate = minDateProp || utils.date(_propTypes.defaultMinDate);
  const maxDate = maxDateProp || utils.date(_propTypes.defaultMaxDate);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_PickersCalendarHeader.default, (0, _extends2.default)({
    components: components,
    componentsProps: componentsProps,
    leftArrowButtonText: leftArrowButtonText,
    maxDate: maxDate,
    minDate: minDate,
    onMonthChange: changeMonth,
    openView: "date",
    rightArrowButtonText: rightArrowButtonText,
    views: onlyDateView
  }, other)), /*#__PURE__*/React.createElement(_PickersCalendar.default, (0, _extends2.default)({}, other, {
    date: date,
    onChange: onChange,
    onFocusedDayChange: _utils.doNothing,
    renderDay: (day, _, DayProps) => renderDay(day, (0, _extends2.default)({
      isPreviewing: false,
      isStartOfPreviewing: false,
      isEndOfPreviewing: false,
      isHighlighting: (0, _dateUtils.isWithinRange)(utils, day, date),
      isStartOfHighlighting: (0, _dateUtils.isStartOfRange)(utils, day, date),
      isEndOfHighlighting: (0, _dateUtils.isEndOfRange)(utils, day, date)
    }, DayProps))
  })));
}
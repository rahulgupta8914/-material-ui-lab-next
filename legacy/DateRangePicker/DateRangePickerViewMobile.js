import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PickersCalendarHeader from '../DayPicker/PickersCalendarHeader';
import DateRangePickerDay from '../DateRangePickerDay';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import PickersCalendar from '../DayPicker/PickersCalendar';
import { defaultMinDate, defaultMaxDate } from '../internal/pickers/constants/prop-types';
import { isWithinRange, isStartOfRange, isEndOfRange } from '../internal/pickers/date-utils';
import { doNothing } from '../internal/pickers/utils';
var onlyDateView = ['date'];
/**
 * @ignore - internal component.
 */

export function DateRangePickerViewMobile(props) {
  var changeMonth = props.changeMonth,
      components = props.components,
      componentsProps = props.componentsProps,
      date = props.date,
      leftArrowButtonText = props.leftArrowButtonText,
      maxDateProp = props.maxDate,
      minDateProp = props.minDate,
      onChange = props.onChange,
      _props$renderDay = props.renderDay,
      _renderDay = _props$renderDay === void 0 ? function (_, dayProps) {
    return /*#__PURE__*/React.createElement(DateRangePickerDay, dayProps);
  } : _props$renderDay,
      rightArrowButtonText = props.rightArrowButtonText,
      other = _objectWithoutProperties(props, ["changeMonth", "components", "componentsProps", "date", "leftArrowButtonText", "maxDate", "minDate", "onChange", "renderDay", "rightArrowButtonText"]);

  var utils = useUtils();
  var minDate = minDateProp || utils.date(defaultMinDate);
  var maxDate = maxDateProp || utils.date(defaultMaxDate);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PickersCalendarHeader, _extends({
    components: components,
    componentsProps: componentsProps,
    leftArrowButtonText: leftArrowButtonText,
    maxDate: maxDate,
    minDate: minDate,
    onMonthChange: changeMonth,
    openView: "date",
    rightArrowButtonText: rightArrowButtonText,
    views: onlyDateView
  }, other)), /*#__PURE__*/React.createElement(PickersCalendar, _extends({}, other, {
    date: date,
    onChange: onChange,
    onFocusedDayChange: doNothing,
    renderDay: function renderDay(day, _, DayProps) {
      return _renderDay(day, _extends({
        isPreviewing: false,
        isStartOfPreviewing: false,
        isEndOfPreviewing: false,
        isHighlighting: isWithinRange(utils, day, date),
        isStartOfHighlighting: isStartOfRange(utils, day, date),
        isEndOfHighlighting: isEndOfRange(utils, day, date)
      }, DayProps));
    }
  })));
}
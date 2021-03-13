import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import PickersCalendarHeader from '../DayPicker/PickersCalendarHeader';
import DateRangePickerDay from '../DateRangePickerDay';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import PickersCalendar from '../DayPicker/PickersCalendar';
import { defaultMinDate, defaultMaxDate } from '../internal/pickers/constants/prop-types';
import { isWithinRange, isStartOfRange, isEndOfRange } from '../internal/pickers/date-utils';
import { doNothing } from '../internal/pickers/utils';
const onlyDateView = ['date'];
/**
 * @ignore - internal component.
 */

export function DateRangePickerViewMobile(props) {
  const {
    changeMonth,
    components,
    componentsProps,
    date,
    leftArrowButtonText,
    maxDate: maxDateProp,
    minDate: minDateProp,
    onChange,
    renderDay = (_, dayProps) => /*#__PURE__*/React.createElement(DateRangePickerDay, dayProps),
    rightArrowButtonText
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["changeMonth", "components", "componentsProps", "date", "leftArrowButtonText", "maxDate", "minDate", "onChange", "renderDay", "rightArrowButtonText"]);

  const utils = useUtils();
  const minDate = minDateProp || utils.date(defaultMinDate);
  const maxDate = maxDateProp || utils.date(defaultMaxDate);
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
    renderDay: (day, _, DayProps) => renderDay(day, _extends({
      isPreviewing: false,
      isStartOfPreviewing: false,
      isEndOfPreviewing: false,
      isHighlighting: isWithinRange(utils, day, date),
      isStartOfHighlighting: isStartOfRange(utils, day, date),
      isEndOfHighlighting: isEndOfRange(utils, day, date)
    }, DayProps))
  })));
}
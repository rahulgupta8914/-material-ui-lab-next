"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _dateRangeManager = require("./date-range-manager");

var _PickersCalendar = _interopRequireDefault(require("../DayPicker/PickersCalendar"));

var _DateRangePickerDay = _interopRequireWildcard(require("../DateRangePickerDay"));

var _propTypes = require("../internal/pickers/constants/prop-types");

var _PickersArrowSwitcher = _interopRequireDefault(require("../internal/pickers/PickersArrowSwitcher"));

var _dateHelpersHooks = require("../internal/pickers/hooks/date-helpers-hooks");

var _dateUtils = require("../internal/pickers/date-utils");

var _utils = require("../internal/pickers/utils");

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row'
  },
  rangeCalendarContainer: {
    '&:not(:last-child)': {
      borderRight: `2px solid ${theme.palette.divider}`
    }
  },
  calendar: {
    minWidth: 312,
    minHeight: 288
  },
  arrowSwitcher: {
    padding: '16px 16px 8px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

exports.styles = styles;

function getCalendarsArray(calendars) {
  switch (calendars) {
    case 1:
      return [0];

    case 2:
      return [0, 0];

    case 3:
      return [0, 0, 0];
    // this will not work in IE11, but allows to support any amount of calendars

    default:
      return new Array(calendars).fill(0);
  }
}
/**
 * @ignore - internal component.
 */


function DateRangePickerViewDesktop(props) {
  const {
    calendars = 2,
    changeMonth,
    classes,
    components,
    componentsProps,
    currentlySelectingRangeEnd,
    currentMonth,
    date,
    disableFuture,
    disablePast,
    leftArrowButtonText = 'Previous month',
    maxDate: maxDateProp,
    minDate: minDateProp,
    onChange,
    renderDay = (_, dateRangeProps) => /*#__PURE__*/React.createElement(_DateRangePickerDay.default, dateRangeProps),
    rightArrowButtonText = 'Next month'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["calendars", "changeMonth", "classes", "components", "componentsProps", "currentlySelectingRangeEnd", "currentMonth", "date", "disableFuture", "disablePast", "leftArrowButtonText", "maxDate", "minDate", "onChange", "renderDay", "rightArrowButtonText"]);
  const utils = (0, _useUtils.useUtils)();
  const minDate = minDateProp || utils.date(_propTypes.defaultMinDate);
  const maxDate = maxDateProp || utils.date(_propTypes.defaultMaxDate);
  const [rangePreviewDay, setRangePreviewDay] = React.useState(null);
  const isNextMonthDisabled = (0, _dateHelpersHooks.useNextMonthDisabled)(currentMonth, {
    disableFuture,
    maxDate
  });
  const isPreviousMonthDisabled = (0, _dateHelpersHooks.usePreviousMonthDisabled)(currentMonth, {
    disablePast,
    minDate
  });
  const previewingRange = (0, _dateRangeManager.calculateRangePreview)({
    utils,
    range: date,
    newDate: rangePreviewDay,
    currentlySelectingRangeEnd
  });
  const handleDayChange = React.useCallback(day => {
    setRangePreviewDay(null);
    onChange(day);
  }, [onChange]);

  const handlePreviewDayChange = newPreviewRequest => {
    if (!(0, _dateUtils.isWithinRange)(utils, newPreviewRequest, date)) {
      setRangePreviewDay(newPreviewRequest);
    } else {
      setRangePreviewDay(null);
    }
  };

  const CalendarTransitionProps = React.useMemo(() => ({
    onMouseLeave: () => setRangePreviewDay(null)
  }), []);
  const selectNextMonth = React.useCallback(() => {
    changeMonth(utils.getNextMonth(currentMonth));
  }, [changeMonth, currentMonth, utils]);
  const selectPreviousMonth = React.useCallback(() => {
    changeMonth(utils.getPreviousMonth(currentMonth));
  }, [changeMonth, currentMonth, utils]);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, getCalendarsArray(calendars).map((_, index) => {
    const monthOnIteration = utils.setMonth(currentMonth, utils.getMonth(currentMonth) + index);
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: classes.rangeCalendarContainer
    }, /*#__PURE__*/React.createElement(_PickersArrowSwitcher.default, {
      className: classes.arrowSwitcher,
      onLeftClick: selectPreviousMonth,
      onRightClick: selectNextMonth,
      isLeftHidden: index !== 0,
      isRightHidden: index !== calendars - 1,
      isLeftDisabled: isPreviousMonthDisabled,
      isRightDisabled: isNextMonthDisabled,
      leftArrowButtonText: leftArrowButtonText,
      components: components,
      componentsProps: componentsProps,
      rightArrowButtonText: rightArrowButtonText
    }, utils.format(monthOnIteration, 'monthAndYear')), /*#__PURE__*/React.createElement(_PickersCalendar.default, (0, _extends2.default)({}, other, {
      key: index,
      date: date,
      onFocusedDayChange: _utils.doNothing,
      className: classes.calendar,
      onChange: handleDayChange,
      currentMonth: monthOnIteration,
      TransitionProps: CalendarTransitionProps,
      renderDay: (day, __, DayProps) => renderDay(day, (0, _extends2.default)({
        isPreviewing: (0, _dateUtils.isWithinRange)(utils, day, previewingRange),
        isStartOfPreviewing: (0, _dateUtils.isStartOfRange)(utils, day, previewingRange),
        isEndOfPreviewing: (0, _dateUtils.isEndOfRange)(utils, day, previewingRange),
        isHighlighting: (0, _dateUtils.isWithinRange)(utils, day, date),
        isStartOfHighlighting: (0, _dateUtils.isStartOfRange)(utils, day, date),
        isEndOfHighlighting: (0, _dateUtils.isEndOfRange)(utils, day, date),
        onMouseEnter: () => handlePreviewDayChange(day)
      }, DayProps))
    })));
  }));
}

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiDateRangePickerViewDesktop'
})(DateRangePickerViewDesktop);

exports.default = _default;
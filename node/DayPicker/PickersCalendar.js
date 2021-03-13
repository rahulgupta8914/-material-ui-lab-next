"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _PickersDay = _interopRequireDefault(require("../PickersDay/PickersDay"));

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _dimensions = require("../internal/pickers/constants/dimensions");

var _PickersSlideTransition = _interopRequireDefault(require("./PickersSlideTransition"));

const weeksContainerHeight = (_dimensions.DAY_SIZE + _dimensions.DAY_MARGIN * 4) * 6;

const styles = theme => ({
  root: {
    minHeight: weeksContainerHeight
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: weeksContainerHeight
  },
  weekContainer: {
    overflow: 'hidden'
  },
  week: {
    margin: `${_dimensions.DAY_MARGIN}px 0`,
    display: 'flex',
    justifyContent: 'center'
  },
  daysHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  weekDayLabel: {
    width: 36,
    height: 40,
    margin: '0 2px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary
  }
});
/**
 * @ignore - do not document.
 */


exports.styles = styles;

var _ref = /*#__PURE__*/React.createElement("span", null, "...");

function PickersCalendar(props) {
  const {
    allowKeyboardControl,
    allowSameDateSelection,
    onFocusedDayChange: changeFocusedDay,
    classes,
    className,
    currentMonth,
    date,
    disableHighlightToday,
    focusedDay,
    isDateDisabled,
    isMonthSwitchingAnimating,
    loading,
    onChange,
    onMonthSwitchingAnimationEnd,
    reduceAnimations,
    renderDay,
    renderLoading = () => _ref,
    showDaysOutsideCurrentMonth,
    slideDirection,
    TransitionProps
  } = props;
  const now = (0, _useUtils.useNow)();
  const utils = (0, _useUtils.useUtils)();
  const handleDaySelect = React.useCallback((day, isFinish = 'finish') => {
    // TODO possibly buggy line figure out and add tests
    const finalDate = Array.isArray(date) ? day : utils.mergeDateAndTime(day, date || now);
    onChange(finalDate, isFinish);
  }, [date, now, onChange, utils]);
  const currentMonthNumber = utils.getMonth(currentMonth);
  const selectedDates = (Array.isArray(date) ? date : [date]).filter(Boolean).map(selectedDateItem => selectedDateItem && utils.startOfDay(selectedDateItem));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classes.daysHeader
  }, utils.getWeekdays().map((day, i) => /*#__PURE__*/React.createElement(_Typography.default, {
    "aria-hidden": true,
    key: day + i.toString(),
    variant: "caption",
    className: classes.weekDayLabel
  }, day.charAt(0).toUpperCase()))), loading ? /*#__PURE__*/React.createElement("div", {
    className: classes.loadingContainer
  }, renderLoading()) : /*#__PURE__*/React.createElement(_PickersSlideTransition.default, (0, _extends2.default)({
    transKey: currentMonthNumber,
    onExited: onMonthSwitchingAnimationEnd,
    reduceAnimations: reduceAnimations,
    slideDirection: slideDirection,
    className: (0, _clsx.default)(classes.root, className)
  }, TransitionProps), /*#__PURE__*/React.createElement("div", {
    role: "grid",
    className: classes.weekContainer
  }, utils.getWeekArray(currentMonth).map(week => /*#__PURE__*/React.createElement("div", {
    role: "row",
    key: `week-${week[0]}`,
    className: classes.week
  }, week.map(day => {
    const dayProps = {
      key: day === null || day === void 0 ? void 0 : day.toString(),
      day,
      isAnimating: isMonthSwitchingAnimating,
      disabled: isDateDisabled(day),
      allowKeyboardControl,
      allowSameDateSelection,
      autoFocus: allowKeyboardControl && focusedDay !== null && utils.isSameDay(day, focusedDay),
      today: utils.isSameDay(day, now),
      outsideCurrentMonth: utils.getMonth(day) !== currentMonthNumber,
      selected: selectedDates.some(selectedDate => selectedDate && utils.isSameDay(selectedDate, day)),
      disableHighlightToday,
      showDaysOutsideCurrentMonth,
      onDayFocus: changeFocusedDay,
      onDaySelect: handleDaySelect
    };
    return renderDay ? renderDay(day, selectedDates, dayProps) : /*#__PURE__*/React.createElement("div", {
      role: "cell",
      key: dayProps.key
    }, /*#__PURE__*/React.createElement(_PickersDay.default, dayProps));
  }))))));
}

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiPickersCalendar'
})(PickersCalendar);

exports.default = _default;
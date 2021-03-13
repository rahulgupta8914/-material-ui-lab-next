import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PickersDay from '../PickersDay/PickersDay';
import { useUtils, useNow } from '../internal/pickers/hooks/useUtils';
import { DAY_SIZE, DAY_MARGIN } from '../internal/pickers/constants/dimensions';
import SlideTransition from './PickersSlideTransition';
var weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 4) * 6;
export var styles = function styles(theme) {
  return {
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
      margin: "".concat(DAY_MARGIN, "px 0"),
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
  };
};
/**
 * @ignore - do not document.
 */

var _ref = /*#__PURE__*/React.createElement("span", null, "...");

function PickersCalendar(props) {
  var allowKeyboardControl = props.allowKeyboardControl,
      allowSameDateSelection = props.allowSameDateSelection,
      changeFocusedDay = props.onFocusedDayChange,
      classes = props.classes,
      className = props.className,
      currentMonth = props.currentMonth,
      date = props.date,
      disableHighlightToday = props.disableHighlightToday,
      focusedDay = props.focusedDay,
      isDateDisabled = props.isDateDisabled,
      isMonthSwitchingAnimating = props.isMonthSwitchingAnimating,
      loading = props.loading,
      onChange = props.onChange,
      onMonthSwitchingAnimationEnd = props.onMonthSwitchingAnimationEnd,
      reduceAnimations = props.reduceAnimations,
      renderDay = props.renderDay,
      _props$renderLoading = props.renderLoading,
      renderLoading = _props$renderLoading === void 0 ? function () {
    return _ref;
  } : _props$renderLoading,
      showDaysOutsideCurrentMonth = props.showDaysOutsideCurrentMonth,
      slideDirection = props.slideDirection,
      TransitionProps = props.TransitionProps;
  var now = useNow();
  var utils = useUtils();
  var handleDaySelect = React.useCallback(function (day) {
    var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'finish';
    // TODO possibly buggy line figure out and add tests
    var finalDate = Array.isArray(date) ? day : utils.mergeDateAndTime(day, date || now);
    onChange(finalDate, isFinish);
  }, [date, now, onChange, utils]);
  var currentMonthNumber = utils.getMonth(currentMonth);
  var selectedDates = (Array.isArray(date) ? date : [date]).filter(Boolean).map(function (selectedDateItem) {
    return selectedDateItem && utils.startOfDay(selectedDateItem);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classes.daysHeader
  }, utils.getWeekdays().map(function (day, i) {
    return /*#__PURE__*/React.createElement(Typography, {
      "aria-hidden": true,
      key: day + i.toString(),
      variant: "caption",
      className: classes.weekDayLabel
    }, day.charAt(0).toUpperCase());
  })), loading ? /*#__PURE__*/React.createElement("div", {
    className: classes.loadingContainer
  }, renderLoading()) : /*#__PURE__*/React.createElement(SlideTransition, _extends({
    transKey: currentMonthNumber,
    onExited: onMonthSwitchingAnimationEnd,
    reduceAnimations: reduceAnimations,
    slideDirection: slideDirection,
    className: clsx(classes.root, className)
  }, TransitionProps), /*#__PURE__*/React.createElement("div", {
    role: "grid",
    className: classes.weekContainer
  }, utils.getWeekArray(currentMonth).map(function (week) {
    return /*#__PURE__*/React.createElement("div", {
      role: "row",
      key: "week-".concat(week[0]),
      className: classes.week
    }, week.map(function (day) {
      var dayProps = {
        key: day === null || day === void 0 ? void 0 : day.toString(),
        day: day,
        isAnimating: isMonthSwitchingAnimating,
        disabled: isDateDisabled(day),
        allowKeyboardControl: allowKeyboardControl,
        allowSameDateSelection: allowSameDateSelection,
        autoFocus: allowKeyboardControl && focusedDay !== null && utils.isSameDay(day, focusedDay),
        today: utils.isSameDay(day, now),
        outsideCurrentMonth: utils.getMonth(day) !== currentMonthNumber,
        selected: selectedDates.some(function (selectedDate) {
          return selectedDate && utils.isSameDay(selectedDate, day);
        }),
        disableHighlightToday: disableHighlightToday,
        showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
        onDayFocus: changeFocusedDay,
        onDaySelect: handleDaySelect
      };
      return renderDay ? renderDay(day, selectedDates, dayProps) : /*#__PURE__*/React.createElement("div", {
        role: "cell",
        key: dayProps.key
      }, /*#__PURE__*/React.createElement(PickersDay, dayProps));
    }));
  }))));
}

export default withStyles(styles, {
  name: 'MuiPickersCalendar'
})(PickersCalendar);
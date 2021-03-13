import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PickersDay from '../PickersDay/PickersDay';
import { useUtils, useNow } from '../internal/pickers/hooks/useUtils';
import { DAY_SIZE, DAY_MARGIN } from '../internal/pickers/constants/dimensions';
import SlideTransition from './PickersSlideTransition';
const weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 4) * 6;
export const styles = theme => ({
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
    margin: `${DAY_MARGIN}px 0`,
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
  const now = useNow();
  const utils = useUtils();
  const handleDaySelect = React.useCallback((day, isFinish = 'finish') => {
    // TODO possibly buggy line figure out and add tests
    const finalDate = Array.isArray(date) ? day : utils.mergeDateAndTime(day, date || now);
    onChange(finalDate, isFinish);
  }, [date, now, onChange, utils]);
  const currentMonthNumber = utils.getMonth(currentMonth);
  const selectedDates = (Array.isArray(date) ? date : [date]).filter(Boolean).map(selectedDateItem => selectedDateItem && utils.startOfDay(selectedDateItem));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classes.daysHeader
  }, utils.getWeekdays().map((day, i) => /*#__PURE__*/React.createElement(Typography, {
    "aria-hidden": true,
    key: day + i.toString(),
    variant: "caption",
    className: classes.weekDayLabel
  }, day.charAt(0).toUpperCase()))), loading ? /*#__PURE__*/React.createElement("div", {
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
    }, /*#__PURE__*/React.createElement(PickersDay, dayProps));
  }))))));
}

export default withStyles(styles, {
  name: 'MuiPickersCalendar'
})(PickersCalendar);
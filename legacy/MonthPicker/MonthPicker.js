import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PickersMonth from './PickersMonth';
import { useUtils, useNow } from '../internal/pickers/hooks/useUtils';
export var styles = {
  root: {
    width: 310,
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'stretch'
  }
};
var MonthPicker = /*#__PURE__*/React.forwardRef(function MonthPicker(props, ref) {
  var className = props.className,
      classes = props.classes,
      date = props.date,
      disableFuture = props.disableFuture,
      disablePast = props.disablePast,
      maxDate = props.maxDate,
      minDate = props.minDate,
      onChange = props.onChange,
      onMonthChange = props.onMonthChange;
  var utils = useUtils();
  var now = useNow();
  var currentMonth = utils.getMonth(date || now);

  var shouldDisableMonth = function shouldDisableMonth(month) {
    var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    var isBeforeFirstEnabled = utils.isBefore(month, firstEnabledMonth);
    var isAfterLastEnabled = utils.isAfter(month, lastEnabledMonth);
    return isBeforeFirstEnabled || isAfterLastEnabled;
  };

  var onMonthSelect = function onMonthSelect(month) {
    var newDate = utils.setMonth(date || now, month);
    onChange(newDate, 'finish');

    if (onMonthChange) {
      onMonthChange(newDate);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: clsx(classes.root, className)
  }, utils.getMonthArray(date || now).map(function (month) {
    var monthNumber = utils.getMonth(month);
    var monthText = utils.format(month, 'monthShort');
    return /*#__PURE__*/React.createElement(PickersMonth, {
      key: monthText,
      value: monthNumber,
      selected: monthNumber === currentMonth,
      onSelect: onMonthSelect,
      disabled: shouldDisableMonth(month)
    }, monthText);
  }));
});
process.env.NODE_ENV !== "production" ? MonthPicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Date value for the MonthPicker
   */
  date: PropTypes.any,

  /**
   * If `true` future days are disabled.
   */
  disableFuture: PropTypes.bool,

  /**
   * If `true` past days are disabled.
   */
  disablePast: PropTypes.bool,

  /**
   * Maximal selectable date.
   */
  maxDate: PropTypes.any.isRequired,

  /**
   * Minimal selectable date.
   */
  minDate: PropTypes.any.isRequired,

  /**
   * Callback fired on date change.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * @ignore
   */
  onMonthChange: PropTypes.func
} : void 0;
/**
 *
 * API:
 *
 * - [MonthPicker API](https://material-ui.com/api/month-picker/)
 */

export default withStyles(styles, {
  name: 'MuiMonthPicker'
})(MonthPicker);
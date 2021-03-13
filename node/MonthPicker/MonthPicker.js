"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _PickersMonth = _interopRequireDefault(require("./PickersMonth"));

var _useUtils = require("../internal/pickers/hooks/useUtils");

const styles = {
  root: {
    width: 310,
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'stretch'
  }
};
exports.styles = styles;
const MonthPicker = /*#__PURE__*/React.forwardRef(function MonthPicker(props, ref) {
  const {
    className,
    classes,
    date,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onChange,
    onMonthChange
  } = props;
  const utils = (0, _useUtils.useUtils)();
  const now = (0, _useUtils.useNow)();
  const currentMonth = utils.getMonth(date || now);

  const shouldDisableMonth = month => {
    const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    const isBeforeFirstEnabled = utils.isBefore(month, firstEnabledMonth);
    const isAfterLastEnabled = utils.isAfter(month, lastEnabledMonth);
    return isBeforeFirstEnabled || isAfterLastEnabled;
  };

  const onMonthSelect = month => {
    const newDate = utils.setMonth(date || now, month);
    onChange(newDate, 'finish');

    if (onMonthChange) {
      onMonthChange(newDate);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: (0, _clsx.default)(classes.root, className)
  }, utils.getMonthArray(date || now).map(month => {
    const monthNumber = utils.getMonth(month);
    const monthText = utils.format(month, 'monthShort');
    return /*#__PURE__*/React.createElement(_PickersMonth.default, {
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
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Date value for the MonthPicker
   */
  date: _propTypes.default.any,

  /**
   * If `true` future days are disabled.
   */
  disableFuture: _propTypes.default.bool,

  /**
   * If `true` past days are disabled.
   */
  disablePast: _propTypes.default.bool,

  /**
   * Maximal selectable date.
   */
  maxDate: _propTypes.default.any.isRequired,

  /**
   * Minimal selectable date.
   */
  minDate: _propTypes.default.any.isRequired,

  /**
   * Callback fired on date change.
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * @ignore
   */
  onMonthChange: _propTypes.default.func
} : void 0;
/**
 *
 * API:
 *
 * - [MonthPicker API](https://material-ui.com/api/month-picker/)
 */

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiMonthPicker'
})(MonthPicker);

exports.default = _default;
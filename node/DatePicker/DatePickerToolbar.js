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

var _clsx = _interopRequireDefault(require("clsx"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _PickersToolbar = _interopRequireDefault(require("../internal/pickers/PickersToolbar"));

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _dateUtils = require("../internal/pickers/date-utils");

const styles = {
  root: {},
  dateTitleLandscape: {
    margin: 'auto 16px auto auto'
  },
  penIcon: {
    position: 'relative',
    top: 4
  }
};
/**
 * @ignore - internal component.
 */

exports.styles = styles;

const DatePickerToolbar = (_ref) => {
  let {
    classes,
    date,
    isLandscape,
    isMobileKeyboardViewOpen,
    toggleMobileKeyboardView,
    toolbarFormat,
    toolbarPlaceholder = '––',
    toolbarTitle = 'SELECT DATE',
    views
  } = _ref,
      other = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["classes", "date", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"]);
  const utils = (0, _useUtils.useUtils)();
  const dateText = React.useMemo(() => {
    if (!date) {
      return toolbarPlaceholder;
    }

    if (toolbarFormat) {
      return utils.formatByString(date, toolbarFormat);
    }

    if ((0, _dateUtils.isYearOnlyView)(views)) {
      return utils.format(date, 'year');
    }

    if ((0, _dateUtils.isYearAndMonthViews)(views)) {
      return utils.format(date, 'month');
    } // Little localization hack (Google is doing the same for android native pickers):
    // For english localization it is convenient to include weekday into the date "Mon, Jun 1".
    // For other locales using strings like "June 1", without weekday.


    return /en/.test(utils.getCurrentLocaleCode()) ? utils.format(date, 'normalDateWithWeekday') : utils.format(date, 'normalDate');
  }, [date, toolbarFormat, toolbarPlaceholder, utils, views]);
  return /*#__PURE__*/React.createElement(_PickersToolbar.default, (0, _extends2.default)({
    className: classes.root,
    toolbarTitle: toolbarTitle,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    isLandscape: isLandscape,
    penIconClassName: classes.penIcon
  }, other), /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "h4",
    align: isLandscape ? 'left' : 'center',
    className: (0, _clsx.default)(isLandscape && classes.dateTitleLandscape)
  }, dateText));
};

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiDatePickerToolbar'
})(DatePickerToolbar);

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var React = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _PickersToolbar = _interopRequireDefault(require("../internal/pickers/PickersToolbar"));

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _PickersToolbarButton = _interopRequireDefault(require("../internal/pickers/PickersToolbarButton"));

const styles = {
  root: {},
  penIcon: {
    position: 'relative',
    top: 4
  },
  dateTextContainer: {
    display: 'flex'
  }
};
exports.styles = styles;

var _ref = /*#__PURE__*/React.createElement(_Typography.default, {
  variant: "h5"
}, "\xA0", '–', "\xA0");

/**
 * @ignore - internal component.
 */
const DateRangePickerToolbar = ({
  classes,
  currentlySelectingRangeEnd,
  date: [start, end],
  endText,
  isMobileKeyboardViewOpen,
  setCurrentlySelectingRangeEnd,
  startText,
  toggleMobileKeyboardView,
  toolbarFormat,
  toolbarTitle = 'SELECT DATE RANGE'
}) => {
  const utils = (0, _useUtils.useUtils)();
  const startDateValue = start ? utils.formatByString(start, toolbarFormat || utils.formats.shortDate) : startText;
  const endDateValue = end ? utils.formatByString(end, toolbarFormat || utils.formats.shortDate) : endText;
  return /*#__PURE__*/React.createElement(_PickersToolbar.default, {
    className: classes.root,
    toolbarTitle: toolbarTitle,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    isLandscape: false,
    penIconClassName: classes.penIcon
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.dateTextContainer
  }, /*#__PURE__*/React.createElement(_PickersToolbarButton.default, {
    variant: start !== null ? 'h5' : 'h6',
    value: startDateValue,
    selected: currentlySelectingRangeEnd === 'start',
    onClick: () => setCurrentlySelectingRangeEnd('start')
  }), _ref, /*#__PURE__*/React.createElement(_PickersToolbarButton.default, {
    variant: end !== null ? 'h5' : 'h6',
    value: endDateValue,
    selected: currentlySelectingRangeEnd === 'end',
    onClick: () => setCurrentlySelectingRangeEnd('end')
  })));
};

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiDateRangePickerToolbar'
})(DateRangePickerToolbar);

exports.default = _default;
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PureDateInput = require("../PureDateInput");

var _WrapperVariantContext = require("./WrapperVariantContext");

var _PickersModalDialog = _interopRequireDefault(require("../PickersModalDialog"));

const MobileWrapper = props => {
  const {
    cancelText,
    children,
    clearable,
    clearText,
    DateInputProps,
    DialogProps,
    okText,
    onAccept,
    onClear,
    onDismiss,
    onSetToday,
    open,
    PureDateInputComponent = _PureDateInput.PureDateInput,
    showTodayButton,
    todayText
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["cancelText", "children", "clearable", "clearText", "DateInputProps", "DialogProps", "KeyboardDateInputComponent", "okText", "onAccept", "onClear", "onDismiss", "onSetToday", "open", "PureDateInputComponent", "showTodayButton", "todayText"]);
  return /*#__PURE__*/React.createElement(_WrapperVariantContext.WrapperVariantContext.Provider, {
    value: "mobile"
  }, /*#__PURE__*/React.createElement(PureDateInputComponent, (0, _extends2.default)({}, other, DateInputProps)), /*#__PURE__*/React.createElement(_PickersModalDialog.default, {
    open: open,
    onClear: onClear,
    onAccept: onAccept,
    onDismiss: onDismiss,
    onSetToday: onSetToday,
    clearText: clearText,
    todayText: todayText,
    okText: okText,
    cancelText: cancelText,
    clearable: clearable,
    showTodayButton: showTodayButton,
    DialogProps: DialogProps
  }, children));
};

process.env.NODE_ENV !== "production" ? MobileWrapper.propTypes = {
  cancelText: _propTypes.default.node,
  clearable: _propTypes.default.bool,
  clearText: _propTypes.default.node,
  DialogProps: _propTypes.default.object,
  okText: _propTypes.default.node,
  showTodayButton: _propTypes.default.bool,
  todayText: _propTypes.default.node
} : void 0;
var _default = MobileWrapper;
exports.default = _default;
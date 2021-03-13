"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _WrapperVariantContext = require("./WrapperVariantContext");

var _KeyboardDateInput = require("../KeyboardDateInput");

var _PickersPopper = _interopRequireDefault(require("../PickersPopper"));

const DesktopWrapper = props => {
  const {
    children,
    DateInputProps,
    KeyboardDateInputComponent = _KeyboardDateInput.KeyboardDateInput,
    onDismiss,
    open,
    PopperProps,
    TransitionComponent
  } = props;
  const inputRef = React.useRef(null);
  return /*#__PURE__*/React.createElement(_WrapperVariantContext.WrapperVariantContext.Provider, {
    value: "desktop"
  }, /*#__PURE__*/React.createElement(KeyboardDateInputComponent, (0, _extends2.default)({}, DateInputProps, {
    inputRef: inputRef
  })), /*#__PURE__*/React.createElement(_PickersPopper.default, {
    role: "dialog",
    open: open,
    anchorEl: inputRef.current,
    TransitionComponent: TransitionComponent,
    PopperProps: PopperProps,
    onClose: onDismiss
  }, children));
};

process.env.NODE_ENV !== "production" ? DesktopWrapper.propTypes = {
  onOpen: _propTypes.default.func,
  onClose: _propTypes.default.func
} : void 0;
var _default = DesktopWrapper;
exports.default = _default;
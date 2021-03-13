"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _WrapperVariantContext = require("./WrapperVariantContext");

var _KeyboardDateInput = require("../KeyboardDateInput");

var _utils = require("../utils");

var _PickersPopper = _interopRequireDefault(require("../PickersPopper"));

const DesktopTooltipWrapper = props => {
  const {
    open,
    children,
    PopperProps,
    onDismiss,
    DateInputProps,
    TransitionComponent,
    KeyboardDateInputComponent = _KeyboardDateInput.KeyboardDateInput
  } = props;
  const inputRef = React.useRef(null);
  const popperRef = React.useRef(null);

  const handleBlur = () => {
    (0, _utils.executeInTheNextEventLoopTick)(() => {
      var _inputRef$current, _popperRef$current;

      if ((_inputRef$current = inputRef.current) !== null && _inputRef$current !== void 0 && _inputRef$current.contains(document.activeElement) || (_popperRef$current = popperRef.current) !== null && _popperRef$current !== void 0 && _popperRef$current.contains(document.activeElement)) {
        return;
      }

      onDismiss();
    });
  };

  return /*#__PURE__*/React.createElement(_WrapperVariantContext.WrapperVariantContext.Provider, {
    value: "desktop"
  }, /*#__PURE__*/React.createElement(KeyboardDateInputComponent, (0, _extends2.default)({}, DateInputProps, {
    containerRef: inputRef,
    onBlur: handleBlur
  })), /*#__PURE__*/React.createElement(_PickersPopper.default, {
    role: "tooltip",
    open: open,
    containerRef: popperRef,
    anchorEl: inputRef.current,
    TransitionComponent: TransitionComponent,
    PopperProps: PopperProps,
    onBlur: handleBlur,
    onClose: onDismiss
  }, children));
};

var _default = DesktopTooltipWrapper;
exports.default = _default;
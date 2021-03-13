"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeWrapperComponent = makeWrapperComponent;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

/* Creates a component that rendering modal/popover/nothing and spreading props down to text field */
function makeWrapperComponent(Wrapper, {
  KeyboardDateInputComponent,
  PureDateInputComponent
}) {
  function WrapperComponent(props) {
    const {
      cancelText,
      clearable,
      clearText,
      DateInputProps,
      DialogProps,
      displayStaticWrapperAs,
      okText,
      PopperProps,
      todayText,
      wrapperProps
    } = props,
          other = (0, _objectWithoutPropertiesLoose2.default)(props, ["disableCloseOnSelect", "cancelText", "clearable", "clearText", "DateInputProps", "DialogProps", "displayStaticWrapperAs", "inputFormat", "okText", "onAccept", "onChange", "onClose", "onOpen", "open", "PopperProps", "todayText", "value", "wrapperProps"]);
    const TypedWrapper = Wrapper;
    return /*#__PURE__*/React.createElement(TypedWrapper, (0, _extends2.default)({
      clearable: clearable,
      clearText: clearText,
      DialogProps: DialogProps,
      PopperProps: PopperProps,
      okText: okText,
      todayText: todayText,
      cancelText: cancelText,
      DateInputProps: DateInputProps,
      KeyboardDateInputComponent: KeyboardDateInputComponent,
      PureDateInputComponent: PureDateInputComponent,
      displayStaticWrapperAs: displayStaticWrapperAs
    }, wrapperProps, other));
  }

  return WrapperComponent;
}

var _default = makeWrapperComponent;
exports.default = _default;
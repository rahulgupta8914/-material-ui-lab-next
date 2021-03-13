"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.KeyboardDateInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _utils = require("@material-ui/core/utils");

var _useUtils = require("./hooks/useUtils");

var _Calendar = _interopRequireDefault(require("../svg-icons/Calendar"));

var _useMaskedInput = require("./hooks/useMaskedInput");

var _textFieldHelper = require("./text-field-helper");

var _ref = /*#__PURE__*/React.createElement(_Calendar.default, null);

const KeyboardDateInput = /*#__PURE__*/React.forwardRef(function KeyboardDateInput(props, ref) {
  const {
    containerRef,
    disableOpenPicker,
    getOpenDialogAriaText = _textFieldHelper.getTextFieldAriaText,
    InputAdornmentProps,
    InputProps,
    inputRef = null,
    openPicker,
    OpenPickerButtonProps,
    openPickerIcon = _ref,
    renderInput
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["containerRef", "disableOpenPicker", "getOpenDialogAriaText", "InputAdornmentProps", "InputProps", "inputRef", "openPicker", "OpenPickerButtonProps", "openPickerIcon", "renderInput"]);
  const utils = (0, _useUtils.useUtils)();
  const inputRefHandle = (0, _utils.useForkRef)(inputRef, ref);
  const textFieldProps = (0, _useMaskedInput.useMaskedInput)(other);
  const adornmentPosition = (InputAdornmentProps === null || InputAdornmentProps === void 0 ? void 0 : InputAdornmentProps.position) || 'end';
  return renderInput((0, _extends2.default)({
    ref: containerRef,
    inputRef: inputRefHandle
  }, textFieldProps, {
    InputProps: (0, _extends2.default)({}, InputProps, {
      [`${adornmentPosition}Adornment`]: disableOpenPicker ? undefined : /*#__PURE__*/React.createElement(_InputAdornment.default, (0, _extends2.default)({
        position: adornmentPosition
      }, InputAdornmentProps), /*#__PURE__*/React.createElement(_IconButton.default, (0, _extends2.default)({
        edge: adornmentPosition,
        disabled: other.disabled,
        "aria-label": getOpenDialogAriaText(other.rawValue, utils)
      }, OpenPickerButtonProps, {
        onClick: openPicker
      }), openPickerIcon))
    })
  }));
});
exports.KeyboardDateInput = KeyboardDateInput;
process.env.NODE_ENV !== "production" ? KeyboardDateInput.propTypes = {
  acceptRegex: _propTypes.default.instanceOf(RegExp),
  getOpenDialogAriaText: _propTypes.default.func,
  mask: _propTypes.default.string,
  OpenPickerButtonProps: _propTypes.default.object,
  openPickerIcon: _propTypes.default.node,
  renderInput: _propTypes.default.func.isRequired,
  rifmFormatter: _propTypes.default.func
} : void 0;
var _default = KeyboardDateInput;
exports.default = _default;
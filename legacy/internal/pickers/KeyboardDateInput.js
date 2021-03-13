import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useForkRef } from '@material-ui/core/utils';
import { useUtils } from './hooks/useUtils';
import CalendarIcon from '../svg-icons/Calendar';
import { useMaskedInput } from './hooks/useMaskedInput';
import { getTextFieldAriaText } from './text-field-helper';

var _ref = /*#__PURE__*/React.createElement(CalendarIcon, null);

export var KeyboardDateInput = /*#__PURE__*/React.forwardRef(function KeyboardDateInput(props, ref) {
  var containerRef = props.containerRef,
      disableOpenPicker = props.disableOpenPicker,
      _props$getOpenDialogA = props.getOpenDialogAriaText,
      getOpenDialogAriaText = _props$getOpenDialogA === void 0 ? getTextFieldAriaText : _props$getOpenDialogA,
      InputAdornmentProps = props.InputAdornmentProps,
      InputProps = props.InputProps,
      _props$inputRef = props.inputRef,
      inputRef = _props$inputRef === void 0 ? null : _props$inputRef,
      openPicker = props.openPicker,
      OpenPickerButtonProps = props.OpenPickerButtonProps,
      _props$openPickerIcon = props.openPickerIcon,
      openPickerIcon = _props$openPickerIcon === void 0 ? _ref : _props$openPickerIcon,
      renderInput = props.renderInput,
      other = _objectWithoutProperties(props, ["containerRef", "disableOpenPicker", "getOpenDialogAriaText", "InputAdornmentProps", "InputProps", "inputRef", "openPicker", "OpenPickerButtonProps", "openPickerIcon", "renderInput"]);

  var utils = useUtils();
  var inputRefHandle = useForkRef(inputRef, ref);
  var textFieldProps = useMaskedInput(other);
  var adornmentPosition = (InputAdornmentProps === null || InputAdornmentProps === void 0 ? void 0 : InputAdornmentProps.position) || 'end';
  return renderInput(_extends({
    ref: containerRef,
    inputRef: inputRefHandle
  }, textFieldProps, {
    InputProps: _extends({}, InputProps, _defineProperty({}, "".concat(adornmentPosition, "Adornment"), disableOpenPicker ? undefined : /*#__PURE__*/React.createElement(InputAdornment, _extends({
      position: adornmentPosition
    }, InputAdornmentProps), /*#__PURE__*/React.createElement(IconButton, _extends({
      edge: adornmentPosition,
      disabled: other.disabled,
      "aria-label": getOpenDialogAriaText(other.rawValue, utils)
    }, OpenPickerButtonProps, {
      onClick: openPicker
    }), openPickerIcon))))
  }));
});
process.env.NODE_ENV !== "production" ? KeyboardDateInput.propTypes = {
  acceptRegex: PropTypes.instanceOf(RegExp),
  getOpenDialogAriaText: PropTypes.func,
  mask: PropTypes.string,
  OpenPickerButtonProps: PropTypes.object,
  openPickerIcon: PropTypes.node,
  renderInput: PropTypes.func.isRequired,
  rifmFormatter: PropTypes.func
} : void 0;
export default KeyboardDateInput;
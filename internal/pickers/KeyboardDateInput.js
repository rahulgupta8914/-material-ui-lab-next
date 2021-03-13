import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
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

export const KeyboardDateInput = /*#__PURE__*/React.forwardRef(function KeyboardDateInput(props, ref) {
  const {
    containerRef,
    disableOpenPicker,
    getOpenDialogAriaText = getTextFieldAriaText,
    InputAdornmentProps,
    InputProps,
    inputRef = null,
    openPicker,
    OpenPickerButtonProps,
    openPickerIcon = _ref,
    renderInput
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["containerRef", "disableOpenPicker", "getOpenDialogAriaText", "InputAdornmentProps", "InputProps", "inputRef", "openPicker", "OpenPickerButtonProps", "openPickerIcon", "renderInput"]);

  const utils = useUtils();
  const inputRefHandle = useForkRef(inputRef, ref);
  const textFieldProps = useMaskedInput(other);
  const adornmentPosition = (InputAdornmentProps === null || InputAdornmentProps === void 0 ? void 0 : InputAdornmentProps.position) || 'end';
  return renderInput(_extends({
    ref: containerRef,
    inputRef: inputRefHandle
  }, textFieldProps, {
    InputProps: _extends({}, InputProps, {
      [`${adornmentPosition}Adornment`]: disableOpenPicker ? undefined : /*#__PURE__*/React.createElement(InputAdornment, _extends({
        position: adornmentPosition
      }, InputAdornmentProps), /*#__PURE__*/React.createElement(IconButton, _extends({
        edge: adornmentPosition,
        disabled: other.disabled,
        "aria-label": getOpenDialogAriaText(other.rawValue, utils)
      }, OpenPickerButtonProps, {
        onClick: openPicker
      }), openPickerIcon))
    })
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
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import { unstable_useThemeProps as useThemeProps } from '@material-ui/core/styles';
import Picker from './Picker';
import { parsePickerInputValue } from '../date-utils';
import { KeyboardDateInput } from '../KeyboardDateInput';
import { makeWrapperComponent } from '../wrappers/makeWrapperComponent';
import { PureDateInput } from '../PureDateInput';
import { usePickerState } from '../hooks/usePickerState';
var valueManager = {
  emptyValue: null,
  parseInput: parsePickerInputValue,
  areValuesEqual: function areValuesEqual(utils, a, b) {
    return utils.isEqual(a, b);
  }
};
export function makePickerWithState(Wrapper, _ref) {
  var name = _ref.name,
      useInterceptProps = _ref.useInterceptProps,
      useValidation = _ref.useValidation,
      DefaultToolbarComponent = _ref.DefaultToolbarComponent;
  var WrapperComponent = makeWrapperComponent(Wrapper, {
    KeyboardDateInputComponent: KeyboardDateInput,
    PureDateInputComponent: PureDateInput
  });
  var PickerWithState = /*#__PURE__*/React.forwardRef(function PickerWithState(__props, ref) {
    var allProps = useInterceptProps(__props); // This is technically unsound if the type parameters appear in optional props.
    // Optional props can be filled by `useThemeProps` with types that don't match the type parameters.

    var props = useThemeProps({
      props: allProps,
      name: name
    });
    var validationError = useValidation(props.value, props) !== null;

    var _usePickerState = usePickerState(props, valueManager),
        pickerProps = _usePickerState.pickerProps,
        inputProps = _usePickerState.inputProps,
        wrapperProps = _usePickerState.wrapperProps; // Note that we are passing down all the value without spread.
    // It saves us >1kb gzip and make any prop available automatically on any level down.


    var value = props.value,
        onChange = props.onChange,
        other = _objectWithoutProperties(props, ["value", "onChange"]);

    var AllDateInputProps = _extends({}, inputProps, other, {
      ref: ref,
      validationError: validationError
    });

    return /*#__PURE__*/React.createElement(WrapperComponent, _extends({
      wrapperProps: wrapperProps,
      DateInputProps: AllDateInputProps
    }, other), /*#__PURE__*/React.createElement(Picker, _extends({}, pickerProps, {
      toolbarTitle: props.label || props.toolbarTitle,
      ToolbarComponent: other.ToolbarComponent || DefaultToolbarComponent,
      DateInputProps: AllDateInputProps
    }, other)));
  }); // @ts-expect-error Types are equal except `forwardRef` calls the returned types with `PropsWithoutRef`.
  // The distributive nature of `PropsWithOutRef` causes the type error.
  // TODO: Find out why we need a distributive `PropsWithOutRef`.

  return PickerWithState;
}
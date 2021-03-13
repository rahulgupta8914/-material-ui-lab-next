import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import { unstable_useThemeProps as useThemeProps } from '@material-ui/core/styles';
import Picker from './Picker';
import { parsePickerInputValue } from '../date-utils';
import { KeyboardDateInput } from '../KeyboardDateInput';
import { makeWrapperComponent } from '../wrappers/makeWrapperComponent';
import { PureDateInput } from '../PureDateInput';
import { usePickerState } from '../hooks/usePickerState';
const valueManager = {
  emptyValue: null,
  parseInput: parsePickerInputValue,
  areValuesEqual: (utils, a, b) => utils.isEqual(a, b)
};
export function makePickerWithState(Wrapper, {
  name,
  useInterceptProps,
  useValidation,
  DefaultToolbarComponent
}) {
  const WrapperComponent = makeWrapperComponent(Wrapper, {
    KeyboardDateInputComponent: KeyboardDateInput,
    PureDateInputComponent: PureDateInput
  });
  const PickerWithState = /*#__PURE__*/React.forwardRef(function PickerWithState(__props, ref) {
    const allProps = useInterceptProps(__props); // This is technically unsound if the type parameters appear in optional props.
    // Optional props can be filled by `useThemeProps` with types that don't match the type parameters.

    const props = useThemeProps({
      props: allProps,
      name
    });
    const validationError = useValidation(props.value, props) !== null;
    const {
      pickerProps,
      inputProps,
      wrapperProps
    } = usePickerState(props, valueManager); // Note that we are passing down all the value without spread.
    // It saves us >1kb gzip and make any prop available automatically on any level down.

    const other = _objectWithoutPropertiesLoose(props, ["value", "onChange"]);

    const AllDateInputProps = _extends({}, inputProps, other, {
      ref,
      validationError
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
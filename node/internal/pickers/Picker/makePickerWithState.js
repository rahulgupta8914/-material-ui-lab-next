"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePickerWithState = makePickerWithState;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _Picker = _interopRequireDefault(require("./Picker"));

var _dateUtils = require("../date-utils");

var _KeyboardDateInput = require("../KeyboardDateInput");

var _makeWrapperComponent = require("../wrappers/makeWrapperComponent");

var _PureDateInput = require("../PureDateInput");

var _usePickerState = require("../hooks/usePickerState");

const valueManager = {
  emptyValue: null,
  parseInput: _dateUtils.parsePickerInputValue,
  areValuesEqual: (utils, a, b) => utils.isEqual(a, b)
};

function makePickerWithState(Wrapper, {
  name,
  useInterceptProps,
  useValidation,
  DefaultToolbarComponent
}) {
  const WrapperComponent = (0, _makeWrapperComponent.makeWrapperComponent)(Wrapper, {
    KeyboardDateInputComponent: _KeyboardDateInput.KeyboardDateInput,
    PureDateInputComponent: _PureDateInput.PureDateInput
  });
  const PickerWithState = /*#__PURE__*/React.forwardRef(function PickerWithState(__props, ref) {
    const allProps = useInterceptProps(__props); // This is technically unsound if the type parameters appear in optional props.
    // Optional props can be filled by `useThemeProps` with types that don't match the type parameters.

    const props = (0, _styles.unstable_useThemeProps)({
      props: allProps,
      name
    });
    const validationError = useValidation(props.value, props) !== null;
    const {
      pickerProps,
      inputProps,
      wrapperProps
    } = (0, _usePickerState.usePickerState)(props, valueManager); // Note that we are passing down all the value without spread.
    // It saves us >1kb gzip and make any prop available automatically on any level down.

    const other = (0, _objectWithoutPropertiesLoose2.default)(props, ["value", "onChange"]);
    const AllDateInputProps = (0, _extends2.default)({}, inputProps, other, {
      ref,
      validationError
    });
    return /*#__PURE__*/React.createElement(WrapperComponent, (0, _extends2.default)({
      wrapperProps: wrapperProps,
      DateInputProps: AllDateInputProps
    }, other), /*#__PURE__*/React.createElement(_Picker.default, (0, _extends2.default)({}, pickerProps, {
      toolbarTitle: props.label || props.toolbarTitle,
      ToolbarComponent: other.ToolbarComponent || DefaultToolbarComponent,
      DateInputProps: AllDateInputProps
    }, other)));
  }); // @ts-expect-error Types are equal except `forwardRef` calls the returned types with `PropsWithoutRef`.
  // The distributive nature of `PropsWithOutRef` causes the type error.
  // TODO: Find out why we need a distributive `PropsWithOutRef`.

  return PickerWithState;
}
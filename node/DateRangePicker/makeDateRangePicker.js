"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDateRangePicker = makeDateRangePicker;
exports.useDateRangeValidation = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _dateHelpersHooks = require("../internal/pickers/hooks/date-helpers-hooks");

var _makeWrapperComponent = require("../internal/pickers/wrappers/makeWrapperComponent");

var _propTypes = require("../internal/pickers/constants/prop-types");

var _useValidation = require("../internal/pickers/hooks/useValidation");

var _usePickerState = require("../internal/pickers/hooks/usePickerState");

var _DateRangePickerView = require("./DateRangePickerView");

var _DateRangePickerInput = _interopRequireDefault(require("./DateRangePickerInput"));

var _dateUtils = require("../internal/pickers/date-utils");

const useDateRangeValidation = (0, _useValidation.makeValidationHook)(_dateUtils.validateDateRange, {
  isSameError: (a, b) => b !== null && a[1] === b[1] && a[0] === b[0]
});
exports.useDateRangeValidation = useDateRangeValidation;

function makeDateRangePicker(name, Wrapper) {
  const WrapperComponent = (0, _makeWrapperComponent.makeWrapperComponent)(Wrapper, {
    KeyboardDateInputComponent: _DateRangePickerInput.default,
    PureDateInputComponent: _DateRangePickerInput.default
  });
  const rangePickerValueManager = {
    emptyValue: [null, null],
    parseInput: _dateUtils.parseRangeInputValue,
    areValuesEqual: (utils, a, b) => utils.isEqual(a[0], b[0]) && utils.isEqual(a[1], b[1])
  };

  function RangePickerWithStateAndWrapper(inProps) {
    const props = (0, _styles.unstable_useThemeProps)({
      props: inProps,
      name
    });
    const {
      calendars,
      value,
      onChange,
      mask = '__/__/____',
      startText = 'Start',
      endText = 'End',
      inputFormat: passedInputFormat,
      minDate: minDateProp = _propTypes.defaultMinDate,
      maxDate: maxDateProp = _propTypes.defaultMaxDate
    } = props,
          other = (0, _objectWithoutPropertiesLoose2.default)(props, ["calendars", "value", "onChange", "mask", "startText", "endText", "inputFormat", "minDate", "maxDate"]);
    const utils = (0, _useUtils.useUtils)();
    const minDate = (0, _dateHelpersHooks.useParsedDate)(minDateProp);
    const maxDate = (0, _dateHelpersHooks.useParsedDate)(maxDateProp);
    const [currentlySelectingRangeEnd, setCurrentlySelectingRangeEnd] = React.useState('start');
    const pickerStateProps = (0, _extends2.default)({}, other, {
      value,
      onChange,
      inputFormat: passedInputFormat || utils.formats.keyboardDate
    });
    const restProps = (0, _extends2.default)({}, other, {
      minDate,
      maxDate
    });
    const {
      pickerProps,
      inputProps,
      wrapperProps
    } = (0, _usePickerState.usePickerState)(pickerStateProps, rangePickerValueManager);
    const validationError = useDateRangeValidation(value, restProps);
    const DateInputProps = (0, _extends2.default)({}, inputProps, restProps, {
      currentlySelectingRangeEnd,
      setCurrentlySelectingRangeEnd,
      startText,
      endText,
      mask,
      validationError
    });
    return /*#__PURE__*/React.createElement(WrapperComponent, (0, _extends2.default)({
      wrapperProps: wrapperProps,
      DateInputProps: DateInputProps
    }, restProps), /*#__PURE__*/React.createElement(_DateRangePickerView.DateRangePickerView, (0, _extends2.default)({
      open: wrapperProps.open,
      DateInputProps: DateInputProps,
      calendars: calendars,
      currentlySelectingRangeEnd: currentlySelectingRangeEnd,
      setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
      startText: startText,
      endText: endText
    }, pickerProps, restProps)));
  } // @ts-expect-error Impossible to save component generics when wrapping with HOC


  return /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(RangePickerWithStateAndWrapper, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  })));
}
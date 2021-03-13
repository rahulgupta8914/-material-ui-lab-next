import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import { unstable_useThemeProps as useThemeProps } from '@material-ui/core/styles';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import { useParsedDate } from '../internal/pickers/hooks/date-helpers-hooks';
import { makeWrapperComponent } from '../internal/pickers/wrappers/makeWrapperComponent';
import { defaultMinDate, defaultMaxDate } from '../internal/pickers/constants/prop-types';
import { makeValidationHook } from '../internal/pickers/hooks/useValidation';
import { usePickerState } from '../internal/pickers/hooks/usePickerState';
import { DateRangePickerView } from './DateRangePickerView';
import DateRangePickerInput from './DateRangePickerInput';
import { parseRangeInputValue, validateDateRange } from '../internal/pickers/date-utils';
export var useDateRangeValidation = makeValidationHook(validateDateRange, {
  isSameError: function isSameError(a, b) {
    return b !== null && a[1] === b[1] && a[0] === b[0];
  }
});
export function makeDateRangePicker(name, Wrapper) {
  var WrapperComponent = makeWrapperComponent(Wrapper, {
    KeyboardDateInputComponent: DateRangePickerInput,
    PureDateInputComponent: DateRangePickerInput
  });
  var rangePickerValueManager = {
    emptyValue: [null, null],
    parseInput: parseRangeInputValue,
    areValuesEqual: function areValuesEqual(utils, a, b) {
      return utils.isEqual(a[0], b[0]) && utils.isEqual(a[1], b[1]);
    }
  };

  function RangePickerWithStateAndWrapper(inProps) {
    var props = useThemeProps({
      props: inProps,
      name: name
    });

    var calendars = props.calendars,
        value = props.value,
        onChange = props.onChange,
        _props$mask = props.mask,
        mask = _props$mask === void 0 ? '__/__/____' : _props$mask,
        _props$startText = props.startText,
        startText = _props$startText === void 0 ? 'Start' : _props$startText,
        _props$endText = props.endText,
        endText = _props$endText === void 0 ? 'End' : _props$endText,
        passedInputFormat = props.inputFormat,
        _props$minDate = props.minDate,
        minDateProp = _props$minDate === void 0 ? defaultMinDate : _props$minDate,
        _props$maxDate = props.maxDate,
        maxDateProp = _props$maxDate === void 0 ? defaultMaxDate : _props$maxDate,
        other = _objectWithoutProperties(props, ["calendars", "value", "onChange", "mask", "startText", "endText", "inputFormat", "minDate", "maxDate"]);

    var utils = useUtils();
    var minDate = useParsedDate(minDateProp);
    var maxDate = useParsedDate(maxDateProp);

    var _React$useState = React.useState('start'),
        currentlySelectingRangeEnd = _React$useState[0],
        setCurrentlySelectingRangeEnd = _React$useState[1];

    var pickerStateProps = _extends({}, other, {
      value: value,
      onChange: onChange,
      inputFormat: passedInputFormat || utils.formats.keyboardDate
    });

    var restProps = _extends({}, other, {
      minDate: minDate,
      maxDate: maxDate
    });

    var _usePickerState = usePickerState(pickerStateProps, rangePickerValueManager),
        pickerProps = _usePickerState.pickerProps,
        inputProps = _usePickerState.inputProps,
        wrapperProps = _usePickerState.wrapperProps;

    var validationError = useDateRangeValidation(value, restProps);

    var DateInputProps = _extends({}, inputProps, restProps, {
      currentlySelectingRangeEnd: currentlySelectingRangeEnd,
      setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
      startText: startText,
      endText: endText,
      mask: mask,
      validationError: validationError
    });

    return /*#__PURE__*/React.createElement(WrapperComponent, _extends({
      wrapperProps: wrapperProps,
      DateInputProps: DateInputProps
    }, restProps), /*#__PURE__*/React.createElement(DateRangePickerView, _extends({
      open: wrapperProps.open,
      DateInputProps: DateInputProps,
      calendars: calendars,
      currentlySelectingRangeEnd: currentlySelectingRangeEnd,
      setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
      startText: startText,
      endText: endText
    }, pickerProps, restProps)));
  } // @ts-expect-error Impossible to save component generics when wrapping with HOC


  return /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(RangePickerWithStateAndWrapper, _extends({}, props, {
      forwardedRef: ref
    }));
  });
}
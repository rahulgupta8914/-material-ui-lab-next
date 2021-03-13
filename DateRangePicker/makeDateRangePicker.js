import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
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
export const useDateRangeValidation = makeValidationHook(validateDateRange, {
  isSameError: (a, b) => b !== null && a[1] === b[1] && a[0] === b[0]
});
export function makeDateRangePicker(name, Wrapper) {
  const WrapperComponent = makeWrapperComponent(Wrapper, {
    KeyboardDateInputComponent: DateRangePickerInput,
    PureDateInputComponent: DateRangePickerInput
  });
  const rangePickerValueManager = {
    emptyValue: [null, null],
    parseInput: parseRangeInputValue,
    areValuesEqual: (utils, a, b) => utils.isEqual(a[0], b[0]) && utils.isEqual(a[1], b[1])
  };

  function RangePickerWithStateAndWrapper(inProps) {
    const props = useThemeProps({
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
      minDate: minDateProp = defaultMinDate,
      maxDate: maxDateProp = defaultMaxDate
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["calendars", "value", "onChange", "mask", "startText", "endText", "inputFormat", "minDate", "maxDate"]);

    const utils = useUtils();
    const minDate = useParsedDate(minDateProp);
    const maxDate = useParsedDate(maxDateProp);
    const [currentlySelectingRangeEnd, setCurrentlySelectingRangeEnd] = React.useState('start');

    const pickerStateProps = _extends({}, other, {
      value,
      onChange,
      inputFormat: passedInputFormat || utils.formats.keyboardDate
    });

    const restProps = _extends({}, other, {
      minDate,
      maxDate
    });

    const {
      pickerProps,
      inputProps,
      wrapperProps
    } = usePickerState(pickerStateProps, rangePickerValueManager);
    const validationError = useDateRangeValidation(value, restProps);

    const DateInputProps = _extends({}, inputProps, restProps, {
      currentlySelectingRangeEnd,
      setCurrentlySelectingRangeEnd,
      startText,
      endText,
      mask,
      validationError
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


  return /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(RangePickerWithStateAndWrapper, _extends({}, props, {
    forwardedRef: ref
  })));
}
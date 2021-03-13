import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import { useMaskedInput } from '../internal/pickers/hooks/useMaskedInput';
import { WrapperVariantContext } from '../internal/pickers/wrappers/WrapperVariantContext';
import { mergeRefs, executeInTheNextEventLoopTick } from '../internal/pickers/utils';
export var styles = function styles(theme) {
  return {
    root: _defineProperty({
      display: 'flex',
      alignItems: 'baseline'
    }, theme.breakpoints.down('xs'), {
      flexDirection: 'column',
      alignItems: 'center'
    }),
    toLabelDelimiter: _defineProperty({
      margin: '8px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '0 16px'
    })
  };
};

/**
 * @ignore - internal component.
 */
var DateRangePickerInput = function DateRangePickerInput(_ref) {
  var classes = _ref.classes,
      containerRef = _ref.containerRef,
      currentlySelectingRangeEnd = _ref.currentlySelectingRangeEnd,
      disableOpenPicker = _ref.disableOpenPicker,
      endText = _ref.endText,
      forwardedRef = _ref.forwardedRef,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      open = _ref.open,
      openPicker = _ref.openPicker,
      rawValue = _ref.rawValue,
      _ref$rawValue = _slicedToArray(_ref.rawValue, 2),
      start = _ref$rawValue[0],
      end = _ref$rawValue[1],
      readOnly = _ref.readOnly,
      renderInput = _ref.renderInput,
      setCurrentlySelectingRangeEnd = _ref.setCurrentlySelectingRangeEnd,
      startText = _ref.startText,
      TextFieldProps = _ref.TextFieldProps,
      _ref$validationError = _slicedToArray(_ref.validationError, 2),
      startValidationError = _ref$validationError[0],
      endValidationError = _ref$validationError[1],
      other = _objectWithoutProperties(_ref, ["classes", "containerRef", "currentlySelectingRangeEnd", "disableOpenPicker", "endText", "forwardedRef", "onBlur", "onChange", "open", "openPicker", "rawValue", "rawValue", "readOnly", "renderInput", "setCurrentlySelectingRangeEnd", "startText", "TextFieldProps", "validationError"]);

  var utils = useUtils();
  var startRef = React.useRef(null);
  var endRef = React.useRef(null);
  var wrapperVariant = React.useContext(WrapperVariantContext);
  React.useEffect(function () {
    if (!open) {
      return;
    }

    if (currentlySelectingRangeEnd === 'start') {
      var _startRef$current;

      (_startRef$current = startRef.current) === null || _startRef$current === void 0 ? void 0 : _startRef$current.focus();
    } else if (currentlySelectingRangeEnd === 'end') {
      var _endRef$current;

      (_endRef$current = endRef.current) === null || _endRef$current === void 0 ? void 0 : _endRef$current.focus();
    }
  }, [currentlySelectingRangeEnd, open]); // TODO: rethink this approach. We do not need to wait for calendar to be updated to rerender input (looks like freezing)
  // TODO: so simply break 1 react's commit phase in 2 (first for input and second for calendars) by executing onChange in the next tick

  var lazyHandleChangeCallback = React.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return executeInTheNextEventLoopTick(function () {
      return onChange.apply(void 0, args);
    });
  }, [onChange]);

  var handleStartChange = function handleStartChange(date, inputString) {
    lazyHandleChangeCallback([date, utils.date(end)], inputString);
  };

  var handleEndChange = function handleEndChange(date, inputString) {
    lazyHandleChangeCallback([utils.date(start), date], inputString);
  };

  var openRangeStartSelection = function openRangeStartSelection() {
    if (setCurrentlySelectingRangeEnd) {
      setCurrentlySelectingRangeEnd('start');
    }

    if (!disableOpenPicker) {
      openPicker();
    }
  };

  var openRangeEndSelection = function openRangeEndSelection() {
    if (setCurrentlySelectingRangeEnd) {
      setCurrentlySelectingRangeEnd('end');
    }

    if (!disableOpenPicker) {
      openPicker();
    }
  };

  var openOnFocus = wrapperVariant === 'desktop';
  var startInputProps = useMaskedInput(_extends({}, other, {
    readOnly: readOnly,
    rawValue: start,
    onChange: handleStartChange,
    label: startText,
    validationError: startValidationError !== null,
    TextFieldProps: _extends({}, TextFieldProps, {
      ref: startRef,
      focused: open && currentlySelectingRangeEnd === 'start'
    }),
    inputProps: {
      onClick: !openOnFocus ? openRangeStartSelection : undefined,
      onFocus: openOnFocus ? openRangeStartSelection : undefined
    }
  }));
  var endInputProps = useMaskedInput(_extends({}, other, {
    readOnly: readOnly,
    label: endText,
    rawValue: end,
    onChange: handleEndChange,
    validationError: endValidationError !== null,
    TextFieldProps: _extends({}, TextFieldProps, {
      ref: endRef,
      focused: open && currentlySelectingRangeEnd === 'end'
    }),
    inputProps: {
      onClick: !openOnFocus ? openRangeEndSelection : undefined,
      onFocus: openOnFocus ? openRangeEndSelection : undefined
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    onBlur: onBlur,
    className: classes.root,
    ref: mergeRefs([containerRef, forwardedRef])
  }, renderInput(startInputProps, endInputProps));
};

export default withStyles(styles, {
  name: 'MuiDateRangePickerInput'
})(DateRangePickerInput);
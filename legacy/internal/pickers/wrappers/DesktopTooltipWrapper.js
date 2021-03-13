import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { WrapperVariantContext } from './WrapperVariantContext';
import { KeyboardDateInput } from '../KeyboardDateInput';
import { executeInTheNextEventLoopTick } from '../utils';
import PickersPopper from '../PickersPopper';

var DesktopTooltipWrapper = function DesktopTooltipWrapper(props) {
  var open = props.open,
      children = props.children,
      PopperProps = props.PopperProps,
      onDismiss = props.onDismiss,
      DateInputProps = props.DateInputProps,
      TransitionComponent = props.TransitionComponent,
      _props$KeyboardDateIn = props.KeyboardDateInputComponent,
      KeyboardDateInputComponent = _props$KeyboardDateIn === void 0 ? KeyboardDateInput : _props$KeyboardDateIn;
  var inputRef = React.useRef(null);
  var popperRef = React.useRef(null);

  var handleBlur = function handleBlur() {
    executeInTheNextEventLoopTick(function () {
      var _inputRef$current, _popperRef$current;

      if ((_inputRef$current = inputRef.current) !== null && _inputRef$current !== void 0 && _inputRef$current.contains(document.activeElement) || (_popperRef$current = popperRef.current) !== null && _popperRef$current !== void 0 && _popperRef$current.contains(document.activeElement)) {
        return;
      }

      onDismiss();
    });
  };

  return /*#__PURE__*/React.createElement(WrapperVariantContext.Provider, {
    value: "desktop"
  }, /*#__PURE__*/React.createElement(KeyboardDateInputComponent, _extends({}, DateInputProps, {
    containerRef: inputRef,
    onBlur: handleBlur
  })), /*#__PURE__*/React.createElement(PickersPopper, {
    role: "tooltip",
    open: open,
    containerRef: popperRef,
    anchorEl: inputRef.current,
    TransitionComponent: TransitionComponent,
    PopperProps: PopperProps,
    onBlur: handleBlur,
    onClose: onDismiss
  }, children));
};

export default DesktopTooltipWrapper;
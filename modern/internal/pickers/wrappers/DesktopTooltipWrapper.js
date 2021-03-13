import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { WrapperVariantContext } from './WrapperVariantContext';
import { KeyboardDateInput } from '../KeyboardDateInput';
import { executeInTheNextEventLoopTick } from '../utils';
import PickersPopper from '../PickersPopper';

const DesktopTooltipWrapper = props => {
  const {
    open,
    children,
    PopperProps,
    onDismiss,
    DateInputProps,
    TransitionComponent,
    KeyboardDateInputComponent = KeyboardDateInput
  } = props;
  const inputRef = React.useRef(null);
  const popperRef = React.useRef(null);

  const handleBlur = () => {
    executeInTheNextEventLoopTick(() => {
      if (inputRef.current?.contains(document.activeElement) || popperRef.current?.contains(document.activeElement)) {
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
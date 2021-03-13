import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import PropTypes from 'prop-types';
import { WrapperVariantContext } from './WrapperVariantContext';
import { KeyboardDateInput } from '../KeyboardDateInput';
import PickersPopper from '../PickersPopper';

var DesktopWrapper = function DesktopWrapper(props) {
  var children = props.children,
      DateInputProps = props.DateInputProps,
      _props$KeyboardDateIn = props.KeyboardDateInputComponent,
      KeyboardDateInputComponent = _props$KeyboardDateIn === void 0 ? KeyboardDateInput : _props$KeyboardDateIn,
      onDismiss = props.onDismiss,
      open = props.open,
      PopperProps = props.PopperProps,
      TransitionComponent = props.TransitionComponent;
  var inputRef = React.useRef(null);
  return /*#__PURE__*/React.createElement(WrapperVariantContext.Provider, {
    value: "desktop"
  }, /*#__PURE__*/React.createElement(KeyboardDateInputComponent, _extends({}, DateInputProps, {
    inputRef: inputRef
  })), /*#__PURE__*/React.createElement(PickersPopper, {
    role: "dialog",
    open: open,
    anchorEl: inputRef.current,
    TransitionComponent: TransitionComponent,
    PopperProps: PopperProps,
    onClose: onDismiss
  }, children));
};

process.env.NODE_ENV !== "production" ? DesktopWrapper.propTypes = {
  onOpen: PropTypes.func,
  onClose: PropTypes.func
} : void 0;
export default DesktopWrapper;
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import PropTypes from 'prop-types';
import { WrapperVariantContext } from './WrapperVariantContext';
import { KeyboardDateInput } from '../KeyboardDateInput';
import PickersPopper from '../PickersPopper';

const DesktopWrapper = props => {
  const {
    children,
    DateInputProps,
    KeyboardDateInputComponent = KeyboardDateInput,
    onDismiss,
    open,
    PopperProps,
    TransitionComponent
  } = props;
  const inputRef = React.useRef(null);
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
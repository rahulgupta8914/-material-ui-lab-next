import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import { PureDateInput } from '../PureDateInput';
import { WrapperVariantContext } from './WrapperVariantContext';
import PickersModalDialog from '../PickersModalDialog';

const MobileWrapper = props => {
  const {
    cancelText,
    children,
    clearable,
    clearText,
    DateInputProps,
    DialogProps,
    okText,
    onAccept,
    onClear,
    onDismiss,
    onSetToday,
    open,
    PureDateInputComponent = PureDateInput,
    showTodayButton,
    todayText
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["cancelText", "children", "clearable", "clearText", "DateInputProps", "DialogProps", "KeyboardDateInputComponent", "okText", "onAccept", "onClear", "onDismiss", "onSetToday", "open", "PureDateInputComponent", "showTodayButton", "todayText"]);

  return /*#__PURE__*/React.createElement(WrapperVariantContext.Provider, {
    value: "mobile"
  }, /*#__PURE__*/React.createElement(PureDateInputComponent, _extends({}, other, DateInputProps)), /*#__PURE__*/React.createElement(PickersModalDialog, {
    open: open,
    onClear: onClear,
    onAccept: onAccept,
    onDismiss: onDismiss,
    onSetToday: onSetToday,
    clearText: clearText,
    todayText: todayText,
    okText: okText,
    cancelText: cancelText,
    clearable: clearable,
    showTodayButton: showTodayButton,
    DialogProps: DialogProps
  }, children));
};

process.env.NODE_ENV !== "production" ? MobileWrapper.propTypes = {
  cancelText: PropTypes.node,
  clearable: PropTypes.bool,
  clearText: PropTypes.node,
  DialogProps: PropTypes.object,
  okText: PropTypes.node,
  showTodayButton: PropTypes.bool,
  todayText: PropTypes.node
} : void 0;
export default MobileWrapper;
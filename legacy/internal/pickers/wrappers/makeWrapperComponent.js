import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';

/* Creates a component that rendering modal/popover/nothing and spreading props down to text field */
export function makeWrapperComponent(Wrapper, _ref) {
  var KeyboardDateInputComponent = _ref.KeyboardDateInputComponent,
      PureDateInputComponent = _ref.PureDateInputComponent;

  function WrapperComponent(props) {
    var disableCloseOnSelect = props.disableCloseOnSelect,
        cancelText = props.cancelText,
        clearable = props.clearable,
        clearText = props.clearText,
        DateInputProps = props.DateInputProps,
        DialogProps = props.DialogProps,
        displayStaticWrapperAs = props.displayStaticWrapperAs,
        inputFormat = props.inputFormat,
        okText = props.okText,
        onAccept = props.onAccept,
        onChange = props.onChange,
        onClose = props.onClose,
        onOpen = props.onOpen,
        open = props.open,
        PopperProps = props.PopperProps,
        todayText = props.todayText,
        value = props.value,
        wrapperProps = props.wrapperProps,
        other = _objectWithoutProperties(props, ["disableCloseOnSelect", "cancelText", "clearable", "clearText", "DateInputProps", "DialogProps", "displayStaticWrapperAs", "inputFormat", "okText", "onAccept", "onChange", "onClose", "onOpen", "open", "PopperProps", "todayText", "value", "wrapperProps"]);

    var TypedWrapper = Wrapper;
    return /*#__PURE__*/React.createElement(TypedWrapper, _extends({
      clearable: clearable,
      clearText: clearText,
      DialogProps: DialogProps,
      PopperProps: PopperProps,
      okText: okText,
      todayText: todayText,
      cancelText: cancelText,
      DateInputProps: DateInputProps,
      KeyboardDateInputComponent: KeyboardDateInputComponent,
      PureDateInputComponent: PureDateInputComponent,
      displayStaticWrapperAs: displayStaticWrapperAs
    }, wrapperProps, other));
  }

  return WrapperComponent;
}
export default makeWrapperComponent;
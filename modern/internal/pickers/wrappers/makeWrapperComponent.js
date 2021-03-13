import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';

/* Creates a component that rendering modal/popover/nothing and spreading props down to text field */
export function makeWrapperComponent(Wrapper, {
  KeyboardDateInputComponent,
  PureDateInputComponent
}) {
  function WrapperComponent(props) {
    const {
      cancelText,
      clearable,
      clearText,
      DateInputProps,
      DialogProps,
      displayStaticWrapperAs,
      okText,
      PopperProps,
      todayText,
      wrapperProps
    } = props,
          other = _objectWithoutPropertiesLoose(props, ["disableCloseOnSelect", "cancelText", "clearable", "clearText", "DateInputProps", "DialogProps", "displayStaticWrapperAs", "inputFormat", "okText", "onAccept", "onChange", "onClose", "onOpen", "open", "PopperProps", "todayText", "value", "wrapperProps"]);

    const TypedWrapper = Wrapper;
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
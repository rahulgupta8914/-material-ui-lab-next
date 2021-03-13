import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import ClockPicker from './ClockPicker';
import PickerView from '../internal/pickers/Picker/PickerView';
import { useViews } from '../internal/pickers/hooks/useViews';

/**
 * Wrapping public API for better standalone usage of './ClockPicker'
 * @ignore - internal component.
 */
export default /*#__PURE__*/React.forwardRef(function ClockPickerStandalone(props, ref) {
  const {
    view,
    openTo,
    className,
    onViewChange,
    views = ['hours', 'minutes']
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["view", "openTo", "className", "onViewChange", "views"]);

  const {
    openView,
    setOpenView,
    nextView,
    previousView
  } = useViews({
    view,
    views,
    openTo,
    onViewChange,
    onChange: other.onChange
  });
  return /*#__PURE__*/React.createElement(PickerView, {
    className: className,
    ref: ref
  }, /*#__PURE__*/React.createElement(ClockPicker, _extends({
    view: openView,
    nextViewAvailable: Boolean(nextView),
    previousViewAvailable: Boolean(previousView),
    openNextView: () => setOpenView(nextView),
    openPreviousView: () => setOpenView(previousView)
  }, other)));
});
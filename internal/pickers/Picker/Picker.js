import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import clsx from 'clsx';
import { styled, withStyles } from '@material-ui/core/styles';
import { useViews } from '../hooks/useViews';
import ClockPicker from '../../../ClockPicker/ClockPicker';
import DayPicker from '../../../DayPicker/DayPicker';
import { KeyboardDateInput } from '../KeyboardDateInput';
import { useIsLandscape } from '../hooks/useIsLandscape';
import { DIALOG_WIDTH, VIEW_HEIGHT } from '../constants/dimensions';
import { WrapperVariantContext } from '../wrappers/WrapperVariantContext';
import PickerView from './PickerView';
export const MobileKeyboardInputView = styled('div')({
  padding: '16px 24px'
}, {
  name: 'MuiPickersMobileKeyboardInputView'
});
export const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  landscape: {
    flexDirection: 'row'
  },
  pickerView: {
    overflowX: 'hidden',
    width: DIALOG_WIDTH,
    maxHeight: VIEW_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
  }
};
const MobileKeyboardTextFieldProps = {
  fullWidth: true
};

const isDatePickerView = view => view === 'year' || view === 'month' || view === 'date';

const isTimePickerView = view => view === 'hours' || view === 'minutes' || view === 'seconds';

function Picker(_ref) {
  let {
    classes,
    className,
    date,
    DateInputProps,
    isMobileKeyboardViewOpen,
    onDateChange,
    openTo = 'date',
    orientation,
    showToolbar,
    toggleMobileKeyboardView,
    ToolbarComponent = () => null,
    toolbarFormat,
    toolbarPlaceholder,
    toolbarTitle,
    views = ['year', 'month', 'date', 'hours', 'minutes', 'seconds']
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["classes", "className", "date", "DateInputProps", "isMobileKeyboardViewOpen", "onDateChange", "openTo", "orientation", "showToolbar", "toggleMobileKeyboardView", "ToolbarComponent", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"]);

  const isLandscape = useIsLandscape(views, orientation);
  const wrapperVariant = React.useContext(WrapperVariantContext);
  const toShowToolbar = typeof showToolbar === 'undefined' ? wrapperVariant !== 'desktop' : showToolbar;
  const handleDateChange = React.useCallback((newDate, selectionState) => {
    onDateChange(newDate, wrapperVariant, selectionState);
  }, [onDateChange, wrapperVariant]);
  const {
    openView,
    nextView,
    previousView,
    setOpenView,
    handleChangeAndOpenNext
  } = useViews({
    view: undefined,
    views,
    openTo,
    onChange: handleDateChange
  });
  React.useEffect(() => {
    if (isMobileKeyboardViewOpen && toggleMobileKeyboardView) {
      toggleMobileKeyboardView();
    } // React on `openView` change

  }, [openView]); // eslint-disable-line

  return /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.root, className, isLandscape && classes.landscape)
  }, toShowToolbar && /*#__PURE__*/React.createElement(ToolbarComponent, _extends({}, other, {
    views: views,
    isLandscape: isLandscape,
    date: date,
    onChange: handleDateChange,
    setOpenView: setOpenView,
    openView: openView,
    toolbarTitle: toolbarTitle,
    toolbarFormat: toolbarFormat,
    toolbarPlaceholder: toolbarPlaceholder,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView
  })), /*#__PURE__*/React.createElement(PickerView, null, isMobileKeyboardViewOpen ? /*#__PURE__*/React.createElement(MobileKeyboardInputView, null, /*#__PURE__*/React.createElement(KeyboardDateInput, _extends({}, DateInputProps, {
    ignoreInvalidInputs: true,
    disableOpenPicker: true,
    TextFieldProps: MobileKeyboardTextFieldProps
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, isDatePickerView(openView) && /*#__PURE__*/React.createElement(DayPicker, _extends({
    date: date,
    onViewChange: setOpenView,
    onChange: handleChangeAndOpenNext,
    view: openView,
    views: views.filter(isDatePickerView)
  }, other)), isTimePickerView(openView) && /*#__PURE__*/React.createElement(ClockPicker, _extends({}, other, {
    date: date,
    view: openView,
    onChange: handleChangeAndOpenNext,
    openNextView: () => setOpenView(nextView),
    openPreviousView: () => setOpenView(previousView),
    nextViewAvailable: !nextView,
    previousViewAvailable: !previousView || isDatePickerView(previousView),
    showViewSwitcher: wrapperVariant === 'desktop'
  })))));
}

export default withStyles(styles, {
  name: 'MuiPicker'
})(Picker);
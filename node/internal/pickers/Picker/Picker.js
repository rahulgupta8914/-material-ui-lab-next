"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = exports.MobileKeyboardInputView = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _useViews = require("../hooks/useViews");

var _ClockPicker = _interopRequireDefault(require("../../../ClockPicker/ClockPicker"));

var _DayPicker = _interopRequireDefault(require("../../../DayPicker/DayPicker"));

var _KeyboardDateInput = require("../KeyboardDateInput");

var _useIsLandscape = require("../hooks/useIsLandscape");

var _dimensions = require("../constants/dimensions");

var _WrapperVariantContext = require("../wrappers/WrapperVariantContext");

var _PickerView = _interopRequireDefault(require("./PickerView"));

const MobileKeyboardInputView = (0, _styles.styled)('div')({
  padding: '16px 24px'
}, {
  name: 'MuiPickersMobileKeyboardInputView'
});
exports.MobileKeyboardInputView = MobileKeyboardInputView;
const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  landscape: {
    flexDirection: 'row'
  },
  pickerView: {
    overflowX: 'hidden',
    width: _dimensions.DIALOG_WIDTH,
    maxHeight: _dimensions.VIEW_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
  }
};
exports.styles = styles;
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
      other = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["classes", "className", "date", "DateInputProps", "isMobileKeyboardViewOpen", "onDateChange", "openTo", "orientation", "showToolbar", "toggleMobileKeyboardView", "ToolbarComponent", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"]);
  const isLandscape = (0, _useIsLandscape.useIsLandscape)(views, orientation);
  const wrapperVariant = React.useContext(_WrapperVariantContext.WrapperVariantContext);
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
  } = (0, _useViews.useViews)({
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
    className: (0, _clsx.default)(classes.root, className, isLandscape && classes.landscape)
  }, toShowToolbar && /*#__PURE__*/React.createElement(ToolbarComponent, (0, _extends2.default)({}, other, {
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
  })), /*#__PURE__*/React.createElement(_PickerView.default, null, isMobileKeyboardViewOpen ? /*#__PURE__*/React.createElement(MobileKeyboardInputView, null, /*#__PURE__*/React.createElement(_KeyboardDateInput.KeyboardDateInput, (0, _extends2.default)({}, DateInputProps, {
    ignoreInvalidInputs: true,
    disableOpenPicker: true,
    TextFieldProps: MobileKeyboardTextFieldProps
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, isDatePickerView(openView) && /*#__PURE__*/React.createElement(_DayPicker.default, (0, _extends2.default)({
    date: date,
    onViewChange: setOpenView,
    onChange: handleChangeAndOpenNext,
    view: openView,
    views: views.filter(isDatePickerView)
  }, other)), isTimePickerView(openView) && /*#__PURE__*/React.createElement(_ClockPicker.default, (0, _extends2.default)({}, other, {
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

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiPicker'
})(Picker);

exports.default = _default;
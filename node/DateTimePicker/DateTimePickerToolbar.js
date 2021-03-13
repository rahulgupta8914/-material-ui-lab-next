"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _PickersToolbarText = _interopRequireDefault(require("../internal/pickers/PickersToolbarText"));

var _PickersToolbar = _interopRequireDefault(require("../internal/pickers/PickersToolbar"));

var _PickersToolbarButton = _interopRequireDefault(require("../internal/pickers/PickersToolbarButton"));

var _DateTimePickerTabs = _interopRequireDefault(require("./DateTimePickerTabs"));

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _WrapperVariantContext = require("../internal/pickers/wrappers/WrapperVariantContext");

const styles = {
  root: {
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'space-around'
  },
  separator: {
    margin: '0 4px 0 2px',
    cursor: 'default'
  },
  timeContainer: {
    display: 'flex'
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  timeTypography: {},
  penIcon: {
    position: 'absolute',
    top: 8,
    right: 8
  }
};
exports.styles = styles;

/**
 * @ignore - internal component.
 */
const DateTimePickerToolbar = props => {
  const {
    ampm,
    date,
    dateRangeIcon,
    classes,
    hideTabs,
    isMobileKeyboardViewOpen,
    openView,
    setOpenView,
    timeIcon,
    toggleMobileKeyboardView,
    toolbarFormat,
    toolbarPlaceholder = '––',
    toolbarTitle = 'SELECT DATE & TIME'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["ampm", "date", "dateRangeIcon", "classes", "hideTabs", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "timeIcon", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle"]);
  const utils = (0, _useUtils.useUtils)();
  const wrapperVariant = React.useContext(_WrapperVariantContext.WrapperVariantContext);
  const showTabs = wrapperVariant === 'desktop' ? true : !hideTabs && typeof window !== 'undefined' && window.innerHeight > 667;

  const formatHours = time => ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');

  const dateText = React.useMemo(() => {
    if (!date) {
      return toolbarPlaceholder;
    }

    if (toolbarFormat) {
      return utils.formatByString(date, toolbarFormat);
    }

    return utils.format(date, 'shortDate');
  }, [date, toolbarFormat, toolbarPlaceholder, utils]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, wrapperVariant !== 'desktop' && /*#__PURE__*/React.createElement(_PickersToolbar.default, (0, _extends2.default)({
    toolbarTitle: toolbarTitle,
    penIconClassName: classes.penIcon,
    className: classes.root,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView
  }, other, {
    isLandscape: false
  }), /*#__PURE__*/React.createElement("div", {
    className: classes.dateContainer
  }, /*#__PURE__*/React.createElement(_PickersToolbarButton.default, {
    tabIndex: -1,
    variant: "subtitle1",
    onClick: () => setOpenView('year'),
    selected: openView === 'year',
    value: date ? utils.format(date, 'year') : '–'
  }), /*#__PURE__*/React.createElement(_PickersToolbarButton.default, {
    tabIndex: -1,
    variant: "h4",
    onClick: () => setOpenView('date'),
    selected: openView === 'date',
    value: dateText
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.timeContainer
  }, /*#__PURE__*/React.createElement(_PickersToolbarButton.default, {
    variant: "h3",
    onClick: () => setOpenView('hours'),
    selected: openView === 'hours',
    value: date ? formatHours(date) : '--',
    typographyClassName: classes.timeTypography
  }), /*#__PURE__*/React.createElement(_PickersToolbarText.default, {
    variant: "h3",
    value: ":",
    className: classes.separator
  }), /*#__PURE__*/React.createElement(_PickersToolbarButton.default, {
    variant: "h3",
    onClick: () => setOpenView('minutes'),
    selected: openView === 'minutes',
    value: date ? utils.format(date, 'minutes') : '--',
    typographyClassName: classes.timeTypography
  }))), showTabs && /*#__PURE__*/React.createElement(_DateTimePickerTabs.default, {
    dateRangeIcon: dateRangeIcon,
    timeIcon: timeIcon,
    view: openView,
    onChange: setOpenView
  }));
};

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiDateTimePickerToolbar'
})(DateTimePickerToolbar);

exports.default = _default;
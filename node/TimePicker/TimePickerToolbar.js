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

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _PickersToolbarText = _interopRequireDefault(require("../internal/pickers/PickersToolbarText"));

var _PickersToolbarButton = _interopRequireDefault(require("../internal/pickers/PickersToolbarButton"));

var _PickersToolbar = _interopRequireDefault(require("../internal/pickers/PickersToolbar"));

var _utils = require("../internal/pickers/utils");

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _dateHelpersHooks = require("../internal/pickers/hooks/date-helpers-hooks");

const styles = {
  separator: {
    outline: 0,
    margin: '0 4px 0 2px',
    cursor: 'default'
  },
  hourMinuteLabel: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  hourMinuteLabelLandscape: {
    marginTop: 'auto'
  },
  hourMinuteLabelReverse: {
    flexDirection: 'row-reverse'
  },
  ampmSelection: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 'auto',
    marginLeft: 12
  },
  ampmLandscape: {
    margin: '4px 0 auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexBasis: '100%'
  },
  ampmLabel: {
    fontSize: 17
  },
  penIconLandscape: {
    marginTop: 'auto'
  }
};
/**
 * @ignore - internal component.
 */

exports.styles = styles;

const TimePickerToolbar = props => {
  const {
    ampm,
    ampmInClock,
    classes,
    date,
    isLandscape,
    isMobileKeyboardViewOpen,
    onChange,
    openView,
    setOpenView,
    toggleMobileKeyboardView,
    toolbarTitle = 'SELECT TIME',
    views
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["ampm", "ampmInClock", "classes", "date", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarTitle", "views"]);
  const utils = (0, _useUtils.useUtils)();
  const theme = (0, _styles.useTheme)();
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const {
    meridiemMode,
    handleMeridiemChange
  } = (0, _dateHelpersHooks.useMeridiemMode)(date, ampm, onChange);

  const formatHours = time => ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');

  const separator = /*#__PURE__*/React.createElement(_PickersToolbarText.default, {
    tabIndex: -1,
    value: ":",
    variant: "h3",
    selected: false,
    className: classes.separator
  });
  return /*#__PURE__*/React.createElement(_PickersToolbar.default, (0, _extends2.default)({
    landscapeDirection: "row",
    toolbarTitle: toolbarTitle,
    isLandscape: isLandscape,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    penIconClassName: (0, _clsx.default)(isLandscape && classes.penIconLandscape)
  }, other), /*#__PURE__*/React.createElement("div", {
    className: (0, _clsx.default)(classes.hourMinuteLabel, isLandscape && classes.hourMinuteLabelLandscape, theme.direction === 'rtl' && classes.hourMinuteLabelReverse)
  }, (0, _utils.arrayIncludes)(views, 'hours') && /*#__PURE__*/React.createElement(_PickersToolbarButton.default, {
    tabIndex: -1,
    variant: "h3",
    onClick: () => setOpenView('hours'),
    selected: openView === 'hours',
    value: date ? formatHours(date) : '--'
  }), (0, _utils.arrayIncludes)(views, ['hours', 'minutes']) && separator, (0, _utils.arrayIncludes)(views, 'minutes') && /*#__PURE__*/React.createElement(_PickersToolbarButton.default, {
    tabIndex: -1,
    variant: "h3",
    onClick: () => setOpenView('minutes'),
    selected: openView === 'minutes',
    value: date ? utils.format(date, 'minutes') : '--'
  }), (0, _utils.arrayIncludes)(views, ['minutes', 'seconds']) && separator, (0, _utils.arrayIncludes)(views, 'seconds') && /*#__PURE__*/React.createElement(_PickersToolbarButton.default, {
    variant: "h3",
    onClick: () => setOpenView('seconds'),
    selected: openView === 'seconds',
    value: date ? utils.format(date, 'seconds') : '--'
  })), showAmPmControl && /*#__PURE__*/React.createElement("div", {
    className: (0, _clsx.default)(classes.ampmSelection, isLandscape && classes.ampmLandscape)
  }, /*#__PURE__*/React.createElement(_PickersToolbarButton.default, {
    disableRipple: true,
    variant: "subtitle2",
    selected: meridiemMode === 'am',
    typographyClassName: classes.ampmLabel,
    value: utils.getMeridiemText('am'),
    onClick: () => handleMeridiemChange('am')
  }), /*#__PURE__*/React.createElement(_PickersToolbarButton.default, {
    disableRipple: true,
    variant: "subtitle2",
    selected: meridiemMode === 'pm',
    typographyClassName: classes.ampmLabel,
    value: utils.getMeridiemText('pm'),
    onClick: () => handleMeridiemChange('pm')
  })));
};

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiTimePickerToolbar'
})(TimePickerToolbar);

exports.default = _default;
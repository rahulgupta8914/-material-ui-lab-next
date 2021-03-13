import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import clsx from 'clsx';
import { useTheme, withStyles } from '@material-ui/core/styles';
import PickersToolbarText from '../internal/pickers/PickersToolbarText';
import PickersToolbarButton from '../internal/pickers/PickersToolbarButton';
import PickersToolbar from '../internal/pickers/PickersToolbar';
import { arrayIncludes } from '../internal/pickers/utils';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import { useMeridiemMode } from '../internal/pickers/hooks/date-helpers-hooks';
export var styles = {
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

var TimePickerToolbar = function TimePickerToolbar(props) {
  var ampm = props.ampm,
      ampmInClock = props.ampmInClock,
      classes = props.classes,
      date = props.date,
      isLandscape = props.isLandscape,
      isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
      onChange = props.onChange,
      openView = props.openView,
      setOpenView = props.setOpenView,
      toggleMobileKeyboardView = props.toggleMobileKeyboardView,
      _props$toolbarTitle = props.toolbarTitle,
      toolbarTitle = _props$toolbarTitle === void 0 ? 'SELECT TIME' : _props$toolbarTitle,
      views = props.views,
      other = _objectWithoutProperties(props, ["ampm", "ampmInClock", "classes", "date", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarTitle", "views"]);

  var utils = useUtils();
  var theme = useTheme();
  var showAmPmControl = Boolean(ampm && !ampmInClock);

  var _useMeridiemMode = useMeridiemMode(date, ampm, onChange),
      meridiemMode = _useMeridiemMode.meridiemMode,
      handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

  var formatHours = function formatHours(time) {
    return ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');
  };

  var separator = /*#__PURE__*/React.createElement(PickersToolbarText, {
    tabIndex: -1,
    value: ":",
    variant: "h3",
    selected: false,
    className: classes.separator
  });
  return /*#__PURE__*/React.createElement(PickersToolbar, _extends({
    landscapeDirection: "row",
    toolbarTitle: toolbarTitle,
    isLandscape: isLandscape,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    penIconClassName: clsx(isLandscape && classes.penIconLandscape)
  }, other), /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.hourMinuteLabel, isLandscape && classes.hourMinuteLabelLandscape, theme.direction === 'rtl' && classes.hourMinuteLabelReverse)
  }, arrayIncludes(views, 'hours') && /*#__PURE__*/React.createElement(PickersToolbarButton, {
    tabIndex: -1,
    variant: "h3",
    onClick: function onClick() {
      return setOpenView('hours');
    },
    selected: openView === 'hours',
    value: date ? formatHours(date) : '--'
  }), arrayIncludes(views, ['hours', 'minutes']) && separator, arrayIncludes(views, 'minutes') && /*#__PURE__*/React.createElement(PickersToolbarButton, {
    tabIndex: -1,
    variant: "h3",
    onClick: function onClick() {
      return setOpenView('minutes');
    },
    selected: openView === 'minutes',
    value: date ? utils.format(date, 'minutes') : '--'
  }), arrayIncludes(views, ['minutes', 'seconds']) && separator, arrayIncludes(views, 'seconds') && /*#__PURE__*/React.createElement(PickersToolbarButton, {
    variant: "h3",
    onClick: function onClick() {
      return setOpenView('seconds');
    },
    selected: openView === 'seconds',
    value: date ? utils.format(date, 'seconds') : '--'
  })), showAmPmControl && /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.ampmSelection, isLandscape && classes.ampmLandscape)
  }, /*#__PURE__*/React.createElement(PickersToolbarButton, {
    disableRipple: true,
    variant: "subtitle2",
    selected: meridiemMode === 'am',
    typographyClassName: classes.ampmLabel,
    value: utils.getMeridiemText('am'),
    onClick: function onClick() {
      return handleMeridiemChange('am');
    }
  }), /*#__PURE__*/React.createElement(PickersToolbarButton, {
    disableRipple: true,
    variant: "subtitle2",
    selected: meridiemMode === 'pm',
    typographyClassName: classes.ampmLabel,
    value: utils.getMeridiemText('pm'),
    onClick: function onClick() {
      return handleMeridiemChange('pm');
    }
  })));
};

export default withStyles(styles, {
  name: 'MuiTimePickerToolbar'
})(TimePickerToolbar);
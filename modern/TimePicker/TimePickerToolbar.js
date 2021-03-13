import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import clsx from 'clsx';
import { useTheme, withStyles } from '@material-ui/core/styles';
import PickersToolbarText from '../internal/pickers/PickersToolbarText';
import PickersToolbarButton from '../internal/pickers/PickersToolbarButton';
import PickersToolbar from '../internal/pickers/PickersToolbar';
import { arrayIncludes } from '../internal/pickers/utils';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import { useMeridiemMode } from '../internal/pickers/hooks/date-helpers-hooks';
export const styles = {
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
        other = _objectWithoutPropertiesLoose(props, ["ampm", "ampmInClock", "classes", "date", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarTitle", "views"]);

  const utils = useUtils();
  const theme = useTheme();
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(date, ampm, onChange);

  const formatHours = time => ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');

  const separator = /*#__PURE__*/React.createElement(PickersToolbarText, {
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
    onClick: () => setOpenView('hours'),
    selected: openView === 'hours',
    value: date ? formatHours(date) : '--'
  }), arrayIncludes(views, ['hours', 'minutes']) && separator, arrayIncludes(views, 'minutes') && /*#__PURE__*/React.createElement(PickersToolbarButton, {
    tabIndex: -1,
    variant: "h3",
    onClick: () => setOpenView('minutes'),
    selected: openView === 'minutes',
    value: date ? utils.format(date, 'minutes') : '--'
  }), arrayIncludes(views, ['minutes', 'seconds']) && separator, arrayIncludes(views, 'seconds') && /*#__PURE__*/React.createElement(PickersToolbarButton, {
    variant: "h3",
    onClick: () => setOpenView('seconds'),
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
    onClick: () => handleMeridiemChange('am')
  }), /*#__PURE__*/React.createElement(PickersToolbarButton, {
    disableRipple: true,
    variant: "subtitle2",
    selected: meridiemMode === 'pm',
    typographyClassName: classes.ampmLabel,
    value: utils.getMeridiemText('pm'),
    onClick: () => handleMeridiemChange('pm')
  })));
};

export default withStyles(styles, {
  name: 'MuiTimePickerToolbar'
})(TimePickerToolbar);
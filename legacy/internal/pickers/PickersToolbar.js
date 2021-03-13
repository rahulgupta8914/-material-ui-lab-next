import * as React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import PenIcon from '../svg-icons/Pen';
import CalendarIcon from '../svg-icons/Calendar';
export var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: theme.spacing(2, 3)
    },
    toolbarLandscape: {
      height: 'auto',
      maxWidth: 160,
      padding: 16,
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    },
    dateTitleContainer: {
      flex: 1
    }
  };
};

function defaultGetKeyboardInputSwitchingButtonText(isKeyboardInputOpen) {
  return isKeyboardInputOpen ? 'text input view is open, go to calendar view' : 'calendar view is open, go to text input view';
}

var _ref = /*#__PURE__*/React.createElement(CalendarIcon, {
  color: "inherit"
});

var _ref2 = /*#__PURE__*/React.createElement(PenIcon, {
  color: "inherit"
});

var PickerToolbar = function PickerToolbar(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$getMobileKeybo = props.getMobileKeyboardInputViewButtonText,
      getMobileKeyboardInputViewButtonText = _props$getMobileKeybo === void 0 ? defaultGetKeyboardInputSwitchingButtonText : _props$getMobileKeybo,
      isLandscape = props.isLandscape,
      isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
      _props$landscapeDirec = props.landscapeDirection,
      landscapeDirection = _props$landscapeDirec === void 0 ? 'column' : _props$landscapeDirec,
      penIconClassName = props.penIconClassName,
      toggleMobileKeyboardView = props.toggleMobileKeyboardView,
      toolbarTitle = props.toolbarTitle;
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.root, className, isLandscape && classes.toolbarLandscape)
  }, /*#__PURE__*/React.createElement(Typography, {
    color: "textSecondary",
    variant: "overline"
  }, toolbarTitle), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    justifyContent: "space-between",
    className: classes.dateTitleContainer,
    direction: isLandscape ? landscapeDirection : 'row',
    alignItems: isLandscape ? 'flex-start' : 'flex-end'
  }, children, /*#__PURE__*/React.createElement(IconButton, {
    onClick: toggleMobileKeyboardView,
    className: penIconClassName,
    color: "inherit",
    "aria-label": getMobileKeyboardInputViewButtonText(isMobileKeyboardViewOpen)
  }, isMobileKeyboardViewOpen ? _ref : _ref2)));
};

export default withStyles(styles, {
  name: 'MuiPickersToolbar'
})(PickerToolbar);
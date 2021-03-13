import * as React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import PenIcon from '../svg-icons/Pen';
import CalendarIcon from '../svg-icons/Calendar';
export const styles = theme => ({
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
});

function defaultGetKeyboardInputSwitchingButtonText(isKeyboardInputOpen) {
  return isKeyboardInputOpen ? 'text input view is open, go to calendar view' : 'calendar view is open, go to text input view';
}

var _ref = /*#__PURE__*/React.createElement(CalendarIcon, {
  color: "inherit"
});

var _ref2 = /*#__PURE__*/React.createElement(PenIcon, {
  color: "inherit"
});

const PickerToolbar = props => {
  const {
    children,
    classes,
    className,
    getMobileKeyboardInputViewButtonText = defaultGetKeyboardInputSwitchingButtonText,
    isLandscape,
    isMobileKeyboardViewOpen,
    landscapeDirection = 'column',
    penIconClassName,
    toggleMobileKeyboardView,
    toolbarTitle
  } = props;
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
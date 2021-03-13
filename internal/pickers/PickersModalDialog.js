import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import { DIALOG_WIDTH } from './constants/dimensions';
export const styles = {
  container: {
    outline: 0
  },
  paper: {
    outline: 0,
    minWidth: DIALOG_WIDTH
  },
  content: {
    '&:first-child': {
      padding: 0
    }
  },
  action: {},
  withAdditionalAction: {
    // set justifyContent to default value to fix IE11 layout bug
    // see https://github.com/mui-org/material-ui-pickers/pull/267
    justifyContent: 'flex-start',
    '& > *:first-child': {
      marginRight: 'auto'
    }
  }
};

const PickersModalDialog = props => {
  const {
    cancelText = 'Cancel',
    children,
    classes,
    clearable = false,
    clearText = 'Clear',
    DialogProps = {},
    okText = 'OK',
    onAccept,
    onClear,
    onDismiss,
    onSetToday,
    open,
    showTodayButton = false,
    todayText = 'Today'
  } = props;
  return /*#__PURE__*/React.createElement(Dialog, _extends({
    open: open,
    onClose: onDismiss
  }, DialogProps, {
    classes: _extends({}, DialogProps.classes, {
      container: classes.container,
      paper: classes.paper
    })
  }), /*#__PURE__*/React.createElement(DialogContent, {
    className: classes.content
  }, children), /*#__PURE__*/React.createElement(DialogActions, {
    className: clsx(classes.action, (clearable || showTodayButton) && classes.withAdditionalAction)
  }, clearable && /*#__PURE__*/React.createElement(Button, {
    onClick: onClear
  }, clearText), showTodayButton && /*#__PURE__*/React.createElement(Button, {
    onClick: onSetToday
  }, todayText), cancelText && /*#__PURE__*/React.createElement(Button, {
    onClick: onDismiss
  }, cancelText), okText && /*#__PURE__*/React.createElement(Button, {
    onClick: onAccept
  }, okText)));
};

export default withStyles(styles, {
  name: 'MuiPickersModalDialog'
})(PickersModalDialog);
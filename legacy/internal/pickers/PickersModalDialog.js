import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import { DIALOG_WIDTH } from './constants/dimensions';
export var styles = {
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

var PickersModalDialog = function PickersModalDialog(props) {
  var _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? 'Cancel' : _props$cancelText,
      children = props.children,
      classes = props.classes,
      _props$clearable = props.clearable,
      clearable = _props$clearable === void 0 ? false : _props$clearable,
      _props$clearText = props.clearText,
      clearText = _props$clearText === void 0 ? 'Clear' : _props$clearText,
      _props$DialogProps = props.DialogProps,
      DialogProps = _props$DialogProps === void 0 ? {} : _props$DialogProps,
      _props$okText = props.okText,
      okText = _props$okText === void 0 ? 'OK' : _props$okText,
      onAccept = props.onAccept,
      onClear = props.onClear,
      onDismiss = props.onDismiss,
      onSetToday = props.onSetToday,
      open = props.open,
      _props$showTodayButto = props.showTodayButton,
      showTodayButton = _props$showTodayButto === void 0 ? false : _props$showTodayButto,
      _props$todayText = props.todayText,
      todayText = _props$todayText === void 0 ? 'Today' : _props$todayText;
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
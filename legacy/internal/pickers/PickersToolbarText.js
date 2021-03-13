import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
export var styles = function styles(theme) {
  return {
    root: {
      transition: theme.transitions.create('color'),
      color: theme.palette.text.secondary,
      '&$selected': {
        color: theme.palette.text.primary
      }
    },
    selected: {}
  };
};

var PickersToolbarText = function PickersToolbarText(props) {
  var className = props.className,
      classes = props.classes,
      selected = props.selected,
      value = props.value,
      other = _objectWithoutProperties(props, ["className", "classes", "selected", "value"]);

  return /*#__PURE__*/React.createElement(Typography, _extends({
    className: clsx(classes.root, className, selected && classes.selected),
    component: "span"
  }, other), value);
};

export default withStyles(styles, {
  name: 'MuiPickersToolbarText'
})(PickersToolbarText);
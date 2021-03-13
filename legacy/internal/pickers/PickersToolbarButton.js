import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PickersToolbarText from './PickersToolbarText';
export var styles = {
  root: {
    padding: 0,
    minWidth: '16px',
    textTransform: 'none'
  }
};

var ToolbarButton = function ToolbarButton(props) {
  var align = props.align,
      classes = props.classes,
      className = props.className,
      selected = props.selected,
      typographyClassName = props.typographyClassName,
      value = props.value,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["align", "classes", "className", "selected", "typographyClassName", "value", "variant"]);

  return /*#__PURE__*/React.createElement(Button, _extends({
    variant: "text",
    className: clsx(classes.root, className)
  }, other), /*#__PURE__*/React.createElement(PickersToolbarText, {
    align: align,
    className: typographyClassName,
    variant: variant,
    value: value,
    selected: selected
  }));
};

export default withStyles(styles, {
  name: 'MuiPickersToolbarButton'
})(ToolbarButton);
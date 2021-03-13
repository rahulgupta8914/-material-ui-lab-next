import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
export const styles = theme => {
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

const PickersToolbarText = props => {
  const {
    className,
    classes,
    selected,
    value
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["className", "classes", "selected", "value"]);

  return /*#__PURE__*/React.createElement(Typography, _extends({
    className: clsx(classes.root, className, selected && classes.selected),
    component: "span"
  }, other), value);
};

export default withStyles(styles, {
  name: 'MuiPickersToolbarText'
})(PickersToolbarText);
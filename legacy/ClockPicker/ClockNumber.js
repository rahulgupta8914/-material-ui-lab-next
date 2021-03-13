import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { CLOCK_WIDTH, CLOCK_HOUR_WIDTH } from '../internal/pickers/constants/dimensions';
export var styles = function styles(theme) {
  return {
    root: {
      width: CLOCK_HOUR_WIDTH,
      height: CLOCK_HOUR_WIDTH,
      position: 'absolute',
      left: "calc((100% - ".concat(CLOCK_HOUR_WIDTH, "px) / 2)"),
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      color: theme.palette.text.primary,
      '&:focused': {
        backgroundColor: theme.palette.background.paper
      },
      '&$selected': {
        color: theme.palette.primary.contrastText
      },
      '&$disabled': {
        pointerEvents: 'none',
        color: theme.palette.text.disabled
      }
    },
    selected: {},
    disabled: {},
    inner: _extends({}, theme.typography.body2, {
      color: theme.palette.text.secondary
    })
  };
};
/**
 * @ignore - internal component.
 */

var ClockNumber = function ClockNumber(props) {
  var classes = props.classes,
      disabled = props.disabled,
      index = props.index,
      inner = props.inner,
      label = props.label,
      selected = props.selected,
      other = _objectWithoutProperties(props, ["classes", "disabled", "index", "inner", "label", "selected"]);

  var angle = index % 12 / 12 * Math.PI * 2 - Math.PI / 2;
  var length = (CLOCK_WIDTH - CLOCK_HOUR_WIDTH - 2) / 2 * (inner ? 0.65 : 1);
  var x = Math.round(Math.cos(angle) * length);
  var y = Math.round(Math.sin(angle) * length);
  var transformStyle = {
    transform: "translate(".concat(x, "px, ").concat(y + (CLOCK_WIDTH - CLOCK_HOUR_WIDTH) / 2, "px")
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: clsx(classes.root, selected && classes.selected, disabled && classes.disabled, inner && classes.inner),
    style: transformStyle
  }, other), label);
};

export default withStyles(styles, {
  name: 'MuiClockNumber'
})(ClockNumber);
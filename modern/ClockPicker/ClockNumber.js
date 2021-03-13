import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { CLOCK_WIDTH, CLOCK_HOUR_WIDTH } from '../internal/pickers/constants/dimensions';
export const styles = theme => ({
  root: {
    width: CLOCK_HOUR_WIDTH,
    height: CLOCK_HOUR_WIDTH,
    position: 'absolute',
    left: `calc((100% - ${CLOCK_HOUR_WIDTH}px) / 2)`,
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
});
/**
 * @ignore - internal component.
 */

const ClockNumber = props => {
  const {
    classes,
    disabled,
    index,
    inner,
    label,
    selected
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["classes", "disabled", "index", "inner", "label", "selected"]);

  const angle = index % 12 / 12 * Math.PI * 2 - Math.PI / 2;
  const length = (CLOCK_WIDTH - CLOCK_HOUR_WIDTH - 2) / 2 * (inner ? 0.65 : 1);
  const x = Math.round(Math.cos(angle) * length);
  const y = Math.round(Math.sin(angle) * length);
  const transformStyle = {
    transform: `translate(${x}px, ${y + (CLOCK_WIDTH - CLOCK_HOUR_WIDTH) / 2}px`
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: clsx(classes.root, selected && classes.selected, disabled && classes.disabled, inner && classes.inner),
    style: transformStyle
  }, other), label);
};

export default withStyles(styles, {
  name: 'MuiClockNumber'
})(ClockNumber);
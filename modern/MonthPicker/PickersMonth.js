import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { onSpaceOrEnter } from '../internal/pickers/utils';
export const styles = theme => ({
  root: {
    flex: '1 0 33.33%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 0,
    height: 64,
    transition: theme.transitions.create('font-size', {
      duration: '100ms'
    }),
    '&:focus': {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium
    },
    '&:disabled': {
      pointerEvents: 'none',
      color: theme.palette.text.secondary
    },
    '&$selected': {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  selected: {}
});
/**
 * @ignore - do not document.
 */

const PickersMonth = props => {
  const {
    classes,
    disabled,
    onSelect,
    selected,
    value
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["classes", "disabled", "onSelect", "selected", "value"]);

  const handleSelection = () => {
    onSelect(value);
  };

  return /*#__PURE__*/React.createElement(Typography, _extends({
    component: "button",
    className: clsx(classes.root, selected && classes.selected),
    tabIndex: disabled ? -1 : 0,
    onClick: handleSelection,
    onKeyDown: onSpaceOrEnter(handleSelection),
    color: selected ? 'primary' : undefined,
    variant: selected ? 'h5' : 'subtitle1',
    disabled: disabled
  }, other));
};

export default withStyles(styles, {
  name: 'MuiPickersMonth'
})(PickersMonth);
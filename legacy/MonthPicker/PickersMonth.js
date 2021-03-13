import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { onSpaceOrEnter } from '../internal/pickers/utils';
export var styles = function styles(theme) {
  return {
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
  };
};
/**
 * @ignore - do not document.
 */

var PickersMonth = function PickersMonth(props) {
  var classes = props.classes,
      disabled = props.disabled,
      onSelect = props.onSelect,
      selected = props.selected,
      value = props.value,
      other = _objectWithoutProperties(props, ["classes", "disabled", "onSelect", "selected", "value"]);

  var handleSelection = function handleSelection() {
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
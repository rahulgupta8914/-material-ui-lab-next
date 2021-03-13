import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import clsx from 'clsx';
import { useForkRef } from '@material-ui/core/utils';
import { withStyles, alpha } from '@material-ui/core/styles';
import { WrapperVariantContext } from '../internal/pickers/wrappers/WrapperVariantContext';
export var styles = function styles(theme) {
  return {
    root: {
      flexBasis: '33.3%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    modeDesktop: {
      flexBasis: '25%'
    },
    yearButton: _extends({
      color: 'unset',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 0
    }, theme.typography.subtitle1, {
      margin: '8px 0',
      height: 36,
      width: 72,
      borderRadius: 16,
      cursor: 'pointer',
      '&:focus, &:hover': {
        backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
      },
      '&$disabled': {
        color: theme.palette.text.secondary
      },
      '&$selected': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:focus, &:hover': {
          backgroundColor: theme.palette.primary.dark
        }
      }
    }),
    disabled: {},
    selected: {}
  };
};
/**
 * @ignore - internal component.
 */

var PickersYear = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var autoFocus = props.autoFocus,
      classes = props.classes,
      children = props.children,
      disabled = props.disabled,
      _onClick = props.onClick,
      _onKeyDown = props.onKeyDown,
      selected = props.selected,
      value = props.value;
  var ref = React.useRef(null);
  var refHandle = useForkRef(ref, forwardedRef);
  var wrapperVariant = React.useContext(WrapperVariantContext); // TODO: Can we just forward this to the button?

  React.useEffect(function () {
    if (autoFocus) {
      // `ref.current` being `null` would be a bug in Material-UIu
      ref.current.focus();
    }
  }, [autoFocus]);
  return /*#__PURE__*/React.createElement("div", {
    className: clsx(classes.root, wrapperVariant === 'desktop' && classes.modeDesktop)
  }, /*#__PURE__*/React.createElement("button", {
    ref: refHandle,
    disabled: disabled,
    type: "button",
    tabIndex: selected ? 0 : -1,
    onClick: function onClick(event) {
      return _onClick(event, value);
    },
    onKeyDown: function onKeyDown(event) {
      return _onKeyDown(event, value);
    },
    className: clsx(classes.yearButton, disabled && classes.disabled, selected && classes.selected)
  }, children));
});
export default withStyles(styles, {
  name: 'MuiPickersYear'
})(PickersYear);
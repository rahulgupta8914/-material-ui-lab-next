"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _utils = require("@material-ui/core/utils");

var _styles = require("@material-ui/core/styles");

var _WrapperVariantContext = require("../internal/pickers/wrappers/WrapperVariantContext");

const styles = theme => ({
  root: {
    flexBasis: '33.3%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modeDesktop: {
    flexBasis: '25%'
  },
  yearButton: (0, _extends2.default)({
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
      backgroundColor: (0, _styles.alpha)(theme.palette.action.active, theme.palette.action.hoverOpacity)
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
});
/**
 * @ignore - internal component.
 */


exports.styles = styles;
const PickersYear = /*#__PURE__*/React.forwardRef((props, forwardedRef) => {
  const {
    autoFocus,
    classes,
    children,
    disabled,
    onClick,
    onKeyDown,
    selected,
    value
  } = props;
  const ref = React.useRef(null);
  const refHandle = (0, _utils.useForkRef)(ref, forwardedRef);
  const wrapperVariant = React.useContext(_WrapperVariantContext.WrapperVariantContext); // TODO: Can we just forward this to the button?

  React.useEffect(() => {
    if (autoFocus) {
      // `ref.current` being `null` would be a bug in Material-UIu
      ref.current.focus();
    }
  }, [autoFocus]);
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _clsx.default)(classes.root, wrapperVariant === 'desktop' && classes.modeDesktop)
  }, /*#__PURE__*/React.createElement("button", {
    ref: refHandle,
    disabled: disabled,
    type: "button",
    tabIndex: selected ? 0 : -1,
    onClick: event => onClick(event, value),
    onKeyDown: event => onKeyDown(event, value),
    className: (0, _clsx.default)(classes.yearButton, disabled && classes.disabled, selected && classes.selected)
  }, children));
});

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiPickersYear'
})(PickersYear);

exports.default = _default;
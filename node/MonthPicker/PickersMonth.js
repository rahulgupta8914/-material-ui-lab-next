"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _utils = require("../internal/pickers/utils");

const styles = theme => ({
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


exports.styles = styles;

const PickersMonth = props => {
  const {
    classes,
    disabled,
    onSelect,
    selected,
    value
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["classes", "disabled", "onSelect", "selected", "value"]);

  const handleSelection = () => {
    onSelect(value);
  };

  return /*#__PURE__*/React.createElement(_Typography.default, (0, _extends2.default)({
    component: "button",
    className: (0, _clsx.default)(classes.root, selected && classes.selected),
    tabIndex: disabled ? -1 : 0,
    onClick: handleSelection,
    onKeyDown: (0, _utils.onSpaceOrEnter)(handleSelection),
    color: selected ? 'primary' : undefined,
    variant: selected ? 'h5' : 'subtitle1',
    disabled: disabled
  }, other));
};

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiPickersMonth'
})(PickersMonth);

exports.default = _default;
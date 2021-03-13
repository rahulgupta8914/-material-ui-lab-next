"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _dimensions = require("../internal/pickers/constants/dimensions");

const styles = theme => ({
  root: {
    width: _dimensions.CLOCK_HOUR_WIDTH,
    height: _dimensions.CLOCK_HOUR_WIDTH,
    position: 'absolute',
    left: `calc((100% - ${_dimensions.CLOCK_HOUR_WIDTH}px) / 2)`,
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
  inner: (0, _extends2.default)({}, theme.typography.body2, {
    color: theme.palette.text.secondary
  })
});
/**
 * @ignore - internal component.
 */


exports.styles = styles;

const ClockNumber = props => {
  const {
    classes,
    disabled,
    index,
    inner,
    label,
    selected
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["classes", "disabled", "index", "inner", "label", "selected"]);
  const angle = index % 12 / 12 * Math.PI * 2 - Math.PI / 2;
  const length = (_dimensions.CLOCK_WIDTH - _dimensions.CLOCK_HOUR_WIDTH - 2) / 2 * (inner ? 0.65 : 1);
  const x = Math.round(Math.cos(angle) * length);
  const y = Math.round(Math.sin(angle) * length);
  const transformStyle = {
    transform: `translate(${x}px, ${y + (_dimensions.CLOCK_WIDTH - _dimensions.CLOCK_HOUR_WIDTH) / 2}px`
  };
  return /*#__PURE__*/React.createElement("span", (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, selected && classes.selected, disabled && classes.disabled, inner && classes.inner),
    style: transformStyle
  }, other), label);
};

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiClockNumber'
})(ClockNumber);

exports.default = _default;
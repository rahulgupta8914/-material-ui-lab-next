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

const styles = theme => {
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

exports.styles = styles;

const PickersToolbarText = props => {
  const {
    className,
    classes,
    selected,
    value
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["className", "classes", "selected", "value"]);
  return /*#__PURE__*/React.createElement(_Typography.default, (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className, selected && classes.selected),
    component: "span"
  }, other), value);
};

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiPickersToolbarText'
})(PickersToolbarText);

exports.default = _default;
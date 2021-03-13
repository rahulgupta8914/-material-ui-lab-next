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

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _styles = require("@material-ui/core/styles");

var _PickersToolbarText = _interopRequireDefault(require("./PickersToolbarText"));

const styles = {
  root: {
    padding: 0,
    minWidth: '16px',
    textTransform: 'none'
  }
};
exports.styles = styles;

const ToolbarButton = props => {
  const {
    align,
    classes,
    className,
    selected,
    typographyClassName,
    value,
    variant
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["align", "classes", "className", "selected", "typographyClassName", "value", "variant"]);
  return /*#__PURE__*/React.createElement(_Button.default, (0, _extends2.default)({
    variant: "text",
    className: (0, _clsx.default)(classes.root, className)
  }, other), /*#__PURE__*/React.createElement(_PickersToolbarText.default, {
    align: align,
    className: typographyClassName,
    variant: variant,
    value: value,
    selected: selected
  }));
};

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiPickersToolbarButton'
})(ToolbarButton);

exports.default = _default;
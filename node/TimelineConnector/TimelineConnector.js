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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    width: 2,
    backgroundColor: theme.palette.grey[400],
    flexGrow: 1
  }
});

exports.styles = styles;
const TimelineConnector = /*#__PURE__*/React.forwardRef(function TimelineConnector(props, ref) {
  const {
    classes,
    className
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["classes", "className"]);
  return /*#__PURE__*/React.createElement("span", (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className),
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? TimelineConnector.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,

  /**
   * @ignore
   */
  className: _propTypes.default.string
} : void 0;

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiTimelineConnector'
})(TimelineConnector);

exports.default = _default;
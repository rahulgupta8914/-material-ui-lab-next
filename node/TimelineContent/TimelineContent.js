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

var _utils = require("@material-ui/core/utils");

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _TimelineContext = _interopRequireDefault(require("../Timeline/TimelineContext"));

var _TimelineItemContext = _interopRequireDefault(require("../TimelineItem/TimelineItemContext"));

const styles = () => ({
  /* Styles applied to the root element. */
  root: {
    flex: 1,
    padding: '6px 16px'
  },

  /* Styles applied to the root element if `align="right"`. */
  alignRight: {
    textAlign: 'right'
  }
});

exports.styles = styles;
const TimelineContent = /*#__PURE__*/React.forwardRef(function TimelineContent(props, ref) {
  const {
    classes,
    className
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["classes", "className"]);
  const {
    align = 'left'
  } = React.useContext(_TimelineContext.default);
  const {
    classes: contextClasses = {}
  } = React.useContext(_TimelineItemContext.default);
  return /*#__PURE__*/React.createElement(_Typography.default, (0, _extends2.default)({
    component: "div",
    className: (0, _clsx.default)(classes.root, contextClasses.content, classes[`align${(0, _utils.capitalize)(align)}`], className),
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? TimelineContent.propTypes = {
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
  name: 'MuiTimelineContent'
})(TimelineContent);

exports.default = _default;
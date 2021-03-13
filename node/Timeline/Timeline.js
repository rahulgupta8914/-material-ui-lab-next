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

var _TimelineContext = _interopRequireDefault(require("./TimelineContext"));

const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '6px 16px',
    flexGrow: 1
  },

  /* Styles applied to the root element if `align="left"`. */
  alignLeft: {},

  /* Styles applied to the root element if `align="right"`. */
  alignRight: {},

  /* Styles applied to the root element if `align="alternate"`. */
  alignAlternate: {}
};
exports.styles = styles;
const Timeline = /*#__PURE__*/React.forwardRef(function Timeline(props, ref) {
  const {
    align = 'left',
    classes,
    className
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["align", "classes", "className"]);
  return /*#__PURE__*/React.createElement(_TimelineContext.default.Provider, {
    value: {
      align
    }
  }, /*#__PURE__*/React.createElement("ul", (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, // @ts-expect-error unsafe string concat
    classes[`align${(0, _utils.capitalize)(align)}`], className) // @ts-expect-error TypeScript bug, need to keep unknown for DX
    ,
    ref: ref
  }, other)));
});
process.env.NODE_ENV !== "production" ? Timeline.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * The position where the timeline's content should appear.
   * @default 'left'
   */
  align: _propTypes.default.oneOf(['alternate', 'left', 'right']),

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
/**
 *
 * Demos:
 *
 * - [Timeline](https://material-ui.com/components/timeline/)
 *
 * API:
 *
 * - [Timeline API](https://material-ui.com/api/timeline/)
 */

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiTimeline'
})(Timeline);

exports.default = _default;
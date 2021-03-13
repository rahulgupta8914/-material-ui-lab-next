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

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignSelf: 'baseline',
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 4,
    borderRadius: '50%',
    boxShadow: theme.shadows[1],
    margin: '11.5px 0'
  },

  /* Styles applied to the root element if `variant="filled"`. */
  filled: {},

  /* Styles applied to the root element if `variant="outlined"`. */
  outlined: {},

  /* Styles applied to the root element if `color="grey"` and `variant="filled"`. */
  filledGrey: {
    borderColor: 'transparent',
    color: theme.palette.grey[50],
    backgroundColor: theme.palette.grey[400]
  },

  /* Styles applied to the root element if `color="grey"` and `variant="outlined"`. */
  outlinedGrey: {
    boxShadow: 'none',
    color: theme.palette.grey.contrastText,
    borderColor: theme.palette.grey[400],
    backgroundColor: 'transparent'
  },

  /* Styles applied to the root element if `color="primary"` and `variant="filled"`. */
  filledPrimary: {
    borderColor: 'transparent',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  },

  /* Styles applied to the root element if `color="primary"` and `variant="outlined"`. */
  outlinedPrimary: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    borderColor: theme.palette.primary.main
  },

  /* Styles applied to the root element if `color="secondary"` and `variant="filled"`. */
  filledSecondary: {
    borderColor: 'transparent',
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main
  },

  /* Styles applied to the root element if `color="secondary"` and `variant="outlined"`. */
  outlinedSecondary: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    borderColor: theme.palette.secondary.main
  }
});

exports.styles = styles;
const TimelineDot = /*#__PURE__*/React.forwardRef(function TimelineDot(props, ref) {
  const {
    classes,
    className,
    color = 'grey',
    variant = 'filled'
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["classes", "className", "color", "variant"]);
  const themeVariantsClasses = (0, _styles.useThemeVariants)((0, _extends2.default)({}, props, {
    color,
    variant
  }), 'MuiTimelineDot');
  return /*#__PURE__*/React.createElement("span", (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, classes[variant], themeVariantsClasses, className, color !== 'inherit' && classes[`${variant}${(0, _utils.capitalize)(color)}`]),
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? TimelineDot.propTypes = {
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
  className: _propTypes.default.string,

  /**
   * The dot can have a different colors.
   * @default 'grey'
   */
  color: _propTypes.default.oneOf(['grey', 'inherit', 'primary', 'secondary']),

  /**
   * The dot can appear filled or outlined.
   * @default 'filled'
   */
  variant: _propTypes.default
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_propTypes.default.oneOf(['filled', 'outlined']), _propTypes.default.string])
} : void 0;

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiTimelineDot'
})(TimelineDot);

exports.default = _default;
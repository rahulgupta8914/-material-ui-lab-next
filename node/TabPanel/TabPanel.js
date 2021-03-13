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

var _TabContext = require("../TabContext");

const styles = theme => {
  return {
    /* Styles applied to the root element. */
    root: {
      padding: theme.spacing(3)
    }
  };
};

exports.styles = styles;
const TabPanel = /*#__PURE__*/React.forwardRef(function TabPanel(props, ref) {
  const {
    children,
    className,
    classes,
    value
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["children", "className", "classes", "value"]);
  const context = (0, _TabContext.useTabContext)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const id = (0, _TabContext.getPanelId)(context, value);
  const tabId = (0, _TabContext.getTabId)(context, value);
  return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
    "aria-labelledby": tabId,
    className: (0, _clsx.default)(classes.root, className),
    hidden: value !== context.value,
    id: id,
    ref: ref,
    role: "tabpanel"
  }, other), value === context.value && children);
});
process.env.NODE_ENV !== "production" ? TabPanel.propTypes = {
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
   * The `value` of the corresponding `Tab`. Must use the index of the `Tab` when
   * no `value` was passed to `Tab`.
   */
  value: _propTypes.default.string.isRequired
} : void 0;

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiTabPanel'
})(TabPanel);

exports.default = _default;
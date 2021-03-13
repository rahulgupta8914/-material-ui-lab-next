"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _dimensions = require("../constants/dimensions");

var _WrapperVariantContext = require("./WrapperVariantContext");

const styles = theme => ({
  root: {
    overflow: 'hidden',
    minWidth: _dimensions.DIALOG_WIDTH,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper
  }
});

const StaticWrapper = props => {
  const {
    classes,
    displayStaticWrapperAs = 'mobile',
    children
  } = props;
  const isStatic = true;
  return /*#__PURE__*/React.createElement(_WrapperVariantContext.IsStaticVariantContext.Provider, {
    value: isStatic
  }, /*#__PURE__*/React.createElement(_WrapperVariantContext.WrapperVariantContext.Provider, {
    value: displayStaticWrapperAs
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, children)));
};

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiPickersStaticWrapper'
})(StaticWrapper);

exports.default = _default;
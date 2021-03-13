"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponsiveTooltipWrapper = exports.ResponsiveWrapper = exports.makeResponsiveWrapper = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _MobileWrapper = _interopRequireDefault(require("./MobileWrapper"));

var _DesktopWrapper = _interopRequireDefault(require("./DesktopWrapper"));

var _DesktopTooltipWrapper = _interopRequireDefault(require("./DesktopTooltipWrapper"));

const makeResponsiveWrapper = (DesktopWrapperComponent, MobileWrapperComponent) => {
  const ResponsiveWrapper = (_ref) => {
    let {
      cancelText,
      clearable,
      clearText,
      desktopModeMediaQuery = '@media (pointer: fine)',
      DialogProps,
      okText,
      PopperProps,
      showTodayButton,
      todayText,
      TransitionComponent
    } = _ref,
        other = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["cancelText", "clearable", "clearText", "desktopModeMediaQuery", "DialogProps", "okText", "PopperProps", "showTodayButton", "todayText", "TransitionComponent"]);
    const isDesktop = (0, _useMediaQuery.default)(desktopModeMediaQuery);
    return isDesktop ? /*#__PURE__*/React.createElement(DesktopWrapperComponent, (0, _extends2.default)({
      PopperProps: PopperProps,
      TransitionComponent: TransitionComponent
    }, other)) : /*#__PURE__*/React.createElement(MobileWrapperComponent, (0, _extends2.default)({
      okText: okText,
      cancelText: cancelText,
      clearText: clearText,
      todayText: todayText,
      showTodayButton: showTodayButton,
      clearable: clearable,
      DialogProps: DialogProps
    }, other));
  };

  return ResponsiveWrapper;
};

exports.makeResponsiveWrapper = makeResponsiveWrapper;
const ResponsiveWrapper = makeResponsiveWrapper(_DesktopWrapper.default, _MobileWrapper.default);
exports.ResponsiveWrapper = ResponsiveWrapper;
const ResponsiveTooltipWrapper = makeResponsiveWrapper(_DesktopTooltipWrapper.default, _MobileWrapper.default);
exports.ResponsiveTooltipWrapper = ResponsiveTooltipWrapper;
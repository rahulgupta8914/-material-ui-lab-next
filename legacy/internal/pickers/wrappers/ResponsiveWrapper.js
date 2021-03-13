import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileWrapper from './MobileWrapper';
import DesktopWrapper from './DesktopWrapper';
import DesktopTooltipWrapper from './DesktopTooltipWrapper';
export var makeResponsiveWrapper = function makeResponsiveWrapper(DesktopWrapperComponent, MobileWrapperComponent) {
  var ResponsiveWrapper = function ResponsiveWrapper(_ref) {
    var cancelText = _ref.cancelText,
        clearable = _ref.clearable,
        clearText = _ref.clearText,
        _ref$desktopModeMedia = _ref.desktopModeMediaQuery,
        desktopModeMediaQuery = _ref$desktopModeMedia === void 0 ? '@media (pointer: fine)' : _ref$desktopModeMedia,
        DialogProps = _ref.DialogProps,
        okText = _ref.okText,
        PopperProps = _ref.PopperProps,
        showTodayButton = _ref.showTodayButton,
        todayText = _ref.todayText,
        TransitionComponent = _ref.TransitionComponent,
        other = _objectWithoutProperties(_ref, ["cancelText", "clearable", "clearText", "desktopModeMediaQuery", "DialogProps", "okText", "PopperProps", "showTodayButton", "todayText", "TransitionComponent"]);

    var isDesktop = useMediaQuery(desktopModeMediaQuery);
    return isDesktop ? /*#__PURE__*/React.createElement(DesktopWrapperComponent, _extends({
      PopperProps: PopperProps,
      TransitionComponent: TransitionComponent
    }, other)) : /*#__PURE__*/React.createElement(MobileWrapperComponent, _extends({
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
export var ResponsiveWrapper = makeResponsiveWrapper(DesktopWrapper, MobileWrapper);
export var ResponsiveTooltipWrapper = makeResponsiveWrapper(DesktopTooltipWrapper, MobileWrapper);
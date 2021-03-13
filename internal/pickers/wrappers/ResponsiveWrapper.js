import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileWrapper from './MobileWrapper';
import DesktopWrapper from './DesktopWrapper';
import DesktopTooltipWrapper from './DesktopTooltipWrapper';
export const makeResponsiveWrapper = (DesktopWrapperComponent, MobileWrapperComponent) => {
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
        other = _objectWithoutPropertiesLoose(_ref, ["cancelText", "clearable", "clearText", "desktopModeMediaQuery", "DialogProps", "okText", "PopperProps", "showTodayButton", "todayText", "TransitionComponent"]);

    const isDesktop = useMediaQuery(desktopModeMediaQuery);
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
export const ResponsiveWrapper = makeResponsiveWrapper(DesktopWrapper, MobileWrapper);
export const ResponsiveTooltipWrapper = makeResponsiveWrapper(DesktopTooltipWrapper, MobileWrapper);
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { withStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowLeftIcon from '../svg-icons/ArrowLeft';
import ArrowRightIcon from '../svg-icons/ArrowRight';
export const styles = theme => ({
  root: {
    display: 'flex'
  },
  spacer: {
    width: theme.spacing(3)
  },
  hidden: {
    visibility: 'hidden'
  }
});
const PickersArrowSwitcher = /*#__PURE__*/React.forwardRef(function PickersArrowSwitcher(props, ref) {
  const {
    children,
    classes,
    className,
    components = {},
    componentsProps = {},
    isLeftDisabled,
    isLeftHidden,
    isRightDisabled,
    isRightHidden,
    leftArrowButtonText,
    onLeftClick,
    onRightClick,
    rightArrowButtonText
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["children", "classes", "className", "components", "componentsProps", "isLeftDisabled", "isLeftHidden", "isRightDisabled", "isRightHidden", "leftArrowButtonText", "onLeftClick", "onRightClick", "rightArrowButtonText"]);

  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';
  const LeftArrowButton = components.LeftArrowButton || IconButton;
  const leftArrowButtonProps = componentsProps.leftArrowButton || {};
  const LeftArrowIcon = components.LeftArrowIcon || ArrowLeftIcon;
  const RightArrowButton = components.RightArrowButton || IconButton;
  const rightArrowButtonProps = componentsProps.rightArrowButton || {};
  const RightArrowIcon = components.RightArrowIcon || ArrowRightIcon;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: clsx(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/React.createElement(LeftArrowButton, _extends({
    size: "small",
    "aria-hidden": isLeftHidden,
    "aria-label": leftArrowButtonText,
    title: leftArrowButtonText,
    disabled: isLeftDisabled,
    edge: "end",
    onClick: onLeftClick
  }, leftArrowButtonProps, {
    className: clsx(leftArrowButtonProps.className, isLeftHidden && classes.hidden)
  }), isRtl ? /*#__PURE__*/React.createElement(RightArrowIcon, null) : /*#__PURE__*/React.createElement(LeftArrowIcon, null)), children ? /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    component: "span"
  }, children) : /*#__PURE__*/React.createElement("div", {
    className: classes.spacer
  }), /*#__PURE__*/React.createElement(RightArrowButton, _extends({
    size: "small",
    "aria-hidden": isRightHidden,
    "aria-label": rightArrowButtonText,
    title: rightArrowButtonText,
    edge: "start",
    disabled: isRightDisabled,
    onClick: onRightClick
  }, rightArrowButtonProps, {
    className: clsx(rightArrowButtonProps.className, isRightHidden && classes.hidden)
  }), isRtl ? /*#__PURE__*/React.createElement(LeftArrowIcon, null) : /*#__PURE__*/React.createElement(RightArrowIcon, null)));
});
export default /*#__PURE__*/React.memo(withStyles(styles, {
  name: 'MuiPickersArrowSwitcher'
})(PickersArrowSwitcher));
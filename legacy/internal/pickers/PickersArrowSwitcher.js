import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { withStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowLeftIcon from '../svg-icons/ArrowLeft';
import ArrowRightIcon from '../svg-icons/ArrowRight';
export var styles = function styles(theme) {
  return {
    root: {
      display: 'flex'
    },
    spacer: {
      width: theme.spacing(3)
    },
    hidden: {
      visibility: 'hidden'
    }
  };
};
var PickersArrowSwitcher = /*#__PURE__*/React.forwardRef(function PickersArrowSwitcher(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      isLeftDisabled = props.isLeftDisabled,
      isLeftHidden = props.isLeftHidden,
      isRightDisabled = props.isRightDisabled,
      isRightHidden = props.isRightHidden,
      leftArrowButtonText = props.leftArrowButtonText,
      onLeftClick = props.onLeftClick,
      onRightClick = props.onRightClick,
      rightArrowButtonText = props.rightArrowButtonText,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "components", "componentsProps", "isLeftDisabled", "isLeftHidden", "isRightDisabled", "isRightHidden", "leftArrowButtonText", "onLeftClick", "onRightClick", "rightArrowButtonText"]);

  var theme = useTheme();
  var isRtl = theme.direction === 'rtl';
  var LeftArrowButton = components.LeftArrowButton || IconButton;
  var leftArrowButtonProps = componentsProps.leftArrowButton || {};
  var LeftArrowIcon = components.LeftArrowIcon || ArrowLeftIcon;
  var RightArrowButton = components.RightArrowButton || IconButton;
  var rightArrowButtonProps = componentsProps.rightArrowButton || {};
  var RightArrowIcon = components.RightArrowIcon || ArrowRightIcon;
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
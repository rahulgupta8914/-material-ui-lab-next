import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
export const slideAnimationDuration = 350;
export const styles = theme => {
  const slideTransition = theme.transitions.create('transform', {
    duration: slideAnimationDuration,
    easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
  });
  return {
    root: {
      display: 'block',
      position: 'relative',
      overflowX: 'hidden',
      '& > *': {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0
      }
    },
    'slideEnter-left': {
      willChange: 'transform',
      transform: 'translate(100%)',
      zIndex: 1
    },
    'slideEnter-right': {
      willChange: 'transform',
      transform: 'translate(-100%)',
      zIndex: 1
    },
    slideEnterActive: {
      transform: 'translate(0%)',
      transition: slideTransition
    },
    slideExit: {
      transform: 'translate(0%)'
    },
    'slideExitActiveLeft-left': {
      willChange: 'transform',
      transform: 'translate(-100%)',
      transition: slideTransition,
      zIndex: 0
    },
    'slideExitActiveLeft-right': {
      willChange: 'transform',
      transform: 'translate(100%)',
      transition: slideTransition,
      zIndex: 0
    }
  };
};
/**
 * @ignore - do not document.
 */

const SlideTransition = (_ref) => {
  let {
    children,
    classes,
    className,
    reduceAnimations,
    slideDirection,
    transKey
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["children", "classes", "className", "reduceAnimations", "slideDirection", "transKey"]);

  if (reduceAnimations) {
    return /*#__PURE__*/React.createElement("div", {
      className: clsx(classes.root, className)
    }, children);
  }

  const transitionClasses = {
    exit: classes.slideExit,
    enterActive: classes.slideEnterActive,
    enter: classes[`slideEnter-${slideDirection}`],
    exitActive: classes[`slideExitActiveLeft-${slideDirection}`]
  };
  return /*#__PURE__*/React.createElement(TransitionGroup, {
    className: clsx(classes.root, className),
    childFactory: element => /*#__PURE__*/React.cloneElement(element, {
      classNames: transitionClasses
    })
  }, /*#__PURE__*/React.createElement(CSSTransition, _extends({
    mountOnEnter: true,
    unmountOnExit: true,
    key: transKey,
    timeout: slideAnimationDuration,
    classNames: transitionClasses
  }, other), children));
};

export default withStyles(styles, {
  name: 'MuiPickersSlideTransition'
})(SlideTransition);
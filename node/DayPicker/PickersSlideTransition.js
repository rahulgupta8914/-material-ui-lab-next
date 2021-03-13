"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = exports.slideAnimationDuration = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _reactTransitionGroup = require("react-transition-group");

const slideAnimationDuration = 350;
exports.slideAnimationDuration = slideAnimationDuration;

const styles = theme => {
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


exports.styles = styles;

const SlideTransition = (_ref) => {
  let {
    children,
    classes,
    className,
    reduceAnimations,
    slideDirection,
    transKey
  } = _ref,
      other = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "classes", "className", "reduceAnimations", "slideDirection", "transKey"]);

  if (reduceAnimations) {
    return /*#__PURE__*/React.createElement("div", {
      className: (0, _clsx.default)(classes.root, className)
    }, children);
  }

  const transitionClasses = {
    exit: classes.slideExit,
    enterActive: classes.slideEnterActive,
    enter: classes[`slideEnter-${slideDirection}`],
    exitActive: classes[`slideExitActiveLeft-${slideDirection}`]
  };
  return /*#__PURE__*/React.createElement(_reactTransitionGroup.TransitionGroup, {
    className: (0, _clsx.default)(classes.root, className),
    childFactory: element => /*#__PURE__*/React.cloneElement(element, {
      classNames: transitionClasses
    })
  }, /*#__PURE__*/React.createElement(_reactTransitionGroup.CSSTransition, (0, _extends2.default)({
    mountOnEnter: true,
    unmountOnExit: true,
    key: transKey,
    timeout: slideAnimationDuration,
    classNames: transitionClasses
  }, other), children));
};

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiPickersSlideTransition'
})(SlideTransition);

exports.default = _default;
import * as React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const animationDuration = 500;
export const styles = theme => ({
  root: {
    display: 'block',
    position: 'relative'
  },
  fadeEnter: {
    willChange: 'transform',
    opacity: 0
  },
  fadeEnterActive: {
    opacity: 1,
    transition: theme.transitions.create('opacity', {
      duration: animationDuration
    })
  },
  fadeExit: {
    opacity: 1
  },
  fadeExitActive: {
    opacity: 0,
    transition: theme.transitions.create('opacity', {
      duration: animationDuration / 2
    })
  }
});
/**
 * @ignore - do not document.
 */

const FadeTransitionGroup = ({
  classes,
  children,
  className,
  reduceAnimations,
  transKey
}) => {
  if (reduceAnimations) {
    return children;
  }

  const transitionClasses = {
    exit: classes.fadeExit,
    enterActive: classes.fadeEnterActive,
    enter: classes.fadeEnter,
    exitActive: classes.fadeExitActive
  };
  return /*#__PURE__*/React.createElement(TransitionGroup, {
    className: clsx(classes.root, className),
    childFactory: element => /*#__PURE__*/React.cloneElement(element, {
      classNames: transitionClasses
    })
  }, /*#__PURE__*/React.createElement(CSSTransition, {
    mountOnEnter: true,
    unmountOnExit: true,
    key: transKey,
    timeout: {
      appear: animationDuration,
      enter: animationDuration / 2,
      exit: 0
    },
    classNames: transitionClasses
  }, children));
};

export default withStyles(styles, {
  name: 'MuiPickersFadeTransitionGroup'
})(FadeTransitionGroup);
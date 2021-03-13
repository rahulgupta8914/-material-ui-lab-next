import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { CLOCK_WIDTH, CLOCK_HOUR_WIDTH } from '../internal/pickers/constants/dimensions';
export const styles = theme => ({
  root: {
    width: 2,
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    left: 'calc(50% - 1px)',
    bottom: '50%',
    transformOrigin: 'center bottom 0px'
  },
  animateTransform: {
    transition: theme.transitions.create(['transform', 'height'])
  },
  thumb: {
    width: 4,
    height: 4,
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: '50%',
    position: 'absolute',
    top: -21,
    left: `calc(50% - ${CLOCK_HOUR_WIDTH / 2}px)`,
    border: `${(CLOCK_HOUR_WIDTH - 4) / 2}px solid ${theme.palette.primary.main}`,
    boxSizing: 'content-box'
  },
  noPoint: {
    backgroundColor: theme.palette.primary.main
  }
});

/**
 * @ignore - internal component.
 */
class ClockPointer extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      toAnimateTransform: false,
      // eslint-disable-next-line react/no-unused-state
      previousType: undefined
    };
  }

  render() {
    const _this$props = this.props,
          {
      classes,
      hasSelected,
      isInner,
      type,
      value
    } = _this$props,
          other = _objectWithoutPropertiesLoose(_this$props, ["classes", "hasSelected", "isInner", "type", "value"]);

    const getAngleStyle = () => {
      const max = type === 'hours' ? 12 : 60;
      let angle = 360 / max * value;

      if (type === 'hours' && value > 12) {
        angle -= 360; // round up angle to max 360 degrees
      }

      return {
        height: Math.round((isInner ? 0.26 : 0.4) * CLOCK_WIDTH),
        transform: `rotateZ(${angle}deg)`
      };
    };

    return /*#__PURE__*/React.createElement("div", _extends({
      style: getAngleStyle(),
      className: clsx(classes.root, this.state.toAnimateTransform && classes.animateTransform)
    }, other), /*#__PURE__*/React.createElement("div", {
      className: clsx(classes.thumb, hasSelected && classes.noPoint)
    }));
  }

}

ClockPointer.getDerivedStateFromProps = (nextProps, state) => {
  if (nextProps.type !== state.previousType) {
    return {
      toAnimateTransform: true,
      previousType: nextProps.type
    };
  }

  return {
    toAnimateTransform: false,
    previousType: nextProps.type
  };
};

export default withStyles(styles, {
  name: 'MuiClockPointer'
})(ClockPointer);
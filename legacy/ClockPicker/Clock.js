import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ClockPointer from './ClockPointer';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import { getHours, getMinutes } from '../internal/pickers/time-utils';
import { useGlobalKeyDown, keycode } from '../internal/pickers/hooks/useKeyDown';
import { WrapperVariantContext, IsStaticVariantContext } from '../internal/pickers/wrappers/WrapperVariantContext';
export var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing(2)
    },
    clock: {
      backgroundColor: 'rgba(0,0,0,.07)',
      borderRadius: '50%',
      height: 220,
      width: 220,
      flexShrink: 0,
      position: 'relative',
      pointerEvents: 'none'
    },
    squareMask: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'auto',
      outline: 0,
      // Disable scroll capabilities.
      touchAction: 'none',
      userSelect: 'none',
      '@media (pointer: fine)': {
        cursor: 'pointer',
        borderRadius: '50%'
      },
      '&:active': {
        cursor: 'move'
      }
    },
    pin: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    amButton: {
      zIndex: 1,
      left: 8,
      position: 'absolute',
      bottom: 8
    },
    pmButton: {
      zIndex: 1,
      position: 'absolute',
      bottom: 8,
      right: 8
    },
    meridiemButtonSelected: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.light
      }
    }
  };
};
/**
 * @ignore - internal component.
 */

var _ref = /*#__PURE__*/React.createElement(Typography, {
  variant: "caption"
}, "AM");

var _ref2 = /*#__PURE__*/React.createElement(Typography, {
  variant: "caption"
}, "PM");

function Clock(props) {
  var _useGlobalKeyDown;

  var allowKeyboardControl = props.allowKeyboardControl,
      ampm = props.ampm,
      ampmInClock = props.ampmInClock,
      numbersElementsArray = props.children,
      classes = props.classes,
      date = props.date,
      getClockLabelText = props.getClockLabelText,
      handleMeridiemChange = props.handleMeridiemChange,
      isTimeDisabled = props.isTimeDisabled,
      meridiemMode = props.meridiemMode,
      _props$minutesStep = props.minutesStep,
      minutesStep = _props$minutesStep === void 0 ? 1 : _props$minutesStep,
      onChange = props.onChange,
      type = props.type,
      value = props.value;
  var utils = useUtils();
  var isStatic = React.useContext(IsStaticVariantContext);
  var wrapperVariant = React.useContext(WrapperVariantContext);
  var isMoving = React.useRef(false);
  var isSelectedTimeDisabled = isTimeDisabled(value, type);
  var isPointerInner = !ampm && type === 'hours' && (value < 1 || value > 12);

  var handleValueChange = function handleValueChange(newValue, isFinish) {
    if (isTimeDisabled(newValue, type)) {
      return;
    }

    onChange(newValue, isFinish);
  };

  var setTime = function setTime(event, isFinish) {
    var offsetX = event.offsetX,
        offsetY = event.offsetY;

    if (typeof offsetX === 'undefined') {
      var rect = event.target.getBoundingClientRect();
      offsetX = event.changedTouches[0].clientX - rect.left;
      offsetY = event.changedTouches[0].clientY - rect.top;
    }

    var newSelectedValue = type === 'seconds' || type === 'minutes' ? getMinutes(offsetX, offsetY, minutesStep) : getHours(offsetX, offsetY, Boolean(ampm));
    handleValueChange(newSelectedValue, isFinish);
  };

  var handleTouchMove = function handleTouchMove(event) {
    isMoving.current = true;
    setTime(event, 'shallow');
  };

  var handleTouchEnd = function handleTouchEnd(event) {
    if (isMoving.current) {
      setTime(event, 'finish');
      isMoving.current = false;
    }
  };

  var handleMouseMove = function handleMouseMove(event) {
    event.preventDefault();
    event.stopPropagation(); // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari

    var isButtonPressed = // tslint:disable-next-line deprecation
    typeof event.buttons === 'undefined' ? event.nativeEvent.which === 1 : event.buttons === 1;

    if (isButtonPressed) {
      setTime(event.nativeEvent, 'shallow');
    }
  };

  var handleMouseUp = function handleMouseUp(event) {
    if (isMoving.current) {
      isMoving.current = false;
    }

    setTime(event.nativeEvent, 'finish');
  };

  var hasSelected = React.useMemo(function () {
    if (type === 'hours') {
      return true;
    }

    return value % 5 === 0;
  }, [type, value]);
  var keyboardControlStep = type === 'minutes' ? minutesStep : 1;
  useGlobalKeyDown(Boolean(allowKeyboardControl !== null && allowKeyboardControl !== void 0 ? allowKeyboardControl : !isStatic) && !isMoving.current, (_useGlobalKeyDown = {}, _defineProperty(_useGlobalKeyDown, keycode.Home, function () {
    return handleValueChange(0, 'partial');
  }), _defineProperty(_useGlobalKeyDown, keycode.End, function () {
    return handleValueChange(type === 'minutes' ? 59 : 23, 'partial');
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowUp, function () {
    return handleValueChange(value + keyboardControlStep, 'partial');
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowDown, function () {
    return handleValueChange(value - keyboardControlStep, 'partial');
  }), _useGlobalKeyDown));
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.clock
  }, /*#__PURE__*/React.createElement("div", {
    role: "menu",
    tabIndex: 0,
    className: classes.squareMask,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onMouseUp: handleMouseUp,
    onMouseMove: handleMouseMove
  }), !isSelectedTimeDisabled && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classes.pin
  }), date && /*#__PURE__*/React.createElement(ClockPointer, {
    type: type,
    value: value,
    isInner: isPointerInner,
    hasSelected: hasSelected,
    "aria-live": "polite",
    "aria-label": getClockLabelText(type, date, utils)
  })), numbersElementsArray), ampm && (wrapperVariant === 'desktop' || ampmInClock) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
    onClick: function onClick() {
      return handleMeridiemChange('am');
    },
    disabled: meridiemMode === null,
    className: clsx(classes.amButton, meridiemMode === 'am' && classes.meridiemButtonSelected)
  }, _ref), /*#__PURE__*/React.createElement(IconButton, {
    disabled: meridiemMode === null,
    onClick: function onClick() {
      return handleMeridiemChange('pm');
    },
    className: clsx(classes.pmButton, meridiemMode === 'pm' && classes.meridiemButtonSelected)
  }, _ref2)));
}

process.env.NODE_ENV !== "production" ? Clock.propTypes = {
  ampm: PropTypes.bool,
  minutesStep: PropTypes.number
} : void 0;
export default withStyles(styles, {
  name: 'MuiClock'
})(Clock);
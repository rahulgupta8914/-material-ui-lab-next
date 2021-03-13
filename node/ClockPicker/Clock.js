"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _ClockPointer = _interopRequireDefault(require("./ClockPointer"));

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _timeUtils = require("../internal/pickers/time-utils");

var _useKeyDown = require("../internal/pickers/hooks/useKeyDown");

var _WrapperVariantContext = require("../internal/pickers/wrappers/WrapperVariantContext");

const styles = theme => ({
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
});
/**
 * @ignore - internal component.
 */


exports.styles = styles;

var _ref = /*#__PURE__*/React.createElement(_Typography.default, {
  variant: "caption"
}, "AM");

var _ref2 = /*#__PURE__*/React.createElement(_Typography.default, {
  variant: "caption"
}, "PM");

function Clock(props) {
  const {
    allowKeyboardControl,
    ampm,
    ampmInClock,
    children: numbersElementsArray,
    classes,
    date,
    getClockLabelText,
    handleMeridiemChange,
    isTimeDisabled,
    meridiemMode,
    minutesStep = 1,
    onChange,
    type,
    value
  } = props;
  const utils = (0, _useUtils.useUtils)();
  const isStatic = React.useContext(_WrapperVariantContext.IsStaticVariantContext);
  const wrapperVariant = React.useContext(_WrapperVariantContext.WrapperVariantContext);
  const isMoving = React.useRef(false);
  const isSelectedTimeDisabled = isTimeDisabled(value, type);
  const isPointerInner = !ampm && type === 'hours' && (value < 1 || value > 12);

  const handleValueChange = (newValue, isFinish) => {
    if (isTimeDisabled(newValue, type)) {
      return;
    }

    onChange(newValue, isFinish);
  };

  const setTime = (event, isFinish) => {
    let {
      offsetX,
      offsetY
    } = event;

    if (typeof offsetX === 'undefined') {
      const rect = event.target.getBoundingClientRect();
      offsetX = event.changedTouches[0].clientX - rect.left;
      offsetY = event.changedTouches[0].clientY - rect.top;
    }

    const newSelectedValue = type === 'seconds' || type === 'minutes' ? (0, _timeUtils.getMinutes)(offsetX, offsetY, minutesStep) : (0, _timeUtils.getHours)(offsetX, offsetY, Boolean(ampm));
    handleValueChange(newSelectedValue, isFinish);
  };

  const handleTouchMove = event => {
    isMoving.current = true;
    setTime(event, 'shallow');
  };

  const handleTouchEnd = event => {
    if (isMoving.current) {
      setTime(event, 'finish');
      isMoving.current = false;
    }
  };

  const handleMouseMove = event => {
    event.preventDefault();
    event.stopPropagation(); // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari

    const isButtonPressed = // tslint:disable-next-line deprecation
    typeof event.buttons === 'undefined' ? event.nativeEvent.which === 1 : event.buttons === 1;

    if (isButtonPressed) {
      setTime(event.nativeEvent, 'shallow');
    }
  };

  const handleMouseUp = event => {
    if (isMoving.current) {
      isMoving.current = false;
    }

    setTime(event.nativeEvent, 'finish');
  };

  const hasSelected = React.useMemo(() => {
    if (type === 'hours') {
      return true;
    }

    return value % 5 === 0;
  }, [type, value]);
  const keyboardControlStep = type === 'minutes' ? minutesStep : 1;
  (0, _useKeyDown.useGlobalKeyDown)(Boolean(allowKeyboardControl !== null && allowKeyboardControl !== void 0 ? allowKeyboardControl : !isStatic) && !isMoving.current, {
    [_useKeyDown.keycode.Home]: () => handleValueChange(0, 'partial'),
    // annulate both hours and minutes
    [_useKeyDown.keycode.End]: () => handleValueChange(type === 'minutes' ? 59 : 23, 'partial'),
    [_useKeyDown.keycode.ArrowUp]: () => handleValueChange(value + keyboardControlStep, 'partial'),
    [_useKeyDown.keycode.ArrowDown]: () => handleValueChange(value - keyboardControlStep, 'partial')
  });
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
  }), date && /*#__PURE__*/React.createElement(_ClockPointer.default, {
    type: type,
    value: value,
    isInner: isPointerInner,
    hasSelected: hasSelected,
    "aria-live": "polite",
    "aria-label": getClockLabelText(type, date, utils)
  })), numbersElementsArray), ampm && (wrapperVariant === 'desktop' || ampmInClock) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_IconButton.default, {
    onClick: () => handleMeridiemChange('am'),
    disabled: meridiemMode === null,
    className: (0, _clsx.default)(classes.amButton, meridiemMode === 'am' && classes.meridiemButtonSelected)
  }, _ref), /*#__PURE__*/React.createElement(_IconButton.default, {
    disabled: meridiemMode === null,
    onClick: () => handleMeridiemChange('pm'),
    className: (0, _clsx.default)(classes.pmButton, meridiemMode === 'pm' && classes.meridiemButtonSelected)
  }, _ref2)));
}

process.env.NODE_ENV !== "production" ? Clock.propTypes = {
  ampm: _propTypes.default.bool,
  minutesStep: _propTypes.default.number
} : void 0;

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiClock'
})(Clock);

exports.default = _default;
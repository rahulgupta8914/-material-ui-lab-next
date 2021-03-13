"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.areDayPropsEqual = exports.styles = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _ButtonBase = _interopRequireDefault(require("@material-ui/core/ButtonBase"));

var _styles = require("@material-ui/core/styles");

var _utils = require("@material-ui/core/utils");

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _dimensions = require("../internal/pickers/constants/dimensions");

const styles = theme => ({
  root: (0, _extends2.default)({}, theme.typography.caption, {
    width: _dimensions.DAY_SIZE,
    height: _dimensions.DAY_SIZE,
    borderRadius: '50%',
    padding: 0,
    // background required here to prevent collides with the other days when animating with transition group
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: (0, _styles.alpha)(theme.palette.action.active, theme.palette.action.hoverOpacity)
    },
    '&:focus': {
      backgroundColor: (0, _styles.alpha)(theme.palette.action.active, theme.palette.action.hoverOpacity),
      '&$selected': {
        willChange: 'background-color',
        backgroundColor: theme.palette.primary.dark
      }
    },
    '&$selected': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        willChange: 'background-color',
        backgroundColor: theme.palette.primary.dark
      }
    },
    '&$disabled': {
      color: theme.palette.text.secondary
    }
  }),
  dayWithMargin: {
    margin: `0 ${_dimensions.DAY_MARGIN}px`
  },
  dayOutsideMonth: {
    color: theme.palette.text.secondary
  },
  hiddenDaySpacingFiller: {
    visibility: 'hidden'
  },
  today: {
    '&:not($selected)': {
      border: `1px solid ${theme.palette.text.secondary}`
    }
  },
  selected: {},
  disabled: {}
});

exports.styles = styles;
const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const noop = () => {};

const PickersDay = /*#__PURE__*/React.forwardRef(function PickersDay(props, forwardedRef) {
  const {
    allowKeyboardControl,
    allowSameDateSelection = false,
    autoFocus = false,
    classes,
    className,
    day,
    disabled = false,
    disableHighlightToday = false,
    disableMargin = false,
    isAnimating,
    onClick,
    onDayFocus = noop,
    onDaySelect,
    onFocus,
    onKeyDown,
    outsideCurrentMonth,
    selected = false,
    showDaysOutsideCurrentMonth = false,
    today: isToday = false
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["allowKeyboardControl", "allowSameDateSelection", "autoFocus", "classes", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDayFocus", "onDaySelect", "onFocus", "onKeyDown", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "today"]);
  const utils = (0, _useUtils.useUtils)();
  const ref = React.useRef(null);
  const handleRef = (0, _utils.useForkRef)(ref, forwardedRef); // Since this is rendered when a Popper is opened we can't use passive effects.
  // Focusing in passive effects in Popper causes scroll jump.

  useEnhancedEffect(() => {
    if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) {
      // ref.current being null would be a bug in Material-UI
      ref.current.focus();
    }
  }, [autoFocus, disabled, isAnimating, outsideCurrentMonth]);

  const handleFocus = event => {
    if (onDayFocus) {
      onDayFocus(day);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  const handleClick = event => {
    if (!allowSameDateSelection && selected) return;

    if (!disabled) {
      onDaySelect(day, 'finish');
    }

    if (onClick) {
      onClick(event);
    }
  };

  const theme = (0, _styles.useTheme)();

  function handleKeyDown(event) {
    if (onKeyDown !== undefined) {
      onKeyDown(event);
    }

    if (!allowKeyboardControl) {
      return;
    }

    switch (event.key) {
      case 'ArrowUp':
        onDayFocus(utils.addDays(day, -7));
        event.preventDefault();
        break;

      case 'ArrowDown':
        onDayFocus(utils.addDays(day, 7));
        event.preventDefault();
        break;

      case 'ArrowLeft':
        onDayFocus(utils.addDays(day, theme.direction === 'ltr' ? -1 : 1));
        event.preventDefault();
        break;

      case 'ArrowRight':
        onDayFocus(utils.addDays(day, theme.direction === 'ltr' ? 1 : -1));
        event.preventDefault();
        break;

      case 'Home':
        onDayFocus(utils.startOfWeek(day));
        event.preventDefault();
        break;

      case 'End':
        onDayFocus(utils.endOfWeek(day));
        event.preventDefault();
        break;

      case 'PageUp':
        onDayFocus(utils.getNextMonth(day));
        event.preventDefault();
        break;

      case 'PageDown':
        onDayFocus(utils.getPreviousMonth(day));
        event.preventDefault();
        break;

      default:
        break;
    }
  }

  const dayClassName = (0, _clsx.default)(classes.root, className, selected && classes.selected, !disableMargin && classes.dayWithMargin, !disableHighlightToday && isToday && classes.today, outsideCurrentMonth && showDaysOutsideCurrentMonth && classes.dayOutsideMonth);

  if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": true,
      className: (0, _clsx.default)(dayClassName, classes.hiddenDaySpacingFiller)
    });
  }

  return /*#__PURE__*/React.createElement(_ButtonBase.default, (0, _extends2.default)({
    ref: handleRef,
    centerRipple: true,
    disabled: disabled,
    "aria-label": utils.format(day, 'fullDate'),
    tabIndex: selected ? 0 : -1,
    className: dayClassName,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  }, other), utils.format(day, 'dayOfMonth'));
});

const areDayPropsEqual = (prevProps, nextProps) => {
  return prevProps.autoFocus === nextProps.autoFocus && prevProps.isAnimating === nextProps.isAnimating && prevProps.today === nextProps.today && prevProps.disabled === nextProps.disabled && prevProps.selected === nextProps.selected && prevProps.allowKeyboardControl === nextProps.allowKeyboardControl && prevProps.disableMargin === nextProps.disableMargin && prevProps.showDaysOutsideCurrentMonth === nextProps.showDaysOutsideCurrentMonth && prevProps.disableHighlightToday === nextProps.disableHighlightToday && prevProps.className === nextProps.className && prevProps.outsideCurrentMonth === nextProps.outsideCurrentMonth && prevProps.onDayFocus === nextProps.onDayFocus && prevProps.onDaySelect === nextProps.onDaySelect;
};

exports.areDayPropsEqual = areDayPropsEqual;
process.env.NODE_ENV !== "production" ? PickersDay.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * If `true`, keyboard control and focus management is enabled.
   */
  allowKeyboardControl: _propTypes.default.bool,

  /**
   * If `true`, `onChange` is fired on click even if the same date is selected.
   * @default false
   */
  allowSameDateSelection: _propTypes.default.bool,

  /**
   * @ignore
   */
  autoFocus: _propTypes.default.bool,

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The date to show.
   */
  day: _propTypes.default.any.isRequired,

  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, todays date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: _propTypes.default.bool,

  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: _propTypes.default.bool,

  /**
   * @ignore
   */
  hidden: _propTypes.default.bool,

  /**
   * @ignore
   */
  isAnimating: _propTypes.default.bool,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func,

  /**
   * @ignore
   */
  onDayFocus: _propTypes.default.func,

  /**
   * @ignore
   */
  onDaySelect: _propTypes.default.func.isRequired,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func,

  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: _propTypes.default.bool.isRequired,

  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: _propTypes.default.bool,

  /**
   * If `true`, days that have `outsideCurrentMonth={true}` are displayed.
   * @default false
   */
  showDaysOutsideCurrentMonth: _propTypes.default.bool,

  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: _propTypes.default.bool
} : void 0;
/**
 *
 * Demos:
 *
 * - [Date Picker](https://material-ui.com/components/date-picker/)
 *
 * API:
 *
 * - [PickersDay API](https://material-ui.com/api/pickers-day/)
 */

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiPickersDay'
})( /*#__PURE__*/React.memo(PickersDay, areDayPropsEqual));

exports.default = _default;
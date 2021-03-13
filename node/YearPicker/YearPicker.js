"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _PickersYear = _interopRequireDefault(require("./PickersYear"));

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _dateUtils = require("../internal/pickers/date-utils");

var _WrapperVariantContext = require("../internal/pickers/wrappers/WrapperVariantContext");

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflowY: 'auto',
    height: '100%',
    margin: '0 4px'
  }
};
exports.styles = styles;
const YearPicker = /*#__PURE__*/React.forwardRef(function YearPicker(props, ref) {
  const {
    allowKeyboardControl,
    classes,
    className,
    date,
    disableFuture,
    disablePast,
    isDateDisabled,
    maxDate,
    minDate,
    onChange,
    onFocusedDayChange,
    onYearChange,
    shouldDisableYear
  } = props;
  const now = (0, _useUtils.useNow)();
  const theme = (0, _styles.useTheme)();
  const utils = (0, _useUtils.useUtils)();
  const selectedDate = date || now;
  const currentYear = utils.getYear(selectedDate);
  const wrapperVariant = React.useContext(_WrapperVariantContext.WrapperVariantContext);
  const selectedYearRef = React.useRef(null);
  const [focusedYear, setFocusedYear] = React.useState(currentYear);

  const handleYearSelection = (event, year, isFinish = 'finish') => {
    const submitDate = newDate => {
      onChange(newDate, isFinish);

      if (onFocusedDayChange) {
        onFocusedDayChange(newDate || now);
      }

      if (onYearChange) {
        onYearChange(newDate);
      }
    };

    const newDate = utils.setYear(selectedDate, year);

    if (isDateDisabled(newDate)) {
      const closestEnabledDate = (0, _dateUtils.findClosestEnabledDate)({
        utils,
        date: newDate,
        minDate,
        maxDate,
        disablePast: Boolean(disablePast),
        disableFuture: Boolean(disableFuture),
        shouldDisableDate: isDateDisabled
      });
      submitDate(closestEnabledDate || now);
    } else {
      submitDate(newDate);
    }
  };

  const focusYear = React.useCallback(year => {
    if (!isDateDisabled(utils.setYear(selectedDate, year))) {
      setFocusedYear(year);
    }
  }, [selectedDate, isDateDisabled, utils]);
  const yearsInRow = wrapperVariant === 'desktop' ? 4 : 3;

  const handleKeyDown = (event, year) => {
    if (!allowKeyboardControl) {
      return;
    }

    switch (event.key) {
      case 'ArrowUp':
        focusYear(year - yearsInRow);
        event.preventDefault();
        break;

      case 'ArrowDown':
        focusYear(year + yearsInRow);
        event.preventDefault();
        break;

      case 'ArrowLeft':
        focusYear(year + (theme.direction === 'ltr' ? -1 : 1));
        event.preventDefault();
        break;

      case 'ArrowRight':
        focusYear(year + (theme.direction === 'ltr' ? 1 : -1));
        event.preventDefault();
        break;

      default:
        break;
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: (0, _clsx.default)(classes.root, className)
  }, utils.getYearRange(minDate, maxDate).map(year => {
    const yearNumber = utils.getYear(year);
    const selected = yearNumber === currentYear;
    return /*#__PURE__*/React.createElement(_PickersYear.default, {
      key: utils.format(year, 'year'),
      selected: selected,
      value: yearNumber,
      onClick: handleYearSelection,
      onKeyDown: handleKeyDown,
      autoFocus: allowKeyboardControl && yearNumber === focusedYear,
      ref: selected ? selectedYearRef : undefined,
      disabled: disablePast && utils.isBeforeYear(year, now) || disableFuture && utils.isAfterYear(year, now) || shouldDisableYear && shouldDisableYear(year)
    }, utils.format(year, 'year'));
  }));
});
process.env.NODE_ENV !== "production" ? YearPicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  allowKeyboardControl: _propTypes.default.bool,

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * @ignore
   */
  date: _propTypes.default.any,

  /**
   * @ignore
   */
  disableFuture: _propTypes.default.bool,

  /**
   * @ignore
   */
  disablePast: _propTypes.default.bool,

  /**
   * @ignore
   */
  isDateDisabled: _propTypes.default.func.isRequired,

  /**
   * @ignore
   */
  maxDate: _propTypes.default.any.isRequired,

  /**
   * @ignore
   */
  minDate: _propTypes.default.any.isRequired,

  /**
   * @ignore
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * @ignore
   */
  onFocusedDayChange: _propTypes.default.func,

  /**
   * Callback firing on year change @DateIOType.
   */
  onYearChange: _propTypes.default.func,

  /**
   * Disable specific years dynamically.
   * Works like `shouldDisableDate` but for year selection view @DateIOType.
   */
  shouldDisableYear: _propTypes.default.func
} : void 0;
/**
 *
 * API:
 *
 * - [YearPicker API](https://material-ui.com/api/year-picker/)
 */

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiYearPicker'
})(YearPicker);

exports.default = _default;
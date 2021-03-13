import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import PickersYear from './PickersYear';
import { useUtils, useNow } from '../internal/pickers/hooks/useUtils';
import { findClosestEnabledDate } from '../internal/pickers/date-utils';
import { WrapperVariantContext } from '../internal/pickers/wrappers/WrapperVariantContext';
export var styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflowY: 'auto',
    height: '100%',
    margin: '0 4px'
  }
};
var YearPicker = /*#__PURE__*/React.forwardRef(function YearPicker(props, ref) {
  var allowKeyboardControl = props.allowKeyboardControl,
      classes = props.classes,
      className = props.className,
      date = props.date,
      disableFuture = props.disableFuture,
      disablePast = props.disablePast,
      isDateDisabled = props.isDateDisabled,
      maxDate = props.maxDate,
      minDate = props.minDate,
      onChange = props.onChange,
      onFocusedDayChange = props.onFocusedDayChange,
      onYearChange = props.onYearChange,
      shouldDisableYear = props.shouldDisableYear;
  var now = useNow();
  var theme = useTheme();
  var utils = useUtils();
  var selectedDate = date || now;
  var currentYear = utils.getYear(selectedDate);
  var wrapperVariant = React.useContext(WrapperVariantContext);
  var selectedYearRef = React.useRef(null);

  var _React$useState = React.useState(currentYear),
      focusedYear = _React$useState[0],
      setFocusedYear = _React$useState[1];

  var handleYearSelection = function handleYearSelection(event, year) {
    var isFinish = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'finish';

    var submitDate = function submitDate(newDate) {
      onChange(newDate, isFinish);

      if (onFocusedDayChange) {
        onFocusedDayChange(newDate || now);
      }

      if (onYearChange) {
        onYearChange(newDate);
      }
    };

    var newDate = utils.setYear(selectedDate, year);

    if (isDateDisabled(newDate)) {
      var closestEnabledDate = findClosestEnabledDate({
        utils: utils,
        date: newDate,
        minDate: minDate,
        maxDate: maxDate,
        disablePast: Boolean(disablePast),
        disableFuture: Boolean(disableFuture),
        shouldDisableDate: isDateDisabled
      });
      submitDate(closestEnabledDate || now);
    } else {
      submitDate(newDate);
    }
  };

  var focusYear = React.useCallback(function (year) {
    if (!isDateDisabled(utils.setYear(selectedDate, year))) {
      setFocusedYear(year);
    }
  }, [selectedDate, isDateDisabled, utils]);
  var yearsInRow = wrapperVariant === 'desktop' ? 4 : 3;

  var handleKeyDown = function handleKeyDown(event, year) {
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
    className: clsx(classes.root, className)
  }, utils.getYearRange(minDate, maxDate).map(function (year) {
    var yearNumber = utils.getYear(year);
    var selected = yearNumber === currentYear;
    return /*#__PURE__*/React.createElement(PickersYear, {
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
  allowKeyboardControl: PropTypes.bool,

  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * @ignore
   */
  date: PropTypes.any,

  /**
   * @ignore
   */
  disableFuture: PropTypes.bool,

  /**
   * @ignore
   */
  disablePast: PropTypes.bool,

  /**
   * @ignore
   */
  isDateDisabled: PropTypes.func.isRequired,

  /**
   * @ignore
   */
  maxDate: PropTypes.any.isRequired,

  /**
   * @ignore
   */
  minDate: PropTypes.any.isRequired,

  /**
   * @ignore
   */
  onChange: PropTypes.func.isRequired,

  /**
   * @ignore
   */
  onFocusedDayChange: PropTypes.func,

  /**
   * Callback firing on year change @DateIOType.
   */
  onYearChange: PropTypes.func,

  /**
   * Disable specific years dynamically.
   * Works like `shouldDisableDate` but for year selection view @DateIOType.
   */
  shouldDisableYear: PropTypes.func
} : void 0;
/**
 *
 * API:
 *
 * - [YearPicker API](https://material-ui.com/api/year-picker/)
 */

export default withStyles(styles, {
  name: 'MuiYearPicker'
})(YearPicker);
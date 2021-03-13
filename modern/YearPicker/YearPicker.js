import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import PickersYear from './PickersYear';
import { useUtils, useNow } from '../internal/pickers/hooks/useUtils';
import { findClosestEnabledDate } from '../internal/pickers/date-utils';
import { WrapperVariantContext } from '../internal/pickers/wrappers/WrapperVariantContext';
export const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflowY: 'auto',
    height: '100%',
    margin: '0 4px'
  }
};
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
  const now = useNow();
  const theme = useTheme();
  const utils = useUtils();
  const selectedDate = date || now;
  const currentYear = utils.getYear(selectedDate);
  const wrapperVariant = React.useContext(WrapperVariantContext);
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
      const closestEnabledDate = findClosestEnabledDate({
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
    className: clsx(classes.root, className)
  }, utils.getYearRange(minDate, maxDate).map(year => {
    const yearNumber = utils.getYear(year);
    const selected = yearNumber === currentYear;
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
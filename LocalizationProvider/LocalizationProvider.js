import * as React from 'react';
import PropTypes from 'prop-types';
export const MuiPickersAdapterContext = /*#__PURE__*/React.createContext(null);

/**
 * @ignore - do not document.
 */
const LocalizationProvider = props => {
  const {
    children,
    dateAdapter: Utils,
    dateFormats,
    dateLibInstance,
    locale
  } = props;
  const utils = React.useMemo(() => new Utils({
    locale,
    formats: dateFormats,
    instance: dateLibInstance
  }), [Utils, locale, dateFormats, dateLibInstance]);
  return /*#__PURE__*/React.createElement(MuiPickersAdapterContext.Provider, {
    value: utils
  }, children);
};

process.env.NODE_ENV !== "production" ? LocalizationProvider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  children: PropTypes.node,

  /**
   * DateIO adapter class function
   */
  dateAdapter: PropTypes.func.isRequired,

  /**
   * Formats that are used for any child pickers
   */
  dateFormats: PropTypes.shape({
    dayOfMonth: PropTypes.string,
    fullDate: PropTypes.string,
    fullDateTime: PropTypes.string,
    fullDateTime12h: PropTypes.string,
    fullDateTime24h: PropTypes.string,
    fullDateWithWeekday: PropTypes.string,
    fullTime: PropTypes.string,
    fullTime12h: PropTypes.string,
    fullTime24h: PropTypes.string,
    hours12h: PropTypes.string,
    hours24h: PropTypes.string,
    keyboardDate: PropTypes.string,
    keyboardDateTime: PropTypes.string,
    keyboardDateTime12h: PropTypes.string,
    keyboardDateTime24h: PropTypes.string,
    minutes: PropTypes.string,
    month: PropTypes.string,
    monthAndDate: PropTypes.string,
    monthAndYear: PropTypes.string,
    monthShort: PropTypes.string,
    normalDate: PropTypes.string,
    normalDateWithWeekday: PropTypes.string,
    seconds: PropTypes.string,
    shortDate: PropTypes.string,
    weekday: PropTypes.string,
    weekdayShort: PropTypes.string,
    year: PropTypes.string
  }),

  /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */
  dateLibInstance: PropTypes.any,

  /**
   * Locale for the date library you are using
   */
  locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
} : void 0;
export default LocalizationProvider;
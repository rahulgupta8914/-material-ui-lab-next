"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultReduceAnimations = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _MonthPicker = _interopRequireDefault(require("../MonthPicker/MonthPicker"));

var _useCalendarState = require("./useCalendarState");

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _PickersFadeTransitionGroup = _interopRequireDefault(require("./PickersFadeTransitionGroup"));

var _PickersCalendar = _interopRequireDefault(require("./PickersCalendar"));

var _useViews = require("../internal/pickers/hooks/useViews");

var _dimensions = require("../internal/pickers/constants/dimensions");

var _PickersCalendarHeader = _interopRequireDefault(require("./PickersCalendarHeader"));

var _YearPicker = _interopRequireDefault(require("../YearPicker/YearPicker"));

var _propTypes2 = require("../internal/pickers/constants/prop-types");

var _WrapperVariantContext = require("../internal/pickers/wrappers/WrapperVariantContext");

var _dateUtils = require("../internal/pickers/date-utils");

var _PickerView = _interopRequireDefault(require("../internal/pickers/Picker/PickerView"));

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  viewTransitionContainer: {
    overflowY: 'auto'
  },
  fullHeightContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: (_dimensions.DAY_SIZE + _dimensions.DAY_MARGIN * 4) * 7,
    height: '100%'
  }
};
exports.styles = styles;
const defaultReduceAnimations = typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent);
exports.defaultReduceAnimations = defaultReduceAnimations;

var _ref = /*#__PURE__*/React.createElement("span", null, "...");

const DayPicker = /*#__PURE__*/React.forwardRef(function DayPicker(props, ref) {
  const {
    allowKeyboardControl: allowKeyboardControlProp,
    onViewChange,
    date,
    disableFuture = false,
    disablePast = false,
    defaultCalendarMonth,
    classes,
    loading = false,
    maxDate: maxDateProp,
    minDate: minDateProp,
    onChange,
    onMonthChange,
    reduceAnimations = defaultReduceAnimations,
    renderLoading = () => _ref,
    shouldDisableDate,
    shouldDisableYear,
    view,
    // TODO: unsound. `TView` could be `'date'`. `T extends Literal` does not mean there are more constituents but less.
    // Probably easiest to remove `TView`. How would one even pass this type parameter?
    views = ['year', 'date'],
    openTo = 'date',
    className
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["allowKeyboardControl", "onViewChange", "date", "disableFuture", "disablePast", "defaultCalendarMonth", "classes", "loading", "maxDate", "minDate", "onChange", "onMonthChange", "reduceAnimations", "renderLoading", "shouldDisableDate", "shouldDisableYear", "view", "views", "openTo", "className"]);
  const utils = (0, _useUtils.useUtils)();
  const isStatic = React.useContext(_WrapperVariantContext.IsStaticVariantContext);
  const allowKeyboardControl = allowKeyboardControlProp !== null && allowKeyboardControlProp !== void 0 ? allowKeyboardControlProp : !isStatic;
  const minDate = minDateProp || utils.date(_propTypes2.defaultMinDate);
  const maxDate = maxDateProp || utils.date(_propTypes2.defaultMaxDate);
  const {
    openView,
    setOpenView
  } = (0, _useViews.useViews)({
    view,
    views,
    openTo,
    onChange,
    onViewChange
  });
  const {
    calendarState,
    changeFocusedDay,
    changeMonth,
    isDateDisabled,
    handleChangeMonth,
    onMonthSwitchingAnimationEnd
  } = (0, _useCalendarState.useCalendarState)({
    date,
    defaultCalendarMonth,
    reduceAnimations,
    onMonthChange,
    minDate,
    maxDate,
    shouldDisableDate,
    disablePast,
    disableFuture
  });
  React.useEffect(() => {
    if (date && isDateDisabled(date)) {
      const closestEnabledDate = (0, _dateUtils.findClosestEnabledDate)({
        utils,
        date,
        minDate,
        maxDate,
        disablePast,
        disableFuture,
        shouldDisableDate: isDateDisabled
      });
      onChange(closestEnabledDate, 'partial');
    } // This call is too expensive to run it on each prop change.
    // So just ensure that we are not rendering disabled as selected on mount.

  }, []); // eslint-disable-line

  React.useEffect(() => {
    if (date) {
      changeMonth(date);
    }
  }, [date]); // eslint-disable-line

  return /*#__PURE__*/React.createElement(_PickerView.default, {
    ref: ref,
    className: (0, _clsx.default)(classes.root, className)
  }, /*#__PURE__*/React.createElement(_PickersCalendarHeader.default, (0, _extends2.default)({}, other, {
    views: views,
    openView: openView,
    currentMonth: calendarState.currentMonth,
    onViewChange: setOpenView,
    onMonthChange: (newMonth, direction) => handleChangeMonth({
      newMonth,
      direction
    }),
    minDate: minDate,
    maxDate: maxDate,
    disablePast: disablePast,
    disableFuture: disableFuture,
    reduceAnimations: reduceAnimations
  })), /*#__PURE__*/React.createElement(_PickersFadeTransitionGroup.default, {
    reduceAnimations: reduceAnimations,
    className: classes.viewTransitionContainer,
    transKey: openView
  }, /*#__PURE__*/React.createElement("div", null, openView === 'year' && /*#__PURE__*/React.createElement(_YearPicker.default, (0, _extends2.default)({}, other, {
    date: date,
    onChange: onChange,
    minDate: minDate,
    maxDate: maxDate,
    disableFuture: disableFuture,
    disablePast: disablePast,
    isDateDisabled: isDateDisabled,
    allowKeyboardControl: allowKeyboardControl,
    shouldDisableYear: shouldDisableYear,
    onFocusedDayChange: changeFocusedDay
  })), openView === 'month' && /*#__PURE__*/React.createElement(_MonthPicker.default, (0, _extends2.default)({}, other, {
    date: date,
    onChange: onChange,
    minDate: minDate,
    maxDate: maxDate,
    onMonthChange: onMonthChange
  })), openView === 'date' && /*#__PURE__*/React.createElement(_PickersCalendar.default, (0, _extends2.default)({}, other, calendarState, {
    onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
    onFocusedDayChange: changeFocusedDay,
    reduceAnimations: reduceAnimations,
    date: date,
    onChange: onChange,
    isDateDisabled: isDateDisabled,
    allowKeyboardControl: allowKeyboardControl,
    loading: loading,
    renderLoading: renderLoading
  })))));
});
process.env.NODE_ENV !== "production" ? DayPicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * Enables keyboard listener for moving between days in calendar.
   * Defaults to `true` unless the `ClockPicker` is used inside a `Static*` picker component.
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
   * Default calendar month displayed when `value={null}`.
   */
  defaultCalendarMonth: _propTypes.default.any,

  /**
   * @default false
   */
  disableFuture: _propTypes.default.bool,

  /**
   * @default false
   */
  disablePast: _propTypes.default.bool,

  /**
   * If `true` renders `LoadingComponent` in calendar instead of calendar view.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: _propTypes.default.bool,

  /**
   * Max selectable date. @DateIOType
   */
  maxDate: _propTypes.default.any,

  /**
   * Min selectable date. @DateIOType
   */
  minDate: _propTypes.default.any,

  /**
   * Callback fired on date change
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * Callback firing on month change. @DateIOType
   */
  onMonthChange: _propTypes.default.func,

  /**
   * Callback fired on view change.
   */
  onViewChange: _propTypes.default.func,

  /**
   * Initially open view.
   * @default 'date'
   */
  openTo: _propTypes.default.oneOf(['date', 'month', 'year']),

  /**
   * Disable heavy animations.
   * @default typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent)
   */
  reduceAnimations: _propTypes.default.bool,

  /**
   * Component displaying when passed `loading` true.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: _propTypes.default.func,

  /**
   * Disable specific date. @DateIOType
   */
  shouldDisableDate: _propTypes.default.func,

  /**
   * Disable specific years dynamically.
   * Works like `shouldDisableDate` but for year selection view @DateIOType.
   */
  shouldDisableYear: _propTypes.default.func,

  /**
   * Controlled open view.
   */
  view: _propTypes.default.oneOf(['date', 'month', 'year']),

  /**
   * Views for day picker.
   * @default ['year', 'date']
   */
  views: _propTypes.default.arrayOf(_propTypes.default.oneOf(['date', 'month', 'year']).isRequired)
} : void 0;
/**
 *
 * API:
 *
 * - [DayPicker API](https://material-ui.com/api/day-picker/)
 */

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiDayPicker'
})(DayPicker);

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.dateTimePickerConfig = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _DateTimePickerToolbar = _interopRequireDefault(require("./DateTimePickerToolbar"));

var _ResponsiveWrapper = require("../internal/pickers/wrappers/ResponsiveWrapper");

var _textFieldHelper = require("../internal/pickers/text-field-helper");

var _dateHelpersHooks = require("../internal/pickers/hooks/date-helpers-hooks");

var _makePickerWithState = require("../internal/pickers/Picker/makePickerWithState");

var _dateTimeUtils = require("./date-time-utils");

var _useValidation = require("../internal/pickers/hooks/useValidation");

var _propTypes2 = require("../internal/pickers/constants/prop-types");

function useInterceptProps(_ref) {
  let {
    ampm,
    inputFormat,
    maxDate: __maxDate = _propTypes2.defaultMaxDate,
    maxDateTime: __maxDateTime,
    maxTime: __maxTime,
    minDate: __minDate = _propTypes2.defaultMinDate,
    minDateTime: __minDateTime,
    minTime: __minTime,
    openTo = 'date',
    orientation = 'portrait',
    views = ['year', 'date', 'hours', 'minutes']
  } = _ref,
      other = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["ampm", "inputFormat", "maxDate", "maxDateTime", "maxTime", "minDate", "minDateTime", "minTime", "openTo", "orientation", "views"]);
  const utils = (0, _useUtils.useUtils)();
  const minTime = (0, _dateHelpersHooks.useParsedDate)(__minTime);
  const maxTime = (0, _dateHelpersHooks.useParsedDate)(__maxTime);
  const minDate = (0, _dateHelpersHooks.useParsedDate)(__minDate);
  const maxDate = (0, _dateHelpersHooks.useParsedDate)(__maxDate);
  const minDateTime = (0, _dateHelpersHooks.useParsedDate)(__minDateTime);
  const maxDateTime = (0, _dateHelpersHooks.useParsedDate)(__maxDateTime);
  const willUseAmPm = ampm !== null && ampm !== void 0 ? ampm : utils.is12HourCycleInCurrentLocale();

  if (orientation !== 'portrait') {
    throw new Error('We are not supporting custom orientation for DateTimePicker yet :(');
  }

  return (0, _extends2.default)({
    openTo,
    views,
    ampm: willUseAmPm,
    ampmInClock: true,
    orientation,
    showToolbar: true,
    showTabs: true,
    allowSameDateSelection: true,
    minDate: minDateTime || minDate,
    minTime: minDateTime || minTime,
    maxDate: maxDateTime || maxDate,
    maxTime: maxDateTime || maxTime,
    disableIgnoringDatePartForTimeValidation: Boolean(minDateTime || maxDateTime),
    acceptRegex: willUseAmPm ? /[\dap]/gi : /\d/gi,
    mask: '__/__/____ __:__',
    disableMaskedInput: willUseAmPm,
    inputFormat: (0, _textFieldHelper.pick12hOr24hFormat)(inputFormat, willUseAmPm, {
      localized: utils.formats.keyboardDateTime,
      '12h': utils.formats.keyboardDateTime12h,
      '24h': utils.formats.keyboardDateTime24h
    })
  }, other);
}

const useValidation = (0, _useValidation.makeValidationHook)(_dateTimeUtils.validateDateAndTime);
const dateTimePickerConfig = {
  useInterceptProps,
  useValidation,
  DefaultToolbarComponent: _DateTimePickerToolbar.default
};
exports.dateTimePickerConfig = dateTimePickerConfig;

/**
 *
 * Demos:
 *
 * - [Date Time Picker](https://material-ui.com/components/date-time-picker/)
 *
 * API:
 *
 * - [DateTimePicker API](https://material-ui.com/api/date-time-picker/)
 */
// @typescript-to-proptypes-generate
const DateTimePicker = (0, _makePickerWithState.makePickerWithState)(_ResponsiveWrapper.ResponsiveWrapper, (0, _extends2.default)({
  name: 'MuiDateTimePicker'
}, dateTimePickerConfig));

if (process.env.NODE_ENV !== 'production') {
  DateTimePicker.displayName = 'DateTimePicker';
}

DateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * Regular expression to detect "accepted" symbols.
   * @default /\dap/gi
   */
  acceptRegex: _propTypes.default.instanceOf(RegExp),

  /**
   * Enables keyboard listener for moving between days in calendar.
   * Defaults to `true` unless the `ClockPicker` is used inside a `Static*` picker component.
   */
  allowKeyboardControl: _propTypes.default.bool,

  /**
   * If `true`, `onChange` is fired on click even if the same date is selected.
   * @default false
   */
  allowSameDateSelection: _propTypes.default.bool,

  /**
   * 12h/24h view for hour selection clock.
   * @default false
   */
  ampm: _propTypes.default.bool,

  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default false
   */
  ampmInClock: _propTypes.default.bool,

  /**
   * Cancel text message.
   * @default "CANCEL"
   */
  cancelText: _propTypes.default.node,

  /**
   * @ignore
   */
  children: _propTypes.default.node,

  /**
   * className applied to the root component.
   */
  className: _propTypes.default.string,

  /**
   * If `true`, it shows the clear action in the picker dialog.
   * @default false
   */
  clearable: _propTypes.default.bool,

  /**
   * Clear text message.
   * @default "CLEAR"
   */
  clearText: _propTypes.default.node,

  /**
   * The components used for each slot.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: _propTypes.default.shape({
    LeftArrowButton: _propTypes.default.elementType,
    LeftArrowIcon: _propTypes.default.elementType,
    RightArrowButton: _propTypes.default.elementType,
    RightArrowIcon: _propTypes.default.elementType,
    SwitchViewButton: _propTypes.default.elementType,
    SwitchViewIcon: _propTypes.default.elementType
  }),

  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: _propTypes.default.object,

  /**
   * Date tab icon.
   */
  dateRangeIcon: _propTypes.default.node,

  /**
   * Default calendar month displayed when `value={null}`.
   */
  defaultCalendarMonth: _propTypes.default.any,

  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default "@media (pointer: fine)"
   * @example "@media (min-width: 720px)" or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: _propTypes.default.string,

  /**
   * Props applied to the [`Dialog`](/api/dialog/) element.
   */
  DialogProps: _propTypes.default.object,

  /**
   * If `true` the popup or dialog will immediately close after submitting full date.
   * @default `true` for Desktop, `false` for Mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  disableCloseOnSelect: _propTypes.default.bool,

  /**
   * If `true`, the picker and text field are disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * @default false
   */
  disableFuture: _propTypes.default.bool,

  /**
   * If `true`, todays date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: _propTypes.default.bool,

  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: _propTypes.default.bool,

  /**
   * Disable mask on the keyboard, this should be used rarely. Consider passing proper mask for your format.
   * @default false
   */
  disableMaskedInput: _propTypes.default.bool,

  /**
   * Do not render open picker button (renders only text field with validation).
   * @default false
   */
  disableOpenPicker: _propTypes.default.bool,

  /**
   * @default false
   */
  disablePast: _propTypes.default.bool,

  /**
   * Accessible text that helps user to understand which time and view is selected.
   * @default <TDate extends any>(
   *   view: 'hours' | 'minutes' | 'seconds',
   *   time: TDate,
   *   adapter: MuiPickersAdapter<TDate>,
   * ) => `Select ${view}. Selected time is ${adapter.format(time, 'fullTime')}`
   */
  getClockLabelText: _propTypes.default.func,

  /**
   * Get aria-label text for control that opens picker dialog. Aria-label text must include selected date. @DateIOType
   * @default (value, utils) => `Choose date, selected date is ${utils.format(utils.date(value), 'fullDate')}`
   */
  getOpenDialogAriaText: _propTypes.default.func,

  /**
   * Get aria-label text for switching between views button.
   */
  getViewSwitchingButtonText: _propTypes.default.func,

  /**
   * To show tabs.
   */
  hideTabs: _propTypes.default.bool,

  /**
   * @ignore
   */
  ignoreInvalidInputs: _propTypes.default.bool,

  /**
   * Props to pass to keyboard input adornment.
   */
  InputAdornmentProps: _propTypes.default.object,

  /**
   * Format string.
   */
  inputFormat: _propTypes.default.string,

  /**
   * @ignore
   */
  InputProps: _propTypes.default.object,

  /**
   * @ignore
   */
  key: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * @ignore
   */
  label: _propTypes.default.node,

  /**
   * Left arrow icon aria-label text.
   */
  leftArrowButtonText: _propTypes.default.string,

  /**
   * If `true` renders `LoadingComponent` in calendar instead of calendar view.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: _propTypes.default.bool,

  /**
   * Custom mask. Can be used to override generate from format. (e.g. `__/__/____ __:__` or `__/__/____ __:__ _M`).
   */
  mask: _propTypes.default.string,

  /**
   * @ignore
   */
  maxDate: _propTypes.default.oneOfType([_propTypes.default.any, _propTypes.default.instanceOf(Date), _propTypes.default.number, _propTypes.default.string]),

  /**
   * Minimal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: _propTypes.default.oneOfType([_propTypes.default.any, _propTypes.default.instanceOf(Date), _propTypes.default.number, _propTypes.default.string]),

  /**
   * @ignore
   */
  maxTime: _propTypes.default.oneOfType([_propTypes.default.any, _propTypes.default.instanceOf(Date), _propTypes.default.number, _propTypes.default.string]),

  /**
   * @ignore
   */
  minDate: _propTypes.default.oneOfType([_propTypes.default.any, _propTypes.default.instanceOf(Date), _propTypes.default.number, _propTypes.default.string]),

  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: _propTypes.default.oneOfType([_propTypes.default.any, _propTypes.default.instanceOf(Date), _propTypes.default.number, _propTypes.default.string]),

  /**
   * @ignore
   */
  minTime: _propTypes.default.oneOfType([_propTypes.default.any, _propTypes.default.instanceOf(Date), _propTypes.default.number, _propTypes.default.string]),

  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: _propTypes.default.number,

  /**
   * Ok button text.
   * @default "OK"
   */
  okText: _propTypes.default.node,

  /**
   * Callback fired when date is accepted @DateIOType.
   */
  onAccept: _propTypes.default.func,

  /**
   * Callback fired when the value (the selected date) changes @DateIOType.
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   */
  onClose: _propTypes.default.func,

  /**
   * Callback that fired when input value or new `value` prop validation returns **new** validation error (or value is valid after error).
   * In case of validation error detected `reason` prop return non-null value and `TextField` must be displayed in `error` state.
   * This can be used to render appropriate form error.
   *
   * [Read the guide](https://next.material-ui-pickers.dev/guides/forms) about form integration and error displaying.
   * @DateIOType
   */
  onError: _propTypes.default.func,

  /**
   * Callback firing on month change. @DateIOType
   */
  onMonthChange: _propTypes.default.func,

  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   */
  onOpen: _propTypes.default.func,

  /**
   * Callback fired on view change.
   */
  onViewChange: _propTypes.default.func,

  /**
   * Callback firing on year change @DateIOType.
   */
  onYearChange: _propTypes.default.func,

  /**
   * Control the popup or dialog open state.
   */
  open: _propTypes.default.bool,

  /**
   * Props to pass to keyboard adornment button.
   */
  OpenPickerButtonProps: _propTypes.default.object,

  /**
   * Icon displaying for open picker button.
   */
  openPickerIcon: _propTypes.default.node,

  /**
   * First view to show.
   */
  openTo: _propTypes.default.oneOf(['date', 'hours', 'minutes', 'month', 'seconds', 'year']),

  /**
   * Force rendering in particular orientation.
   */
  orientation: _propTypes.default.oneOf(['landscape', 'portrait']),

  /**
   * Popper props passed down to [Popper](https://material-ui.com/api/popper/) component.
   */
  PopperProps: _propTypes.default.object,

  /**
   * Make picker read only.
   */
  readOnly: _propTypes.default.bool,

  /**
   * Disable heavy animations.
   * @default typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent)
   */
  reduceAnimations: _propTypes.default.bool,

  /**
   * Custom renderer for day. Check the [PickersDay](https://material-ui.com/api/pickers-day/) component.
   */
  renderDay: _propTypes.default.func,

  /**
   * The `renderInput` prop allows you to customize the rendered input.
   * The `props` argument of this render prop contains props of [TextField](https://material-ui.com/api/text-field/#textfield-api) that you need to forward.
   * Pay specific attention to the `ref` and `inputProps` keys.
   * @example ```jsx
   * renderInput={props => <TextField {...props} />}
   * ````
   */
  renderInput: _propTypes.default.func.isRequired,

  /**
   * Component displaying when passed `loading` true.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: _propTypes.default.func,

  /**
   * Custom formatter to be passed into Rifm component.
   */
  rifmFormatter: _propTypes.default.func,

  /**
   * Right arrow icon aria-label text.
   */
  rightArrowButtonText: _propTypes.default.string,

  /**
   * Disable specific date. @DateIOType
   */
  shouldDisableDate: _propTypes.default.func,

  /**
   * Dynamically check if time is disabled or not.
   * If returns `false` appropriate time point will ot be acceptable.
   */
  shouldDisableTime: _propTypes.default.func,

  /**
   * Disable specific years dynamically.
   * Works like `shouldDisableDate` but for year selection view @DateIOType.
   */
  shouldDisableYear: _propTypes.default.func,

  /**
   * If `true`, days that have `outsideCurrentMonth={true}` are displayed.
   * @default false
   */
  showDaysOutsideCurrentMonth: _propTypes.default.bool,

  /**
   * If `true`, the today button is displayed. **Note** that `showClearButton` has a higher priority.
   * @default false
   */
  showTodayButton: _propTypes.default.bool,

  /**
   * If `true`, show the toolbar even in desktop mode.
   */
  showToolbar: _propTypes.default.bool,

  /**
   * Time tab icon.
   */
  timeIcon: _propTypes.default.node,

  /**
   * Today text message.
   * @default "TODAY"
   */
  todayText: _propTypes.default.node,

  /**
   * Component that will replace default toolbar renderer.
   */
  ToolbarComponent: _propTypes.default.elementType,

  /**
   * Date format, that is displaying in toolbar.
   */
  toolbarFormat: _propTypes.default.string,

  /**
   * Mobile picker date value placeholder, displaying if `value` === `null`.
   * @default "–"
   */
  toolbarPlaceholder: _propTypes.default.node,

  /**
   * Mobile picker title, displaying in the toolbar.
   * @default "SELECT DATE"
   */
  toolbarTitle: _propTypes.default.node,

  /**
   * Custom component for popper [Transition](https://material-ui.com/components/transitions/#transitioncomponent-prop).
   */
  TransitionComponent: _propTypes.default.elementType,

  /**
   * The value of the picker.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.any, _propTypes.default.instanceOf(Date), _propTypes.default.number, _propTypes.default.string]),

  /**
   * Array of views to show.
   */
  views: _propTypes.default.arrayOf(_propTypes.default.oneOf(['date', 'hours', 'minutes', 'month', 'year']).isRequired)
};
var _default = DateTimePicker;
exports.default = _default;
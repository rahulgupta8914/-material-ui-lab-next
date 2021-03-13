"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _makeDateRangePicker = require("../DateRangePicker/makeDateRangePicker");

var _MobileWrapper = _interopRequireDefault(require("../internal/pickers/wrappers/MobileWrapper"));

/**
 *
 * Demos:
 *
 * - [Date Range Picker](https://material-ui.com/components/date-range-picker/)
 *
 * API:
 *
 * - [MobileDateRangePicker API](https://material-ui.com/api/mobile-date-range-picker/)
 */
// @typescript-to-proptypes-generate
const MobileDateRangePicker = (0, _makeDateRangePicker.makeDateRangePicker)('MuiMobileDateRangePicker', _MobileWrapper.default);

if (process.env.NODE_ENV !== 'production') {
  MobileDateRangePicker.displayName = 'MobileDateRangePicker';
}

MobileDateRangePicker.propTypes = {
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
   * The number of calendars that render on **desktop**.
   * @default 2
   */
  calendars: _propTypes.default.oneOf([1, 2, 3]),

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
   * Default calendar month displayed when `value={null}`.
   */
  defaultCalendarMonth: _propTypes.default.any,

  /**
   * Props applied to the [`Dialog`](/api/dialog/) element.
   */
  DialogProps: _propTypes.default.object,

  /**
   * If `true`, after selecting `start` date calendar will not automatically switch to the month of `end` date.
   * @default false
   */
  disableAutoMonthSwitching: _propTypes.default.bool,

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
   * Text for end input label and toolbar placeholder.
   * @default "end"
   */
  endText: _propTypes.default.node,

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
   * Max selectable date. @DateIOType
   */
  maxDate: _propTypes.default.any,

  /**
   * Min selectable date. @DateIOType
   */
  minDate: _propTypes.default.any,

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
   * Force rendering in particular orientation.
   */
  orientation: _propTypes.default.oneOf(['landscape', 'portrait']),

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
   * Custom renderer for `<DateRangePicker />` days. @DateIOType
   * @example (date, DateRangePickerDayProps) => <DateRangePickerDay {...DateRangePickerDayProps} />
   */
  renderDay: _propTypes.default.func,

  /**
   * The `renderInput` prop allows you to customize the rendered input.
   * The `startProps` and `endProps` arguments of this render prop contains props of [TextField](https://material-ui.com/api/text-field/#textfield-api),
   * that you need to forward to the range start/end inputs respectively.
   * Pay specific attention to the `ref` and `inputProps` keys.
   * @example
   * ```jsx
   * <DateRangePicker
   *  renderInput={(startProps, endProps) => (
   *   <React.Fragment>
   *     <TextField {...startProps} />
   *     <Box sx={{ mx: 2 }}> to </Box>
   *     <TextField {...endProps} />
   *   </React.Fragment>;
   *  )}
   * />
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
   * Text for start input label and toolbar placeholder.
   * @default "Start"
   */
  startText: _propTypes.default.node,

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
   * The value of the picker.
   */
  value: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.any, _propTypes.default.instanceOf(Date), _propTypes.default.number, _propTypes.default.string])).isRequired
};
var _default = MobileDateRangePicker;
exports.default = _default;
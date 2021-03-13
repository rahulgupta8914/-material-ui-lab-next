"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.datePickerConfig = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useUtils = require("../internal/pickers/hooks/useUtils");

var _DatePickerToolbar = _interopRequireDefault(require("./DatePickerToolbar"));

var _ResponsiveWrapper = require("../internal/pickers/wrappers/ResponsiveWrapper");

var _dateHelpersHooks = require("../internal/pickers/hooks/date-helpers-hooks");

var _useValidation = require("../internal/pickers/hooks/useValidation");

var _propTypes2 = require("../internal/pickers/constants/prop-types");

var _makePickerWithState = require("../internal/pickers/Picker/makePickerWithState");

var _dateUtils = require("../internal/pickers/date-utils");

const datePickerConfig = {
  useValidation: (0, _useValidation.makeValidationHook)(_dateUtils.validateDate),
  DefaultToolbarComponent: _DatePickerToolbar.default,
  useInterceptProps: (_ref) => {
    let {
      openTo = 'date',
      views = ['year', 'date'],
      minDate: __minDate = _propTypes2.defaultMinDate,
      maxDate: __maxDate = _propTypes2.defaultMaxDate
    } = _ref,
        other = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["openTo", "views", "minDate", "maxDate"]);
    const utils = (0, _useUtils.useUtils)();
    const minDate = (0, _dateHelpersHooks.useParsedDate)(__minDate);
    const maxDate = (0, _dateHelpersHooks.useParsedDate)(__maxDate);
    return (0, _extends2.default)({
      views,
      openTo,
      minDate,
      maxDate
    }, (0, _dateUtils.getFormatAndMaskByViews)(views, utils), other);
  }
};
exports.datePickerConfig = datePickerConfig;

/**
 *
 * Demos:
 *
 * - [Date Picker](https://material-ui.com/components/date-picker/)
 *
 * API:
 *
 * - [DatePicker API](https://material-ui.com/api/date-picker/)
 */
// @typescript-to-proptypes-generate
const DatePicker = (0, _makePickerWithState.makePickerWithState)(_ResponsiveWrapper.ResponsiveWrapper, (0, _extends2.default)({
  name: 'MuiDatePicker'
}, datePickerConfig));

if (process.env.NODE_ENV !== 'production') {
  DatePicker.displayName = 'DatePicker';
}

DatePicker.propTypes = {
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
   * Get aria-label text for control that opens picker dialog. Aria-label text must include selected date. @DateIOType
   * @default (value, utils) => `Choose date, selected date is ${utils.format(utils.date(value), 'fullDate')}`
   */
  getOpenDialogAriaText: _propTypes.default.func,

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
   * Custom mask. Can be used to override generate from format. (e.g. `__/__/____ __:__` or `__/__/____ __:__ _M`).
   */
  mask: _propTypes.default.string,

  /**
   * @ignore
   */
  maxDate: _propTypes.default.oneOfType([_propTypes.default.any, _propTypes.default.instanceOf(Date), _propTypes.default.number, _propTypes.default.string]),

  /**
   * @ignore
   */
  minDate: _propTypes.default.oneOfType([_propTypes.default.any, _propTypes.default.instanceOf(Date), _propTypes.default.number, _propTypes.default.string]),

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
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   */
  onOpen: _propTypes.default.func,

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
   * The `renderInput` prop allows you to customize the rendered input.
   * The `props` argument of this render prop contains props of [TextField](https://material-ui.com/api/text-field/#textfield-api) that you need to forward.
   * Pay specific attention to the `ref` and `inputProps` keys.
   * @example ```jsx
   * renderInput={props => <TextField {...props} />}
   * ````
   */
  renderInput: _propTypes.default.func.isRequired,

  /**
   * Custom formatter to be passed into Rifm component.
   */
  rifmFormatter: _propTypes.default.func,

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
  value: _propTypes.default.oneOfType([_propTypes.default.any, _propTypes.default.instanceOf(Date), _propTypes.default.number, _propTypes.default.string])
};
var _default = DatePicker;
exports.default = _default;
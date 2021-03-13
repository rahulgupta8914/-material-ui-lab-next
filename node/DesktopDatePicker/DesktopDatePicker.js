"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DatePicker = require("../DatePicker/DatePicker");

var _Wrapper = require("../internal/pickers/wrappers/Wrapper");

var _makePickerWithState = require("../internal/pickers/Picker/makePickerWithState");

/**
 *
 * API:
 *
 * - [DesktopDatePicker API](https://material-ui.com/api/desktop-date-picker/)
 */
// @typescript-to-proptypes-generate
const DesktopDatePicker = (0, _makePickerWithState.makePickerWithState)(_Wrapper.DesktopWrapper, (0, _extends2.default)({
  name: 'MuiDesktopDatePicker'
}, _DatePicker.datePickerConfig));

if (process.env.NODE_ENV !== 'production') {
  DesktopDatePicker.displayName = 'DesktopDatePicker';
}

DesktopDatePicker.propTypes = {
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
   * @ignore
   */
  children: _propTypes.default.node,

  /**
   * className applied to the root component.
   */
  className: _propTypes.default.string,

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
   * Popper props passed down to [Popper](https://material-ui.com/api/popper/) component.
   */
  PopperProps: _propTypes.default.object,

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
   * If `true`, show the toolbar even in desktop mode.
   */
  showToolbar: _propTypes.default.bool,

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
  value: _propTypes.default.oneOfType([_propTypes.default.any, _propTypes.default.instanceOf(Date), _propTypes.default.number, _propTypes.default.string])
};
var _default = DesktopDatePicker;
exports.default = _default;
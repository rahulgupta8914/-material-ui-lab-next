import _extends from "@babel/runtime/helpers/esm/extends";
import PropTypes from 'prop-types';
import { makePickerWithState } from '../internal/pickers/Picker/makePickerWithState';
import { datePickerConfig } from '../DatePicker/DatePicker';
import { MobileWrapper } from '../internal/pickers/wrappers/Wrapper';
/**
 *
 * API:
 *
 * - [MobileDatePicker API](https://material-ui.com/api/mobile-date-picker/)
 */
// @typescript-to-proptypes-generate

var MobileDatePicker = makePickerWithState(MobileWrapper, _extends({
  name: 'MuiMobileDatePicker'
}, datePickerConfig));

if (process.env.NODE_ENV !== 'production') {
  MobileDatePicker.displayName = 'MobileDatePicker';
}

MobileDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * Regular expression to detect "accepted" symbols.
   * @default /\dap/gi
   */
  acceptRegex: PropTypes.instanceOf(RegExp),

  /**
   * Cancel text message.
   * @default "CANCEL"
   */
  cancelText: PropTypes.node,

  /**
   * @ignore
   */
  children: PropTypes.node,

  /**
   * className applied to the root component.
   */
  className: PropTypes.string,

  /**
   * If `true`, it shows the clear action in the picker dialog.
   * @default false
   */
  clearable: PropTypes.bool,

  /**
   * Clear text message.
   * @default "CLEAR"
   */
  clearText: PropTypes.node,

  /**
   * Props applied to the [`Dialog`](/api/dialog/) element.
   */
  DialogProps: PropTypes.object,

  /**
   * If `true` the popup or dialog will immediately close after submitting full date.
   * @default `true` for Desktop, `false` for Mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  disableCloseOnSelect: PropTypes.bool,

  /**
   * If `true`, the picker and text field are disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Disable mask on the keyboard, this should be used rarely. Consider passing proper mask for your format.
   * @default false
   */
  disableMaskedInput: PropTypes.bool,

  /**
   * Do not render open picker button (renders only text field with validation).
   * @default false
   */
  disableOpenPicker: PropTypes.bool,

  /**
   * Get aria-label text for control that opens picker dialog. Aria-label text must include selected date. @DateIOType
   * @default (value, utils) => `Choose date, selected date is ${utils.format(utils.date(value), 'fullDate')}`
   */
  getOpenDialogAriaText: PropTypes.func,

  /**
   * @ignore
   */
  ignoreInvalidInputs: PropTypes.bool,

  /**
   * Props to pass to keyboard input adornment.
   */
  InputAdornmentProps: PropTypes.object,

  /**
   * Format string.
   */
  inputFormat: PropTypes.string,

  /**
   * @ignore
   */
  InputProps: PropTypes.object,

  /**
   * @ignore
   */
  key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * @ignore
   */
  label: PropTypes.node,

  /**
   * Custom mask. Can be used to override generate from format. (e.g. `__/__/____ __:__` or `__/__/____ __:__ _M`).
   */
  mask: PropTypes.string,

  /**
   * @ignore
   */
  maxDate: PropTypes.oneOfType([PropTypes.any, PropTypes.instanceOf(Date), PropTypes.number, PropTypes.string]),

  /**
   * @ignore
   */
  minDate: PropTypes.oneOfType([PropTypes.any, PropTypes.instanceOf(Date), PropTypes.number, PropTypes.string]),

  /**
   * Ok button text.
   * @default "OK"
   */
  okText: PropTypes.node,

  /**
   * Callback fired when date is accepted @DateIOType.
   */
  onAccept: PropTypes.func,

  /**
   * Callback fired when the value (the selected date) changes @DateIOType.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   */
  onClose: PropTypes.func,

  /**
   * Callback that fired when input value or new `value` prop validation returns **new** validation error (or value is valid after error).
   * In case of validation error detected `reason` prop return non-null value and `TextField` must be displayed in `error` state.
   * This can be used to render appropriate form error.
   *
   * [Read the guide](https://next.material-ui-pickers.dev/guides/forms) about form integration and error displaying.
   * @DateIOType
   */
  onError: PropTypes.func,

  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   */
  onOpen: PropTypes.func,

  /**
   * Control the popup or dialog open state.
   */
  open: PropTypes.bool,

  /**
   * Props to pass to keyboard adornment button.
   */
  OpenPickerButtonProps: PropTypes.object,

  /**
   * Icon displaying for open picker button.
   */
  openPickerIcon: PropTypes.node,

  /**
   * Force rendering in particular orientation.
   */
  orientation: PropTypes.oneOf(['landscape', 'portrait']),

  /**
   * Make picker read only.
   */
  readOnly: PropTypes.bool,

  /**
   * The `renderInput` prop allows you to customize the rendered input.
   * The `props` argument of this render prop contains props of [TextField](https://material-ui.com/api/text-field/#textfield-api) that you need to forward.
   * Pay specific attention to the `ref` and `inputProps` keys.
   * @example ```jsx
   * renderInput={props => <TextField {...props} />}
   * ````
   */
  renderInput: PropTypes.func.isRequired,

  /**
   * Custom formatter to be passed into Rifm component.
   */
  rifmFormatter: PropTypes.func,

  /**
   * If `true`, the today button is displayed. **Note** that `showClearButton` has a higher priority.
   * @default false
   */
  showTodayButton: PropTypes.bool,

  /**
   * If `true`, show the toolbar even in desktop mode.
   */
  showToolbar: PropTypes.bool,

  /**
   * Today text message.
   * @default "TODAY"
   */
  todayText: PropTypes.node,

  /**
   * Component that will replace default toolbar renderer.
   */
  ToolbarComponent: PropTypes.elementType,

  /**
   * Date format, that is displaying in toolbar.
   */
  toolbarFormat: PropTypes.string,

  /**
   * Mobile picker date value placeholder, displaying if `value` === `null`.
   * @default "–"
   */
  toolbarPlaceholder: PropTypes.node,

  /**
   * Mobile picker title, displaying in the toolbar.
   * @default "SELECT DATE"
   */
  toolbarTitle: PropTypes.node,

  /**
   * The value of the picker.
   */
  value: PropTypes.oneOfType([PropTypes.any, PropTypes.instanceOf(Date), PropTypes.number, PropTypes.string])
};
export default MobileDatePicker;
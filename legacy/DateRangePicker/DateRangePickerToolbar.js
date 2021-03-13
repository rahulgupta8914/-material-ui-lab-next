import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PickersToolbar from '../internal/pickers/PickersToolbar';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import PickersToolbarButton from '../internal/pickers/PickersToolbarButton';
export var styles = {
  root: {},
  penIcon: {
    position: 'relative',
    top: 4
  },
  dateTextContainer: {
    display: 'flex'
  }
};

var _ref2 = /*#__PURE__*/React.createElement(Typography, {
  variant: "h5"
}, "\xA0", '–', "\xA0");

/**
 * @ignore - internal component.
 */
var DateRangePickerToolbar = function DateRangePickerToolbar(_ref) {
  var classes = _ref.classes,
      currentlySelectingRangeEnd = _ref.currentlySelectingRangeEnd,
      _ref$date = _slicedToArray(_ref.date, 2),
      start = _ref$date[0],
      end = _ref$date[1],
      endText = _ref.endText,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      setCurrentlySelectingRangeEnd = _ref.setCurrentlySelectingRangeEnd,
      startText = _ref.startText,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      toolbarFormat = _ref.toolbarFormat,
      _ref$toolbarTitle = _ref.toolbarTitle,
      toolbarTitle = _ref$toolbarTitle === void 0 ? 'SELECT DATE RANGE' : _ref$toolbarTitle;

  var utils = useUtils();
  var startDateValue = start ? utils.formatByString(start, toolbarFormat || utils.formats.shortDate) : startText;
  var endDateValue = end ? utils.formatByString(end, toolbarFormat || utils.formats.shortDate) : endText;
  return /*#__PURE__*/React.createElement(PickersToolbar, {
    className: classes.root,
    toolbarTitle: toolbarTitle,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    isLandscape: false,
    penIconClassName: classes.penIcon
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.dateTextContainer
  }, /*#__PURE__*/React.createElement(PickersToolbarButton, {
    variant: start !== null ? 'h5' : 'h6',
    value: startDateValue,
    selected: currentlySelectingRangeEnd === 'start',
    onClick: function onClick() {
      return setCurrentlySelectingRangeEnd('start');
    }
  }), _ref2, /*#__PURE__*/React.createElement(PickersToolbarButton, {
    variant: end !== null ? 'h5' : 'h6',
    value: endDateValue,
    selected: currentlySelectingRangeEnd === 'end',
    onClick: function onClick() {
      return setCurrentlySelectingRangeEnd('end');
    }
  })));
};

export default withStyles(styles, {
  name: 'MuiDateRangePickerToolbar'
})(DateRangePickerToolbar);
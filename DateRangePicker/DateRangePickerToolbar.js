import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PickersToolbar from '../internal/pickers/PickersToolbar';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import PickersToolbarButton from '../internal/pickers/PickersToolbarButton';
export const styles = {
  root: {},
  penIcon: {
    position: 'relative',
    top: 4
  },
  dateTextContainer: {
    display: 'flex'
  }
};

var _ref = /*#__PURE__*/React.createElement(Typography, {
  variant: "h5"
}, "\xA0", '–', "\xA0");

/**
 * @ignore - internal component.
 */
const DateRangePickerToolbar = ({
  classes,
  currentlySelectingRangeEnd,
  date: [start, end],
  endText,
  isMobileKeyboardViewOpen,
  setCurrentlySelectingRangeEnd,
  startText,
  toggleMobileKeyboardView,
  toolbarFormat,
  toolbarTitle = 'SELECT DATE RANGE'
}) => {
  const utils = useUtils();
  const startDateValue = start ? utils.formatByString(start, toolbarFormat || utils.formats.shortDate) : startText;
  const endDateValue = end ? utils.formatByString(end, toolbarFormat || utils.formats.shortDate) : endText;
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
    onClick: () => setCurrentlySelectingRangeEnd('start')
  }), _ref, /*#__PURE__*/React.createElement(PickersToolbarButton, {
    variant: end !== null ? 'h5' : 'h6',
    value: endDateValue,
    selected: currentlySelectingRangeEnd === 'end',
    onClick: () => setCurrentlySelectingRangeEnd('end')
  })));
};

export default withStyles(styles, {
  name: 'MuiDateRangePickerToolbar'
})(DateRangePickerToolbar);
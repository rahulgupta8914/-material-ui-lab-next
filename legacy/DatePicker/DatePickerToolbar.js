import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PickersToolbar from '../internal/pickers/PickersToolbar';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import { isYearAndMonthViews, isYearOnlyView } from '../internal/pickers/date-utils';
export var styles = {
  root: {},
  dateTitleLandscape: {
    margin: 'auto 16px auto auto'
  },
  penIcon: {
    position: 'relative',
    top: 4
  }
};
/**
 * @ignore - internal component.
 */

var DatePickerToolbar = function DatePickerToolbar(_ref) {
  var classes = _ref.classes,
      date = _ref.date,
      isLandscape = _ref.isLandscape,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      onChange = _ref.onChange,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      toolbarFormat = _ref.toolbarFormat,
      _ref$toolbarPlacehold = _ref.toolbarPlaceholder,
      toolbarPlaceholder = _ref$toolbarPlacehold === void 0 ? '––' : _ref$toolbarPlacehold,
      _ref$toolbarTitle = _ref.toolbarTitle,
      toolbarTitle = _ref$toolbarTitle === void 0 ? 'SELECT DATE' : _ref$toolbarTitle,
      views = _ref.views,
      other = _objectWithoutProperties(_ref, ["classes", "date", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"]);

  var utils = useUtils();
  var dateText = React.useMemo(function () {
    if (!date) {
      return toolbarPlaceholder;
    }

    if (toolbarFormat) {
      return utils.formatByString(date, toolbarFormat);
    }

    if (isYearOnlyView(views)) {
      return utils.format(date, 'year');
    }

    if (isYearAndMonthViews(views)) {
      return utils.format(date, 'month');
    } // Little localization hack (Google is doing the same for android native pickers):
    // For english localization it is convenient to include weekday into the date "Mon, Jun 1".
    // For other locales using strings like "June 1", without weekday.


    return /en/.test(utils.getCurrentLocaleCode()) ? utils.format(date, 'normalDateWithWeekday') : utils.format(date, 'normalDate');
  }, [date, toolbarFormat, toolbarPlaceholder, utils, views]);
  return /*#__PURE__*/React.createElement(PickersToolbar, _extends({
    className: classes.root,
    toolbarTitle: toolbarTitle,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    isLandscape: isLandscape,
    penIconClassName: classes.penIcon
  }, other), /*#__PURE__*/React.createElement(Typography, {
    variant: "h4",
    align: isLandscape ? 'left' : 'center',
    className: clsx(isLandscape && classes.dateTitleLandscape)
  }, dateText));
};

export default withStyles(styles, {
  name: 'MuiDatePickerToolbar'
})(DatePickerToolbar);
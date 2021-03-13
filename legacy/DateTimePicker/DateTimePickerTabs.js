import * as React from 'react';
import clsx from 'clsx';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import { withStyles, useTheme } from '@material-ui/core/styles';
import TimeIcon from '../internal/svg-icons/Time';
import DateRangeIcon from '../internal/svg-icons/DateRange';
import { WrapperVariantContext } from '../internal/pickers/wrappers/WrapperVariantContext';

var viewToTabIndex = function viewToTabIndex(openView) {
  if (openView === 'date' || openView === 'year') {
    return 'date';
  }

  return 'time';
};

var tabIndexToView = function tabIndexToView(tab) {
  if (tab === 'date') {
    return 'date';
  }

  return 'hours';
};

export var styles = function styles(theme) {
  var tabsBackground = theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.default;
  return {
    root: {},
    modeDesktop: {
      order: 1
    },
    tabs: {
      color: theme.palette.getContrastText(tabsBackground),
      backgroundColor: tabsBackground
    }
  };
};
/**
 * @ignore - internal component.
 */

var _ref = /*#__PURE__*/React.createElement(DateRangeIcon, null);

var _ref2 = /*#__PURE__*/React.createElement(TimeIcon, null);

var DateTimePickerTabs = function DateTimePickerTabs(props) {
  var classes = props.classes,
      _props$dateRangeIcon = props.dateRangeIcon,
      dateRangeIcon = _props$dateRangeIcon === void 0 ? _ref : _props$dateRangeIcon,
      onChange = props.onChange,
      _props$timeIcon = props.timeIcon,
      timeIcon = _props$timeIcon === void 0 ? _ref2 : _props$timeIcon,
      view = props.view;
  var theme = useTheme();
  var wrapperVariant = React.useContext(WrapperVariantContext);
  var indicatorColor = theme.palette.mode === 'light' ? 'secondary' : 'primary';

  var handleChange = function handleChange(event, value) {
    if (value !== viewToTabIndex(view)) {
      onChange(tabIndexToView(value));
    }
  };

  return /*#__PURE__*/React.createElement(Paper, {
    className: clsx(classes.root, wrapperVariant === 'desktop' && classes.modeDesktop)
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "fullWidth",
    value: viewToTabIndex(view),
    onChange: handleChange,
    className: classes.tabs,
    indicatorColor: indicatorColor
  }, /*#__PURE__*/React.createElement(Tab, {
    value: "date",
    "aria-label": "pick date",
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, dateRangeIcon)
  }), /*#__PURE__*/React.createElement(Tab, {
    value: "time",
    "aria-label": "pick time",
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, timeIcon)
  })));
};

export default withStyles(styles, {
  name: 'MuiDateTimePickerTabs'
})(DateTimePickerTabs);
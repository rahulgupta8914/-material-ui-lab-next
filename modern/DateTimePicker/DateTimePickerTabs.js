import * as React from 'react';
import clsx from 'clsx';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import { withStyles, useTheme } from '@material-ui/core/styles';
import TimeIcon from '../internal/svg-icons/Time';
import DateRangeIcon from '../internal/svg-icons/DateRange';
import { WrapperVariantContext } from '../internal/pickers/wrappers/WrapperVariantContext';

const viewToTabIndex = openView => {
  if (openView === 'date' || openView === 'year') {
    return 'date';
  }

  return 'time';
};

const tabIndexToView = tab => {
  if (tab === 'date') {
    return 'date';
  }

  return 'hours';
};

export const styles = theme => {
  const tabsBackground = theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.default;
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

const DateTimePickerTabs = props => {
  const {
    classes,
    dateRangeIcon = _ref,
    onChange,
    timeIcon = _ref2,
    view
  } = props;
  const theme = useTheme();
  const wrapperVariant = React.useContext(WrapperVariantContext);
  const indicatorColor = theme.palette.mode === 'light' ? 'secondary' : 'primary';

  const handleChange = (event, value) => {
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
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PickersToolbarText from '../internal/pickers/PickersToolbarText';
import PickersToolbar from '../internal/pickers/PickersToolbar';
import PickersToolbarButton from '../internal/pickers/PickersToolbarButton';
import DateTimePickerTabs from './DateTimePickerTabs';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import { WrapperVariantContext } from '../internal/pickers/wrappers/WrapperVariantContext';
export const styles = {
  root: {
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'space-around'
  },
  separator: {
    margin: '0 4px 0 2px',
    cursor: 'default'
  },
  timeContainer: {
    display: 'flex'
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  timeTypography: {},
  penIcon: {
    position: 'absolute',
    top: 8,
    right: 8
  }
};

/**
 * @ignore - internal component.
 */
const DateTimePickerToolbar = props => {
  const {
    ampm,
    date,
    dateRangeIcon,
    classes,
    hideTabs,
    isMobileKeyboardViewOpen,
    openView,
    setOpenView,
    timeIcon,
    toggleMobileKeyboardView,
    toolbarFormat,
    toolbarPlaceholder = '––',
    toolbarTitle = 'SELECT DATE & TIME'
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["ampm", "date", "dateRangeIcon", "classes", "hideTabs", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "timeIcon", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle"]);

  const utils = useUtils();
  const wrapperVariant = React.useContext(WrapperVariantContext);
  const showTabs = wrapperVariant === 'desktop' ? true : !hideTabs && typeof window !== 'undefined' && window.innerHeight > 667;

  const formatHours = time => ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');

  const dateText = React.useMemo(() => {
    if (!date) {
      return toolbarPlaceholder;
    }

    if (toolbarFormat) {
      return utils.formatByString(date, toolbarFormat);
    }

    return utils.format(date, 'shortDate');
  }, [date, toolbarFormat, toolbarPlaceholder, utils]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, wrapperVariant !== 'desktop' && /*#__PURE__*/React.createElement(PickersToolbar, _extends({
    toolbarTitle: toolbarTitle,
    penIconClassName: classes.penIcon,
    className: classes.root,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView
  }, other, {
    isLandscape: false
  }), /*#__PURE__*/React.createElement("div", {
    className: classes.dateContainer
  }, /*#__PURE__*/React.createElement(PickersToolbarButton, {
    tabIndex: -1,
    variant: "subtitle1",
    onClick: () => setOpenView('year'),
    selected: openView === 'year',
    value: date ? utils.format(date, 'year') : '–'
  }), /*#__PURE__*/React.createElement(PickersToolbarButton, {
    tabIndex: -1,
    variant: "h4",
    onClick: () => setOpenView('date'),
    selected: openView === 'date',
    value: dateText
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.timeContainer
  }, /*#__PURE__*/React.createElement(PickersToolbarButton, {
    variant: "h3",
    onClick: () => setOpenView('hours'),
    selected: openView === 'hours',
    value: date ? formatHours(date) : '--',
    typographyClassName: classes.timeTypography
  }), /*#__PURE__*/React.createElement(PickersToolbarText, {
    variant: "h3",
    value: ":",
    className: classes.separator
  }), /*#__PURE__*/React.createElement(PickersToolbarButton, {
    variant: "h3",
    onClick: () => setOpenView('minutes'),
    selected: openView === 'minutes',
    value: date ? utils.format(date, 'minutes') : '--',
    typographyClassName: classes.timeTypography
  }))), showTabs && /*#__PURE__*/React.createElement(DateTimePickerTabs, {
    dateRangeIcon: dateRangeIcon,
    timeIcon: timeIcon,
    view: openView,
    onChange: setOpenView
  }));
};

export default withStyles(styles, {
  name: 'MuiDateTimePickerToolbar'
})(DateTimePickerToolbar);
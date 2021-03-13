"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _styles = require("@material-ui/core/styles");

var _Time = _interopRequireDefault(require("../internal/svg-icons/Time"));

var _DateRange = _interopRequireDefault(require("../internal/svg-icons/DateRange"));

var _WrapperVariantContext = require("../internal/pickers/wrappers/WrapperVariantContext");

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

const styles = theme => {
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


exports.styles = styles;

var _ref = /*#__PURE__*/React.createElement(_DateRange.default, null);

var _ref2 = /*#__PURE__*/React.createElement(_Time.default, null);

const DateTimePickerTabs = props => {
  const {
    classes,
    dateRangeIcon = _ref,
    onChange,
    timeIcon = _ref2,
    view
  } = props;
  const theme = (0, _styles.useTheme)();
  const wrapperVariant = React.useContext(_WrapperVariantContext.WrapperVariantContext);
  const indicatorColor = theme.palette.mode === 'light' ? 'secondary' : 'primary';

  const handleChange = (event, value) => {
    if (value !== viewToTabIndex(view)) {
      onChange(tabIndexToView(value));
    }
  };

  return /*#__PURE__*/React.createElement(_Paper.default, {
    className: (0, _clsx.default)(classes.root, wrapperVariant === 'desktop' && classes.modeDesktop)
  }, /*#__PURE__*/React.createElement(_Tabs.default, {
    variant: "fullWidth",
    value: viewToTabIndex(view),
    onChange: handleChange,
    className: classes.tabs,
    indicatorColor: indicatorColor
  }, /*#__PURE__*/React.createElement(_Tab.default, {
    value: "date",
    "aria-label": "pick date",
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, dateRangeIcon)
  }), /*#__PURE__*/React.createElement(_Tab.default, {
    value: "time",
    "aria-label": "pick time",
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, timeIcon)
  })));
};

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiDateTimePickerTabs'
})(DateTimePickerTabs);

exports.default = _default;
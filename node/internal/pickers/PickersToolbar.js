"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _styles = require("@material-ui/core/styles");

var _Pen = _interopRequireDefault(require("../svg-icons/Pen"));

var _Calendar = _interopRequireDefault(require("../svg-icons/Calendar"));

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 3)
  },
  toolbarLandscape: {
    height: 'auto',
    maxWidth: 160,
    padding: 16,
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  dateTitleContainer: {
    flex: 1
  }
});

exports.styles = styles;

function defaultGetKeyboardInputSwitchingButtonText(isKeyboardInputOpen) {
  return isKeyboardInputOpen ? 'text input view is open, go to calendar view' : 'calendar view is open, go to text input view';
}

var _ref = /*#__PURE__*/React.createElement(_Calendar.default, {
  color: "inherit"
});

var _ref2 = /*#__PURE__*/React.createElement(_Pen.default, {
  color: "inherit"
});

const PickerToolbar = props => {
  const {
    children,
    classes,
    className,
    getMobileKeyboardInputViewButtonText = defaultGetKeyboardInputSwitchingButtonText,
    isLandscape,
    isMobileKeyboardViewOpen,
    landscapeDirection = 'column',
    penIconClassName,
    toggleMobileKeyboardView,
    toolbarTitle
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _clsx.default)(classes.root, className, isLandscape && classes.toolbarLandscape)
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    color: "textSecondary",
    variant: "overline"
  }, toolbarTitle), /*#__PURE__*/React.createElement(_Grid.default, {
    container: true,
    justifyContent: "space-between",
    className: classes.dateTitleContainer,
    direction: isLandscape ? landscapeDirection : 'row',
    alignItems: isLandscape ? 'flex-start' : 'flex-end'
  }, children, /*#__PURE__*/React.createElement(_IconButton.default, {
    onClick: toggleMobileKeyboardView,
    className: penIconClassName,
    color: "inherit",
    "aria-label": getMobileKeyboardInputViewButtonText(isMobileKeyboardViewOpen)
  }, isMobileKeyboardViewOpen ? _ref : _ref2)));
};

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiPickersToolbar'
})(PickerToolbar);

exports.default = _default;
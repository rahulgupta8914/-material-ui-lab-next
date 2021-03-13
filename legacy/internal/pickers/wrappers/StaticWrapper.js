import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { DIALOG_WIDTH } from '../constants/dimensions';
import { WrapperVariantContext, IsStaticVariantContext } from './WrapperVariantContext';

var styles = function styles(theme) {
  return {
    root: {
      overflow: 'hidden',
      minWidth: DIALOG_WIDTH,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper
    }
  };
};

var StaticWrapper = function StaticWrapper(props) {
  var classes = props.classes,
      _props$displayStaticW = props.displayStaticWrapperAs,
      displayStaticWrapperAs = _props$displayStaticW === void 0 ? 'mobile' : _props$displayStaticW,
      children = props.children;
  var isStatic = true;
  return /*#__PURE__*/React.createElement(IsStaticVariantContext.Provider, {
    value: isStatic
  }, /*#__PURE__*/React.createElement(WrapperVariantContext.Provider, {
    value: displayStaticWrapperAs
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, children)));
};

export default withStyles(styles, {
  name: 'MuiPickersStaticWrapper'
})(StaticWrapper);
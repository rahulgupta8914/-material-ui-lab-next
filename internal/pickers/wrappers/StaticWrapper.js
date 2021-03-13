import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { DIALOG_WIDTH } from '../constants/dimensions';
import { WrapperVariantContext, IsStaticVariantContext } from './WrapperVariantContext';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    minWidth: DIALOG_WIDTH,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper
  }
});

const StaticWrapper = props => {
  const {
    classes,
    displayStaticWrapperAs = 'mobile',
    children
  } = props;
  const isStatic = true;
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
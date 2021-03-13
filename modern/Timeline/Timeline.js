import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'; // eslint-disable-next-line no-restricted-imports -- importing types

import { capitalize } from '@material-ui/core/utils';
import { withStyles } from '@material-ui/core/styles';
import TimelineContext from './TimelineContext';
export const styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '6px 16px',
    flexGrow: 1
  },

  /* Styles applied to the root element if `align="left"`. */
  alignLeft: {},

  /* Styles applied to the root element if `align="right"`. */
  alignRight: {},

  /* Styles applied to the root element if `align="alternate"`. */
  alignAlternate: {}
};
const Timeline = /*#__PURE__*/React.forwardRef(function Timeline(props, ref) {
  const {
    align = 'left',
    classes,
    className
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["align", "classes", "className"]);

  return /*#__PURE__*/React.createElement(TimelineContext.Provider, {
    value: {
      align
    }
  }, /*#__PURE__*/React.createElement("ul", _extends({
    className: clsx(classes.root, // @ts-expect-error unsafe string concat
    classes[`align${capitalize(align)}`], className) // @ts-expect-error TypeScript bug, need to keep unknown for DX
    ,
    ref: ref
  }, other)));
});
process.env.NODE_ENV !== "production" ? Timeline.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * The position where the timeline's content should appear.
   * @default 'left'
   */
  align: PropTypes.oneOf(['alternate', 'left', 'right']),

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string
} : void 0;
/**
 *
 * Demos:
 *
 * - [Timeline](https://material-ui.com/components/timeline/)
 *
 * API:
 *
 * - [Timeline API](https://material-ui.com/api/timeline/)
 */

export default withStyles(styles, {
  name: 'MuiTimeline'
})(Timeline);
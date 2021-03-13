import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Skeleton from '@material-ui/core/Skeleton';
import { withStyles } from '@material-ui/core/styles';
import { DAY_SIZE, DAY_MARGIN } from '../internal/pickers/constants/dimensions';
import { styles as calendarStyles } from '../DayPicker/PickersCalendar';
export var styles = function styles(theme) {
  return _extends({}, calendarStyles(theme), {
    root: {
      alignSelf: 'start'
    },
    daySkeleton: {
      margin: "0 ".concat(DAY_MARGIN, "px")
    },
    hidden: {
      visibility: 'hidden'
    }
  });
};
var monthMap = [[0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0]];

var PickersCalendarSkeleton = function PickersCalendarSkeleton(props) {
  var className = props.className,
      classes = props.classes,
      other = _objectWithoutProperties(props, ["className", "classes"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: clsx(classes.root, className)
  }, other), monthMap.map(function (week, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: classes.week
    }, week.map(function (day, index2) {
      return /*#__PURE__*/React.createElement(Skeleton, {
        key: index2,
        variant: "circular",
        width: DAY_SIZE,
        height: DAY_SIZE,
        className: clsx(classes.daySkeleton, day === 0 && classes.hidden)
      });
    }));
  }));
};

process.env.NODE_ENV !== "production" ? PickersCalendarSkeleton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string
} : void 0;
/**
 *
 * API:
 *
 * - [PickersCalendarSkeleton API](https://material-ui.com/api/pickers-calendar-skeleton/)
 */

export default withStyles(styles, {
  name: 'MuiCalendarSkeleton'
})(PickersCalendarSkeleton);
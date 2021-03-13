import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { useUtils } from '../internal/pickers/hooks/useUtils';
import FadeTransitionGroup from './PickersFadeTransitionGroup';
// tslint:disable-next-line no-relative-import-in-test
import ArrowDropDownIcon from '../internal/svg-icons/ArrowDropDown';
import PickersArrowSwitcher from '../internal/pickers/PickersArrowSwitcher';
import { usePreviousMonthDisabled, useNextMonthDisabled } from '../internal/pickers/hooks/date-helpers-hooks';
export const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
    paddingLeft: 24,
    paddingRight: 12,
    // prevent jumping in safari
    maxHeight: 30,
    minHeight: 30
  },
  yearSelectionSwitcher: {
    marginRight: 'auto'
  },
  switchView: {
    willChange: 'transform',
    transition: theme.transitions.create('transform'),
    transform: 'rotate(0deg)'
  },
  switchViewActive: {
    transform: 'rotate(180deg)'
  },
  label: _extends({
    display: 'flex',
    maxHeight: 30,
    overflow: 'hidden',
    alignItems: 'center',
    cursor: 'pointer',
    marginRight: 'auto'
  }, theme.typography.body1, {
    fontWeight: theme.typography.fontWeightMedium
  }),
  labelItem: {
    marginRight: 6
  }
});

function getSwitchingViewAriaText(view) {
  return view === 'year' ? 'year view is open, switch to calendar view' : 'calendar view is open, switch to year view';
}
/**
 * @ignore - do not document.
 */


function PickersCalendarHeader(props) {
  const {
    classes,
    components = {},
    componentsProps = {},
    currentMonth: month,
    disableFuture,
    disablePast,
    getViewSwitchingButtonText = getSwitchingViewAriaText,
    leftArrowButtonText = 'Previous month',
    maxDate,
    minDate,
    onMonthChange,
    onViewChange,
    openView: currentView,
    reduceAnimations,
    rightArrowButtonText = 'Next month',
    views
  } = props;
  const utils = useUtils();
  const SwitchViewButton = components.SwitchViewButton || IconButton;
  const switchViewButtonProps = componentsProps.switchViewButton || {};
  const SwitchViewIcon = components.SwitchViewIcon || ArrowDropDownIcon;

  const selectNextMonth = () => onMonthChange(utils.getNextMonth(month), 'left');

  const selectPreviousMonth = () => onMonthChange(utils.getPreviousMonth(month), 'right');

  const isNextMonthDisabled = useNextMonthDisabled(month, {
    disableFuture,
    maxDate
  });
  const isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
    disablePast,
    minDate
  });

  const handleToggleView = () => {
    if (views.length === 1 || !onViewChange) {
      return;
    }

    if (views.length === 2) {
      onViewChange(views.find(view => view !== currentView) || views[0]);
    } else {
      // switching only between first 2
      const nextIndexToOpen = views.indexOf(currentView) !== 0 ? 0 : 1;
      onViewChange(views[nextIndexToOpen]);
    }
  }; // No need to display more information


  if (views.length === 1 && views[0] === 'year') {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    className: classes.label,
    onClick: handleToggleView
  }, /*#__PURE__*/React.createElement(FadeTransitionGroup, {
    reduceAnimations: reduceAnimations,
    transKey: utils.format(month, 'month')
  }, /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite",
    className: classes.labelItem
  }, utils.format(month, 'month'))), /*#__PURE__*/React.createElement(FadeTransitionGroup, {
    reduceAnimations: reduceAnimations,
    transKey: utils.format(month, 'year')
  }, /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite",
    className: classes.labelItem
  }, utils.format(month, 'year'))), views.length > 1 && /*#__PURE__*/React.createElement(SwitchViewButton, _extends({
    size: "small",
    className: classes.yearSelectionSwitcher,
    "aria-label": getViewSwitchingButtonText(currentView)
  }, switchViewButtonProps), /*#__PURE__*/React.createElement(SwitchViewIcon, {
    className: clsx(classes.switchView, currentView === 'year' && classes.switchViewActive)
  }))), /*#__PURE__*/React.createElement(Fade, {
    in: currentView === 'date'
  }, /*#__PURE__*/React.createElement(PickersArrowSwitcher, {
    leftArrowButtonText: leftArrowButtonText,
    rightArrowButtonText: rightArrowButtonText,
    components: components,
    componentsProps: componentsProps,
    onLeftClick: selectPreviousMonth,
    onRightClick: selectNextMonth,
    isLeftDisabled: isPreviousMonthDisabled,
    isRightDisabled: isNextMonthDisabled
  })));
}

process.env.NODE_ENV !== "production" ? PickersCalendarHeader.propTypes = {
  leftArrowButtonText: PropTypes.string,
  rightArrowButtonText: PropTypes.string
} : void 0;
export default withStyles(styles, {
  name: 'MuiPickersCalendarHeader'
})(PickersCalendarHeader);
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { arrayIncludes } from './utils';
export var findClosestEnabledDate = function findClosestEnabledDate(_ref) {
  var date = _ref.date,
      utils = _ref.utils,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast,
      shouldDisableDate = _ref.shouldDisableDate;
  var today = utils.startOfDay(utils.date());

  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }

  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }

  var forward = date;
  var backward = date;

  if (utils.isBefore(date, minDate)) {
    forward = utils.date(minDate);
    backward = null;
  }

  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = utils.date(maxDate);
    }

    forward = null;
  }

  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }

    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }

    if (forward) {
      if (!shouldDisableDate(forward)) {
        return forward;
      }

      forward = utils.addDays(forward, 1);
    }

    if (backward) {
      if (!shouldDisableDate(backward)) {
        return backward;
      }

      backward = utils.addDays(backward, -1);
    }
  } // fallback to today if no enabled days


  return utils.date();
};
export var isYearOnlyView = function isYearOnlyView(views) {
  return views.length === 1 && views[0] === 'year';
};
export var isYearAndMonthViews = function isYearAndMonthViews(views) {
  return views.length === 2 && arrayIncludes(views, 'month') && arrayIncludes(views, 'year');
};
export var getFormatAndMaskByViews = function getFormatAndMaskByViews(views, utils) {
  if (isYearOnlyView(views)) {
    return {
      mask: '____',
      inputFormat: utils.formats.year
    };
  }

  if (isYearAndMonthViews(views)) {
    return {
      disableMaskedInput: true,
      inputFormat: utils.formats.monthAndYear
    };
  }

  return {
    mask: '__/__/____',
    inputFormat: utils.formats.keyboardDate
  };
};
export function parsePickerInputValue(utils, value) {
  var parsedValue = utils.date(value);
  return utils.isValid(parsedValue) ? parsedValue : null;
}
export function parseRangeInputValue(utils) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [null, null];
  return value.map(function (date) {
    return !utils.isValid(date) || date === null ? null : utils.startOfDay(utils.date(date));
  });
}
export var isRangeValid = function isRangeValid(utils, range) {
  return Boolean(range && range[0] && range[1] && !utils.isBefore(range[1], range[0]));
};
export var isWithinRange = function isWithinRange(utils, day, range) {
  return isRangeValid(utils, range) && utils.isWithinRange(day, range);
};
export var isStartOfRange = function isStartOfRange(utils, day, range) {
  return isRangeValid(utils, range) && utils.isSameDay(day, range[0]);
};
export var isEndOfRange = function isEndOfRange(utils, day, range) {
  return isRangeValid(utils, range) && utils.isSameDay(day, range[1]);
};
export var validateDate = function validateDate(utils, value, _ref2) {
  var minDate = _ref2.minDate,
      maxDate = _ref2.maxDate,
      disableFuture = _ref2.disableFuture,
      shouldDisableDate = _ref2.shouldDisableDate,
      disablePast = _ref2.disablePast;
  var now = utils.date();
  var date = utils.date(value);

  if (date === null) {
    return null;
  }

  switch (true) {
    case !utils.isValid(value):
      return 'invalidDate';

    case Boolean(shouldDisableDate && shouldDisableDate(date)):
      return 'shouldDisableDate';

    case Boolean(disableFuture && utils.isAfterDay(date, now)):
      return 'disableFuture';

    case Boolean(disablePast && utils.isBeforeDay(date, now)):
      return 'disablePast';

    case Boolean(minDate && utils.isBeforeDay(date, minDate)):
      return 'minDate';

    case Boolean(maxDate && utils.isAfterDay(date, maxDate)):
      return 'maxDate';

    default:
      return null;
  }
};
export var validateDateRange = function validateDateRange(utils, value, dateValidationProps) {
  var _value = _slicedToArray(value, 2),
      start = _value[0],
      end = _value[1]; // for partial input


  if (start === null || end === null) {
    return [null, null];
  }

  var dateValidations = [validateDate(utils, start, dateValidationProps), validateDate(utils, end, dateValidationProps)];

  if (dateValidations[0] || dateValidations[1]) {
    return dateValidations;
  }

  if (!isRangeValid(utils, [utils.date(start), utils.date(end)])) {
    return ['invalidRange', 'invalidRange'];
  }

  return [null, null];
};
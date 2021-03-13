import * as React from 'react';
import { useIsomorphicEffect } from './useKeyDown';
import { arrayIncludes } from '../utils';

// tslint:disable deprecation
var getOrientation = function getOrientation() {
  if (typeof window === 'undefined') {
    return 'portrait';
  }

  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? 'landscape' : 'portrait';
  } // Support IOS safar


  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? 'landscape' : 'portrait';
  }

  return 'portrait';
};

export function useIsLandscape(views, customOrientation) {
  var _React$useState = React.useState(getOrientation()),
      orientation = _React$useState[0],
      setOrientation = _React$useState[1];

  useIsomorphicEffect(function () {
    var eventHandler = function eventHandler() {
      setOrientation(getOrientation());
    };

    window.addEventListener('orientationchange', eventHandler);
    return function () {
      window.removeEventListener('orientationchange', eventHandler);
    };
  }, []);

  if (arrayIncludes(views, ['hours', 'minutes', 'seconds'])) {
    // could not display 13:34:44 in landscape mode
    return false;
  }

  var orientationToUse = customOrientation || orientation;
  return orientationToUse === 'landscape';
}
export default useIsLandscape;
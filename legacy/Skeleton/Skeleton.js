import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import Skeleton from '@material-ui/core/Skeleton';
var warnedOnce = false;
/**
 * @ignore - do not document.
 */

export default /*#__PURE__*/React.forwardRef(function DeprecatedSkeleton(props, ref) {
  if (!warnedOnce) {
    console.warn(['Material-UI: The Skeleton component was moved from the lab to the core.', '', "You should use `import { Skeleton } from '@material-ui/core'`", "or `import Skeleton from '@material-ui/core/Skeleton'`"].join('\n'));
    warnedOnce = true;
  }

  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    ref: ref
  }, props));
});
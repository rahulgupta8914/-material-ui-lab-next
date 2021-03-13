import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import Autocomplete from '@material-ui/core/Autocomplete';
let warnedOnce = false;
/**
 * @ignore - do not document.
 */

export default /*#__PURE__*/React.forwardRef(function DeprecatedAutocomplete(props, ref) {
  if (!warnedOnce) {
    console.warn(['Material-UI: The Autocomplete component was moved from the lab to the core.', '', "You should use `import { Autocomplete } from '@material-ui/core'`", "or `import Autocomplete from '@material-ui/core/Autocomplete'`"].join('\n'));
    warnedOnce = true;
  }

  return /*#__PURE__*/React.createElement(Autocomplete, _extends({
    ref: ref
  }, props));
});
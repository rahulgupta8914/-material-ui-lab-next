"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOpenState = useOpenState;
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function useOpenState({
  open,
  onOpen,
  onClose
}) {
  const isControllingOpenProp = React.useRef(typeof open === 'boolean').current;
  const [openState, setIsOpenState] = React.useState(false); // It is required to update inner state in useEffect in order to avoid situation when
  // Our component is not mounted yet, but `open` state is set to `true` (e.g. initially opened)

  React.useEffect(() => {
    if (isControllingOpenProp) {
      if (typeof open !== 'boolean') {
        throw new Error('You must not mix controlling and uncontrolled mode for `open` prop');
      }

      setIsOpenState(open);
    }
  }, [isControllingOpenProp, open]);
  const setIsOpen = React.useCallback(newIsOpen => {
    if (!isControllingOpenProp) {
      setIsOpenState(newIsOpen);
    }

    if (newIsOpen && onOpen) {
      onOpen();
    }

    if (!newIsOpen && onClose) {
      onClose();
    }
  }, [isControllingOpenProp, onOpen, onClose]);
  return {
    isOpen: openState,
    setIsOpen
  };
}

var _default = useOpenState;
exports.default = _default;
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("@material-ui/utils");

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _styles = require("@material-ui/core/styles");

var _utils2 = require("@material-ui/core/utils");

var _TreeViewContext = _interopRequireDefault(require("../TreeView/TreeViewContext"));

var _descendants = require("../TreeView/descendants");

var _TreeItemContent = _interopRequireDefault(require("./TreeItemContent"));

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    outline: 0
  },

  /* Styles applied to the transition component. */
  group: {
    margin: 0,
    padding: 0,
    marginLeft: 17
  },

  /* Styles applied to the content element. */
  content: {
    padding: '0 8px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    '&$disabled': {
      opacity: theme.palette.action.disabledOpacity,
      backgroundColor: 'transparent'
    },
    '&$focused': {
      backgroundColor: theme.palette.action.focus
    },
    '&$selected': {
      backgroundColor: (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      '&:hover': {
        backgroundColor: (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
        }
      },
      '&$focused': {
        backgroundColor: (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
      }
    }
  },

  /* Pseudo-class applied to the content element when expanded. */
  expanded: {},

  /* Pseudo-class applied to the content element when selected. */
  selected: {},

  /* Pseudo-class applied to the content element when focused. */
  focused: {},

  /* Pseudo-class applied to the element when disabled. */
  disabled: {},

  /* Styles applied to the tree node icon. */
  iconContainer: {
    marginRight: 4,
    width: 15,
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'center',
    '& svg': {
      fontSize: 18
    }
  },

  /* Styles applied to the label element. */
  label: (0, _extends2.default)({
    width: '100%',
    paddingLeft: 4,
    position: 'relative'
  }, theme.typography.body1)
});

exports.styles = styles;
const TreeItem = /*#__PURE__*/React.forwardRef(function TreeItem(props, ref) {
  const {
    children,
    classes,
    className,
    collapseIcon,
    ContentComponent = _TreeItemContent.default,
    ContentProps,
    endIcon,
    expandIcon,
    disabled: disabledProp,
    icon,
    id: idProp,
    label,
    nodeId,
    onClick,
    onMouseDown,
    TransitionComponent = _Collapse.default,
    TransitionProps
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, ["children", "classes", "className", "collapseIcon", "ContentComponent", "ContentProps", "endIcon", "expandIcon", "disabled", "icon", "id", "label", "nodeId", "onClick", "onMouseDown", "TransitionComponent", "TransitionProps"]);
  const {
    icons: contextIcons = {},
    focus,
    isExpanded,
    isFocused,
    isSelected,
    isDisabled,
    multiSelect,
    disabledItemsFocusable,
    mapFirstChar,
    unMapFirstChar,
    registerNode,
    unregisterNode,
    treeId
  } = React.useContext(_TreeViewContext.default);
  let id = null;

  if (idProp != null) {
    id = idProp;
  } else if (treeId && nodeId) {
    id = `${treeId}-${nodeId}`;
  }

  const [treeitemElement, setTreeitemElement] = React.useState(null);
  const contentRef = React.useRef(null);
  const handleRef = (0, _utils2.useForkRef)(setTreeitemElement, ref);
  const descendant = React.useMemo(() => ({
    element: treeitemElement,
    id: nodeId
  }), [nodeId, treeitemElement]);
  const {
    index,
    parentId
  } = (0, _descendants.useDescendant)(descendant);
  const expandable = Boolean(Array.isArray(children) ? children.length : children);
  const expanded = isExpanded ? isExpanded(nodeId) : false;
  const focused = isFocused ? isFocused(nodeId) : false;
  const selected = isSelected ? isSelected(nodeId) : false;
  const disabled = isDisabled ? isDisabled(nodeId) : false;
  let displayIcon;
  let expansionIcon;

  if (expandable) {
    if (!expanded) {
      expansionIcon = expandIcon || contextIcons.defaultExpandIcon;
    } else {
      expansionIcon = collapseIcon || contextIcons.defaultCollapseIcon;
    }
  }

  if (expandable) {
    displayIcon = contextIcons.defaultParentIcon;
  } else {
    displayIcon = endIcon || contextIcons.defaultEndIcon;
  }

  React.useEffect(() => {
    // On the first render a node's index will be -1. We want to wait for the real index.
    if (registerNode && unregisterNode && index !== -1) {
      registerNode({
        id: nodeId,
        idAttribute: id,
        index,
        parentId,
        expandable,
        disabled: disabledProp
      });
      return () => {
        unregisterNode(nodeId);
      };
    }

    return undefined;
  }, [registerNode, unregisterNode, parentId, index, nodeId, expandable, disabledProp, id]);
  React.useEffect(() => {
    if (mapFirstChar && unMapFirstChar && label) {
      mapFirstChar(nodeId, contentRef.current.textContent.substring(0, 1).toLowerCase());
      return () => {
        unMapFirstChar(nodeId);
      };
    }

    return undefined;
  }, [mapFirstChar, unMapFirstChar, nodeId, label]);
  let ariaSelected;

  if (multiSelect) {
    ariaSelected = selected;
  } else if (selected) {
    /* single-selection trees unset aria-selected on un-selected items.
     *
     * If the tree does not support multiple selection, aria-selected
     * is set to true for the selected node and it is not present on any other node in the tree.
     * Source: https://www.w3.org/TR/wai-aria-practices/#TreeView
     */
    ariaSelected = true;
  }

  function handleFocus(event) {
    // DOM focus stays on the tree which manages focus with aria-activedescendant
    if (event.target === event.currentTarget) {
      (0, _utils2.ownerDocument)(event.target).getElementById(treeId).focus({
        preventScroll: true
      });
    }

    const unfocusable = !disabledItemsFocusable && disabled;

    if (!focused && event.currentTarget === event.target && !unfocusable) {
      focus(event, nodeId);
    }
  }

  return /*#__PURE__*/React.createElement("li", (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className),
    role: "treeitem",
    "aria-expanded": expandable ? expanded : null,
    "aria-selected": ariaSelected,
    "aria-disabled": disabled || null,
    ref: handleRef,
    id: id,
    tabIndex: -1
  }, other, {
    onFocus: handleFocus
  }), /*#__PURE__*/React.createElement(ContentComponent, (0, _extends2.default)({
    ref: contentRef,
    classes: {
      root: classes.content,
      expanded: classes.expanded,
      selected: classes.selected,
      focused: classes.focused,
      disabled: classes.disabled,
      iconContainer: classes.iconContainer,
      label: classes.label
    },
    label: label,
    nodeId: nodeId,
    onClick: onClick,
    onMouseDown: onMouseDown,
    icon: icon,
    expansionIcon: expansionIcon,
    displayIcon: displayIcon
  }, ContentProps)), children && /*#__PURE__*/React.createElement(_descendants.DescendantProvider, {
    id: nodeId
  }, /*#__PURE__*/React.createElement(TransitionComponent, (0, _extends2.default)({
    unmountOnExit: true,
    className: classes.group,
    in: expanded,
    component: "ul",
    role: "group"
  }, TransitionProps), children)));
});
process.env.NODE_ENV !== "production" ? TreeItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The icon used to collapse the node.
   */
  collapseIcon: _propTypes.default.node,

  /**
   * The component used for the content node.
   * @default TreeItemContent
   */
  ContentComponent: _utils.elementTypeAcceptingRef,

  /**
   * Props applied to ContentComponent
   */
  ContentProps: _propTypes.default.object,

  /**
   * If `true`, the node is disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * The icon displayed next to a end node.
   */
  endIcon: _propTypes.default.node,

  /**
   * The icon used to expand the node.
   */
  expandIcon: _propTypes.default.node,

  /**
   * The icon to display next to the tree node's label.
   */
  icon: _propTypes.default.node,

  /**
   * @ignore
   */
  id: _propTypes.default.string,

  /**
   * The tree node label.
   */
  label: _propTypes.default.node,

  /**
   * The id of the node.
   */
  nodeId: _propTypes.default.string.isRequired,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func,

  /**
   * This prop isn't supported.
   * Use the `onNodeFocus` callback on the tree if you need to monitor a node's focus.
   */
  onFocus: _utils2.unsupportedProp,

  /**
   * @ignore
   */
  onMouseDown: _propTypes.default.func,

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Collapse
   */
  TransitionComponent: _propTypes.default.elementType,

  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition) component.
   */
  TransitionProps: _propTypes.default.object
} : void 0;

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiTreeItem'
})(TreeItem);

exports.default = _default;
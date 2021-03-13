"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _DesktopDateRangePicker.default;
  }
});

var _DesktopDateRangePicker = _interopRequireWildcard(require("./DesktopDateRangePicker"));

Object.keys(_DesktopDateRangePicker).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _DesktopDateRangePicker[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _DesktopDateRangePicker[key];
    }
  });
});
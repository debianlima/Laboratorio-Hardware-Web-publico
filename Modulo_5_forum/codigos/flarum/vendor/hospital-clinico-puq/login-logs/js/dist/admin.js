module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Object(_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toPrimitive; });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != Object(_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != Object(_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toPropertyKey; });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = Object(_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == Object(_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/@kurkle/color/dist/color.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@kurkle/color/dist/color.esm.js ***!
  \******************************************************/
/*! exports provided: Color, b2n, b2p, default, hexParse, hexString, hsl2rgb, hslString, hsv2rgb, hueParse, hwb2rgb, lim, n2b, n2p, nameParse, p2b, rgb2hsl, rgbParse, rgbString, rotate, round */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b2n", function() { return b2n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b2p", function() { return b2p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index_esm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexParse", function() { return hexParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexString", function() { return _hexString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl2rgb", function() { return hsl2rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslString", function() { return _hslString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsv2rgb", function() { return hsv2rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hueParse", function() { return hueParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hwb2rgb", function() { return hwb2rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lim", function() { return lim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n2b", function() { return n2b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n2p", function() { return n2p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameParse", function() { return nameParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p2b", function() { return p2b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb2hsl", function() { return rgb2hsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbParse", function() { return rgbParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbString", function() { return _rgbString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return _rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");

/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function round(v) {
  return v + 0.5 | 0;
}
var lim = function lim(v, l, h) {
  return Math.max(Math.min(v, h), l);
};
function p2b(v) {
  return lim(round(v * 2.55), 0, 255);
}
function b2p(v) {
  return lim(round(v / 2.55), 0, 100);
}
function n2b(v) {
  return lim(round(v * 255), 0, 255);
}
function b2n(v) {
  return lim(round(v / 2.55) / 100, 0, 1);
}
function n2p(v) {
  return lim(round(v * 100), 0, 100);
}
var map$1 = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15
};
var hex = [].concat('0123456789ABCDEF');
var h1 = function h1(b) {
  return hex[b & 0xF];
};
var h2 = function h2(b) {
  return hex[(b & 0xF0) >> 4] + hex[b & 0xF];
};
var eq = function eq(b) {
  return (b & 0xF0) >> 4 === (b & 0xF);
};
var isShort = function isShort(v) {
  return eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
};
function hexParse(str) {
  var len = str.length;
  var ret;
  if (str[0] === '#') {
    if (len === 4 || len === 5) {
      ret = {
        r: 255 & map$1[str[1]] * 17,
        g: 255 & map$1[str[2]] * 17,
        b: 255 & map$1[str[3]] * 17,
        a: len === 5 ? map$1[str[4]] * 17 : 255
      };
    } else if (len === 7 || len === 9) {
      ret = {
        r: map$1[str[1]] << 4 | map$1[str[2]],
        g: map$1[str[3]] << 4 | map$1[str[4]],
        b: map$1[str[5]] << 4 | map$1[str[6]],
        a: len === 9 ? map$1[str[7]] << 4 | map$1[str[8]] : 255
      };
    }
  }
  return ret;
}
var alpha = function alpha(a, f) {
  return a < 255 ? f(a) : '';
};
function _hexString(v) {
  var f = isShort(v) ? h1 : h2;
  return v ? '#' + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f) : undefined;
}
var HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function hsl2rgbn(h, s, l) {
  var a = s * Math.min(l, 1 - l);
  var f = function f(n, k) {
    if (k === void 0) {
      k = (n + h / 30) % 12;
    }
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };
  return [f(0), f(8), f(4)];
}
function hsv2rgbn(h, s, v) {
  var f = function f(n, k) {
    if (k === void 0) {
      k = (n + h / 60) % 6;
    }
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };
  return [f(5), f(3), f(1)];
}
function hwb2rgbn(h, w, b) {
  var rgb = hsl2rgbn(h, 1, 0.5);
  var i;
  if (w + b > 1) {
    i = 1 / (w + b);
    w *= i;
    b *= i;
  }
  for (i = 0; i < 3; i++) {
    rgb[i] *= 1 - w - b;
    rgb[i] += w;
  }
  return rgb;
}
function hueValue(r, g, b, d, max) {
  if (r === max) {
    return (g - b) / d + (g < b ? 6 : 0);
  }
  if (g === max) {
    return (b - r) / d + 2;
  }
  return (r - g) / d + 4;
}
function rgb2hsl(v) {
  var range = 255;
  var r = v.r / range;
  var g = v.g / range;
  var b = v.b / range;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var l = (max + min) / 2;
  var h, s, d;
  if (max !== min) {
    d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    h = hueValue(r, g, b, d, max);
    h = h * 60 + 0.5;
  }
  return [h | 0, s || 0, l];
}
function calln(f, a, b, c) {
  return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
}
function hsl2rgb(h, s, l) {
  return calln(hsl2rgbn, h, s, l);
}
function hwb2rgb(h, w, b) {
  return calln(hwb2rgbn, h, w, b);
}
function hsv2rgb(h, s, v) {
  return calln(hsv2rgbn, h, s, v);
}
function hue(h) {
  return (h % 360 + 360) % 360;
}
function hueParse(str) {
  var m = HUE_RE.exec(str);
  var a = 255;
  var v;
  if (!m) {
    return;
  }
  if (m[5] !== v) {
    a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
  }
  var h = hue(+m[2]);
  var p1 = +m[3] / 100;
  var p2 = +m[4] / 100;
  if (m[1] === 'hwb') {
    v = hwb2rgb(h, p1, p2);
  } else if (m[1] === 'hsv') {
    v = hsv2rgb(h, p1, p2);
  } else {
    v = hsl2rgb(h, p1, p2);
  }
  return {
    r: v[0],
    g: v[1],
    b: v[2],
    a: a
  };
}
function _rotate(v, deg) {
  var h = rgb2hsl(v);
  h[0] = hue(h[0] + deg);
  h = hsl2rgb(h);
  v.r = h[0];
  v.g = h[1];
  v.b = h[2];
}
function _hslString(v) {
  if (!v) {
    return;
  }
  var a = rgb2hsl(v);
  var h = a[0];
  var s = n2p(a[1]);
  var l = n2p(a[2]);
  return v.a < 255 ? "hsla(" + h + ", " + s + "%, " + l + "%, " + b2n(v.a) + ")" : "hsl(" + h + ", " + s + "%, " + l + "%)";
}
var map = {
  x: 'dark',
  Z: 'light',
  Y: 're',
  X: 'blu',
  W: 'gr',
  V: 'medium',
  U: 'slate',
  A: 'ee',
  T: 'ol',
  S: 'or',
  B: 'ra',
  C: 'lateg',
  D: 'ights',
  R: 'in',
  Q: 'turquois',
  E: 'hi',
  P: 'ro',
  O: 'al',
  N: 'le',
  M: 'de',
  L: 'yello',
  F: 'en',
  K: 'ch',
  G: 'arks',
  H: 'ea',
  I: 'ightg',
  J: 'wh'
};
var names$1 = {
  OiceXe: 'f0f8ff',
  antiquewEte: 'faebd7',
  aqua: 'ffff',
  aquamarRe: '7fffd4',
  azuY: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '0',
  blanKedOmond: 'ffebcd',
  Xe: 'ff',
  XeviTet: '8a2be2',
  bPwn: 'a52a2a',
  burlywood: 'deb887',
  caMtXe: '5f9ea0',
  KartYuse: '7fff00',
  KocTate: 'd2691e',
  cSO: 'ff7f50',
  cSnflowerXe: '6495ed',
  cSnsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: 'ffff',
  xXe: '8b',
  xcyan: '8b8b',
  xgTMnPd: 'b8860b',
  xWay: 'a9a9a9',
  xgYF: '6400',
  xgYy: 'a9a9a9',
  xkhaki: 'bdb76b',
  xmagFta: '8b008b',
  xTivegYF: '556b2f',
  xSange: 'ff8c00',
  xScEd: '9932cc',
  xYd: '8b0000',
  xsOmon: 'e9967a',
  xsHgYF: '8fbc8f',
  xUXe: '483d8b',
  xUWay: '2f4f4f',
  xUgYy: '2f4f4f',
  xQe: 'ced1',
  xviTet: '9400d3',
  dAppRk: 'ff1493',
  dApskyXe: 'bfff',
  dimWay: '696969',
  dimgYy: '696969',
  dodgerXe: '1e90ff',
  fiYbrick: 'b22222',
  flSOwEte: 'fffaf0',
  foYstWAn: '228b22',
  fuKsia: 'ff00ff',
  gaRsbSo: 'dcdcdc',
  ghostwEte: 'f8f8ff',
  gTd: 'ffd700',
  gTMnPd: 'daa520',
  Way: '808080',
  gYF: '8000',
  gYFLw: 'adff2f',
  gYy: '808080',
  honeyMw: 'f0fff0',
  hotpRk: 'ff69b4',
  RdianYd: 'cd5c5c',
  Rdigo: '4b0082',
  ivSy: 'fffff0',
  khaki: 'f0e68c',
  lavFMr: 'e6e6fa',
  lavFMrXsh: 'fff0f5',
  lawngYF: '7cfc00',
  NmoncEffon: 'fffacd',
  ZXe: 'add8e6',
  ZcSO: 'f08080',
  Zcyan: 'e0ffff',
  ZgTMnPdLw: 'fafad2',
  ZWay: 'd3d3d3',
  ZgYF: '90ee90',
  ZgYy: 'd3d3d3',
  ZpRk: 'ffb6c1',
  ZsOmon: 'ffa07a',
  ZsHgYF: '20b2aa',
  ZskyXe: '87cefa',
  ZUWay: '778899',
  ZUgYy: '778899',
  ZstAlXe: 'b0c4de',
  ZLw: 'ffffe0',
  lime: 'ff00',
  limegYF: '32cd32',
  lRF: 'faf0e6',
  magFta: 'ff00ff',
  maPon: '800000',
  VaquamarRe: '66cdaa',
  VXe: 'cd',
  VScEd: 'ba55d3',
  VpurpN: '9370db',
  VsHgYF: '3cb371',
  VUXe: '7b68ee',
  VsprRggYF: 'fa9a',
  VQe: '48d1cc',
  VviTetYd: 'c71585',
  midnightXe: '191970',
  mRtcYam: 'f5fffa',
  mistyPse: 'ffe4e1',
  moccasR: 'ffe4b5',
  navajowEte: 'ffdead',
  navy: '80',
  Tdlace: 'fdf5e6',
  Tive: '808000',
  TivedBb: '6b8e23',
  Sange: 'ffa500',
  SangeYd: 'ff4500',
  ScEd: 'da70d6',
  pOegTMnPd: 'eee8aa',
  pOegYF: '98fb98',
  pOeQe: 'afeeee',
  pOeviTetYd: 'db7093',
  papayawEp: 'ffefd5',
  pHKpuff: 'ffdab9',
  peru: 'cd853f',
  pRk: 'ffc0cb',
  plum: 'dda0dd',
  powMrXe: 'b0e0e6',
  purpN: '800080',
  YbeccapurpN: '663399',
  Yd: 'ff0000',
  Psybrown: 'bc8f8f',
  PyOXe: '4169e1',
  saddNbPwn: '8b4513',
  sOmon: 'fa8072',
  sandybPwn: 'f4a460',
  sHgYF: '2e8b57',
  sHshell: 'fff5ee',
  siFna: 'a0522d',
  silver: 'c0c0c0',
  skyXe: '87ceeb',
  UXe: '6a5acd',
  UWay: '708090',
  UgYy: '708090',
  snow: 'fffafa',
  sprRggYF: 'ff7f',
  stAlXe: '4682b4',
  tan: 'd2b48c',
  teO: '8080',
  tEstN: 'd8bfd8',
  tomato: 'ff6347',
  Qe: '40e0d0',
  viTet: 'ee82ee',
  JHt: 'f5deb3',
  wEte: 'ffffff',
  wEtesmoke: 'f5f5f5',
  Lw: 'ffff00',
  LwgYF: '9acd32'
};
function unpack() {
  var unpacked = {};
  var keys = Object.keys(names$1);
  var tkeys = Object.keys(map);
  var i, j, k, ok, nk;
  for (i = 0; i < keys.length; i++) {
    ok = nk = keys[i];
    for (j = 0; j < tkeys.length; j++) {
      k = tkeys[j];
      nk = nk.replace(k, map[k]);
    }
    k = parseInt(names$1[ok], 16);
    unpacked[nk] = [k >> 16 & 0xFF, k >> 8 & 0xFF, k & 0xFF];
  }
  return unpacked;
}
var names;
function nameParse(str) {
  if (!names) {
    names = unpack();
    names.transparent = [0, 0, 0, 0];
  }
  var a = names[str.toLowerCase()];
  return a && {
    r: a[0],
    g: a[1],
    b: a[2],
    a: a.length === 4 ? a[3] : 255
  };
}
var RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rgbParse(str) {
  var m = RGB_RE.exec(str);
  var a = 255;
  var r, g, b;
  if (!m) {
    return;
  }
  if (m[7] !== r) {
    var v = +m[7];
    a = m[8] ? p2b(v) : lim(v * 255, 0, 255);
  }
  r = +m[1];
  g = +m[3];
  b = +m[5];
  r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
  g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
  b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}
function _rgbString(v) {
  return v && (v.a < 255 ? "rgba(" + v.r + ", " + v.g + ", " + v.b + ", " + b2n(v.a) + ")" : "rgb(" + v.r + ", " + v.g + ", " + v.b + ")");
}
var to = function to(v) {
  return v <= 0.0031308 ? v * 12.92 : Math.pow(v, 1.0 / 2.4) * 1.055 - 0.055;
};
var from = function from(v) {
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
};
function _interpolate(rgb1, rgb2, t) {
  var r = from(b2n(rgb1.r));
  var g = from(b2n(rgb1.g));
  var b = from(b2n(rgb1.b));
  return {
    r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
    g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
    b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
    a: rgb1.a + t * (rgb2.a - rgb1.a)
  };
}
function modHSL(v, i, ratio) {
  if (v) {
    var tmp = rgb2hsl(v);
    tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
    tmp = hsl2rgb(tmp);
    v.r = tmp[0];
    v.g = tmp[1];
    v.b = tmp[2];
  }
}
function clone(v, proto) {
  return v ? Object.assign(proto || {}, v) : v;
}
function fromObject(input) {
  var v = {
    r: 0,
    g: 0,
    b: 0,
    a: 255
  };
  if (Array.isArray(input)) {
    if (input.length >= 3) {
      v = {
        r: input[0],
        g: input[1],
        b: input[2],
        a: 255
      };
      if (input.length > 3) {
        v.a = n2b(input[3]);
      }
    }
  } else {
    v = clone(input, {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    });
    v.a = n2b(v.a);
  }
  return v;
}
function functionParse(str) {
  if (str.charAt(0) === 'r') {
    return rgbParse(str);
  }
  return hueParse(str);
}
var Color = /*#__PURE__*/function () {
  function Color(input) {
    if (input instanceof Color) {
      return input;
    }
    var type = typeof input;
    var v;
    if (type === 'object') {
      v = fromObject(input);
    } else if (type === 'string') {
      v = hexParse(input) || nameParse(input) || functionParse(input);
    }
    this._rgb = v;
    this._valid = !!v;
  }
  var _proto = Color.prototype;
  _proto.rgbString = function rgbString() {
    return this._valid ? _rgbString(this._rgb) : undefined;
  };
  _proto.hexString = function hexString() {
    return this._valid ? _hexString(this._rgb) : undefined;
  };
  _proto.hslString = function hslString() {
    return this._valid ? _hslString(this._rgb) : undefined;
  };
  _proto.mix = function mix(color, weight) {
    if (color) {
      var c1 = this.rgb;
      var c2 = color.rgb;
      var w2;
      var p = weight === w2 ? 0.5 : weight;
      var w = 2 * p - 1;
      var a = c1.a - c2.a;
      var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
      w2 = 1 - w1;
      c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
      c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
      c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
      c1.a = p * c1.a + (1 - p) * c2.a;
      this.rgb = c1;
    }
    return this;
  };
  _proto.interpolate = function interpolate(color, t) {
    if (color) {
      this._rgb = _interpolate(this._rgb, color._rgb, t);
    }
    return this;
  };
  _proto.clone = function clone() {
    return new Color(this.rgb);
  };
  _proto.alpha = function alpha(a) {
    this._rgb.a = n2b(a);
    return this;
  };
  _proto.clearer = function clearer(ratio) {
    var rgb = this._rgb;
    rgb.a *= 1 - ratio;
    return this;
  };
  _proto.greyscale = function greyscale() {
    var rgb = this._rgb;
    var val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
    rgb.r = rgb.g = rgb.b = val;
    return this;
  };
  _proto.opaquer = function opaquer(ratio) {
    var rgb = this._rgb;
    rgb.a *= 1 + ratio;
    return this;
  };
  _proto.negate = function negate() {
    var v = this._rgb;
    v.r = 255 - v.r;
    v.g = 255 - v.g;
    v.b = 255 - v.b;
    return this;
  };
  _proto.lighten = function lighten(ratio) {
    modHSL(this._rgb, 2, ratio);
    return this;
  };
  _proto.darken = function darken(ratio) {
    modHSL(this._rgb, 2, -ratio);
    return this;
  };
  _proto.saturate = function saturate(ratio) {
    modHSL(this._rgb, 1, ratio);
    return this;
  };
  _proto.desaturate = function desaturate(ratio) {
    modHSL(this._rgb, 1, -ratio);
    return this;
  };
  _proto.rotate = function rotate(deg) {
    _rotate(this._rgb, deg);
    return this;
  };
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, [{
    key: "valid",
    get: function get() {
      return this._valid;
    }
  }, {
    key: "rgb",
    get: function get() {
      var v = clone(this._rgb);
      if (v) {
        v.a = b2n(v.a);
      }
      return v;
    },
    set: function set(obj) {
      this._rgb = fromObject(obj);
    }
  }]);
}();
function index_esm(input) {
  return new Color(input);
}


/***/ }),

/***/ "./node_modules/chart.js/auto/auto.js":
/*!********************************************!*\
  !*** ./node_modules/chart.js/auto/auto.js ***!
  \********************************************/
/*! exports provided: Animation, Animations, ArcElement, BarController, BarElement, BasePlatform, BasicPlatform, BubbleController, CategoryScale, Chart, Colors, DatasetController, Decimation, DomPlatform, DoughnutController, Element, Filler, Interaction, Legend, LineController, LineElement, LinearScale, LogarithmicScale, PieController, PointElement, PolarAreaController, RadarController, RadialLinearScale, Scale, ScatterController, SubTitle, Ticks, TimeScale, TimeSeriesScale, Title, Tooltip, _adapters, _detectPlatform, animator, controllers, defaults, elements, layouts, plugins, registerables, registry, scales, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/chart.js */ "./node_modules/chart.js/dist/chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Animation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animations", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Animations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArcElement", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["ArcElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarController", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["BarController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarElement", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["BarElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePlatform", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["BasePlatform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicPlatform", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["BasicPlatform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BubbleController", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["BubbleController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryScale", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["CategoryScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Colors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatasetController", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["DatasetController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Decimation", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Decimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomPlatform", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["DomPlatform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DoughnutController", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["DoughnutController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Element"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filler", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Filler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interaction", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Interaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Legend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineController", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["LineController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineElement", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["LineElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinearScale", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["LinearScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogarithmicScale", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["LogarithmicScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieController", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["PieController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointElement", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["PointElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolarAreaController", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["PolarAreaController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadarController", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["RadarController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadialLinearScale", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["RadialLinearScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scale", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Scale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScatterController", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["ScatterController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubTitle", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["SubTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ticks", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Ticks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeScale", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["TimeScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSeriesScale", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["TimeSeriesScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Title"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Tooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_adapters", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["_adapters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_detectPlatform", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["_detectPlatform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animator", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["animator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "controllers", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["controllers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["defaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elements", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["elements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layouts", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["layouts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["plugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerables", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["registerables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registry", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["registry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scales", function() { return _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["scales"]; });


_dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"].register.apply(_dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"], _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["registerables"]);

/* harmony default export */ __webpack_exports__["default"] = (_dist_chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]);

/***/ }),

/***/ "./node_modules/chart.js/dist/chart.js":
/*!*********************************************!*\
  !*** ./node_modules/chart.js/dist/chart.js ***!
  \*********************************************/
/*! exports provided: Animation, Animations, ArcElement, BarController, BarElement, BasePlatform, BasicPlatform, BubbleController, CategoryScale, Chart, Colors, DatasetController, Decimation, DomPlatform, DoughnutController, Element, Filler, Interaction, Legend, LineController, LineElement, LinearScale, LogarithmicScale, PieController, PointElement, PolarAreaController, RadarController, RadialLinearScale, Scale, ScatterController, SubTitle, Ticks, TimeScale, TimeSeriesScale, Title, Tooltip, _adapters, _detectPlatform, animator, controllers, defaults, elements, layouts, plugins, registerables, registry, scales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animations", function() { return Animations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcElement", function() { return ArcElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarController", function() { return BarController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarElement", function() { return BarElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePlatform", function() { return BasePlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicPlatform", function() { return BasicPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleController", function() { return BubbleController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryScale", function() { return CategoryScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return plugin_colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetController", function() { return DatasetController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decimation", function() { return plugin_decimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPlatform", function() { return DomPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoughnutController", function() { return DoughnutController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filler", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interaction", function() { return Interaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return plugin_legend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineController", function() { return LineController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineElement", function() { return LineElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearScale", function() { return LinearScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogarithmicScale", function() { return LogarithmicScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieController", function() { return PieController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointElement", function() { return PointElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolarAreaController", function() { return PolarAreaController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadarController", function() { return RadarController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadialLinearScale", function() { return RadialLinearScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scale", function() { return Scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterController", function() { return ScatterController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTitle", function() { return plugin_subtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeScale", function() { return TimeScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSeriesScale", function() { return TimeSeriesScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return plugin_title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return plugin_tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_adapters", function() { return adapters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_detectPlatform", function() { return _detectPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animator", function() { return animator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controllers", function() { return controllers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elements", function() { return elements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layouts", function() { return layouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return plugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerables", function() { return registerables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registry", function() { return registry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scales", function() { return scales; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunks/helpers.segment.js */ "./node_modules/chart.js/dist/chunks/helpers.segment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ticks", function() { return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"]; });

/* harmony import */ var _kurkle_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kurkle/color */ "./node_modules/@kurkle/color/dist/color.esm.js");



function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */


var Animator = /*#__PURE__*/function () {
  function Animator() {
    this._request = null;
    this._charts = new Map();
    this._running = false;
    this._lastDate = undefined;
  }
  var _proto = Animator.prototype;
  _proto._notify = function _notify(chart, anims, date, type) {
    var callbacks = anims.listeners[type];
    var numSteps = anims.duration;
    callbacks.forEach(function (fn) {
      return fn({
        chart: chart,
        initial: anims.initial,
        numSteps: numSteps,
        currentStep: Math.min(date - anims.start, numSteps)
      });
    });
  };
  _proto._refresh = function _refresh() {
    var _this = this;
    if (this._request) {
      return;
    }
    this._running = true;
    this._request = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["r"].call(window, function () {
      _this._update();
      _this._request = null;
      if (_this._running) {
        _this._refresh();
      }
    });
  };
  _proto._update = function _update(date) {
    var _this2 = this;
    if (date === void 0) {
      date = Date.now();
    }
    var remaining = 0;
    this._charts.forEach(function (anims, chart) {
      if (!anims.running || !anims.items.length) {
        return;
      }
      var items = anims.items;
      var i = items.length - 1;
      var draw = false;
      var item;
      for (; i >= 0; --i) {
        item = items[i];
        if (item._active) {
          if (item._total > anims.duration) {
            anims.duration = item._total;
          }
          item.tick(date);
          draw = true;
        } else {
          items[i] = items[items.length - 1];
          items.pop();
        }
      }
      if (draw) {
        chart.draw();
        _this2._notify(chart, anims, date, 'progress');
      }
      if (!items.length) {
        anims.running = false;
        _this2._notify(chart, anims, date, 'complete');
        anims.initial = false;
      }
      remaining += items.length;
    });
    this._lastDate = date;
    if (remaining === 0) {
      this._running = false;
    }
  };
  _proto._getAnims = function _getAnims(chart) {
    var charts = this._charts;
    var anims = charts.get(chart);
    if (!anims) {
      anims = {
        running: false,
        initial: true,
        items: [],
        listeners: {
          complete: [],
          progress: []
        }
      };
      charts.set(chart, anims);
    }
    return anims;
  };
  _proto.listen = function listen(chart, event, cb) {
    this._getAnims(chart).listeners[event].push(cb);
  };
  _proto.add = function add(chart, items) {
    var _this$_getAnims$items;
    if (!items || !items.length) {
      return;
    }
    (_this$_getAnims$items = this._getAnims(chart).items).push.apply(_this$_getAnims$items, items);
  };
  _proto.has = function has(chart) {
    return this._getAnims(chart).items.length > 0;
  };
  _proto.start = function start(chart) {
    var anims = this._charts.get(chart);
    if (!anims) {
      return;
    }
    anims.running = true;
    anims.start = Date.now();
    anims.duration = anims.items.reduce(function (acc, cur) {
      return Math.max(acc, cur._duration);
    }, 0);
    this._refresh();
  };
  _proto.running = function running(chart) {
    if (!this._running) {
      return false;
    }
    var anims = this._charts.get(chart);
    if (!anims || !anims.running || !anims.items.length) {
      return false;
    }
    return true;
  };
  _proto.stop = function stop(chart) {
    var anims = this._charts.get(chart);
    if (!anims || !anims.items.length) {
      return;
    }
    var items = anims.items;
    var i = items.length - 1;
    for (; i >= 0; --i) {
      items[i].cancel();
    }
    anims.items = [];
    this._notify(chart, anims, Date.now(), 'complete');
  };
  _proto.remove = function remove(chart) {
    return this._charts["delete"](chart);
  };
  return Animator;
}();
var animator = /* #__PURE__ */new Animator();
var transparent = 'transparent';
var interpolators = {
  "boolean": function boolean(from, to, factor) {
    return factor > 0.5 ? to : from;
  },
  color: function color(from, to, factor) {
    var c0 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["c"])(from || transparent);
    var c1 = c0.valid && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["c"])(to || transparent);
    return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
  },
  number: function number(from, to, factor) {
    return from + (to - from) * factor;
  }
};
var Animation = /*#__PURE__*/function () {
  function Animation(cfg, target, prop, to) {
    var currentValue = target[prop];
    to = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a"])([cfg.to, to, currentValue, cfg.from]);
    var from = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a"])([cfg.from, currentValue, to]);
    this._active = true;
    this._fn = cfg.fn || interpolators[cfg.type || typeof from];
    this._easing = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["e"][cfg.easing] || _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["e"].linear;
    this._start = Math.floor(Date.now() + (cfg.delay || 0));
    this._duration = this._total = Math.floor(cfg.duration);
    this._loop = !!cfg.loop;
    this._target = target;
    this._prop = prop;
    this._from = from;
    this._to = to;
    this._promises = undefined;
  }
  var _proto2 = Animation.prototype;
  _proto2.active = function active() {
    return this._active;
  };
  _proto2.update = function update(cfg, to, date) {
    if (this._active) {
      this._notify(false);
      var currentValue = this._target[this._prop];
      var elapsed = date - this._start;
      var remain = this._duration - elapsed;
      this._start = date;
      this._duration = Math.floor(Math.max(remain, cfg.duration));
      this._total += elapsed;
      this._loop = !!cfg.loop;
      this._to = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a"])([cfg.to, to, currentValue, cfg.from]);
      this._from = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a"])([cfg.from, currentValue, to]);
    }
  };
  _proto2.cancel = function cancel() {
    if (this._active) {
      this.tick(Date.now());
      this._active = false;
      this._notify(false);
    }
  };
  _proto2.tick = function tick(date) {
    var elapsed = date - this._start;
    var duration = this._duration;
    var prop = this._prop;
    var from = this._from;
    var loop = this._loop;
    var to = this._to;
    var factor;
    this._active = from !== to && (loop || elapsed < duration);
    if (!this._active) {
      this._target[prop] = to;
      this._notify(true);
      return;
    }
    if (elapsed < 0) {
      this._target[prop] = from;
      return;
    }
    factor = elapsed / duration % 2;
    factor = loop && factor > 1 ? 2 - factor : factor;
    factor = this._easing(Math.min(1, Math.max(0, factor)));
    this._target[prop] = this._fn(from, to, factor);
  };
  _proto2.wait = function wait() {
    var promises = this._promises || (this._promises = []);
    return new Promise(function (res, rej) {
      promises.push({
        res: res,
        rej: rej
      });
    });
  };
  _proto2._notify = function _notify(resolved) {
    var method = resolved ? 'res' : 'rej';
    var promises = this._promises || [];
    for (var i = 0; i < promises.length; i++) {
      promises[i][method]();
    }
  };
  return Animation;
}();
var Animations = /*#__PURE__*/function () {
  function Animations(chart, config) {
    this._chart = chart;
    this._properties = new Map();
    this.configure(config);
  }
  var _proto3 = Animations.prototype;
  _proto3.configure = function configure(config) {
    if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(config)) {
      return;
    }
    var animationOptions = Object.keys(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].animation);
    var animatedProps = this._properties;
    Object.getOwnPropertyNames(config).forEach(function (key) {
      var cfg = config[key];
      if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(cfg)) {
        return;
      }
      var resolved = {};
      for (var _i = 0, _animationOptions = animationOptions; _i < _animationOptions.length; _i++) {
        var option = _animationOptions[_i];
        resolved[option] = cfg[option];
      }
      (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["b"])(cfg.properties) && cfg.properties || [key]).forEach(function (prop) {
        if (prop === key || !animatedProps.has(prop)) {
          animatedProps.set(prop, resolved);
        }
      });
    });
  };
  _proto3._animateOptions = function _animateOptions(target, values) {
    var newOptions = values.options;
    var options = resolveTargetOptions(target, newOptions);
    if (!options) {
      return [];
    }
    var animations = this._createAnimations(options, newOptions);
    if (newOptions.$shared) {
      awaitAll(target.options.$animations, newOptions).then(function () {
        target.options = newOptions;
      }, function () {});
    }
    return animations;
  };
  _proto3._createAnimations = function _createAnimations(target, values) {
    var animatedProps = this._properties;
    var animations = [];
    var running = target.$animations || (target.$animations = {});
    var props = Object.keys(values);
    var date = Date.now();
    var i;
    for (i = props.length - 1; i >= 0; --i) {
      var prop = props[i];
      if (prop.charAt(0) === '$') {
        continue;
      }
      if (prop === 'options') {
        animations.push.apply(animations, this._animateOptions(target, values));
        continue;
      }
      var value = values[prop];
      var animation = running[prop];
      var cfg = animatedProps.get(prop);
      if (animation) {
        if (cfg && animation.active()) {
          animation.update(cfg, value, date);
          continue;
        } else {
          animation.cancel();
        }
      }
      if (!cfg || !cfg.duration) {
        target[prop] = value;
        continue;
      }
      running[prop] = animation = new Animation(cfg, target, prop, value);
      animations.push(animation);
    }
    return animations;
  };
  _proto3.update = function update(target, values) {
    if (this._properties.size === 0) {
      Object.assign(target, values);
      return;
    }
    var animations = this._createAnimations(target, values);
    if (animations.length) {
      animator.add(this._chart, animations);
      return true;
    }
  };
  return Animations;
}();
function awaitAll(animations, properties) {
  var running = [];
  var keys = Object.keys(properties);
  for (var i = 0; i < keys.length; i++) {
    var anim = animations[keys[i]];
    if (anim && anim.active()) {
      running.push(anim.wait());
    }
  }
  return Promise.all(running);
}
function resolveTargetOptions(target, newOptions) {
  if (!newOptions) {
    return;
  }
  var options = target.options;
  if (!options) {
    target.options = newOptions;
    return;
  }
  if (options.$shared) {
    target.options = options = Object.assign({}, options, {
      $shared: false,
      $animations: {}
    });
  }
  return options;
}
function scaleClip(scale, allowedOverflow) {
  var opts = scale && scale.options || {};
  var reverse = opts.reverse;
  var min = opts.min === undefined ? allowedOverflow : 0;
  var max = opts.max === undefined ? allowedOverflow : 0;
  return {
    start: reverse ? max : min,
    end: reverse ? min : max
  };
}
function defaultClip(xScale, yScale, allowedOverflow) {
  if (allowedOverflow === false) {
    return false;
  }
  var x = scaleClip(xScale, allowedOverflow);
  var y = scaleClip(yScale, allowedOverflow);
  return {
    top: y.end,
    right: x.end,
    bottom: y.start,
    left: x.start
  };
}
function toClip(value) {
  var t, r, b, l;
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(value)) {
    t = value.top;
    r = value.right;
    b = value.bottom;
    l = value.left;
  } else {
    t = r = b = l = value;
  }
  return {
    top: t,
    right: r,
    bottom: b,
    left: l,
    disabled: value === false
  };
}
function getSortedDatasetIndices(chart, filterVisible) {
  var keys = [];
  var metasets = chart._getSortedDatasetMetas(filterVisible);
  var i, ilen;
  for (i = 0, ilen = metasets.length; i < ilen; ++i) {
    keys.push(metasets[i].index);
  }
  return keys;
}
function _applyStack(stack, value, dsIndex, options) {
  if (options === void 0) {
    options = {};
  }
  var keys = stack.keys;
  var singleMode = options.mode === 'single';
  var i, ilen, datasetIndex, otherValue;
  if (value === null) {
    return;
  }
  var found = false;
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    datasetIndex = +keys[i];
    if (datasetIndex === dsIndex) {
      found = true;
      if (options.all) {
        continue;
      }
      break;
    }
    otherValue = stack.values[datasetIndex];
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(otherValue) && (singleMode || value === 0 || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["s"])(value) === Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["s"])(otherValue))) {
      value += otherValue;
    }
  }
  if (!found && !options.all) {
    return 0;
  }
  return value;
}
function convertObjectDataToArray(data, meta) {
  var iScale = meta.iScale,
    vScale = meta.vScale;
  var iAxisKey = iScale.axis === 'x' ? 'x' : 'y';
  var vAxisKey = vScale.axis === 'x' ? 'x' : 'y';
  var keys = Object.keys(data);
  var adata = new Array(keys.length);
  var i, ilen, key;
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    var _adata$i;
    key = keys[i];
    adata[i] = (_adata$i = {}, _adata$i[iAxisKey] = key, _adata$i[vAxisKey] = data[key], _adata$i);
  }
  return adata;
}
function isStacked(scale, meta) {
  var stacked = scale && scale.options.stacked;
  return stacked || stacked === undefined && meta.stack !== undefined;
}
function getStackKey(indexScale, valueScale, meta) {
  return indexScale.id + "." + valueScale.id + "." + (meta.stack || meta.type);
}
function getUserBounds(scale) {
  var _scale$getUserBounds = scale.getUserBounds(),
    min = _scale$getUserBounds.min,
    max = _scale$getUserBounds.max,
    minDefined = _scale$getUserBounds.minDefined,
    maxDefined = _scale$getUserBounds.maxDefined;
  return {
    min: minDefined ? min : Number.NEGATIVE_INFINITY,
    max: maxDefined ? max : Number.POSITIVE_INFINITY
  };
}
function getOrCreateStack(stacks, stackKey, indexValue) {
  var subStack = stacks[stackKey] || (stacks[stackKey] = {});
  return subStack[indexValue] || (subStack[indexValue] = {});
}
function getLastIndexInStack(stack, vScale, positive, type) {
  for (var _iterator = _createForOfIteratorHelperLoose(vScale.getMatchingVisibleMetas(type).reverse()), _step; !(_step = _iterator()).done;) {
    var meta = _step.value;
    var value = stack[meta.index];
    if (positive && value > 0 || !positive && value < 0) {
      return meta.index;
    }
  }
  return null;
}
function updateStacks(controller, parsed) {
  var chart = controller.chart,
    meta = controller._cachedMeta;
  var stacks = chart._stacks || (chart._stacks = {});
  var iScale = meta.iScale,
    vScale = meta.vScale,
    datasetIndex = meta.index;
  var iAxis = iScale.axis;
  var vAxis = vScale.axis;
  var key = getStackKey(iScale, vScale, meta);
  var ilen = parsed.length;
  var stack;
  for (var i = 0; i < ilen; ++i) {
    var item = parsed[i];
    var _index = item[iAxis],
      value = item[vAxis];
    var itemStacks = item._stacks || (item._stacks = {});
    stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, _index);
    stack[datasetIndex] = value;
    stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
    stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
    var visualValues = stack._visualValues || (stack._visualValues = {});
    visualValues[datasetIndex] = value;
  }
}
function getFirstScaleId(chart, axis) {
  var scales = chart.scales;
  return Object.keys(scales).filter(function (key) {
    return scales[key].axis === axis;
  }).shift();
}
function createDatasetContext(parent, index) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["j"])(parent, {
    active: false,
    dataset: undefined,
    datasetIndex: index,
    index: index,
    mode: 'default',
    type: 'dataset'
  });
}
function createDataContext(parent, index, element) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["j"])(parent, {
    active: false,
    dataIndex: index,
    parsed: undefined,
    raw: undefined,
    element: element,
    index: index,
    mode: 'default',
    type: 'data'
  });
}
function clearStacks(meta, items) {
  var datasetIndex = meta.controller.index;
  var axis = meta.vScale && meta.vScale.axis;
  if (!axis) {
    return;
  }
  items = items || meta._parsed;
  for (var _iterator2 = _createForOfIteratorHelperLoose(items), _step2; !(_step2 = _iterator2()).done;) {
    var parsed = _step2.value;
    var stacks = parsed._stacks;
    if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) {
      return;
    }
    delete stacks[axis][datasetIndex];
    if (stacks[axis]._visualValues !== undefined && stacks[axis]._visualValues[datasetIndex] !== undefined) {
      delete stacks[axis]._visualValues[datasetIndex];
    }
  }
}
var isDirectUpdateMode = function isDirectUpdateMode(mode) {
  return mode === 'reset' || mode === 'none';
};
var cloneIfNotShared = function cloneIfNotShared(cached, shared) {
  return shared ? cached : Object.assign({}, cached);
};
var createStack = function createStack(canStack, meta, chart) {
  return canStack && !meta.hidden && meta._stacked && {
    keys: getSortedDatasetIndices(chart, true),
    values: null
  };
};
var DatasetController = /*#__PURE__*/function () {
  function DatasetController(chart, datasetIndex) {
    this.chart = chart;
    this._ctx = chart.ctx;
    this.index = datasetIndex;
    this._cachedDataOpts = {};
    this._cachedMeta = this.getMeta();
    this._type = this._cachedMeta.type;
    this.options = undefined;
    this._parsing = false;
    this._data = undefined;
    this._objectData = undefined;
    this._sharedOptions = undefined;
    this._drawStart = undefined;
    this._drawCount = undefined;
    this.enableOptionSharing = false;
    this.supportsDecimation = false;
    this.$context = undefined;
    this._syncList = [];
    this.datasetElementType = (this instanceof DatasetController ? this.constructor : void 0).datasetElementType;
    this.dataElementType = (this instanceof DatasetController ? this.constructor : void 0).dataElementType;
    this.initialize();
  }
  var _proto4 = DatasetController.prototype;
  _proto4.initialize = function initialize() {
    var meta = this._cachedMeta;
    this.configure();
    this.linkScales();
    meta._stacked = isStacked(meta.vScale, meta);
    this.addElements();
    if (this.options.fill && !this.chart.isPluginEnabled('filler')) {
      console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
    }
  };
  _proto4.updateIndex = function updateIndex(datasetIndex) {
    if (this.index !== datasetIndex) {
      clearStacks(this._cachedMeta);
    }
    this.index = datasetIndex;
  };
  _proto4.linkScales = function linkScales() {
    var chart = this.chart;
    var meta = this._cachedMeta;
    var dataset = this.getDataset();
    var chooseId = function chooseId(axis, x, y, r) {
      return axis === 'x' ? x : axis === 'r' ? r : y;
    };
    var xid = meta.xAxisID = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(dataset.xAxisID, getFirstScaleId(chart, 'x'));
    var yid = meta.yAxisID = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(dataset.yAxisID, getFirstScaleId(chart, 'y'));
    var rid = meta.rAxisID = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(dataset.rAxisID, getFirstScaleId(chart, 'r'));
    var indexAxis = meta.indexAxis;
    var iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
    var vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
    meta.xScale = this.getScaleForId(xid);
    meta.yScale = this.getScaleForId(yid);
    meta.rScale = this.getScaleForId(rid);
    meta.iScale = this.getScaleForId(iid);
    meta.vScale = this.getScaleForId(vid);
  };
  _proto4.getDataset = function getDataset() {
    return this.chart.data.datasets[this.index];
  };
  _proto4.getMeta = function getMeta() {
    return this.chart.getDatasetMeta(this.index);
  };
  _proto4.getScaleForId = function getScaleForId(scaleID) {
    return this.chart.scales[scaleID];
  };
  _proto4._getOtherScale = function _getOtherScale(scale) {
    var meta = this._cachedMeta;
    return scale === meta.iScale ? meta.vScale : meta.iScale;
  };
  _proto4.reset = function reset() {
    this._update('reset');
  };
  _proto4._destroy = function _destroy() {
    var meta = this._cachedMeta;
    if (this._data) {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["u"])(this._data, this);
    }
    if (meta._stacked) {
      clearStacks(meta);
    }
  };
  _proto4._dataCheck = function _dataCheck() {
    var dataset = this.getDataset();
    var data = dataset.data || (dataset.data = []);
    var _data = this._data;
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(data)) {
      var meta = this._cachedMeta;
      this._data = convertObjectDataToArray(data, meta);
    } else if (_data !== data) {
      if (_data) {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["u"])(_data, this);
        var _meta = this._cachedMeta;
        clearStacks(_meta);
        _meta._parsed = [];
      }
      if (data && Object.isExtensible(data)) {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["l"])(data, this);
      }
      this._syncList = [];
      this._data = data;
    }
  };
  _proto4.addElements = function addElements() {
    var meta = this._cachedMeta;
    this._dataCheck();
    if (this.datasetElementType) {
      meta.dataset = new this.datasetElementType();
    }
  };
  _proto4.buildOrUpdateElements = function buildOrUpdateElements(resetNewElements) {
    var meta = this._cachedMeta;
    var dataset = this.getDataset();
    var stackChanged = false;
    this._dataCheck();
    var oldStacked = meta._stacked;
    meta._stacked = isStacked(meta.vScale, meta);
    if (meta.stack !== dataset.stack) {
      stackChanged = true;
      clearStacks(meta);
      meta.stack = dataset.stack;
    }
    this._resyncElements(resetNewElements);
    if (stackChanged || oldStacked !== meta._stacked) {
      updateStacks(this, meta._parsed);
      meta._stacked = isStacked(meta.vScale, meta);
    }
  };
  _proto4.configure = function configure() {
    var config = this.chart.config;
    var scopeKeys = config.datasetScopeKeys(this._type);
    var scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
    this.options = config.createResolver(scopes, this.getContext());
    this._parsing = this.options.parsing;
    this._cachedDataOpts = {};
  };
  _proto4.parse = function parse(start, count) {
    var meta = this._cachedMeta,
      data = this._data;
    var iScale = meta.iScale,
      _stacked = meta._stacked;
    var iAxis = iScale.axis;
    var sorted = start === 0 && count === data.length ? true : meta._sorted;
    var prev = start > 0 && meta._parsed[start - 1];
    var i, cur, parsed;
    if (this._parsing === false) {
      meta._parsed = data;
      meta._sorted = true;
      parsed = data;
    } else {
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["b"])(data[start])) {
        parsed = this.parseArrayData(meta, data, start, count);
      } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(data[start])) {
        parsed = this.parseObjectData(meta, data, start, count);
      } else {
        parsed = this.parsePrimitiveData(meta, data, start, count);
      }
      var isNotInOrderComparedToPrev = function isNotInOrderComparedToPrev() {
        return cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
      };
      for (i = 0; i < count; ++i) {
        meta._parsed[i + start] = cur = parsed[i];
        if (sorted) {
          if (isNotInOrderComparedToPrev()) {
            sorted = false;
          }
          prev = cur;
        }
      }
      meta._sorted = sorted;
    }
    if (_stacked) {
      updateStacks(this, parsed);
    }
  };
  _proto4.parsePrimitiveData = function parsePrimitiveData(meta, data, start, count) {
    var iScale = meta.iScale,
      vScale = meta.vScale;
    var iAxis = iScale.axis;
    var vAxis = vScale.axis;
    var labels = iScale.getLabels();
    var singleScale = iScale === vScale;
    var parsed = new Array(count);
    var i, ilen, index;
    for (i = 0, ilen = count; i < ilen; ++i) {
      var _parsed$i;
      index = i + start;
      parsed[i] = (_parsed$i = {}, _parsed$i[iAxis] = singleScale || iScale.parse(labels[index], index), _parsed$i[vAxis] = vScale.parse(data[index], index), _parsed$i);
    }
    return parsed;
  };
  _proto4.parseArrayData = function parseArrayData(meta, data, start, count) {
    var xScale = meta.xScale,
      yScale = meta.yScale;
    var parsed = new Array(count);
    var i, ilen, index, item;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parse(item[0], index),
        y: yScale.parse(item[1], index)
      };
    }
    return parsed;
  };
  _proto4.parseObjectData = function parseObjectData(meta, data, start, count) {
    var xScale = meta.xScale,
      yScale = meta.yScale;
    var _this$_parsing = this._parsing,
      _this$_parsing$xAxisK = _this$_parsing.xAxisKey,
      xAxisKey = _this$_parsing$xAxisK === void 0 ? 'x' : _this$_parsing$xAxisK,
      _this$_parsing$yAxisK = _this$_parsing.yAxisKey,
      yAxisKey = _this$_parsing$yAxisK === void 0 ? 'y' : _this$_parsing$yAxisK;
    var parsed = new Array(count);
    var i, ilen, index, item;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parse(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["f"])(item, xAxisKey), index),
        y: yScale.parse(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["f"])(item, yAxisKey), index)
      };
    }
    return parsed;
  };
  _proto4.getParsed = function getParsed(index) {
    return this._cachedMeta._parsed[index];
  };
  _proto4.getDataElement = function getDataElement(index) {
    return this._cachedMeta.data[index];
  };
  _proto4.applyStack = function applyStack(scale, parsed, mode) {
    var chart = this.chart;
    var meta = this._cachedMeta;
    var value = parsed[scale.axis];
    var stack = {
      keys: getSortedDatasetIndices(chart, true),
      values: parsed._stacks[scale.axis]._visualValues
    };
    return _applyStack(stack, value, meta.index, {
      mode: mode
    });
  };
  _proto4.updateRangeFromParsed = function updateRangeFromParsed(range, scale, parsed, stack) {
    var parsedValue = parsed[scale.axis];
    var value = parsedValue === null ? NaN : parsedValue;
    var values = stack && parsed._stacks[scale.axis];
    if (stack && values) {
      stack.values = values;
      value = _applyStack(stack, parsedValue, this._cachedMeta.index);
    }
    range.min = Math.min(range.min, value);
    range.max = Math.max(range.max, value);
  };
  _proto4.getMinMax = function getMinMax(scale, canStack) {
    var meta = this._cachedMeta;
    var _parsed = meta._parsed;
    var sorted = meta._sorted && scale === meta.iScale;
    var ilen = _parsed.length;
    var otherScale = this._getOtherScale(scale);
    var stack = createStack(canStack, meta, this.chart);
    var range = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    var _getUserBounds = getUserBounds(otherScale),
      otherMin = _getUserBounds.min,
      otherMax = _getUserBounds.max;
    var i, parsed;
    function _skip() {
      parsed = _parsed[i];
      var otherValue = parsed[otherScale.axis];
      return !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
    }
    for (i = 0; i < ilen; ++i) {
      if (_skip()) {
        continue;
      }
      this.updateRangeFromParsed(range, scale, parsed, stack);
      if (sorted) {
        break;
      }
    }
    if (sorted) {
      for (i = ilen - 1; i >= 0; --i) {
        if (_skip()) {
          continue;
        }
        this.updateRangeFromParsed(range, scale, parsed, stack);
        break;
      }
    }
    return range;
  };
  _proto4.getAllParsedValues = function getAllParsedValues(scale) {
    var parsed = this._cachedMeta._parsed;
    var values = [];
    var i, ilen, value;
    for (i = 0, ilen = parsed.length; i < ilen; ++i) {
      value = parsed[i][scale.axis];
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(value)) {
        values.push(value);
      }
    }
    return values;
  };
  _proto4.getMaxOverflow = function getMaxOverflow() {
    return false;
  };
  _proto4.getLabelAndValue = function getLabelAndValue(index) {
    var meta = this._cachedMeta;
    var iScale = meta.iScale;
    var vScale = meta.vScale;
    var parsed = this.getParsed(index);
    return {
      label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
      value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
    };
  };
  _proto4._update = function _update(mode) {
    var meta = this._cachedMeta;
    this.update(mode || 'default');
    meta._clip = toClip(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
  };
  _proto4.update = function update(mode) {};
  _proto4.draw = function draw() {
    var ctx = this._ctx;
    var chart = this.chart;
    var meta = this._cachedMeta;
    var elements = meta.data || [];
    var area = chart.chartArea;
    var active = [];
    var start = this._drawStart || 0;
    var count = this._drawCount || elements.length - start;
    var drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
    var i;
    if (meta.dataset) {
      meta.dataset.draw(ctx, area, start, count);
    }
    for (i = start; i < start + count; ++i) {
      var element = elements[i];
      if (element.hidden) {
        continue;
      }
      if (element.active && drawActiveElementsOnTop) {
        active.push(element);
      } else {
        element.draw(ctx, area);
      }
    }
    for (i = 0; i < active.length; ++i) {
      active[i].draw(ctx, area);
    }
  };
  _proto4.getStyle = function getStyle(index, active) {
    var mode = active ? 'active' : 'default';
    return index === undefined && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
  };
  _proto4.getContext = function getContext(index, active, mode) {
    var dataset = this.getDataset();
    var context;
    if (index >= 0 && index < this._cachedMeta.data.length) {
      var element = this._cachedMeta.data[index];
      context = element.$context || (element.$context = createDataContext(this.getContext(), index, element));
      context.parsed = this.getParsed(index);
      context.raw = dataset.data[index];
      context.index = context.dataIndex = index;
    } else {
      context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
      context.dataset = dataset;
      context.index = context.datasetIndex = this.index;
    }
    context.active = !!active;
    context.mode = mode;
    return context;
  };
  _proto4.resolveDatasetElementOptions = function resolveDatasetElementOptions(mode) {
    return this._resolveElementOptions(this.datasetElementType.id, mode);
  };
  _proto4.resolveDataElementOptions = function resolveDataElementOptions(index, mode) {
    return this._resolveElementOptions(this.dataElementType.id, mode, index);
  };
  _proto4._resolveElementOptions = function _resolveElementOptions(elementType, mode, index) {
    var _this3 = this;
    if (mode === void 0) {
      mode = 'default';
    }
    var active = mode === 'active';
    var cache = this._cachedDataOpts;
    var cacheKey = elementType + '-' + mode;
    var cached = cache[cacheKey];
    var sharing = this.enableOptionSharing && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["h"])(index);
    if (cached) {
      return cloneIfNotShared(cached, sharing);
    }
    var config = this.chart.config;
    var scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
    var prefixes = active ? [elementType + "Hover", 'hover', elementType, ''] : [elementType, ''];
    var scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
    var names = Object.keys(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].elements[elementType]);
    var context = function context() {
      return _this3.getContext(index, active, mode);
    };
    var values = config.resolveNamedOptions(scopes, names, context, prefixes);
    if (values.$shared) {
      values.$shared = sharing;
      cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
    }
    return values;
  };
  _proto4._resolveAnimations = function _resolveAnimations(index, transition, active) {
    var chart = this.chart;
    var cache = this._cachedDataOpts;
    var cacheKey = "animation-" + transition;
    var cached = cache[cacheKey];
    if (cached) {
      return cached;
    }
    var options;
    if (chart.options.animation !== false) {
      var config = this.chart.config;
      var scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
      var scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
      options = config.createResolver(scopes, this.getContext(index, active, transition));
    }
    var animations = new Animations(chart, options && options.animations);
    if (options && options._cacheable) {
      cache[cacheKey] = Object.freeze(animations);
    }
    return animations;
  };
  _proto4.getSharedOptions = function getSharedOptions(options) {
    if (!options.$shared) {
      return;
    }
    return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
  };
  _proto4.includeOptions = function includeOptions(mode, sharedOptions) {
    return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
  };
  _proto4._getSharedOptions = function _getSharedOptions(start, mode) {
    var firstOpts = this.resolveDataElementOptions(start, mode);
    var previouslySharedOptions = this._sharedOptions;
    var sharedOptions = this.getSharedOptions(firstOpts);
    var includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
    this.updateSharedOptions(sharedOptions, mode, firstOpts);
    return {
      sharedOptions: sharedOptions,
      includeOptions: includeOptions
    };
  };
  _proto4.updateElement = function updateElement(element, index, properties, mode) {
    if (isDirectUpdateMode(mode)) {
      Object.assign(element, properties);
    } else {
      this._resolveAnimations(index, mode).update(element, properties);
    }
  };
  _proto4.updateSharedOptions = function updateSharedOptions(sharedOptions, mode, newOptions) {
    if (sharedOptions && !isDirectUpdateMode(mode)) {
      this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
    }
  };
  _proto4._setStyle = function _setStyle(element, index, mode, active) {
    element.active = active;
    var options = this.getStyle(index, active);
    this._resolveAnimations(index, mode, active).update(element, {
      options: !active && this.getSharedOptions(options) || options
    });
  };
  _proto4.removeHoverStyle = function removeHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', false);
  };
  _proto4.setHoverStyle = function setHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', true);
  };
  _proto4._removeDatasetHoverStyle = function _removeDatasetHoverStyle() {
    var element = this._cachedMeta.dataset;
    if (element) {
      this._setStyle(element, undefined, 'active', false);
    }
  };
  _proto4._setDatasetHoverStyle = function _setDatasetHoverStyle() {
    var element = this._cachedMeta.dataset;
    if (element) {
      this._setStyle(element, undefined, 'active', true);
    }
  };
  _proto4._resyncElements = function _resyncElements(resetNewElements) {
    var data = this._data;
    var elements = this._cachedMeta.data;
    for (var _iterator3 = _createForOfIteratorHelperLoose(this._syncList), _step3; !(_step3 = _iterator3()).done;) {
      var _step3$value = _step3.value,
        method = _step3$value[0],
        arg1 = _step3$value[1],
        arg2 = _step3$value[2];
      this[method](arg1, arg2);
    }
    this._syncList = [];
    var numMeta = elements.length;
    var numData = data.length;
    var count = Math.min(numData, numMeta);
    if (count) {
      this.parse(0, count);
    }
    if (numData > numMeta) {
      this._insertElements(numMeta, numData - numMeta, resetNewElements);
    } else if (numData < numMeta) {
      this._removeElements(numData, numMeta - numData);
    }
  };
  _proto4._insertElements = function _insertElements(start, count, resetNewElements) {
    if (resetNewElements === void 0) {
      resetNewElements = true;
    }
    var meta = this._cachedMeta;
    var data = meta.data;
    var end = start + count;
    var i;
    var move = function move(arr) {
      arr.length += count;
      for (i = arr.length - 1; i >= end; i--) {
        arr[i] = arr[i - count];
      }
    };
    move(data);
    for (i = start; i < end; ++i) {
      data[i] = new this.dataElementType();
    }
    if (this._parsing) {
      move(meta._parsed);
    }
    this.parse(start, count);
    if (resetNewElements) {
      this.updateElements(data, start, count, 'reset');
    }
  };
  _proto4.updateElements = function updateElements(element, start, count, mode) {};
  _proto4._removeElements = function _removeElements(start, count) {
    var meta = this._cachedMeta;
    if (this._parsing) {
      var removed = meta._parsed.splice(start, count);
      if (meta._stacked) {
        clearStacks(meta, removed);
      }
    }
    meta.data.splice(start, count);
  };
  _proto4._sync = function _sync(args) {
    if (this._parsing) {
      this._syncList.push(args);
    } else {
      var method = args[0],
        arg1 = args[1],
        arg2 = args[2];
      this[method](arg1, arg2);
    }
    this.chart._dataChanges.push([this.index].concat(args));
  };
  _proto4._onDataPush = function _onDataPush() {
    var count = arguments.length;
    this._sync(['_insertElements', this.getDataset().data.length - count, count]);
  };
  _proto4._onDataPop = function _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
  };
  _proto4._onDataShift = function _onDataShift() {
    this._sync(['_removeElements', 0, 1]);
  };
  _proto4._onDataSplice = function _onDataSplice(start, count) {
    if (count) {
      this._sync(['_removeElements', start, count]);
    }
    var newCount = arguments.length - 2;
    if (newCount) {
      this._sync(['_insertElements', start, newCount]);
    }
  };
  _proto4._onDataUnshift = function _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length]);
  };
  return DatasetController;
}();
DatasetController.defaults = {};
DatasetController.datasetElementType = null;
DatasetController.dataElementType = null;
function getAllScaleValues(scale, type) {
  if (!scale._cache.$bar) {
    var visibleMetas = scale.getMatchingVisibleMetas(type);
    var values = [];
    for (var i = 0, ilen = visibleMetas.length; i < ilen; i++) {
      values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
    }
    scale._cache.$bar = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["_"])(values.sort(function (a, b) {
      return a - b;
    }));
  }
  return scale._cache.$bar;
}
function computeMinSampleSize(meta) {
  var scale = meta.iScale;
  var values = getAllScaleValues(scale, meta.type);
  var min = scale._length;
  var i, ilen, curr, prev;
  var updateMinAndPrev = function updateMinAndPrev() {
    if (curr === 32767 || curr === -32768) {
      return;
    }
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["h"])(prev)) {
      min = Math.min(min, Math.abs(curr - prev) || min);
    }
    prev = curr;
  };
  for (i = 0, ilen = values.length; i < ilen; ++i) {
    curr = scale.getPixelForValue(values[i]);
    updateMinAndPrev();
  }
  prev = undefined;
  for (i = 0, ilen = scale.ticks.length; i < ilen; ++i) {
    curr = scale.getPixelForTick(i);
    updateMinAndPrev();
  }
  return min;
}
function computeFitCategoryTraits(index, ruler, options, stackCount) {
  var thickness = options.barThickness;
  var size, ratio;
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(thickness)) {
    size = ruler.min * options.categoryPercentage;
    ratio = options.barPercentage;
  } else {
    size = thickness * stackCount;
    ratio = 1;
  }
  return {
    chunk: size / stackCount,
    ratio: ratio,
    start: ruler.pixels[index] - size / 2
  };
}
function computeFlexCategoryTraits(index, ruler, options, stackCount) {
  var pixels = ruler.pixels;
  var curr = pixels[index];
  var prev = index > 0 ? pixels[index - 1] : null;
  var next = index < pixels.length - 1 ? pixels[index + 1] : null;
  var percent = options.categoryPercentage;
  if (prev === null) {
    prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
  }
  if (next === null) {
    next = curr + curr - prev;
  }
  var start = curr - (curr - Math.min(prev, next)) / 2 * percent;
  var size = Math.abs(next - prev) / 2 * percent;
  return {
    chunk: size / stackCount,
    ratio: options.barPercentage,
    start: start
  };
}
function parseFloatBar(entry, item, vScale, i) {
  var startValue = vScale.parse(entry[0], i);
  var endValue = vScale.parse(entry[1], i);
  var min = Math.min(startValue, endValue);
  var max = Math.max(startValue, endValue);
  var barStart = min;
  var barEnd = max;
  if (Math.abs(min) > Math.abs(max)) {
    barStart = max;
    barEnd = min;
  }
  item[vScale.axis] = barEnd;
  item._custom = {
    barStart: barStart,
    barEnd: barEnd,
    start: startValue,
    end: endValue,
    min: min,
    max: max
  };
}
function parseValue(entry, item, vScale, i) {
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["b"])(entry)) {
    parseFloatBar(entry, item, vScale, i);
  } else {
    item[vScale.axis] = vScale.parse(entry, i);
  }
  return item;
}
function parseArrayOrPrimitive(meta, data, start, count) {
  var iScale = meta.iScale;
  var vScale = meta.vScale;
  var labels = iScale.getLabels();
  var singleScale = iScale === vScale;
  var parsed = [];
  var i, ilen, item, entry;
  for (i = start, ilen = start + count; i < ilen; ++i) {
    entry = data[i];
    item = {};
    item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
    parsed.push(parseValue(entry, item, vScale, i));
  }
  return parsed;
}
function isFloatBar(custom) {
  return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function barSign(size, vScale, actualBase) {
  if (size !== 0) {
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["s"])(size);
  }
  return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function borderProps(properties) {
  var reverse, start, end, top, bottom;
  if (properties.horizontal) {
    reverse = properties.base > properties.x;
    start = 'left';
    end = 'right';
  } else {
    reverse = properties.base < properties.y;
    start = 'bottom';
    end = 'top';
  }
  if (reverse) {
    top = 'end';
    bottom = 'start';
  } else {
    top = 'start';
    bottom = 'end';
  }
  return {
    start: start,
    end: end,
    reverse: reverse,
    top: top,
    bottom: bottom
  };
}
function setBorderSkipped(properties, options, stack, index) {
  var edge = options.borderSkipped;
  var res = {};
  if (!edge) {
    properties.borderSkipped = res;
    return;
  }
  if (edge === true) {
    properties.borderSkipped = {
      top: true,
      right: true,
      bottom: true,
      left: true
    };
    return;
  }
  var _borderProps = borderProps(properties),
    start = _borderProps.start,
    end = _borderProps.end,
    reverse = _borderProps.reverse,
    top = _borderProps.top,
    bottom = _borderProps.bottom;
  if (edge === 'middle' && stack) {
    properties.enableBorderRadius = true;
    if ((stack._top || 0) === index) {
      edge = top;
    } else if ((stack._bottom || 0) === index) {
      edge = bottom;
    } else {
      res[parseEdge(bottom, start, end, reverse)] = true;
      edge = top;
    }
  }
  res[parseEdge(edge, start, end, reverse)] = true;
  properties.borderSkipped = res;
}
function parseEdge(edge, a, b, reverse) {
  if (reverse) {
    edge = swap(edge, a, b);
    edge = startEnd(edge, b, a);
  } else {
    edge = startEnd(edge, a, b);
  }
  return edge;
}
function swap(orig, v1, v2) {
  return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function startEnd(v, start, end) {
  return v === 'start' ? start : v === 'end' ? end : v;
}
function setInflateAmount(properties, _ref, ratio) {
  var inflateAmount = _ref.inflateAmount;
  properties.inflateAmount = inflateAmount === 'auto' ? ratio === 1 ? 0.33 : 0 : inflateAmount;
}
var BarController = /*#__PURE__*/function (_DatasetController2) {
  function BarController() {
    return _DatasetController2.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(BarController, _DatasetController2);
  var _proto5 = BarController.prototype;
  _proto5.parsePrimitiveData = function parsePrimitiveData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  };
  _proto5.parseArrayData = function parseArrayData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  };
  _proto5.parseObjectData = function parseObjectData(meta, data, start, count) {
    var iScale = meta.iScale,
      vScale = meta.vScale;
    var _this$_parsing2 = this._parsing,
      _this$_parsing2$xAxis = _this$_parsing2.xAxisKey,
      xAxisKey = _this$_parsing2$xAxis === void 0 ? 'x' : _this$_parsing2$xAxis,
      _this$_parsing2$yAxis = _this$_parsing2.yAxisKey,
      yAxisKey = _this$_parsing2$yAxis === void 0 ? 'y' : _this$_parsing2$yAxis;
    var iAxisKey = iScale.axis === 'x' ? xAxisKey : yAxisKey;
    var vAxisKey = vScale.axis === 'x' ? xAxisKey : yAxisKey;
    var parsed = [];
    var i, ilen, item, obj;
    for (i = start, ilen = start + count; i < ilen; ++i) {
      obj = data[i];
      item = {};
      item[iScale.axis] = iScale.parse(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["f"])(obj, iAxisKey), i);
      parsed.push(parseValue(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["f"])(obj, vAxisKey), item, vScale, i));
    }
    return parsed;
  };
  _proto5.updateRangeFromParsed = function updateRangeFromParsed(range, scale, parsed, stack) {
    _DatasetController2.prototype.updateRangeFromParsed.call(this, range, scale, parsed, stack);
    var custom = parsed._custom;
    if (custom && scale === this._cachedMeta.vScale) {
      range.min = Math.min(range.min, custom.min);
      range.max = Math.max(range.max, custom.max);
    }
  };
  _proto5.getMaxOverflow = function getMaxOverflow() {
    return 0;
  };
  _proto5.getLabelAndValue = function getLabelAndValue(index) {
    var meta = this._cachedMeta;
    var iScale = meta.iScale,
      vScale = meta.vScale;
    var parsed = this.getParsed(index);
    var custom = parsed._custom;
    var value = isFloatBar(custom) ? '[' + custom.start + ', ' + custom.end + ']' : '' + vScale.getLabelForValue(parsed[vScale.axis]);
    return {
      label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
      value: value
    };
  };
  _proto5.initialize = function initialize() {
    this.enableOptionSharing = true;
    _DatasetController2.prototype.initialize.call(this);
    var meta = this._cachedMeta;
    meta.stack = this.getDataset().stack;
  };
  _proto5.update = function update(mode) {
    var meta = this._cachedMeta;
    this.updateElements(meta.data, 0, meta.data.length, mode);
  };
  _proto5.updateElements = function updateElements(bars, start, count, mode) {
    var reset = mode === 'reset';
    var index = this.index,
      vScale = this._cachedMeta.vScale;
    var base = vScale.getBasePixel();
    var horizontal = vScale.isHorizontal();
    var ruler = this._getRuler();
    var _this$_getSharedOptio = this._getSharedOptions(start, mode),
      sharedOptions = _this$_getSharedOptio.sharedOptions,
      includeOptions = _this$_getSharedOptio.includeOptions;
    for (var i = start; i < start + count; i++) {
      var parsed = this.getParsed(i);
      var vpixels = reset || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(parsed[vScale.axis]) ? {
        base: base,
        head: base
      } : this._calculateBarValuePixels(i);
      var ipixels = this._calculateBarIndexPixels(i, ruler);
      var stack = (parsed._stacks || {})[vScale.axis];
      var properties = {
        horizontal: horizontal,
        base: vpixels.base,
        enableBorderRadius: !stack || isFloatBar(parsed._custom) || index === stack._top || index === stack._bottom,
        x: horizontal ? vpixels.head : ipixels.center,
        y: horizontal ? ipixels.center : vpixels.head,
        height: horizontal ? ipixels.size : Math.abs(vpixels.size),
        width: horizontal ? Math.abs(vpixels.size) : ipixels.size
      };
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? 'active' : mode);
      }
      var options = properties.options || bars[i].options;
      setBorderSkipped(properties, options, stack, index);
      setInflateAmount(properties, options, ruler.ratio);
      this.updateElement(bars[i], i, properties, mode);
    }
  };
  _proto5._getStacks = function _getStacks(last, dataIndex) {
    var iScale = this._cachedMeta.iScale;
    var metasets = iScale.getMatchingVisibleMetas(this._type).filter(function (meta) {
      return meta.controller.options.grouped;
    });
    var stacked = iScale.options.stacked;
    var stacks = [];
    var currentParsed = this._cachedMeta.controller.getParsed(dataIndex);
    var iScaleValue = currentParsed && currentParsed[iScale.axis];
    var skipNull = function skipNull(meta) {
      var parsed = meta._parsed.find(function (item) {
        return item[iScale.axis] === iScaleValue;
      });
      var val = parsed && parsed[meta.vScale.axis];
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(val) || isNaN(val)) {
        return true;
      }
    };
    for (var _iterator4 = _createForOfIteratorHelperLoose(metasets), _step4; !(_step4 = _iterator4()).done;) {
      var meta = _step4.value;
      if (dataIndex !== undefined && skipNull(meta)) {
        continue;
      }
      if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === undefined && meta.stack === undefined) {
        stacks.push(meta.stack);
      }
      if (meta.index === last) {
        break;
      }
    }
    if (!stacks.length) {
      stacks.push(undefined);
    }
    return stacks;
  };
  _proto5._getStackCount = function _getStackCount(index) {
    return this._getStacks(undefined, index).length;
  };
  _proto5._getStackIndex = function _getStackIndex(datasetIndex, name, dataIndex) {
    var stacks = this._getStacks(datasetIndex, dataIndex);
    var index = name !== undefined ? stacks.indexOf(name) : -1;
    return index === -1 ? stacks.length - 1 : index;
  };
  _proto5._getRuler = function _getRuler() {
    var opts = this.options;
    var meta = this._cachedMeta;
    var iScale = meta.iScale;
    var pixels = [];
    var i, ilen;
    for (i = 0, ilen = meta.data.length; i < ilen; ++i) {
      pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
    }
    var barThickness = opts.barThickness;
    var min = barThickness || computeMinSampleSize(meta);
    return {
      min: min,
      pixels: pixels,
      start: iScale._startPixel,
      end: iScale._endPixel,
      stackCount: this._getStackCount(),
      scale: iScale,
      grouped: opts.grouped,
      ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
    };
  };
  _proto5._calculateBarValuePixels = function _calculateBarValuePixels(index) {
    var _this$_cachedMeta = this._cachedMeta,
      vScale = _this$_cachedMeta.vScale,
      _stacked = _this$_cachedMeta._stacked,
      datasetIndex = _this$_cachedMeta.index,
      _this$options = this.options,
      baseValue = _this$options.base,
      minBarLength = _this$options.minBarLength;
    var actualBase = baseValue || 0;
    var parsed = this.getParsed(index);
    var custom = parsed._custom;
    var floating = isFloatBar(custom);
    var value = parsed[vScale.axis];
    var start = 0;
    var length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
    var head, size;
    if (length !== value) {
      start = length - value;
      length = value;
    }
    if (floating) {
      value = custom.barStart;
      length = custom.barEnd - custom.barStart;
      if (value !== 0 && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["s"])(value) !== Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["s"])(custom.barEnd)) {
        start = 0;
      }
      start += value;
    }
    var startValue = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(baseValue) && !floating ? baseValue : start;
    var base = vScale.getPixelForValue(startValue);
    if (this.chart.getDataVisibility(index)) {
      head = vScale.getPixelForValue(start + length);
    } else {
      head = base;
    }
    size = head - base;
    if (Math.abs(size) < minBarLength) {
      size = barSign(size, vScale, actualBase) * minBarLength;
      if (value === actualBase) {
        base -= size / 2;
      }
      var startPixel = vScale.getPixelForDecimal(0);
      var endPixel = vScale.getPixelForDecimal(1);
      var min = Math.min(startPixel, endPixel);
      var max = Math.max(startPixel, endPixel);
      base = Math.max(Math.min(base, max), min);
      head = base + size;
      if (_stacked && !floating) {
        parsed._stacks[vScale.axis]._visualValues[datasetIndex] = vScale.getValueForPixel(head) - vScale.getValueForPixel(base);
      }
    }
    if (base === vScale.getPixelForValue(actualBase)) {
      var halfGrid = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["s"])(size) * vScale.getLineWidthForValue(actualBase) / 2;
      base += halfGrid;
      size -= halfGrid;
    }
    return {
      size: size,
      base: base,
      head: head,
      center: head + size / 2
    };
  };
  _proto5._calculateBarIndexPixels = function _calculateBarIndexPixels(index, ruler) {
    var scale = ruler.scale;
    var options = this.options;
    var skipNull = options.skipNull;
    var maxBarThickness = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(options.maxBarThickness, Infinity);
    var center, size;
    if (ruler.grouped) {
      var stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
      var range = options.barThickness === 'flex' ? computeFlexCategoryTraits(index, ruler, options, stackCount) : computeFitCategoryTraits(index, ruler, options, stackCount);
      var stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : undefined);
      center = range.start + range.chunk * stackIndex + range.chunk / 2;
      size = Math.min(maxBarThickness, range.chunk * range.ratio);
    } else {
      center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
      size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
    }
    return {
      base: center - size / 2,
      head: center + size / 2,
      center: center,
      size: size
    };
  };
  _proto5.draw = function draw() {
    var meta = this._cachedMeta;
    var vScale = meta.vScale;
    var rects = meta.data;
    var ilen = rects.length;
    var i = 0;
    for (; i < ilen; ++i) {
      if (this.getParsed(i)[vScale.axis] !== null && !rects[i].hidden) {
        rects[i].draw(this._ctx);
      }
    }
  };
  return BarController;
}(DatasetController);
BarController.id = 'bar';
BarController.defaults = {
  datasetElementType: false,
  dataElementType: 'bar',
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: true,
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'base', 'width', 'height']
    }
  }
};
BarController.overrides = {
  scales: {
    _index_: {
      type: 'category',
      offset: true,
      grid: {
        offset: true
      }
    },
    _value_: {
      type: 'linear',
      beginAtZero: true
    }
  }
};
var BubbleController = /*#__PURE__*/function (_DatasetController3) {
  function BubbleController() {
    return _DatasetController3.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(BubbleController, _DatasetController3);
  var _proto6 = BubbleController.prototype;
  _proto6.initialize = function initialize() {
    this.enableOptionSharing = true;
    _DatasetController3.prototype.initialize.call(this);
  };
  _proto6.parsePrimitiveData = function parsePrimitiveData(meta, data, start, count) {
    var parsed = _DatasetController3.prototype.parsePrimitiveData.call(this, meta, data, start, count);
    for (var i = 0; i < parsed.length; i++) {
      parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
    }
    return parsed;
  };
  _proto6.parseArrayData = function parseArrayData(meta, data, start, count) {
    var parsed = _DatasetController3.prototype.parseArrayData.call(this, meta, data, start, count);
    for (var i = 0; i < parsed.length; i++) {
      var item = data[start + i];
      parsed[i]._custom = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(item[2], this.resolveDataElementOptions(i + start).radius);
    }
    return parsed;
  };
  _proto6.parseObjectData = function parseObjectData(meta, data, start, count) {
    var parsed = _DatasetController3.prototype.parseObjectData.call(this, meta, data, start, count);
    for (var i = 0; i < parsed.length; i++) {
      var item = data[start + i];
      parsed[i]._custom = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
    }
    return parsed;
  };
  _proto6.getMaxOverflow = function getMaxOverflow() {
    var data = this._cachedMeta.data;
    var max = 0;
    for (var i = data.length - 1; i >= 0; --i) {
      max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
    }
    return max > 0 && max;
  };
  _proto6.getLabelAndValue = function getLabelAndValue(index) {
    var meta = this._cachedMeta;
    var labels = this.chart.data.labels || [];
    var xScale = meta.xScale,
      yScale = meta.yScale;
    var parsed = this.getParsed(index);
    var x = xScale.getLabelForValue(parsed.x);
    var y = yScale.getLabelForValue(parsed.y);
    var r = parsed._custom;
    return {
      label: labels[index] || '',
      value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
    };
  };
  _proto6.update = function update(mode) {
    var points = this._cachedMeta.data;
    this.updateElements(points, 0, points.length, mode);
  };
  _proto6.updateElements = function updateElements(points, start, count, mode) {
    var reset = mode === 'reset';
    var _this$_cachedMeta2 = this._cachedMeta,
      iScale = _this$_cachedMeta2.iScale,
      vScale = _this$_cachedMeta2.vScale;
    var _this$_getSharedOptio2 = this._getSharedOptions(start, mode),
      sharedOptions = _this$_getSharedOptio2.sharedOptions,
      includeOptions = _this$_getSharedOptio2.includeOptions;
    var iAxis = iScale.axis;
    var vAxis = vScale.axis;
    for (var i = start; i < start + count; i++) {
      var point = points[i];
      var parsed = !reset && this.getParsed(i);
      var properties = {};
      var iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
      var vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
      properties.skip = isNaN(iPixel) || isNaN(vPixel);
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
        if (reset) {
          properties.options.radius = 0;
        }
      }
      this.updateElement(point, i, properties, mode);
    }
  };
  _proto6.resolveDataElementOptions = function resolveDataElementOptions(index, mode) {
    var parsed = this.getParsed(index);
    var values = _DatasetController3.prototype.resolveDataElementOptions.call(this, index, mode);
    if (values.$shared) {
      values = Object.assign({}, values, {
        $shared: false
      });
    }
    var radius = values.radius;
    if (mode !== 'active') {
      values.radius = 0;
    }
    values.radius += Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(parsed && parsed._custom, radius);
    return values;
  };
  return BubbleController;
}(DatasetController);
BubbleController.id = 'bubble';
BubbleController.defaults = {
  datasetElementType: false,
  dataElementType: 'point',
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'borderWidth', 'radius']
    }
  }
};
BubbleController.overrides = {
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  }
};
function getRatioAndOffset(rotation, circumference, cutout) {
  var ratioX = 1;
  var ratioY = 1;
  var offsetX = 0;
  var offsetY = 0;
  if (circumference < _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["T"]) {
    var startAngle = rotation;
    var endAngle = startAngle + circumference;
    var startX = Math.cos(startAngle);
    var startY = Math.sin(startAngle);
    var endX = Math.cos(endAngle);
    var endY = Math.sin(endAngle);
    var calcMax = function calcMax(angle, a, b) {
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["p"])(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
    };
    var calcMin = function calcMin(angle, a, b) {
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["p"])(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
    };
    var maxX = calcMax(0, startX, endX);
    var maxY = calcMax(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["H"], startY, endY);
    var minX = calcMin(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["P"], startX, endX);
    var minY = calcMin(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["P"] + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["H"], startY, endY);
    ratioX = (maxX - minX) / 2;
    ratioY = (maxY - minY) / 2;
    offsetX = -(maxX + minX) / 2;
    offsetY = -(maxY + minY) / 2;
  }
  return {
    ratioX: ratioX,
    ratioY: ratioY,
    offsetX: offsetX,
    offsetY: offsetY
  };
}
var DoughnutController = /*#__PURE__*/function (_DatasetController4) {
  function DoughnutController(chart, datasetIndex) {
    var _this4;
    _this4 = _DatasetController4.call(this, chart, datasetIndex) || this;
    _this4.enableOptionSharing = true;
    _this4.innerRadius = undefined;
    _this4.outerRadius = undefined;
    _this4.offsetX = undefined;
    _this4.offsetY = undefined;
    return _this4;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(DoughnutController, _DatasetController4);
  var _proto7 = DoughnutController.prototype;
  _proto7.linkScales = function linkScales() {};
  _proto7.parse = function parse(start, count) {
    var data = this.getDataset().data;
    var meta = this._cachedMeta;
    if (this._parsing === false) {
      meta._parsed = data;
    } else {
      var getter = function getter(i) {
        return +data[i];
      };
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(data[start])) {
        var _this$_parsing$key = this._parsing.key,
          key = _this$_parsing$key === void 0 ? 'value' : _this$_parsing$key;
        getter = function getter(i) {
          return +Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["f"])(data[i], key);
        };
      }
      var i, ilen;
      for (i = start, ilen = start + count; i < ilen; ++i) {
        meta._parsed[i] = getter(i);
      }
    }
  };
  _proto7._getRotation = function _getRotation() {
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["t"])(this.options.rotation - 90);
  };
  _proto7._getCircumference = function _getCircumference() {
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["t"])(this.options.circumference);
  };
  _proto7._getRotationExtents = function _getRotationExtents() {
    var min = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["T"];
    var max = -_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["T"];
    for (var i = 0; i < this.chart.data.datasets.length; ++i) {
      if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
        var controller = this.chart.getDatasetMeta(i).controller;
        var rotation = controller._getRotation();
        var circumference = controller._getCircumference();
        min = Math.min(min, rotation);
        max = Math.max(max, rotation + circumference);
      }
    }
    return {
      rotation: min,
      circumference: max - min
    };
  };
  _proto7.update = function update(mode) {
    var chart = this.chart;
    var chartArea = chart.chartArea;
    var meta = this._cachedMeta;
    var arcs = meta.data;
    var spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
    var maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
    var cutout = Math.min(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["m"])(this.options.cutout, maxSize), 1);
    var chartWeight = this._getRingWeight(this.index);
    var _this$_getRotationExt = this._getRotationExtents(),
      circumference = _this$_getRotationExt.circumference,
      rotation = _this$_getRotationExt.rotation;
    var _getRatioAndOffset = getRatioAndOffset(rotation, circumference, cutout),
      ratioX = _getRatioAndOffset.ratioX,
      ratioY = _getRatioAndOffset.ratioY,
      offsetX = _getRatioAndOffset.offsetX,
      offsetY = _getRatioAndOffset.offsetY;
    var maxWidth = (chartArea.width - spacing) / ratioX;
    var maxHeight = (chartArea.height - spacing) / ratioY;
    var maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
    var outerRadius = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["n"])(this.options.radius, maxRadius);
    var innerRadius = Math.max(outerRadius * cutout, 0);
    var radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
    this.offsetX = offsetX * outerRadius;
    this.offsetY = offsetY * outerRadius;
    meta.total = this.calculateTotal();
    this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
    this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
    this.updateElements(arcs, 0, arcs.length, mode);
  };
  _proto7._circumference = function _circumference(i, reset) {
    var opts = this.options;
    var meta = this._cachedMeta;
    var circumference = this._getCircumference();
    if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) {
      return 0;
    }
    return this.calculateCircumference(meta._parsed[i] * circumference / _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["T"]);
  };
  _proto7.updateElements = function updateElements(arcs, start, count, mode) {
    var reset = mode === 'reset';
    var chart = this.chart;
    var chartArea = chart.chartArea;
    var opts = chart.options;
    var animationOpts = opts.animation;
    var centerX = (chartArea.left + chartArea.right) / 2;
    var centerY = (chartArea.top + chartArea.bottom) / 2;
    var animateScale = reset && animationOpts.animateScale;
    var innerRadius = animateScale ? 0 : this.innerRadius;
    var outerRadius = animateScale ? 0 : this.outerRadius;
    var _this$_getSharedOptio3 = this._getSharedOptions(start, mode),
      sharedOptions = _this$_getSharedOptio3.sharedOptions,
      includeOptions = _this$_getSharedOptio3.includeOptions;
    var startAngle = this._getRotation();
    var i;
    for (i = 0; i < start; ++i) {
      startAngle += this._circumference(i, reset);
    }
    for (i = start; i < start + count; ++i) {
      var circumference = this._circumference(i, reset);
      var arc = arcs[i];
      var properties = {
        x: centerX + this.offsetX,
        y: centerY + this.offsetY,
        startAngle: startAngle,
        endAngle: startAngle + circumference,
        circumference: circumference,
        outerRadius: outerRadius,
        innerRadius: innerRadius
      };
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? 'active' : mode);
      }
      startAngle += circumference;
      this.updateElement(arc, i, properties, mode);
    }
  };
  _proto7.calculateTotal = function calculateTotal() {
    var meta = this._cachedMeta;
    var metaData = meta.data;
    var total = 0;
    var i;
    for (i = 0; i < metaData.length; i++) {
      var value = meta._parsed[i];
      if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) {
        total += Math.abs(value);
      }
    }
    return total;
  };
  _proto7.calculateCircumference = function calculateCircumference(value) {
    var total = this._cachedMeta.total;
    if (total > 0 && !isNaN(value)) {
      return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["T"] * (Math.abs(value) / total);
    }
    return 0;
  };
  _proto7.getLabelAndValue = function getLabelAndValue(index) {
    var meta = this._cachedMeta;
    var chart = this.chart;
    var labels = chart.data.labels || [];
    var value = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["o"])(meta._parsed[index], chart.options.locale);
    return {
      label: labels[index] || '',
      value: value
    };
  };
  _proto7.getMaxBorderWidth = function getMaxBorderWidth(arcs) {
    var max = 0;
    var chart = this.chart;
    var i, ilen, meta, controller, options;
    if (!arcs) {
      for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          meta = chart.getDatasetMeta(i);
          arcs = meta.data;
          controller = meta.controller;
          break;
        }
      }
    }
    if (!arcs) {
      return 0;
    }
    for (i = 0, ilen = arcs.length; i < ilen; ++i) {
      options = controller.resolveDataElementOptions(i);
      if (options.borderAlign !== 'inner') {
        max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
      }
    }
    return max;
  };
  _proto7.getMaxOffset = function getMaxOffset(arcs) {
    var max = 0;
    for (var i = 0, ilen = arcs.length; i < ilen; ++i) {
      var options = this.resolveDataElementOptions(i);
      max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
    }
    return max;
  };
  _proto7._getRingWeightOffset = function _getRingWeightOffset(datasetIndex) {
    var ringWeightOffset = 0;
    for (var i = 0; i < datasetIndex; ++i) {
      if (this.chart.isDatasetVisible(i)) {
        ringWeightOffset += this._getRingWeight(i);
      }
    }
    return ringWeightOffset;
  };
  _proto7._getRingWeight = function _getRingWeight(datasetIndex) {
    return Math.max(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(this.chart.data.datasets[datasetIndex].weight, 1), 0);
  };
  _proto7._getVisibleDatasetWeightTotal = function _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  };
  return DoughnutController;
}(DatasetController);
DoughnutController.id = 'doughnut';
DoughnutController.defaults = {
  datasetElementType: false,
  dataElementType: 'arc',
  animation: {
    animateRotate: true,
    animateScale: false
  },
  animations: {
    numbers: {
      type: 'number',
      properties: ['circumference', 'endAngle', 'innerRadius', 'outerRadius', 'startAngle', 'x', 'y', 'offset', 'borderWidth', 'spacing']
    }
  },
  cutout: '50%',
  rotation: 0,
  circumference: 360,
  radius: '100%',
  spacing: 0,
  indexAxis: 'r'
};
DoughnutController.descriptors = {
  _scriptable: function _scriptable(name) {
    return name !== 'spacing';
  },
  _indexable: function _indexable(name) {
    return name !== 'spacing' && !name.startsWith('borderDash') && !name.startsWith('hoverBorderDash');
  }
};
DoughnutController.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels: function generateLabels(chart) {
          var data = chart.data;
          if (data.labels.length && data.datasets.length) {
            var _chart$legend$options2 = chart.legend.options.labels,
              pointStyle = _chart$legend$options2.pointStyle,
              color = _chart$legend$options2.color;
            return data.labels.map(function (label, i) {
              var meta = chart.getDatasetMeta(0);
              var style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                fontColor: color,
                lineWidth: style.borderWidth,
                pointStyle: pointStyle,
                hidden: !chart.getDataVisibility(i),
                index: i
              };
            });
          }
          return [];
        }
      },
      onClick: function onClick(e, legendItem, legend) {
        legend.chart.toggleDataVisibility(legendItem.index);
        legend.chart.update();
      }
    }
  }
};
var LineController = /*#__PURE__*/function (_DatasetController5) {
  function LineController() {
    return _DatasetController5.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(LineController, _DatasetController5);
  var _proto8 = LineController.prototype;
  _proto8.initialize = function initialize() {
    this.enableOptionSharing = true;
    this.supportsDecimation = true;
    _DatasetController5.prototype.initialize.call(this);
  };
  _proto8.update = function update(mode) {
    var meta = this._cachedMeta;
    var line = meta.dataset,
      _meta$data = meta.data,
      points = _meta$data === void 0 ? [] : _meta$data,
      _dataset = meta._dataset;
    var animationsDisabled = this.chart._animationsDisabled;
    var _getStartAndCountOfVi = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["q"])(meta, points, animationsDisabled),
      start = _getStartAndCountOfVi.start,
      count = _getStartAndCountOfVi.count;
    this._drawStart = start;
    this._drawCount = count;
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["w"])(meta)) {
      start = 0;
      count = points.length;
    }
    line._chart = this.chart;
    line._datasetIndex = this.index;
    line._decimated = !!_dataset._decimated;
    line.points = points;
    var options = this.resolveDatasetElementOptions(mode);
    if (!this.options.showLine) {
      options.borderWidth = 0;
    }
    options.segment = this.options.segment;
    this.updateElement(line, undefined, {
      animated: !animationsDisabled,
      options: options
    }, mode);
    this.updateElements(points, start, count, mode);
  };
  _proto8.updateElements = function updateElements(points, start, count, mode) {
    var reset = mode === 'reset';
    var _this$_cachedMeta3 = this._cachedMeta,
      iScale = _this$_cachedMeta3.iScale,
      vScale = _this$_cachedMeta3.vScale,
      _stacked = _this$_cachedMeta3._stacked,
      _dataset = _this$_cachedMeta3._dataset;
    var _this$_getSharedOptio4 = this._getSharedOptions(start, mode),
      sharedOptions = _this$_getSharedOptio4.sharedOptions,
      includeOptions = _this$_getSharedOptio4.includeOptions;
    var iAxis = iScale.axis;
    var vAxis = vScale.axis;
    var _this$options2 = this.options,
      spanGaps = _this$options2.spanGaps,
      segment = _this$options2.segment;
    var maxGapLength = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["x"])(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
    var directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
    var end = start + count;
    var pointsCount = points.length;
    var prevParsed = start > 0 && this.getParsed(start - 1);
    for (var i = 0; i < pointsCount; ++i) {
      var point = points[i];
      var properties = directUpdate ? point : {};
      if (i < start || i >= end) {
        properties.skip = true;
        continue;
      }
      var parsed = this.getParsed(i);
      var nullData = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(parsed[vAxis]);
      var iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
      var vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
      properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
      properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
      if (segment) {
        properties.parsed = parsed;
        properties.raw = _dataset.data[i];
      }
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
      }
      if (!directUpdate) {
        this.updateElement(point, i, properties, mode);
      }
      prevParsed = parsed;
    }
  };
  _proto8.getMaxOverflow = function getMaxOverflow() {
    var meta = this._cachedMeta;
    var dataset = meta.dataset;
    var border = dataset.options && dataset.options.borderWidth || 0;
    var data = meta.data || [];
    if (!data.length) {
      return border;
    }
    var firstPoint = data[0].size(this.resolveDataElementOptions(0));
    var lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
    return Math.max(border, firstPoint, lastPoint) / 2;
  };
  _proto8.draw = function draw() {
    var meta = this._cachedMeta;
    meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
    _DatasetController5.prototype.draw.call(this);
  };
  return LineController;
}(DatasetController);
LineController.id = 'line';
LineController.defaults = {
  datasetElementType: 'line',
  dataElementType: 'point',
  showLine: true,
  spanGaps: false
};
LineController.overrides = {
  scales: {
    _index_: {
      type: 'category'
    },
    _value_: {
      type: 'linear'
    }
  }
};
var PolarAreaController = /*#__PURE__*/function (_DatasetController6) {
  function PolarAreaController(chart, datasetIndex) {
    var _this5;
    _this5 = _DatasetController6.call(this, chart, datasetIndex) || this;
    _this5.innerRadius = undefined;
    _this5.outerRadius = undefined;
    return _this5;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(PolarAreaController, _DatasetController6);
  var _proto9 = PolarAreaController.prototype;
  _proto9.getLabelAndValue = function getLabelAndValue(index) {
    var meta = this._cachedMeta;
    var chart = this.chart;
    var labels = chart.data.labels || [];
    var value = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["o"])(meta._parsed[index].r, chart.options.locale);
    return {
      label: labels[index] || '',
      value: value
    };
  };
  _proto9.parseObjectData = function parseObjectData(meta, data, start, count) {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["y"].bind(this)(meta, data, start, count);
  };
  _proto9.update = function update(mode) {
    var arcs = this._cachedMeta.data;
    this._updateRadius();
    this.updateElements(arcs, 0, arcs.length, mode);
  };
  _proto9.getMinMax = function getMinMax() {
    var _this6 = this;
    var meta = this._cachedMeta;
    var range = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    meta.data.forEach(function (element, index) {
      var parsed = _this6.getParsed(index).r;
      if (!isNaN(parsed) && _this6.chart.getDataVisibility(index)) {
        if (parsed < range.min) {
          range.min = parsed;
        }
        if (parsed > range.max) {
          range.max = parsed;
        }
      }
    });
    return range;
  };
  _proto9._updateRadius = function _updateRadius() {
    var chart = this.chart;
    var chartArea = chart.chartArea;
    var opts = chart.options;
    var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
    var outerRadius = Math.max(minSize / 2, 0);
    var innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
    var radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
    this.outerRadius = outerRadius - radiusLength * this.index;
    this.innerRadius = this.outerRadius - radiusLength;
  };
  _proto9.updateElements = function updateElements(arcs, start, count, mode) {
    var reset = mode === 'reset';
    var chart = this.chart;
    var opts = chart.options;
    var animationOpts = opts.animation;
    var scale = this._cachedMeta.rScale;
    var centerX = scale.xCenter;
    var centerY = scale.yCenter;
    var datasetStartAngle = scale.getIndexAngle(0) - 0.5 * _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["P"];
    var angle = datasetStartAngle;
    var i;
    var defaultAngle = 360 / this.countVisibleElements();
    for (i = 0; i < start; ++i) {
      angle += this._computeAngle(i, mode, defaultAngle);
    }
    for (i = start; i < start + count; i++) {
      var arc = arcs[i];
      var startAngle = angle;
      var endAngle = angle + this._computeAngle(i, mode, defaultAngle);
      var outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(this.getParsed(i).r) : 0;
      angle = endAngle;
      if (reset) {
        if (animationOpts.animateScale) {
          outerRadius = 0;
        }
        if (animationOpts.animateRotate) {
          startAngle = endAngle = datasetStartAngle;
        }
      }
      var properties = {
        x: centerX,
        y: centerY,
        innerRadius: 0,
        outerRadius: outerRadius,
        startAngle: startAngle,
        endAngle: endAngle,
        options: this.resolveDataElementOptions(i, arc.active ? 'active' : mode)
      };
      this.updateElement(arc, i, properties, mode);
    }
  };
  _proto9.countVisibleElements = function countVisibleElements() {
    var _this7 = this;
    var meta = this._cachedMeta;
    var count = 0;
    meta.data.forEach(function (element, index) {
      if (!isNaN(_this7.getParsed(index).r) && _this7.chart.getDataVisibility(index)) {
        count++;
      }
    });
    return count;
  };
  _proto9._computeAngle = function _computeAngle(index, mode, defaultAngle) {
    return this.chart.getDataVisibility(index) ? Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["t"])(this.resolveDataElementOptions(index, mode).angle || defaultAngle) : 0;
  };
  return PolarAreaController;
}(DatasetController);
PolarAreaController.id = 'polarArea';
PolarAreaController.defaults = {
  dataElementType: 'arc',
  animation: {
    animateRotate: true,
    animateScale: true
  },
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius']
    }
  },
  indexAxis: 'r',
  startAngle: 0
};
PolarAreaController.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels: function generateLabels(chart) {
          var data = chart.data;
          if (data.labels.length && data.datasets.length) {
            var _chart$legend$options3 = chart.legend.options.labels,
              pointStyle = _chart$legend$options3.pointStyle,
              color = _chart$legend$options3.color;
            return data.labels.map(function (label, i) {
              var meta = chart.getDatasetMeta(0);
              var style = meta.controller.getStyle(i);
              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                fontColor: color,
                lineWidth: style.borderWidth,
                pointStyle: pointStyle,
                hidden: !chart.getDataVisibility(i),
                index: i
              };
            });
          }
          return [];
        }
      },
      onClick: function onClick(e, legendItem, legend) {
        legend.chart.toggleDataVisibility(legendItem.index);
        legend.chart.update();
      }
    }
  },
  scales: {
    r: {
      type: 'radialLinear',
      angleLines: {
        display: false
      },
      beginAtZero: true,
      grid: {
        circular: true
      },
      pointLabels: {
        display: false
      },
      startAngle: 0
    }
  }
};
var PieController = /*#__PURE__*/function (_DoughnutController2) {
  function PieController() {
    return _DoughnutController2.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(PieController, _DoughnutController2);
  return PieController;
}(DoughnutController);
PieController.id = 'pie';
PieController.defaults = {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: '100%'
};
var RadarController = /*#__PURE__*/function (_DatasetController7) {
  function RadarController() {
    return _DatasetController7.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(RadarController, _DatasetController7);
  var _proto10 = RadarController.prototype;
  _proto10.getLabelAndValue = function getLabelAndValue(index) {
    var vScale = this._cachedMeta.vScale;
    var parsed = this.getParsed(index);
    return {
      label: vScale.getLabels()[index],
      value: '' + vScale.getLabelForValue(parsed[vScale.axis])
    };
  };
  _proto10.parseObjectData = function parseObjectData(meta, data, start, count) {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["y"].bind(this)(meta, data, start, count);
  };
  _proto10.update = function update(mode) {
    var meta = this._cachedMeta;
    var line = meta.dataset;
    var points = meta.data || [];
    var labels = meta.iScale.getLabels();
    line.points = points;
    if (mode !== 'resize') {
      var options = this.resolveDatasetElementOptions(mode);
      if (!this.options.showLine) {
        options.borderWidth = 0;
      }
      var properties = {
        _loop: true,
        _fullLoop: labels.length === points.length,
        options: options
      };
      this.updateElement(line, undefined, properties, mode);
    }
    this.updateElements(points, 0, points.length, mode);
  };
  _proto10.updateElements = function updateElements(points, start, count, mode) {
    var scale = this._cachedMeta.rScale;
    var reset = mode === 'reset';
    for (var i = start; i < start + count; i++) {
      var point = points[i];
      var options = this.resolveDataElementOptions(i, point.active ? 'active' : mode);
      var pointPosition = scale.getPointPositionForValue(i, this.getParsed(i).r);
      var x = reset ? scale.xCenter : pointPosition.x;
      var y = reset ? scale.yCenter : pointPosition.y;
      var properties = {
        x: x,
        y: y,
        angle: pointPosition.angle,
        skip: isNaN(x) || isNaN(y),
        options: options
      };
      this.updateElement(point, i, properties, mode);
    }
  };
  return RadarController;
}(DatasetController);
RadarController.id = 'radar';
RadarController.defaults = {
  datasetElementType: 'line',
  dataElementType: 'point',
  indexAxis: 'r',
  showLine: true,
  elements: {
    line: {
      fill: 'start'
    }
  }
};
RadarController.overrides = {
  aspectRatio: 1,
  scales: {
    r: {
      type: 'radialLinear'
    }
  }
};
var ScatterController = /*#__PURE__*/function (_DatasetController8) {
  function ScatterController() {
    return _DatasetController8.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ScatterController, _DatasetController8);
  var _proto11 = ScatterController.prototype;
  _proto11.getLabelAndValue = function getLabelAndValue(index) {
    var meta = this._cachedMeta;
    var labels = this.chart.data.labels || [];
    var xScale = meta.xScale,
      yScale = meta.yScale;
    var parsed = this.getParsed(index);
    var x = xScale.getLabelForValue(parsed.x);
    var y = yScale.getLabelForValue(parsed.y);
    return {
      label: labels[index] || '',
      value: '(' + x + ', ' + y + ')'
    };
  };
  _proto11.update = function update(mode) {
    var meta = this._cachedMeta;
    var _meta$data2 = meta.data,
      points = _meta$data2 === void 0 ? [] : _meta$data2;
    var animationsDisabled = this.chart._animationsDisabled;
    var _getStartAndCountOfVi2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["q"])(meta, points, animationsDisabled),
      start = _getStartAndCountOfVi2.start,
      count = _getStartAndCountOfVi2.count;
    this._drawStart = start;
    this._drawCount = count;
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["w"])(meta)) {
      start = 0;
      count = points.length;
    }
    if (this.options.showLine) {
      if (!this.datasetElementType) {
        this.addElements();
      }
      var line = meta.dataset,
        _dataset = meta._dataset;
      line._chart = this.chart;
      line._datasetIndex = this.index;
      line._decimated = !!_dataset._decimated;
      line.points = points;
      var options = this.resolveDatasetElementOptions(mode);
      options.segment = this.options.segment;
      this.updateElement(line, undefined, {
        animated: !animationsDisabled,
        options: options
      }, mode);
    } else if (this.datasetElementType) {
      delete meta.dataset;
      this.datasetElementType = false;
    }
    this.updateElements(points, start, count, mode);
  };
  _proto11.addElements = function addElements() {
    var showLine = this.options.showLine;
    if (!this.datasetElementType && showLine) {
      this.datasetElementType = this.chart.registry.getElement('line');
    }
    _DatasetController8.prototype.addElements.call(this);
  };
  _proto11.updateElements = function updateElements(points, start, count, mode) {
    var reset = mode === 'reset';
    var _this$_cachedMeta4 = this._cachedMeta,
      iScale = _this$_cachedMeta4.iScale,
      vScale = _this$_cachedMeta4.vScale,
      _stacked = _this$_cachedMeta4._stacked,
      _dataset = _this$_cachedMeta4._dataset;
    var firstOpts = this.resolveDataElementOptions(start, mode);
    var sharedOptions = this.getSharedOptions(firstOpts);
    var includeOptions = this.includeOptions(mode, sharedOptions);
    var iAxis = iScale.axis;
    var vAxis = vScale.axis;
    var _this$options3 = this.options,
      spanGaps = _this$options3.spanGaps,
      segment = _this$options3.segment;
    var maxGapLength = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["x"])(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
    var directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
    var prevParsed = start > 0 && this.getParsed(start - 1);
    for (var i = start; i < start + count; ++i) {
      var point = points[i];
      var parsed = this.getParsed(i);
      var properties = directUpdate ? point : {};
      var nullData = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(parsed[vAxis]);
      var iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
      var vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
      properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
      properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
      if (segment) {
        properties.parsed = parsed;
        properties.raw = _dataset.data[i];
      }
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
      }
      if (!directUpdate) {
        this.updateElement(point, i, properties, mode);
      }
      prevParsed = parsed;
    }
    this.updateSharedOptions(sharedOptions, mode, firstOpts);
  };
  _proto11.getMaxOverflow = function getMaxOverflow() {
    var meta = this._cachedMeta;
    var data = meta.data || [];
    if (!this.options.showLine) {
      var max = 0;
      for (var i = data.length - 1; i >= 0; --i) {
        max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
      }
      return max > 0 && max;
    }
    var dataset = meta.dataset;
    var border = dataset.options && dataset.options.borderWidth || 0;
    if (!data.length) {
      return border;
    }
    var firstPoint = data[0].size(this.resolveDataElementOptions(0));
    var lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
    return Math.max(border, firstPoint, lastPoint) / 2;
  };
  return ScatterController;
}(DatasetController);
ScatterController.id = 'scatter';
ScatterController.defaults = {
  datasetElementType: false,
  dataElementType: 'point',
  showLine: false,
  fill: false
};
ScatterController.overrides = {
  interaction: {
    mode: 'point'
  },
  scales: {
    x: {
      type: 'linear'
    },
    y: {
      type: 'linear'
    }
  }
};
var controllers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BarController: BarController,
  BubbleController: BubbleController,
  DoughnutController: DoughnutController,
  LineController: LineController,
  PieController: PieController,
  PolarAreaController: PolarAreaController,
  RadarController: RadarController,
  ScatterController: ScatterController
});

/**
 * @namespace Chart._adapters
 * @since 2.8.0
 * @private
 */
function _abstract() {
  throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
}
/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */
var DateAdapterBase = /*#__PURE__*/function () {
  function DateAdapterBase(options) {
    this.options = void 0;
    this.options = options || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  DateAdapterBase.override = function override(members) {
    Object.assign(DateAdapterBase.prototype, members);
  };
  var _proto12 = DateAdapterBase.prototype;
  _proto12.init = function init() {};
  _proto12.formats = function formats() {
    return _abstract();
  };
  _proto12.parse = function parse() {
    return _abstract();
  };
  _proto12.format = function format() {
    return _abstract();
  };
  _proto12.add = function add() {
    return _abstract();
  };
  _proto12.diff = function diff() {
    return _abstract();
  };
  _proto12.startOf = function startOf() {
    return _abstract();
  };
  _proto12.endOf = function endOf() {
    return _abstract();
  };
  return DateAdapterBase;
}();
var adapters = {
  _date: DateAdapterBase
};
function binarySearch(metaset, axis, value, intersect) {
  var controller = metaset.controller,
    data = metaset.data,
    _sorted = metaset._sorted;
  var iScale = controller._cachedMeta.iScale;
  if (iScale && axis === iScale.axis && axis !== 'r' && _sorted && data.length) {
    var lookupMethod = iScale._reversePixels ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["A"] : _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["B"];
    if (!intersect) {
      return lookupMethod(data, axis, value);
    } else if (controller._sharedOptions) {
      var el = data[0];
      var range = typeof el.getRange === 'function' && el.getRange(axis);
      if (range) {
        var start = lookupMethod(data, axis, value - range);
        var end = lookupMethod(data, axis, value + range);
        return {
          lo: start.lo,
          hi: end.hi
        };
      }
    }
  }
  return {
    lo: 0,
    hi: data.length - 1
  };
}
function evaluateInteractionItems(chart, axis, position, handler, intersect) {
  var metasets = chart.getSortedVisibleDatasetMetas();
  var value = position[axis];
  for (var i = 0, ilen = metasets.length; i < ilen; ++i) {
    var _metasets$i = metasets[i],
      _index2 = _metasets$i.index,
      data = _metasets$i.data;
    var _binarySearch = binarySearch(metasets[i], axis, value, intersect),
      lo = _binarySearch.lo,
      hi = _binarySearch.hi;
    for (var j = lo; j <= hi; ++j) {
      var element = data[j];
      if (!element.skip) {
        handler(element, _index2, j);
      }
    }
  }
}
function getDistanceMetricForAxis(axis) {
  var useX = axis.indexOf('x') !== -1;
  var useY = axis.indexOf('y') !== -1;
  return function (pt1, pt2) {
    var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
    var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  };
}
function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
  var items = [];
  if (!includeInvisible && !chart.isPointInArea(position)) {
    return items;
  }
  var evaluationFunc = function evaluationFunc(element, datasetIndex, index) {
    if (!includeInvisible && !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["C"])(element, chart.chartArea, 0)) {
      return;
    }
    if (element.inRange(position.x, position.y, useFinalPosition)) {
      items.push({
        element: element,
        datasetIndex: datasetIndex,
        index: index
      });
    }
  };
  evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
  return items;
}
function getNearestRadialItems(chart, position, axis, useFinalPosition) {
  var items = [];
  function evaluationFunc(element, datasetIndex, index) {
    var _element$getProps = element.getProps(['startAngle', 'endAngle'], useFinalPosition),
      startAngle = _element$getProps.startAngle,
      endAngle = _element$getProps.endAngle;
    var _getAngleFromPoint = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["D"])(element, {
        x: position.x,
        y: position.y
      }),
      angle = _getAngleFromPoint.angle;
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["p"])(angle, startAngle, endAngle)) {
      items.push({
        element: element,
        datasetIndex: datasetIndex,
        index: index
      });
    }
  }
  evaluateInteractionItems(chart, axis, position, evaluationFunc);
  return items;
}
function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
  var items = [];
  var distanceMetric = getDistanceMetricForAxis(axis);
  var minDistance = Number.POSITIVE_INFINITY;
  function evaluationFunc(element, datasetIndex, index) {
    var inRange = element.inRange(position.x, position.y, useFinalPosition);
    if (intersect && !inRange) {
      return;
    }
    var center = element.getCenterPoint(useFinalPosition);
    var pointInArea = !!includeInvisible || chart.isPointInArea(center);
    if (!pointInArea && !inRange) {
      return;
    }
    var distance = distanceMetric(position, center);
    if (distance < minDistance) {
      items = [{
        element: element,
        datasetIndex: datasetIndex,
        index: index
      }];
      minDistance = distance;
    } else if (distance === minDistance) {
      items.push({
        element: element,
        datasetIndex: datasetIndex,
        index: index
      });
    }
  }
  evaluateInteractionItems(chart, axis, position, evaluationFunc);
  return items;
}
function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
  if (!includeInvisible && !chart.isPointInArea(position)) {
    return [];
  }
  return axis === 'r' && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
}
function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
  var items = [];
  var rangeMethod = axis === 'x' ? 'inXRange' : 'inYRange';
  var intersectsItem = false;
  evaluateInteractionItems(chart, axis, position, function (element, datasetIndex, index) {
    if (element[rangeMethod] && element[rangeMethod](position[axis], useFinalPosition)) {
      items.push({
        element: element,
        datasetIndex: datasetIndex,
        index: index
      });
      intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
    }
  });
  if (intersect && !intersectsItem) {
    return [];
  }
  return items;
}
var Interaction = {
  evaluateInteractionItems: evaluateInteractionItems,
  modes: {
    index: function index(chart, e, options, useFinalPosition) {
      var position = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["z"])(e, chart);
      var axis = options.axis || 'x';
      var includeInvisible = options.includeInvisible || false;
      var items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
      var elements = [];
      if (!items.length) {
        return [];
      }
      chart.getSortedVisibleDatasetMetas().forEach(function (meta) {
        var index = items[0].index;
        var element = meta.data[index];
        if (element && !element.skip) {
          elements.push({
            element: element,
            datasetIndex: meta.index,
            index: index
          });
        }
      });
      return elements;
    },
    dataset: function dataset(chart, e, options, useFinalPosition) {
      var position = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["z"])(e, chart);
      var axis = options.axis || 'xy';
      var includeInvisible = options.includeInvisible || false;
      var items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
      if (items.length > 0) {
        var datasetIndex = items[0].datasetIndex;
        var data = chart.getDatasetMeta(datasetIndex).data;
        items = [];
        for (var i = 0; i < data.length; ++i) {
          items.push({
            element: data[i],
            datasetIndex: datasetIndex,
            index: i
          });
        }
      }
      return items;
    },
    point: function point(chart, e, options, useFinalPosition) {
      var position = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["z"])(e, chart);
      var axis = options.axis || 'xy';
      var includeInvisible = options.includeInvisible || false;
      return getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
    },
    nearest: function nearest(chart, e, options, useFinalPosition) {
      var position = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["z"])(e, chart);
      var axis = options.axis || 'xy';
      var includeInvisible = options.includeInvisible || false;
      return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
    },
    x: function x(chart, e, options, useFinalPosition) {
      var position = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["z"])(e, chart);
      return getAxisItems(chart, position, 'x', options.intersect, useFinalPosition);
    },
    y: function y(chart, e, options, useFinalPosition) {
      var position = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["z"])(e, chart);
      return getAxisItems(chart, position, 'y', options.intersect, useFinalPosition);
    }
  }
};
var STATIC_POSITIONS = ['left', 'top', 'right', 'bottom'];
function filterByPosition(array, position) {
  return array.filter(function (v) {
    return v.pos === position;
  });
}
function filterDynamicPositionByAxis(array, axis) {
  return array.filter(function (v) {
    return STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis;
  });
}
function sortByWeight(array, reverse) {
  return array.sort(function (a, b) {
    var v0 = reverse ? b : a;
    var v1 = reverse ? a : b;
    return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
  });
}
function wrapBoxes(boxes) {
  var layoutBoxes = [];
  var i, ilen, box, pos, stack, stackWeight;
  for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
    box = boxes[i];
    var _box = box;
    pos = _box.position;
    var _box$options = _box.options;
    stack = _box$options.stack;
    var _box$options$stackWei = _box$options.stackWeight;
    stackWeight = _box$options$stackWei === void 0 ? 1 : _box$options$stackWei;
    layoutBoxes.push({
      index: i,
      box: box,
      pos: pos,
      horizontal: box.isHorizontal(),
      weight: box.weight,
      stack: stack && pos + stack,
      stackWeight: stackWeight
    });
  }
  return layoutBoxes;
}
function buildStacks(layouts) {
  var stacks = {};
  for (var _iterator5 = _createForOfIteratorHelperLoose(layouts), _step5; !(_step5 = _iterator5()).done;) {
    var wrap = _step5.value;
    var stack = wrap.stack,
      pos = wrap.pos,
      stackWeight = wrap.stackWeight;
    if (!stack || !STATIC_POSITIONS.includes(pos)) {
      continue;
    }
    var _stack = stacks[stack] || (stacks[stack] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    _stack.count++;
    _stack.weight += stackWeight;
  }
  return stacks;
}
function setLayoutDims(layouts, params) {
  var stacks = buildStacks(layouts);
  var vBoxMaxWidth = params.vBoxMaxWidth,
    hBoxMaxHeight = params.hBoxMaxHeight;
  var i, ilen, layout;
  for (i = 0, ilen = layouts.length; i < ilen; ++i) {
    layout = layouts[i];
    var fullSize = layout.box.fullSize;
    var stack = stacks[layout.stack];
    var factor = stack && layout.stackWeight / stack.weight;
    if (layout.horizontal) {
      layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
      layout.height = hBoxMaxHeight;
    } else {
      layout.width = vBoxMaxWidth;
      layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
    }
  }
  return stacks;
}
function buildLayoutBoxes(boxes) {
  var layoutBoxes = wrapBoxes(boxes);
  var fullSize = sortByWeight(layoutBoxes.filter(function (wrap) {
    return wrap.box.fullSize;
  }), true);
  var left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
  var right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
  var top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
  var bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
  var centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, 'x');
  var centerVertical = filterDynamicPositionByAxis(layoutBoxes, 'y');
  return {
    fullSize: fullSize,
    leftAndTop: left.concat(top),
    rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
    chartArea: filterByPosition(layoutBoxes, 'chartArea'),
    vertical: left.concat(right).concat(centerVertical),
    horizontal: top.concat(bottom).concat(centerHorizontal)
  };
}
function getCombinedMax(maxPadding, chartArea, a, b) {
  return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function updateMaxPadding(maxPadding, boxPadding) {
  maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
  maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
  maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
  maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function updateDims(chartArea, params, layout, stacks) {
  var pos = layout.pos,
    box = layout.box;
  var maxPadding = chartArea.maxPadding;
  if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(pos)) {
    if (layout.size) {
      chartArea[pos] -= layout.size;
    }
    var stack = stacks[layout.stack] || {
      size: 0,
      count: 1
    };
    stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
    layout.size = stack.size / stack.count;
    chartArea[pos] += layout.size;
  }
  if (box.getPadding) {
    updateMaxPadding(maxPadding, box.getPadding());
  }
  var newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right'));
  var newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom'));
  var widthChanged = newWidth !== chartArea.w;
  var heightChanged = newHeight !== chartArea.h;
  chartArea.w = newWidth;
  chartArea.h = newHeight;
  return layout.horizontal ? {
    same: widthChanged,
    other: heightChanged
  } : {
    same: heightChanged,
    other: widthChanged
  };
}
function handleMaxPadding(chartArea) {
  var maxPadding = chartArea.maxPadding;
  function updatePos(pos) {
    var change = Math.max(maxPadding[pos] - chartArea[pos], 0);
    chartArea[pos] += change;
    return change;
  }
  chartArea.y += updatePos('top');
  chartArea.x += updatePos('left');
  updatePos('right');
  updatePos('bottom');
}
function getMargins(horizontal, chartArea) {
  var maxPadding = chartArea.maxPadding;
  function marginForPositions(positions) {
    var margin = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    positions.forEach(function (pos) {
      margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
    });
    return margin;
  }
  return horizontal ? marginForPositions(['left', 'right']) : marginForPositions(['top', 'bottom']);
}
function fitBoxes(boxes, chartArea, params, stacks) {
  var refitBoxes = [];
  var i, ilen, layout, box, refit, changed;
  for (i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i) {
    layout = boxes[i];
    box = layout.box;
    box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
    var _updateDims = updateDims(chartArea, params, layout, stacks),
      same = _updateDims.same,
      other = _updateDims.other;
    refit |= same && refitBoxes.length;
    changed = changed || other;
    if (!box.fullSize) {
      refitBoxes.push(layout);
    }
  }
  return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function setBoxDims(box, left, top, width, height) {
  box.top = top;
  box.left = left;
  box.right = left + width;
  box.bottom = top + height;
  box.width = width;
  box.height = height;
}
function placeBoxes(boxes, chartArea, params, stacks) {
  var userPadding = params.padding;
  var x = chartArea.x,
    y = chartArea.y;
  for (var _iterator6 = _createForOfIteratorHelperLoose(boxes), _step6; !(_step6 = _iterator6()).done;) {
    var layout = _step6.value;
    var box = layout.box;
    var stack = stacks[layout.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    };
    var weight = layout.stackWeight / stack.weight || 1;
    if (layout.horizontal) {
      var width = chartArea.w * weight;
      var height = stack.size || box.height;
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["h"])(stack.start)) {
        y = stack.start;
      }
      if (box.fullSize) {
        setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
      } else {
        setBoxDims(box, chartArea.left + stack.placed, y, width, height);
      }
      stack.start = y;
      stack.placed += width;
      y = box.bottom;
    } else {
      var _height = chartArea.h * weight;
      var _width = stack.size || box.width;
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["h"])(stack.start)) {
        x = stack.start;
      }
      if (box.fullSize) {
        setBoxDims(box, x, userPadding.top, _width, params.outerHeight - userPadding.bottom - userPadding.top);
      } else {
        setBoxDims(box, x, chartArea.top + stack.placed, _width, _height);
      }
      stack.start = x;
      stack.placed += _height;
      x = box.right;
    }
  }
  chartArea.x = x;
  chartArea.y = y;
}
var layouts = {
  addBox: function addBox(chart, item) {
    if (!chart.boxes) {
      chart.boxes = [];
    }
    item.fullSize = item.fullSize || false;
    item.position = item.position || 'top';
    item.weight = item.weight || 0;
    item._layers = item._layers || function () {
      return [{
        z: 0,
        draw: function draw(chartArea) {
          item.draw(chartArea);
        }
      }];
    };
    chart.boxes.push(item);
  },
  removeBox: function removeBox(chart, layoutItem) {
    var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
    if (index !== -1) {
      chart.boxes.splice(index, 1);
    }
  },
  configure: function configure(chart, item, options) {
    item.fullSize = options.fullSize;
    item.position = options.position;
    item.weight = options.weight;
  },
  update: function update(chart, width, height, minPadding) {
    if (!chart) {
      return;
    }
    var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(chart.options.layout.padding);
    var availableWidth = Math.max(width - padding.width, 0);
    var availableHeight = Math.max(height - padding.height, 0);
    var boxes = buildLayoutBoxes(chart.boxes);
    var verticalBoxes = boxes.vertical;
    var horizontalBoxes = boxes.horizontal;
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(chart.boxes, function (box) {
      if (typeof box.beforeLayout === 'function') {
        box.beforeLayout();
      }
    });
    var visibleVerticalBoxCount = verticalBoxes.reduce(function (total, wrap) {
      return wrap.box.options && wrap.box.options.display === false ? total : total + 1;
    }, 0) || 1;
    var params = Object.freeze({
      outerWidth: width,
      outerHeight: height,
      padding: padding,
      availableWidth: availableWidth,
      availableHeight: availableHeight,
      vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
      hBoxMaxHeight: availableHeight / 2
    });
    var maxPadding = Object.assign({}, padding);
    updateMaxPadding(maxPadding, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(minPadding));
    var chartArea = Object.assign({
      maxPadding: maxPadding,
      w: availableWidth,
      h: availableHeight,
      x: padding.left,
      y: padding.top
    }, padding);
    var stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
    fitBoxes(boxes.fullSize, chartArea, params, stacks);
    fitBoxes(verticalBoxes, chartArea, params, stacks);
    if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) {
      fitBoxes(verticalBoxes, chartArea, params, stacks);
    }
    handleMaxPadding(chartArea);
    placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
    chartArea.x += chartArea.w;
    chartArea.y += chartArea.h;
    placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
    chart.chartArea = {
      left: chartArea.left,
      top: chartArea.top,
      right: chartArea.left + chartArea.w,
      bottom: chartArea.top + chartArea.h,
      height: chartArea.h,
      width: chartArea.w
    };
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(boxes.chartArea, function (layout) {
      var box = layout.box;
      Object.assign(box, chart.chartArea);
      box.update(chartArea.w, chartArea.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
var BasePlatform = /*#__PURE__*/function () {
  function BasePlatform() {}
  var _proto13 = BasePlatform.prototype;
  _proto13.acquireContext = function acquireContext(canvas, aspectRatio) {};
  _proto13.releaseContext = function releaseContext(context) {
    return false;
  };
  _proto13.addEventListener = function addEventListener(chart, type, listener) {};
  _proto13.removeEventListener = function removeEventListener(chart, type, listener) {};
  _proto13.getDevicePixelRatio = function getDevicePixelRatio() {
    return 1;
  };
  _proto13.getMaximumSize = function getMaximumSize(element, width, height, aspectRatio) {
    width = Math.max(0, width || element.width);
    height = height || element.height;
    return {
      width: width,
      height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
    };
  };
  _proto13.isAttached = function isAttached(canvas) {
    return true;
  };
  _proto13.updateConfig = function updateConfig(config) {};
  return BasePlatform;
}();
var BasicPlatform = /*#__PURE__*/function (_BasePlatform) {
  function BasicPlatform() {
    return _BasePlatform.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(BasicPlatform, _BasePlatform);
  var _proto14 = BasicPlatform.prototype;
  _proto14.acquireContext = function acquireContext(item) {
    return item && item.getContext && item.getContext('2d') || null;
  };
  _proto14.updateConfig = function updateConfig(config) {
    config.options.animation = false;
  };
  return BasicPlatform;
}(BasePlatform);
var EXPANDO_KEY = '$chartjs';
var EVENT_TYPES = {
  touchstart: 'mousedown',
  touchmove: 'mousemove',
  touchend: 'mouseup',
  pointerenter: 'mouseenter',
  pointerdown: 'mousedown',
  pointermove: 'mousemove',
  pointerup: 'mouseup',
  pointerleave: 'mouseout',
  pointerout: 'mouseout'
};
var isNullOrEmpty = function isNullOrEmpty(value) {
  return value === null || value === '';
};
function initCanvas(canvas, aspectRatio) {
  var style = canvas.style;
  var renderHeight = canvas.getAttribute('height');
  var renderWidth = canvas.getAttribute('width');
  canvas[EXPANDO_KEY] = {
    initial: {
      height: renderHeight,
      width: renderWidth,
      style: {
        display: style.display,
        height: style.height,
        width: style.width
      }
    }
  };
  style.display = style.display || 'block';
  style.boxSizing = style.boxSizing || 'border-box';
  if (isNullOrEmpty(renderWidth)) {
    var displayWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["J"])(canvas, 'width');
    if (displayWidth !== undefined) {
      canvas.width = displayWidth;
    }
  }
  if (isNullOrEmpty(renderHeight)) {
    if (canvas.style.height === '') {
      canvas.height = canvas.width / (aspectRatio || 2);
    } else {
      var displayHeight = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["J"])(canvas, 'height');
      if (displayHeight !== undefined) {
        canvas.height = displayHeight;
      }
    }
  }
  return canvas;
}
var eventListenerOptions = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["K"] ? {
  passive: true
} : false;
function addListener(node, type, listener) {
  if (node) {
    node.addEventListener(type, listener, eventListenerOptions);
  }
}
function removeListener(chart, type, listener) {
  if (chart && chart.canvas) {
    chart.canvas.removeEventListener(type, listener, eventListenerOptions);
  }
}
function fromNativeEvent(event, chart) {
  var type = EVENT_TYPES[event.type] || event.type;
  var _getRelativePosition = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["z"])(event, chart),
    x = _getRelativePosition.x,
    y = _getRelativePosition.y;
  return {
    type: type,
    chart: chart,
    "native": event,
    x: x !== undefined ? x : null,
    y: y !== undefined ? y : null
  };
}
function nodeListContains(nodeList, canvas) {
  for (var _iterator7 = _createForOfIteratorHelperLoose(nodeList), _step7; !(_step7 = _iterator7()).done;) {
    var node = _step7.value;
    if (node === canvas || node.contains(canvas)) {
      return true;
    }
  }
}
function createAttachObserver(chart, type, listener) {
  var canvas = chart.canvas;
  var observer = new MutationObserver(function (entries) {
    var trigger = false;
    for (var _iterator8 = _createForOfIteratorHelperLoose(entries), _step8; !(_step8 = _iterator8()).done;) {
      var entry = _step8.value;
      trigger = trigger || nodeListContains(entry.addedNodes, canvas);
      trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
    }
    if (trigger) {
      listener();
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true
  });
  return observer;
}
function createDetachObserver(chart, type, listener) {
  var canvas = chart.canvas;
  var observer = new MutationObserver(function (entries) {
    var trigger = false;
    for (var _iterator9 = _createForOfIteratorHelperLoose(entries), _step9; !(_step9 = _iterator9()).done;) {
      var entry = _step9.value;
      trigger = trigger || nodeListContains(entry.removedNodes, canvas);
      trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
    }
    if (trigger) {
      listener();
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true
  });
  return observer;
}
var drpListeningCharts = new Map();
var oldDevicePixelRatio = 0;
function onWindowResize() {
  var dpr = window.devicePixelRatio;
  if (dpr === oldDevicePixelRatio) {
    return;
  }
  oldDevicePixelRatio = dpr;
  drpListeningCharts.forEach(function (resize, chart) {
    if (chart.currentDevicePixelRatio !== dpr) {
      resize();
    }
  });
}
function listenDevicePixelRatioChanges(chart, resize) {
  if (!drpListeningCharts.size) {
    window.addEventListener('resize', onWindowResize);
  }
  drpListeningCharts.set(chart, resize);
}
function unlistenDevicePixelRatioChanges(chart) {
  drpListeningCharts["delete"](chart);
  if (!drpListeningCharts.size) {
    window.removeEventListener('resize', onWindowResize);
  }
}
function createResizeObserver(chart, type, listener) {
  var canvas = chart.canvas;
  var container = canvas && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["I"])(canvas);
  if (!container) {
    return;
  }
  var resize = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["L"])(function (width, height) {
    var w = container.clientWidth;
    listener(width, height);
    if (w < container.clientWidth) {
      listener();
    }
  }, window);
  var observer = new ResizeObserver(function (entries) {
    var entry = entries[0];
    var width = entry.contentRect.width;
    var height = entry.contentRect.height;
    if (width === 0 && height === 0) {
      return;
    }
    resize(width, height);
  });
  observer.observe(container);
  listenDevicePixelRatioChanges(chart, resize);
  return observer;
}
function releaseObserver(chart, type, observer) {
  if (observer) {
    observer.disconnect();
  }
  if (type === 'resize') {
    unlistenDevicePixelRatioChanges(chart);
  }
}
function createProxyAndListen(chart, type, listener) {
  var canvas = chart.canvas;
  var proxy = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["L"])(function (event) {
    if (chart.ctx !== null) {
      listener(fromNativeEvent(event, chart));
    }
  }, chart);
  addListener(canvas, type, proxy);
  return proxy;
}
var DomPlatform = /*#__PURE__*/function (_BasePlatform2) {
  function DomPlatform() {
    return _BasePlatform2.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(DomPlatform, _BasePlatform2);
  var _proto15 = DomPlatform.prototype;
  _proto15.acquireContext = function acquireContext(canvas, aspectRatio) {
    var context = canvas && canvas.getContext && canvas.getContext('2d');
    if (context && context.canvas === canvas) {
      initCanvas(canvas, aspectRatio);
      return context;
    }
    return null;
  };
  _proto15.releaseContext = function releaseContext(context) {
    var canvas = context.canvas;
    if (!canvas[EXPANDO_KEY]) {
      return false;
    }
    var initial = canvas[EXPANDO_KEY].initial;
    ['height', 'width'].forEach(function (prop) {
      var value = initial[prop];
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(value)) {
        canvas.removeAttribute(prop);
      } else {
        canvas.setAttribute(prop, value);
      }
    });
    var style = initial.style || {};
    Object.keys(style).forEach(function (key) {
      canvas.style[key] = style[key];
    });
    canvas.width = canvas.width;
    delete canvas[EXPANDO_KEY];
    return true;
  };
  _proto15.addEventListener = function addEventListener(chart, type, listener) {
    this.removeEventListener(chart, type);
    var proxies = chart.$proxies || (chart.$proxies = {});
    var handlers = {
      attach: createAttachObserver,
      detach: createDetachObserver,
      resize: createResizeObserver
    };
    var handler = handlers[type] || createProxyAndListen;
    proxies[type] = handler(chart, type, listener);
  };
  _proto15.removeEventListener = function removeEventListener(chart, type) {
    var proxies = chart.$proxies || (chart.$proxies = {});
    var proxy = proxies[type];
    if (!proxy) {
      return;
    }
    var handlers = {
      attach: releaseObserver,
      detach: releaseObserver,
      resize: releaseObserver
    };
    var handler = handlers[type] || removeListener;
    handler(chart, type, proxy);
    proxies[type] = undefined;
  };
  _proto15.getDevicePixelRatio = function getDevicePixelRatio() {
    return window.devicePixelRatio;
  };
  _proto15.getMaximumSize = function getMaximumSize(canvas, width, height, aspectRatio) {
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["G"])(canvas, width, height, aspectRatio);
  };
  _proto15.isAttached = function isAttached(canvas) {
    var container = canvas && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["I"])(canvas);
    return !!(container && container.isConnected);
  };
  return DomPlatform;
}(BasePlatform);
function _detectPlatform(canvas) {
  if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["M"])() || typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas) {
    return BasicPlatform;
  }
  return DomPlatform;
}
var Element = /*#__PURE__*/function () {
  function Element() {
    this.x = void 0;
    this.y = void 0;
    this.active = false;
    this.options = void 0;
    this.$animations = void 0;
  }
  var _proto16 = Element.prototype;
  _proto16.tooltipPosition = function tooltipPosition(useFinalPosition) {
    var _this$getProps = this.getProps(['x', 'y'], useFinalPosition),
      x = _this$getProps.x,
      y = _this$getProps.y;
    return {
      x: x,
      y: y
    };
  };
  _proto16.hasValue = function hasValue() {
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["x"])(this.x) && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["x"])(this.y);
  };
  _proto16.getProps = function getProps(props, _final) {
    var _this8 = this;
    var anims = this.$animations;
    if (!_final || !anims) {
      // let's not create an object, if not needed
      return this;
    }
    var ret = {};
    props.forEach(function (prop) {
      ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : _this8[prop];
    });
    return ret;
  };
  return Element;
}();
Element.defaults = {};
Element.defaultRoutes = undefined;
function autoSkip(scale, ticks) {
  var tickOpts = scale.options.ticks;
  var determinedMaxTicks = determineMaxTicks(scale);
  var ticksLimit = Math.min(tickOpts.maxTicksLimit || determinedMaxTicks, determinedMaxTicks);
  var majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
  var numMajorIndices = majorIndices.length;
  var first = majorIndices[0];
  var last = majorIndices[numMajorIndices - 1];
  var newTicks = [];
  if (numMajorIndices > ticksLimit) {
    skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
    return newTicks;
  }
  var spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
  if (numMajorIndices > 0) {
    var i, ilen;
    var avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
    skip(ticks, newTicks, spacing, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
    for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
      skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
    }
    skip(ticks, newTicks, spacing, last, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
    return newTicks;
  }
  skip(ticks, newTicks, spacing);
  return newTicks;
}
function determineMaxTicks(scale) {
  var offset = scale.options.offset;
  var tickLength = scale._tickSize();
  var maxScale = scale._length / tickLength + (offset ? 0 : 1);
  var maxChart = scale._maxLength / tickLength;
  return Math.floor(Math.min(maxScale, maxChart));
}
function calculateSpacing(majorIndices, ticks, ticksLimit) {
  var evenMajorSpacing = getEvenSpacing(majorIndices);
  var spacing = ticks.length / ticksLimit;
  if (!evenMajorSpacing) {
    return Math.max(spacing, 1);
  }
  var factors = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["N"])(evenMajorSpacing);
  for (var i = 0, ilen = factors.length - 1; i < ilen; i++) {
    var factor = factors[i];
    if (factor > spacing) {
      return factor;
    }
  }
  return Math.max(spacing, 1);
}
function getMajorIndices(ticks) {
  var result = [];
  var i, ilen;
  for (i = 0, ilen = ticks.length; i < ilen; i++) {
    if (ticks[i].major) {
      result.push(i);
    }
  }
  return result;
}
function skipMajors(ticks, newTicks, majorIndices, spacing) {
  var count = 0;
  var next = majorIndices[0];
  var i;
  spacing = Math.ceil(spacing);
  for (i = 0; i < ticks.length; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = majorIndices[count * spacing];
    }
  }
}
function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
  var start = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(majorStart, 0);
  var end = Math.min(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(majorEnd, ticks.length), ticks.length);
  var count = 0;
  var length, i, next;
  spacing = Math.ceil(spacing);
  if (majorEnd) {
    length = majorEnd - majorStart;
    spacing = length / Math.floor(length / spacing);
  }
  next = start;
  while (next < 0) {
    count++;
    next = Math.round(start + count * spacing);
  }
  for (i = Math.max(start, 0); i < end; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = Math.round(start + count * spacing);
    }
  }
}
function getEvenSpacing(arr) {
  var len = arr.length;
  var i, diff;
  if (len < 2) {
    return false;
  }
  for (diff = arr[0], i = 1; i < len; ++i) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return diff;
}
var reverseAlign = function reverseAlign(align) {
  return align === 'left' ? 'right' : align === 'right' ? 'left' : align;
};
var offsetFromEdge = function offsetFromEdge(scale, edge, offset) {
  return edge === 'top' || edge === 'left' ? scale[edge] + offset : scale[edge] - offset;
};
var getTicksLimit = function getTicksLimit(ticksLength, maxTicksLimit) {
  return Math.min(maxTicksLimit || ticksLength, ticksLength);
};
function sample(arr, numItems) {
  var result = [];
  var increment = arr.length / numItems;
  var len = arr.length;
  var i = 0;
  for (; i < len; i += increment) {
    result.push(arr[Math.floor(i)]);
  }
  return result;
}
function getPixelForGridLine(scale, index, offsetGridLines) {
  var length = scale.ticks.length;
  var validIndex = Math.min(index, length - 1);
  var start = scale._startPixel;
  var end = scale._endPixel;
  var epsilon = 1e-6;
  var lineValue = scale.getPixelForTick(validIndex);
  var offset;
  if (offsetGridLines) {
    if (length === 1) {
      offset = Math.max(lineValue - start, end - lineValue);
    } else if (index === 0) {
      offset = (scale.getPixelForTick(1) - lineValue) / 2;
    } else {
      offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
    }
    lineValue += validIndex < index ? offset : -offset;
    if (lineValue < start - epsilon || lineValue > end + epsilon) {
      return;
    }
  }
  return lineValue;
}
function garbageCollect(caches, length) {
  Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(caches, function (cache) {
    var gc = cache.gc;
    var gcLen = gc.length / 2;
    var i;
    if (gcLen > length) {
      for (i = 0; i < gcLen; ++i) {
        delete cache.data[gc[i]];
      }
      gc.splice(0, gcLen);
    }
  });
}
function getTickMarkLength(options) {
  return options.drawTicks ? options.tickLength : 0;
}
function getTitleHeight(options, fallback) {
  if (!options.display) {
    return 0;
  }
  var font = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(options.font, fallback);
  var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(options.padding);
  var lines = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["b"])(options.text) ? options.text.length : 1;
  return lines * font.lineHeight + padding.height;
}
function createScaleContext(parent, scale) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["j"])(parent, {
    scale: scale,
    type: 'scale'
  });
}
function createTickContext(parent, index, tick) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["j"])(parent, {
    tick: tick,
    index: index,
    type: 'tick'
  });
}
function titleAlign(align, position, reverse) {
  var ret = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a1"])(align);
  if (reverse && position !== 'right' || !reverse && position === 'right') {
    ret = reverseAlign(ret);
  }
  return ret;
}
function titleArgs(scale, offset, position, align) {
  var top = scale.top,
    left = scale.left,
    bottom = scale.bottom,
    right = scale.right,
    chart = scale.chart;
  var chartArea = chart.chartArea,
    scales = chart.scales;
  var rotation = 0;
  var maxWidth, titleX, titleY;
  var height = bottom - top;
  var width = right - left;
  if (scale.isHorizontal()) {
    titleX = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(align, left, right);
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(position)) {
      var positionAxisID = Object.keys(position)[0];
      var value = position[positionAxisID];
      titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
    } else if (position === 'center') {
      titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
    } else {
      titleY = offsetFromEdge(scale, position, offset);
    }
    maxWidth = right - left;
  } else {
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(position)) {
      var _positionAxisID = Object.keys(position)[0];
      var _value = position[_positionAxisID];
      titleX = scales[_positionAxisID].getPixelForValue(_value) - width + offset;
    } else if (position === 'center') {
      titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
    } else {
      titleX = offsetFromEdge(scale, position, offset);
    }
    titleY = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(align, bottom, top);
    rotation = position === 'left' ? -_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["H"] : _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["H"];
  }
  return {
    titleX: titleX,
    titleY: titleY,
    maxWidth: maxWidth,
    rotation: rotation
  };
}
var Scale = /*#__PURE__*/function (_Element2) {
  function Scale(cfg) {
    var _this9;
    _this9 = _Element2.call(this) || this;
    _this9.id = cfg.id;
    _this9.type = cfg.type;
    _this9.options = undefined;
    _this9.ctx = cfg.ctx;
    _this9.chart = cfg.chart;
    _this9.top = undefined;
    _this9.bottom = undefined;
    _this9.left = undefined;
    _this9.right = undefined;
    _this9.width = undefined;
    _this9.height = undefined;
    _this9._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    _this9.maxWidth = undefined;
    _this9.maxHeight = undefined;
    _this9.paddingTop = undefined;
    _this9.paddingBottom = undefined;
    _this9.paddingLeft = undefined;
    _this9.paddingRight = undefined;
    _this9.axis = undefined;
    _this9.labelRotation = undefined;
    _this9.min = undefined;
    _this9.max = undefined;
    _this9._range = undefined;
    _this9.ticks = [];
    _this9._gridLineItems = null;
    _this9._labelItems = null;
    _this9._labelSizes = null;
    _this9._length = 0;
    _this9._maxLength = 0;
    _this9._longestTextCache = {};
    _this9._startPixel = undefined;
    _this9._endPixel = undefined;
    _this9._reversePixels = false;
    _this9._userMax = undefined;
    _this9._userMin = undefined;
    _this9._suggestedMax = undefined;
    _this9._suggestedMin = undefined;
    _this9._ticksLength = 0;
    _this9._borderValue = 0;
    _this9._cache = {};
    _this9._dataLimitsCached = false;
    _this9.$context = undefined;
    return _this9;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Scale, _Element2);
  var _proto17 = Scale.prototype;
  _proto17.init = function init(options) {
    this.options = options.setContext(this.getContext());
    this.axis = options.axis;
    this._userMin = this.parse(options.min);
    this._userMax = this.parse(options.max);
    this._suggestedMin = this.parse(options.suggestedMin);
    this._suggestedMax = this.parse(options.suggestedMax);
  };
  _proto17.parse = function parse(raw, index) {
    return raw;
  };
  _proto17.getUserBounds = function getUserBounds() {
    var _userMin = this._userMin,
      _userMax = this._userMax,
      _suggestedMin = this._suggestedMin,
      _suggestedMax = this._suggestedMax;
    _userMin = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["O"])(_userMin, Number.POSITIVE_INFINITY);
    _userMax = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["O"])(_userMax, Number.NEGATIVE_INFINITY);
    _suggestedMin = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["O"])(_suggestedMin, Number.POSITIVE_INFINITY);
    _suggestedMax = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["O"])(_suggestedMax, Number.NEGATIVE_INFINITY);
    return {
      min: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["O"])(_userMin, _suggestedMin),
      max: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["O"])(_userMax, _suggestedMax),
      minDefined: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(_userMin),
      maxDefined: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(_userMax)
    };
  };
  _proto17.getMinMax = function getMinMax(canStack) {
    var _this$getUserBounds = this.getUserBounds(),
      min = _this$getUserBounds.min,
      max = _this$getUserBounds.max,
      minDefined = _this$getUserBounds.minDefined,
      maxDefined = _this$getUserBounds.maxDefined;
    var range;
    if (minDefined && maxDefined) {
      return {
        min: min,
        max: max
      };
    }
    var metas = this.getMatchingVisibleMetas();
    for (var i = 0, ilen = metas.length; i < ilen; ++i) {
      range = metas[i].controller.getMinMax(this, canStack);
      if (!minDefined) {
        min = Math.min(min, range.min);
      }
      if (!maxDefined) {
        max = Math.max(max, range.max);
      }
    }
    min = maxDefined && min > max ? max : min;
    max = minDefined && min > max ? min : max;
    return {
      min: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["O"])(min, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["O"])(max, min)),
      max: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["O"])(max, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["O"])(min, max))
    };
  };
  _proto17.getPadding = function getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  };
  _proto17.getTicks = function getTicks() {
    return this.ticks;
  };
  _proto17.getLabels = function getLabels() {
    var data = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
  };
  _proto17.getLabelItems = function getLabelItems(chartArea) {
    if (chartArea === void 0) {
      chartArea = this.chart.chartArea;
    }
    var items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
    return items;
  };
  _proto17.beforeLayout = function beforeLayout() {
    this._cache = {};
    this._dataLimitsCached = false;
  };
  _proto17.beforeUpdate = function beforeUpdate() {
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(this.options.beforeUpdate, [this]);
  };
  _proto17.update = function update(maxWidth, maxHeight, margins) {
    var _this$options4 = this.options,
      beginAtZero = _this$options4.beginAtZero,
      grace = _this$options4.grace,
      tickOpts = _this$options4.ticks;
    var sampleSize = tickOpts.sampleSize;
    this.beforeUpdate();
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this._margins = margins = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, margins);
    this.ticks = null;
    this._labelSizes = null;
    this._gridLineItems = null;
    this._labelItems = null;
    this.beforeSetDimensions();
    this.setDimensions();
    this.afterSetDimensions();
    this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
    if (!this._dataLimitsCached) {
      this.beforeDataLimits();
      this.determineDataLimits();
      this.afterDataLimits();
      this._range = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["R"])(this, grace, beginAtZero);
      this._dataLimitsCached = true;
    }
    this.beforeBuildTicks();
    this.ticks = this.buildTicks() || [];
    this.afterBuildTicks();
    var samplingEnabled = sampleSize < this.ticks.length;
    this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
    this.configure();
    this.beforeCalculateLabelRotation();
    this.calculateLabelRotation();
    this.afterCalculateLabelRotation();
    if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto')) {
      this.ticks = autoSkip(this, this.ticks);
      this._labelSizes = null;
      this.afterAutoSkip();
    }
    if (samplingEnabled) {
      this._convertTicksToLabels(this.ticks);
    }
    this.beforeFit();
    this.fit();
    this.afterFit();
    this.afterUpdate();
  };
  _proto17.configure = function configure() {
    var reversePixels = this.options.reverse;
    var startPixel, endPixel;
    if (this.isHorizontal()) {
      startPixel = this.left;
      endPixel = this.right;
    } else {
      startPixel = this.top;
      endPixel = this.bottom;
      reversePixels = !reversePixels;
    }
    this._startPixel = startPixel;
    this._endPixel = endPixel;
    this._reversePixels = reversePixels;
    this._length = endPixel - startPixel;
    this._alignToPixels = this.options.alignToPixels;
  };
  _proto17.afterUpdate = function afterUpdate() {
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(this.options.afterUpdate, [this]);
  };
  _proto17.beforeSetDimensions = function beforeSetDimensions() {
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(this.options.beforeSetDimensions, [this]);
  };
  _proto17.setDimensions = function setDimensions() {
    if (this.isHorizontal()) {
      this.width = this.maxWidth;
      this.left = 0;
      this.right = this.width;
    } else {
      this.height = this.maxHeight;
      this.top = 0;
      this.bottom = this.height;
    }
    this.paddingLeft = 0;
    this.paddingTop = 0;
    this.paddingRight = 0;
    this.paddingBottom = 0;
  };
  _proto17.afterSetDimensions = function afterSetDimensions() {
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(this.options.afterSetDimensions, [this]);
  };
  _proto17._callHooks = function _callHooks(name) {
    this.chart.notifyPlugins(name, this.getContext());
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(this.options[name], [this]);
  };
  _proto17.beforeDataLimits = function beforeDataLimits() {
    this._callHooks('beforeDataLimits');
  };
  _proto17.determineDataLimits = function determineDataLimits() {};
  _proto17.afterDataLimits = function afterDataLimits() {
    this._callHooks('afterDataLimits');
  };
  _proto17.beforeBuildTicks = function beforeBuildTicks() {
    this._callHooks('beforeBuildTicks');
  };
  _proto17.buildTicks = function buildTicks() {
    return [];
  };
  _proto17.afterBuildTicks = function afterBuildTicks() {
    this._callHooks('afterBuildTicks');
  };
  _proto17.beforeTickToLabelConversion = function beforeTickToLabelConversion() {
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(this.options.beforeTickToLabelConversion, [this]);
  };
  _proto17.generateTickLabels = function generateTickLabels(ticks) {
    var tickOpts = this.options.ticks;
    var i, ilen, tick;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      tick = ticks[i];
      tick.label = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(tickOpts.callback, [tick.value, i, ticks], this);
    }
  };
  _proto17.afterTickToLabelConversion = function afterTickToLabelConversion() {
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(this.options.afterTickToLabelConversion, [this]);
  };
  _proto17.beforeCalculateLabelRotation = function beforeCalculateLabelRotation() {
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(this.options.beforeCalculateLabelRotation, [this]);
  };
  _proto17.calculateLabelRotation = function calculateLabelRotation() {
    var options = this.options;
    var tickOpts = options.ticks;
    var numTicks = getTicksLimit(this.ticks.length, options.ticks.maxTicksLimit);
    var minRotation = tickOpts.minRotation || 0;
    var maxRotation = tickOpts.maxRotation;
    var labelRotation = minRotation;
    var tickWidth, maxHeight, maxLabelDiagonal;
    if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
      this.labelRotation = minRotation;
      return;
    }
    var labelSizes = this._getLabelSizes();
    var maxLabelWidth = labelSizes.widest.width;
    var maxLabelHeight = labelSizes.highest.height;
    var maxWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["S"])(this.chart.width - maxLabelWidth, 0, this.maxWidth);
    tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
    if (maxLabelWidth + 6 > tickWidth) {
      tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
      maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
      maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
      labelRotation = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["U"])(Math.min(Math.asin(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["S"])((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["S"])(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["S"])(maxLabelHeight / maxLabelDiagonal, -1, 1))));
      labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
    }
    this.labelRotation = labelRotation;
  };
  _proto17.afterCalculateLabelRotation = function afterCalculateLabelRotation() {
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(this.options.afterCalculateLabelRotation, [this]);
  };
  _proto17.afterAutoSkip = function afterAutoSkip() {};
  _proto17.beforeFit = function beforeFit() {
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(this.options.beforeFit, [this]);
  };
  _proto17.fit = function fit() {
    var minSize = {
      width: 0,
      height: 0
    };
    var chart = this.chart,
      _this$options5 = this.options,
      tickOpts = _this$options5.ticks,
      titleOpts = _this$options5.title,
      gridOpts = _this$options5.grid;
    var display = this._isVisible();
    var isHorizontal = this.isHorizontal();
    if (display) {
      var titleHeight = getTitleHeight(titleOpts, chart.options.font);
      if (isHorizontal) {
        minSize.width = this.maxWidth;
        minSize.height = getTickMarkLength(gridOpts) + titleHeight;
      } else {
        minSize.height = this.maxHeight;
        minSize.width = getTickMarkLength(gridOpts) + titleHeight;
      }
      if (tickOpts.display && this.ticks.length) {
        var _this$_getLabelSizes = this._getLabelSizes(),
          first = _this$_getLabelSizes.first,
          last = _this$_getLabelSizes.last,
          widest = _this$_getLabelSizes.widest,
          highest = _this$_getLabelSizes.highest;
        var tickPadding = tickOpts.padding * 2;
        var angleRadians = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["t"])(this.labelRotation);
        var cos = Math.cos(angleRadians);
        var sin = Math.sin(angleRadians);
        if (isHorizontal) {
          var labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
          minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
        } else {
          var labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
          minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
        }
        this._calculatePadding(first, last, sin, cos);
      }
    }
    this._handleMargins();
    if (isHorizontal) {
      this.width = this._length = chart.width - this._margins.left - this._margins.right;
      this.height = minSize.height;
    } else {
      this.width = minSize.width;
      this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
    }
  };
  _proto17._calculatePadding = function _calculatePadding(first, last, sin, cos) {
    var _this$options6 = this.options,
      _this$options6$ticks = _this$options6.ticks,
      align = _this$options6$ticks.align,
      padding = _this$options6$ticks.padding,
      position = _this$options6.position;
    var isRotated = this.labelRotation !== 0;
    var labelsBelowTicks = position !== 'top' && this.axis === 'x';
    if (this.isHorizontal()) {
      var offsetLeft = this.getPixelForTick(0) - this.left;
      var offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
      var paddingLeft = 0;
      var paddingRight = 0;
      if (isRotated) {
        if (labelsBelowTicks) {
          paddingLeft = cos * first.width;
          paddingRight = sin * last.height;
        } else {
          paddingLeft = sin * first.height;
          paddingRight = cos * last.width;
        }
      } else if (align === 'start') {
        paddingRight = last.width;
      } else if (align === 'end') {
        paddingLeft = first.width;
      } else if (align !== 'inner') {
        paddingLeft = first.width / 2;
        paddingRight = last.width / 2;
      }
      this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
      this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
    } else {
      var paddingTop = last.height / 2;
      var paddingBottom = first.height / 2;
      if (align === 'start') {
        paddingTop = 0;
        paddingBottom = first.height;
      } else if (align === 'end') {
        paddingTop = last.height;
        paddingBottom = 0;
      }
      this.paddingTop = paddingTop + padding;
      this.paddingBottom = paddingBottom + padding;
    }
  };
  _proto17._handleMargins = function _handleMargins() {
    if (this._margins) {
      this._margins.left = Math.max(this.paddingLeft, this._margins.left);
      this._margins.top = Math.max(this.paddingTop, this._margins.top);
      this._margins.right = Math.max(this.paddingRight, this._margins.right);
      this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
    }
  };
  _proto17.afterFit = function afterFit() {
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(this.options.afterFit, [this]);
  };
  _proto17.isHorizontal = function isHorizontal() {
    var _this$options7 = this.options,
      axis = _this$options7.axis,
      position = _this$options7.position;
    return position === 'top' || position === 'bottom' || axis === 'x';
  };
  _proto17.isFullSize = function isFullSize() {
    return this.options.fullSize;
  };
  _proto17._convertTicksToLabels = function _convertTicksToLabels(ticks) {
    this.beforeTickToLabelConversion();
    this.generateTickLabels(ticks);
    var i, ilen;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(ticks[i].label)) {
        ticks.splice(i, 1);
        ilen--;
        i--;
      }
    }
    this.afterTickToLabelConversion();
  };
  _proto17._getLabelSizes = function _getLabelSizes() {
    var labelSizes = this._labelSizes;
    if (!labelSizes) {
      var sampleSize = this.options.ticks.sampleSize;
      var ticks = this.ticks;
      if (sampleSize < ticks.length) {
        ticks = sample(ticks, sampleSize);
      }
      this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length, this.options.ticks.maxTicksLimit);
    }
    return labelSizes;
  };
  _proto17._computeLabelSizes = function _computeLabelSizes(ticks, length, maxTicksLimit) {
    var ctx = this.ctx,
      caches = this._longestTextCache;
    var widths = [];
    var heights = [];
    var increment = Math.floor(length / getTicksLimit(length, maxTicksLimit));
    var widestLabelSize = 0;
    var highestLabelSize = 0;
    var i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
    for (i = 0; i < length; i += increment) {
      label = ticks[i].label;
      tickFont = this._resolveTickFontOptions(i);
      ctx.font = fontString = tickFont.string;
      cache = caches[fontString] = caches[fontString] || {
        data: {},
        gc: []
      };
      lineHeight = tickFont.lineHeight;
      width = height = 0;
      if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(label) && !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["b"])(label)) {
        width = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["V"])(ctx, cache.data, cache.gc, width, label);
        height = lineHeight;
      } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["b"])(label)) {
        for (j = 0, jlen = label.length; j < jlen; ++j) {
          nestedLabel = label[j];
          if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(nestedLabel) && !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["b"])(nestedLabel)) {
            width = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["V"])(ctx, cache.data, cache.gc, width, nestedLabel);
            height += lineHeight;
          }
        }
      }
      widths.push(width);
      heights.push(height);
      widestLabelSize = Math.max(width, widestLabelSize);
      highestLabelSize = Math.max(height, highestLabelSize);
    }
    garbageCollect(caches, length);
    var widest = widths.indexOf(widestLabelSize);
    var highest = heights.indexOf(highestLabelSize);
    var valueAt = function valueAt(idx) {
      return {
        width: widths[idx] || 0,
        height: heights[idx] || 0
      };
    };
    return {
      first: valueAt(0),
      last: valueAt(length - 1),
      widest: valueAt(widest),
      highest: valueAt(highest),
      widths: widths,
      heights: heights
    };
  };
  _proto17.getLabelForValue = function getLabelForValue(value) {
    return value;
  };
  _proto17.getPixelForValue = function getPixelForValue(value, index) {
    return NaN;
  };
  _proto17.getValueForPixel = function getValueForPixel(pixel) {};
  _proto17.getPixelForTick = function getPixelForTick(index) {
    var ticks = this.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return this.getPixelForValue(ticks[index].value);
  };
  _proto17.getPixelForDecimal = function getPixelForDecimal(decimal) {
    if (this._reversePixels) {
      decimal = 1 - decimal;
    }
    var pixel = this._startPixel + decimal * this._length;
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["W"])(this._alignToPixels ? Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["X"])(this.chart, pixel, 0) : pixel);
  };
  _proto17.getDecimalForPixel = function getDecimalForPixel(pixel) {
    var decimal = (pixel - this._startPixel) / this._length;
    return this._reversePixels ? 1 - decimal : decimal;
  };
  _proto17.getBasePixel = function getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  };
  _proto17.getBaseValue = function getBaseValue() {
    var min = this.min,
      max = this.max;
    return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
  };
  _proto17.getContext = function getContext(index) {
    var ticks = this.ticks || [];
    if (index >= 0 && index < ticks.length) {
      var tick = ticks[index];
      return tick.$context || (tick.$context = createTickContext(this.getContext(), index, tick));
    }
    return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
  };
  _proto17._tickSize = function _tickSize() {
    var optionTicks = this.options.ticks;
    var rot = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["t"])(this.labelRotation);
    var cos = Math.abs(Math.cos(rot));
    var sin = Math.abs(Math.sin(rot));
    var labelSizes = this._getLabelSizes();
    var padding = optionTicks.autoSkipPadding || 0;
    var w = labelSizes ? labelSizes.widest.width + padding : 0;
    var h = labelSizes ? labelSizes.highest.height + padding : 0;
    return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
  };
  _proto17._isVisible = function _isVisible() {
    var display = this.options.display;
    if (display !== 'auto') {
      return !!display;
    }
    return this.getMatchingVisibleMetas().length > 0;
  };
  _proto17._computeGridLineItems = function _computeGridLineItems(chartArea) {
    var axis = this.axis;
    var chart = this.chart;
    var options = this.options;
    var grid = options.grid,
      position = options.position,
      border = options.border;
    var offset = grid.offset;
    var isHorizontal = this.isHorizontal();
    var ticks = this.ticks;
    var ticksLength = ticks.length + (offset ? 1 : 0);
    var tl = getTickMarkLength(grid);
    var items = [];
    var borderOpts = border.setContext(this.getContext());
    var axisWidth = borderOpts.display ? borderOpts.width : 0;
    var axisHalfWidth = axisWidth / 2;
    var alignBorderValue = function alignBorderValue(pixel) {
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["X"])(chart, pixel, axisWidth);
    };
    var borderValue, i, lineValue, alignedLineValue;
    var tx1, ty1, tx2, ty2, x1, y1, x2, y2;
    if (position === 'top') {
      borderValue = alignBorderValue(this.bottom);
      ty1 = this.bottom - tl;
      ty2 = borderValue - axisHalfWidth;
      y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
      y2 = chartArea.bottom;
    } else if (position === 'bottom') {
      borderValue = alignBorderValue(this.top);
      y1 = chartArea.top;
      y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
      ty1 = borderValue + axisHalfWidth;
      ty2 = this.top + tl;
    } else if (position === 'left') {
      borderValue = alignBorderValue(this.right);
      tx1 = this.right - tl;
      tx2 = borderValue - axisHalfWidth;
      x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
      x2 = chartArea.right;
    } else if (position === 'right') {
      borderValue = alignBorderValue(this.left);
      x1 = chartArea.left;
      x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
      tx1 = borderValue + axisHalfWidth;
      tx2 = this.left + tl;
    } else if (axis === 'x') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
      } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(position)) {
        var positionAxisID = Object.keys(position)[0];
        var value = position[positionAxisID];
        borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
      }
      y1 = chartArea.top;
      y2 = chartArea.bottom;
      ty1 = borderValue + axisHalfWidth;
      ty2 = ty1 + tl;
    } else if (axis === 'y') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
      } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(position)) {
        var _positionAxisID2 = Object.keys(position)[0];
        var _value2 = position[_positionAxisID2];
        borderValue = alignBorderValue(this.chart.scales[_positionAxisID2].getPixelForValue(_value2));
      }
      tx1 = borderValue - axisHalfWidth;
      tx2 = tx1 - tl;
      x1 = chartArea.left;
      x2 = chartArea.right;
    }
    var limit = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(options.ticks.maxTicksLimit, ticksLength);
    var step = Math.max(1, Math.ceil(ticksLength / limit));
    for (i = 0; i < ticksLength; i += step) {
      var context = this.getContext(i);
      var optsAtIndex = grid.setContext(context);
      var optsAtIndexBorder = border.setContext(context);
      var lineWidth = optsAtIndex.lineWidth;
      var lineColor = optsAtIndex.color;
      var borderDash = optsAtIndexBorder.dash || [];
      var borderDashOffset = optsAtIndexBorder.dashOffset;
      var tickWidth = optsAtIndex.tickWidth;
      var tickColor = optsAtIndex.tickColor;
      var tickBorderDash = optsAtIndex.tickBorderDash || [];
      var tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
      lineValue = getPixelForGridLine(this, i, offset);
      if (lineValue === undefined) {
        continue;
      }
      alignedLineValue = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["X"])(chart, lineValue, lineWidth);
      if (isHorizontal) {
        tx1 = tx2 = x1 = x2 = alignedLineValue;
      } else {
        ty1 = ty2 = y1 = y2 = alignedLineValue;
      }
      items.push({
        tx1: tx1,
        ty1: ty1,
        tx2: tx2,
        ty2: ty2,
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        width: lineWidth,
        color: lineColor,
        borderDash: borderDash,
        borderDashOffset: borderDashOffset,
        tickWidth: tickWidth,
        tickColor: tickColor,
        tickBorderDash: tickBorderDash,
        tickBorderDashOffset: tickBorderDashOffset
      });
    }
    this._ticksLength = ticksLength;
    this._borderValue = borderValue;
    return items;
  };
  _proto17._computeLabelItems = function _computeLabelItems(chartArea) {
    var axis = this.axis;
    var options = this.options;
    var position = options.position,
      optionTicks = options.ticks;
    var isHorizontal = this.isHorizontal();
    var ticks = this.ticks;
    var align = optionTicks.align,
      crossAlign = optionTicks.crossAlign,
      padding = optionTicks.padding,
      mirror = optionTicks.mirror;
    var tl = getTickMarkLength(options.grid);
    var tickAndPadding = tl + padding;
    var hTickAndPadding = mirror ? -padding : tickAndPadding;
    var rotation = -Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["t"])(this.labelRotation);
    var items = [];
    var i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
    var textBaseline = 'middle';
    if (position === 'top') {
      y = this.bottom - hTickAndPadding;
      textAlign = this._getXAxisLabelAlignment();
    } else if (position === 'bottom') {
      y = this.top + hTickAndPadding;
      textAlign = this._getXAxisLabelAlignment();
    } else if (position === 'left') {
      var ret = this._getYAxisLabelAlignment(tl);
      textAlign = ret.textAlign;
      x = ret.x;
    } else if (position === 'right') {
      var _ret = this._getYAxisLabelAlignment(tl);
      textAlign = _ret.textAlign;
      x = _ret.x;
    } else if (axis === 'x') {
      if (position === 'center') {
        y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
      } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(position)) {
        var positionAxisID = Object.keys(position)[0];
        var value = position[positionAxisID];
        y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
      }
      textAlign = this._getXAxisLabelAlignment();
    } else if (axis === 'y') {
      if (position === 'center') {
        x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
      } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(position)) {
        var _positionAxisID3 = Object.keys(position)[0];
        var _value3 = position[_positionAxisID3];
        x = this.chart.scales[_positionAxisID3].getPixelForValue(_value3);
      }
      textAlign = this._getYAxisLabelAlignment(tl).textAlign;
    }
    if (axis === 'y') {
      if (align === 'start') {
        textBaseline = 'top';
      } else if (align === 'end') {
        textBaseline = 'bottom';
      }
    }
    var labelSizes = this._getLabelSizes();
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      label = tick.label;
      var optsAtIndex = optionTicks.setContext(this.getContext(i));
      pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
      font = this._resolveTickFontOptions(i);
      lineHeight = font.lineHeight;
      lineCount = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["b"])(label) ? label.length : 1;
      var halfCount = lineCount / 2;
      var color = optsAtIndex.color;
      var strokeColor = optsAtIndex.textStrokeColor;
      var strokeWidth = optsAtIndex.textStrokeWidth;
      var tickTextAlign = textAlign;
      if (isHorizontal) {
        x = pixel;
        if (textAlign === 'inner') {
          if (i === ilen - 1) {
            tickTextAlign = !this.options.reverse ? 'right' : 'left';
          } else if (i === 0) {
            tickTextAlign = !this.options.reverse ? 'left' : 'right';
          } else {
            tickTextAlign = 'center';
          }
        }
        if (position === 'top') {
          if (crossAlign === 'near' || rotation !== 0) {
            textOffset = -lineCount * lineHeight + lineHeight / 2;
          } else if (crossAlign === 'center') {
            textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
          } else {
            textOffset = -labelSizes.highest.height + lineHeight / 2;
          }
        } else {
          if (crossAlign === 'near' || rotation !== 0) {
            textOffset = lineHeight / 2;
          } else if (crossAlign === 'center') {
            textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
          } else {
            textOffset = labelSizes.highest.height - lineCount * lineHeight;
          }
        }
        if (mirror) {
          textOffset *= -1;
        }
        if (rotation !== 0 && !optsAtIndex.showLabelBackdrop) {
          x += lineHeight / 2 * Math.sin(rotation);
        }
      } else {
        y = pixel;
        textOffset = (1 - lineCount) * lineHeight / 2;
      }
      var backdrop = void 0;
      if (optsAtIndex.showLabelBackdrop) {
        var labelPadding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(optsAtIndex.backdropPadding);
        var height = labelSizes.heights[i];
        var width = labelSizes.widths[i];
        var top = textOffset - labelPadding.top;
        var left = 0 - labelPadding.left;
        switch (textBaseline) {
          case 'middle':
            top -= height / 2;
            break;
          case 'bottom':
            top -= height;
            break;
        }
        switch (textAlign) {
          case 'center':
            left -= width / 2;
            break;
          case 'right':
            left -= width;
            break;
          case 'inner':
            if (i === ilen - 1) {
              left -= width;
            } else if (i > 0) {
              left -= width / 2;
            }
            break;
        }
        backdrop = {
          left: left,
          top: top,
          width: width + labelPadding.width,
          height: height + labelPadding.height,
          color: optsAtIndex.backdropColor
        };
      }
      items.push({
        label: label,
        font: font,
        textOffset: textOffset,
        options: {
          rotation: rotation,
          color: color,
          strokeColor: strokeColor,
          strokeWidth: strokeWidth,
          textAlign: tickTextAlign,
          textBaseline: textBaseline,
          translation: [x, y],
          backdrop: backdrop
        }
      });
    }
    return items;
  };
  _proto17._getXAxisLabelAlignment = function _getXAxisLabelAlignment() {
    var _this$options8 = this.options,
      position = _this$options8.position,
      ticks = _this$options8.ticks;
    var rotation = -Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["t"])(this.labelRotation);
    if (rotation) {
      return position === 'top' ? 'left' : 'right';
    }
    var align = 'center';
    if (ticks.align === 'start') {
      align = 'left';
    } else if (ticks.align === 'end') {
      align = 'right';
    } else if (ticks.align === 'inner') {
      align = 'inner';
    }
    return align;
  };
  _proto17._getYAxisLabelAlignment = function _getYAxisLabelAlignment(tl) {
    var _this$options9 = this.options,
      position = _this$options9.position,
      _this$options9$ticks = _this$options9.ticks,
      crossAlign = _this$options9$ticks.crossAlign,
      mirror = _this$options9$ticks.mirror,
      padding = _this$options9$ticks.padding;
    var labelSizes = this._getLabelSizes();
    var tickAndPadding = tl + padding;
    var widest = labelSizes.widest.width;
    var textAlign;
    var x;
    if (position === 'left') {
      if (mirror) {
        x = this.right + padding;
        if (crossAlign === 'near') {
          textAlign = 'left';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x += widest / 2;
        } else {
          textAlign = 'right';
          x += widest;
        }
      } else {
        x = this.right - tickAndPadding;
        if (crossAlign === 'near') {
          textAlign = 'right';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x -= widest / 2;
        } else {
          textAlign = 'left';
          x = this.left;
        }
      }
    } else if (position === 'right') {
      if (mirror) {
        x = this.left + padding;
        if (crossAlign === 'near') {
          textAlign = 'right';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x -= widest / 2;
        } else {
          textAlign = 'left';
          x -= widest;
        }
      } else {
        x = this.left + tickAndPadding;
        if (crossAlign === 'near') {
          textAlign = 'left';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x += widest / 2;
        } else {
          textAlign = 'right';
          x = this.right;
        }
      }
    } else {
      textAlign = 'right';
    }
    return {
      textAlign: textAlign,
      x: x
    };
  };
  _proto17._computeLabelArea = function _computeLabelArea() {
    if (this.options.ticks.mirror) {
      return;
    }
    var chart = this.chart;
    var position = this.options.position;
    if (position === 'left' || position === 'right') {
      return {
        top: 0,
        left: this.left,
        bottom: chart.height,
        right: this.right
      };
    }
    if (position === 'top' || position === 'bottom') {
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: chart.width
      };
    }
  };
  _proto17.drawBackground = function drawBackground() {
    var ctx = this.ctx,
      backgroundColor = this.options.backgroundColor,
      left = this.left,
      top = this.top,
      width = this.width,
      height = this.height;
    if (backgroundColor) {
      ctx.save();
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(left, top, width, height);
      ctx.restore();
    }
  };
  _proto17.getLineWidthForValue = function getLineWidthForValue(value) {
    var grid = this.options.grid;
    if (!this._isVisible() || !grid.display) {
      return 0;
    }
    var ticks = this.ticks;
    var index = ticks.findIndex(function (t) {
      return t.value === value;
    });
    if (index >= 0) {
      var opts = grid.setContext(this.getContext(index));
      return opts.lineWidth;
    }
    return 0;
  };
  _proto17.drawGrid = function drawGrid(chartArea) {
    var grid = this.options.grid;
    var ctx = this.ctx;
    var items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
    var i, ilen;
    var drawLine = function drawLine(p1, p2, style) {
      if (!style.width || !style.color) {
        return;
      }
      ctx.save();
      ctx.lineWidth = style.width;
      ctx.strokeStyle = style.color;
      ctx.setLineDash(style.borderDash || []);
      ctx.lineDashOffset = style.borderDashOffset;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      ctx.restore();
    };
    if (grid.display) {
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        var item = items[i];
        if (grid.drawOnChartArea) {
          drawLine({
            x: item.x1,
            y: item.y1
          }, {
            x: item.x2,
            y: item.y2
          }, item);
        }
        if (grid.drawTicks) {
          drawLine({
            x: item.tx1,
            y: item.ty1
          }, {
            x: item.tx2,
            y: item.ty2
          }, {
            color: item.tickColor,
            width: item.tickWidth,
            borderDash: item.tickBorderDash,
            borderDashOffset: item.tickBorderDashOffset
          });
        }
      }
    }
  };
  _proto17.drawBorder = function drawBorder() {
    var chart = this.chart,
      ctx = this.ctx,
      _this$options10 = this.options,
      border = _this$options10.border,
      grid = _this$options10.grid;
    var borderOpts = border.setContext(this.getContext());
    var axisWidth = border.display ? borderOpts.width : 0;
    if (!axisWidth) {
      return;
    }
    var lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
    var borderValue = this._borderValue;
    var x1, x2, y1, y2;
    if (this.isHorizontal()) {
      x1 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["X"])(chart, this.left, axisWidth) - axisWidth / 2;
      x2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["X"])(chart, this.right, lastLineWidth) + lastLineWidth / 2;
      y1 = y2 = borderValue;
    } else {
      y1 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["X"])(chart, this.top, axisWidth) - axisWidth / 2;
      y2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["X"])(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
      x1 = x2 = borderValue;
    }
    ctx.save();
    ctx.lineWidth = borderOpts.width;
    ctx.strokeStyle = borderOpts.color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  };
  _proto17.drawLabels = function drawLabels(chartArea) {
    var optionTicks = this.options.ticks;
    if (!optionTicks.display) {
      return;
    }
    var ctx = this.ctx;
    var area = this._computeLabelArea();
    if (area) {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Y"])(ctx, area);
    }
    var items = this.getLabelItems(chartArea);
    for (var _iterator10 = _createForOfIteratorHelperLoose(items), _step10; !(_step10 = _iterator10()).done;) {
      var item = _step10.value;
      var renderTextOptions = item.options;
      var tickFont = item.font;
      var label = item.label;
      var y = item.textOffset;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Z"])(ctx, label, 0, y, tickFont, renderTextOptions);
    }
    if (area) {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["$"])(ctx);
    }
  };
  _proto17.drawTitle = function drawTitle() {
    var ctx = this.ctx,
      _this$options11 = this.options,
      position = _this$options11.position,
      title = _this$options11.title,
      reverse = _this$options11.reverse;
    if (!title.display) {
      return;
    }
    var font = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(title.font);
    var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(title.padding);
    var align = title.align;
    var offset = font.lineHeight / 2;
    if (position === 'bottom' || position === 'center' || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(position)) {
      offset += padding.bottom;
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["b"])(title.text)) {
        offset += font.lineHeight * (title.text.length - 1);
      }
    } else {
      offset += padding.top;
    }
    var _titleArgs = titleArgs(this, offset, position, align),
      titleX = _titleArgs.titleX,
      titleY = _titleArgs.titleY,
      maxWidth = _titleArgs.maxWidth,
      rotation = _titleArgs.rotation;
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Z"])(ctx, title.text, 0, 0, font, {
      color: title.color,
      maxWidth: maxWidth,
      rotation: rotation,
      textAlign: titleAlign(align, position, reverse),
      textBaseline: 'middle',
      translation: [titleX, titleY]
    });
  };
  _proto17.draw = function draw(chartArea) {
    if (!this._isVisible()) {
      return;
    }
    this.drawBackground();
    this.drawGrid(chartArea);
    this.drawBorder();
    this.drawTitle();
    this.drawLabels(chartArea);
  };
  _proto17._layers = function _layers() {
    var _this10 = this;
    var opts = this.options;
    var tz = opts.ticks && opts.ticks.z || 0;
    var gz = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(opts.grid && opts.grid.z, -1);
    var bz = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(opts.border && opts.border.z, 0);
    if (!this._isVisible() || this.draw !== Scale.prototype.draw) {
      return [{
        z: tz,
        draw: function draw(chartArea) {
          _this10.draw(chartArea);
        }
      }];
    }
    return [{
      z: gz,
      draw: function draw(chartArea) {
        _this10.drawBackground();
        _this10.drawGrid(chartArea);
        _this10.drawTitle();
      }
    }, {
      z: bz,
      draw: function draw() {
        _this10.drawBorder();
      }
    }, {
      z: tz,
      draw: function draw(chartArea) {
        _this10.drawLabels(chartArea);
      }
    }];
  };
  _proto17.getMatchingVisibleMetas = function getMatchingVisibleMetas(type) {
    var metas = this.chart.getSortedVisibleDatasetMetas();
    var axisID = this.axis + 'AxisID';
    var result = [];
    var i, ilen;
    for (i = 0, ilen = metas.length; i < ilen; ++i) {
      var meta = metas[i];
      if (meta[axisID] === this.id && (!type || meta.type === type)) {
        result.push(meta);
      }
    }
    return result;
  };
  _proto17._resolveTickFontOptions = function _resolveTickFontOptions(index) {
    var opts = this.options.ticks.setContext(this.getContext(index));
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(opts.font);
  };
  _proto17._maxDigits = function _maxDigits() {
    var fontSize = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / fontSize;
  };
  return Scale;
}(Element);
var TypedRegistry = /*#__PURE__*/function () {
  function TypedRegistry(type, scope, override) {
    this.type = type;
    this.scope = scope;
    this.override = override;
    this.items = Object.create(null);
  }
  var _proto18 = TypedRegistry.prototype;
  _proto18.isForType = function isForType(type) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
  };
  _proto18.register = function register(item) {
    var proto = Object.getPrototypeOf(item);
    var parentScope;
    if (isIChartComponent(proto)) {
      parentScope = this.register(proto);
    }
    var items = this.items;
    var id = item.id;
    var scope = this.scope + '.' + id;
    if (!id) {
      throw new Error('class does not have id: ' + item);
    }
    if (id in items) {
      return scope;
    }
    items[id] = item;
    registerDefaults(item, scope, parentScope);
    if (this.override) {
      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].override(item.id, item.overrides);
    }
    return scope;
  };
  _proto18.get = function get(id) {
    return this.items[id];
  };
  _proto18.unregister = function unregister(item) {
    var items = this.items;
    var id = item.id;
    var scope = this.scope;
    if (id in items) {
      delete items[id];
    }
    if (scope && id in _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"][scope]) {
      delete _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"][scope][id];
      if (this.override) {
        delete _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a3"][id];
      }
    }
  };
  return TypedRegistry;
}();
function registerDefaults(item, scope, parentScope) {
  var itemDefaults = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a4"])(Object.create(null), [parentScope ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].get(parentScope) : {}, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].get(scope), item.defaults]);
  _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].set(scope, itemDefaults);
  if (item.defaultRoutes) {
    routeDefaults(scope, item.defaultRoutes);
  }
  if (item.descriptors) {
    _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].describe(scope, item.descriptors);
  }
}
function routeDefaults(scope, routes) {
  Object.keys(routes).forEach(function (property) {
    var propertyParts = property.split('.');
    var sourceName = propertyParts.pop();
    var sourceScope = [scope].concat(propertyParts).join('.');
    var parts = routes[property].split('.');
    var targetName = parts.pop();
    var targetScope = parts.join('.');
    _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].route(sourceScope, sourceName, targetScope, targetName);
  });
}
function isIChartComponent(proto) {
  return 'id' in proto && 'defaults' in proto;
}
var Registry = /*#__PURE__*/function () {
  function Registry() {
    this.controllers = new TypedRegistry(DatasetController, 'datasets', true);
    this.elements = new TypedRegistry(Element, 'elements');
    this.plugins = new TypedRegistry(Object, 'plugins');
    this.scales = new TypedRegistry(Scale, 'scales');
    this._typedRegistries = [this.controllers, this.scales, this.elements];
  }
  var _proto19 = Registry.prototype;
  _proto19.add = function add() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    this._each('register', args);
  };
  _proto19.remove = function remove() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    this._each('unregister', args);
  };
  _proto19.addControllers = function addControllers() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    this._each('register', args, this.controllers);
  };
  _proto19.addElements = function addElements() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    this._each('register', args, this.elements);
  };
  _proto19.addPlugins = function addPlugins() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    this._each('register', args, this.plugins);
  };
  _proto19.addScales = function addScales() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    this._each('register', args, this.scales);
  };
  _proto19.getController = function getController(id) {
    return this._get(id, this.controllers, 'controller');
  };
  _proto19.getElement = function getElement(id) {
    return this._get(id, this.elements, 'element');
  };
  _proto19.getPlugin = function getPlugin(id) {
    return this._get(id, this.plugins, 'plugin');
  };
  _proto19.getScale = function getScale(id) {
    return this._get(id, this.scales, 'scale');
  };
  _proto19.removeControllers = function removeControllers() {
    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }
    this._each('unregister', args, this.controllers);
  };
  _proto19.removeElements = function removeElements() {
    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }
    this._each('unregister', args, this.elements);
  };
  _proto19.removePlugins = function removePlugins() {
    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }
    this._each('unregister', args, this.plugins);
  };
  _proto19.removeScales = function removeScales() {
    for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      args[_key10] = arguments[_key10];
    }
    this._each('unregister', args, this.scales);
  };
  _proto19._each = function _each(method, args, typedRegistry) {
    var _this11 = this;
    [].concat(args).forEach(function (arg) {
      var reg = typedRegistry || _this11._getRegistryForType(arg);
      if (typedRegistry || reg.isForType(arg) || reg === _this11.plugins && arg.id) {
        _this11._exec(method, reg, arg);
      } else {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(arg, function (item) {
          var itemReg = typedRegistry || _this11._getRegistryForType(item);
          _this11._exec(method, itemReg, item);
        });
      }
    });
  };
  _proto19._exec = function _exec(method, registry, component) {
    var camelMethod = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a5"])(method);
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(component['before' + camelMethod], [], component);
    registry[method](component);
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(component['after' + camelMethod], [], component);
  };
  _proto19._getRegistryForType = function _getRegistryForType(type) {
    for (var i = 0; i < this._typedRegistries.length; i++) {
      var reg = this._typedRegistries[i];
      if (reg.isForType(type)) {
        return reg;
      }
    }
    return this.plugins;
  };
  _proto19._get = function _get(id, typedRegistry, type) {
    var item = typedRegistry.get(id);
    if (item === undefined) {
      throw new Error('"' + id + '" is not a registered ' + type + '.');
    }
    return item;
  };
  return Registry;
}();
var registry = /* #__PURE__ */new Registry();
var PluginService = /*#__PURE__*/function () {
  function PluginService() {
    this._init = [];
  }
  var _proto20 = PluginService.prototype;
  _proto20.notify = function notify(chart, hook, args, filter) {
    if (hook === 'beforeInit') {
      this._init = this._createDescriptors(chart, true);
      this._notify(this._init, chart, 'install');
    }
    var descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
    var result = this._notify(descriptors, chart, hook, args);
    if (hook === 'afterDestroy') {
      this._notify(descriptors, chart, 'stop');
      this._notify(this._init, chart, 'uninstall');
    }
    return result;
  };
  _proto20._notify = function _notify(descriptors, chart, hook, args) {
    args = args || {};
    for (var _iterator11 = _createForOfIteratorHelperLoose(descriptors), _step11; !(_step11 = _iterator11()).done;) {
      var descriptor = _step11.value;
      var plugin = descriptor.plugin;
      var method = plugin[hook];
      var params = [chart, args, descriptor.options];
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(method, params, plugin) === false && args.cancelable) {
        return false;
      }
    }
    return true;
  };
  _proto20.invalidate = function invalidate() {
    if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(this._cache)) {
      this._oldCache = this._cache;
      this._cache = undefined;
    }
  };
  _proto20._descriptors = function _descriptors(chart) {
    if (this._cache) {
      return this._cache;
    }
    var descriptors = this._cache = this._createDescriptors(chart);
    this._notifyStateChanges(chart);
    return descriptors;
  };
  _proto20._createDescriptors = function _createDescriptors(chart, all) {
    var config = chart && chart.config;
    var options = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(config.options && config.options.plugins, {});
    var plugins = allPlugins(config);
    return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
  };
  _proto20._notifyStateChanges = function _notifyStateChanges(chart) {
    var previousDescriptors = this._oldCache || [];
    var descriptors = this._cache;
    var diff = function diff(a, b) {
      return a.filter(function (x) {
        return !b.some(function (y) {
          return x.plugin.id === y.plugin.id;
        });
      });
    };
    this._notify(diff(previousDescriptors, descriptors), chart, 'stop');
    this._notify(diff(descriptors, previousDescriptors), chart, 'start');
  };
  return PluginService;
}();
function allPlugins(config) {
  var localIds = {};
  var plugins = [];
  var keys = Object.keys(registry.plugins.items);
  for (var i = 0; i < keys.length; i++) {
    plugins.push(registry.getPlugin(keys[i]));
  }
  var local = config.plugins || [];
  for (var _i2 = 0; _i2 < local.length; _i2++) {
    var plugin = local[_i2];
    if (plugins.indexOf(plugin) === -1) {
      plugins.push(plugin);
      localIds[plugin.id] = true;
    }
  }
  return {
    plugins: plugins,
    localIds: localIds
  };
}
function getOpts(options, all) {
  if (!all && options === false) {
    return null;
  }
  if (options === true) {
    return {};
  }
  return options;
}
function createDescriptors(chart, _ref2, options, all) {
  var plugins = _ref2.plugins,
    localIds = _ref2.localIds;
  var result = [];
  var context = chart.getContext();
  for (var _iterator12 = _createForOfIteratorHelperLoose(plugins), _step12; !(_step12 = _iterator12()).done;) {
    var plugin = _step12.value;
    var id = plugin.id;
    var opts = getOpts(options[id], all);
    if (opts === null) {
      continue;
    }
    result.push({
      plugin: plugin,
      options: pluginOpts(chart.config, {
        plugin: plugin,
        local: localIds[id]
      }, opts, context)
    });
  }
  return result;
}
function pluginOpts(config, _ref3, opts, context) {
  var plugin = _ref3.plugin,
    local = _ref3.local;
  var keys = config.pluginScopeKeys(plugin);
  var scopes = config.getOptionScopes(opts, keys);
  if (local && plugin.defaults) {
    scopes.push(plugin.defaults);
  }
  return config.createResolver(scopes, context, [''], {
    scriptable: false,
    indexable: false,
    allKeys: true
  });
}
function getIndexAxis(type, options) {
  var datasetDefaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].datasets[type] || {};
  var datasetOptions = (options.datasets || {})[type] || {};
  return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || 'x';
}
function getAxisFromDefaultScaleID(id, indexAxis) {
  var axis = id;
  if (id === '_index_') {
    axis = indexAxis;
  } else if (id === '_value_') {
    axis = indexAxis === 'x' ? 'y' : 'x';
  }
  return axis;
}
function getDefaultScaleIDFromAxis(axis, indexAxis) {
  return axis === indexAxis ? '_index_' : '_value_';
}
function idMatchesAxis(id) {
  if (id === 'x' || id === 'y' || id === 'r') {
    return id;
  }
}
function axisFromPosition(position) {
  if (position === 'top' || position === 'bottom') {
    return 'x';
  }
  if (position === 'left' || position === 'right') {
    return 'y';
  }
}
function determineAxis(id) {
  if (idMatchesAxis(id)) {
    return id;
  }
  for (var _len11 = arguments.length, scaleOptions = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
    scaleOptions[_key11 - 1] = arguments[_key11];
  }
  for (var _i3 = 0, _scaleOptions = scaleOptions; _i3 < _scaleOptions.length; _i3++) {
    var opts = _scaleOptions[_i3];
    var axis = opts.axis || axisFromPosition(opts.position) || id.length > 1 && idMatchesAxis(id[0].toLowerCase());
    if (axis) {
      return axis;
    }
  }
  throw new Error("Cannot determine type of '" + id + "' axis. Please provide 'axis' or 'position' option.");
}
function getAxisFromDataset(id, axis, dataset) {
  if (dataset[axis + 'AxisID'] === id) {
    return {
      axis: axis
    };
  }
}
function retrieveAxisFromDatasets(id, config) {
  if (config.data && config.data.datasets) {
    var boundDs = config.data.datasets.filter(function (d) {
      return d.xAxisID === id || d.yAxisID === id;
    });
    if (boundDs.length) {
      return getAxisFromDataset(id, 'x', boundDs[0]) || getAxisFromDataset(id, 'y', boundDs[0]);
    }
  }
  return {};
}
function mergeScaleConfig(config, options) {
  var chartDefaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a3"][config.type] || {
    scales: {}
  };
  var configScales = options.scales || {};
  var chartIndexAxis = getIndexAxis(config.type, options);
  var scales = Object.create(null);
  Object.keys(configScales).forEach(function (id) {
    var scaleConf = configScales[id];
    if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(scaleConf)) {
      return console.error("Invalid scale configuration for scale: " + id);
    }
    if (scaleConf._proxy) {
      return console.warn("Ignoring resolver passed as options for scale: " + id);
    }
    var axis = determineAxis(id, scaleConf, retrieveAxisFromDatasets(id, config), _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].scales[scaleConf.type]);
    var defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
    var defaultScaleOptions = chartDefaults.scales || {};
    scales[id] = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ab"])(Object.create(null), [{
      axis: axis
    }, scaleConf, defaultScaleOptions[axis], defaultScaleOptions[defaultId]]);
  });
  config.data.datasets.forEach(function (dataset) {
    var type = dataset.type || config.type;
    var indexAxis = dataset.indexAxis || getIndexAxis(type, options);
    var datasetDefaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a3"][type] || {};
    var defaultScaleOptions = datasetDefaults.scales || {};
    Object.keys(defaultScaleOptions).forEach(function (defaultID) {
      var axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
      var id = dataset[axis + 'AxisID'] || axis;
      scales[id] = scales[id] || Object.create(null);
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ab"])(scales[id], [{
        axis: axis
      }, configScales[id], defaultScaleOptions[defaultID]]);
    });
  });
  Object.keys(scales).forEach(function (key) {
    var scale = scales[key];
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ab"])(scale, [_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].scales[scale.type], _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].scale]);
  });
  return scales;
}
function initOptions(config) {
  var options = config.options || (config.options = {});
  options.plugins = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(options.plugins, {});
  options.scales = mergeScaleConfig(config, options);
}
function initData(data) {
  data = data || {};
  data.datasets = data.datasets || [];
  data.labels = data.labels || [];
  return data;
}
function initConfig(config) {
  config = config || {};
  config.data = initData(config.data);
  initOptions(config);
  return config;
}
var keyCache = new Map();
var keysCached = new Set();
function cachedKeys(cacheKey, generate) {
  var keys = keyCache.get(cacheKey);
  if (!keys) {
    keys = generate();
    keyCache.set(cacheKey, keys);
    keysCached.add(keys);
  }
  return keys;
}
var addIfFound = function addIfFound(set, obj, key) {
  var opts = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["f"])(obj, key);
  if (opts !== undefined) {
    set.add(opts);
  }
};
var Config = /*#__PURE__*/function () {
  function Config(config) {
    this._config = initConfig(config);
    this._scopeCache = new Map();
    this._resolverCache = new Map();
  }
  var _proto21 = Config.prototype;
  _proto21.update = function update() {
    var config = this._config;
    this.clearCache();
    initOptions(config);
  };
  _proto21.clearCache = function clearCache() {
    this._scopeCache.clear();
    this._resolverCache.clear();
  };
  _proto21.datasetScopeKeys = function datasetScopeKeys(datasetType) {
    return cachedKeys(datasetType, function () {
      return [["datasets." + datasetType, '']];
    });
  };
  _proto21.datasetAnimationScopeKeys = function datasetAnimationScopeKeys(datasetType, transition) {
    return cachedKeys(datasetType + ".transition." + transition, function () {
      return [["datasets." + datasetType + ".transitions." + transition, "transitions." + transition], ["datasets." + datasetType, '']];
    });
  };
  _proto21.datasetElementScopeKeys = function datasetElementScopeKeys(datasetType, elementType) {
    return cachedKeys(datasetType + "-" + elementType, function () {
      return [["datasets." + datasetType + ".elements." + elementType, "datasets." + datasetType, "elements." + elementType, '']];
    });
  };
  _proto21.pluginScopeKeys = function pluginScopeKeys(plugin) {
    var id = plugin.id;
    var type = this.type;
    return cachedKeys(type + "-plugin-" + id, function () {
      return [["plugins." + id].concat(plugin.additionalOptionScopes || [])];
    });
  };
  _proto21._cachedScopes = function _cachedScopes(mainScope, resetCache) {
    var _scopeCache = this._scopeCache;
    var cache = _scopeCache.get(mainScope);
    if (!cache || resetCache) {
      cache = new Map();
      _scopeCache.set(mainScope, cache);
    }
    return cache;
  };
  _proto21.getOptionScopes = function getOptionScopes(mainScope, keyLists, resetCache) {
    var options = this.options,
      type = this.type;
    var cache = this._cachedScopes(mainScope, resetCache);
    var cached = cache.get(keyLists);
    if (cached) {
      return cached;
    }
    var scopes = new Set();
    keyLists.forEach(function (keys) {
      if (mainScope) {
        scopes.add(mainScope);
        keys.forEach(function (key) {
          return addIfFound(scopes, mainScope, key);
        });
      }
      keys.forEach(function (key) {
        return addIfFound(scopes, options, key);
      });
      keys.forEach(function (key) {
        return addIfFound(scopes, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a3"][type] || {}, key);
      });
      keys.forEach(function (key) {
        return addIfFound(scopes, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"], key);
      });
      keys.forEach(function (key) {
        return addIfFound(scopes, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a6"], key);
      });
    });
    var array = Array.from(scopes);
    if (array.length === 0) {
      array.push(Object.create(null));
    }
    if (keysCached.has(keyLists)) {
      cache.set(keyLists, array);
    }
    return array;
  };
  _proto21.chartOptionScopes = function chartOptionScopes() {
    var options = this.options,
      type = this.type;
    return [options, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a3"][type] || {}, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].datasets[type] || {}, {
      type: type
    }, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"], _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a6"]];
  };
  _proto21.resolveNamedOptions = function resolveNamedOptions(scopes, names, context, prefixes) {
    if (prefixes === void 0) {
      prefixes = [''];
    }
    var result = {
      $shared: true
    };
    var _getResolver = getResolver(this._resolverCache, scopes, prefixes),
      resolver = _getResolver.resolver,
      subPrefixes = _getResolver.subPrefixes;
    var options = resolver;
    if (needContext(resolver, names)) {
      result.$shared = false;
      context = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a7"])(context) ? context() : context;
      var subResolver = this.createResolver(scopes, context, subPrefixes);
      options = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a8"])(resolver, context, subResolver);
    }
    for (var _iterator13 = _createForOfIteratorHelperLoose(names), _step13; !(_step13 = _iterator13()).done;) {
      var prop = _step13.value;
      result[prop] = options[prop];
    }
    return result;
  };
  _proto21.createResolver = function createResolver(scopes, context, prefixes, descriptorDefaults) {
    if (prefixes === void 0) {
      prefixes = [''];
    }
    var _getResolver2 = getResolver(this._resolverCache, scopes, prefixes),
      resolver = _getResolver2.resolver;
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(context) ? Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a8"])(resolver, context, undefined, descriptorDefaults) : resolver;
  };
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Config, [{
    key: "platform",
    get: function get() {
      return this._config.platform;
    }
  }, {
    key: "type",
    get: function get() {
      return this._config.type;
    },
    set: function set(type) {
      this._config.type = type;
    }
  }, {
    key: "data",
    get: function get() {
      return this._config.data;
    },
    set: function set(data) {
      this._config.data = initData(data);
    }
  }, {
    key: "options",
    get: function get() {
      return this._config.options;
    },
    set: function set(options) {
      this._config.options = options;
    }
  }, {
    key: "plugins",
    get: function get() {
      return this._config.plugins;
    }
  }]);
}();
function getResolver(resolverCache, scopes, prefixes) {
  var cache = resolverCache.get(scopes);
  if (!cache) {
    cache = new Map();
    resolverCache.set(scopes, cache);
  }
  var cacheKey = prefixes.join();
  var cached = cache.get(cacheKey);
  if (!cached) {
    var resolver = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a9"])(scopes, prefixes);
    cached = {
      resolver: resolver,
      subPrefixes: prefixes.filter(function (p) {
        return !p.toLowerCase().includes('hover');
      })
    };
    cache.set(cacheKey, cached);
  }
  return cached;
}
var hasFunction = function hasFunction(value) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(value) && Object.getOwnPropertyNames(value).some(function (key) {
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a7"])(value[key]);
  });
};
function needContext(proxy, names) {
  var _descriptors2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aa"])(proxy),
    isScriptable = _descriptors2.isScriptable,
    isIndexable = _descriptors2.isIndexable;
  for (var _iterator14 = _createForOfIteratorHelperLoose(names), _step14; !(_step14 = _iterator14()).done;) {
    var prop = _step14.value;
    var scriptable = isScriptable(prop);
    var indexable = isIndexable(prop);
    var value = (indexable || scriptable) && proxy[prop];
    if (scriptable && (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a7"])(value) || hasFunction(value)) || indexable && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["b"])(value)) {
      return true;
    }
  }
  return false;
}
var version = "4.4.7";
var KNOWN_POSITIONS = ['top', 'bottom', 'left', 'right', 'chartArea'];
function positionIsHorizontal(position, axis) {
  return position === 'top' || position === 'bottom' || KNOWN_POSITIONS.indexOf(position) === -1 && axis === 'x';
}
function compare2Level(l1, l2) {
  return function (a, b) {
    return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
  };
}
function onAnimationsComplete(context) {
  var chart = context.chart;
  var animationOptions = chart.options.animation;
  chart.notifyPlugins('afterRender');
  Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(animationOptions && animationOptions.onComplete, [context], chart);
}
function onAnimationProgress(context) {
  var chart = context.chart;
  var animationOptions = chart.options.animation;
  Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(animationOptions && animationOptions.onProgress, [context], chart);
}
function getCanvas(item) {
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["M"])() && typeof item === 'string') {
    item = document.getElementById(item);
  } else if (item && item.length) {
    item = item[0];
  }
  if (item && item.canvas) {
    item = item.canvas;
  }
  return item;
}
var instances = {};
var getChart = function getChart(key) {
  var canvas = getCanvas(key);
  return Object.values(instances).filter(function (c) {
    return c.canvas === canvas;
  }).pop();
};
function moveNumericKeys(obj, start, move) {
  var keys = Object.keys(obj);
  for (var _i4 = 0, _keys = keys; _i4 < _keys.length; _i4++) {
    var key = _keys[_i4];
    var intKey = +key;
    if (intKey >= start) {
      var value = obj[key];
      delete obj[key];
      if (move > 0 || intKey > start) {
        obj[intKey + move] = value;
      }
    }
  }
}
function determineLastEvent(e, lastEvent, inChartArea, isClick) {
  if (!inChartArea || e.type === 'mouseout') {
    return null;
  }
  if (isClick) {
    return lastEvent;
  }
  return e;
}
function getSizeForArea(scale, chartArea, field) {
  return scale.options.clip ? scale[field] : chartArea[field];
}
function getDatasetArea(meta, chartArea) {
  var xScale = meta.xScale,
    yScale = meta.yScale;
  if (xScale && yScale) {
    return {
      left: getSizeForArea(xScale, chartArea, 'left'),
      right: getSizeForArea(xScale, chartArea, 'right'),
      top: getSizeForArea(yScale, chartArea, 'top'),
      bottom: getSizeForArea(yScale, chartArea, 'bottom')
    };
  }
  return chartArea;
}
var Chart = /*#__PURE__*/function () {
  function Chart(item, userConfig) {
    var _this12 = this;
    var config = this.config = new Config(userConfig);
    var initialCanvas = getCanvas(item);
    var existingChart = getChart(initialCanvas);
    if (existingChart) {
      throw new Error('Canvas is already in use. Chart with ID \'' + existingChart.id + '\'' + ' must be destroyed before the canvas with ID \'' + existingChart.canvas.id + '\' can be reused.');
    }
    var options = config.createResolver(config.chartOptionScopes(), this.getContext());
    this.platform = new (config.platform || _detectPlatform(initialCanvas))();
    this.platform.updateConfig(config);
    var context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
    var canvas = context && context.canvas;
    var height = canvas && canvas.height;
    var width = canvas && canvas.width;
    this.id = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ac"])();
    this.ctx = context;
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this._options = options;
    this._aspectRatio = this.aspectRatio;
    this._layers = [];
    this._metasets = [];
    this._stacks = undefined;
    this.boxes = [];
    this.currentDevicePixelRatio = undefined;
    this.chartArea = undefined;
    this._active = [];
    this._lastEvent = undefined;
    this._listeners = {};
    this._responsiveListeners = undefined;
    this._sortedMetasets = [];
    this.scales = {};
    this._plugins = new PluginService();
    this.$proxies = {};
    this._hiddenIndices = {};
    this.attached = false;
    this._animationsDisabled = undefined;
    this.$context = undefined;
    this._doResize = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ad"])(function (mode) {
      return _this12.update(mode);
    }, options.resizeDelay || 0);
    this._dataChanges = [];
    instances[this.id] = this;
    if (!context || !canvas) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    animator.listen(this, 'complete', onAnimationsComplete);
    animator.listen(this, 'progress', onAnimationProgress);
    this._initialize();
    if (this.attached) {
      this.update();
    }
  }
  Chart.register = function register() {
    registry.add.apply(registry, arguments);
    invalidatePlugins();
  };
  Chart.unregister = function unregister() {
    registry.remove.apply(registry, arguments);
    invalidatePlugins();
  };
  var _proto22 = Chart.prototype;
  _proto22._initialize = function _initialize() {
    this.notifyPlugins('beforeInit');
    if (this.options.responsive) {
      this.resize();
    } else {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ae"])(this, this.options.devicePixelRatio);
    }
    this.bindEvents();
    this.notifyPlugins('afterInit');
    return this;
  };
  _proto22.clear = function clear() {
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["af"])(this.canvas, this.ctx);
    return this;
  };
  _proto22.stop = function stop() {
    animator.stop(this);
    return this;
  };
  _proto22.resize = function resize(width, height) {
    if (!animator.running(this)) {
      this._resize(width, height);
    } else {
      this._resizeBeforeDraw = {
        width: width,
        height: height
      };
    }
  };
  _proto22._resize = function _resize(width, height) {
    var options = this.options;
    var canvas = this.canvas;
    var aspectRatio = options.maintainAspectRatio && this.aspectRatio;
    var newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
    var newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
    var mode = this.width ? 'resize' : 'attach';
    this.width = newSize.width;
    this.height = newSize.height;
    this._aspectRatio = this.aspectRatio;
    if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ae"])(this, newRatio, true)) {
      return;
    }
    this.notifyPlugins('resize', {
      size: newSize
    });
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(options.onResize, [this, newSize], this);
    if (this.attached) {
      if (this._doResize(mode)) {
        this.render();
      }
    }
  };
  _proto22.ensureScalesHaveIDs = function ensureScalesHaveIDs() {
    var options = this.options;
    var scalesOptions = options.scales || {};
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(scalesOptions, function (axisOptions, axisID) {
      axisOptions.id = axisID;
    });
  };
  _proto22.buildOrUpdateScales = function buildOrUpdateScales() {
    var _this13 = this;
    var options = this.options;
    var scaleOpts = options.scales;
    var scales = this.scales;
    var updated = Object.keys(scales).reduce(function (obj, id) {
      obj[id] = false;
      return obj;
    }, {});
    var items = [];
    if (scaleOpts) {
      items = items.concat(Object.keys(scaleOpts).map(function (id) {
        var scaleOptions = scaleOpts[id];
        var axis = determineAxis(id, scaleOptions);
        var isRadial = axis === 'r';
        var isHorizontal = axis === 'x';
        return {
          options: scaleOptions,
          dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
          dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
        };
      }));
    }
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(items, function (item) {
      var scaleOptions = item.options;
      var id = scaleOptions.id;
      var axis = determineAxis(id, scaleOptions);
      var scaleType = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(scaleOptions.type, item.dtype);
      if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
        scaleOptions.position = item.dposition;
      }
      updated[id] = true;
      var scale = null;
      if (id in scales && scales[id].type === scaleType) {
        scale = scales[id];
      } else {
        var scaleClass = registry.getScale(scaleType);
        scale = new scaleClass({
          id: id,
          type: scaleType,
          ctx: _this13.ctx,
          chart: _this13
        });
        scales[scale.id] = scale;
      }
      scale.init(scaleOptions, options);
    });
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(updated, function (hasUpdated, id) {
      if (!hasUpdated) {
        delete scales[id];
      }
    });
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(scales, function (scale) {
      layouts.configure(_this13, scale, scale.options);
      layouts.addBox(_this13, scale);
    });
  };
  _proto22._updateMetasets = function _updateMetasets() {
    var metasets = this._metasets;
    var numData = this.data.datasets.length;
    var numMeta = metasets.length;
    metasets.sort(function (a, b) {
      return a.index - b.index;
    });
    if (numMeta > numData) {
      for (var i = numData; i < numMeta; ++i) {
        this._destroyDatasetMeta(i);
      }
      metasets.splice(numData, numMeta - numData);
    }
    this._sortedMetasets = metasets.slice(0).sort(compare2Level('order', 'index'));
  };
  _proto22._removeUnreferencedMetasets = function _removeUnreferencedMetasets() {
    var _this14 = this;
    var metasets = this._metasets,
      datasets = this.data.datasets;
    if (metasets.length > datasets.length) {
      delete this._stacks;
    }
    metasets.forEach(function (meta, index) {
      if (datasets.filter(function (x) {
        return x === meta._dataset;
      }).length === 0) {
        _this14._destroyDatasetMeta(index);
      }
    });
  };
  _proto22.buildOrUpdateControllers = function buildOrUpdateControllers() {
    var newControllers = [];
    var datasets = this.data.datasets;
    var i, ilen;
    this._removeUnreferencedMetasets();
    for (i = 0, ilen = datasets.length; i < ilen; i++) {
      var dataset = datasets[i];
      var meta = this.getDatasetMeta(i);
      var type = dataset.type || this.config.type;
      if (meta.type && meta.type !== type) {
        this._destroyDatasetMeta(i);
        meta = this.getDatasetMeta(i);
      }
      meta.type = type;
      meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
      meta.order = dataset.order || 0;
      meta.index = i;
      meta.label = '' + dataset.label;
      meta.visible = this.isDatasetVisible(i);
      if (meta.controller) {
        meta.controller.updateIndex(i);
        meta.controller.linkScales();
      } else {
        var ControllerClass = registry.getController(type);
        var _defaults$datasets$ty = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].datasets[type],
          datasetElementType = _defaults$datasets$ty.datasetElementType,
          dataElementType = _defaults$datasets$ty.dataElementType;
        Object.assign(ControllerClass, {
          dataElementType: registry.getElement(dataElementType),
          datasetElementType: datasetElementType && registry.getElement(datasetElementType)
        });
        meta.controller = new ControllerClass(this, i);
        newControllers.push(meta.controller);
      }
    }
    this._updateMetasets();
    return newControllers;
  };
  _proto22._resetElements = function _resetElements() {
    var _this15 = this;
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(this.data.datasets, function (dataset, datasetIndex) {
      _this15.getDatasetMeta(datasetIndex).controller.reset();
    }, this);
  };
  _proto22.reset = function reset() {
    this._resetElements();
    this.notifyPlugins('reset');
  };
  _proto22.update = function update(mode) {
    var config = this.config;
    config.update();
    var options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
    var animsDisabled = this._animationsDisabled = !options.animation;
    this._updateScales();
    this._checkEventBindings();
    this._updateHiddenIndices();
    this._plugins.invalidate();
    if (this.notifyPlugins('beforeUpdate', {
      mode: mode,
      cancelable: true
    }) === false) {
      return;
    }
    var newControllers = this.buildOrUpdateControllers();
    this.notifyPlugins('beforeElementsUpdate');
    var minPadding = 0;
    for (var i = 0, ilen = this.data.datasets.length; i < ilen; i++) {
      var _this$getDatasetMeta = this.getDatasetMeta(i),
        controller = _this$getDatasetMeta.controller;
      var reset = !animsDisabled && newControllers.indexOf(controller) === -1;
      controller.buildOrUpdateElements(reset);
      minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
    }
    minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
    this._updateLayout(minPadding);
    if (!animsDisabled) {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(newControllers, function (controller) {
        controller.reset();
      });
    }
    this._updateDatasets(mode);
    this.notifyPlugins('afterUpdate', {
      mode: mode
    });
    this._layers.sort(compare2Level('z', '_idx'));
    var _active = this._active,
      _lastEvent = this._lastEvent;
    if (_lastEvent) {
      this._eventHandler(_lastEvent, true);
    } else if (_active.length) {
      this._updateHoverStyles(_active, _active, true);
    }
    this.render();
  };
  _proto22._updateScales = function _updateScales() {
    var _this16 = this;
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(this.scales, function (scale) {
      layouts.removeBox(_this16, scale);
    });
    this.ensureScalesHaveIDs();
    this.buildOrUpdateScales();
  };
  _proto22._checkEventBindings = function _checkEventBindings() {
    var options = this.options;
    var existingEvents = new Set(Object.keys(this._listeners));
    var newEvents = new Set(options.events);
    if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ag"])(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
      this.unbindEvents();
      this.bindEvents();
    }
  };
  _proto22._updateHiddenIndices = function _updateHiddenIndices() {
    var _hiddenIndices = this._hiddenIndices;
    var changes = this._getUniformDataChanges() || [];
    for (var _iterator15 = _createForOfIteratorHelperLoose(changes), _step15; !(_step15 = _iterator15()).done;) {
      var _step15$value = _step15.value,
        method = _step15$value.method,
        start = _step15$value.start,
        count = _step15$value.count;
      var move = method === '_removeElements' ? -count : count;
      moveNumericKeys(_hiddenIndices, start, move);
    }
  };
  _proto22._getUniformDataChanges = function _getUniformDataChanges() {
    var _dataChanges = this._dataChanges;
    if (!_dataChanges || !_dataChanges.length) {
      return;
    }
    this._dataChanges = [];
    var datasetCount = this.data.datasets.length;
    var makeSet = function makeSet(idx) {
      return new Set(_dataChanges.filter(function (c) {
        return c[0] === idx;
      }).map(function (c, i) {
        return i + ',' + c.splice(1).join(',');
      }));
    };
    var changeSet = makeSet(0);
    for (var i = 1; i < datasetCount; i++) {
      if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ag"])(changeSet, makeSet(i))) {
        return;
      }
    }
    return Array.from(changeSet).map(function (c) {
      return c.split(',');
    }).map(function (a) {
      return {
        method: a[1],
        start: +a[2],
        count: +a[3]
      };
    });
  };
  _proto22._updateLayout = function _updateLayout(minPadding) {
    var _this17 = this;
    if (this.notifyPlugins('beforeLayout', {
      cancelable: true
    }) === false) {
      return;
    }
    layouts.update(this, this.width, this.height, minPadding);
    var area = this.chartArea;
    var noArea = area.width <= 0 || area.height <= 0;
    this._layers = [];
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(this.boxes, function (box) {
      var _this17$_layers;
      if (noArea && box.position === 'chartArea') {
        return;
      }
      if (box.configure) {
        box.configure();
      }
      (_this17$_layers = _this17._layers).push.apply(_this17$_layers, box._layers());
    }, this);
    this._layers.forEach(function (item, index) {
      item._idx = index;
    });
    this.notifyPlugins('afterLayout');
  };
  _proto22._updateDatasets = function _updateDatasets(mode) {
    if (this.notifyPlugins('beforeDatasetsUpdate', {
      mode: mode,
      cancelable: true
    }) === false) {
      return;
    }
    for (var i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
      this.getDatasetMeta(i).controller.configure();
    }
    for (var _i5 = 0, _ilen = this.data.datasets.length; _i5 < _ilen; ++_i5) {
      this._updateDataset(_i5, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a7"])(mode) ? mode({
        datasetIndex: _i5
      }) : mode);
    }
    this.notifyPlugins('afterDatasetsUpdate', {
      mode: mode
    });
  };
  _proto22._updateDataset = function _updateDataset(index, mode) {
    var meta = this.getDatasetMeta(index);
    var args = {
      meta: meta,
      index: index,
      mode: mode,
      cancelable: true
    };
    if (this.notifyPlugins('beforeDatasetUpdate', args) === false) {
      return;
    }
    meta.controller._update(mode);
    args.cancelable = false;
    this.notifyPlugins('afterDatasetUpdate', args);
  };
  _proto22.render = function render() {
    if (this.notifyPlugins('beforeRender', {
      cancelable: true
    }) === false) {
      return;
    }
    if (animator.has(this)) {
      if (this.attached && !animator.running(this)) {
        animator.start(this);
      }
    } else {
      this.draw();
      onAnimationsComplete({
        chart: this
      });
    }
  };
  _proto22.draw = function draw() {
    var i;
    if (this._resizeBeforeDraw) {
      var _this$_resizeBeforeDr = this._resizeBeforeDraw,
        width = _this$_resizeBeforeDr.width,
        height = _this$_resizeBeforeDr.height;
      this._resizeBeforeDraw = null;
      this._resize(width, height);
    }
    this.clear();
    if (this.width <= 0 || this.height <= 0) {
      return;
    }
    if (this.notifyPlugins('beforeDraw', {
      cancelable: true
    }) === false) {
      return;
    }
    var layers = this._layers;
    for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
      layers[i].draw(this.chartArea);
    }
    this._drawDatasets();
    for (; i < layers.length; ++i) {
      layers[i].draw(this.chartArea);
    }
    this.notifyPlugins('afterDraw');
  };
  _proto22._getSortedDatasetMetas = function _getSortedDatasetMetas(filterVisible) {
    var metasets = this._sortedMetasets;
    var result = [];
    var i, ilen;
    for (i = 0, ilen = metasets.length; i < ilen; ++i) {
      var meta = metasets[i];
      if (!filterVisible || meta.visible) {
        result.push(meta);
      }
    }
    return result;
  };
  _proto22.getSortedVisibleDatasetMetas = function getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(true);
  };
  _proto22._drawDatasets = function _drawDatasets() {
    if (this.notifyPlugins('beforeDatasetsDraw', {
      cancelable: true
    }) === false) {
      return;
    }
    var metasets = this.getSortedVisibleDatasetMetas();
    for (var i = metasets.length - 1; i >= 0; --i) {
      this._drawDataset(metasets[i]);
    }
    this.notifyPlugins('afterDatasetsDraw');
  };
  _proto22._drawDataset = function _drawDataset(meta) {
    var ctx = this.ctx;
    var clip = meta._clip;
    var useClip = !clip.disabled;
    var area = getDatasetArea(meta, this.chartArea);
    var args = {
      meta: meta,
      index: meta.index,
      cancelable: true
    };
    if (this.notifyPlugins('beforeDatasetDraw', args) === false) {
      return;
    }
    if (useClip) {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Y"])(ctx, {
        left: clip.left === false ? 0 : area.left - clip.left,
        right: clip.right === false ? this.width : area.right + clip.right,
        top: clip.top === false ? 0 : area.top - clip.top,
        bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
      });
    }
    meta.controller.draw();
    if (useClip) {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["$"])(ctx);
    }
    args.cancelable = false;
    this.notifyPlugins('afterDatasetDraw', args);
  };
  _proto22.isPointInArea = function isPointInArea(point) {
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["C"])(point, this.chartArea, this._minPadding);
  };
  _proto22.getElementsAtEventForMode = function getElementsAtEventForMode(e, mode, options, useFinalPosition) {
    var method = Interaction.modes[mode];
    if (typeof method === 'function') {
      return method(this, e, options, useFinalPosition);
    }
    return [];
  };
  _proto22.getDatasetMeta = function getDatasetMeta(datasetIndex) {
    var dataset = this.data.datasets[datasetIndex];
    var metasets = this._metasets;
    var meta = metasets.filter(function (x) {
      return x && x._dataset === dataset;
    }).pop();
    if (!meta) {
      meta = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null,
        order: dataset && dataset.order || 0,
        index: datasetIndex,
        _dataset: dataset,
        _parsed: [],
        _sorted: false
      };
      metasets.push(meta);
    }
    return meta;
  };
  _proto22.getContext = function getContext() {
    return this.$context || (this.$context = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["j"])(null, {
      chart: this,
      type: 'chart'
    }));
  };
  _proto22.getVisibleDatasetCount = function getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  };
  _proto22.isDatasetVisible = function isDatasetVisible(datasetIndex) {
    var dataset = this.data.datasets[datasetIndex];
    if (!dataset) {
      return false;
    }
    var meta = this.getDatasetMeta(datasetIndex);
    return typeof meta.hidden === 'boolean' ? !meta.hidden : !dataset.hidden;
  };
  _proto22.setDatasetVisibility = function setDatasetVisibility(datasetIndex, visible) {
    var meta = this.getDatasetMeta(datasetIndex);
    meta.hidden = !visible;
  };
  _proto22.toggleDataVisibility = function toggleDataVisibility(index) {
    this._hiddenIndices[index] = !this._hiddenIndices[index];
  };
  _proto22.getDataVisibility = function getDataVisibility(index) {
    return !this._hiddenIndices[index];
  };
  _proto22._updateVisibility = function _updateVisibility(datasetIndex, dataIndex, visible) {
    var mode = visible ? 'show' : 'hide';
    var meta = this.getDatasetMeta(datasetIndex);
    var anims = meta.controller._resolveAnimations(undefined, mode);
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["h"])(dataIndex)) {
      meta.data[dataIndex].hidden = !visible;
      this.update();
    } else {
      this.setDatasetVisibility(datasetIndex, visible);
      anims.update(meta, {
        visible: visible
      });
      this.update(function (ctx) {
        return ctx.datasetIndex === datasetIndex ? mode : undefined;
      });
    }
  };
  _proto22.hide = function hide(datasetIndex, dataIndex) {
    this._updateVisibility(datasetIndex, dataIndex, false);
  };
  _proto22.show = function show(datasetIndex, dataIndex) {
    this._updateVisibility(datasetIndex, dataIndex, true);
  };
  _proto22._destroyDatasetMeta = function _destroyDatasetMeta(datasetIndex) {
    var meta = this._metasets[datasetIndex];
    if (meta && meta.controller) {
      meta.controller._destroy();
    }
    delete this._metasets[datasetIndex];
  };
  _proto22._stop = function _stop() {
    var i, ilen;
    this.stop();
    animator.remove(this);
    for (i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
      this._destroyDatasetMeta(i);
    }
  };
  _proto22.destroy = function destroy() {
    this.notifyPlugins('beforeDestroy');
    var canvas = this.canvas,
      ctx = this.ctx;
    this._stop();
    this.config.clearCache();
    if (canvas) {
      this.unbindEvents();
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["af"])(canvas, ctx);
      this.platform.releaseContext(ctx);
      this.canvas = null;
      this.ctx = null;
    }
    delete instances[this.id];
    this.notifyPlugins('afterDestroy');
  };
  _proto22.toBase64Image = function toBase64Image() {
    var _this$canvas;
    return (_this$canvas = this.canvas).toDataURL.apply(_this$canvas, arguments);
  };
  _proto22.bindEvents = function bindEvents() {
    this.bindUserEvents();
    if (this.options.responsive) {
      this.bindResponsiveEvents();
    } else {
      this.attached = true;
    }
  };
  _proto22.bindUserEvents = function bindUserEvents() {
    var _this18 = this;
    var listeners = this._listeners;
    var platform = this.platform;
    var _add = function _add(type, listener) {
      platform.addEventListener(_this18, type, listener);
      listeners[type] = listener;
    };
    var listener = function listener(e, x, y) {
      e.offsetX = x;
      e.offsetY = y;
      _this18._eventHandler(e);
    };
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(this.options.events, function (type) {
      return _add(type, listener);
    });
  };
  _proto22.bindResponsiveEvents = function bindResponsiveEvents() {
    var _this19 = this;
    if (!this._responsiveListeners) {
      this._responsiveListeners = {};
    }
    var listeners = this._responsiveListeners;
    var platform = this.platform;
    var _add = function _add(type, listener) {
      platform.addEventListener(_this19, type, listener);
      listeners[type] = listener;
    };
    var _remove = function _remove(type, listener) {
      if (listeners[type]) {
        platform.removeEventListener(_this19, type, listener);
        delete listeners[type];
      }
    };
    var listener = function listener(width, height) {
      if (_this19.canvas) {
        _this19.resize(width, height);
      }
    };
    var detached;
    var _attached = function attached() {
      _remove('attach', _attached);
      _this19.attached = true;
      _this19.resize();
      _add('resize', listener);
      _add('detach', detached);
    };
    detached = function detached() {
      _this19.attached = false;
      _remove('resize', listener);
      _this19._stop();
      _this19._resize(0, 0);
      _add('attach', _attached);
    };
    if (platform.isAttached(this.canvas)) {
      _attached();
    } else {
      detached();
    }
  };
  _proto22.unbindEvents = function unbindEvents() {
    var _this20 = this;
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(this._listeners, function (listener, type) {
      _this20.platform.removeEventListener(_this20, type, listener);
    });
    this._listeners = {};
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(this._responsiveListeners, function (listener, type) {
      _this20.platform.removeEventListener(_this20, type, listener);
    });
    this._responsiveListeners = undefined;
  };
  _proto22.updateHoverStyle = function updateHoverStyle(items, mode, enabled) {
    var prefix = enabled ? 'set' : 'remove';
    var meta, item, i, ilen;
    if (mode === 'dataset') {
      meta = this.getDatasetMeta(items[0].datasetIndex);
      meta.controller['_' + prefix + 'DatasetHoverStyle']();
    }
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      item = items[i];
      var controller = item && this.getDatasetMeta(item.datasetIndex).controller;
      if (controller) {
        controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
      }
    }
  };
  _proto22.getActiveElements = function getActiveElements() {
    return this._active || [];
  };
  _proto22.setActiveElements = function setActiveElements(activeElements) {
    var _this21 = this;
    var lastActive = this._active || [];
    var active = activeElements.map(function (_ref4) {
      var datasetIndex = _ref4.datasetIndex,
        index = _ref4.index;
      var meta = _this21.getDatasetMeta(datasetIndex);
      if (!meta) {
        throw new Error('No dataset found at index ' + datasetIndex);
      }
      return {
        datasetIndex: datasetIndex,
        element: meta.data[index],
        index: index
      };
    });
    var changed = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ah"])(active, lastActive);
    if (changed) {
      this._active = active;
      this._lastEvent = null;
      this._updateHoverStyles(active, lastActive);
    }
  };
  _proto22.notifyPlugins = function notifyPlugins(hook, args, filter) {
    return this._plugins.notify(this, hook, args, filter);
  };
  _proto22.isPluginEnabled = function isPluginEnabled(pluginId) {
    return this._plugins._cache.filter(function (p) {
      return p.plugin.id === pluginId;
    }).length === 1;
  };
  _proto22._updateHoverStyles = function _updateHoverStyles(active, lastActive, replay) {
    var hoverOptions = this.options.hover;
    var diff = function diff(a, b) {
      return a.filter(function (x) {
        return !b.some(function (y) {
          return x.datasetIndex === y.datasetIndex && x.index === y.index;
        });
      });
    };
    var deactivated = diff(lastActive, active);
    var activated = replay ? active : diff(active, lastActive);
    if (deactivated.length) {
      this.updateHoverStyle(deactivated, hoverOptions.mode, false);
    }
    if (activated.length && hoverOptions.mode) {
      this.updateHoverStyle(activated, hoverOptions.mode, true);
    }
  };
  _proto22._eventHandler = function _eventHandler(e, replay) {
    var _this22 = this;
    var args = {
      event: e,
      replay: replay,
      cancelable: true,
      inChartArea: this.isPointInArea(e)
    };
    var eventFilter = function eventFilter(plugin) {
      return (plugin.options.events || _this22.options.events).includes(e["native"].type);
    };
    if (this.notifyPlugins('beforeEvent', args, eventFilter) === false) {
      return;
    }
    var changed = this._handleEvent(e, replay, args.inChartArea);
    args.cancelable = false;
    this.notifyPlugins('afterEvent', args, eventFilter);
    if (changed || args.changed) {
      this.render();
    }
    return this;
  };
  _proto22._handleEvent = function _handleEvent(e, replay, inChartArea) {
    var _this$_active = this._active,
      lastActive = _this$_active === void 0 ? [] : _this$_active,
      options = this.options;
    var useFinalPosition = replay;
    var active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
    var isClick = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ai"])(e);
    var lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
    if (inChartArea) {
      this._lastEvent = null;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(options.onHover, [e, active, this], this);
      if (isClick) {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(options.onClick, [e, active, this], this);
      }
    }
    var changed = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ah"])(active, lastActive);
    if (changed || replay) {
      this._active = active;
      this._updateHoverStyles(active, lastActive, replay);
    }
    this._lastEvent = lastEvent;
    return changed;
  };
  _proto22._getActiveElements = function _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
    if (e.type === 'mouseout') {
      return [];
    }
    if (!inChartArea) {
      return lastActive;
    }
    var hoverOptions = this.options.hover;
    return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
  };
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Chart, [{
    key: "aspectRatio",
    get: function get() {
      var _this$options12 = this.options,
        aspectRatio = _this$options12.aspectRatio,
        maintainAspectRatio = _this$options12.maintainAspectRatio,
        width = this.width,
        height = this.height,
        _aspectRatio = this._aspectRatio;
      if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(aspectRatio)) {
        return aspectRatio;
      }
      if (maintainAspectRatio && _aspectRatio) {
        return _aspectRatio;
      }
      return height ? width / height : null;
    }
  }, {
    key: "data",
    get: function get() {
      return this.config.data;
    },
    set: function set(data) {
      this.config.data = data;
    }
  }, {
    key: "options",
    get: function get() {
      return this._options;
    },
    set: function set(options) {
      this.config.options = options;
    }
  }, {
    key: "registry",
    get: function get() {
      return registry;
    }
  }]);
}();
Chart.defaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"];
Chart.instances = instances;
Chart.overrides = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a3"];
Chart.registry = registry;
Chart.version = version;
Chart.getChart = getChart;
function invalidatePlugins() {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(Chart.instances, function (chart) {
    return chart._plugins.invalidate();
  });
}
function clipArc(ctx, element, endAngle) {
  var startAngle = element.startAngle,
    pixelMargin = element.pixelMargin,
    x = element.x,
    y = element.y,
    outerRadius = element.outerRadius,
    innerRadius = element.innerRadius;
  var angleMargin = pixelMargin / outerRadius;
  // Draw an inner border by clipping the arc and drawing a double-width border
  // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
  if (innerRadius > pixelMargin) {
    angleMargin = pixelMargin / innerRadius;
    ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
  } else {
    ctx.arc(x, y, pixelMargin, endAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["H"], startAngle - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["H"]);
  }
  ctx.closePath();
  ctx.clip();
}
function toRadiusCorners(value) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ak"])(value, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
}
/**
 * Parse border radius from the provided options
 */
function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
  var o = toRadiusCorners(arc.options.borderRadius);
  var halfThickness = (outerRadius - innerRadius) / 2;
  var innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
  // Outer limits are complicated. We want to compute the available angular distance at
  // a radius of outerRadius - borderRadius because for small angular distances, this term limits.
  // We compute at r = outerRadius - borderRadius because this circle defines the center of the border corners.
  //
  // If the borderRadius is large, that value can become negative.
  // This causes the outer borders to lose their radius entirely, which is rather unexpected. To solve that, if borderRadius > outerRadius
  // we know that the thickness term will dominate and compute the limits at that point
  var computeOuterLimit = function computeOuterLimit(val) {
    var outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["S"])(val, 0, Math.min(halfThickness, outerArcLimit));
  };
  return {
    outerStart: computeOuterLimit(o.outerStart),
    outerEnd: computeOuterLimit(o.outerEnd),
    innerStart: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["S"])(o.innerStart, 0, innerLimit),
    innerEnd: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["S"])(o.innerEnd, 0, innerLimit)
  };
}
/**
 * Convert (r, 𝜃) to (x, y)
 */
function rThetaToXY(r, theta, x, y) {
  return {
    x: x + r * Math.cos(theta),
    y: y + r * Math.sin(theta)
  };
}
/**
 * Path the arc, respecting border radius by separating into left and right halves.
 *
 *   Start      End
 *
 *    1--->a--->2    Outer
 *   /           \
 *   8           3
 *   |           |
 *   |           |
 *   7           4
 *   \           /
 *    6<---b<---5    Inner
 */
function pathArc(ctx, element, offset, spacing, end, circular) {
  var x = element.x,
    y = element.y,
    start = element.startAngle,
    pixelMargin = element.pixelMargin,
    innerR = element.innerRadius;
  var outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
  var innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
  var spacingOffset = 0;
  var alpha = end - start;
  if (spacing) {
    // When spacing is present, it is the same for all items
    // So we adjust the start and end angle of the arc such that
    // the distance is the same as it would be without the spacing
    var noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
    var noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
    var avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
    var adjustedAngle = avNogSpacingRadius !== 0 ? alpha * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha;
    spacingOffset = (alpha - adjustedAngle) / 2;
  }
  var beta = Math.max(0.001, alpha * outerRadius - offset / _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["P"]) / outerRadius;
  var angleOffset = (alpha - beta) / 2;
  var startAngle = start + angleOffset + spacingOffset;
  var endAngle = end - angleOffset - spacingOffset;
  var _parseBorderRadius$ = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle),
    outerStart = _parseBorderRadius$.outerStart,
    outerEnd = _parseBorderRadius$.outerEnd,
    innerStart = _parseBorderRadius$.innerStart,
    innerEnd = _parseBorderRadius$.innerEnd;
  var outerStartAdjustedRadius = outerRadius - outerStart;
  var outerEndAdjustedRadius = outerRadius - outerEnd;
  var outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
  var outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
  var innerStartAdjustedRadius = innerRadius + innerStart;
  var innerEndAdjustedRadius = innerRadius + innerEnd;
  var innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
  var innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
  ctx.beginPath();
  if (circular) {
    // The first arc segments from point 1 to point a to point 2
    var outerMidAdjustedAngle = (outerStartAdjustedAngle + outerEndAdjustedAngle) / 2;
    ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerMidAdjustedAngle);
    ctx.arc(x, y, outerRadius, outerMidAdjustedAngle, outerEndAdjustedAngle);
    // The corner segment from point 2 to point 3
    if (outerEnd > 0) {
      var pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
      ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["H"]);
    }
    // The line from point 3 to point 4
    var p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
    ctx.lineTo(p4.x, p4.y);
    // The corner segment from point 4 to point 5
    if (innerEnd > 0) {
      var _pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
      ctx.arc(_pCenter.x, _pCenter.y, innerEnd, endAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["H"], innerEndAdjustedAngle + Math.PI);
    }
    // The inner arc from point 5 to point b to point 6
    var innerMidAdjustedAngle = (endAngle - innerEnd / innerRadius + (startAngle + innerStart / innerRadius)) / 2;
    ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, innerMidAdjustedAngle, true);
    ctx.arc(x, y, innerRadius, innerMidAdjustedAngle, startAngle + innerStart / innerRadius, true);
    // The corner segment from point 6 to point 7
    if (innerStart > 0) {
      var _pCenter2 = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
      ctx.arc(_pCenter2.x, _pCenter2.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["H"]);
    }
    // The line from point 7 to point 8
    var p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
    ctx.lineTo(p8.x, p8.y);
    // The corner segment from point 8 to point 1
    if (outerStart > 0) {
      var _pCenter3 = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
      ctx.arc(_pCenter3.x, _pCenter3.y, outerStart, startAngle - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["H"], outerStartAdjustedAngle);
    }
  } else {
    ctx.moveTo(x, y);
    var outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x;
    var outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y;
    ctx.lineTo(outerStartX, outerStartY);
    var outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x;
    var outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y;
    ctx.lineTo(outerEndX, outerEndY);
  }
  ctx.closePath();
}
function drawArc(ctx, element, offset, spacing, circular) {
  var fullCircles = element.fullCircles,
    startAngle = element.startAngle,
    circumference = element.circumference;
  var endAngle = element.endAngle;
  if (fullCircles) {
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    for (var i = 0; i < fullCircles; ++i) {
      ctx.fill();
    }
    if (!isNaN(circumference)) {
      endAngle = startAngle + (circumference % _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["T"] || _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["T"]);
    }
  }
  pathArc(ctx, element, offset, spacing, endAngle, circular);
  ctx.fill();
  return endAngle;
}
function drawBorder(ctx, element, offset, spacing, circular) {
  var fullCircles = element.fullCircles,
    startAngle = element.startAngle,
    circumference = element.circumference,
    options = element.options;
  var borderWidth = options.borderWidth,
    borderJoinStyle = options.borderJoinStyle,
    borderDash = options.borderDash,
    borderDashOffset = options.borderDashOffset;
  var inner = options.borderAlign === 'inner';
  if (!borderWidth) {
    return;
  }
  ctx.setLineDash(borderDash || []);
  ctx.lineDashOffset = borderDashOffset;
  if (inner) {
    ctx.lineWidth = borderWidth * 2;
    ctx.lineJoin = borderJoinStyle || 'round';
  } else {
    ctx.lineWidth = borderWidth;
    ctx.lineJoin = borderJoinStyle || 'bevel';
  }
  var endAngle = element.endAngle;
  if (fullCircles) {
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    for (var i = 0; i < fullCircles; ++i) {
      ctx.stroke();
    }
    if (!isNaN(circumference)) {
      endAngle = startAngle + (circumference % _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["T"] || _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["T"]);
    }
  }
  if (inner) {
    clipArc(ctx, element, endAngle);
  }
  if (!fullCircles) {
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    ctx.stroke();
  }
}
var ArcElement = /*#__PURE__*/function (_Element3) {
  function ArcElement(cfg) {
    var _this23;
    _this23 = _Element3.call(this) || this;
    _this23.circumference = void 0;
    _this23.endAngle = void 0;
    _this23.fullCircles = void 0;
    _this23.innerRadius = void 0;
    _this23.outerRadius = void 0;
    _this23.pixelMargin = void 0;
    _this23.startAngle = void 0;
    _this23.options = undefined;
    _this23.circumference = undefined;
    _this23.startAngle = undefined;
    _this23.endAngle = undefined;
    _this23.innerRadius = undefined;
    _this23.outerRadius = undefined;
    _this23.pixelMargin = 0;
    _this23.fullCircles = 0;
    if (cfg) {
      Object.assign(_this23, cfg);
    }
    return _this23;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ArcElement, _Element3);
  var _proto23 = ArcElement.prototype;
  _proto23.inRange = function inRange(chartX, chartY, useFinalPosition) {
    var point = this.getProps(['x', 'y'], useFinalPosition);
    var _getAngleFromPoint2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["D"])(point, {
        x: chartX,
        y: chartY
      }),
      angle = _getAngleFromPoint2.angle,
      distance = _getAngleFromPoint2.distance;
    var _this$getProps2 = this.getProps(['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'], useFinalPosition),
      startAngle = _this$getProps2.startAngle,
      endAngle = _this$getProps2.endAngle,
      innerRadius = _this$getProps2.innerRadius,
      outerRadius = _this$getProps2.outerRadius,
      circumference = _this$getProps2.circumference;
    var rAdjust = (this.options.spacing + this.options.borderWidth) / 2;
    var _circumference = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(circumference, endAngle - startAngle);
    var nonZeroBetween = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["p"])(angle, startAngle, endAngle) && startAngle !== endAngle;
    var betweenAngles = _circumference >= _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["T"] || nonZeroBetween;
    var withinRadius = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aj"])(distance, innerRadius + rAdjust, outerRadius + rAdjust);
    return betweenAngles && withinRadius;
  };
  _proto23.getCenterPoint = function getCenterPoint(useFinalPosition) {
    var _this$getProps3 = this.getProps(['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'], useFinalPosition),
      x = _this$getProps3.x,
      y = _this$getProps3.y,
      startAngle = _this$getProps3.startAngle,
      endAngle = _this$getProps3.endAngle,
      innerRadius = _this$getProps3.innerRadius,
      outerRadius = _this$getProps3.outerRadius;
    var _this$options13 = this.options,
      offset = _this$options13.offset,
      spacing = _this$options13.spacing;
    var halfAngle = (startAngle + endAngle) / 2;
    var halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
    return {
      x: x + Math.cos(halfAngle) * halfRadius,
      y: y + Math.sin(halfAngle) * halfRadius
    };
  };
  _proto23.tooltipPosition = function tooltipPosition(useFinalPosition) {
    return this.getCenterPoint(useFinalPosition);
  };
  _proto23.draw = function draw(ctx) {
    var options = this.options,
      circumference = this.circumference;
    var offset = (options.offset || 0) / 4;
    var spacing = (options.spacing || 0) / 2;
    var circular = options.circular;
    this.pixelMargin = options.borderAlign === 'inner' ? 0.33 : 0;
    this.fullCircles = circumference > _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["T"] ? Math.floor(circumference / _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["T"]) : 0;
    if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) {
      return;
    }
    ctx.save();
    var halfAngle = (this.startAngle + this.endAngle) / 2;
    ctx.translate(Math.cos(halfAngle) * offset, Math.sin(halfAngle) * offset);
    var fix = 1 - Math.sin(Math.min(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["P"], circumference || 0));
    var radiusOffset = offset * fix;
    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    drawArc(ctx, this, radiusOffset, spacing, circular);
    drawBorder(ctx, this, radiusOffset, spacing, circular);
    ctx.restore();
  };
  return ArcElement;
}(Element);
ArcElement.id = 'arc';
ArcElement.defaults = {
  borderAlign: 'center',
  borderColor: '#fff',
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: undefined,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: undefined,
  circular: true
};
ArcElement.defaultRoutes = {
  backgroundColor: 'backgroundColor'
};
ArcElement.descriptors = {
  _scriptable: true,
  _indexable: function _indexable(name) {
    return name !== 'borderDash';
  }
};
function setStyle(ctx, options, style) {
  if (style === void 0) {
    style = options;
  }
  ctx.lineCap = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(style.borderCapStyle, options.borderCapStyle);
  ctx.setLineDash(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(style.borderDash, options.borderDash));
  ctx.lineDashOffset = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(style.borderDashOffset, options.borderDashOffset);
  ctx.lineJoin = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(style.borderJoinStyle, options.borderJoinStyle);
  ctx.lineWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(style.borderWidth, options.borderWidth);
  ctx.strokeStyle = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(style.borderColor, options.borderColor);
}
function lineTo(ctx, previous, target) {
  ctx.lineTo(target.x, target.y);
}
function getLineMethod(options) {
  if (options.stepped) {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ar"];
  }
  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["as"];
  }
  return lineTo;
}
function pathVars(points, segment, params) {
  if (params === void 0) {
    params = {};
  }
  var count = points.length;
  var _params = params,
    _params$start = _params.start,
    paramsStart = _params$start === void 0 ? 0 : _params$start,
    _params$end = _params.end,
    paramsEnd = _params$end === void 0 ? count - 1 : _params$end;
  var segmentStart = segment.start,
    segmentEnd = segment.end;
  var start = Math.max(paramsStart, segmentStart);
  var end = Math.min(paramsEnd, segmentEnd);
  var outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
  return {
    count: count,
    start: start,
    loop: segment.loop,
    ilen: end < start && !outside ? count + end - start : end - start
  };
}
function pathSegment(ctx, line, segment, params) {
  var points = line.points,
    options = line.options;
  var _pathVars = pathVars(points, segment, params),
    count = _pathVars.count,
    start = _pathVars.start,
    loop = _pathVars.loop,
    ilen = _pathVars.ilen;
  var lineMethod = getLineMethod(options);
  var _ref5 = params || {},
    _ref5$move = _ref5.move,
    move = _ref5$move === void 0 ? true : _ref5$move,
    reverse = _ref5.reverse;
  var i, point, prev;
  for (i = 0; i <= ilen; ++i) {
    point = points[(start + (reverse ? ilen - i : i)) % count];
    if (point.skip) {
      continue;
    } else if (move) {
      ctx.moveTo(point.x, point.y);
      move = false;
    } else {
      lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    prev = point;
  }
  if (loop) {
    point = points[(start + (reverse ? ilen : 0)) % count];
    lineMethod(ctx, prev, point, reverse, options.stepped);
  }
  return !!loop;
}
function fastPathSegment(ctx, line, segment, params) {
  var points = line.points;
  var _pathVars2 = pathVars(points, segment, params),
    count = _pathVars2.count,
    start = _pathVars2.start,
    ilen = _pathVars2.ilen;
  var _ref6 = params || {},
    _ref6$move = _ref6.move,
    move = _ref6$move === void 0 ? true : _ref6$move,
    reverse = _ref6.reverse;
  var avgX = 0;
  var countX = 0;
  var i, point, prevX, minY, maxY, lastY;
  var pointIndex = function pointIndex(index) {
    return (start + (reverse ? ilen - index : index)) % count;
  };
  var drawX = function drawX() {
    if (minY !== maxY) {
      ctx.lineTo(avgX, maxY);
      ctx.lineTo(avgX, minY);
      ctx.lineTo(avgX, lastY);
    }
  };
  if (move) {
    point = points[pointIndex(0)];
    ctx.moveTo(point.x, point.y);
  }
  for (i = 0; i <= ilen; ++i) {
    point = points[pointIndex(i)];
    if (point.skip) {
      continue;
    }
    var x = point.x;
    var y = point.y;
    var truncX = x | 0;
    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
      } else if (y > maxY) {
        maxY = y;
      }
      avgX = (countX * avgX + x) / ++countX;
    } else {
      drawX();
      ctx.lineTo(x, y);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
    }
    lastY = y;
  }
  drawX();
}
function _getSegmentMethod(line) {
  var opts = line.options;
  var borderDash = opts.borderDash && opts.borderDash.length;
  var useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== 'monotone' && !opts.stepped && !borderDash;
  return useFastPath ? fastPathSegment : pathSegment;
}
function _getInterpolationMethod(options) {
  if (options.stepped) {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ao"];
  }
  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ap"];
  }
  return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aq"];
}
function strokePathWithCache(ctx, line, start, count) {
  var path = line._path;
  if (!path) {
    path = line._path = new Path2D();
    if (line.path(path, start, count)) {
      path.closePath();
    }
  }
  setStyle(ctx, line.options);
  ctx.stroke(path);
}
function strokePathDirect(ctx, line, start, count) {
  var segments = line.segments,
    options = line.options;
  var segmentMethod = _getSegmentMethod(line);
  for (var _iterator16 = _createForOfIteratorHelperLoose(segments), _step16; !(_step16 = _iterator16()).done;) {
    var segment = _step16.value;
    setStyle(ctx, options, segment.style);
    ctx.beginPath();
    if (segmentMethod(ctx, line, segment, {
      start: start,
      end: start + count - 1
    })) {
      ctx.closePath();
    }
    ctx.stroke();
  }
}
var usePath2D = typeof Path2D === 'function';
function _draw(ctx, line, start, count) {
  if (usePath2D && !line.options.segment) {
    strokePathWithCache(ctx, line, start, count);
  } else {
    strokePathDirect(ctx, line, start, count);
  }
}
var LineElement = /*#__PURE__*/function (_Element4) {
  function LineElement(cfg) {
    var _this24;
    _this24 = _Element4.call(this) || this;
    _this24.animated = true;
    _this24.options = undefined;
    _this24._chart = undefined;
    _this24._loop = undefined;
    _this24._fullLoop = undefined;
    _this24._path = undefined;
    _this24._points = undefined;
    _this24._segments = undefined;
    _this24._decimated = false;
    _this24._pointsUpdated = false;
    _this24._datasetIndex = undefined;
    if (cfg) {
      Object.assign(_this24, cfg);
    }
    return _this24;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(LineElement, _Element4);
  var _proto24 = LineElement.prototype;
  _proto24.updateControlPoints = function updateControlPoints(chartArea, indexAxis) {
    var options = this.options;
    if ((options.tension || options.cubicInterpolationMode === 'monotone') && !options.stepped && !this._pointsUpdated) {
      var loop = options.spanGaps ? this._loop : this._fullLoop;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["al"])(this._points, options, chartArea, loop, indexAxis);
      this._pointsUpdated = true;
    }
  };
  _proto24.first = function first() {
    var segments = this.segments;
    var points = this.points;
    return segments.length && points[segments[0].start];
  };
  _proto24.last = function last() {
    var segments = this.segments;
    var points = this.points;
    var count = segments.length;
    return count && points[segments[count - 1].end];
  };
  _proto24.interpolate = function interpolate(point, property) {
    var options = this.options;
    var value = point[property];
    var points = this.points;
    var segments = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["an"])(this, {
      property: property,
      start: value,
      end: value
    });
    if (!segments.length) {
      return;
    }
    var result = [];
    var _interpolate = _getInterpolationMethod(options);
    var i, ilen;
    for (i = 0, ilen = segments.length; i < ilen; ++i) {
      var _segments$i = segments[i],
        start = _segments$i.start,
        end = _segments$i.end;
      var p1 = points[start];
      var p2 = points[end];
      if (p1 === p2) {
        result.push(p1);
        continue;
      }
      var t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
      var interpolated = _interpolate(p1, p2, t, options.stepped);
      interpolated[property] = point[property];
      result.push(interpolated);
    }
    return result.length === 1 ? result[0] : result;
  };
  _proto24.pathSegment = function pathSegment(ctx, segment, params) {
    var segmentMethod = _getSegmentMethod(this);
    return segmentMethod(ctx, this, segment, params);
  };
  _proto24.path = function path(ctx, start, count) {
    var segments = this.segments;
    var segmentMethod = _getSegmentMethod(this);
    var loop = this._loop;
    start = start || 0;
    count = count || this.points.length - start;
    for (var _iterator17 = _createForOfIteratorHelperLoose(segments), _step17; !(_step17 = _iterator17()).done;) {
      var segment = _step17.value;
      loop &= segmentMethod(ctx, this, segment, {
        start: start,
        end: start + count - 1
      });
    }
    return !!loop;
  };
  _proto24.draw = function draw(ctx, chartArea, start, count) {
    var options = this.options || {};
    var points = this.points || [];
    if (points.length && options.borderWidth) {
      ctx.save();
      _draw(ctx, this, start, count);
      ctx.restore();
    }
    if (this.animated) {
      this._pointsUpdated = false;
      this._path = undefined;
    }
  };
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LineElement, [{
    key: "points",
    get: function get() {
      return this._points;
    },
    set: function set(points) {
      this._points = points;
      delete this._segments;
      delete this._path;
      this._pointsUpdated = false;
    }
  }, {
    key: "segments",
    get: function get() {
      return this._segments || (this._segments = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["am"])(this, this.options.segment));
    }
  }]);
}(Element);
LineElement.id = 'line';
LineElement.defaults = {
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: 'miter',
  borderWidth: 3,
  capBezierPoints: true,
  cubicInterpolationMode: 'default',
  fill: false,
  spanGaps: false,
  stepped: false,
  tension: 0
};
LineElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};
LineElement.descriptors = {
  _scriptable: true,
  _indexable: function _indexable(name) {
    return name !== 'borderDash' && name !== 'fill';
  }
};
function inRange$1(el, pos, axis, useFinalPosition) {
  var options = el.options;
  var _el$getProps = el.getProps([axis], useFinalPosition),
    value = _el$getProps[axis];
  return Math.abs(pos - value) < options.radius + options.hitRadius;
}
var PointElement = /*#__PURE__*/function (_Element5) {
  function PointElement(cfg) {
    var _this25;
    _this25 = _Element5.call(this) || this;
    _this25.parsed = void 0;
    _this25.skip = void 0;
    _this25.stop = void 0;
    _this25.options = undefined;
    _this25.parsed = undefined;
    _this25.skip = undefined;
    _this25.stop = undefined;
    if (cfg) {
      Object.assign(_this25, cfg);
    }
    return _this25;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(PointElement, _Element5);
  var _proto25 = PointElement.prototype;
  _proto25.inRange = function inRange(mouseX, mouseY, useFinalPosition) {
    var options = this.options;
    var _this$getProps4 = this.getProps(['x', 'y'], useFinalPosition),
      x = _this$getProps4.x,
      y = _this$getProps4.y;
    return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
  };
  _proto25.inXRange = function inXRange(mouseX, useFinalPosition) {
    return inRange$1(this, mouseX, 'x', useFinalPosition);
  };
  _proto25.inYRange = function inYRange(mouseY, useFinalPosition) {
    return inRange$1(this, mouseY, 'y', useFinalPosition);
  };
  _proto25.getCenterPoint = function getCenterPoint(useFinalPosition) {
    var _this$getProps5 = this.getProps(['x', 'y'], useFinalPosition),
      x = _this$getProps5.x,
      y = _this$getProps5.y;
    return {
      x: x,
      y: y
    };
  };
  _proto25.size = function size(options) {
    options = options || this.options || {};
    var radius = options.radius || 0;
    radius = Math.max(radius, radius && options.hoverRadius || 0);
    var borderWidth = radius && options.borderWidth || 0;
    return (radius + borderWidth) * 2;
  };
  _proto25.draw = function draw(ctx, area) {
    var options = this.options;
    if (this.skip || options.radius < 0.1 || !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["C"])(this, area, this.size(options) / 2)) {
      return;
    }
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.fillStyle = options.backgroundColor;
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["at"])(ctx, options, this.x, this.y);
  };
  _proto25.getRange = function getRange() {
    var options = this.options || {};
    // @ts-expect-error Fallbacks should never be hit in practice
    return options.radius + options.hitRadius;
  };
  return PointElement;
}(Element);
PointElement.id = 'point';
/**
* @type {any}
*/
PointElement.defaults = {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: 'circle',
  radius: 3,
  rotation: 0
};
/**
* @type {any}
*/
PointElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};
function getBarBounds(bar, useFinalPosition) {
  var _bar$getProps = bar.getProps(['x', 'y', 'base', 'width', 'height'], useFinalPosition),
    x = _bar$getProps.x,
    y = _bar$getProps.y,
    base = _bar$getProps.base,
    width = _bar$getProps.width,
    height = _bar$getProps.height;
  var left, right, top, bottom, half;
  if (bar.horizontal) {
    half = height / 2;
    left = Math.min(x, base);
    right = Math.max(x, base);
    top = y - half;
    bottom = y + half;
  } else {
    half = width / 2;
    left = x - half;
    right = x + half;
    top = Math.min(y, base);
    bottom = Math.max(y, base);
  }
  return {
    left: left,
    top: top,
    right: right,
    bottom: bottom
  };
}
function skipOrLimit(skip, value, min, max) {
  return skip ? 0 : Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["S"])(value, min, max);
}
function parseBorderWidth(bar, maxW, maxH) {
  var value = bar.options.borderWidth;
  var skip = bar.borderSkipped;
  var o = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["av"])(value);
  return {
    t: skipOrLimit(skip.top, o.top, 0, maxH),
    r: skipOrLimit(skip.right, o.right, 0, maxW),
    b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
    l: skipOrLimit(skip.left, o.left, 0, maxW)
  };
}
function parseBorderRadius(bar, maxW, maxH) {
  var _bar$getProps2 = bar.getProps(['enableBorderRadius']),
    enableBorderRadius = _bar$getProps2.enableBorderRadius;
  var value = bar.options.borderRadius;
  var o = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aw"])(value);
  var maxR = Math.min(maxW, maxH);
  var skip = bar.borderSkipped;
  var enableBorder = enableBorderRadius || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(value);
  return {
    topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
    topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
    bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
    bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
  };
}
function boundingRects(bar) {
  var bounds = getBarBounds(bar);
  var width = bounds.right - bounds.left;
  var height = bounds.bottom - bounds.top;
  var border = parseBorderWidth(bar, width / 2, height / 2);
  var radius = parseBorderRadius(bar, width / 2, height / 2);
  return {
    outer: {
      x: bounds.left,
      y: bounds.top,
      w: width,
      h: height,
      radius: radius
    },
    inner: {
      x: bounds.left + border.l,
      y: bounds.top + border.t,
      w: width - border.l - border.r,
      h: height - border.t - border.b,
      radius: {
        topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
        topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
        bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
        bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
      }
    }
  };
}
function _inRange(bar, x, y, useFinalPosition) {
  var skipX = x === null;
  var skipY = y === null;
  var skipBoth = skipX && skipY;
  var bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
  return bounds && (skipX || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aj"])(x, bounds.left, bounds.right)) && (skipY || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aj"])(y, bounds.top, bounds.bottom));
}
function hasRadius(radius) {
  return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
function addNormalRectPath(ctx, rect) {
  ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function inflateRect(rect, amount, refRect) {
  if (refRect === void 0) {
    refRect = {};
  }
  var x = rect.x !== refRect.x ? -amount : 0;
  var y = rect.y !== refRect.y ? -amount : 0;
  var w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
  var h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
  return {
    x: rect.x + x,
    y: rect.y + y,
    w: rect.w + w,
    h: rect.h + h,
    radius: rect.radius
  };
}
var BarElement = /*#__PURE__*/function (_Element6) {
  function BarElement(cfg) {
    var _this26;
    _this26 = _Element6.call(this) || this;
    _this26.options = undefined;
    _this26.horizontal = undefined;
    _this26.base = undefined;
    _this26.width = undefined;
    _this26.height = undefined;
    _this26.inflateAmount = undefined;
    if (cfg) {
      Object.assign(_this26, cfg);
    }
    return _this26;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(BarElement, _Element6);
  var _proto26 = BarElement.prototype;
  _proto26.draw = function draw(ctx) {
    var inflateAmount = this.inflateAmount,
      _this$options14 = this.options,
      borderColor = _this$options14.borderColor,
      backgroundColor = _this$options14.backgroundColor;
    var _boundingRects = boundingRects(this),
      inner = _boundingRects.inner,
      outer = _boundingRects.outer;
    var addRectPath = hasRadius(outer.radius) ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["au"] : addNormalRectPath;
    ctx.save();
    if (outer.w !== inner.w || outer.h !== inner.h) {
      ctx.beginPath();
      addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
      ctx.clip();
      addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
      ctx.fillStyle = borderColor;
      ctx.fill('evenodd');
    }
    ctx.beginPath();
    addRectPath(ctx, inflateRect(inner, inflateAmount));
    ctx.fillStyle = backgroundColor;
    ctx.fill();
    ctx.restore();
  };
  _proto26.inRange = function inRange(mouseX, mouseY, useFinalPosition) {
    return _inRange(this, mouseX, mouseY, useFinalPosition);
  };
  _proto26.inXRange = function inXRange(mouseX, useFinalPosition) {
    return _inRange(this, mouseX, null, useFinalPosition);
  };
  _proto26.inYRange = function inYRange(mouseY, useFinalPosition) {
    return _inRange(this, null, mouseY, useFinalPosition);
  };
  _proto26.getCenterPoint = function getCenterPoint(useFinalPosition) {
    var _this$getProps6 = this.getProps(['x', 'y', 'base', 'horizontal'], useFinalPosition),
      x = _this$getProps6.x,
      y = _this$getProps6.y,
      base = _this$getProps6.base,
      horizontal = _this$getProps6.horizontal;
    return {
      x: horizontal ? (x + base) / 2 : x,
      y: horizontal ? y : (y + base) / 2
    };
  };
  _proto26.getRange = function getRange(axis) {
    return axis === 'x' ? this.width / 2 : this.height / 2;
  };
  return BarElement;
}(Element);
BarElement.id = 'bar';
BarElement.defaults = {
  borderSkipped: 'start',
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: 'auto',
  pointStyle: undefined
};
BarElement.defaultRoutes = {
  backgroundColor: 'backgroundColor',
  borderColor: 'borderColor'
};
var elements = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ArcElement: ArcElement,
  BarElement: BarElement,
  LineElement: LineElement,
  PointElement: PointElement
});
var BORDER_COLORS = ['rgb(54, 162, 235)', 'rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)' // grey
];
// Border colors with 50% transparency
var BACKGROUND_COLORS = /* #__PURE__ */BORDER_COLORS.map(function (color) {
  return color.replace('rgb(', 'rgba(').replace(')', ', 0.5)');
});
function getBorderColor(i) {
  return BORDER_COLORS[i % BORDER_COLORS.length];
}
function getBackgroundColor(i) {
  return BACKGROUND_COLORS[i % BACKGROUND_COLORS.length];
}
function colorizeDefaultDataset(dataset, i) {
  dataset.borderColor = getBorderColor(i);
  dataset.backgroundColor = getBackgroundColor(i);
  return ++i;
}
function colorizeDoughnutDataset(dataset, i) {
  dataset.backgroundColor = dataset.data.map(function () {
    return getBorderColor(i++);
  });
  return i;
}
function colorizePolarAreaDataset(dataset, i) {
  dataset.backgroundColor = dataset.data.map(function () {
    return getBackgroundColor(i++);
  });
  return i;
}
function getColorizer(chart) {
  var i = 0;
  return function (dataset, datasetIndex) {
    var controller = chart.getDatasetMeta(datasetIndex).controller;
    if (controller instanceof DoughnutController) {
      i = colorizeDoughnutDataset(dataset, i);
    } else if (controller instanceof PolarAreaController) {
      i = colorizePolarAreaDataset(dataset, i);
    } else if (controller) {
      i = colorizeDefaultDataset(dataset, i);
    }
  };
}
function containsColorsDefinitions(descriptors) {
  var k;
  for (k in descriptors) {
    if (descriptors[k].borderColor || descriptors[k].backgroundColor) {
      return true;
    }
  }
  return false;
}
function containsColorsDefinition(descriptor) {
  return descriptor && (descriptor.borderColor || descriptor.backgroundColor);
}
function containsDefaultColorsDefenitions() {
  return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].borderColor !== 'rgba(0,0,0,0.1)' || _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].backgroundColor !== 'rgba(0,0,0,0.1)';
}
var plugin_colors = {
  id: 'colors',
  defaults: {
    enabled: true,
    forceOverride: false
  },
  beforeLayout: function beforeLayout(chart, _args, options) {
    if (!options.enabled) {
      return;
    }
    var _chart$config = chart.config,
      datasets = _chart$config.data.datasets,
      chartOptions = _chart$config.options;
    var elements = chartOptions.elements;
    var containsColorDefenition = containsColorsDefinitions(datasets) || containsColorsDefinition(chartOptions) || elements && containsColorsDefinitions(elements) || containsDefaultColorsDefenitions();
    if (!options.forceOverride && containsColorDefenition) {
      return;
    }
    var colorizer = getColorizer(chart);
    datasets.forEach(colorizer);
  }
};
function lttbDecimation(data, start, count, availableWidth, options) {
  var samples = options.samples || availableWidth;
  if (samples >= count) {
    return data.slice(start, start + count);
  }
  var decimated = [];
  var bucketWidth = (count - 2) / (samples - 2);
  var sampledIndex = 0;
  var endIndex = start + count - 1;
  var a = start;
  var i, maxAreaPoint, maxArea, area, nextA;
  decimated[sampledIndex++] = data[a];
  for (i = 0; i < samples - 2; i++) {
    var avgX = 0;
    var avgY = 0;
    var j = void 0;
    var avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
    var avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
    var avgRangeLength = avgRangeEnd - avgRangeStart;
    for (j = avgRangeStart; j < avgRangeEnd; j++) {
      avgX += data[j].x;
      avgY += data[j].y;
    }
    avgX /= avgRangeLength;
    avgY /= avgRangeLength;
    var rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
    var rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
    var _data$a = data[a],
      pointAx = _data$a.x,
      pointAy = _data$a.y;
    maxArea = area = -1;
    for (j = rangeOffs; j < rangeTo; j++) {
      area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));
      if (area > maxArea) {
        maxArea = area;
        maxAreaPoint = data[j];
        nextA = j;
      }
    }
    decimated[sampledIndex++] = maxAreaPoint;
    a = nextA;
  }
  decimated[sampledIndex++] = data[endIndex];
  return decimated;
}
function minMaxDecimation(data, start, count, availableWidth) {
  var avgX = 0;
  var countX = 0;
  var i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
  var decimated = [];
  var endIndex = start + count - 1;
  var xMin = data[start].x;
  var xMax = data[endIndex].x;
  var dx = xMax - xMin;
  for (i = start; i < start + count; ++i) {
    point = data[i];
    x = (point.x - xMin) / dx * availableWidth;
    y = point.y;
    var truncX = x | 0;
    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
        minIndex = i;
      } else if (y > maxY) {
        maxY = y;
        maxIndex = i;
      }
      avgX = (countX * avgX + point.x) / ++countX;
    } else {
      var lastIndex = i - 1;
      if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(minIndex) && !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(maxIndex)) {
        var intermediateIndex1 = Math.min(minIndex, maxIndex);
        var intermediateIndex2 = Math.max(minIndex, maxIndex);
        if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
          decimated.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data[intermediateIndex1], {
            x: avgX
          }));
        }
        if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
          decimated.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data[intermediateIndex2], {
            x: avgX
          }));
        }
      }
      if (i > 0 && lastIndex !== startIndex) {
        decimated.push(data[lastIndex]);
      }
      decimated.push(point);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
      minIndex = maxIndex = startIndex = i;
    }
  }
  return decimated;
}
function cleanDecimatedDataset(dataset) {
  if (dataset._decimated) {
    var data = dataset._data;
    delete dataset._decimated;
    delete dataset._data;
    Object.defineProperty(dataset, 'data', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: data
    });
  }
}
function cleanDecimatedData(chart) {
  chart.data.datasets.forEach(function (dataset) {
    cleanDecimatedDataset(dataset);
  });
}
function getStartAndCountOfVisiblePointsSimplified(meta, points) {
  var pointCount = points.length;
  var start = 0;
  var count;
  var iScale = meta.iScale;
  var _iScale$getUserBounds = iScale.getUserBounds(),
    min = _iScale$getUserBounds.min,
    max = _iScale$getUserBounds.max,
    minDefined = _iScale$getUserBounds.minDefined,
    maxDefined = _iScale$getUserBounds.maxDefined;
  if (minDefined) {
    start = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["S"])(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["B"])(points, iScale.axis, min).lo, 0, pointCount - 1);
  }
  if (maxDefined) {
    count = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["S"])(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["B"])(points, iScale.axis, max).hi + 1, start, pointCount) - start;
  } else {
    count = pointCount - start;
  }
  return {
    start: start,
    count: count
  };
}
var plugin_decimation = {
  id: 'decimation',
  defaults: {
    algorithm: 'min-max',
    enabled: false
  },
  beforeElementsUpdate: function beforeElementsUpdate(chart, args, options) {
    if (!options.enabled) {
      cleanDecimatedData(chart);
      return;
    }
    var availableWidth = chart.width;
    chart.data.datasets.forEach(function (dataset, datasetIndex) {
      var _data = dataset._data,
        indexAxis = dataset.indexAxis;
      var meta = chart.getDatasetMeta(datasetIndex);
      var data = _data || dataset.data;
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a"])([indexAxis, chart.options.indexAxis]) === 'y') {
        return;
      }
      if (!meta.controller.supportsDecimation) {
        return;
      }
      var xAxis = chart.scales[meta.xAxisID];
      if (xAxis.type !== 'linear' && xAxis.type !== 'time') {
        return;
      }
      if (chart.options.parsing) {
        return;
      }
      var _getStartAndCountOfVi3 = getStartAndCountOfVisiblePointsSimplified(meta, data),
        start = _getStartAndCountOfVi3.start,
        count = _getStartAndCountOfVi3.count;
      var threshold = options.threshold || 4 * availableWidth;
      if (count <= threshold) {
        cleanDecimatedDataset(dataset);
        return;
      }
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(_data)) {
        dataset._data = data;
        delete dataset.data;
        Object.defineProperty(dataset, 'data', {
          configurable: true,
          enumerable: true,
          get: function get() {
            return this._decimated;
          },
          set: function set(d) {
            this._data = d;
          }
        });
      }
      var decimated;
      switch (options.algorithm) {
        case 'lttb':
          decimated = lttbDecimation(data, start, count, availableWidth, options);
          break;
        case 'min-max':
          decimated = minMaxDecimation(data, start, count, availableWidth);
          break;
        default:
          throw new Error("Unsupported decimation algorithm '" + options.algorithm + "'");
      }
      dataset._decimated = decimated;
    });
  },
  destroy: function destroy(chart) {
    cleanDecimatedData(chart);
  }
};
function _segments(line, target, property) {
  var segments = line.segments;
  var points = line.points;
  var tpoints = target.points;
  var parts = [];
  for (var _iterator18 = _createForOfIteratorHelperLoose(segments), _step18; !(_step18 = _iterator18()).done;) {
    var segment = _step18.value;
    var start = segment.start,
      end = segment.end;
    end = _findSegmentEnd(start, end, points);
    var bounds = _getBounds(property, points[start], points[end], segment.loop);
    if (!target.segments) {
      parts.push({
        source: segment,
        target: bounds,
        start: points[start],
        end: points[end]
      });
      continue;
    }
    var targetSegments = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["an"])(target, bounds);
    for (var _iterator19 = _createForOfIteratorHelperLoose(targetSegments), _step19; !(_step19 = _iterator19()).done;) {
      var tgt = _step19.value;
      var subBounds = _getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
      var fillSources = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ax"])(segment, points, subBounds);
      for (var _iterator20 = _createForOfIteratorHelperLoose(fillSources), _step20; !(_step20 = _iterator20()).done;) {
        var _start, _end;
        var fillSource = _step20.value;
        parts.push({
          source: fillSource,
          target: tgt,
          start: (_start = {}, _start[property] = _getEdge(bounds, subBounds, 'start', Math.max), _start),
          end: (_end = {}, _end[property] = _getEdge(bounds, subBounds, 'end', Math.min), _end)
        });
      }
    }
  }
  return parts;
}
function _getBounds(property, first, last, loop) {
  if (loop) {
    return;
  }
  var start = first[property];
  var end = last[property];
  if (property === 'angle') {
    start = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ay"])(start);
    end = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ay"])(end);
  }
  return {
    property: property,
    start: start,
    end: end
  };
}
function _pointsFromSegments(boundary, line) {
  var _ref7 = boundary || {},
    _ref7$x = _ref7.x,
    x = _ref7$x === void 0 ? null : _ref7$x,
    _ref7$y = _ref7.y,
    y = _ref7$y === void 0 ? null : _ref7$y;
  var linePoints = line.points;
  var points = [];
  line.segments.forEach(function (_ref8) {
    var start = _ref8.start,
      end = _ref8.end;
    end = _findSegmentEnd(start, end, linePoints);
    var first = linePoints[start];
    var last = linePoints[end];
    if (y !== null) {
      points.push({
        x: first.x,
        y: y
      });
      points.push({
        x: last.x,
        y: y
      });
    } else if (x !== null) {
      points.push({
        x: x,
        y: first.y
      });
      points.push({
        x: x,
        y: last.y
      });
    }
  });
  return points;
}
function _findSegmentEnd(start, end, points) {
  for (; end > start; end--) {
    var point = points[end];
    if (!isNaN(point.x) && !isNaN(point.y)) {
      break;
    }
  }
  return end;
}
function _getEdge(a, b, prop, fn) {
  if (a && b) {
    return fn(a[prop], b[prop]);
  }
  return a ? a[prop] : b ? b[prop] : 0;
}
function _createBoundaryLine(boundary, line) {
  var points = [];
  var _loop = false;
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["b"])(boundary)) {
    _loop = true;
    points = boundary;
  } else {
    points = _pointsFromSegments(boundary, line);
  }
  return points.length ? new LineElement({
    points: points,
    options: {
      tension: 0
    },
    _loop: _loop,
    _fullLoop: _loop
  }) : null;
}
function _shouldApplyFill(source) {
  return source && source.fill !== false;
}
function _resolveTarget(sources, index, propagate) {
  var source = sources[index];
  var fill = source.fill;
  var visited = [index];
  var target;
  if (!propagate) {
    return fill;
  }
  while (fill !== false && visited.indexOf(fill) === -1) {
    if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(fill)) {
      return fill;
    }
    target = sources[fill];
    if (!target) {
      return false;
    }
    if (target.visible) {
      return fill;
    }
    visited.push(fill);
    fill = target.fill;
  }
  return false;
}
function _decodeFill(line, index, count) {
  var fill = parseFillOption(line);
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(fill)) {
    return isNaN(fill.value) ? false : fill;
  }
  var target = parseFloat(fill);
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(target) && Math.floor(target) === target) {
    return decodeTargetIndex(fill[0], index, target, count);
  }
  return ['origin', 'start', 'end', 'stack', 'shape'].indexOf(fill) >= 0 && fill;
}
function decodeTargetIndex(firstCh, index, target, count) {
  if (firstCh === '-' || firstCh === '+') {
    target = index + target;
  }
  if (target === index || target < 0 || target >= count) {
    return false;
  }
  return target;
}
function _getTargetPixel(fill, scale) {
  var pixel = null;
  if (fill === 'start') {
    pixel = scale.bottom;
  } else if (fill === 'end') {
    pixel = scale.top;
  } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(fill)) {
    pixel = scale.getPixelForValue(fill.value);
  } else if (scale.getBasePixel) {
    pixel = scale.getBasePixel();
  }
  return pixel;
}
function _getTargetValue(fill, scale, startValue) {
  var value;
  if (fill === 'start') {
    value = startValue;
  } else if (fill === 'end') {
    value = scale.options.reverse ? scale.min : scale.max;
  } else if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(fill)) {
    value = fill.value;
  } else {
    value = scale.getBaseValue();
  }
  return value;
}
function parseFillOption(line) {
  var options = line.options;
  var fillOption = options.fill;
  var fill = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(fillOption && fillOption.target, fillOption);
  if (fill === undefined) {
    fill = !!options.backgroundColor;
  }
  if (fill === false || fill === null) {
    return false;
  }
  if (fill === true) {
    return 'origin';
  }
  return fill;
}
function _buildStackLine(source) {
  var scale = source.scale,
    index = source.index,
    line = source.line;
  var points = [];
  var segments = line.segments;
  var sourcePoints = line.points;
  var linesBelow = getLinesBelow(scale, index);
  linesBelow.push(_createBoundaryLine({
    x: null,
    y: scale.bottom
  }, line));
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    for (var j = segment.start; j <= segment.end; j++) {
      addPointsBelow(points, sourcePoints[j], linesBelow);
    }
  }
  return new LineElement({
    points: points,
    options: {}
  });
}
function getLinesBelow(scale, index) {
  var below = [];
  var metas = scale.getMatchingVisibleMetas('line');
  for (var i = 0; i < metas.length; i++) {
    var meta = metas[i];
    if (meta.index === index) {
      break;
    }
    if (!meta.hidden) {
      below.unshift(meta.dataset);
    }
  }
  return below;
}
function addPointsBelow(points, sourcePoint, linesBelow) {
  var postponed = [];
  for (var j = 0; j < linesBelow.length; j++) {
    var line = linesBelow[j];
    var _findPoint = findPoint(line, sourcePoint, 'x'),
      first = _findPoint.first,
      last = _findPoint.last,
      point = _findPoint.point;
    if (!point || first && last) {
      continue;
    }
    if (first) {
      postponed.unshift(point);
    } else {
      points.push(point);
      if (!last) {
        break;
      }
    }
  }
  points.push.apply(points, postponed);
}
function findPoint(line, sourcePoint, property) {
  var point = line.interpolate(sourcePoint, property);
  if (!point) {
    return {};
  }
  var pointValue = point[property];
  var segments = line.segments;
  var linePoints = line.points;
  var first = false;
  var last = false;
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    var firstValue = linePoints[segment.start][property];
    var lastValue = linePoints[segment.end][property];
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aj"])(pointValue, firstValue, lastValue)) {
      first = pointValue === firstValue;
      last = pointValue === lastValue;
      break;
    }
  }
  return {
    first: first,
    last: last,
    point: point
  };
}
var simpleArc = /*#__PURE__*/function () {
  function simpleArc(opts) {
    this.x = opts.x;
    this.y = opts.y;
    this.radius = opts.radius;
  }
  var _proto27 = simpleArc.prototype;
  _proto27.pathSegment = function pathSegment(ctx, bounds, opts) {
    var x = this.x,
      y = this.y,
      radius = this.radius;
    bounds = bounds || {
      start: 0,
      end: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["T"]
    };
    ctx.arc(x, y, radius, bounds.end, bounds.start, true);
    return !opts.bounds;
  };
  _proto27.interpolate = function interpolate(point) {
    var x = this.x,
      y = this.y,
      radius = this.radius;
    var angle = point.angle;
    return {
      x: x + Math.cos(angle) * radius,
      y: y + Math.sin(angle) * radius,
      angle: angle
    };
  };
  return simpleArc;
}();
function _getTarget(source) {
  var chart = source.chart,
    fill = source.fill,
    line = source.line;
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(fill)) {
    return getLineByIndex(chart, fill);
  }
  if (fill === 'stack') {
    return _buildStackLine(source);
  }
  if (fill === 'shape') {
    return true;
  }
  var boundary = computeBoundary(source);
  if (boundary instanceof simpleArc) {
    return boundary;
  }
  return _createBoundaryLine(boundary, line);
}
function getLineByIndex(chart, index) {
  var meta = chart.getDatasetMeta(index);
  var visible = meta && chart.isDatasetVisible(index);
  return visible ? meta.dataset : null;
}
function computeBoundary(source) {
  var scale = source.scale || {};
  if (scale.getPointPositionForValue) {
    return computeCircularBoundary(source);
  }
  return computeLinearBoundary(source);
}
function computeLinearBoundary(source) {
  var _source$scale = source.scale,
    scale = _source$scale === void 0 ? {} : _source$scale,
    fill = source.fill;
  var pixel = _getTargetPixel(fill, scale);
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(pixel)) {
    var horizontal = scale.isHorizontal();
    return {
      x: horizontal ? pixel : null,
      y: horizontal ? null : pixel
    };
  }
  return null;
}
function computeCircularBoundary(source) {
  var scale = source.scale,
    fill = source.fill;
  var options = scale.options;
  var length = scale.getLabels().length;
  var start = options.reverse ? scale.max : scale.min;
  var value = _getTargetValue(fill, scale, start);
  var target = [];
  if (options.grid.circular) {
    var center = scale.getPointPositionForValue(0, start);
    return new simpleArc({
      x: center.x,
      y: center.y,
      radius: scale.getDistanceFromCenterForValue(value)
    });
  }
  for (var i = 0; i < length; ++i) {
    target.push(scale.getPointPositionForValue(i, value));
  }
  return target;
}
function _drawfill(ctx, source, area) {
  var target = _getTarget(source);
  var line = source.line,
    scale = source.scale,
    axis = source.axis;
  var lineOpts = line.options;
  var fillOption = lineOpts.fill;
  var color = lineOpts.backgroundColor;
  var _ref9 = fillOption || {},
    _ref9$above = _ref9.above,
    above = _ref9$above === void 0 ? color : _ref9$above,
    _ref9$below = _ref9.below,
    below = _ref9$below === void 0 ? color : _ref9$below;
  if (target && line.points.length) {
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Y"])(ctx, area);
    doFill(ctx, {
      line: line,
      target: target,
      above: above,
      below: below,
      area: area,
      scale: scale,
      axis: axis
    });
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["$"])(ctx);
  }
}
function doFill(ctx, cfg) {
  var line = cfg.line,
    target = cfg.target,
    above = cfg.above,
    below = cfg.below,
    area = cfg.area,
    scale = cfg.scale;
  var property = line._loop ? 'angle' : cfg.axis;
  ctx.save();
  if (property === 'x' && below !== above) {
    clipVertical(ctx, target, area.top);
    fill(ctx, {
      line: line,
      target: target,
      color: above,
      scale: scale,
      property: property
    });
    ctx.restore();
    ctx.save();
    clipVertical(ctx, target, area.bottom);
  }
  fill(ctx, {
    line: line,
    target: target,
    color: below,
    scale: scale,
    property: property
  });
  ctx.restore();
}
function clipVertical(ctx, target, clipY) {
  var segments = target.segments,
    points = target.points;
  var first = true;
  var lineLoop = false;
  ctx.beginPath();
  for (var _iterator21 = _createForOfIteratorHelperLoose(segments), _step21; !(_step21 = _iterator21()).done;) {
    var segment = _step21.value;
    var start = segment.start,
      end = segment.end;
    var firstPoint = points[start];
    var lastPoint = points[_findSegmentEnd(start, end, points)];
    if (first) {
      ctx.moveTo(firstPoint.x, firstPoint.y);
      first = false;
    } else {
      ctx.lineTo(firstPoint.x, clipY);
      ctx.lineTo(firstPoint.x, firstPoint.y);
    }
    lineLoop = !!target.pathSegment(ctx, segment, {
      move: lineLoop
    });
    if (lineLoop) {
      ctx.closePath();
    } else {
      ctx.lineTo(lastPoint.x, clipY);
    }
  }
  ctx.lineTo(target.first().x, clipY);
  ctx.closePath();
  ctx.clip();
}
function fill(ctx, cfg) {
  var line = cfg.line,
    target = cfg.target,
    property = cfg.property,
    color = cfg.color,
    scale = cfg.scale;
  var segments = _segments(line, target, property);
  for (var _iterator22 = _createForOfIteratorHelperLoose(segments), _step22; !(_step22 = _iterator22()).done;) {
    var _step22$value = _step22.value,
      src = _step22$value.source,
      tgt = _step22$value.target,
      start = _step22$value.start,
      end = _step22$value.end;
    var _src$style = src.style,
      _src$style2 = _src$style === void 0 ? {} : _src$style,
      _src$style2$backgroun = _src$style2.backgroundColor,
      backgroundColor = _src$style2$backgroun === void 0 ? color : _src$style2$backgroun;
    var notShape = target !== true;
    ctx.save();
    ctx.fillStyle = backgroundColor;
    clipBounds(ctx, scale, notShape && _getBounds(property, start, end));
    ctx.beginPath();
    var lineLoop = !!line.pathSegment(ctx, src);
    var loop = void 0;
    if (notShape) {
      if (lineLoop) {
        ctx.closePath();
      } else {
        interpolatedLineTo(ctx, target, end, property);
      }
      var targetLoop = !!target.pathSegment(ctx, tgt, {
        move: lineLoop,
        reverse: true
      });
      loop = lineLoop && targetLoop;
      if (!loop) {
        interpolatedLineTo(ctx, target, start, property);
      }
    }
    ctx.closePath();
    ctx.fill(loop ? 'evenodd' : 'nonzero');
    ctx.restore();
  }
}
function clipBounds(ctx, scale, bounds) {
  var _scale$chart$chartAre = scale.chart.chartArea,
    top = _scale$chart$chartAre.top,
    bottom = _scale$chart$chartAre.bottom;
  var _ref10 = bounds || {},
    property = _ref10.property,
    start = _ref10.start,
    end = _ref10.end;
  if (property === 'x') {
    ctx.beginPath();
    ctx.rect(start, top, end - start, bottom - top);
    ctx.clip();
  }
}
function interpolatedLineTo(ctx, target, point, property) {
  var interpolatedPoint = target.interpolate(point, property);
  if (interpolatedPoint) {
    ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
  }
}
var index = {
  id: 'filler',
  afterDatasetsUpdate: function afterDatasetsUpdate(chart, _args, options) {
    var count = (chart.data.datasets || []).length;
    var sources = [];
    var meta, i, line, source;
    for (i = 0; i < count; ++i) {
      meta = chart.getDatasetMeta(i);
      line = meta.dataset;
      source = null;
      if (line && line.options && line instanceof LineElement) {
        source = {
          visible: chart.isDatasetVisible(i),
          index: i,
          fill: _decodeFill(line, i, count),
          chart: chart,
          axis: meta.controller.options.indexAxis,
          scale: meta.vScale,
          line: line
        };
      }
      meta.$filler = source;
      sources.push(source);
    }
    for (i = 0; i < count; ++i) {
      source = sources[i];
      if (!source || source.fill === false) {
        continue;
      }
      source.fill = _resolveTarget(sources, i, options.propagate);
    }
  },
  beforeDraw: function beforeDraw(chart, _args, options) {
    var draw = options.drawTime === 'beforeDraw';
    var metasets = chart.getSortedVisibleDatasetMetas();
    var area = chart.chartArea;
    for (var i = metasets.length - 1; i >= 0; --i) {
      var source = metasets[i].$filler;
      if (!source) {
        continue;
      }
      source.line.updateControlPoints(area, source.axis);
      if (draw && source.fill) {
        _drawfill(chart.ctx, source, area);
      }
    }
  },
  beforeDatasetsDraw: function beforeDatasetsDraw(chart, _args, options) {
    if (options.drawTime !== 'beforeDatasetsDraw') {
      return;
    }
    var metasets = chart.getSortedVisibleDatasetMetas();
    for (var i = metasets.length - 1; i >= 0; --i) {
      var source = metasets[i].$filler;
      if (_shouldApplyFill(source)) {
        _drawfill(chart.ctx, source, chart.chartArea);
      }
    }
  },
  beforeDatasetDraw: function beforeDatasetDraw(chart, args, options) {
    var source = args.meta.$filler;
    if (!_shouldApplyFill(source) || options.drawTime !== 'beforeDatasetDraw') {
      return;
    }
    _drawfill(chart.ctx, source, chart.chartArea);
  },
  defaults: {
    propagate: true,
    drawTime: 'beforeDatasetDraw'
  }
};
var getBoxSize = function getBoxSize(labelOpts, fontSize) {
  var _labelOpts$boxHeight = labelOpts.boxHeight,
    boxHeight = _labelOpts$boxHeight === void 0 ? fontSize : _labelOpts$boxHeight,
    _labelOpts$boxWidth = labelOpts.boxWidth,
    boxWidth = _labelOpts$boxWidth === void 0 ? fontSize : _labelOpts$boxWidth;
  if (labelOpts.usePointStyle) {
    boxHeight = Math.min(boxHeight, fontSize);
    boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
  }
  return {
    boxWidth: boxWidth,
    boxHeight: boxHeight,
    itemHeight: Math.max(fontSize, boxHeight)
  };
};
var itemsEqual = function itemsEqual(a, b) {
  return a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
};
var Legend = /*#__PURE__*/function (_Element7) {
  function Legend(config) {
    var _this27;
    _this27 = _Element7.call(this) || this;
    _this27._added = false;
    _this27.legendHitBoxes = [];
    _this27._hoveredItem = null;
    _this27.doughnutMode = false;
    _this27.chart = config.chart;
    _this27.options = config.options;
    _this27.ctx = config.ctx;
    _this27.legendItems = undefined;
    _this27.columnSizes = undefined;
    _this27.lineWidths = undefined;
    _this27.maxHeight = undefined;
    _this27.maxWidth = undefined;
    _this27.top = undefined;
    _this27.bottom = undefined;
    _this27.left = undefined;
    _this27.right = undefined;
    _this27.height = undefined;
    _this27.width = undefined;
    _this27._margins = undefined;
    _this27.position = undefined;
    _this27.weight = undefined;
    _this27.fullSize = undefined;
    return _this27;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Legend, _Element7);
  var _proto28 = Legend.prototype;
  _proto28.update = function update(maxWidth, maxHeight, margins) {
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this._margins = margins;
    this.setDimensions();
    this.buildLabels();
    this.fit();
  };
  _proto28.setDimensions = function setDimensions() {
    if (this.isHorizontal()) {
      this.width = this.maxWidth;
      this.left = this._margins.left;
      this.right = this.width;
    } else {
      this.height = this.maxHeight;
      this.top = this._margins.top;
      this.bottom = this.height;
    }
  };
  _proto28.buildLabels = function buildLabels() {
    var _this28 = this;
    var labelOpts = this.options.labels || {};
    var legendItems = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(labelOpts.generateLabels, [this.chart], this) || [];
    if (labelOpts.filter) {
      legendItems = legendItems.filter(function (item) {
        return labelOpts.filter(item, _this28.chart.data);
      });
    }
    if (labelOpts.sort) {
      legendItems = legendItems.sort(function (a, b) {
        return labelOpts.sort(a, b, _this28.chart.data);
      });
    }
    if (this.options.reverse) {
      legendItems.reverse();
    }
    this.legendItems = legendItems;
  };
  _proto28.fit = function fit() {
    var options = this.options,
      ctx = this.ctx;
    if (!options.display) {
      this.width = this.height = 0;
      return;
    }
    var labelOpts = options.labels;
    var labelFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(labelOpts.font);
    var fontSize = labelFont.size;
    var titleHeight = this._computeTitleHeight();
    var _getBoxSize = getBoxSize(labelOpts, fontSize),
      boxWidth = _getBoxSize.boxWidth,
      itemHeight = _getBoxSize.itemHeight;
    var width, height;
    ctx.font = labelFont.string;
    if (this.isHorizontal()) {
      width = this.maxWidth;
      height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
    } else {
      height = this.maxHeight;
      width = this._fitCols(titleHeight, labelFont, boxWidth, itemHeight) + 10;
    }
    this.width = Math.min(width, options.maxWidth || this.maxWidth);
    this.height = Math.min(height, options.maxHeight || this.maxHeight);
  };
  _proto28._fitRows = function _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
    var ctx = this.ctx,
      maxWidth = this.maxWidth,
      padding = this.options.labels.padding;
    var hitboxes = this.legendHitBoxes = [];
    var lineWidths = this.lineWidths = [0];
    var lineHeight = itemHeight + padding;
    var totalHeight = titleHeight;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    var row = -1;
    var top = -lineHeight;
    this.legendItems.forEach(function (legendItem, i) {
      var itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
      if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
        totalHeight += lineHeight;
        lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
        top += lineHeight;
        row++;
      }
      hitboxes[i] = {
        left: 0,
        top: top,
        row: row,
        width: itemWidth,
        height: itemHeight
      };
      lineWidths[lineWidths.length - 1] += itemWidth + padding;
    });
    return totalHeight;
  };
  _proto28._fitCols = function _fitCols(titleHeight, labelFont, boxWidth, _itemHeight) {
    var ctx = this.ctx,
      maxHeight = this.maxHeight,
      padding = this.options.labels.padding;
    var hitboxes = this.legendHitBoxes = [];
    var columnSizes = this.columnSizes = [];
    var heightLimit = maxHeight - titleHeight;
    var totalWidth = padding;
    var currentColWidth = 0;
    var currentColHeight = 0;
    var left = 0;
    var col = 0;
    this.legendItems.forEach(function (legendItem, i) {
      var _calculateItemSize = calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight),
        itemWidth = _calculateItemSize.itemWidth,
        itemHeight = _calculateItemSize.itemHeight;
      if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
        totalWidth += currentColWidth + padding;
        columnSizes.push({
          width: currentColWidth,
          height: currentColHeight
        });
        left += currentColWidth + padding;
        col++;
        currentColWidth = currentColHeight = 0;
      }
      hitboxes[i] = {
        left: left,
        top: currentColHeight,
        col: col,
        width: itemWidth,
        height: itemHeight
      };
      currentColWidth = Math.max(currentColWidth, itemWidth);
      currentColHeight += itemHeight + padding;
    });
    totalWidth += currentColWidth;
    columnSizes.push({
      width: currentColWidth,
      height: currentColHeight
    });
    return totalWidth;
  };
  _proto28.adjustHitBoxes = function adjustHitBoxes() {
    if (!this.options.display) {
      return;
    }
    var titleHeight = this._computeTitleHeight();
    var hitboxes = this.legendHitBoxes,
      _this$options15 = this.options,
      align = _this$options15.align,
      padding = _this$options15.labels.padding,
      rtl = _this$options15.rtl;
    var rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["az"])(rtl, this.left, this.width);
    if (this.isHorizontal()) {
      var row = 0;
      var left = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(align, this.left + padding, this.right - this.lineWidths[row]);
      for (var _iterator23 = _createForOfIteratorHelperLoose(hitboxes), _step23; !(_step23 = _iterator23()).done;) {
        var hitbox = _step23.value;
        if (row !== hitbox.row) {
          row = hitbox.row;
          left = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(align, this.left + padding, this.right - this.lineWidths[row]);
        }
        hitbox.top += this.top + titleHeight + padding;
        hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
        left += hitbox.width + padding;
      }
    } else {
      var col = 0;
      var top = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
      for (var _iterator24 = _createForOfIteratorHelperLoose(hitboxes), _step24; !(_step24 = _iterator24()).done;) {
        var _hitbox = _step24.value;
        if (_hitbox.col !== col) {
          col = _hitbox.col;
          top = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
        }
        _hitbox.top = top;
        _hitbox.left += this.left + padding;
        _hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(_hitbox.left), _hitbox.width);
        top += _hitbox.height + padding;
      }
    }
  };
  _proto28.isHorizontal = function isHorizontal() {
    return this.options.position === 'top' || this.options.position === 'bottom';
  };
  _proto28.draw = function draw() {
    if (this.options.display) {
      var ctx = this.ctx;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Y"])(ctx, this);
      this._draw();
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["$"])(ctx);
    }
  };
  _proto28._draw = function _draw() {
    var _this29 = this;
    var opts = this.options,
      columnSizes = this.columnSizes,
      lineWidths = this.lineWidths,
      ctx = this.ctx;
    var align = opts.align,
      labelOpts = opts.labels;
    var defaultColor = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].color;
    var rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["az"])(opts.rtl, this.left, this.width);
    var labelFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(labelOpts.font);
    var padding = labelOpts.padding;
    var fontSize = labelFont.size;
    var halfFontSize = fontSize / 2;
    var cursor;
    this.drawTitle();
    ctx.textAlign = rtlHelper.textAlign('left');
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 0.5;
    ctx.font = labelFont.string;
    var _getBoxSize2 = getBoxSize(labelOpts, fontSize),
      boxWidth = _getBoxSize2.boxWidth,
      boxHeight = _getBoxSize2.boxHeight,
      itemHeight = _getBoxSize2.itemHeight;
    var drawLegendBox = function drawLegendBox(x, y, legendItem) {
      if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
        return;
      }
      ctx.save();
      var lineWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(legendItem.lineWidth, 1);
      ctx.fillStyle = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(legendItem.fillStyle, defaultColor);
      ctx.lineCap = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(legendItem.lineCap, 'butt');
      ctx.lineDashOffset = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(legendItem.lineDashOffset, 0);
      ctx.lineJoin = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(legendItem.lineJoin, 'miter');
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(legendItem.strokeStyle, defaultColor);
      ctx.setLineDash(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(legendItem.lineDash, []));
      if (labelOpts.usePointStyle) {
        var drawOptions = {
          radius: boxHeight * Math.SQRT2 / 2,
          pointStyle: legendItem.pointStyle,
          rotation: legendItem.rotation,
          borderWidth: lineWidth
        };
        var centerX = rtlHelper.xPlus(x, boxWidth / 2);
        var centerY = y + halfFontSize;
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aD"])(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
      } else {
        var yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
        var xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
        var borderRadius = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aw"])(legendItem.borderRadius);
        ctx.beginPath();
        if (Object.values(borderRadius).some(function (v) {
          return v !== 0;
        })) {
          Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["au"])(ctx, {
            x: xBoxLeft,
            y: yBoxTop,
            w: boxWidth,
            h: boxHeight,
            radius: borderRadius
          });
        } else {
          ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
        }
        ctx.fill();
        if (lineWidth !== 0) {
          ctx.stroke();
        }
      }
      ctx.restore();
    };
    var fillText = function fillText(x, y, legendItem) {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Z"])(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
        strikethrough: legendItem.hidden,
        textAlign: rtlHelper.textAlign(legendItem.textAlign)
      });
    };
    var isHorizontal = this.isHorizontal();
    var titleHeight = this._computeTitleHeight();
    if (isHorizontal) {
      cursor = {
        x: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(align, this.left + padding, this.right - lineWidths[0]),
        y: this.top + padding + titleHeight,
        line: 0
      };
    } else {
      cursor = {
        x: this.left + padding,
        y: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
        line: 0
      };
    }
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aA"])(this.ctx, opts.textDirection);
    var lineHeight = itemHeight + padding;
    this.legendItems.forEach(function (legendItem, i) {
      ctx.strokeStyle = legendItem.fontColor;
      ctx.fillStyle = legendItem.fontColor;
      var textWidth = ctx.measureText(legendItem.text).width;
      var textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
      var width = boxWidth + halfFontSize + textWidth;
      var x = cursor.x;
      var y = cursor.y;
      rtlHelper.setWidth(_this29.width);
      if (isHorizontal) {
        if (i > 0 && x + width + padding > _this29.right) {
          y = cursor.y += lineHeight;
          cursor.line++;
          x = cursor.x = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(align, _this29.left + padding, _this29.right - lineWidths[cursor.line]);
        }
      } else if (i > 0 && y + lineHeight > _this29.bottom) {
        x = cursor.x = x + columnSizes[cursor.line].width + padding;
        cursor.line++;
        y = cursor.y = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(align, _this29.top + titleHeight + padding, _this29.bottom - columnSizes[cursor.line].height);
      }
      var realX = rtlHelper.x(x);
      drawLegendBox(realX, y, legendItem);
      x = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aB"])(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : _this29.right, opts.rtl);
      fillText(rtlHelper.x(x), y, legendItem);
      if (isHorizontal) {
        cursor.x += width + padding;
      } else if (typeof legendItem.text !== 'string') {
        var fontLineHeight = labelFont.lineHeight;
        cursor.y += calculateLegendItemHeight(legendItem, fontLineHeight) + padding;
      } else {
        cursor.y += lineHeight;
      }
    });
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aC"])(this.ctx, opts.textDirection);
  };
  _proto28.drawTitle = function drawTitle() {
    var opts = this.options;
    var titleOpts = opts.title;
    var titleFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(titleOpts.font);
    var titlePadding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(titleOpts.padding);
    if (!titleOpts.display) {
      return;
    }
    var rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["az"])(opts.rtl, this.left, this.width);
    var ctx = this.ctx;
    var position = titleOpts.position;
    var halfFontSize = titleFont.size / 2;
    var topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
    var y;
    var left = this.left;
    var maxWidth = this.width;
    if (this.isHorizontal()) {
      maxWidth = Math.max.apply(Math, this.lineWidths);
      y = this.top + topPaddingPlusHalfFontSize;
      left = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(opts.align, left, this.right - maxWidth);
    } else {
      var maxHeight = this.columnSizes.reduce(function (acc, size) {
        return Math.max(acc, size.height);
      }, 0);
      y = topPaddingPlusHalfFontSize + Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
    }
    var x = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(position, left, left + maxWidth);
    ctx.textAlign = rtlHelper.textAlign(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a1"])(position));
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = titleOpts.color;
    ctx.fillStyle = titleOpts.color;
    ctx.font = titleFont.string;
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Z"])(ctx, titleOpts.text, x, y, titleFont);
  };
  _proto28._computeTitleHeight = function _computeTitleHeight() {
    var titleOpts = this.options.title;
    var titleFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(titleOpts.font);
    var titlePadding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(titleOpts.padding);
    return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
  };
  _proto28._getLegendItemAt = function _getLegendItemAt(x, y) {
    var i, hitBox, lh;
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aj"])(x, this.left, this.right) && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aj"])(y, this.top, this.bottom)) {
      lh = this.legendHitBoxes;
      for (i = 0; i < lh.length; ++i) {
        hitBox = lh[i];
        if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aj"])(x, hitBox.left, hitBox.left + hitBox.width) && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aj"])(y, hitBox.top, hitBox.top + hitBox.height)) {
          return this.legendItems[i];
        }
      }
    }
    return null;
  };
  _proto28.handleEvent = function handleEvent(e) {
    var opts = this.options;
    if (!isListened(e.type, opts)) {
      return;
    }
    var hoveredItem = this._getLegendItemAt(e.x, e.y);
    if (e.type === 'mousemove' || e.type === 'mouseout') {
      var previous = this._hoveredItem;
      var sameItem = itemsEqual(previous, hoveredItem);
      if (previous && !sameItem) {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(opts.onLeave, [e, previous, this], this);
      }
      this._hoveredItem = hoveredItem;
      if (hoveredItem && !sameItem) {
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(opts.onHover, [e, hoveredItem, this], this);
      }
    } else if (hoveredItem) {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(opts.onClick, [e, hoveredItem, this], this);
    }
  };
  return Legend;
}(Element);
function calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight) {
  var itemWidth = calculateItemWidth(legendItem, boxWidth, labelFont, ctx);
  var itemHeight = calculateItemHeight(_itemHeight, legendItem, labelFont.lineHeight);
  return {
    itemWidth: itemWidth,
    itemHeight: itemHeight
  };
}
function calculateItemWidth(legendItem, boxWidth, labelFont, ctx) {
  var legendItemText = legendItem.text;
  if (legendItemText && typeof legendItemText !== 'string') {
    legendItemText = legendItemText.reduce(function (a, b) {
      return a.length > b.length ? a : b;
    });
  }
  return boxWidth + labelFont.size / 2 + ctx.measureText(legendItemText).width;
}
function calculateItemHeight(_itemHeight, legendItem, fontLineHeight) {
  var itemHeight = _itemHeight;
  if (typeof legendItem.text !== 'string') {
    itemHeight = calculateLegendItemHeight(legendItem, fontLineHeight);
  }
  return itemHeight;
}
function calculateLegendItemHeight(legendItem, fontLineHeight) {
  var labelHeight = legendItem.text ? legendItem.text.length : 0;
  return fontLineHeight * labelHeight;
}
function isListened(type, opts) {
  if ((type === 'mousemove' || type === 'mouseout') && (opts.onHover || opts.onLeave)) {
    return true;
  }
  if (opts.onClick && (type === 'click' || type === 'mouseup')) {
    return true;
  }
  return false;
}
var plugin_legend = {
  id: 'legend',
  _element: Legend,
  start: function start(chart, _args, options) {
    var legend = chart.legend = new Legend({
      ctx: chart.ctx,
      options: options,
      chart: chart
    });
    layouts.configure(chart, legend, options);
    layouts.addBox(chart, legend);
  },
  stop: function stop(chart) {
    layouts.removeBox(chart, chart.legend);
    delete chart.legend;
  },
  beforeUpdate: function beforeUpdate(chart, _args, options) {
    var legend = chart.legend;
    layouts.configure(chart, legend, options);
    legend.options = options;
  },
  afterUpdate: function afterUpdate(chart) {
    var legend = chart.legend;
    legend.buildLabels();
    legend.adjustHitBoxes();
  },
  afterEvent: function afterEvent(chart, args) {
    if (!args.replay) {
      chart.legend.handleEvent(args.event);
    }
  },
  defaults: {
    display: true,
    position: 'top',
    align: 'center',
    fullSize: true,
    reverse: false,
    weight: 1000,
    onClick: function onClick(e, legendItem, legend) {
      var index = legendItem.datasetIndex;
      var ci = legend.chart;
      if (ci.isDatasetVisible(index)) {
        ci.hide(index);
        legendItem.hidden = true;
      } else {
        ci.show(index);
        legendItem.hidden = false;
      }
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: function color(ctx) {
        return ctx.chart.options.color;
      },
      boxWidth: 40,
      padding: 10,
      generateLabels: function generateLabels(chart) {
        var datasets = chart.data.datasets;
        var _chart$legend$options = chart.legend.options.labels,
          usePointStyle = _chart$legend$options.usePointStyle,
          pointStyle = _chart$legend$options.pointStyle,
          textAlign = _chart$legend$options.textAlign,
          color = _chart$legend$options.color,
          useBorderRadius = _chart$legend$options.useBorderRadius,
          borderRadius = _chart$legend$options.borderRadius;
        return chart._getSortedDatasetMetas().map(function (meta) {
          var style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
          var borderWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(style.borderWidth);
          return {
            text: datasets[meta.index].label,
            fillStyle: style.backgroundColor,
            fontColor: color,
            hidden: !meta.visible,
            lineCap: style.borderCapStyle,
            lineDash: style.borderDash,
            lineDashOffset: style.borderDashOffset,
            lineJoin: style.borderJoinStyle,
            lineWidth: (borderWidth.width + borderWidth.height) / 4,
            strokeStyle: style.borderColor,
            pointStyle: pointStyle || style.pointStyle,
            rotation: style.rotation,
            textAlign: textAlign || style.textAlign,
            borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
            datasetIndex: meta.index
          };
        }, this);
      }
    },
    title: {
      color: function color(ctx) {
        return ctx.chart.options.color;
      },
      display: false,
      position: 'center',
      text: ''
    }
  },
  descriptors: {
    _scriptable: function _scriptable(name) {
      return !name.startsWith('on');
    },
    labels: {
      _scriptable: function _scriptable(name) {
        return !['generateLabels', 'filter', 'sort'].includes(name);
      }
    }
  }
};
var Title = /*#__PURE__*/function (_Element8) {
  function Title(config) {
    var _this30;
    _this30 = _Element8.call(this) || this;
    _this30.chart = config.chart;
    _this30.options = config.options;
    _this30.ctx = config.ctx;
    _this30._padding = undefined;
    _this30.top = undefined;
    _this30.bottom = undefined;
    _this30.left = undefined;
    _this30.right = undefined;
    _this30.width = undefined;
    _this30.height = undefined;
    _this30.position = undefined;
    _this30.weight = undefined;
    _this30.fullSize = undefined;
    return _this30;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Title, _Element8);
  var _proto29 = Title.prototype;
  _proto29.update = function update(maxWidth, maxHeight) {
    var opts = this.options;
    this.left = 0;
    this.top = 0;
    if (!opts.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = maxWidth;
    this.height = this.bottom = maxHeight;
    var lineCount = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["b"])(opts.text) ? opts.text.length : 1;
    this._padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(opts.padding);
    var textSize = lineCount * Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(opts.font).lineHeight + this._padding.height;
    if (this.isHorizontal()) {
      this.height = textSize;
    } else {
      this.width = textSize;
    }
  };
  _proto29.isHorizontal = function isHorizontal() {
    var pos = this.options.position;
    return pos === 'top' || pos === 'bottom';
  };
  _proto29._drawArgs = function _drawArgs(offset) {
    var top = this.top,
      left = this.left,
      bottom = this.bottom,
      right = this.right,
      options = this.options;
    var align = options.align;
    var rotation = 0;
    var maxWidth, titleX, titleY;
    if (this.isHorizontal()) {
      titleX = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(align, left, right);
      titleY = top + offset;
      maxWidth = right - left;
    } else {
      if (options.position === 'left') {
        titleX = left + offset;
        titleY = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(align, bottom, top);
        rotation = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["P"] * -0.5;
      } else {
        titleX = right - offset;
        titleY = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a2"])(align, top, bottom);
        rotation = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["P"] * 0.5;
      }
      maxWidth = bottom - top;
    }
    return {
      titleX: titleX,
      titleY: titleY,
      maxWidth: maxWidth,
      rotation: rotation
    };
  };
  _proto29.draw = function draw() {
    var ctx = this.ctx;
    var opts = this.options;
    if (!opts.display) {
      return;
    }
    var fontOpts = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(opts.font);
    var lineHeight = fontOpts.lineHeight;
    var offset = lineHeight / 2 + this._padding.top;
    var _this$_drawArgs = this._drawArgs(offset),
      titleX = _this$_drawArgs.titleX,
      titleY = _this$_drawArgs.titleY,
      maxWidth = _this$_drawArgs.maxWidth,
      rotation = _this$_drawArgs.rotation;
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Z"])(ctx, opts.text, 0, 0, fontOpts, {
      color: opts.color,
      maxWidth: maxWidth,
      rotation: rotation,
      textAlign: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a1"])(opts.align),
      textBaseline: 'middle',
      translation: [titleX, titleY]
    });
  };
  return Title;
}(Element);
function createTitle(chart, titleOpts) {
  var title = new Title({
    ctx: chart.ctx,
    options: titleOpts,
    chart: chart
  });
  layouts.configure(chart, title, titleOpts);
  layouts.addBox(chart, title);
  chart.titleBlock = title;
}
var plugin_title = {
  id: 'title',
  _element: Title,
  start: function start(chart, _args, options) {
    createTitle(chart, options);
  },
  stop: function stop(chart) {
    var titleBlock = chart.titleBlock;
    layouts.removeBox(chart, titleBlock);
    delete chart.titleBlock;
  },
  beforeUpdate: function beforeUpdate(chart, _args, options) {
    var title = chart.titleBlock;
    layouts.configure(chart, title, options);
    title.options = options;
  },
  defaults: {
    align: 'center',
    display: false,
    font: {
      weight: 'bold'
    },
    fullSize: true,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2000
  },
  defaultRoutes: {
    color: 'color'
  },
  descriptors: {
    _scriptable: true,
    _indexable: false
  }
};
var map = new WeakMap();
var plugin_subtitle = {
  id: 'subtitle',
  start: function start(chart, _args, options) {
    var title = new Title({
      ctx: chart.ctx,
      options: options,
      chart: chart
    });
    layouts.configure(chart, title, options);
    layouts.addBox(chart, title);
    map.set(chart, title);
  },
  stop: function stop(chart) {
    layouts.removeBox(chart, map.get(chart));
    map["delete"](chart);
  },
  beforeUpdate: function beforeUpdate(chart, _args, options) {
    var title = map.get(chart);
    layouts.configure(chart, title, options);
    title.options = options;
  },
  defaults: {
    align: 'center',
    display: false,
    font: {
      weight: 'normal'
    },
    fullSize: true,
    padding: 0,
    position: 'top',
    text: '',
    weight: 1500
  },
  defaultRoutes: {
    color: 'color'
  },
  descriptors: {
    _scriptable: true,
    _indexable: false
  }
};
var positioners = {
  average: function average(items) {
    if (!items.length) {
      return false;
    }
    var i, len;
    var xSet = new Set();
    var y = 0;
    var count = 0;
    for (i = 0, len = items.length; i < len; ++i) {
      var el = items[i].element;
      if (el && el.hasValue()) {
        var pos = el.tooltipPosition();
        xSet.add(pos.x);
        y += pos.y;
        ++count;
      }
    }
    if (count === 0 || xSet.size === 0) {
      return false;
    }
    var xAverage = [].concat(xSet).reduce(function (a, b) {
      return a + b;
    }) / xSet.size;
    return {
      x: xAverage,
      y: y / count
    };
  },
  nearest: function nearest(items, eventPosition) {
    if (!items.length) {
      return false;
    }
    var x = eventPosition.x;
    var y = eventPosition.y;
    var minDistance = Number.POSITIVE_INFINITY;
    var i, len, nearestElement;
    for (i = 0, len = items.length; i < len; ++i) {
      var el = items[i].element;
      if (el && el.hasValue()) {
        var center = el.getCenterPoint();
        var d = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aE"])(eventPosition, center);
        if (d < minDistance) {
          minDistance = d;
          nearestElement = el;
        }
      }
    }
    if (nearestElement) {
      var tp = nearestElement.tooltipPosition();
      x = tp.x;
      y = tp.y;
    }
    return {
      x: x,
      y: y
    };
  }
};
function pushOrConcat(base, toPush) {
  if (toPush) {
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["b"])(toPush)) {
      Array.prototype.push.apply(base, toPush);
    } else {
      base.push(toPush);
    }
  }
  return base;
}
function splitNewlines(str) {
  if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
    return str.split('\n');
  }
  return str;
}
function createTooltipItem(chart, item) {
  var element = item.element,
    datasetIndex = item.datasetIndex,
    index = item.index;
  var controller = chart.getDatasetMeta(datasetIndex).controller;
  var _controller$getLabelA = controller.getLabelAndValue(index),
    label = _controller$getLabelA.label,
    value = _controller$getLabelA.value;
  return {
    chart: chart,
    label: label,
    parsed: controller.getParsed(index),
    raw: chart.data.datasets[datasetIndex].data[index],
    formattedValue: value,
    dataset: controller.getDataset(),
    dataIndex: index,
    datasetIndex: datasetIndex,
    element: element
  };
}
function getTooltipSize(tooltip, options) {
  var ctx = tooltip.chart.ctx;
  var body = tooltip.body,
    footer = tooltip.footer,
    title = tooltip.title;
  var boxWidth = options.boxWidth,
    boxHeight = options.boxHeight;
  var bodyFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(options.bodyFont);
  var titleFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(options.titleFont);
  var footerFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(options.footerFont);
  var titleLineCount = title.length;
  var footerLineCount = footer.length;
  var bodyLineItemCount = body.length;
  var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(options.padding);
  var height = padding.height;
  var width = 0;
  var combinedBodyLength = body.reduce(function (count, bodyItem) {
    return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
  }, 0);
  combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
  if (titleLineCount) {
    height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
  }
  if (combinedBodyLength) {
    var bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
    height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
  }
  if (footerLineCount) {
    height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
  }
  var widthPadding = 0;
  var maxLineWidth = function maxLineWidth(line) {
    width = Math.max(width, ctx.measureText(line).width + widthPadding);
  };
  ctx.save();
  ctx.font = titleFont.string;
  Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(tooltip.title, maxLineWidth);
  ctx.font = bodyFont.string;
  Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
  widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
  Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(body, function (bodyItem) {
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(bodyItem.before, maxLineWidth);
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(bodyItem.lines, maxLineWidth);
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(bodyItem.after, maxLineWidth);
  });
  widthPadding = 0;
  ctx.font = footerFont.string;
  Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(tooltip.footer, maxLineWidth);
  ctx.restore();
  width += padding.width;
  return {
    width: width,
    height: height
  };
}
function determineYAlign(chart, size) {
  var y = size.y,
    height = size.height;
  if (y < height / 2) {
    return 'top';
  } else if (y > chart.height - height / 2) {
    return 'bottom';
  }
  return 'center';
}
function doesNotFitWithAlign(xAlign, chart, options, size) {
  var x = size.x,
    width = size.width;
  var caret = options.caretSize + options.caretPadding;
  if (xAlign === 'left' && x + width + caret > chart.width) {
    return true;
  }
  if (xAlign === 'right' && x - width - caret < 0) {
    return true;
  }
}
function determineXAlign(chart, options, size, yAlign) {
  var x = size.x,
    width = size.width;
  var chartWidth = chart.width,
    _chart$chartArea = chart.chartArea,
    left = _chart$chartArea.left,
    right = _chart$chartArea.right;
  var xAlign = 'center';
  if (yAlign === 'center') {
    xAlign = x <= (left + right) / 2 ? 'left' : 'right';
  } else if (x <= width / 2) {
    xAlign = 'left';
  } else if (x >= chartWidth - width / 2) {
    xAlign = 'right';
  }
  if (doesNotFitWithAlign(xAlign, chart, options, size)) {
    xAlign = 'center';
  }
  return xAlign;
}
function determineAlignment(chart, options, size) {
  var yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
  return {
    xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
    yAlign: yAlign
  };
}
function alignX(size, xAlign) {
  var x = size.x,
    width = size.width;
  if (xAlign === 'right') {
    x -= width;
  } else if (xAlign === 'center') {
    x -= width / 2;
  }
  return x;
}
function alignY(size, yAlign, paddingAndSize) {
  var y = size.y,
    height = size.height;
  if (yAlign === 'top') {
    y += paddingAndSize;
  } else if (yAlign === 'bottom') {
    y -= height + paddingAndSize;
  } else {
    y -= height / 2;
  }
  return y;
}
function getBackgroundPoint(options, size, alignment, chart) {
  var caretSize = options.caretSize,
    caretPadding = options.caretPadding,
    cornerRadius = options.cornerRadius;
  var xAlign = alignment.xAlign,
    yAlign = alignment.yAlign;
  var paddingAndSize = caretSize + caretPadding;
  var _toTRBLCorners = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aw"])(cornerRadius),
    topLeft = _toTRBLCorners.topLeft,
    topRight = _toTRBLCorners.topRight,
    bottomLeft = _toTRBLCorners.bottomLeft,
    bottomRight = _toTRBLCorners.bottomRight;
  var x = alignX(size, xAlign);
  var y = alignY(size, yAlign, paddingAndSize);
  if (yAlign === 'center') {
    if (xAlign === 'left') {
      x += paddingAndSize;
    } else if (xAlign === 'right') {
      x -= paddingAndSize;
    }
  } else if (xAlign === 'left') {
    x -= Math.max(topLeft, bottomLeft) + caretSize;
  } else if (xAlign === 'right') {
    x += Math.max(topRight, bottomRight) + caretSize;
  }
  return {
    x: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["S"])(x, 0, chart.width - size.width),
    y: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["S"])(y, 0, chart.height - size.height)
  };
}
function getAlignedX(tooltip, align, options) {
  var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(options.padding);
  return align === 'center' ? tooltip.x + tooltip.width / 2 : align === 'right' ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
}
function getBeforeAfterBodyLines(callback) {
  return pushOrConcat([], splitNewlines(callback));
}
function createTooltipContext(parent, tooltip, tooltipItems) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["j"])(parent, {
    tooltip: tooltip,
    tooltipItems: tooltipItems,
    type: 'tooltip'
  });
}
function overrideCallbacks(callbacks, context) {
  var override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
  return override ? callbacks.override(override) : callbacks;
}
var defaultCallbacks = {
  beforeTitle: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aF"],
  title: function title(tooltipItems) {
    if (tooltipItems.length > 0) {
      var item = tooltipItems[0];
      var labels = item.chart.data.labels;
      var labelCount = labels ? labels.length : 0;
      if (this && this.options && this.options.mode === 'dataset') {
        return item.dataset.label || '';
      } else if (item.label) {
        return item.label;
      } else if (labelCount > 0 && item.dataIndex < labelCount) {
        return labels[item.dataIndex];
      }
    }
    return '';
  },
  afterTitle: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aF"],
  beforeBody: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aF"],
  beforeLabel: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aF"],
  label: function label(tooltipItem) {
    if (this && this.options && this.options.mode === 'dataset') {
      return tooltipItem.label + ': ' + tooltipItem.formattedValue || tooltipItem.formattedValue;
    }
    var label = tooltipItem.dataset.label || '';
    if (label) {
      label += ': ';
    }
    var value = tooltipItem.formattedValue;
    if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(value)) {
      label += value;
    }
    return label;
  },
  labelColor: function labelColor(tooltipItem) {
    var meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
    var options = meta.controller.getStyle(tooltipItem.dataIndex);
    return {
      borderColor: options.borderColor,
      backgroundColor: options.backgroundColor,
      borderWidth: options.borderWidth,
      borderDash: options.borderDash,
      borderDashOffset: options.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor: function labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle: function labelPointStyle(tooltipItem) {
    var meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
    var options = meta.controller.getStyle(tooltipItem.dataIndex);
    return {
      pointStyle: options.pointStyle,
      rotation: options.rotation
    };
  },
  afterLabel: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aF"],
  afterBody: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aF"],
  beforeFooter: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aF"],
  footer: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aF"],
  afterFooter: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aF"]
};
function invokeCallbackWithFallback(callbacks, name, ctx, arg) {
  var result = callbacks[name].call(ctx, arg);
  if (typeof result === 'undefined') {
    return defaultCallbacks[name].call(ctx, arg);
  }
  return result;
}
var Tooltip = /*#__PURE__*/function (_Element9) {
  function Tooltip(config) {
    var _this31;
    _this31 = _Element9.call(this) || this;
    _this31.opacity = 0;
    _this31._active = [];
    _this31._eventPosition = undefined;
    _this31._size = undefined;
    _this31._cachedAnimations = undefined;
    _this31._tooltipItems = [];
    _this31.$animations = undefined;
    _this31.$context = undefined;
    _this31.chart = config.chart;
    _this31.options = config.options;
    _this31.dataPoints = undefined;
    _this31.title = undefined;
    _this31.beforeBody = undefined;
    _this31.body = undefined;
    _this31.afterBody = undefined;
    _this31.footer = undefined;
    _this31.xAlign = undefined;
    _this31.yAlign = undefined;
    _this31.x = undefined;
    _this31.y = undefined;
    _this31.height = undefined;
    _this31.width = undefined;
    _this31.caretX = undefined;
    _this31.caretY = undefined;
    _this31.labelColors = undefined;
    _this31.labelPointStyles = undefined;
    _this31.labelTextColors = undefined;
    return _this31;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Tooltip, _Element9);
  var _proto30 = Tooltip.prototype;
  _proto30.initialize = function initialize(options) {
    this.options = options;
    this._cachedAnimations = undefined;
    this.$context = undefined;
  };
  _proto30._resolveAnimations = function _resolveAnimations() {
    var cached = this._cachedAnimations;
    if (cached) {
      return cached;
    }
    var chart = this.chart;
    var options = this.options.setContext(this.getContext());
    var opts = options.enabled && chart.options.animation && options.animations;
    var animations = new Animations(this.chart, opts);
    if (opts._cacheable) {
      this._cachedAnimations = Object.freeze(animations);
    }
    return animations;
  };
  _proto30.getContext = function getContext() {
    return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
  };
  _proto30.getTitle = function getTitle(context, options) {
    var callbacks = options.callbacks;
    var beforeTitle = invokeCallbackWithFallback(callbacks, 'beforeTitle', this, context);
    var title = invokeCallbackWithFallback(callbacks, 'title', this, context);
    var afterTitle = invokeCallbackWithFallback(callbacks, 'afterTitle', this, context);
    var lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeTitle));
    lines = pushOrConcat(lines, splitNewlines(title));
    lines = pushOrConcat(lines, splitNewlines(afterTitle));
    return lines;
  };
  _proto30.getBeforeBody = function getBeforeBody(tooltipItems, options) {
    return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, 'beforeBody', this, tooltipItems));
  };
  _proto30.getBody = function getBody(tooltipItems, options) {
    var _this32 = this;
    var callbacks = options.callbacks;
    var bodyItems = [];
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(tooltipItems, function (context) {
      var bodyItem = {
        before: [],
        lines: [],
        after: []
      };
      var scoped = overrideCallbacks(callbacks, context);
      pushOrConcat(bodyItem.before, splitNewlines(invokeCallbackWithFallback(scoped, 'beforeLabel', _this32, context)));
      pushOrConcat(bodyItem.lines, invokeCallbackWithFallback(scoped, 'label', _this32, context));
      pushOrConcat(bodyItem.after, splitNewlines(invokeCallbackWithFallback(scoped, 'afterLabel', _this32, context)));
      bodyItems.push(bodyItem);
    });
    return bodyItems;
  };
  _proto30.getAfterBody = function getAfterBody(tooltipItems, options) {
    return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, 'afterBody', this, tooltipItems));
  };
  _proto30.getFooter = function getFooter(tooltipItems, options) {
    var callbacks = options.callbacks;
    var beforeFooter = invokeCallbackWithFallback(callbacks, 'beforeFooter', this, tooltipItems);
    var footer = invokeCallbackWithFallback(callbacks, 'footer', this, tooltipItems);
    var afterFooter = invokeCallbackWithFallback(callbacks, 'afterFooter', this, tooltipItems);
    var lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeFooter));
    lines = pushOrConcat(lines, splitNewlines(footer));
    lines = pushOrConcat(lines, splitNewlines(afterFooter));
    return lines;
  };
  _proto30._createItems = function _createItems(options) {
    var _this33 = this;
    var active = this._active;
    var data = this.chart.data;
    var labelColors = [];
    var labelPointStyles = [];
    var labelTextColors = [];
    var tooltipItems = [];
    var i, len;
    for (i = 0, len = active.length; i < len; ++i) {
      tooltipItems.push(createTooltipItem(this.chart, active[i]));
    }
    if (options.filter) {
      tooltipItems = tooltipItems.filter(function (element, index, array) {
        return options.filter(element, index, array, data);
      });
    }
    if (options.itemSort) {
      tooltipItems = tooltipItems.sort(function (a, b) {
        return options.itemSort(a, b, data);
      });
    }
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(tooltipItems, function (context) {
      var scoped = overrideCallbacks(options.callbacks, context);
      labelColors.push(invokeCallbackWithFallback(scoped, 'labelColor', _this33, context));
      labelPointStyles.push(invokeCallbackWithFallback(scoped, 'labelPointStyle', _this33, context));
      labelTextColors.push(invokeCallbackWithFallback(scoped, 'labelTextColor', _this33, context));
    });
    this.labelColors = labelColors;
    this.labelPointStyles = labelPointStyles;
    this.labelTextColors = labelTextColors;
    this.dataPoints = tooltipItems;
    return tooltipItems;
  };
  _proto30.update = function update(changed, replay) {
    var options = this.options.setContext(this.getContext());
    var active = this._active;
    var properties;
    var tooltipItems = [];
    if (!active.length) {
      if (this.opacity !== 0) {
        properties = {
          opacity: 0
        };
      }
    } else {
      var position = positioners[options.position].call(this, active, this._eventPosition);
      tooltipItems = this._createItems(options);
      this.title = this.getTitle(tooltipItems, options);
      this.beforeBody = this.getBeforeBody(tooltipItems, options);
      this.body = this.getBody(tooltipItems, options);
      this.afterBody = this.getAfterBody(tooltipItems, options);
      this.footer = this.getFooter(tooltipItems, options);
      var size = this._size = getTooltipSize(this, options);
      var positionAndSize = Object.assign({}, position, size);
      var alignment = determineAlignment(this.chart, options, positionAndSize);
      var backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
      this.xAlign = alignment.xAlign;
      this.yAlign = alignment.yAlign;
      properties = {
        opacity: 1,
        x: backgroundPoint.x,
        y: backgroundPoint.y,
        width: size.width,
        height: size.height,
        caretX: position.x,
        caretY: position.y
      };
    }
    this._tooltipItems = tooltipItems;
    this.$context = undefined;
    if (properties) {
      this._resolveAnimations().update(this, properties);
    }
    if (changed && options.external) {
      options.external.call(this, {
        chart: this.chart,
        tooltip: this,
        replay: replay
      });
    }
  };
  _proto30.drawCaret = function drawCaret(tooltipPoint, ctx, size, options) {
    var caretPosition = this.getCaretPosition(tooltipPoint, size, options);
    ctx.lineTo(caretPosition.x1, caretPosition.y1);
    ctx.lineTo(caretPosition.x2, caretPosition.y2);
    ctx.lineTo(caretPosition.x3, caretPosition.y3);
  };
  _proto30.getCaretPosition = function getCaretPosition(tooltipPoint, size, options) {
    var xAlign = this.xAlign,
      yAlign = this.yAlign;
    var caretSize = options.caretSize,
      cornerRadius = options.cornerRadius;
    var _toTRBLCorners2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aw"])(cornerRadius),
      topLeft = _toTRBLCorners2.topLeft,
      topRight = _toTRBLCorners2.topRight,
      bottomLeft = _toTRBLCorners2.bottomLeft,
      bottomRight = _toTRBLCorners2.bottomRight;
    var ptX = tooltipPoint.x,
      ptY = tooltipPoint.y;
    var width = size.width,
      height = size.height;
    var x1, x2, x3, y1, y2, y3;
    if (yAlign === 'center') {
      y2 = ptY + height / 2;
      if (xAlign === 'left') {
        x1 = ptX;
        x2 = x1 - caretSize;
        y1 = y2 + caretSize;
        y3 = y2 - caretSize;
      } else {
        x1 = ptX + width;
        x2 = x1 + caretSize;
        y1 = y2 - caretSize;
        y3 = y2 + caretSize;
      }
      x3 = x1;
    } else {
      if (xAlign === 'left') {
        x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
      } else if (xAlign === 'right') {
        x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
      } else {
        x2 = this.caretX;
      }
      if (yAlign === 'top') {
        y1 = ptY;
        y2 = y1 - caretSize;
        x1 = x2 - caretSize;
        x3 = x2 + caretSize;
      } else {
        y1 = ptY + height;
        y2 = y1 + caretSize;
        x1 = x2 + caretSize;
        x3 = x2 - caretSize;
      }
      y3 = y1;
    }
    return {
      x1: x1,
      x2: x2,
      x3: x3,
      y1: y1,
      y2: y2,
      y3: y3
    };
  };
  _proto30.drawTitle = function drawTitle(pt, ctx, options) {
    var title = this.title;
    var length = title.length;
    var titleFont, titleSpacing, i;
    if (length) {
      var rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["az"])(options.rtl, this.x, this.width);
      pt.x = getAlignedX(this, options.titleAlign, options);
      ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
      ctx.textBaseline = 'middle';
      titleFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(options.titleFont);
      titleSpacing = options.titleSpacing;
      ctx.fillStyle = options.titleColor;
      ctx.font = titleFont.string;
      for (i = 0; i < length; ++i) {
        ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
        pt.y += titleFont.lineHeight + titleSpacing;
        if (i + 1 === length) {
          pt.y += options.titleMarginBottom - titleSpacing;
        }
      }
    }
  };
  _proto30._drawColorBox = function _drawColorBox(ctx, pt, i, rtlHelper, options) {
    var labelColor = this.labelColors[i];
    var labelPointStyle = this.labelPointStyles[i];
    var boxHeight = options.boxHeight,
      boxWidth = options.boxWidth;
    var bodyFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(options.bodyFont);
    var colorX = getAlignedX(this, 'left', options);
    var rtlColorX = rtlHelper.x(colorX);
    var yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
    var colorY = pt.y + yOffSet;
    if (options.usePointStyle) {
      var drawOptions = {
        radius: Math.min(boxWidth, boxHeight) / 2,
        pointStyle: labelPointStyle.pointStyle,
        rotation: labelPointStyle.rotation,
        borderWidth: 1
      };
      var centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
      var centerY = colorY + boxHeight / 2;
      ctx.strokeStyle = options.multiKeyBackground;
      ctx.fillStyle = options.multiKeyBackground;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["at"])(ctx, drawOptions, centerX, centerY);
      ctx.strokeStyle = labelColor.borderColor;
      ctx.fillStyle = labelColor.backgroundColor;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["at"])(ctx, drawOptions, centerX, centerY);
    } else {
      ctx.lineWidth = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["i"])(labelColor.borderWidth) ? Math.max.apply(Math, Object.values(labelColor.borderWidth)) : labelColor.borderWidth || 1;
      ctx.strokeStyle = labelColor.borderColor;
      ctx.setLineDash(labelColor.borderDash || []);
      ctx.lineDashOffset = labelColor.borderDashOffset || 0;
      var outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth);
      var innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - 2);
      var borderRadius = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aw"])(labelColor.borderRadius);
      if (Object.values(borderRadius).some(function (v) {
        return v !== 0;
      })) {
        ctx.beginPath();
        ctx.fillStyle = options.multiKeyBackground;
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["au"])(ctx, {
          x: outerX,
          y: colorY,
          w: boxWidth,
          h: boxHeight,
          radius: borderRadius
        });
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = labelColor.backgroundColor;
        ctx.beginPath();
        Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["au"])(ctx, {
          x: innerX,
          y: colorY + 1,
          w: boxWidth - 2,
          h: boxHeight - 2,
          radius: borderRadius
        });
        ctx.fill();
      } else {
        ctx.fillStyle = options.multiKeyBackground;
        ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
        ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
        ctx.fillStyle = labelColor.backgroundColor;
        ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
      }
    }
    ctx.fillStyle = this.labelTextColors[i];
  };
  _proto30.drawBody = function drawBody(pt, ctx, options) {
    var body = this.body;
    var bodySpacing = options.bodySpacing,
      bodyAlign = options.bodyAlign,
      displayColors = options.displayColors,
      boxHeight = options.boxHeight,
      boxWidth = options.boxWidth,
      boxPadding = options.boxPadding;
    var bodyFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(options.bodyFont);
    var bodyLineHeight = bodyFont.lineHeight;
    var xLinePadding = 0;
    var rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["az"])(options.rtl, this.x, this.width);
    var fillLineOfText = function fillLineOfText(line) {
      ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
      pt.y += bodyLineHeight + bodySpacing;
    };
    var bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
    var bodyItem, textColor, lines, i, j, ilen, jlen;
    ctx.textAlign = bodyAlign;
    ctx.textBaseline = 'middle';
    ctx.font = bodyFont.string;
    pt.x = getAlignedX(this, bodyAlignForCalculation, options);
    ctx.fillStyle = options.bodyColor;
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(this.beforeBody, fillLineOfText);
    xLinePadding = displayColors && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
    for (i = 0, ilen = body.length; i < ilen; ++i) {
      bodyItem = body[i];
      textColor = this.labelTextColors[i];
      ctx.fillStyle = textColor;
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(bodyItem.before, fillLineOfText);
      lines = bodyItem.lines;
      if (displayColors && lines.length) {
        this._drawColorBox(ctx, pt, i, rtlHelper, options);
        bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
      }
      for (j = 0, jlen = lines.length; j < jlen; ++j) {
        fillLineOfText(lines[j]);
        bodyLineHeight = bodyFont.lineHeight;
      }
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(bodyItem.after, fillLineOfText);
    }
    xLinePadding = 0;
    bodyLineHeight = bodyFont.lineHeight;
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["F"])(this.afterBody, fillLineOfText);
    pt.y -= bodySpacing;
  };
  _proto30.drawFooter = function drawFooter(pt, ctx, options) {
    var footer = this.footer;
    var length = footer.length;
    var footerFont, i;
    if (length) {
      var rtlHelper = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["az"])(options.rtl, this.x, this.width);
      pt.x = getAlignedX(this, options.footerAlign, options);
      pt.y += options.footerMarginTop;
      ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
      ctx.textBaseline = 'middle';
      footerFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(options.footerFont);
      ctx.fillStyle = options.footerColor;
      ctx.font = footerFont.string;
      for (i = 0; i < length; ++i) {
        ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
        pt.y += footerFont.lineHeight + options.footerSpacing;
      }
    }
  };
  _proto30.drawBackground = function drawBackground(pt, ctx, tooltipSize, options) {
    var xAlign = this.xAlign,
      yAlign = this.yAlign;
    var x = pt.x,
      y = pt.y;
    var width = tooltipSize.width,
      height = tooltipSize.height;
    var _toTRBLCorners3 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aw"])(options.cornerRadius),
      topLeft = _toTRBLCorners3.topLeft,
      topRight = _toTRBLCorners3.topRight,
      bottomLeft = _toTRBLCorners3.bottomLeft,
      bottomRight = _toTRBLCorners3.bottomRight;
    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.beginPath();
    ctx.moveTo(x + topLeft, y);
    if (yAlign === 'top') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + width - topRight, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
    if (yAlign === 'center' && xAlign === 'right') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + width, y + height - bottomRight);
    ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
    if (yAlign === 'bottom') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + bottomLeft, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
    if (yAlign === 'center' && xAlign === 'left') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x, y + topLeft);
    ctx.quadraticCurveTo(x, y, x + topLeft, y);
    ctx.closePath();
    ctx.fill();
    if (options.borderWidth > 0) {
      ctx.stroke();
    }
  };
  _proto30._updateAnimationTarget = function _updateAnimationTarget(options) {
    var chart = this.chart;
    var anims = this.$animations;
    var animX = anims && anims.x;
    var animY = anims && anims.y;
    if (animX || animY) {
      var position = positioners[options.position].call(this, this._active, this._eventPosition);
      if (!position) {
        return;
      }
      var size = this._size = getTooltipSize(this, options);
      var positionAndSize = Object.assign({}, position, this._size);
      var alignment = determineAlignment(chart, options, positionAndSize);
      var point = getBackgroundPoint(options, positionAndSize, alignment, chart);
      if (animX._to !== point.x || animY._to !== point.y) {
        this.xAlign = alignment.xAlign;
        this.yAlign = alignment.yAlign;
        this.width = size.width;
        this.height = size.height;
        this.caretX = position.x;
        this.caretY = position.y;
        this._resolveAnimations().update(this, point);
      }
    }
  };
  _proto30._willRender = function _willRender() {
    return !!this.opacity;
  };
  _proto30.draw = function draw(ctx) {
    var options = this.options.setContext(this.getContext());
    var opacity = this.opacity;
    if (!opacity) {
      return;
    }
    this._updateAnimationTarget(options);
    var tooltipSize = {
      width: this.width,
      height: this.height
    };
    var pt = {
      x: this.x,
      y: this.y
    };
    opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
    var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(options.padding);
    var hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    if (options.enabled && hasTooltipContent) {
      ctx.save();
      ctx.globalAlpha = opacity;
      this.drawBackground(pt, ctx, tooltipSize, options);
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aA"])(ctx, options.textDirection);
      pt.y += padding.top;
      this.drawTitle(pt, ctx, options);
      this.drawBody(pt, ctx, options);
      this.drawFooter(pt, ctx, options);
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aC"])(ctx, options.textDirection);
      ctx.restore();
    }
  };
  _proto30.getActiveElements = function getActiveElements() {
    return this._active || [];
  };
  _proto30.setActiveElements = function setActiveElements(activeElements, eventPosition) {
    var _this34 = this;
    var lastActive = this._active;
    var active = activeElements.map(function (_ref11) {
      var datasetIndex = _ref11.datasetIndex,
        index = _ref11.index;
      var meta = _this34.chart.getDatasetMeta(datasetIndex);
      if (!meta) {
        throw new Error('Cannot find a dataset at index ' + datasetIndex);
      }
      return {
        datasetIndex: datasetIndex,
        element: meta.data[index],
        index: index
      };
    });
    var changed = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ah"])(lastActive, active);
    var positionChanged = this._positionChanged(active, eventPosition);
    if (changed || positionChanged) {
      this._active = active;
      this._eventPosition = eventPosition;
      this._ignoreReplayEvents = true;
      this.update(true);
    }
  };
  _proto30.handleEvent = function handleEvent(e, replay, inChartArea) {
    if (inChartArea === void 0) {
      inChartArea = true;
    }
    if (replay && this._ignoreReplayEvents) {
      return false;
    }
    this._ignoreReplayEvents = false;
    var options = this.options;
    var lastActive = this._active || [];
    var active = this._getActiveElements(e, lastActive, replay, inChartArea);
    var positionChanged = this._positionChanged(active, e);
    var changed = replay || !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ah"])(active, lastActive) || positionChanged;
    if (changed) {
      this._active = active;
      if (options.enabled || options.external) {
        this._eventPosition = {
          x: e.x,
          y: e.y
        };
        this.update(true, replay);
      }
    }
    return changed;
  };
  _proto30._getActiveElements = function _getActiveElements(e, lastActive, replay, inChartArea) {
    var _this35 = this;
    var options = this.options;
    if (e.type === 'mouseout') {
      return [];
    }
    if (!inChartArea) {
      return lastActive.filter(function (i) {
        return _this35.chart.data.datasets[i.datasetIndex] && _this35.chart.getDatasetMeta(i.datasetIndex).controller.getParsed(i.index) !== undefined;
      });
    }
    var active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
    if (options.reverse) {
      active.reverse();
    }
    return active;
  };
  _proto30._positionChanged = function _positionChanged(active, e) {
    var caretX = this.caretX,
      caretY = this.caretY,
      options = this.options;
    var position = positioners[options.position].call(this, active, e);
    return position !== false && (caretX !== position.x || caretY !== position.y);
  };
  return Tooltip;
}(Element);
Tooltip.positioners = positioners;
var plugin_tooltip = {
  id: 'tooltip',
  _element: Tooltip,
  positioners: positioners,
  afterInit: function afterInit(chart, _args, options) {
    if (options) {
      chart.tooltip = new Tooltip({
        chart: chart,
        options: options
      });
    }
  },
  beforeUpdate: function beforeUpdate(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },
  reset: function reset(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },
  afterDraw: function afterDraw(chart) {
    var tooltip = chart.tooltip;
    if (tooltip && tooltip._willRender()) {
      var args = {
        tooltip: tooltip
      };
      if (chart.notifyPlugins('beforeTooltipDraw', Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, args, {
        cancelable: true
      })) === false) {
        return;
      }
      tooltip.draw(chart.ctx);
      chart.notifyPlugins('afterTooltipDraw', args);
    }
  },
  afterEvent: function afterEvent(chart, args) {
    if (chart.tooltip) {
      var useFinalPosition = args.replay;
      if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) {
        args.changed = true;
      }
    }
  },
  defaults: {
    enabled: true,
    external: null,
    position: 'average',
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleColor: '#fff',
    titleFont: {
      weight: 'bold'
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: 'left',
    bodyColor: '#fff',
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: 'left',
    footerColor: '#fff',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: 'bold'
    },
    footerAlign: 'left',
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: function boxHeight(ctx, opts) {
      return opts.bodyFont.size;
    },
    boxWidth: function boxWidth(ctx, opts) {
      return opts.bodyFont.size;
    },
    multiKeyBackground: '#fff',
    displayColors: true,
    boxPadding: 0,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: 'easeOutQuart'
    },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY']
      },
      opacity: {
        easing: 'linear',
        duration: 200
      }
    },
    callbacks: defaultCallbacks
  },
  defaultRoutes: {
    bodyFont: 'font',
    footerFont: 'font',
    titleFont: 'font'
  },
  descriptors: {
    _scriptable: function _scriptable(name) {
      return name !== 'filter' && name !== 'itemSort' && name !== 'external';
    },
    _indexable: false,
    callbacks: {
      _scriptable: false,
      _indexable: false
    },
    animation: {
      _fallback: false
    },
    animations: {
      _fallback: 'animation'
    }
  },
  additionalOptionScopes: ['interaction']
};
var plugins = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Colors: plugin_colors,
  Decimation: plugin_decimation,
  Filler: index,
  Legend: plugin_legend,
  SubTitle: plugin_subtitle,
  Title: plugin_title,
  Tooltip: plugin_tooltip
});
var addIfString = function addIfString(labels, raw, index, addedLabels) {
  if (typeof raw === 'string') {
    index = labels.push(raw) - 1;
    addedLabels.unshift({
      index: index,
      label: raw
    });
  } else if (isNaN(raw)) {
    index = null;
  }
  return index;
};
function findOrAddLabel(labels, raw, index, addedLabels) {
  var first = labels.indexOf(raw);
  if (first === -1) {
    return addIfString(labels, raw, index, addedLabels);
  }
  var last = labels.lastIndexOf(raw);
  return first !== last ? index : first;
}
var validIndex = function validIndex(index, max) {
  return index === null ? null : Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["S"])(Math.round(index), 0, max);
};
function _getLabelForValue(value) {
  var labels = this.getLabels();
  if (value >= 0 && value < labels.length) {
    return labels[value];
  }
  return value;
}
var CategoryScale = /*#__PURE__*/function (_Scale) {
  function CategoryScale(cfg) {
    var _this36;
    _this36 = _Scale.call(this, cfg) || this;
    _this36._startValue = undefined;
    _this36._valueRange = 0;
    _this36._addedLabels = [];
    return _this36;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CategoryScale, _Scale);
  var _proto31 = CategoryScale.prototype;
  _proto31.init = function init(scaleOptions) {
    var added = this._addedLabels;
    if (added.length) {
      var labels = this.getLabels();
      for (var _iterator25 = _createForOfIteratorHelperLoose(added), _step25; !(_step25 = _iterator25()).done;) {
        var _step25$value = _step25.value,
          _index3 = _step25$value.index,
          label = _step25$value.label;
        if (labels[_index3] === label) {
          labels.splice(_index3, 1);
        }
      }
      this._addedLabels = [];
    }
    _Scale.prototype.init.call(this, scaleOptions);
  };
  _proto31.parse = function parse(raw, index) {
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(raw)) {
      return null;
    }
    var labels = this.getLabels();
    index = isFinite(index) && labels[index] === raw ? index : findOrAddLabel(labels, raw, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(index, raw), this._addedLabels);
    return validIndex(index, labels.length - 1);
  };
  _proto31.determineDataLimits = function determineDataLimits() {
    var _this$getUserBounds2 = this.getUserBounds(),
      minDefined = _this$getUserBounds2.minDefined,
      maxDefined = _this$getUserBounds2.maxDefined;
    var _this$getMinMax = this.getMinMax(true),
      min = _this$getMinMax.min,
      max = _this$getMinMax.max;
    if (this.options.bounds === 'ticks') {
      if (!minDefined) {
        min = 0;
      }
      if (!maxDefined) {
        max = this.getLabels().length - 1;
      }
    }
    this.min = min;
    this.max = max;
  };
  _proto31.buildTicks = function buildTicks() {
    var min = this.min;
    var max = this.max;
    var offset = this.options.offset;
    var ticks = [];
    var labels = this.getLabels();
    labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
    this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
    this._startValue = this.min - (offset ? 0.5 : 0);
    for (var value = min; value <= max; value++) {
      ticks.push({
        value: value
      });
    }
    return ticks;
  };
  _proto31.getLabelForValue = function getLabelForValue(value) {
    return _getLabelForValue.call(this, value);
  };
  _proto31.configure = function configure() {
    _Scale.prototype.configure.call(this);
    if (!this.isHorizontal()) {
      this._reversePixels = !this._reversePixels;
    }
  };
  _proto31.getPixelForValue = function getPixelForValue(value) {
    if (typeof value !== 'number') {
      value = this.parse(value);
    }
    return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
  };
  _proto31.getPixelForTick = function getPixelForTick(index) {
    var ticks = this.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return this.getPixelForValue(ticks[index].value);
  };
  _proto31.getValueForPixel = function getValueForPixel(pixel) {
    return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
  };
  _proto31.getBasePixel = function getBasePixel() {
    return this.bottom;
  };
  return CategoryScale;
}(Scale);
CategoryScale.id = 'category';
CategoryScale.defaults = {
  ticks: {
    callback: _getLabelForValue
  }
};
function generateTicks$1(generationOptions, dataRange) {
  var ticks = [];
  var MIN_SPACING = 1e-14;
  var bounds = generationOptions.bounds,
    step = generationOptions.step,
    min = generationOptions.min,
    max = generationOptions.max,
    precision = generationOptions.precision,
    count = generationOptions.count,
    maxTicks = generationOptions.maxTicks,
    maxDigits = generationOptions.maxDigits,
    includeBounds = generationOptions.includeBounds;
  var unit = step || 1;
  var maxSpaces = maxTicks - 1;
  var rmin = dataRange.min,
    rmax = dataRange.max;
  var minDefined = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(min);
  var maxDefined = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(max);
  var countDefined = !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(count);
  var minSpacing = (rmax - rmin) / (maxDigits + 1);
  var spacing = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aH"])((rmax - rmin) / maxSpaces / unit) * unit;
  var factor, niceMin, niceMax, numSpaces;
  if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
    return [{
      value: rmin
    }, {
      value: rmax
    }];
  }
  numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
  if (numSpaces > maxSpaces) {
    spacing = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aH"])(numSpaces * spacing / maxSpaces / unit) * unit;
  }
  if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(precision)) {
    factor = Math.pow(10, precision);
    spacing = Math.ceil(spacing * factor) / factor;
  }
  if (bounds === 'ticks') {
    niceMin = Math.floor(rmin / spacing) * spacing;
    niceMax = Math.ceil(rmax / spacing) * spacing;
  } else {
    niceMin = rmin;
    niceMax = rmax;
  }
  if (minDefined && maxDefined && step && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aI"])((max - min) / step, spacing / 1000)) {
    numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
    spacing = (max - min) / numSpaces;
    niceMin = min;
    niceMax = max;
  } else if (countDefined) {
    niceMin = minDefined ? min : niceMin;
    niceMax = maxDefined ? max : niceMax;
    numSpaces = count - 1;
    spacing = (niceMax - niceMin) / numSpaces;
  } else {
    numSpaces = (niceMax - niceMin) / spacing;
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aJ"])(numSpaces, Math.round(numSpaces), spacing / 1000)) {
      numSpaces = Math.round(numSpaces);
    } else {
      numSpaces = Math.ceil(numSpaces);
    }
  }
  var decimalPlaces = Math.max(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aK"])(spacing), Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aK"])(niceMin));
  factor = Math.pow(10, Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(precision) ? decimalPlaces : precision);
  niceMin = Math.round(niceMin * factor) / factor;
  niceMax = Math.round(niceMax * factor) / factor;
  var j = 0;
  if (minDefined) {
    if (includeBounds && niceMin !== min) {
      ticks.push({
        value: min
      });
      if (niceMin < min) {
        j++;
      }
      if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aJ"])(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
        j++;
      }
    } else if (niceMin < min) {
      j++;
    }
  }
  for (; j < numSpaces; ++j) {
    var tickValue = Math.round((niceMin + j * spacing) * factor) / factor;
    if (maxDefined && tickValue > max) {
      break;
    }
    ticks.push({
      value: tickValue
    });
  }
  if (maxDefined && includeBounds && niceMax !== max) {
    if (ticks.length && Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aJ"])(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
      ticks[ticks.length - 1].value = max;
    } else {
      ticks.push({
        value: max
      });
    }
  } else if (!maxDefined || niceMax === max) {
    ticks.push({
      value: niceMax
    });
  }
  return ticks;
}
function relativeLabelSize(value, minSpacing, _ref12) {
  var horizontal = _ref12.horizontal,
    minRotation = _ref12.minRotation;
  var rad = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["t"])(minRotation);
  var ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
  var length = 0.75 * minSpacing * ('' + value).length;
  return Math.min(minSpacing / ratio, length);
}
var LinearScaleBase = /*#__PURE__*/function (_Scale2) {
  function LinearScaleBase(cfg) {
    var _this37;
    _this37 = _Scale2.call(this, cfg) || this;
    _this37.start = undefined;
    _this37.end = undefined;
    _this37._startValue = undefined;
    _this37._endValue = undefined;
    _this37._valueRange = 0;
    return _this37;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(LinearScaleBase, _Scale2);
  var _proto32 = LinearScaleBase.prototype;
  _proto32.parse = function parse(raw, index) {
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(raw)) {
      return null;
    }
    if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) {
      return null;
    }
    return +raw;
  };
  _proto32.handleTickRangeOptions = function handleTickRangeOptions() {
    var beginAtZero = this.options.beginAtZero;
    var _this$getUserBounds3 = this.getUserBounds(),
      minDefined = _this$getUserBounds3.minDefined,
      maxDefined = _this$getUserBounds3.maxDefined;
    var min = this.min,
      max = this.max;
    var setMin = function setMin(v) {
      return min = minDefined ? min : v;
    };
    var setMax = function setMax(v) {
      return max = maxDefined ? max : v;
    };
    if (beginAtZero) {
      var minSign = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["s"])(min);
      var maxSign = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["s"])(max);
      if (minSign < 0 && maxSign < 0) {
        setMax(0);
      } else if (minSign > 0 && maxSign > 0) {
        setMin(0);
      }
    }
    if (min === max) {
      var offset = max === 0 ? 1 : Math.abs(max * 0.05);
      setMax(max + offset);
      if (!beginAtZero) {
        setMin(min - offset);
      }
    }
    this.min = min;
    this.max = max;
  };
  _proto32.getTickLimit = function getTickLimit() {
    var tickOpts = this.options.ticks;
    var maxTicksLimit = tickOpts.maxTicksLimit,
      stepSize = tickOpts.stepSize;
    var maxTicks;
    if (stepSize) {
      maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
      if (maxTicks > 1000) {
        console.warn("scales." + this.id + ".ticks.stepSize: " + stepSize + " would result generating up to " + maxTicks + " ticks. Limiting to 1000.");
        maxTicks = 1000;
      }
    } else {
      maxTicks = this.computeTickLimit();
      maxTicksLimit = maxTicksLimit || 11;
    }
    if (maxTicksLimit) {
      maxTicks = Math.min(maxTicksLimit, maxTicks);
    }
    return maxTicks;
  };
  _proto32.computeTickLimit = function computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  };
  _proto32.buildTicks = function buildTicks() {
    var opts = this.options;
    var tickOpts = opts.ticks;
    var maxTicks = this.getTickLimit();
    maxTicks = Math.max(2, maxTicks);
    var numericGeneratorOptions = {
      maxTicks: maxTicks,
      bounds: opts.bounds,
      min: opts.min,
      max: opts.max,
      precision: tickOpts.precision,
      step: tickOpts.stepSize,
      count: tickOpts.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: tickOpts.minRotation || 0,
      includeBounds: tickOpts.includeBounds !== false
    };
    var dataRange = this._range || this;
    var ticks = generateTicks$1(numericGeneratorOptions, dataRange);
    if (opts.bounds === 'ticks') {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aG"])(ticks, this, 'value');
    }
    if (opts.reverse) {
      ticks.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return ticks;
  };
  _proto32.configure = function configure() {
    var ticks = this.ticks;
    var start = this.min;
    var end = this.max;
    _Scale2.prototype.configure.call(this);
    if (this.options.offset && ticks.length) {
      var offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
      start -= offset;
      end += offset;
    }
    this._startValue = start;
    this._endValue = end;
    this._valueRange = end - start;
  };
  _proto32.getLabelForValue = function getLabelForValue(value) {
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["o"])(value, this.chart.options.locale, this.options.ticks.format);
  };
  return LinearScaleBase;
}(Scale);
var LinearScale = /*#__PURE__*/function (_LinearScaleBase) {
  function LinearScale() {
    return _LinearScaleBase.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(LinearScale, _LinearScaleBase);
  var _proto33 = LinearScale.prototype;
  _proto33.determineDataLimits = function determineDataLimits() {
    var _this$getMinMax2 = this.getMinMax(true),
      min = _this$getMinMax2.min,
      max = _this$getMinMax2.max;
    this.min = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(min) ? min : 0;
    this.max = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(max) ? max : 1;
    this.handleTickRangeOptions();
  };
  _proto33.computeTickLimit = function computeTickLimit() {
    var horizontal = this.isHorizontal();
    var length = horizontal ? this.width : this.height;
    var minRotation = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["t"])(this.options.ticks.minRotation);
    var ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
    var tickFont = this._resolveTickFontOptions(0);
    return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
  };
  _proto33.getPixelForValue = function getPixelForValue(value) {
    return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
  };
  _proto33.getValueForPixel = function getValueForPixel(pixel) {
    return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
  };
  return LinearScale;
}(LinearScaleBase);
LinearScale.id = 'linear';
LinearScale.defaults = {
  ticks: {
    callback: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aL"].formatters.numeric
  }
};
var log10Floor = function log10Floor(v) {
  return Math.floor(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aM"])(v));
};
var changeExponent = function changeExponent(v, m) {
  return Math.pow(10, log10Floor(v) + m);
};
function isMajor(tickVal) {
  var remain = tickVal / Math.pow(10, log10Floor(tickVal));
  return remain === 1;
}
function steps(min, max, rangeExp) {
  var rangeStep = Math.pow(10, rangeExp);
  var start = Math.floor(min / rangeStep);
  var end = Math.ceil(max / rangeStep);
  return end - start;
}
function startExp(min, max) {
  var range = max - min;
  var rangeExp = log10Floor(range);
  while (steps(min, max, rangeExp) > 10) {
    rangeExp++;
  }
  while (steps(min, max, rangeExp) < 10) {
    rangeExp--;
  }
  return Math.min(rangeExp, log10Floor(min));
}
function generateTicks(generationOptions, _ref13) {
  var min = _ref13.min,
    max = _ref13.max;
  min = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["O"])(generationOptions.min, min);
  var ticks = [];
  var minExp = log10Floor(min);
  var exp = startExp(min, max);
  var precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
  var stepSize = Math.pow(10, exp);
  var base = minExp > exp ? Math.pow(10, minExp) : 0;
  var start = Math.round((min - base) * precision) / precision;
  var offset = Math.floor((min - base) / stepSize / 10) * stepSize * 10;
  var significand = Math.floor((start - offset) / Math.pow(10, exp));
  var value = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["O"])(generationOptions.min, Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision);
  while (value < max) {
    ticks.push({
      value: value,
      major: isMajor(value),
      significand: significand
    });
    if (significand >= 10) {
      significand = significand < 15 ? 15 : 20;
    } else {
      significand++;
    }
    if (significand >= 20) {
      exp++;
      significand = 2;
      precision = exp >= 0 ? 1 : precision;
    }
    value = Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision;
  }
  var lastTick = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["O"])(generationOptions.max, value);
  ticks.push({
    value: lastTick,
    major: isMajor(lastTick),
    significand: significand
  });
  return ticks;
}
var LogarithmicScale = /*#__PURE__*/function (_Scale3) {
  function LogarithmicScale(cfg) {
    var _this38;
    _this38 = _Scale3.call(this, cfg) || this;
    _this38.start = undefined;
    _this38.end = undefined;
    _this38._startValue = undefined;
    _this38._valueRange = 0;
    return _this38;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(LogarithmicScale, _Scale3);
  var _proto34 = LogarithmicScale.prototype;
  _proto34.parse = function parse(raw, index) {
    var value = LinearScaleBase.prototype.parse.apply(this, [raw, index]);
    if (value === 0) {
      this._zero = true;
      return undefined;
    }
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(value) && value > 0 ? value : null;
  };
  _proto34.determineDataLimits = function determineDataLimits() {
    var _this$getMinMax3 = this.getMinMax(true),
      min = _this$getMinMax3.min,
      max = _this$getMinMax3.max;
    this.min = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(min) ? Math.max(0, min) : null;
    this.max = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(max) ? Math.max(0, max) : null;
    if (this.options.beginAtZero) {
      this._zero = true;
    }
    if (this._zero && this.min !== this._suggestedMin && !Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this._userMin)) {
      this.min = min === changeExponent(this.min, 0) ? changeExponent(this.min, -1) : changeExponent(this.min, 0);
    }
    this.handleTickRangeOptions();
  };
  _proto34.handleTickRangeOptions = function handleTickRangeOptions() {
    var _this$getUserBounds4 = this.getUserBounds(),
      minDefined = _this$getUserBounds4.minDefined,
      maxDefined = _this$getUserBounds4.maxDefined;
    var min = this.min;
    var max = this.max;
    var setMin = function setMin(v) {
      return min = minDefined ? min : v;
    };
    var setMax = function setMax(v) {
      return max = maxDefined ? max : v;
    };
    if (min === max) {
      if (min <= 0) {
        setMin(1);
        setMax(10);
      } else {
        setMin(changeExponent(min, -1));
        setMax(changeExponent(max, +1));
      }
    }
    if (min <= 0) {
      setMin(changeExponent(max, -1));
    }
    if (max <= 0) {
      setMax(changeExponent(min, +1));
    }
    this.min = min;
    this.max = max;
  };
  _proto34.buildTicks = function buildTicks() {
    var opts = this.options;
    var generationOptions = {
      min: this._userMin,
      max: this._userMax
    };
    var ticks = generateTicks(generationOptions, this);
    if (opts.bounds === 'ticks') {
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aG"])(ticks, this, 'value');
    }
    if (opts.reverse) {
      ticks.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return ticks;
  };
  _proto34.getLabelForValue = function getLabelForValue(value) {
    return value === undefined ? '0' : Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["o"])(value, this.chart.options.locale, this.options.ticks.format);
  };
  _proto34.configure = function configure() {
    var start = this.min;
    _Scale3.prototype.configure.call(this);
    this._startValue = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aM"])(start);
    this._valueRange = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aM"])(this.max) - Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aM"])(start);
  };
  _proto34.getPixelForValue = function getPixelForValue(value) {
    if (value === undefined || value === 0) {
      value = this.min;
    }
    if (value === null || isNaN(value)) {
      return NaN;
    }
    return this.getPixelForDecimal(value === this.min ? 0 : (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aM"])(value) - this._startValue) / this._valueRange);
  };
  _proto34.getValueForPixel = function getValueForPixel(pixel) {
    var decimal = this.getDecimalForPixel(pixel);
    return Math.pow(10, this._startValue + decimal * this._valueRange);
  };
  return LogarithmicScale;
}(Scale);
LogarithmicScale.id = 'logarithmic';
LogarithmicScale.defaults = {
  ticks: {
    callback: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aL"].formatters.logarithmic,
    major: {
      enabled: true
    }
  }
};
function getTickBackdropHeight(opts) {
  var tickOpts = opts.ticks;
  if (tickOpts.display && opts.display) {
    var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(tickOpts.backdropPadding);
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(tickOpts.font && tickOpts.font.size, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["d"].font.size) + padding.height;
  }
  return 0;
}
function measureLabelSize(ctx, font, label) {
  label = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["b"])(label) ? label : [label];
  return {
    w: Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aN"])(ctx, font.string, label),
    h: label.length * font.lineHeight
  };
}
function determineLimits(angle, pos, size, min, max) {
  if (angle === min || angle === max) {
    return {
      start: pos - size / 2,
      end: pos + size / 2
    };
  } else if (angle < min || angle > max) {
    return {
      start: pos - size,
      end: pos
    };
  }
  return {
    start: pos,
    end: pos + size
  };
}
function fitWithPointLabels(scale) {
  var orig = {
    l: scale.left + scale._padding.left,
    r: scale.right - scale._padding.right,
    t: scale.top + scale._padding.top,
    b: scale.bottom - scale._padding.bottom
  };
  var limits = Object.assign({}, orig);
  var labelSizes = [];
  var padding = [];
  var valueCount = scale._pointLabels.length;
  var pointLabelOpts = scale.options.pointLabels;
  var additionalAngle = pointLabelOpts.centerPointLabels ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["P"] / valueCount : 0;
  for (var i = 0; i < valueCount; i++) {
    var opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
    padding[i] = opts.padding;
    var pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
    var plFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(opts.font);
    var textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
    labelSizes[i] = textSize;
    var angleRadians = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ay"])(scale.getIndexAngle(i) + additionalAngle);
    var angle = Math.round(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["U"])(angleRadians));
    var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
    var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
    updateLimits(limits, orig, angleRadians, hLimits, vLimits);
  }
  scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
  scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
}
function updateLimits(limits, orig, angle, hLimits, vLimits) {
  var sin = Math.abs(Math.sin(angle));
  var cos = Math.abs(Math.cos(angle));
  var x = 0;
  var y = 0;
  if (hLimits.start < orig.l) {
    x = (orig.l - hLimits.start) / sin;
    limits.l = Math.min(limits.l, orig.l - x);
  } else if (hLimits.end > orig.r) {
    x = (hLimits.end - orig.r) / sin;
    limits.r = Math.max(limits.r, orig.r + x);
  }
  if (vLimits.start < orig.t) {
    y = (orig.t - vLimits.start) / cos;
    limits.t = Math.min(limits.t, orig.t - y);
  } else if (vLimits.end > orig.b) {
    y = (vLimits.end - orig.b) / cos;
    limits.b = Math.max(limits.b, orig.b + y);
  }
}
function createPointLabelItem(scale, index, itemOpts) {
  var outerDistance = scale.drawingArea;
  var extra = itemOpts.extra,
    additionalAngle = itemOpts.additionalAngle,
    padding = itemOpts.padding,
    size = itemOpts.size;
  var pointLabelPosition = scale.getPointPosition(index, outerDistance + extra + padding, additionalAngle);
  var angle = Math.round(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["U"])(Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ay"])(pointLabelPosition.angle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["H"])));
  var y = yForAngle(pointLabelPosition.y, size.h, angle);
  var textAlign = getTextAlignForAngle(angle);
  var left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
  return {
    visible: true,
    x: pointLabelPosition.x,
    y: y,
    textAlign: textAlign,
    left: left,
    top: y,
    right: left + size.w,
    bottom: y + size.h
  };
}
function isNotOverlapped(item, area) {
  if (!area) {
    return true;
  }
  var left = item.left,
    top = item.top,
    right = item.right,
    bottom = item.bottom;
  var apexesInArea = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["C"])({
    x: left,
    y: top
  }, area) || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["C"])({
    x: left,
    y: bottom
  }, area) || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["C"])({
    x: right,
    y: top
  }, area) || Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["C"])({
    x: right,
    y: bottom
  }, area);
  return !apexesInArea;
}
function buildPointLabelItems(scale, labelSizes, padding) {
  var items = [];
  var valueCount = scale._pointLabels.length;
  var opts = scale.options;
  var _opts$pointLabels = opts.pointLabels,
    centerPointLabels = _opts$pointLabels.centerPointLabels,
    display = _opts$pointLabels.display;
  var itemOpts = {
    extra: getTickBackdropHeight(opts) / 2,
    additionalAngle: centerPointLabels ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["P"] / valueCount : 0
  };
  var area;
  for (var i = 0; i < valueCount; i++) {
    itemOpts.padding = padding[i];
    itemOpts.size = labelSizes[i];
    var item = createPointLabelItem(scale, i, itemOpts);
    items.push(item);
    if (display === 'auto') {
      item.visible = isNotOverlapped(item, area);
      if (item.visible) {
        area = item;
      }
    }
  }
  return items;
}
function getTextAlignForAngle(angle) {
  if (angle === 0 || angle === 180) {
    return 'center';
  } else if (angle < 180) {
    return 'left';
  }
  return 'right';
}
function leftForTextAlign(x, w, align) {
  if (align === 'right') {
    x -= w;
  } else if (align === 'center') {
    x -= w / 2;
  }
  return x;
}
function yForAngle(y, h, angle) {
  if (angle === 90 || angle === 270) {
    y -= h / 2;
  } else if (angle > 270 || angle < 90) {
    y -= h;
  }
  return y;
}
function drawPointLabelBox(ctx, opts, item) {
  var left = item.left,
    top = item.top,
    right = item.right,
    bottom = item.bottom;
  var backdropColor = opts.backdropColor;
  if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(backdropColor)) {
    var borderRadius = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aw"])(opts.borderRadius);
    var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(opts.backdropPadding);
    ctx.fillStyle = backdropColor;
    var backdropLeft = left - padding.left;
    var backdropTop = top - padding.top;
    var backdropWidth = right - left + padding.width;
    var backdropHeight = bottom - top + padding.height;
    if (Object.values(borderRadius).some(function (v) {
      return v !== 0;
    })) {
      ctx.beginPath();
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["au"])(ctx, {
        x: backdropLeft,
        y: backdropTop,
        w: backdropWidth,
        h: backdropHeight,
        radius: borderRadius
      });
      ctx.fill();
    } else {
      ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
    }
  }
}
function drawPointLabels(scale, labelCount) {
  var ctx = scale.ctx,
    pointLabels = scale.options.pointLabels;
  for (var i = labelCount - 1; i >= 0; i--) {
    var item = scale._pointLabelItems[i];
    if (!item.visible) {
      continue;
    }
    var optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
    drawPointLabelBox(ctx, optsAtIndex, item);
    var plFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(optsAtIndex.font);
    var x = item.x,
      y = item.y,
      textAlign = item.textAlign;
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Z"])(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
      color: optsAtIndex.color,
      textAlign: textAlign,
      textBaseline: 'middle'
    });
  }
}
function pathRadiusLine(scale, radius, circular, labelCount) {
  var ctx = scale.ctx;
  if (circular) {
    ctx.arc(scale.xCenter, scale.yCenter, radius, 0, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["T"]);
  } else {
    var pointPosition = scale.getPointPosition(0, radius);
    ctx.moveTo(pointPosition.x, pointPosition.y);
    for (var i = 1; i < labelCount; i++) {
      pointPosition = scale.getPointPosition(i, radius);
      ctx.lineTo(pointPosition.x, pointPosition.y);
    }
  }
}
function drawRadiusLine(scale, gridLineOpts, radius, labelCount, borderOpts) {
  var ctx = scale.ctx;
  var circular = gridLineOpts.circular;
  var color = gridLineOpts.color,
    lineWidth = gridLineOpts.lineWidth;
  if (!circular && !labelCount || !color || !lineWidth || radius < 0) {
    return;
  }
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.setLineDash(borderOpts.dash || []);
  ctx.lineDashOffset = borderOpts.dashOffset;
  ctx.beginPath();
  pathRadiusLine(scale, radius, circular, labelCount);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}
function createPointLabelContext(parent, index, label) {
  return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["j"])(parent, {
    label: label,
    index: index,
    type: 'pointLabel'
  });
}
var RadialLinearScale = /*#__PURE__*/function (_LinearScaleBase2) {
  function RadialLinearScale(cfg) {
    var _this39;
    _this39 = _LinearScaleBase2.call(this, cfg) || this;
    _this39.xCenter = undefined;
    _this39.yCenter = undefined;
    _this39.drawingArea = undefined;
    _this39._pointLabels = [];
    _this39._pointLabelItems = [];
    return _this39;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(RadialLinearScale, _LinearScaleBase2);
  var _proto35 = RadialLinearScale.prototype;
  _proto35.setDimensions = function setDimensions() {
    var padding = this._padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(getTickBackdropHeight(this.options) / 2);
    var w = this.width = this.maxWidth - padding.width;
    var h = this.height = this.maxHeight - padding.height;
    this.xCenter = Math.floor(this.left + w / 2 + padding.left);
    this.yCenter = Math.floor(this.top + h / 2 + padding.top);
    this.drawingArea = Math.floor(Math.min(w, h) / 2);
  };
  _proto35.determineDataLimits = function determineDataLimits() {
    var _this$getMinMax4 = this.getMinMax(false),
      min = _this$getMinMax4.min,
      max = _this$getMinMax4.max;
    this.min = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(min) && !isNaN(min) ? min : 0;
    this.max = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(max) && !isNaN(max) ? max : 0;
    this.handleTickRangeOptions();
  };
  _proto35.computeTickLimit = function computeTickLimit() {
    return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
  };
  _proto35.generateTickLabels = function generateTickLabels(ticks) {
    var _this40 = this;
    LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
    this._pointLabels = this.getLabels().map(function (value, index) {
      var label = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(_this40.options.pointLabels.callback, [value, index], _this40);
      return label || label === 0 ? label : '';
    }).filter(function (v, i) {
      return _this40.chart.getDataVisibility(i);
    });
  };
  _proto35.fit = function fit() {
    var opts = this.options;
    if (opts.display && opts.pointLabels.display) {
      fitWithPointLabels(this);
    } else {
      this.setCenterPoint(0, 0, 0, 0);
    }
  };
  _proto35.setCenterPoint = function setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
    this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
    this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
    this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
  };
  _proto35.getIndexAngle = function getIndexAngle(index) {
    var angleMultiplier = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["T"] / (this._pointLabels.length || 1);
    var startAngle = this.options.startAngle || 0;
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ay"])(index * angleMultiplier + Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["t"])(startAngle));
  };
  _proto35.getDistanceFromCenterForValue = function getDistanceFromCenterForValue(value) {
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(value)) {
      return NaN;
    }
    var scalingFactor = this.drawingArea / (this.max - this.min);
    if (this.options.reverse) {
      return (this.max - value) * scalingFactor;
    }
    return (value - this.min) * scalingFactor;
  };
  _proto35.getValueForDistanceFromCenter = function getValueForDistanceFromCenter(distance) {
    if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(distance)) {
      return NaN;
    }
    var scaledDistance = distance / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
  };
  _proto35.getPointLabelContext = function getPointLabelContext(index) {
    var pointLabels = this._pointLabels || [];
    if (index >= 0 && index < pointLabels.length) {
      var pointLabel = pointLabels[index];
      return createPointLabelContext(this.getContext(), index, pointLabel);
    }
  };
  _proto35.getPointPosition = function getPointPosition(index, distanceFromCenter, additionalAngle) {
    if (additionalAngle === void 0) {
      additionalAngle = 0;
    }
    var angle = this.getIndexAngle(index) - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["H"] + additionalAngle;
    return {
      x: Math.cos(angle) * distanceFromCenter + this.xCenter,
      y: Math.sin(angle) * distanceFromCenter + this.yCenter,
      angle: angle
    };
  };
  _proto35.getPointPositionForValue = function getPointPositionForValue(index, value) {
    return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
  };
  _proto35.getBasePosition = function getBasePosition(index) {
    return this.getPointPositionForValue(index || 0, this.getBaseValue());
  };
  _proto35.getPointLabelPosition = function getPointLabelPosition(index) {
    var _this$_pointLabelItem = this._pointLabelItems[index],
      left = _this$_pointLabelItem.left,
      top = _this$_pointLabelItem.top,
      right = _this$_pointLabelItem.right,
      bottom = _this$_pointLabelItem.bottom;
    return {
      left: left,
      top: top,
      right: right,
      bottom: bottom
    };
  };
  _proto35.drawBackground = function drawBackground() {
    var _this$options16 = this.options,
      backgroundColor = _this$options16.backgroundColor,
      circular = _this$options16.grid.circular;
    if (backgroundColor) {
      var ctx = this.ctx;
      ctx.save();
      ctx.beginPath();
      pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
      ctx.closePath();
      ctx.fillStyle = backgroundColor;
      ctx.fill();
      ctx.restore();
    }
  };
  _proto35.drawGrid = function drawGrid() {
    var _this41 = this;
    var ctx = this.ctx;
    var opts = this.options;
    var angleLines = opts.angleLines,
      grid = opts.grid,
      border = opts.border;
    var labelCount = this._pointLabels.length;
    var i, offset, position;
    if (opts.pointLabels.display) {
      drawPointLabels(this, labelCount);
    }
    if (grid.display) {
      this.ticks.forEach(function (tick, index) {
        if (index !== 0 || index === 0 && _this41.min < 0) {
          offset = _this41.getDistanceFromCenterForValue(tick.value);
          var context = _this41.getContext(index);
          var optsAtIndex = grid.setContext(context);
          var optsAtIndexBorder = border.setContext(context);
          drawRadiusLine(_this41, optsAtIndex, offset, labelCount, optsAtIndexBorder);
        }
      });
    }
    if (angleLines.display) {
      ctx.save();
      for (i = labelCount - 1; i >= 0; i--) {
        var optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
        var color = optsAtIndex.color,
          lineWidth = optsAtIndex.lineWidth;
        if (!lineWidth || !color) {
          continue;
        }
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.setLineDash(optsAtIndex.borderDash);
        ctx.lineDashOffset = optsAtIndex.borderDashOffset;
        offset = this.getDistanceFromCenterForValue(opts.reverse ? this.min : this.max);
        position = this.getPointPosition(i, offset);
        ctx.beginPath();
        ctx.moveTo(this.xCenter, this.yCenter);
        ctx.lineTo(position.x, position.y);
        ctx.stroke();
      }
      ctx.restore();
    }
  };
  _proto35.drawBorder = function drawBorder() {};
  _proto35.drawLabels = function drawLabels() {
    var _this42 = this;
    var ctx = this.ctx;
    var opts = this.options;
    var tickOpts = opts.ticks;
    if (!tickOpts.display) {
      return;
    }
    var startAngle = this.getIndexAngle(0);
    var offset, width;
    ctx.save();
    ctx.translate(this.xCenter, this.yCenter);
    ctx.rotate(startAngle);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    this.ticks.forEach(function (tick, index) {
      if (index === 0 && _this42.min >= 0 && !opts.reverse) {
        return;
      }
      var optsAtIndex = tickOpts.setContext(_this42.getContext(index));
      var tickFont = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["a0"])(optsAtIndex.font);
      offset = _this42.getDistanceFromCenterForValue(_this42.ticks[index].value);
      if (optsAtIndex.showLabelBackdrop) {
        ctx.font = tickFont.string;
        width = ctx.measureText(tick.label).width;
        ctx.fillStyle = optsAtIndex.backdropColor;
        var padding = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["E"])(optsAtIndex.backdropPadding);
        ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
      }
      Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Z"])(ctx, tick.label, 0, -offset, tickFont, {
        color: optsAtIndex.color,
        strokeColor: optsAtIndex.textStrokeColor,
        strokeWidth: optsAtIndex.textStrokeWidth
      });
    });
    ctx.restore();
  };
  _proto35.drawTitle = function drawTitle() {};
  return RadialLinearScale;
}(LinearScaleBase);
RadialLinearScale.id = 'radialLinear';
RadialLinearScale.defaults = {
  display: true,
  animate: true,
  position: 'chartArea',
  angleLines: {
    display: true,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0.0
  },
  grid: {
    circular: false
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: true,
    callback: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aL"].formatters.numeric
  },
  pointLabels: {
    backdropColor: undefined,
    backdropPadding: 2,
    display: true,
    font: {
      size: 10
    },
    callback: function callback(label) {
      return label;
    },
    padding: 5,
    centerPointLabels: false
  }
};
RadialLinearScale.defaultRoutes = {
  'angleLines.color': 'borderColor',
  'pointLabels.color': 'color',
  'ticks.color': 'color'
};
RadialLinearScale.descriptors = {
  angleLines: {
    _fallback: 'grid'
  }
};
var INTERVALS = {
  millisecond: {
    common: true,
    size: 1,
    steps: 1000
  },
  second: {
    common: true,
    size: 1000,
    steps: 60
  },
  minute: {
    common: true,
    size: 60000,
    steps: 60
  },
  hour: {
    common: true,
    size: 3600000,
    steps: 24
  },
  day: {
    common: true,
    size: 86400000,
    steps: 30
  },
  week: {
    common: false,
    size: 604800000,
    steps: 4
  },
  month: {
    common: true,
    size: 2.628e9,
    steps: 12
  },
  quarter: {
    common: false,
    size: 7.884e9,
    steps: 4
  },
  year: {
    common: true,
    size: 3.154e10
  }
};
var UNITS = /* #__PURE__ */Object.keys(INTERVALS);
function sorter(a, b) {
  return a - b;
}
function _parse(scale, input) {
  if (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["k"])(input)) {
    return null;
  }
  var adapter = scale._adapter;
  var _scale$_parseOpts = scale._parseOpts,
    parser = _scale$_parseOpts.parser,
    round = _scale$_parseOpts.round,
    isoWeekday = _scale$_parseOpts.isoWeekday;
  var value = input;
  if (typeof parser === 'function') {
    value = parser(value);
  }
  if (!Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(value)) {
    value = typeof parser === 'string' ? adapter.parse(value, parser) : adapter.parse(value);
  }
  if (value === null) {
    return null;
  }
  if (round) {
    value = round === 'week' && (Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["x"])(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, 'isoWeek', isoWeekday) : adapter.startOf(value, round);
  }
  return +value;
}
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
  var ilen = UNITS.length;
  for (var i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
    var interval = INTERVALS[UNITS[i]];
    var factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
    if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
      return UNITS[i];
    }
  }
  return UNITS[ilen - 1];
}
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
  for (var i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
    var unit = UNITS[i];
    if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
      return unit;
    }
  }
  return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}
function determineMajorUnit(unit) {
  for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
    if (INTERVALS[UNITS[i]].common) {
      return UNITS[i];
    }
  }
}
function addTick(ticks, time, timestamps) {
  if (!timestamps) {
    ticks[time] = true;
  } else if (timestamps.length) {
    var _lookup2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aP"])(timestamps, time),
      lo = _lookup2.lo,
      hi = _lookup2.hi;
    var timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
    ticks[timestamp] = true;
  }
}
function setMajorTicks(scale, ticks, map, majorUnit) {
  var adapter = scale._adapter;
  var first = +adapter.startOf(ticks[0].value, majorUnit);
  var last = ticks[ticks.length - 1].value;
  var major, index;
  for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
    index = map[major];
    if (index >= 0) {
      ticks[index].major = true;
    }
  }
  return ticks;
}
function ticksFromTimestamps(scale, values, majorUnit) {
  var ticks = [];
  var map = {};
  var ilen = values.length;
  var i, value;
  for (i = 0; i < ilen; ++i) {
    value = values[i];
    map[value] = i;
    ticks.push({
      value: value,
      major: false
    });
  }
  return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}
var TimeScale = /*#__PURE__*/function (_Scale4) {
  function TimeScale(props) {
    var _this43;
    _this43 = _Scale4.call(this, props) || this;
    _this43._cache = {
      data: [],
      labels: [],
      all: []
    };
    _this43._unit = 'day';
    _this43._majorUnit = undefined;
    _this43._offsets = {};
    _this43._normalized = false;
    _this43._parseOpts = undefined;
    return _this43;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(TimeScale, _Scale4);
  var _proto36 = TimeScale.prototype;
  _proto36.init = function init(scaleOpts, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var time = scaleOpts.time || (scaleOpts.time = {});
    var adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
    adapter.init(opts);
    Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["ab"])(time.displayFormats, adapter.formats());
    this._parseOpts = {
      parser: time.parser,
      round: time.round,
      isoWeekday: time.isoWeekday
    };
    _Scale4.prototype.init.call(this, scaleOpts);
    this._normalized = opts.normalized;
  };
  _proto36.parse = function parse(raw, index) {
    if (raw === undefined) {
      return null;
    }
    return _parse(this, raw);
  };
  _proto36.beforeLayout = function beforeLayout() {
    _Scale4.prototype.beforeLayout.call(this);
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
  };
  _proto36.determineDataLimits = function determineDataLimits() {
    var options = this.options;
    var adapter = this._adapter;
    var unit = options.time.unit || 'day';
    var _this$getUserBounds5 = this.getUserBounds(),
      min = _this$getUserBounds5.min,
      max = _this$getUserBounds5.max,
      minDefined = _this$getUserBounds5.minDefined,
      maxDefined = _this$getUserBounds5.maxDefined;
    function _applyBounds(bounds) {
      if (!minDefined && !isNaN(bounds.min)) {
        min = Math.min(min, bounds.min);
      }
      if (!maxDefined && !isNaN(bounds.max)) {
        max = Math.max(max, bounds.max);
      }
    }
    if (!minDefined || !maxDefined) {
      _applyBounds(this._getLabelBounds());
      if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') {
        _applyBounds(this.getMinMax(false));
      }
    }
    min = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
    max = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["g"])(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
    this.min = Math.min(min, max - 1);
    this.max = Math.max(min + 1, max);
  };
  _proto36._getLabelBounds = function _getLabelBounds() {
    var arr = this.getLabelTimestamps();
    var min = Number.POSITIVE_INFINITY;
    var max = Number.NEGATIVE_INFINITY;
    if (arr.length) {
      min = arr[0];
      max = arr[arr.length - 1];
    }
    return {
      min: min,
      max: max
    };
  };
  _proto36.buildTicks = function buildTicks() {
    var options = this.options;
    var timeOpts = options.time;
    var tickOpts = options.ticks;
    var timestamps = tickOpts.source === 'labels' ? this.getLabelTimestamps() : this._generate();
    if (options.bounds === 'ticks' && timestamps.length) {
      this.min = this._userMin || timestamps[0];
      this.max = this._userMax || timestamps[timestamps.length - 1];
    }
    var min = this.min;
    var max = this.max;
    var ticks = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["aO"])(timestamps, min, max);
    this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
    this._majorUnit = !tickOpts.major.enabled || this._unit === 'year' ? undefined : determineMajorUnit(this._unit);
    this.initOffsets(timestamps);
    if (options.reverse) {
      ticks.reverse();
    }
    return ticksFromTimestamps(this, ticks, this._majorUnit);
  };
  _proto36.afterAutoSkip = function afterAutoSkip() {
    if (this.options.offsetAfterAutoskip) {
      this.initOffsets(this.ticks.map(function (tick) {
        return +tick.value;
      }));
    }
  };
  _proto36.initOffsets = function initOffsets(timestamps) {
    if (timestamps === void 0) {
      timestamps = [];
    }
    var start = 0;
    var end = 0;
    var first, last;
    if (this.options.offset && timestamps.length) {
      first = this.getDecimalForValue(timestamps[0]);
      if (timestamps.length === 1) {
        start = 1 - first;
      } else {
        start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
      }
      last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
      if (timestamps.length === 1) {
        end = last;
      } else {
        end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
      }
    }
    var limit = timestamps.length < 3 ? 0.5 : 0.25;
    start = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["S"])(start, 0, limit);
    end = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["S"])(end, 0, limit);
    this._offsets = {
      start: start,
      end: end,
      factor: 1 / (start + 1 + end)
    };
  };
  _proto36._generate = function _generate() {
    var adapter = this._adapter;
    var min = this.min;
    var max = this.max;
    var options = this.options;
    var timeOpts = options.time;
    var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
    var stepSize = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["v"])(options.ticks.stepSize, 1);
    var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
    var hasWeekday = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["x"])(weekday) || weekday === true;
    var ticks = {};
    var first = min;
    var time, count;
    if (hasWeekday) {
      first = +adapter.startOf(first, 'isoWeek', weekday);
    }
    first = +adapter.startOf(first, hasWeekday ? 'day' : minor);
    if (adapter.diff(max, min, minor) > 100000 * stepSize) {
      throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
    }
    var timestamps = options.ticks.source === 'data' && this.getDataTimestamps();
    for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) {
      addTick(ticks, time, timestamps);
    }
    if (time === max || options.bounds === 'ticks' || count === 1) {
      addTick(ticks, time, timestamps);
    }
    return Object.keys(ticks).sort(sorter).map(function (x) {
      return +x;
    });
  };
  _proto36.getLabelForValue = function getLabelForValue(value) {
    var adapter = this._adapter;
    var timeOpts = this.options.time;
    if (timeOpts.tooltipFormat) {
      return adapter.format(value, timeOpts.tooltipFormat);
    }
    return adapter.format(value, timeOpts.displayFormats.datetime);
  };
  _proto36.format = function format(value, _format) {
    var options = this.options;
    var formats = options.time.displayFormats;
    var unit = this._unit;
    var fmt = _format || formats[unit];
    return this._adapter.format(value, fmt);
  };
  _proto36._tickFormatFunction = function _tickFormatFunction(time, index, ticks, format) {
    var options = this.options;
    var formatter = options.ticks.callback;
    if (formatter) {
      return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["Q"])(formatter, [time, index, ticks], this);
    }
    var formats = options.time.displayFormats;
    var unit = this._unit;
    var majorUnit = this._majorUnit;
    var minorFormat = unit && formats[unit];
    var majorFormat = majorUnit && formats[majorUnit];
    var tick = ticks[index];
    var major = majorUnit && majorFormat && tick && tick.major;
    return this._adapter.format(time, format || (major ? majorFormat : minorFormat));
  };
  _proto36.generateTickLabels = function generateTickLabels(ticks) {
    var i, ilen, tick;
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      tick.label = this._tickFormatFunction(tick.value, i, ticks);
    }
  };
  _proto36.getDecimalForValue = function getDecimalForValue(value) {
    return value === null ? NaN : (value - this.min) / (this.max - this.min);
  };
  _proto36.getPixelForValue = function getPixelForValue(value) {
    var offsets = this._offsets;
    var pos = this.getDecimalForValue(value);
    return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
  };
  _proto36.getValueForPixel = function getValueForPixel(pixel) {
    var offsets = this._offsets;
    var pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
    return this.min + pos * (this.max - this.min);
  };
  _proto36._getLabelSize = function _getLabelSize(label) {
    var ticksOpts = this.options.ticks;
    var tickLabelWidth = this.ctx.measureText(label).width;
    var angle = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["t"])(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
    var cosRotation = Math.cos(angle);
    var sinRotation = Math.sin(angle);
    var tickFontSize = this._resolveTickFontOptions(0).size;
    return {
      w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
      h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
    };
  };
  _proto36._getLabelCapacity = function _getLabelCapacity(exampleTime) {
    var timeOpts = this.options.time;
    var displayFormats = timeOpts.displayFormats;
    var format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
    var exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [exampleTime], this._majorUnit), format);
    var size = this._getLabelSize(exampleLabel);
    var capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
    return capacity > 0 ? capacity : 1;
  };
  _proto36.getDataTimestamps = function getDataTimestamps() {
    var timestamps = this._cache.data || [];
    var i, ilen;
    if (timestamps.length) {
      return timestamps;
    }
    var metas = this.getMatchingVisibleMetas();
    if (this._normalized && metas.length) {
      return this._cache.data = metas[0].controller.getAllParsedValues(this);
    }
    for (i = 0, ilen = metas.length; i < ilen; ++i) {
      timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
    }
    return this._cache.data = this.normalize(timestamps);
  };
  _proto36.getLabelTimestamps = function getLabelTimestamps() {
    var timestamps = this._cache.labels || [];
    var i, ilen;
    if (timestamps.length) {
      return timestamps;
    }
    var labels = this.getLabels();
    for (i = 0, ilen = labels.length; i < ilen; ++i) {
      timestamps.push(_parse(this, labels[i]));
    }
    return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
  };
  _proto36.normalize = function normalize(values) {
    return Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["_"])(values.sort(sorter));
  };
  return TimeScale;
}(Scale);
TimeScale.id = 'time';
TimeScale.defaults = {
  bounds: 'data',
  adapters: {},
  time: {
    parser: false,
    unit: false,
    round: false,
    isoWeekday: false,
    minUnit: 'millisecond',
    displayFormats: {}
  },
  ticks: {
    source: 'auto',
    callback: false,
    major: {
      enabled: false
    }
  }
};
function interpolate(table, val, reverse) {
  var lo = 0;
  var hi = table.length - 1;
  var prevSource, nextSource, prevTarget, nextTarget;
  if (reverse) {
    if (val >= table[lo].pos && val <= table[hi].pos) {
      var _lookupByKey2 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["B"])(table, 'pos', val);
      lo = _lookupByKey2.lo;
      hi = _lookupByKey2.hi;
    }
    var _table$lo = table[lo];
    prevSource = _table$lo.pos;
    prevTarget = _table$lo.time;
    var _table$hi = table[hi];
    nextSource = _table$hi.pos;
    nextTarget = _table$hi.time;
  } else {
    if (val >= table[lo].time && val <= table[hi].time) {
      var _lookupByKey3 = Object(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_3__["B"])(table, 'time', val);
      lo = _lookupByKey3.lo;
      hi = _lookupByKey3.hi;
    }
    var _table$lo2 = table[lo];
    prevSource = _table$lo2.time;
    prevTarget = _table$lo2.pos;
    var _table$hi2 = table[hi];
    nextSource = _table$hi2.time;
    nextTarget = _table$hi2.pos;
  }
  var span = nextSource - prevSource;
  return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
var TimeSeriesScale = /*#__PURE__*/function (_TimeScale2) {
  function TimeSeriesScale(props) {
    var _this44;
    _this44 = _TimeScale2.call(this, props) || this;
    _this44._table = [];
    _this44._minPos = undefined;
    _this44._tableRange = undefined;
    return _this44;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(TimeSeriesScale, _TimeScale2);
  var _proto37 = TimeSeriesScale.prototype;
  _proto37.initOffsets = function initOffsets() {
    var timestamps = this._getTimestampsForTable();
    var table = this._table = this.buildLookupTable(timestamps);
    this._minPos = interpolate(table, this.min);
    this._tableRange = interpolate(table, this.max) - this._minPos;
    _TimeScale2.prototype.initOffsets.call(this, timestamps);
  };
  _proto37.buildLookupTable = function buildLookupTable(timestamps) {
    var min = this.min,
      max = this.max;
    var items = [];
    var table = [];
    var i, ilen, prev, curr, next;
    for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
      curr = timestamps[i];
      if (curr >= min && curr <= max) {
        items.push(curr);
      }
    }
    if (items.length < 2) {
      return [{
        time: min,
        pos: 0
      }, {
        time: max,
        pos: 1
      }];
    }
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      next = items[i + 1];
      prev = items[i - 1];
      curr = items[i];
      if (Math.round((next + prev) / 2) !== curr) {
        table.push({
          time: curr,
          pos: i / (ilen - 1)
        });
      }
    }
    return table;
  };
  _proto37._generate = function _generate() {
    var min = this.min;
    var max = this.max;
    var timestamps = _TimeScale2.prototype.getDataTimestamps.call(this);
    if (!timestamps.includes(min) || !timestamps.length) {
      timestamps.splice(0, 0, min);
    }
    if (!timestamps.includes(max) || timestamps.length === 1) {
      timestamps.push(max);
    }
    return timestamps.sort(function (a, b) {
      return a - b;
    });
  };
  _proto37._getTimestampsForTable = function _getTimestampsForTable() {
    var timestamps = this._cache.all || [];
    if (timestamps.length) {
      return timestamps;
    }
    var data = this.getDataTimestamps();
    var label = this.getLabelTimestamps();
    if (data.length && label.length) {
      timestamps = this.normalize(data.concat(label));
    } else {
      timestamps = data.length ? data : label;
    }
    timestamps = this._cache.all = timestamps;
    return timestamps;
  };
  _proto37.getDecimalForValue = function getDecimalForValue(value) {
    return (interpolate(this._table, value) - this._minPos) / this._tableRange;
  };
  _proto37.getValueForPixel = function getValueForPixel(pixel) {
    var offsets = this._offsets;
    var decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
    return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
  };
  return TimeSeriesScale;
}(TimeScale);
TimeSeriesScale.id = 'timeseries';
TimeSeriesScale.defaults = TimeScale.defaults;
var scales = /*#__PURE__*/Object.freeze({
  __proto__: null,
  CategoryScale: CategoryScale,
  LinearScale: LinearScale,
  LogarithmicScale: LogarithmicScale,
  RadialLinearScale: RadialLinearScale,
  TimeScale: TimeScale,
  TimeSeriesScale: TimeSeriesScale
});
var registerables = [controllers, elements, plugins, scales];


/***/ }),

/***/ "./node_modules/chart.js/dist/chunks/helpers.segment.js":
/*!**************************************************************!*\
  !*** ./node_modules/chart.js/dist/chunks/helpers.segment.js ***!
  \**************************************************************/
/*! exports provided: $, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, a, a$, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, a_, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, b, b0, b1, b2, b3, b4, b5, b6, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return unclipArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return _rlookupByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return _lookupByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return _isPointInArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return getAngleFromPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return toPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return getMaximumSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return HALF_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return _getParentNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return readUsedSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return supportsEventListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return throttled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return _isDomSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return _factorize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return finiteOrDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return _addGrace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return _limitValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return TAU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return toDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return _measureText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return _int16Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return _alignPixel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return clipArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return renderText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _arrayUnique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a$", function() { return fontString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a0", function() { return toFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a1", function() { return _toLeftRightCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a2", function() { return _alignStartEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a3", function() { return overrides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a4", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a5", function() { return _capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a6", function() { return descriptors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a7", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a8", function() { return _attachContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a9", function() { return _createResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aA", function() { return overrideTextDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aB", function() { return _textX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aC", function() { return restoreTextDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aD", function() { return drawPointLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aE", function() { return distanceBetweenPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aF", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aG", function() { return _setMinAndMaxByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aH", function() { return niceNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aI", function() { return almostWhole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aJ", function() { return almostEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aK", function() { return _decimalPlaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aL", function() { return Ticks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aM", function() { return log10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aN", function() { return _longestText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aO", function() { return _filterBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aP", function() { return _lookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aQ", function() { return isPatternOrGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aR", function() { return getHoverColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aS", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aT", function() { return _merger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aU", function() { return _mergerIf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aV", function() { return _deprecated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aW", function() { return _splitKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aX", function() { return toFontString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aY", function() { return splineCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aZ", function() { return splineCurveMonotone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a_", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aa", function() { return _descriptors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return mergeIf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ac", function() { return uid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ad", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ae", function() { return retinaScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "af", function() { return clearCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ag", function() { return setsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ah", function() { return _elementsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ai", function() { return _isClickEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aj", function() { return _isBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ak", function() { return _readValueToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "al", function() { return _updateBezierControlPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "am", function() { return _computeSegments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "an", function() { return _boundSegments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ao", function() { return _steppedInterpolation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ap", function() { return _bezierInterpolation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aq", function() { return _pointInLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ar", function() { return _steppedLineTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "as", function() { return _bezierCurveTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "at", function() { return drawPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "au", function() { return addRoundedRectPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "av", function() { return toTRBL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aw", function() { return toTRBLCorners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ax", function() { return _boundSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ay", function() { return _normalizeAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "az", function() { return getRtlAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b0", function() { return toLineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b1", function() { return PITAU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b2", function() { return INFINITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b3", function() { return RAD_PER_DEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b4", function() { return QUARTER_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b5", function() { return TWO_THIRDS_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b6", function() { return _angleDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return effects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return resolveObjectKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isNumberFinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return defined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return createContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isNullOrUndef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return listenArrayEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return toPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return toDimension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _angleBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _getStartAndCountOfVisiblePoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return requestAnimFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return toRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return unlistenArrayEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return valueOrDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return _scaleRangesChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return _parseObjectDataRadialScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return getRelativePosition; });
/* harmony import */ var _kurkle_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kurkle/color */ "./node_modules/@kurkle/color/dist/color.esm.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/*!
 * Chart.js v4.4.7
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */


/**
 * @namespace Chart.helpers
 */ /**
    * An empty function that can be used, for example, for optional callback.
    */
function noop() {
  /* noop */}
/**
 * Returns a unique id, sequentially generated from a global variable.
 */
var uid = function () {
  var id = 0;
  return function () {
    return id++;
  };
}();
/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */
function isNullOrUndef(value) {
  return value === null || value === undefined;
}
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */
function isArray(value) {
  if (Array.isArray && Array.isArray(value)) {
    return true;
  }
  var type = Object.prototype.toString.call(value);
  if (type.slice(0, 7) === '[object' && type.slice(-6) === 'Array]') {
    return true;
  }
  return false;
}
/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */
function isObject(value) {
  return value !== null && Object.prototype.toString.call(value) === '[object Object]';
}
/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */
function isNumberFinite(value) {
  return (typeof value === 'number' || value instanceof Number) && isFinite(+value);
}
/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */
function finiteOrDefault(value, defaultValue) {
  return isNumberFinite(value) ? value : defaultValue;
}
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */
function valueOrDefault(value, defaultValue) {
  return typeof value === 'undefined' ? defaultValue : value;
}
var toPercentage = function toPercentage(value, dimension) {
  return typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 : +value / dimension;
};
var toDimension = function toDimension(value, dimension) {
  return typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 * dimension : +value;
};
/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */
function callback(fn, args, thisArg) {
  if (fn && typeof fn.call === 'function') {
    return fn.apply(thisArg, args);
  }
}
function each(loopable, fn, thisArg, reverse) {
  var i, len, keys;
  if (isArray(loopable)) {
    len = loopable.length;
    if (reverse) {
      for (i = len - 1; i >= 0; i--) {
        fn.call(thisArg, loopable[i], i);
      }
    } else {
      for (i = 0; i < len; i++) {
        fn.call(thisArg, loopable[i], i);
      }
    }
  } else if (isObject(loopable)) {
    keys = Object.keys(loopable);
    len = keys.length;
    for (i = 0; i < len; i++) {
      fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
  }
}
/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */
function _elementsEqual(a0, a1) {
  var i, ilen, v0, v1;
  if (!a0 || !a1 || a0.length !== a1.length) {
    return false;
  }
  for (i = 0, ilen = a0.length; i < ilen; ++i) {
    v0 = a0[i];
    v1 = a1[i];
    if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
      return false;
    }
  }
  return true;
}
/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */
function clone(source) {
  if (isArray(source)) {
    return source.map(clone);
  }
  if (isObject(source)) {
    var target = Object.create(null);
    var keys = Object.keys(source);
    var klen = keys.length;
    var k = 0;
    for (; k < klen; ++k) {
      target[keys[k]] = clone(source[keys[k]]);
    }
    return target;
  }
  return source;
}
function isValidKey(key) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(key) === -1;
}
/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */
function _merger(key, target, source, options) {
  if (!isValidKey(key)) {
    return;
  }
  var tval = target[key];
  var sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    merge(tval, sval, options);
  } else {
    target[key] = clone(sval);
  }
}
function merge(target, source, options) {
  var sources = isArray(source) ? source : [source];
  var ilen = sources.length;
  if (!isObject(target)) {
    return target;
  }
  options = options || {};
  var merger = options.merger || _merger;
  var current;
  for (var i = 0; i < ilen; ++i) {
    current = sources[i];
    if (!isObject(current)) {
      continue;
    }
    var keys = Object.keys(current);
    for (var k = 0, klen = keys.length; k < klen; ++k) {
      merger(keys[k], target, current, options);
    }
  }
  return target;
}
function mergeIf(target, source) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return merge(target, source, {
    merger: _mergerIf
  });
}
/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */
function _mergerIf(key, target, source) {
  if (!isValidKey(key)) {
    return;
  }
  var tval = target[key];
  var sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    mergeIf(tval, sval);
  } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
    target[key] = clone(sval);
  }
}
/**
 * @private
 */
function _deprecated(scope, value, previous, current) {
  if (value !== undefined) {
    console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
  }
}
// resolveObjectKey resolver cache
var keyResolvers = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  '': function _(v) {
    return v;
  },
  // default resolvers
  x: function x(o) {
    return o.x;
  },
  y: function y(o) {
    return o.y;
  }
};
/**
 * @private
 */
function _splitKey(key) {
  var parts = key.split('.');
  var keys = [];
  var tmp = '';
  for (var _iterator = _createForOfIteratorHelperLoose(parts), _step; !(_step = _iterator()).done;) {
    var part = _step.value;
    tmp += part;
    if (tmp.endsWith('\\')) {
      tmp = tmp.slice(0, -1) + '.';
    } else {
      keys.push(tmp);
      tmp = '';
    }
  }
  return keys;
}
function _getKeyResolver(key) {
  var keys = _splitKey(key);
  return function (obj) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(keys), _step2; !(_step2 = _iterator2()).done;) {
      var k = _step2.value;
      if (k === '') {
        break;
      }
      obj = obj && obj[k];
    }
    return obj;
  };
}
function resolveObjectKey(obj, key) {
  var resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
  return resolver(obj);
}
/**
 * @private
 */
function _capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
var defined = function defined(value) {
  return typeof value !== 'undefined';
};
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// Adapted from https://stackoverflow.com/questions/31128855/comparing-ecma6-sets-for-equality#31129384
var setsEqual = function setsEqual(a, b) {
  if (a.size !== b.size) {
    return false;
  }
  for (var _iterator3 = _createForOfIteratorHelperLoose(a), _step3; !(_step3 = _iterator3()).done;) {
    var item = _step3.value;
    if (!b.has(item)) {
      return false;
    }
  }
  return true;
};
/**
 * @param e - The event
 * @private
 */
function _isClickEvent(e) {
  return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu';
}

/**
 * @alias Chart.helpers.math
 * @namespace
 */
var PI = Math.PI;
var TAU = 2 * PI;
var PITAU = TAU + PI;
var INFINITY = Number.POSITIVE_INFINITY;
var RAD_PER_DEG = PI / 180;
var HALF_PI = PI / 2;
var QUARTER_PI = PI / 4;
var TWO_THIRDS_PI = PI * 2 / 3;
var log10 = Math.log10;
var sign = Math.sign;
function almostEquals(x, y, epsilon) {
  return Math.abs(x - y) < epsilon;
}
/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */
function niceNum(range) {
  var roundedRange = Math.round(range);
  range = almostEquals(range, roundedRange, range / 1000) ? roundedRange : range;
  var niceRange = Math.pow(10, Math.floor(log10(range)));
  var fraction = range / niceRange;
  var niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
  return niceFraction * niceRange;
}
/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */
function _factorize(value) {
  var result = [];
  var sqrt = Math.sqrt(value);
  var i;
  for (i = 1; i < sqrt; i++) {
    if (value % i === 0) {
      result.push(i);
      result.push(value / i);
    }
  }
  if (sqrt === (sqrt | 0)) {
    result.push(sqrt);
  }
  result.sort(function (a, b) {
    return a - b;
  }).pop();
  return result;
}
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function almostWhole(x, epsilon) {
  var rounded = Math.round(x);
  return rounded - epsilon <= x && rounded + epsilon >= x;
}
/**
 * @private
 */
function _setMinAndMaxByKey(array, target, property) {
  var i, ilen, value;
  for (i = 0, ilen = array.length; i < ilen; i++) {
    value = array[i][property];
    if (!isNaN(value)) {
      target.min = Math.min(target.min, value);
      target.max = Math.max(target.max, value);
    }
  }
}
function toRadians(degrees) {
  return degrees * (PI / 180);
}
function toDegrees(radians) {
  return radians * (180 / PI);
}
/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */
function _decimalPlaces(x) {
  if (!isNumberFinite(x)) {
    return;
  }
  var e = 1;
  var p = 0;
  while (Math.round(x * e) / e !== x) {
    e *= 10;
    p++;
  }
  return p;
}
// Gets the angle from vertical upright to the point about a centre.
function getAngleFromPoint(centrePoint, anglePoint) {
  var distanceFromXCenter = anglePoint.x - centrePoint.x;
  var distanceFromYCenter = anglePoint.y - centrePoint.y;
  var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
  var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
  if (angle < -0.5 * PI) {
    angle += TAU; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
  }
  return {
    angle: angle,
    distance: radialDistanceFromCenter
  };
}
function distanceBetweenPoints(pt1, pt2) {
  return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
/**
 * Shortest distance between angles, in either direction.
 * @private
 */
function _angleDiff(a, b) {
  return (a - b + PITAU) % TAU - PI;
}
/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */
function _normalizeAngle(a) {
  return (a % TAU + TAU) % TAU;
}
/**
 * @private
 */
function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
  var a = _normalizeAngle(angle);
  var s = _normalizeAngle(start);
  var e = _normalizeAngle(end);
  var angleToStart = _normalizeAngle(s - a);
  var angleToEnd = _normalizeAngle(e - a);
  var startToAngle = _normalizeAngle(a - s);
  var endToAngle = _normalizeAngle(a - e);
  return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}
/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */
function _limitValue(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
/**
 * @param {number} value
 * @private
 */
function _int16Range(value) {
  return _limitValue(value, -32768, 32767);
}
/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */
function _isBetween(value, start, end, epsilon) {
  if (epsilon === void 0) {
    epsilon = 1e-6;
  }
  return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}
function _lookup(table, value, cmp) {
  cmp = cmp || function (index) {
    return table[index] < value;
  };
  var hi = table.length - 1;
  var lo = 0;
  var mid;
  while (hi - lo > 1) {
    mid = lo + hi >> 1;
    if (cmp(mid)) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return {
    lo: lo,
    hi: hi
  };
}
/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */
var _lookupByKey = function _lookupByKey(table, key, value, last) {
  return _lookup(table, value, last ? function (index) {
    var ti = table[index][key];
    return ti < value || ti === value && table[index + 1][key] === value;
  } : function (index) {
    return table[index][key] < value;
  });
};
/**
 * Reverse binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @private
 */
var _rlookupByKey = function _rlookupByKey(table, key, value) {
  return _lookup(table, value, function (index) {
    return table[index][key] >= value;
  });
};
/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */
function _filterBetween(values, min, max) {
  var start = 0;
  var end = values.length;
  while (start < end && values[start] < min) {
    start++;
  }
  while (end > start && values[end - 1] > max) {
    end--;
  }
  return start > 0 || end < values.length ? values.slice(start, end) : values;
}
var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
function listenArrayEvents(array, listener) {
  if (array._chartjs) {
    array._chartjs.listeners.push(listener);
    return;
  }
  Object.defineProperty(array, '_chartjs', {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [listener]
    }
  });
  arrayEvents.forEach(function (key) {
    var method = '_onData' + _capitalize(key);
    var base = array[key];
    Object.defineProperty(array, key, {
      configurable: true,
      enumerable: false,
      value: function value() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var res = base.apply(this, args);
        array._chartjs.listeners.forEach(function (object) {
          if (typeof object[method] === 'function') {
            object[method].apply(object, args);
          }
        });
        return res;
      }
    });
  });
}
function unlistenArrayEvents(array, listener) {
  var stub = array._chartjs;
  if (!stub) {
    return;
  }
  var listeners = stub.listeners;
  var index = listeners.indexOf(listener);
  if (index !== -1) {
    listeners.splice(index, 1);
  }
  if (listeners.length > 0) {
    return;
  }
  arrayEvents.forEach(function (key) {
    delete array[key];
  });
  delete array._chartjs;
}
/**
 * @param items
 */
function _arrayUnique(items) {
  var set = new Set(items);
  if (set.size === items.length) {
    return items;
  }
  return Array.from(set);
}
function fontString(pixelSize, fontStyle, fontFamily) {
  return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
}
/**
* Request animation polyfill
*/
var requestAnimFrame = function () {
  if (typeof window === 'undefined') {
    return function (callback) {
      return callback();
    };
  }
  return window.requestAnimationFrame;
}();
/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 */
function throttled(fn, thisArg) {
  var argsToUse = [];
  var ticking = false;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    // Save the args for use later
    argsToUse = args;
    if (!ticking) {
      ticking = true;
      requestAnimFrame.call(window, function () {
        ticking = false;
        fn.apply(thisArg, argsToUse);
      });
    }
  };
}
/**
 * Debounces calling `fn` for `delay` ms
 */
function debounce(fn, delay) {
  var timeout;
  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    if (delay) {
      clearTimeout(timeout);
      timeout = setTimeout(fn, delay, args);
    } else {
      fn.apply(this, args);
    }
    return delay;
  };
}
/**
 * Converts 'start' to 'left', 'end' to 'right' and others to 'center'
 * @private
 */
var _toLeftRightCenter = function _toLeftRightCenter(align) {
  return align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';
};
/**
 * Returns `start`, `end` or `(start + end) / 2` depending on `align`. Defaults to `center`
 * @private
 */
var _alignStartEnd = function _alignStartEnd(align, start, end) {
  return align === 'start' ? start : align === 'end' ? end : (start + end) / 2;
};
/**
 * Returns `left`, `right` or `(left + right) / 2` depending on `align`. Defaults to `left`
 * @private
 */
var _textX = function _textX(align, left, right, rtl) {
  var check = rtl ? 'left' : 'right';
  return align === check ? right : align === 'center' ? (left + right) / 2 : left;
};
/**
 * Return start and count of visible points.
 * @private
 */
function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
  var pointCount = points.length;
  var start = 0;
  var count = pointCount;
  if (meta._sorted) {
    var iScale = meta.iScale,
      _parsed = meta._parsed;
    var axis = iScale.axis;
    var _iScale$getUserBounds = iScale.getUserBounds(),
      min = _iScale$getUserBounds.min,
      max = _iScale$getUserBounds.max,
      minDefined = _iScale$getUserBounds.minDefined,
      maxDefined = _iScale$getUserBounds.maxDefined;
    if (minDefined) {
      start = _limitValue(Math.min(
      // @ts-expect-error Need to type _parsed
      _lookupByKey(_parsed, axis, min).lo,
      // @ts-expect-error Need to fix types on _lookupByKey
      animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo), 0, pointCount - 1);
    }
    if (maxDefined) {
      count = _limitValue(Math.max(
      // @ts-expect-error Need to type _parsed
      _lookupByKey(_parsed, iScale.axis, max, true).hi + 1,
      // @ts-expect-error Need to fix types on _lookupByKey
      animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max), true).hi + 1), start, pointCount) - start;
    } else {
      count = pointCount - start;
    }
  }
  return {
    start: start,
    count: count
  };
}
/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */
function _scaleRangesChanged(meta) {
  var xScale = meta.xScale,
    yScale = meta.yScale,
    _scaleRanges = meta._scaleRanges;
  var newRanges = {
    xmin: xScale.min,
    xmax: xScale.max,
    ymin: yScale.min,
    ymax: yScale.max
  };
  if (!_scaleRanges) {
    meta._scaleRanges = newRanges;
    return true;
  }
  var changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
  Object.assign(_scaleRanges, newRanges);
  return changed;
}
var atEdge = function atEdge(t) {
  return t === 0 || t === 1;
};
var elasticIn = function elasticIn(t, s, p) {
  return -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
};
var elasticOut = function elasticOut(t, s, p) {
  return Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
};
/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easing.effects
 * @see http://www.robertpenner.com/easing/
 */
var effects = {
  linear: function linear(t) {
    return t;
  },
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  easeOutQuad: function easeOutQuad(t) {
    return -t * (t - 2);
  },
  easeInOutQuad: function easeInOutQuad(t) {
    return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
  },
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic: function easeOutCubic(t) {
    return (t -= 1) * t * t + 1;
  },
  easeInOutCubic: function easeInOutCubic(t) {
    return (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
  },
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart: function easeOutQuart(t) {
    return -((t -= 1) * t * t * t - 1);
  },
  easeInOutQuart: function easeInOutQuart(t) {
    return (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
  },
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function easeOutQuint(t) {
    return (t -= 1) * t * t * t * t + 1;
  },
  easeInOutQuint: function easeInOutQuint(t) {
    return (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
  },
  easeInSine: function easeInSine(t) {
    return -Math.cos(t * HALF_PI) + 1;
  },
  easeOutSine: function easeOutSine(t) {
    return Math.sin(t * HALF_PI);
  },
  easeInOutSine: function easeInOutSine(t) {
    return -0.5 * (Math.cos(PI * t) - 1);
  },
  easeInExpo: function easeInExpo(t) {
    return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
  },
  easeOutExpo: function easeOutExpo(t) {
    return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
  },
  easeInOutExpo: function easeInOutExpo(t) {
    return atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2);
  },
  easeInCirc: function easeInCirc(t) {
    return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
  },
  easeOutCirc: function easeOutCirc(t) {
    return Math.sqrt(1 - (t -= 1) * t);
  },
  easeInOutCirc: function easeInOutCirc(t) {
    return (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
  },
  easeInElastic: function easeInElastic(t) {
    return atEdge(t) ? t : elasticIn(t, 0.075, 0.3);
  },
  easeOutElastic: function easeOutElastic(t) {
    return atEdge(t) ? t : elasticOut(t, 0.075, 0.3);
  },
  easeInOutElastic: function easeInOutElastic(t) {
    var s = 0.1125;
    var p = 0.45;
    return atEdge(t) ? t : t < 0.5 ? 0.5 * elasticIn(t * 2, s, p) : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
  },
  easeInBack: function easeInBack(t) {
    var s = 1.70158;
    return t * t * ((s + 1) * t - s);
  },
  easeOutBack: function easeOutBack(t) {
    var s = 1.70158;
    return (t -= 1) * t * ((s + 1) * t + s) + 1;
  },
  easeInOutBack: function easeInOutBack(t) {
    var s = 1.70158;
    if ((t /= 0.5) < 1) {
      return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
    }
    return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
  },
  easeInBounce: function easeInBounce(t) {
    return 1 - effects.easeOutBounce(1 - t);
  },
  easeOutBounce: function easeOutBounce(t) {
    var m = 7.5625;
    var d = 2.75;
    if (t < 1 / d) {
      return m * t * t;
    }
    if (t < 2 / d) {
      return m * (t -= 1.5 / d) * t + 0.75;
    }
    if (t < 2.5 / d) {
      return m * (t -= 2.25 / d) * t + 0.9375;
    }
    return m * (t -= 2.625 / d) * t + 0.984375;
  },
  easeInOutBounce: function easeInOutBounce(t) {
    return t < 0.5 ? effects.easeInBounce(t * 2) * 0.5 : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
  }
};
function isPatternOrGradient(value) {
  if (value && typeof value === 'object') {
    var type = value.toString();
    return type === '[object CanvasPattern]' || type === '[object CanvasGradient]';
  }
  return false;
}
function color(value) {
  return isPatternOrGradient(value) ? value : new _kurkle_color__WEBPACK_IMPORTED_MODULE_0__["Color"](value);
}
function getHoverColor(value) {
  return isPatternOrGradient(value) ? value : new _kurkle_color__WEBPACK_IMPORTED_MODULE_0__["Color"](value).saturate(0.5).darken(0.1).hexString();
}
var numbers = ['x', 'y', 'borderWidth', 'radius', 'tension'];
var colors = ['color', 'borderColor', 'backgroundColor'];
function applyAnimationsDefaults(defaults) {
  defaults.set('animation', {
    delay: undefined,
    duration: 1000,
    easing: 'easeOutQuart',
    fn: undefined,
    from: undefined,
    loop: undefined,
    to: undefined,
    type: undefined
  });
  defaults.describe('animation', {
    _fallback: false,
    _indexable: false,
    _scriptable: function _scriptable(name) {
      return name !== 'onProgress' && name !== 'onComplete' && name !== 'fn';
    }
  });
  defaults.set('animations', {
    colors: {
      type: 'color',
      properties: colors
    },
    numbers: {
      type: 'number',
      properties: numbers
    }
  });
  defaults.describe('animations', {
    _fallback: 'animation'
  });
  defaults.set('transitions', {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: 'transparent'
        },
        visible: {
          type: 'boolean',
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: 'transparent'
        },
        visible: {
          type: 'boolean',
          easing: 'linear',
          fn: function fn(v) {
            return v | 0;
          }
        }
      }
    }
  });
}
function applyLayoutsDefaults(defaults) {
  defaults.set('layout', {
    autoPadding: true,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
var intlCache = new Map();
function getNumberFormat(locale, options) {
  options = options || {};
  var cacheKey = locale + JSON.stringify(options);
  var formatter = intlCache.get(cacheKey);
  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, options);
    intlCache.set(cacheKey, formatter);
  }
  return formatter;
}
function formatNumber(num, locale, options) {
  return getNumberFormat(locale, options).format(num);
}
var formatters = {
  values: function values(value) {
    return isArray(value) ? value : '' + value;
  },
  numeric: function numeric(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    var locale = this.chart.options.locale;
    var notation;
    var delta = tickValue;
    if (ticks.length > 1) {
      var maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
      if (maxTick < 1e-4 || maxTick > 1e+15) {
        notation = 'scientific';
      }
      delta = calculateDelta(tickValue, ticks);
    }
    var logDelta = log10(Math.abs(delta));
    var numDecimal = isNaN(logDelta) ? 1 : Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
    var options = {
      notation: notation,
      minimumFractionDigits: numDecimal,
      maximumFractionDigits: numDecimal
    };
    Object.assign(options, this.options.ticks.format);
    return formatNumber(tickValue, locale, options);
  },
  logarithmic: function logarithmic(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    var remain = ticks[index].significand || tickValue / Math.pow(10, Math.floor(log10(tickValue)));
    if ([1, 2, 3, 5, 10, 15].includes(remain) || index > 0.8 * ticks.length) {
      return formatters.numeric.call(this, tickValue, index, ticks);
    }
    return '';
  }
};
function calculateDelta(tickValue, ticks) {
  var delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
  if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
    delta = tickValue - Math.floor(tickValue);
  }
  return delta;
}
var Ticks = {
  formatters: formatters
};
function applyScaleDefaults(defaults) {
  defaults.set('scale', {
    display: true,
    offset: false,
    reverse: false,
    beginAtZero: false,
    bounds: 'ticks',
    clip: true,
    grace: 0,
    grid: {
      display: true,
      lineWidth: 1,
      drawOnChartArea: true,
      drawTicks: true,
      tickLength: 8,
      tickWidth: function tickWidth(_ctx, options) {
        return options.lineWidth;
      },
      tickColor: function tickColor(_ctx, options) {
        return options.color;
      },
      offset: false
    },
    border: {
      display: true,
      dash: [],
      dashOffset: 0.0,
      width: 1
    },
    title: {
      display: false,
      text: '',
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: false,
      textStrokeWidth: 0,
      textStrokeColor: '',
      padding: 3,
      display: true,
      autoSkip: true,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Ticks.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near',
      showLabelBackdrop: false,
      backdropColor: 'rgba(255, 255, 255, 0.75)',
      backdropPadding: 2
    }
  });
  defaults.route('scale.ticks', 'color', '', 'color');
  defaults.route('scale.grid', 'color', '', 'borderColor');
  defaults.route('scale.border', 'color', '', 'borderColor');
  defaults.route('scale.title', 'color', '', 'color');
  defaults.describe('scale', {
    _fallback: false,
    _scriptable: function _scriptable(name) {
      return !name.startsWith('before') && !name.startsWith('after') && name !== 'callback' && name !== 'parser';
    },
    _indexable: function _indexable(name) {
      return name !== 'borderDash' && name !== 'tickBorderDash' && name !== 'dash';
    }
  });
  defaults.describe('scales', {
    _fallback: 'scale'
  });
  defaults.describe('scale.ticks', {
    _scriptable: function _scriptable(name) {
      return name !== 'backdropPadding' && name !== 'callback';
    },
    _indexable: function _indexable(name) {
      return name !== 'backdropPadding';
    }
  });
}
var overrides = Object.create(null);
var descriptors = Object.create(null);
function getScope$1(node, key) {
  if (!key) {
    return node;
  }
  var keys = key.split('.');
  for (var i = 0, n = keys.length; i < n; ++i) {
    var k = keys[i];
    node = node[k] || (node[k] = Object.create(null));
  }
  return node;
}
function _set(root, scope, values) {
  if (typeof scope === 'string') {
    return merge(getScope$1(root, scope), values);
  }
  return merge(getScope$1(root, ''), scope);
}
var Defaults = /*#__PURE__*/function () {
  function Defaults(_descriptors, _appliers) {
    this.animation = undefined;
    this.backgroundColor = 'rgba(0,0,0,0.1)';
    this.borderColor = 'rgba(0,0,0,0.1)';
    this.color = '#666';
    this.datasets = {};
    this.devicePixelRatio = function (context) {
      return context.chart.platform.getDevicePixelRatio();
    };
    this.elements = {};
    this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'];
    this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: 'normal',
      lineHeight: 1.2,
      weight: null
    };
    this.hover = {};
    this.hoverBackgroundColor = function (ctx, options) {
      return getHoverColor(options.backgroundColor);
    };
    this.hoverBorderColor = function (ctx, options) {
      return getHoverColor(options.borderColor);
    };
    this.hoverColor = function (ctx, options) {
      return getHoverColor(options.color);
    };
    this.indexAxis = 'x';
    this.interaction = {
      mode: 'nearest',
      intersect: true,
      includeInvisible: false
    };
    this.maintainAspectRatio = true;
    this.onHover = null;
    this.onClick = null;
    this.parsing = true;
    this.plugins = {};
    this.responsive = true;
    this.scale = undefined;
    this.scales = {};
    this.showLine = true;
    this.drawActiveElementsOnTop = true;
    this.describe(_descriptors);
    this.apply(_appliers);
  }
  var _proto = Defaults.prototype;
  _proto.set = function set(scope, values) {
    return _set(this, scope, values);
  };
  _proto.get = function get(scope) {
    return getScope$1(this, scope);
  };
  _proto.describe = function describe(scope, values) {
    return _set(descriptors, scope, values);
  };
  _proto.override = function override(scope, values) {
    return _set(overrides, scope, values);
  };
  _proto.route = function route(scope, name, targetScope, targetName) {
    var _Object$definePropert;
    var scopeObject = getScope$1(this, scope);
    var targetScopeObject = getScope$1(this, targetScope);
    var privateName = '_' + name;
    Object.defineProperties(scopeObject, (_Object$definePropert = {}, _Object$definePropert[privateName] = {
      value: scopeObject[name],
      writable: true
    }, _Object$definePropert[name] = {
      enumerable: true,
      get: function get() {
        var local = this[privateName];
        var target = targetScopeObject[targetName];
        if (isObject(local)) {
          return Object.assign({}, target, local);
        }
        return valueOrDefault(local, target);
      },
      set: function set(value) {
        this[privateName] = value;
      }
    }, _Object$definePropert));
  };
  _proto.apply = function apply(appliers) {
    var _this = this;
    appliers.forEach(function (apply) {
      return apply(_this);
    });
  };
  return Defaults;
}();
var defaults = /* #__PURE__ */new Defaults({
  _scriptable: function _scriptable(name) {
    return !name.startsWith('on');
  },
  _indexable: function _indexable(name) {
    return name !== 'events';
  },
  hover: {
    _fallback: 'interaction'
  },
  interaction: {
    _scriptable: false,
    _indexable: false
  }
}, [applyAnimationsDefaults, applyLayoutsDefaults, applyScaleDefaults]);

/**
 * Converts the given font object into a CSS font string.
 * @param font - A font object.
 * @return The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
 * @private
 */
function toFontString(font) {
  if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
    return null;
  }
  return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
}
/**
 * @private
 */
function _measureText(ctx, data, gc, longest, string) {
  var textWidth = data[string];
  if (!textWidth) {
    textWidth = data[string] = ctx.measureText(string).width;
    gc.push(string);
  }
  if (textWidth > longest) {
    longest = textWidth;
  }
  return longest;
}
/**
 * @private
 */ // eslint-disable-next-line complexity
function _longestText(ctx, font, arrayOfThings, cache) {
  cache = cache || {};
  var data = cache.data = cache.data || {};
  var gc = cache.garbageCollect = cache.garbageCollect || [];
  if (cache.font !== font) {
    data = cache.data = {};
    gc = cache.garbageCollect = [];
    cache.font = font;
  }
  ctx.save();
  ctx.font = font;
  var longest = 0;
  var ilen = arrayOfThings.length;
  var i, j, jlen, thing, nestedThing;
  for (i = 0; i < ilen; i++) {
    thing = arrayOfThings[i];
    // Undefined strings and arrays should not be measured
    if (thing !== undefined && thing !== null && !isArray(thing)) {
      longest = _measureText(ctx, data, gc, longest, thing);
    } else if (isArray(thing)) {
      // if it is an array lets measure each element
      // to do maybe simplify this function a bit so we can do this more recursively?
      for (j = 0, jlen = thing.length; j < jlen; j++) {
        nestedThing = thing[j];
        // Undefined strings and arrays should not be measured
        if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) {
          longest = _measureText(ctx, data, gc, longest, nestedThing);
        }
      }
    }
  }
  ctx.restore();
  var gcLen = gc.length / 2;
  if (gcLen > arrayOfThings.length) {
    for (i = 0; i < gcLen; i++) {
      delete data[gc[i]];
    }
    gc.splice(0, gcLen);
  }
  return longest;
}
/**
 * Returns the aligned pixel value to avoid anti-aliasing blur
 * @param chart - The chart instance.
 * @param pixel - A pixel value.
 * @param width - The width of the element.
 * @returns The aligned pixel value.
 * @private
 */
function _alignPixel(chart, pixel, width) {
  var devicePixelRatio = chart.currentDevicePixelRatio;
  var halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
  return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
/**
 * Clears the entire canvas.
 */
function clearCanvas(canvas, ctx) {
  if (!ctx && !canvas) {
    return;
  }
  ctx = ctx || canvas.getContext('2d');
  ctx.save();
  // canvas.width and canvas.height do not consider the canvas transform,
  // while clearRect does
  ctx.resetTransform();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}
function drawPoint(ctx, options, x, y) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  drawPointLegend(ctx, options, x, y, null);
}
// eslint-disable-next-line complexity
function drawPointLegend(ctx, options, x, y, w) {
  var type, xOffset, yOffset, size, cornerRadius, width, xOffsetW, yOffsetW;
  var style = options.pointStyle;
  var rotation = options.rotation;
  var radius = options.radius;
  var rad = (rotation || 0) * RAD_PER_DEG;
  if (style && typeof style === 'object') {
    type = style.toString();
    if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rad);
      ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
      ctx.restore();
      return;
    }
  }
  if (isNaN(radius) || radius <= 0) {
    return;
  }
  ctx.beginPath();
  switch (style) {
    // Default includes circle
    default:
      if (w) {
        ctx.ellipse(x, y, w / 2, radius, 0, 0, TAU);
      } else {
        ctx.arc(x, y, radius, 0, TAU);
      }
      ctx.closePath();
      break;
    case 'triangle':
      width = w ? w / 2 : radius;
      ctx.moveTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
      rad += TWO_THIRDS_PI;
      ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
      rad += TWO_THIRDS_PI;
      ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
      ctx.closePath();
      break;
    case 'rectRounded':
      // NOTE: the rounded rect implementation changed to use `arc` instead of
      // `quadraticCurveTo` since it generates better results when rect is
      // almost a circle. 0.516 (instead of 0.5) produces results with visually
      // closer proportion to the previous impl and it is inscribed in the
      // circle with `radius`. For more details, see the following PRs:
      // https://github.com/chartjs/Chart.js/issues/5597
      // https://github.com/chartjs/Chart.js/issues/5858
      cornerRadius = radius * 0.516;
      size = radius - cornerRadius;
      xOffset = Math.cos(rad + QUARTER_PI) * size;
      xOffsetW = Math.cos(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
      yOffset = Math.sin(rad + QUARTER_PI) * size;
      yOffsetW = Math.sin(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
      ctx.arc(x - xOffsetW, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
      ctx.arc(x + yOffsetW, y - xOffset, cornerRadius, rad - HALF_PI, rad);
      ctx.arc(x + xOffsetW, y + yOffset, cornerRadius, rad, rad + HALF_PI);
      ctx.arc(x - yOffsetW, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
      ctx.closePath();
      break;
    case 'rect':
      if (!rotation) {
        size = Math.SQRT1_2 * radius;
        width = w ? w / 2 : size;
        ctx.rect(x - width, y - size, 2 * width, 2 * size);
        break;
      }
      rad += QUARTER_PI;
    /* falls through */
    case 'rectRot':
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      ctx.closePath();
      break;
    case 'crossRot':
      rad += QUARTER_PI;
    /* falls through */
    case 'cross':
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.moveTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      break;
    case 'star':
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.moveTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      rad += QUARTER_PI;
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.moveTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      break;
    case 'line':
      xOffset = w ? w / 2 : Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      break;
    case 'dash':
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(rad) * (w ? w / 2 : radius), y + Math.sin(rad) * radius);
      break;
    case false:
      ctx.closePath();
      break;
  }
  ctx.fill();
  if (options.borderWidth > 0) {
    ctx.stroke();
  }
}
/**
 * Returns true if the point is inside the rectangle
 * @param point - The point to test
 * @param area - The rectangle
 * @param margin - allowed margin
 * @private
 */
function _isPointInArea(point, area, margin) {
  margin = margin || 0.5; // margin - default is to match rounded decimals
  return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
}
function clipArea(ctx, area) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
  ctx.clip();
}
function unclipArea(ctx) {
  ctx.restore();
}
/**
 * @private
 */
function _steppedLineTo(ctx, previous, target, flip, mode) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  if (mode === 'middle') {
    var midpoint = (previous.x + target.x) / 2.0;
    ctx.lineTo(midpoint, previous.y);
    ctx.lineTo(midpoint, target.y);
  } else if (mode === 'after' !== !!flip) {
    ctx.lineTo(previous.x, target.y);
  } else {
    ctx.lineTo(target.x, previous.y);
  }
  ctx.lineTo(target.x, target.y);
}
/**
 * @private
 */
function _bezierCurveTo(ctx, previous, target, flip) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
}
function setRenderOpts(ctx, opts) {
  if (opts.translation) {
    ctx.translate(opts.translation[0], opts.translation[1]);
  }
  if (!isNullOrUndef(opts.rotation)) {
    ctx.rotate(opts.rotation);
  }
  if (opts.color) {
    ctx.fillStyle = opts.color;
  }
  if (opts.textAlign) {
    ctx.textAlign = opts.textAlign;
  }
  if (opts.textBaseline) {
    ctx.textBaseline = opts.textBaseline;
  }
}
function decorateText(ctx, x, y, line, opts) {
  if (opts.strikethrough || opts.underline) {
    /**
    * Now that IE11 support has been dropped, we can use more
    * of the TextMetrics object. The actual bounding boxes
    * are unflagged in Chrome, Firefox, Edge, and Safari so they
    * can be safely used.
    * See https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics#Browser_compatibility
    */
    var metrics = ctx.measureText(line);
    var left = x - metrics.actualBoundingBoxLeft;
    var right = x + metrics.actualBoundingBoxRight;
    var top = y - metrics.actualBoundingBoxAscent;
    var bottom = y + metrics.actualBoundingBoxDescent;
    var yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.lineWidth = opts.decorationWidth || 2;
    ctx.moveTo(left, yDecoration);
    ctx.lineTo(right, yDecoration);
    ctx.stroke();
  }
}
function drawBackdrop(ctx, opts) {
  var oldColor = ctx.fillStyle;
  ctx.fillStyle = opts.color;
  ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
  ctx.fillStyle = oldColor;
}
/**
 * Render text onto the canvas
 */
function renderText(ctx, text, x, y, font, opts) {
  if (opts === void 0) {
    opts = {};
  }
  var lines = isArray(text) ? text : [text];
  var stroke = opts.strokeWidth > 0 && opts.strokeColor !== '';
  var i, line;
  ctx.save();
  ctx.font = font.string;
  setRenderOpts(ctx, opts);
  for (i = 0; i < lines.length; ++i) {
    line = lines[i];
    if (opts.backdrop) {
      drawBackdrop(ctx, opts.backdrop);
    }
    if (stroke) {
      if (opts.strokeColor) {
        ctx.strokeStyle = opts.strokeColor;
      }
      if (!isNullOrUndef(opts.strokeWidth)) {
        ctx.lineWidth = opts.strokeWidth;
      }
      ctx.strokeText(line, x, y, opts.maxWidth);
    }
    ctx.fillText(line, x, y, opts.maxWidth);
    decorateText(ctx, x, y, line, opts);
    y += Number(font.lineHeight);
  }
  ctx.restore();
}
/**
 * Add a path of a rectangle with rounded corners to the current sub-path
 * @param ctx - Context
 * @param rect - Bounding rect
 */
function addRoundedRectPath(ctx, rect) {
  var x = rect.x,
    y = rect.y,
    w = rect.w,
    h = rect.h,
    radius = rect.radius;
  // top left arc
  ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, 1.5 * PI, PI, true);
  // line from top left to bottom left
  ctx.lineTo(x, y + h - radius.bottomLeft);
  // bottom left arc
  ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
  // line from bottom left to bottom right
  ctx.lineTo(x + w - radius.bottomRight, y + h);
  // bottom right arc
  ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
  // line from bottom right to top right
  ctx.lineTo(x + w, y + radius.topRight);
  // top right arc
  ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
  // line from top right to top left
  ctx.lineTo(x + radius.topLeft, y);
}
var LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
var FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
/**
 * @alias Chart.helpers.options
 * @namespace
 */ /**
    * Converts the given line height `value` in pixels for a specific font `size`.
    * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
    * @param size - The font size (in pixels) used to resolve relative `value`.
    * @returns The effective line height in pixels (size * 1.2 if value is invalid).
    * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
    * @since 2.7.0
    */
function toLineHeight(value, size) {
  var matches = ('' + value).match(LINE_HEIGHT);
  if (!matches || matches[1] === 'normal') {
    return size * 1.2;
  }
  value = +matches[2];
  switch (matches[3]) {
    case 'px':
      return value;
    case '%':
      value /= 100;
      break;
  }
  return size * value;
}
var numberOrZero = function numberOrZero(v) {
  return +v || 0;
};
function _readValueToProps(value, props) {
  var ret = {};
  var objProps = isObject(props);
  var keys = objProps ? Object.keys(props) : props;
  var read = isObject(value) ? objProps ? function (prop) {
    return valueOrDefault(value[prop], value[props[prop]]);
  } : function (prop) {
    return value[prop];
  } : function () {
    return value;
  };
  for (var _iterator4 = _createForOfIteratorHelperLoose(keys), _step4; !(_step4 = _iterator4()).done;) {
    var prop = _step4.value;
    ret[prop] = numberOrZero(read(prop));
  }
  return ret;
}
/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */
function toTRBL(value) {
  return _readValueToProps(value, {
    top: 'y',
    right: 'x',
    bottom: 'y',
    left: 'x'
  });
}
/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */
function toTRBLCorners(value) {
  return _readValueToProps(value, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */
function toPadding(value) {
  var obj = toTRBL(value);
  obj.width = obj.left + obj.right;
  obj.height = obj.top + obj.bottom;
  return obj;
}
/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */
function toFont(options, fallback) {
  options = options || {};
  fallback = fallback || defaults.font;
  var size = valueOrDefault(options.size, fallback.size);
  if (typeof size === 'string') {
    size = parseInt(size, 10);
  }
  var style = valueOrDefault(options.style, fallback.style);
  if (style && !('' + style).match(FONT_STYLE)) {
    console.warn('Invalid font style specified: "' + style + '"');
    style = undefined;
  }
  var font = {
    family: valueOrDefault(options.family, fallback.family),
    lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
    size: size,
    style: style,
    weight: valueOrDefault(options.weight, fallback.weight),
    string: ''
  };
  font.string = toFontString(font);
  return font;
}
/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */
function resolve(inputs, context, index, info) {
  var cacheable = true;
  var i, ilen, value;
  for (i = 0, ilen = inputs.length; i < ilen; ++i) {
    value = inputs[i];
    if (value === undefined) {
      continue;
    }
    if (context !== undefined && typeof value === 'function') {
      value = value(context);
      cacheable = false;
    }
    if (index !== undefined && isArray(value)) {
      value = value[index % value.length];
      cacheable = false;
    }
    if (value !== undefined) {
      if (info && !cacheable) {
        info.cacheable = false;
      }
      return value;
    }
  }
}
/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */
function _addGrace(minmax, grace, beginAtZero) {
  var min = minmax.min,
    max = minmax.max;
  var change = toDimension(grace, (max - min) / 2);
  var keepZero = function keepZero(value, add) {
    return beginAtZero && value === 0 ? 0 : value + add;
  };
  return {
    min: keepZero(min, -Math.abs(change)),
    max: keepZero(max, change)
  };
}
function createContext(parentContext, context) {
  return Object.assign(Object.create(parentContext), context);
}

/**
 * Creates a Proxy for resolving raw values for options.
 * @param scopes - The option scopes to look for values, in resolution order
 * @param prefixes - The prefixes for values, in resolution order.
 * @param rootScopes - The root option scopes
 * @param fallback - Parent scopes fallback
 * @param getTarget - callback for getting the target for changed values
 * @returns Proxy
 * @private
 */
function _createResolver(scopes, prefixes, rootScopes, fallback, getTarget) {
  var _cache;
  if (prefixes === void 0) {
    prefixes = [''];
  }
  if (getTarget === void 0) {
    getTarget = function getTarget() {
      return scopes[0];
    };
  }
  var finalRootScopes = rootScopes || scopes;
  if (typeof fallback === 'undefined') {
    fallback = _resolve('_fallback', scopes);
  }
  var cache = (_cache = {}, _cache[Symbol.toStringTag] = 'Object', _cache._cacheable = true, _cache._scopes = scopes, _cache._rootScopes = finalRootScopes, _cache._fallback = fallback, _cache._getTarget = getTarget, _cache.override = function override(scope) {
    return _createResolver([scope].concat(scopes), prefixes, finalRootScopes, fallback);
  }, _cache);
  return new Proxy(cache, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty: function deleteProperty(target, prop) {
      delete target[prop]; // remove from cache
      delete target._keys; // remove cached keys
      delete scopes[0][prop]; // remove from top level scope
      return true;
    },
    /**
    * A trap for getting property values.
    */
    get: function get(target, prop) {
      return _cached(target, prop, function () {
        return _resolveWithPrefixes(prop, prefixes, scopes, target);
      });
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
      return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf: function getPrototypeOf() {
      return Reflect.getPrototypeOf(scopes[0]);
    },
    /**
    * A trap for the in operator.
    */
    has: function has(target, prop) {
      return getKeysFromAllScopes(target).includes(prop);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys: function ownKeys(target) {
      return getKeysFromAllScopes(target);
    },
    /**
    * A trap for setting property values.
    */
    set: function set(target, prop, value) {
      var storage = target._storage || (target._storage = getTarget());
      target[prop] = storage[prop] = value; // set to top level scope + cache
      delete target._keys; // remove cached keys
      return true;
    }
  });
}
/**
 * Returns an Proxy for resolving option values with context.
 * @param proxy - The Proxy returned by `_createResolver`
 * @param context - Context object for scriptable/indexable options
 * @param subProxy - The proxy provided for scriptable options
 * @param descriptorDefaults - Defaults for descriptors
 * @private
 */
function _attachContext(proxy, context, subProxy, descriptorDefaults) {
  var cache = {
    _cacheable: false,
    _proxy: proxy,
    _context: context,
    _subProxy: subProxy,
    _stack: new Set(),
    _descriptors: _descriptors(proxy, descriptorDefaults),
    setContext: function setContext(ctx) {
      return _attachContext(proxy, ctx, subProxy, descriptorDefaults);
    },
    override: function override(scope) {
      return _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults);
    }
  };
  return new Proxy(cache, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty: function deleteProperty(target, prop) {
      delete target[prop]; // remove from cache
      delete proxy[prop]; // remove from proxy
      return true;
    },
    /**
    * A trap for getting property values.
    */
    get: function get(target, prop, receiver) {
      return _cached(target, prop, function () {
        return _resolveWithContext(target, prop, receiver);
      });
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
      return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
        enumerable: true,
        configurable: true
      } : undefined : Reflect.getOwnPropertyDescriptor(proxy, prop);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf: function getPrototypeOf() {
      return Reflect.getPrototypeOf(proxy);
    },
    /**
    * A trap for the in operator.
    */
    has: function has(target, prop) {
      return Reflect.has(proxy, prop);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys: function ownKeys() {
      return Reflect.ownKeys(proxy);
    },
    /**
    * A trap for setting property values.
    */
    set: function set(target, prop, value) {
      proxy[prop] = value; // set to proxy
      delete target[prop]; // remove from cache
      return true;
    }
  });
}
/**
 * @private
 */
function _descriptors(proxy, defaults) {
  if (defaults === void 0) {
    defaults = {
      scriptable: true,
      indexable: true
    };
  }
  var _proxy$_scriptable = proxy._scriptable,
    _scriptable = _proxy$_scriptable === void 0 ? defaults.scriptable : _proxy$_scriptable,
    _proxy$_indexable = proxy._indexable,
    _indexable = _proxy$_indexable === void 0 ? defaults.indexable : _proxy$_indexable,
    _proxy$_allKeys = proxy._allKeys,
    _allKeys = _proxy$_allKeys === void 0 ? defaults.allKeys : _proxy$_allKeys;
  return {
    allKeys: _allKeys,
    scriptable: _scriptable,
    indexable: _indexable,
    isScriptable: isFunction(_scriptable) ? _scriptable : function () {
      return _scriptable;
    },
    isIndexable: isFunction(_indexable) ? _indexable : function () {
      return _indexable;
    }
  };
}
var readKey = function readKey(prefix, name) {
  return prefix ? prefix + _capitalize(name) : name;
};
var needsSubResolver = function needsSubResolver(prop, value) {
  return isObject(value) && prop !== 'adapters' && (Object.getPrototypeOf(value) === null || value.constructor === Object);
};
function _cached(target, prop, resolve) {
  if (Object.prototype.hasOwnProperty.call(target, prop) || prop === 'constructor') {
    return target[prop];
  }
  var value = resolve();
  // cache the resolved value
  target[prop] = value;
  return value;
}
function _resolveWithContext(target, prop, receiver) {
  var _proxy = target._proxy,
    _context = target._context,
    _subProxy = target._subProxy,
    descriptors = target._descriptors;
  var value = _proxy[prop]; // resolve from proxy
  // resolve with context
  if (isFunction(value) && descriptors.isScriptable(prop)) {
    value = _resolveScriptable(prop, value, target, receiver);
  }
  if (isArray(value) && value.length) {
    value = _resolveArray(prop, value, target, descriptors.isIndexable);
  }
  if (needsSubResolver(prop, value)) {
    // if the resolved value is an object, create a sub resolver for it
    value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
  }
  return value;
}
function _resolveScriptable(prop, getValue, target, receiver) {
  var _proxy = target._proxy,
    _context = target._context,
    _subProxy = target._subProxy,
    _stack = target._stack;
  if (_stack.has(prop)) {
    throw new Error('Recursion detected: ' + Array.from(_stack).join('->') + '->' + prop);
  }
  _stack.add(prop);
  var value = getValue(_context, _subProxy || receiver);
  _stack["delete"](prop);
  if (needsSubResolver(prop, value)) {
    // When scriptable option returns an object, create a resolver on that.
    value = createSubResolver(_proxy._scopes, _proxy, prop, value);
  }
  return value;
}
function _resolveArray(prop, value, target, isIndexable) {
  var _proxy = target._proxy,
    _context = target._context,
    _subProxy = target._subProxy,
    descriptors = target._descriptors;
  if (typeof _context.index !== 'undefined' && isIndexable(prop)) {
    return value[_context.index % value.length];
  } else if (isObject(value[0])) {
    // Array of objects, return array or resolvers
    var arr = value;
    var scopes = _proxy._scopes.filter(function (s) {
      return s !== arr;
    });
    value = [];
    for (var _iterator5 = _createForOfIteratorHelperLoose(arr), _step5; !(_step5 = _iterator5()).done;) {
      var item = _step5.value;
      var resolver = createSubResolver(scopes, _proxy, prop, item);
      value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
    }
  }
  return value;
}
function resolveFallback(fallback, prop, value) {
  return isFunction(fallback) ? fallback(prop, value) : fallback;
}
var getScope = function getScope(key, parent) {
  return key === true ? parent : typeof key === 'string' ? resolveObjectKey(parent, key) : undefined;
};
function addScopes(set, parentScopes, key, parentFallback, value) {
  for (var _iterator6 = _createForOfIteratorHelperLoose(parentScopes), _step6; !(_step6 = _iterator6()).done;) {
    var parent = _step6.value;
    var scope = getScope(key, parent);
    if (scope) {
      set.add(scope);
      var fallback = resolveFallback(scope._fallback, key, value);
      if (typeof fallback !== 'undefined' && fallback !== key && fallback !== parentFallback) {
        // When we reach the descriptor that defines a new _fallback, return that.
        // The fallback will resume to that new scope.
        return fallback;
      }
    } else if (scope === false && typeof parentFallback !== 'undefined' && key !== parentFallback) {
      // Fallback to `false` results to `false`, when falling back to different key.
      // For example `interaction` from `hover` or `plugins.tooltip` and `animation` from `animations`
      return null;
    }
  }
  return false;
}
function createSubResolver(parentScopes, resolver, prop, value) {
  var rootScopes = resolver._rootScopes;
  var fallback = resolveFallback(resolver._fallback, prop, value);
  var allScopes = [].concat(parentScopes, rootScopes);
  var set = new Set();
  set.add(value);
  var key = addScopesFromKey(set, allScopes, prop, fallback || prop, value);
  if (key === null) {
    return false;
  }
  if (typeof fallback !== 'undefined' && fallback !== prop) {
    key = addScopesFromKey(set, allScopes, fallback, key, value);
    if (key === null) {
      return false;
    }
  }
  return _createResolver(Array.from(set), [''], rootScopes, fallback, function () {
    return subGetTarget(resolver, prop, value);
  });
}
function addScopesFromKey(set, allScopes, key, fallback, item) {
  while (key) {
    key = addScopes(set, allScopes, key, fallback, item);
  }
  return key;
}
function subGetTarget(resolver, prop, value) {
  var parent = resolver._getTarget();
  if (!(prop in parent)) {
    parent[prop] = {};
  }
  var target = parent[prop];
  if (isArray(target) && isObject(value)) {
    // For array of objects, the object is used to store updated values
    return value;
  }
  return target || {};
}
function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
  var value;
  for (var _iterator7 = _createForOfIteratorHelperLoose(prefixes), _step7; !(_step7 = _iterator7()).done;) {
    var prefix = _step7.value;
    value = _resolve(readKey(prefix, prop), scopes);
    if (typeof value !== 'undefined') {
      return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
    }
  }
}
function _resolve(key, scopes) {
  for (var _iterator8 = _createForOfIteratorHelperLoose(scopes), _step8; !(_step8 = _iterator8()).done;) {
    var scope = _step8.value;
    if (!scope) {
      continue;
    }
    var value = scope[key];
    if (typeof value !== 'undefined') {
      return value;
    }
  }
}
function getKeysFromAllScopes(target) {
  var keys = target._keys;
  if (!keys) {
    keys = target._keys = resolveKeysFromAllScopes(target._scopes);
  }
  return keys;
}
function resolveKeysFromAllScopes(scopes) {
  var set = new Set();
  for (var _iterator9 = _createForOfIteratorHelperLoose(scopes), _step9; !(_step9 = _iterator9()).done;) {
    var scope = _step9.value;
    for (var _iterator10 = _createForOfIteratorHelperLoose(Object.keys(scope).filter(function (k) {
        return !k.startsWith('_');
      })), _step10; !(_step10 = _iterator10()).done;) {
      var key = _step10.value;
      set.add(key);
    }
  }
  return Array.from(set);
}
function _parseObjectDataRadialScale(meta, data, start, count) {
  var iScale = meta.iScale;
  var _this$_parsing$key = this._parsing.key,
    key = _this$_parsing$key === void 0 ? 'r' : _this$_parsing$key;
  var parsed = new Array(count);
  var i, ilen, index, item;
  for (i = 0, ilen = count; i < ilen; ++i) {
    index = i + start;
    item = data[index];
    parsed[i] = {
      r: iScale.parse(resolveObjectKey(item, key), index)
    };
  }
  return parsed;
}
var EPSILON = Number.EPSILON || 1e-14;
var getPoint = function getPoint(points, i) {
  return i < points.length && !points[i].skip && points[i];
};
var getValueAxis = function getValueAxis(indexAxis) {
  return indexAxis === 'x' ? 'y' : 'x';
};
function splineCurve(firstPoint, middlePoint, afterPoint, t) {
  // Props to Rob Spencer at scaled innovation for his post on splining between points
  // http://scaledinnovation.com/analytics/splines/aboutSplines.html
  // This function must also respect "skipped" points
  var previous = firstPoint.skip ? middlePoint : firstPoint;
  var current = middlePoint;
  var next = afterPoint.skip ? middlePoint : afterPoint;
  var d01 = distanceBetweenPoints(current, previous);
  var d12 = distanceBetweenPoints(next, current);
  var s01 = d01 / (d01 + d12);
  var s12 = d12 / (d01 + d12);
  // If all points are the same, s01 & s02 will be inf
  s01 = isNaN(s01) ? 0 : s01;
  s12 = isNaN(s12) ? 0 : s12;
  var fa = t * s01; // scaling factor for triangle Ta
  var fb = t * s12;
  return {
    previous: {
      x: current.x - fa * (next.x - previous.x),
      y: current.y - fa * (next.y - previous.y)
    },
    next: {
      x: current.x + fb * (next.x - previous.x),
      y: current.y + fb * (next.y - previous.y)
    }
  };
}
/**
 * Adjust tangents to ensure monotonic properties
 */
function monotoneAdjust(points, deltaK, mK) {
  var pointsLen = points.length;
  var alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
  var pointAfter = getPoint(points, 0);
  for (var i = 0; i < pointsLen - 1; ++i) {
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent || !pointAfter) {
      continue;
    }
    if (almostEquals(deltaK[i], 0, EPSILON)) {
      mK[i] = mK[i + 1] = 0;
      continue;
    }
    alphaK = mK[i] / deltaK[i];
    betaK = mK[i + 1] / deltaK[i];
    squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
    if (squaredMagnitude <= 9) {
      continue;
    }
    tauK = 3 / Math.sqrt(squaredMagnitude);
    mK[i] = alphaK * tauK * deltaK[i];
    mK[i + 1] = betaK * tauK * deltaK[i];
  }
}
function monotoneCompute(points, mK, indexAxis) {
  if (indexAxis === void 0) {
    indexAxis = 'x';
  }
  var valueAxis = getValueAxis(indexAxis);
  var pointsLen = points.length;
  var delta, pointBefore, pointCurrent;
  var pointAfter = getPoint(points, 0);
  for (var i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent) {
      continue;
    }
    var iPixel = pointCurrent[indexAxis];
    var vPixel = pointCurrent[valueAxis];
    if (pointBefore) {
      delta = (iPixel - pointBefore[indexAxis]) / 3;
      pointCurrent["cp1" + indexAxis] = iPixel - delta;
      pointCurrent["cp1" + valueAxis] = vPixel - delta * mK[i];
    }
    if (pointAfter) {
      delta = (pointAfter[indexAxis] - iPixel) / 3;
      pointCurrent["cp2" + indexAxis] = iPixel + delta;
      pointCurrent["cp2" + valueAxis] = vPixel + delta * mK[i];
    }
  }
}
/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */
function splineCurveMonotone(points, indexAxis) {
  if (indexAxis === void 0) {
    indexAxis = 'x';
  }
  var valueAxis = getValueAxis(indexAxis);
  var pointsLen = points.length;
  var deltaK = Array(pointsLen).fill(0);
  var mK = Array(pointsLen);
  // Calculate slopes (deltaK) and initialize tangents (mK)
  var i, pointBefore, pointCurrent;
  var pointAfter = getPoint(points, 0);
  for (i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent) {
      continue;
    }
    if (pointAfter) {
      var slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
      // In the case of two points that appear at the same x pixel, slopeDeltaX is 0
      deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
    }
    mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
  }
  monotoneAdjust(points, deltaK, mK);
  monotoneCompute(points, mK, indexAxis);
}
function capControlPoint(pt, min, max) {
  return Math.max(Math.min(pt, max), min);
}
function capBezierPoints(points, area) {
  var i, ilen, point, inArea, inAreaPrev;
  var inAreaNext = _isPointInArea(points[0], area);
  for (i = 0, ilen = points.length; i < ilen; ++i) {
    inAreaPrev = inArea;
    inArea = inAreaNext;
    inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
    if (!inArea) {
      continue;
    }
    point = points[i];
    if (inAreaPrev) {
      point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
      point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
    }
    if (inAreaNext) {
      point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
      point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
    }
  }
}
/**
 * @private
 */
function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
  var i, ilen, point, controlPoints;
  // Only consider points that are drawn in case the spanGaps option is used
  if (options.spanGaps) {
    points = points.filter(function (pt) {
      return !pt.skip;
    });
  }
  if (options.cubicInterpolationMode === 'monotone') {
    splineCurveMonotone(points, indexAxis);
  } else {
    var prev = loop ? points[points.length - 1] : points[0];
    for (i = 0, ilen = points.length; i < ilen; ++i) {
      point = points[i];
      controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
      point.cp1x = controlPoints.previous.x;
      point.cp1y = controlPoints.previous.y;
      point.cp2x = controlPoints.next.x;
      point.cp2y = controlPoints.next.y;
      prev = point;
    }
  }
  if (options.capBezierPoints) {
    capBezierPoints(points, area);
  }
}

/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 * @typedef { import('../core/core.controller.js').default } dom.Chart
 * @typedef { import('../../types').ChartEvent } ChartEvent
 */ /**
    * @private
    */
function _isDomSupported() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * @private
 */
function _getParentNode(domNode) {
  var parent = domNode.parentNode;
  if (parent && parent.toString() === '[object ShadowRoot]') {
    parent = parent.host;
  }
  return parent;
}
/**
 * convert max-width/max-height values that may be percentages into a number
 * @private
 */
function parseMaxStyle(styleValue, node, parentProperty) {
  var valueInPixels;
  if (typeof styleValue === 'string') {
    valueInPixels = parseInt(styleValue, 10);
    if (styleValue.indexOf('%') !== -1) {
      // percentage * size in dimension
      valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    }
  } else {
    valueInPixels = styleValue;
  }
  return valueInPixels;
}
var getComputedStyle = function getComputedStyle(element) {
  return element.ownerDocument.defaultView.getComputedStyle(element, null);
};
function getStyle(el, property) {
  return getComputedStyle(el).getPropertyValue(property);
}
var positions = ['top', 'right', 'bottom', 'left'];
function getPositionedStyle(styles, style, suffix) {
  var result = {};
  suffix = suffix ? '-' + suffix : '';
  for (var i = 0; i < 4; i++) {
    var pos = positions[i];
    result[pos] = parseFloat(styles[style + '-' + pos + suffix]) || 0;
  }
  result.width = result.left + result.right;
  result.height = result.top + result.bottom;
  return result;
}
var useOffsetPos = function useOffsetPos(x, y, target) {
  return (x > 0 || y > 0) && (!target || !target.shadowRoot);
};
/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */
function getCanvasPosition(e, canvas) {
  var touches = e.touches;
  var source = touches && touches.length ? touches[0] : e;
  var offsetX = source.offsetX,
    offsetY = source.offsetY;
  var box = false;
  var x, y;
  if (useOffsetPos(offsetX, offsetY, e.target)) {
    x = offsetX;
    y = offsetY;
  } else {
    var rect = canvas.getBoundingClientRect();
    x = source.clientX - rect.left;
    y = source.clientY - rect.top;
    box = true;
  }
  return {
    x: x,
    y: y,
    box: box
  };
}
/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */
function getRelativePosition(event, chart) {
  if ('native' in event) {
    return event;
  }
  var canvas = chart.canvas,
    currentDevicePixelRatio = chart.currentDevicePixelRatio;
  var style = getComputedStyle(canvas);
  var borderBox = style.boxSizing === 'border-box';
  var paddings = getPositionedStyle(style, 'padding');
  var borders = getPositionedStyle(style, 'border', 'width');
  var _getCanvasPosition = getCanvasPosition(event, canvas),
    x = _getCanvasPosition.x,
    y = _getCanvasPosition.y,
    box = _getCanvasPosition.box;
  var xOffset = paddings.left + (box && borders.left);
  var yOffset = paddings.top + (box && borders.top);
  var width = chart.width,
    height = chart.height;
  if (borderBox) {
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }
  return {
    x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
    y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
  };
}
function getContainerSize(canvas, width, height) {
  var maxWidth, maxHeight;
  if (width === undefined || height === undefined) {
    var container = canvas && _getParentNode(canvas);
    if (!container) {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
    } else {
      var rect = container.getBoundingClientRect(); // this is the border box of the container
      var containerStyle = getComputedStyle(container);
      var containerBorder = getPositionedStyle(containerStyle, 'border', 'width');
      var containerPadding = getPositionedStyle(containerStyle, 'padding');
      width = rect.width - containerPadding.width - containerBorder.width;
      height = rect.height - containerPadding.height - containerBorder.height;
      maxWidth = parseMaxStyle(containerStyle.maxWidth, container, 'clientWidth');
      maxHeight = parseMaxStyle(containerStyle.maxHeight, container, 'clientHeight');
    }
  }
  return {
    width: width,
    height: height,
    maxWidth: maxWidth || INFINITY,
    maxHeight: maxHeight || INFINITY
  };
}
var round1 = function round1(v) {
  return Math.round(v * 10) / 10;
};
// eslint-disable-next-line complexity
function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
  var style = getComputedStyle(canvas);
  var margins = getPositionedStyle(style, 'margin');
  var maxWidth = parseMaxStyle(style.maxWidth, canvas, 'clientWidth') || INFINITY;
  var maxHeight = parseMaxStyle(style.maxHeight, canvas, 'clientHeight') || INFINITY;
  var containerSize = getContainerSize(canvas, bbWidth, bbHeight);
  var width = containerSize.width,
    height = containerSize.height;
  if (style.boxSizing === 'content-box') {
    var borders = getPositionedStyle(style, 'border', 'width');
    var paddings = getPositionedStyle(style, 'padding');
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }
  width = Math.max(0, width - margins.width);
  height = Math.max(0, aspectRatio ? width / aspectRatio : height - margins.height);
  width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
  height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
  if (width && !height) {
    // https://github.com/chartjs/Chart.js/issues/4659
    // If the canvas has width, but no height, default to aspectRatio of 2 (canvas default)
    height = round1(width / 2);
  }
  var maintainHeight = bbWidth !== undefined || bbHeight !== undefined;
  if (maintainHeight && aspectRatio && containerSize.height && height > containerSize.height) {
    height = containerSize.height;
    width = round1(Math.floor(height * aspectRatio));
  }
  return {
    width: width,
    height: height
  };
}
/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */
function retinaScale(chart, forceRatio, forceStyle) {
  var pixelRatio = forceRatio || 1;
  var deviceHeight = Math.floor(chart.height * pixelRatio);
  var deviceWidth = Math.floor(chart.width * pixelRatio);
  chart.height = Math.floor(chart.height);
  chart.width = Math.floor(chart.width);
  var canvas = chart.canvas;
  // If no style has been set on the canvas, the render size is used as display size,
  // making the chart visually bigger, so let's enforce it to the "correct" values.
  // See https://github.com/chartjs/Chart.js/issues/3575
  if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
    canvas.style.height = chart.height + "px";
    canvas.style.width = chart.width + "px";
  }
  if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
    chart.currentDevicePixelRatio = pixelRatio;
    canvas.height = deviceHeight;
    canvas.width = deviceWidth;
    chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    return true;
  }
  return false;
}
/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */
var supportsEventListenerOptions = function () {
  var passiveSupported = false;
  try {
    var options = {
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    if (_isDomSupported()) {
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    }
  } catch (e) {
    // continue regardless of error
  }
  return passiveSupported;
}();
/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */
function readUsedSize(element, property) {
  var value = getStyle(element, property);
  var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
  return matches ? +matches[1] : undefined;
}

/**
 * @private
 */
function _pointInLine(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: p1.y + t * (p2.y - p1.y)
  };
}
/**
 * @private
 */
function _steppedInterpolation(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: mode === 'middle' ? t < 0.5 ? p1.y : p2.y : mode === 'after' ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
  };
}
/**
 * @private
 */
function _bezierInterpolation(p1, p2, t, mode) {
  var cp1 = {
    x: p1.cp2x,
    y: p1.cp2y
  };
  var cp2 = {
    x: p2.cp1x,
    y: p2.cp1y
  };
  var a = _pointInLine(p1, cp1, t);
  var b = _pointInLine(cp1, cp2, t);
  var c = _pointInLine(cp2, p2, t);
  var d = _pointInLine(a, b, t);
  var e = _pointInLine(b, c, t);
  return _pointInLine(d, e, t);
}
var getRightToLeftAdapter = function getRightToLeftAdapter(rectX, width) {
  return {
    x: function x(_x) {
      return rectX + rectX + width - _x;
    },
    setWidth: function setWidth(w) {
      width = w;
    },
    textAlign: function textAlign(align) {
      if (align === 'center') {
        return align;
      }
      return align === 'right' ? 'left' : 'right';
    },
    xPlus: function xPlus(x, value) {
      return x - value;
    },
    leftForLtr: function leftForLtr(x, itemWidth) {
      return x - itemWidth;
    }
  };
};
var getLeftToRightAdapter = function getLeftToRightAdapter() {
  return {
    x: function x(_x2) {
      return _x2;
    },
    setWidth: function setWidth(w) {},
    textAlign: function textAlign(align) {
      return align;
    },
    xPlus: function xPlus(x, value) {
      return x + value;
    },
    leftForLtr: function leftForLtr(x, _itemWidth) {
      return x;
    }
  };
};
function getRtlAdapter(rtl, rectX, width) {
  return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
}
function overrideTextDirection(ctx, direction) {
  var style, original;
  if (direction === 'ltr' || direction === 'rtl') {
    style = ctx.canvas.style;
    original = [style.getPropertyValue('direction'), style.getPropertyPriority('direction')];
    style.setProperty('direction', direction, 'important');
    ctx.prevTextDirection = original;
  }
}
function restoreTextDirection(ctx, original) {
  if (original !== undefined) {
    delete ctx.prevTextDirection;
    ctx.canvas.style.setProperty('direction', original[0], original[1]);
  }
}
function propertyFn(property) {
  if (property === 'angle') {
    return {
      between: _angleBetween,
      compare: _angleDiff,
      normalize: _normalizeAngle
    };
  }
  return {
    between: _isBetween,
    compare: function compare(a, b) {
      return a - b;
    },
    normalize: function normalize(x) {
      return x;
    }
  };
}
function normalizeSegment(_ref) {
  var start = _ref.start,
    end = _ref.end,
    count = _ref.count,
    loop = _ref.loop,
    style = _ref.style;
  return {
    start: start % count,
    end: end % count,
    loop: loop && (end - start + 1) % count === 0,
    style: style
  };
}
function getSegment(segment, points, bounds) {
  var property = bounds.property,
    startBound = bounds.start,
    endBound = bounds.end;
  var _propertyFn = propertyFn(property),
    between = _propertyFn.between,
    normalize = _propertyFn.normalize;
  var count = points.length;
  var start = segment.start,
    end = segment.end,
    loop = segment.loop;
  var i, ilen;
  if (loop) {
    start += count;
    end += count;
    for (i = 0, ilen = count; i < ilen; ++i) {
      if (!between(normalize(points[start % count][property]), startBound, endBound)) {
        break;
      }
      start--;
      end--;
    }
    start %= count;
    end %= count;
  }
  if (end < start) {
    end += count;
  }
  return {
    start: start,
    end: end,
    loop: loop,
    style: segment.style
  };
}
function _boundSegment(segment, points, bounds) {
  if (!bounds) {
    return [segment];
  }
  var property = bounds.property,
    startBound = bounds.start,
    endBound = bounds.end;
  var count = points.length;
  var _propertyFn2 = propertyFn(property),
    compare = _propertyFn2.compare,
    between = _propertyFn2.between,
    normalize = _propertyFn2.normalize;
  var _getSegment = getSegment(segment, points, bounds),
    start = _getSegment.start,
    end = _getSegment.end,
    loop = _getSegment.loop,
    style = _getSegment.style;
  var result = [];
  var inside = false;
  var subStart = null;
  var value, point, prevValue;
  var startIsBefore = function startIsBefore() {
    return between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
  };
  var endIsBefore = function endIsBefore() {
    return compare(endBound, value) === 0 || between(endBound, prevValue, value);
  };
  var shouldStart = function shouldStart() {
    return inside || startIsBefore();
  };
  var shouldStop = function shouldStop() {
    return !inside || endIsBefore();
  };
  for (var i = start, prev = start; i <= end; ++i) {
    point = points[i % count];
    if (point.skip) {
      continue;
    }
    value = normalize(point[property]);
    if (value === prevValue) {
      continue;
    }
    inside = between(value, startBound, endBound);
    if (subStart === null && shouldStart()) {
      subStart = compare(value, startBound) === 0 ? i : prev;
    }
    if (subStart !== null && shouldStop()) {
      result.push(normalizeSegment({
        start: subStart,
        end: i,
        loop: loop,
        count: count,
        style: style
      }));
      subStart = null;
    }
    prev = i;
    prevValue = value;
  }
  if (subStart !== null) {
    result.push(normalizeSegment({
      start: subStart,
      end: end,
      loop: loop,
      count: count,
      style: style
    }));
  }
  return result;
}
function _boundSegments(line, bounds) {
  var result = [];
  var segments = line.segments;
  for (var i = 0; i < segments.length; i++) {
    var sub = _boundSegment(segments[i], line.points, bounds);
    if (sub.length) {
      result.push.apply(result, sub);
    }
  }
  return result;
}
function findStartAndEnd(points, count, loop, spanGaps) {
  var start = 0;
  var end = count - 1;
  if (loop && !spanGaps) {
    while (start < count && !points[start].skip) {
      start++;
    }
  }
  while (start < count && points[start].skip) {
    start++;
  }
  start %= count;
  if (loop) {
    end += start;
  }
  while (end > start && points[end % count].skip) {
    end--;
  }
  end %= count;
  return {
    start: start,
    end: end
  };
}
function solidSegments(points, start, max, loop) {
  var count = points.length;
  var result = [];
  var last = start;
  var prev = points[start];
  var end;
  for (end = start + 1; end <= max; ++end) {
    var cur = points[end % count];
    if (cur.skip || cur.stop) {
      if (!prev.skip) {
        loop = false;
        result.push({
          start: start % count,
          end: (end - 1) % count,
          loop: loop
        });
        start = last = cur.stop ? end : null;
      }
    } else {
      last = end;
      if (prev.skip) {
        start = end;
      }
    }
    prev = cur;
  }
  if (last !== null) {
    result.push({
      start: start % count,
      end: last % count,
      loop: loop
    });
  }
  return result;
}
function _computeSegments(line, segmentOptions) {
  var points = line.points;
  var spanGaps = line.options.spanGaps;
  var count = points.length;
  if (!count) {
    return [];
  }
  var loop = !!line._loop;
  var _findStartAndEnd = findStartAndEnd(points, count, loop, spanGaps),
    start = _findStartAndEnd.start,
    end = _findStartAndEnd.end;
  if (spanGaps === true) {
    return splitByStyles(line, [{
      start: start,
      end: end,
      loop: loop
    }], points, segmentOptions);
  }
  var max = end < start ? end + count : end;
  var completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
  return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
}
function splitByStyles(line, segments, points, segmentOptions) {
  if (!segmentOptions || !segmentOptions.setContext || !points) {
    return segments;
  }
  return doSplitByStyles(line, segments, points, segmentOptions);
}
function doSplitByStyles(line, segments, points, segmentOptions) {
  var chartContext = line._chart.getContext();
  var baseStyle = readStyle(line.options);
  var datasetIndex = line._datasetIndex,
    spanGaps = line.options.spanGaps;
  var count = points.length;
  var result = [];
  var prevStyle = baseStyle;
  var start = segments[0].start;
  var i = start;
  function addStyle(s, e, l, st) {
    var dir = spanGaps ? -1 : 1;
    if (s === e) {
      return;
    }
    s += count;
    while (points[s % count].skip) {
      s -= dir;
    }
    while (points[e % count].skip) {
      e += dir;
    }
    if (s % count !== e % count) {
      result.push({
        start: s % count,
        end: e % count,
        loop: l,
        style: st
      });
      prevStyle = st;
      start = e % count;
    }
  }
  for (var _iterator11 = _createForOfIteratorHelperLoose(segments), _step11; !(_step11 = _iterator11()).done;) {
    var segment = _step11.value;
    start = spanGaps ? start : segment.start;
    var prev = points[start % count];
    var style = void 0;
    for (i = start + 1; i <= segment.end; i++) {
      var pt = points[i % count];
      style = readStyle(segmentOptions.setContext(createContext(chartContext, {
        type: 'segment',
        p0: prev,
        p1: pt,
        p0DataIndex: (i - 1) % count,
        p1DataIndex: i % count,
        datasetIndex: datasetIndex
      })));
      if (styleChanged(style, prevStyle)) {
        addStyle(start, i - 1, segment.loop, prevStyle);
      }
      prev = pt;
      prevStyle = style;
    }
    if (start < i - 1) {
      addStyle(start, i - 1, segment.loop, prevStyle);
    }
  }
  return result;
}
function readStyle(options) {
  return {
    backgroundColor: options.backgroundColor,
    borderCapStyle: options.borderCapStyle,
    borderDash: options.borderDash,
    borderDashOffset: options.borderDashOffset,
    borderJoinStyle: options.borderJoinStyle,
    borderWidth: options.borderWidth,
    borderColor: options.borderColor
  };
}
function styleChanged(style, prevStyle) {
  if (!prevStyle) {
    return false;
  }
  var cache = [];
  var replacer = function replacer(key, value) {
    if (!isPatternOrGradient(value)) {
      return value;
    }
    if (!cache.includes(value)) {
      cache.push(value);
    }
    return cache.indexOf(value);
  };
  return JSON.stringify(style, replacer) !== JSON.stringify(prevStyle, replacer);
}


/***/ }),

/***/ "./src/admin/components/LoginLogsPage.js":
/*!***********************************************!*\
  !*** ./src/admin/components/LoginLogsPage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginLogsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.js");



var LoginLogsPage = /*#__PURE__*/function (_ExtensionPage) {
  function LoginLogsPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LoginLogsPage, _ExtensionPage);
  var _proto = LoginLogsPage.prototype;
  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);
    this.selectedTimeRange = 'day'; // Default: Day
    this.selectedStartDate = null;
    this.selectedEndDate = null;
    this.selectedUser = null;
    this.graphData = null;
    //this.logs = [];
    //this.users = [];
    //this.total = [];
    this.currentPage = 1;
    this.itemsPerPage = 10;

    // Fetch data for the table and graph
    this.fetchData();
  };
  _proto.fetchData = function fetchData() {
    var _this = this;
    // Create filters based on selected options
    var url_stats = app.forum.attribute('apiUrl') + '/loginLogStats';
    var filters = [];
    var offset = (this.currentPage - 1) * this.itemsPerPage;
    if (this.selectedTimeRange) filters.push("timeRange=" + this.selectedTimeRange);
    if (this.selectedStartDate) filters.push("startDate=" + this.selectedStartDate);
    if (this.selectedEndDate) filters.push("endDate=" + this.selectedEndDate);
    if (this.selectedUser) filters.push("user=" + this.selectedUser);
    var url_logs = app.forum.attribute('apiUrl') + '/loginLogs';
    if (filters.length) url_logs += '?' + filters.join('&');
    url_logs += '&offset=' + offset;

    // Fetch logs for the table (implement similar filtering for logs if needed)
    app.request({
      method: 'GET',
      url: url_logs
    }).then(function (response) {
      _this.logs = response.data;
      m.redraw();
    });
    var url_total = app.forum.attribute('apiUrl') + '/loginLogsTotal';
    if (filters.length) url_total += '?' + filters.join('&');
    app.request({
      method: 'GET',
      url: url_total
    }).then(function (response) {
      _this.total = response.data;
      m.redraw();
    });
    app.request({
      method: 'GET',
      url: app.forum.attribute('apiUrl') + '/users'
    }).then(function (response) {
      _this.users = response.data.map(function (user) {
        return {
          id: user.id,
          username: user.attributes.username
        };
      });
      m.redraw();
    });
    if (filters.length) url_stats += '?' + filters.join('&');

    // Fetch data
    app.request({
      method: 'GET',
      url: url_stats
    }).then(function (response) {
      _this.graphData = response.data;
      m.redraw();
      _this.waitForCanvasAndCreateChart();
    });
  };
  _proto.waitForCanvasAndCreateChart = function waitForCanvasAndCreateChart() {
    var _this2 = this;
    var interval = setInterval(function () {
      var chartElement = document.getElementById('loginsChart');
      if (chartElement) {
        clearInterval(interval);
        var ctx = chartElement.getContext('2d');
        if (ctx) {
          _this2.createChart(ctx); // Call your chart creation logic
        }
      }
    }, 100); // Check every 100ms
  };
  _proto.createChart = function createChart(ctx) {
    if (!this.graphData) return;

    // Extract labels and data for the chart
    var labels = this.graphData.map(function (log) {
      return log.attributes.date;
    });
    var data = this.graphData.map(function (log) {
      return log.attributes.logins;
    });
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
    this.chartInstance = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Logins per Day',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };
  _proto.content = function content() {
    var _this3 = this;
    if (!this.users || !this.logs || !this.total) {
      return m("div", null, "Cargando..."); // Show loading while data is being fetched
    }
    console.log(this.users);
    console.log(this.logs);
    console.log(this.total);
    var totalPages = Math.ceil(this.total[0].attributes.total / this.itemsPerPage);
    var start = (this.currentPage - 1) * this.itemsPerPage;
    var end = start + this.itemsPerPage;
    var visibleLogs = this.logs.slice(start, end);
    console.log(totalPages);
    console.log(this.currentPage);
    return m("div", {
      className: "LoginLogsPage"
    }, m("div", {
      className: "container"
    }, m("h2", null, "Login Logs"), m("div", {
      style: "display: flex; gap: 10px; width: 30%; margin-bottom: 5px;"
    }, m("input", {
      type: "date",
      "class": "FormControl FormControl",
      onchange: function onchange(event) {
        _this3.selectedStartDate = event.target.value;
        _this3.fetchData();
      }
    }), m("input", {
      type: "date",
      "class": "FormControl FormControl",
      onchange: function onchange(event) {
        _this3.selectedEndDate = event.target.value;
        _this3.fetchData();
      }
    }), this.users.length > 0 && m("span", {
      "class": "Select"
    }, m("select", {
      "class": "Select-input FormControl",
      onchange: function onchange(event) {
        _this3.selectedUser = event.target.value;
        _this3.fetchData();
      }
    }, m("option", {
      value: ""
    }, "Todos los usuarios"), this.users.map(function (user) {
      return m("option", {
        value: user.id
      }, user.username);
    })))), m("table", {
      className: "DashboardWidget Widget LoginLogsTable"
    }, m("thead", null, m("tr", null, m("th", null, "Usuario"), m("th", null, "Tiempo de conexi\xF3n"), m("th", null, "Tiempo de desconexi\xF3n"))), m("tbody", null, this.logs.map(function (log) {
      return m("tr", null, m("td", null, log.attributes.username), m("td", null, log.attributes.logged_in_at), m("td", null, log.attributes.logged_out_at || 'N/A'));
    }))), m("div", {
      className: "pagination-controls"
    }, m("nav", {
      "class": "UserListPage-gridPagination"
    }, m("button", {
      onclick: function onclick() {
        _this3.currentPage = 1;
        _this3.tempPage = _this3.currentPage;
        _this3.fetchData();
      },
      disabled: this.currentPage === 1,
      "class": "Button Button--icon UserListPage-firstPageBtn hasIcon",
      type: "button",
      "aria-label": "core.admin.users.pagination.first_page_button"
    }, m("i", {
      "aria-hidden": "true",
      "class": "icon fas fa-step-backward Button-icon"
    }), m("span", {
      "class": "Button-label"
    })), m("button", {
      onclick: function onclick() {
        _this3.currentPage -= 1;
        _this3.tempPage = _this3.currentPage;
        _this3.fetchData();
      },
      disabled: this.currentPage === 1,
      "class": "Button Button--icon UserListPage-backBtn hasIcon",
      type: "button",
      "aria-label": "Previous page"
    }, m("i", {
      "aria-hidden": "true",
      "class": "icon fas fa-chevron-left Button-icon"
    }), m("span", {
      "class": "Button-label"
    })), m("span", {
      "class": "UserListPage-pageNumber"
    }, "P\xE1gina ", m("input", {
      oninput: function oninput(event) {
        _this3.tempPage = event.target.value; // Track the temporary input value
      },
      onkeydown: function onkeydown(event) {
        if (event.key === "Enter") {
          var pageNumber = parseInt(_this3.tempPage, 10); // Use the temporary value
          if (!isNaN(pageNumber)) {
            _this3.currentPage = pageNumber;
            _this3.fetchData();
          } else if (_this3.tempPage === "") {
            _this3.tempPage = null; // Allow empty input without triggering
          }
        }
      },
      type: "text",
      inputmode: "numeric",
      pattern: "[0-9]*",
      "aria-label": "Go directly to page number",
      autocomplete: "off",
      "class": "FormControl UserListPage-pageNumberInput",
      value: this.tempPage !== undefined ? this.tempPage : this.currentPage
    }), " de ", totalPages), m("button", {
      onclick: function onclick() {
        _this3.currentPage += 1;
        _this3.tempPage = _this3.currentPage;
        _this3.fetchData();
      },
      disabled: this.currentPage === totalPages,
      "class": "Button Button--icon UserListPage-nextBtn hasIcon",
      type: "button",
      "aria-label": "Next page"
    }, m("i", {
      "aria-hidden": "true",
      "class": "icon fas fa-chevron-right Button-icon"
    }), m("span", {
      "class": "Button-label"
    })), m("button", {
      onclick: function onclick() {
        _this3.currentPage = totalPages;
        _this3.tempPage = _this3.currentPage;
        _this3.fetchData();
      },
      disabled: "",
      "class": "Button Button--icon UserListPage-lastPageBtn hasIcon",
      type: "button",
      "aria-label": "core.admin.users.pagination.last_page_button"
    }, m("i", {
      "aria-hidden": "true",
      "class": "icon fas fa-step-forward Button-icon"
    }), m("span", {
      "class": "Button-label"
    })))), m("h2", null, "Logins Chart"), m("div", null, m("canvas", {
      id: "loginsChart"
    }))));
  };
  return LoginLogsPage;
}(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default.a);


/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_admin_components_StatisticsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/components/StatisticsPage */ "flarum/admin/components/StatisticsPage");
/* harmony import */ var flarum_admin_components_StatisticsPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_StatisticsPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LoginLogsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LoginLogsPage */ "./src/admin/components/LoginLogsPage.js");



flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('hospital-clinico-puq-login-logs', function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default.a.extensionData["for"]('hospital-clinico-puq-login-logs').registerPage(_components_LoginLogsPage__WEBPACK_IMPORTED_MODULE_2__["default"]);
  console.log('Login Logs admin extension asdinitialized');
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/admin/components/StatisticsPage":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/StatisticsPage']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['admin/components/StatisticsPage'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map
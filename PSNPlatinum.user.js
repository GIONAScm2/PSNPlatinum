// ==UserScript==
// @name         PSNPlatinum
// @author       GIONAScm2
// @run-at       document-start
// @namespace    https://github.com/GIONAScm2/PSNPlatinum
// @description  Improves PSNProfiles so Sly doesn't have to.
// @version      3.1.2
// @downloadURL  https://github.com/GIONAScm2/PSNPlatinum/raw/main/PSNPlatinum.user.js
// @updateURL    https://github.com/GIONAScm2/PSNPlatinum/raw/main/PSNPlatinum.user.js	
// @match        https://*.psnprofiles.com/*
// @noframes
// @grant        unsafeWindow
// @grant        window.onurlchange
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.addValueChangeListener
// @grant        GM.removeValueChangeListener
// @grant        GM.xmlHttpRequest
// @grant        GM.notification
// @grant        GM.listValues
// ==/UserScript==
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api),
/* harmony export */   "config": () => (/* binding */ config$1),
/* harmony export */   "counter": () => (/* binding */ counter),
/* harmony export */   "dom": () => (/* binding */ dom$1),
/* harmony export */   "findIconDefinition": () => (/* binding */ findIconDefinition$1),
/* harmony export */   "icon": () => (/* binding */ icon),
/* harmony export */   "layer": () => (/* binding */ layer),
/* harmony export */   "library": () => (/* binding */ library$1),
/* harmony export */   "noAuto": () => (/* binding */ noAuto$1),
/* harmony export */   "parse": () => (/* binding */ parse$1),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "toHtml": () => (/* binding */ toHtml$1)
/* harmony export */ });
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _wrapRegExp() {
  _wrapRegExp = function (re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };

  var _super = RegExp.prototype,
      _groups = new WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);

    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
  }

  function buildGroups(result, re) {
    var g = _groups.get(re);

    return Object.keys(g).reduce(function (groups, name) {
      return groups[name] = result[g[name]], groups;
    }, Object.create(null));
  }

  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    return result && (result.groups = buildGroups(result, this)), result;
  }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if ("string" == typeof substitution) {
      var groups = _groups.get(this);

      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    }

    if ("function" == typeof substitution) {
      var _this = this;

      return _super[Symbol.replace].call(this, str, function () {
        var args = arguments;
        return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }

    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'fa-solid': 'solid',
  'far': 'regular',
  'fa-regular': 'regular',
  'fal': 'light',
  'fa-light': 'light',
  'fat': 'thin',
  'fa-thin': 'thin',
  'fad': 'duotone',
  'fa-duotone': 'duotone',
  'fab': 'brands',
  'fa-brands': 'brands',
  'fak': 'kit',
  'fa-kit': 'kit',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'thin': 'fat',
  'duotone': 'fad',
  'brands': 'fab',
  'kit': 'fak'
};
var PREFIX_TO_LONG_STYLE = {
  'fab': 'fa-brands',
  'fad': 'fa-duotone',
  'fak': 'fa-kit',
  'fal': 'fa-light',
  'far': 'fa-regular',
  'fas': 'fa-solid',
  'fat': 'fa-thin'
};
var LONG_STYLE_TO_PREFIX = {
  'fa-brands': 'fab',
  'fa-duotone': 'fad',
  'fa-kit': 'fak',
  'fa-light': 'fal',
  'fa-regular': 'far',
  'fa-solid': 'fas',
  'fa-thin': 'fat'
};
var ICON_SELECTION_SYNTAX_PATTERN = /fa[srltdbk\-\ ]/; // eslint-disable-line no-useless-escape

var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal',
  '100': 'fat'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'duotone-group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = [].concat(_toConsumableArray(Object.keys(STYLE_TO_PREFIX)), ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'beat-fade', 'bounce', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'shake', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  styleDefault: 'solid',
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread2(_objectSpread2({}, _default), initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;
var config = {};
Object.keys(_config).forEach(function (key) {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function set(val) {
      _config[key] = val;

      _onChangeCb.forEach(function (cb) {
        return cb(config);
      });
    },
    get: function get() {
      return _config[key];
    }
  });
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);

  return function () {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Solid\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Regular\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Light\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Thin\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}";

function css() {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var _cssInserted = false;

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}

var InjectCSS = {
  mixout: function mixout() {
    return {
      dom: {
        css: css,
        insertCss: ensureCss
      }
    };
  },
  hooks: function hooks() {
    return {
      beforeDOMElementCreation: function beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg: function beforeI2svg() {
        ensureCss();
      }
    };
  }
};

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

/**
 * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
 *
 * Copyright Mathias Bynens <https://mathiasbynens.be/>

 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;

  while (counter < length) {
    var value = string.charCodeAt(counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      var extra = string.charCodeAt(counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // eslint-disable-line eqeqeq
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
}

function toHex(unicode) {
  var decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
  var size = string.length;
  var first = string.charCodeAt(index);
  var second;

  if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
    second = string.charCodeAt(index + 1);

    if (second >= 0xDC00 && second <= 0xDFFF) {
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }

  return first;
}

function normalizeIcons(icons) {
  return Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = normalizeIcons(icons);

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll ease the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var duotonePathRe = [/*#__PURE__*/_wrapRegExp(/path d="((?:(?!")[\s\S])+)".*path d="((?:(?!")[\s\S])+)"/, {
  d1: 1,
  d2: 2
}), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)".*path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
  cls1: 1,
  d1: 2,
  cls2: 3,
  d2: 4
}), /*#__PURE__*/_wrapRegExp(/path class="((?:(?!")[\s\S])+)".*d="((?:(?!")[\s\S])+)"/, {
  cls1: 1,
  d1: 2
})];

var styles = namespace.styles,
    shims = namespace.shims;
var LONG_STYLE = Object.values(PREFIX_TO_LONG_STYLE);
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
var PREFIXES = Object.keys(PREFIX_TO_STYLE);

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}

function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'number';
      });
      aliases.forEach(function (alias) {
        acc[alias.toString(16)] = iconName;
      });
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    acc[iconName] = iconName;

    if (icon[2]) {
      var aliases = icon[2].filter(function (a) {
        return typeof a === 'string';
      });
      aliases.forEach(function (alias) {
        acc[alias] = iconName;
      });
    }

    return acc;
  });
  _byAlias = lookup(function (acc, icon, iconName) {
    var aliases = icon[2];
    acc[iconName] = iconName;
    aliases.forEach(function (alias) {
      acc[alias] = iconName;
    });
    return acc;
  }); // If we have a Kit, we can't determine if regular is available since we
  // could be auto-fetching it. We'll have to assume that it is available.

  var hasRegular = 'far' in styles || config.autoFetchSvg;
  var shimLookups = reduce(shims, function (acc, shim) {
    var maybeNameMaybeUnicode = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    if (typeof maybeNameMaybeUnicode === 'string') {
      acc.names[maybeNameMaybeUnicode] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    if (typeof maybeNameMaybeUnicode === 'number') {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix: prefix,
        iconName: iconName
      };
    }

    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault);
};
onChange(function (c) {
  _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault);
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  var oldUnicode = _byOldUnicode[unicode];
  var newUnicode = byUnicode('fas', unicode);
  return oldUnicode || (newUnicode ? {
    prefix: 'fas',
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalPrefix(styleOrPrefix) {
  var style = PREFIX_TO_STYLE[styleOrPrefix];
  var prefix = STYLE_TO_PREFIX[styleOrPrefix] || STYLE_TO_PREFIX[style];
  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  return prefix || defined || null;
}
function getCanonicalIcon(values) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$skipLookups = params.skipLookups,
      skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
  var givenPrefix = null;
  var canonical = values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles[cls]) {
      cls = LONG_STYLE.includes(cls) ? LONG_STYLE_TO_PREFIX[cls] : cls;
      givenPrefix = cls;
      acc.prefix = cls;
    } else if (PREFIXES.indexOf(cls) > -1) {
      givenPrefix = cls;
      acc.prefix = getCanonicalPrefix(cls);
    } else if (iconName) {
      acc.iconName = iconName;
    } else if (cls !== config.replacementClass) {
      acc.rest.push(cls);
    }

    if (!skipLookups && acc.prefix && acc.iconName) {
      var shim = givenPrefix === 'fa' ? byOldName(acc.iconName) : {};
      var aliasIconName = byAlias(acc.prefix, acc.iconName);

      if (shim.prefix) {
        givenPrefix = null;
      }

      acc.iconName = shim.iconName || aliasIconName || acc.iconName;
      acc.prefix = shim.prefix || acc.prefix;

      if (acc.prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
        // Allow a fallback from the regular style to solid if regular is not available
        // but only if we aren't auto-fetching SVGs
        acc.prefix = 'fas';
      }
    }

    return acc;
  }, emptyCanonicalIcon());

  if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
    // The fa prefix is not canonical. So if it has made it through until this point
    // we will shift it to the correct prefix.
    canonical.prefix = getDefaultUsablePrefix() || 'fas';
  }

  return canonical;
}

var Library = /*#__PURE__*/function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]);
        var longPrefix = PREFIX_TO_LONG_STYLE[key];
        if (longPrefix) defineIcons(longPrefix, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        var aliases = icon[2];
        if (!additions[prefix]) additions[prefix] = {};

        if (aliases.length > 0) {
          aliases.forEach(function (alias) {
            if (typeof alias === 'string') {
              additions[prefix][alias] = icon;
            }
          });
        }

        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref) {
  var obj = _ref.mixoutsTo;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(function (k) {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });

  _plugins.forEach(function (plugin) {
    var mixout = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout).forEach(function (tk) {
      if (typeof mixout[tk] === 'function') {
        obj[tk] = mixout[tk];
      }

      if (_typeof(mixout[tk]) === 'object') {
        Object.keys(mixout[tk]).forEach(function (sk) {
          if (!obj[tk]) {
            obj[tk] = {};
          }

          obj[tk][sk] = mixout[tk][sk];
        });
      }
    });

    if (plugin.hooks) {
      var hooks = plugin.hooks();
      Object.keys(hooks).forEach(function (hook) {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }

        _hooks[hook].push(hooks[hook]);
      });
    }

    if (plugin.provides) {
      plugin.provides(providers);
    }
  });

  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    accumulator = hookFn.apply(null, [accumulator].concat(args)); // eslint-disable-line no-useless-call
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    hookFn.apply(null, args);
  });
  return undefined;
}
function callProvided() {
  var hook = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : undefined;
}

function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === 'fa') {
    iconLookup.prefix = 'fas';
  }

  var iconName = iconLookup.iconName;
  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks('noAuto');
};
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      callHooks('beforeI2svg', params);
      callProvided('pseudoElements2svg', params);
      return callProvided('i2svg', params);
    } else {
      return Promise.reject('Operation requires a DOM of some kind.');
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      callHooks('watch', params);
    });
  }
};
var parse = {
  icon: function icon(_icon) {
    if (_icon === null) {
      return null;
    }

    if (_typeof(_icon) === 'object' && _icon.prefix && _icon.iconName) {
      return {
        prefix: _icon.prefix,
        iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
      };
    }

    if (Array.isArray(_icon) && _icon.length === 2) {
      var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
      var prefix = getCanonicalPrefix(_icon[0]);
      return {
        prefix: prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }

    if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.familyPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }

    if (typeof _icon === 'string') {
      var _prefix = getDefaultUsablePrefix();

      return {
        prefix: _prefix,
        iconName: byAlias(_prefix, _icon) || _icon
      };
    }
  }
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  parse: parse,
  library: library,
  findIconDefinition: findIconDefinition,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};

function domVariants(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : ''].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) {
    content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }

  var args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
  });

  var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
    children: [],
    attributes: {}
  } : callProvided('generateAbstractIcon', args) || {
    children: [],
    attributes: {}
  },
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread2({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    'title': title
  } : {}), {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var styles$1 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};

function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
  }
}

function findIcon(iconName, prefix) {
  var givenPrefix = prefix;

  if (prefix === 'fa' && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }

  return new Promise(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: callProvided('missingIconAbstract') || {}
    };

    if (givenPrefix === 'fa') {
      var shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }

    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      var icon = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
    }));
  });
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"6.1.1\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function hasPrefixAndIcon(node) {
  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon;
}

function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

function createElementNS(tag) {
  return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
}

function createElement(tag) {
  return DOCUMENT.createElement(tag);
}

function convertSVG(abstractObj) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$ceFn = params.ceFn,
      ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;

  if (typeof abstractObj === 'string') {
    return DOCUMENT.createTextNode(abstractObj);
  }

  var tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function (key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  var children = abstractObj.children || [];
  children.forEach(function (child) {
    tag.appendChild(convertSVG(child, {
      ceFn: ceFn
    }));
  });
  return tag;
}

function nodeAsComment(node) {
  var comment = " ".concat(node.outerHTML, " ");
  /* BEGIN.ATTRIBUTION */

  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  /* END.ATTRIBUTION */

  return comment;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];

    if (node.parentNode) {
      mutation[1].forEach(function (abstract) {
        node.parentNode.insertBefore(convertSVG(abstract), node);
      });

      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        var comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.id;

    if (abstract[0].attributes.class) {
      var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }

        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      abstract[0].attributes.class = splitClasses.toSvg.join(' ');

      if (splitClasses.toNode.length === 0) {
        node.removeAttribute('class');
      } else {
        node.setAttribute('class', splitClasses.toNode.join(' '));
      }
    }

    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var _options$treeCallback = options.treeCallback,
      treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
      _options$nodeCallback = options.nodeCallback,
      nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
      _options$pseudoElemen = options.pseudoElementsCallback,
      pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    var defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.iconName && val.prefix) {
    return val;
  }

  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    styleParser: true
  };

  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraAttributes = attributesParser(node);
  var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
  var extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}

var styles$2 = namespace.styles;

function generateMutation(node) {
  var nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided('generateLayersText', node, nodeMeta);
  } else {
    return callProvided('generateSvgReplacementMutation', node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$2);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return Promise.resolve();
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e.name === 'MissingIcon') {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new Promise(function (resolve, reject) {
    Promise.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function (e) {
      mark();
      reject(e);
    });
  });
}

function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask: mask
    }));
  };
}

var render = function render(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return domVariants(_objectSpread2({
    type: 'icon'
  }, iconDefinition), function () {
    callHooks('beforeDOMElementCreation', {
      iconDefinition: iconDefinition,
      params: params
    });

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
};
var ReplaceElements = {
  mixout: function mixout() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.i2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;
      return onTree(node, callback);
    };

    providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
      var iconName = nodeMeta.iconName,
          title = nodeMeta.title,
          titleId = nodeMeta.titleId,
          prefix = nodeMeta.prefix,
          transform = nodeMeta.transform,
          symbol = nodeMeta.symbol,
          mask = nodeMeta.mask,
          maskId = nodeMeta.maskId,
          extra = nodeMeta.extra;
      return new Promise(function (resolve, reject) {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              main = _ref2[0],
              mask = _ref2[1];

          resolve([node, makeInlineSvgAbstract({
            icons: {
              main: main,
              mask: mask
            },
            prefix: prefix,
            iconName: iconName,
            transform: transform,
            symbol: symbol,
            maskId: maskId,
            title: title,
            titleId: titleId,
            extra: extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };

    providers$$1.generateAbstractIcon = function (_ref3) {
      var children = _ref3.children,
          attributes = _ref3.attributes,
          main = _ref3.main,
          transform = _ref3.transform,
          styles = _ref3.styles;
      var styleString = joinStyles(styles);

      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }

      var nextChild;

      if (transformIsMeaningful(transform)) {
        nextChild = callProvided('generateAbstractTransformGrouping', {
          main: main,
          transform: transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }

      children.push(nextChild || main.icon);
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};

var Layers = {
  mixout: function mixout() {
    return {
      layer: function layer(assembler) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes;
        return domVariants({
          type: 'layer'
        }, function () {
          callHooks('beforeDOMElementCreation', {
            assembler: assembler,
            params: params
          });
          var children = [];
          assembler(function (args) {
            Array.isArray(args) ? args.map(function (a) {
              children = children.concat(a.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: 'span',
            attributes: {
              class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
            },
            children: children
          }];
        });
      }
    };
  }
};

var LayersCounter = {
  mixout: function mixout() {
    return {
      counter: function counter(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'counter',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  }
};

var LayersText = {
  mixout: function mixout() {
    return {
      text: function text(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$transform = params.transform,
            transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
            _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'text',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersTextAbstract({
            content: content,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.generateLayersText = function (node, nodeMeta) {
      var title = nodeMeta.title,
          transform = nodeMeta.transform,
          extra = nodeMeta.extra;
      var width = null;
      var height = null;

      if (IS_IE) {
        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        var boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }

      if (config.autoA11y && !title) {
        extra.attributes['aria-hidden'] = 'true';
      }

      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width: width,
        height: height,
        transform: transform,
        title: title,
        extra: extra,
        watchable: true
      })]);
    };
  }
};

var CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
function hexValueFromContent(content) {
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
  var codePoint = codePointAt(cleaned, 0);
  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new Promise(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var _content = styles.getPropertyValue('content');

      var prefix = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];

      var _hexValueFromContent = hexValueFromContent(_content),
          hexValue = _hexValueFromContent.value,
          isSecondary = _hexValueFromContent.isSecondary;

      var isV4 = fontFamily[0].startsWith('FontAwesome');
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName;

      if (isV4) {
        var iconName4 = byOldUnicode(hexValue);

        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      } // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
      // already done so with the same prefix and iconName


      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === '::before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements(root) {
  if (!IS_DOM) return;
  return new Promise(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    Promise.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var PseudoElements = {
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.pseudoElements2svg = function (params) {
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};

var _unwatched = false;
var MutationObserver$1 = {
  mixout: function mixout() {
    return {
      dom: {
        unwatch: function unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      bootstrap: function bootstrap() {
        observe(chainHooks('mutationObserverCallbacks', {}));
      },
      noAuto: function noAuto() {
        disconnect();
      },
      watch: function watch(params) {
        var observeMutationsRoot = params.observeMutationsRoot;

        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks('mutationObserverCallbacks', {
            observeMutationsRoot: observeMutationsRoot
          }));
        }
      }
    };
  }
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
    var parts = n.toLowerCase().split('-');
    var first = parts[0];
    var rest = parts.slice(1).join('-');

    if (first && rest === 'h') {
      acc.flipX = true;
      return acc;
    }

    if (first && rest === 'v') {
      acc.flipY = true;
      return acc;
    }

    rest = parseFloat(rest);

    if (isNaN(rest)) {
      return acc;
    }

    switch (first) {
      case 'grow':
        acc.size = acc.size + rest;
        break;

      case 'shrink':
        acc.size = acc.size - rest;
        break;

      case 'left':
        acc.x = acc.x - rest;
        break;

      case 'right':
        acc.x = acc.x + rest;
        break;

      case 'up':
        acc.y = acc.y - rest;
        break;

      case 'down':
        acc.y = acc.y + rest;
        break;

      case 'rotate':
        acc.rotate = acc.rotate + rest;
        break;
    }

    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout: function mixout() {
    return {
      parse: {
        transform: function transform(transformString) {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var transformString = node.getAttribute('data-fa-transform');

        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }

        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractTransformGrouping = function (_ref) {
      var main = _ref.main,
          transform = _ref.transform,
          containerWidth = _ref.containerWidth,
          iconWidth = _ref.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      var operations = {
        outer: outer,
        inner: inner,
        path: path
      };
      return {
        tag: 'g',
        attributes: _objectSpread2({}, operations.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread2({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

var Masks = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var maskData = node.getAttribute('data-fa-mask');
        var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
          return i.trim();
        }));

        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }

        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute('data-fa-mask-id');
        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractMask = function (_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          mask = _ref.mask,
          explicitMaskId = _ref.maskId,
          transform = _ref.transform;
      var mainWidth = main.width,
          mainPath = main.icon;
      var maskWidth = mask.width,
          maskPath = mask.icon;
      var trans = transformForSvg({
        transform: transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: 'rect',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          fill: 'white'
        })
      };
      var maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      var maskInnerGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.inner),
        children: [fillBlack(_objectSpread2({
          tag: mainPath.tag,
          attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      var maskOuterGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      var maskTag = {
        tag: 'mask',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: 'defs',
        children: [{
          tag: 'clipPath',
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: 'rect',
        attributes: _objectSpread2({
          fill: 'currentColor',
          'clip-path': "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};

var MissingIconIndicator = {
  provides: function provides(providers) {
    var reduceMotion = false;

    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    providers.missingIconAbstract = function () {
      var gChildren = [];
      var FILL = {
        fill: 'currentColor'
      };
      var ANIMATION_BASE = {
        attributeType: 'XML',
        repeatCount: 'indefinite',
        dur: '2s'
      }; // Ring

      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
        })
      });

      var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
        attributeName: 'opacity'
      });

      var dot = {
        tag: 'circle',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          cx: '256',
          cy: '364',
          r: '28'
        }),
        children: []
      };

      if (!reduceMotion) {
        dot.children.push({
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: 'r',
            values: '28;14;28;28;14;28;'
          })
        }, {
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;1;1;0;1;'
          })
        });
      }

      gChildren.push(dot);
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          opacity: '1',
          d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        children: reduceMotion ? [] : [{
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;0;0;0;1;'
          })
        }]
      });

      if (!reduceMotion) {
        // Exclamation
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '0',
            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
          }),
          children: [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '0;0;1;1;0;0;'
            })
          }]
        });
      }

      return {
        tag: 'g',
        attributes: {
          'class': 'missing'
        },
        children: gChildren
      };
    };
  }
};

var SvgSymbols = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var symbolData = node.getAttribute('data-fa-symbol');
        var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
        accumulator['symbol'] = symbol;
        return accumulator;
      }
    };
  }
};

var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];

registerPlugins(plugins, {
  mixoutsTo: api
});
var noAuto$1 = api.noAuto;
var config$1 = api.config;
var library$1 = api.library;
var dom$1 = api.dom;
var parse$1 = api.parse;
var findIconDefinition$1 = api.findIconDefinition;
var toHtml$1 = api.toHtml;
var icon = api.icon;
var layer = api.layer;
var text = api.text;
var counter = api.counter;




/***/ }),

/***/ "./node_modules/@fortawesome/free-regular-svg-icons/faMinusSquare.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var source = __webpack_require__("./node_modules/@fortawesome/free-regular-svg-icons/faSquareMinus.js");
exports.definition = {
  prefix: source.prefix,
  iconName: source.iconName,
  icon: [
    source.width,
    source.height,
    source.aliases,
    source.unicode,
    source.svgPathData
  ]};

exports.faMinusSquare = exports.definition;
exports.prefix = source.prefix;
exports.iconName = source.iconName;
exports.width = source.width;
exports.height = source.height;
exports.ligatures = source.aliases;
exports.unicode = source.unicode;
exports.svgPathData = source.svgPathData;
exports.aliases = source.aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/free-regular-svg-icons/faPlusSquare.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var source = __webpack_require__("./node_modules/@fortawesome/free-regular-svg-icons/faSquarePlus.js");
exports.definition = {
  prefix: source.prefix,
  iconName: source.iconName,
  icon: [
    source.width,
    source.height,
    source.aliases,
    source.unicode,
    source.svgPathData
  ]};

exports.faPlusSquare = exports.definition;
exports.prefix = source.prefix;
exports.iconName = source.iconName;
exports.width = source.width;
exports.height = source.height;
exports.ligatures = source.aliases;
exports.unicode = source.unicode;
exports.svgPathData = source.svgPathData;
exports.aliases = source.aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/free-regular-svg-icons/faSquareMinus.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'far';
var iconName = 'square-minus';
var width = 448;
var height = 512;
var aliases = [61767,"minus-square"];
var unicode = 'f146';
var svgPathData = 'M312 232C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H312zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faSquareMinus = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/free-regular-svg-icons/faSquarePlus.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'far';
var iconName = 'square-plus';
var width = 448;
var height = 512;
var aliases = [61846,"plus-square"];
var unicode = 'f0fe';
var svgPathData = 'M200 344V280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H200V168C200 154.7 210.7 144 224 144C237.3 144 248 154.7 248 168V232H312C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H248V344C248 357.3 237.3 368 224 368C210.7 368 200 357.3 200 344zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faSquarePlus = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faBoxes.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var source = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/faBoxesStacked.js");
exports.definition = {
  prefix: source.prefix,
  iconName: source.iconName,
  icon: [
    source.width,
    source.height,
    source.aliases,
    source.unicode,
    source.svgPathData
  ]};

exports.faBoxes = exports.definition;
exports.prefix = source.prefix;
exports.iconName = source.iconName;
exports.width = source.width;
exports.height = source.height;
exports.ligatures = source.aliases;
exports.unicode = source.unicode;
exports.svgPathData = source.svgPathData;
exports.aliases = source.aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faBoxesStacked.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'boxes-stacked';
var width = 576;
var height = 512;
var aliases = [62625,"boxes","boxes-alt"];
var unicode = 'f468';
var svgPathData = 'M160 48C160 21.49 181.5 0 208 0H256V80C256 88.84 263.2 96 272 96H304C312.8 96 320 88.84 320 80V0H368C394.5 0 416 21.49 416 48V176C416 202.5 394.5 224 368 224H208C181.5 224 160 202.5 160 176V48zM96 288V368C96 376.8 103.2 384 112 384H144C152.8 384 160 376.8 160 368V288H208C234.5 288 256 309.5 256 336V464C256 490.5 234.5 512 208 512H48C21.49 512 0 490.5 0 464V336C0 309.5 21.49 288 48 288H96zM416 288V368C416 376.8 423.2 384 432 384H464C472.8 384 480 376.8 480 368V288H528C554.5 288 576 309.5 576 336V464C576 490.5 554.5 512 528 512H368C341.5 512 320 490.5 320 464V336C320 309.5 341.5 288 368 288H416z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faBoxesStacked = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faCircleInfo.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'circle-info';
var width = 512;
var height = 512;
var aliases = ["info-circle"];
var unicode = 'f05a';
var svgPathData = 'M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faCircleInfo = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faGear.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'gear';
var width = 512;
var height = 512;
var aliases = [9881,"cog"];
var unicode = 'f013';
var svgPathData = 'M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faGear = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faTrophy.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var prefix = 'fas';
var iconName = 'trophy';
var width = 576;
var height = 512;
var aliases = [127942];
var unicode = 'f091';
var svgPathData = 'M572.1 82.38C569.5 71.59 559.8 64 548.7 64h-100.8c.2422-12.45 .1078-23.7-.1559-33.02C447.3 13.63 433.2 0 415.8 0H160.2C142.8 0 128.7 13.63 128.2 30.98C127.1 40.3 127.8 51.55 128.1 64H27.26C16.16 64 6.537 71.59 3.912 82.38C3.1 85.78-15.71 167.2 37.07 245.9c37.44 55.82 100.6 95.03 187.5 117.4c18.7 4.805 31.41 22.06 31.41 41.37C256 428.5 236.5 448 212.6 448H208c-26.51 0-47.99 21.49-47.99 48c0 8.836 7.163 16 15.1 16h223.1c8.836 0 15.1-7.164 15.1-16c0-26.51-21.48-48-47.99-48h-4.644c-23.86 0-43.36-19.5-43.36-43.35c0-19.31 12.71-36.57 31.41-41.37c86.96-22.34 150.1-61.55 187.5-117.4C591.7 167.2 572.9 85.78 572.1 82.38zM77.41 219.8C49.47 178.6 47.01 135.7 48.38 112h80.39c5.359 59.62 20.35 131.1 57.67 189.1C137.4 281.6 100.9 254.4 77.41 219.8zM498.6 219.8c-23.44 34.6-59.94 61.75-109 81.22C426.9 243.1 441.9 171.6 447.2 112h80.39C528.1 135.7 526.5 178.7 498.6 219.8z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    aliases,
    unicode,
    svgPathData
  ]};

exports.faTrophy = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ "./src/index.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "monitorGames": () => (/* binding */ monitorGames)
/* harmony export */ });
/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/settings.ts");
/* harmony import */ var _modules_trophies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/trophies.ts");
/* harmony import */ var _modules_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/util.ts");
/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/game.ts");
/* harmony import */ var _modules_series__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/series.ts");
/* harmony import */ var _modules_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/Profile.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_Profile__WEBPACK_IMPORTED_MODULE_5__]);
_modules_Profile__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const sp = _modules_util__WEBPACK_IMPORTED_MODULE_2__._page.sp; //temp until refactor
console.time('Settings Loaded');
const _settings = await _modules_settings__WEBPACK_IMPORTED_MODULE_0__["default"].init();
console.timeEnd('Settings Loaded');
// _settings.stacks = [];
// await _settings.save();
_modules_settings__WEBPACK_IMPORTED_MODULE_0__._load.userBar.then(el => {
    _settings.appendSettingsMenu();
});
console.time('PSNPlatinum script execution');
_modules_settings__WEBPACK_IMPORTED_MODULE_0__._load.footer.then(el => {
    const games = _modules_game__WEBPACK_IMPORTED_MODULE_3__["default"].getNodes().map(node => new _modules_game__WEBPACK_IMPORTED_MODULE_3__["default"](node));
});
/**
 * GLOBAL ENHANCEMENTS
 */
// Improves search bars
_modules_settings__WEBPACK_IMPORTED_MODULE_0__._load.search.then(searchBarEnhancer);
// Add Series tab to nav bar
(0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.waitForEl)('div.navigation.md-show').then(navBar => {
    const seriesTab = (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`li`, {}, (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`a`, { href: `https://psnprofiles.com/series` }, `Series`));
    document.querySelector(`div.navigation > ul > li:nth-child(4)`)?.after(seriesTab);
});
await _modules_settings__WEBPACK_IMPORTED_MODULE_0__._load.footer;
var viewingAnyProfile = document.querySelector(`div.user-bar > div.avatar`) && location.href.split(`/`).length === 4, games, header = document.querySelector(`#content :is(div.col-xs-8 div.grow, div.col-xs-12 > div.title)`), table = _modules_util__WEBPACK_IMPORTED_MODULE_2__._page.gamesTableBody;
if (_modules_util__WEBPACK_IMPORTED_MODULE_2__._page.site === 'PSNPf') {
    if (_modules_util__WEBPACK_IMPORTED_MODULE_2__._page.pageType === 'thread') {
        await onForumTopic();
    }
    else if (_modules_util__WEBPACK_IMPORTED_MODULE_2__._page.pageType === 'subforum') {
        console.log(`viewing subforum`);
    }
}
else if (_modules_util__WEBPACK_IMPORTED_MODULE_2__._page.site === 'PSNP') {
    if (viewingAnyProfile) {
        await (0,_modules_Profile__WEBPACK_IMPORTED_MODULE_5__["default"])(_settings, _modules_util__WEBPACK_IMPORTED_MODULE_2__._page);
    }
    else if (location.href.includes(`/games`)) {
        onGames();
    }
    else if (location.href.includes(`/trophies/`)) {
        onTrophyList();
    }
    else if (location.href.includes(`/trophy/`)) {
        await onTrophyPage();
    }
    else if (location.href.includes(`/100-club/`)) {
        await on100Club();
    }
    else if (window.location.pathname === `/series`) {
        onSeriesCatalog();
    }
    else if (location.href.includes(`/series/`)) {
        onSeriesPage();
    }
    else if (location.pathname === '/search') {
        _modules_settings__WEBPACK_IMPORTED_MODULE_0__._load.table.then(() => monitorGames());
    }
    else if (location.pathname.substring(0, 7) === `/guide/`) {
        onTrophyGuide();
    }
}
console.timeEnd('PSNPlatinum script execution');
function searchBarEnhancer(searchBar) {
    setTimeout(() => {
        // Removes any 'AND'/'OR' values (PSNP copies the URL query into the search bar for some reason...)
        searchBar.value = (searchBar.value.match(/\S+/g) || [])
            .filter((word) => word !== `AND` && word !== `OR`)
            .join(` `);
        // Keeps cursor at the end of search text (PSNP resets it to the beginning)
        if (searchBar.value !== ``) {
            searchBar.selectionStart = searchBar.selectionEnd = searchBar.value.length;
        }
    }, 500);
    // Refines search results by inserting `AND`
    searchBar.addEventListener(`keydown`, function (e) {
        if (e.key === `Enter`) {
            e.preventDefault();
            e.stopPropagation();
            const words = this.value.match(/\S+/g) || [];
            for (let i = 0; i < words.length - 1; i++) {
                //if (words[i].toString().toUpperCase() === "N++") words[i] = "nplusplus";
                if (words[i] !== `AND` && words[i] !== `OR` && words[i + 1] !== `AND` && words[i + 1] !== `OR`) {
                    words[i] += ` AND `;
                }
                else {
                    words[i] += ` `;
                }
            }
            const query = encodeURIComponent(words.join(``)), key = viewingAnyProfile ? `search` : `q`;
            if (window.location.search) {
                location.assign(window.location.pathname + `?${key}=${query}`);
            }
            else if (viewingAnyProfile) {
                location.assign(window.location.pathname + `?${key}=${query}`);
            }
            else if (location.href.includes(`/leaderboard`)) {
                location.assign(`/search/users?${key}=${query}`);
            }
            else {
                location.assign(`/search` + window.location.pathname + `?${key}=${query}`);
            }
        }
    });
}
/** GAMES[?q=] */
function onGames() {
    games = _modules_game__WEBPACK_IMPORTED_MODULE_3__["default"].getNodes().map(g => new _modules_game__WEBPACK_IMPORTED_MODULE_3__["default"](g));
    monitorGames();
    createLoadAllPagesBtn(cbGames);
    // Hide multiplatform games if filtered (and setting is enabled)
    if (_settings.prefs.hideMultiplatform.val && sp.has(`platform`) && sp.get(`platform`) !== `psvr`) {
        games.forEach((g) => {
            if (g.numPlatforms > 1) {
                g.el.style.display = `none`;
            }
        });
    }
    // Highly specific feature that only I care about (copying Game IDs)
    if (_settings.psnId === `GIONAScm2`) {
        games.forEach((game, i) => {
            const checkbox = (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`input`, {
                type: `checkbox`,
                style: `margin-left:5px;`,
                class: `copyCheck`,
            });
            checkbox.addEventListener(`change`, async function () {
                if (this.checked) {
                    (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.copyToClipboard)(game.id);
                }
            });
            games[i].el.querySelector(`td > a.title`)?.after(checkbox);
        });
    }
    /** Callback function for each page */
    function cbGames(doc) {
        const games = _modules_game__WEBPACK_IMPORTED_MODULE_3__["default"].getNodes(doc).map(el => new _modules_game__WEBPACK_IMPORTED_MODULE_3__["default"](el));
        _settings.games.markOrHide(...games);
        // Hide multiplatform games if filtered (and setting is enabled)
        if (_settings.prefs.hideMultiplatform.val && sp.has(`platform`) && sp.get(`platform`) !== `psvr`) {
            games.forEach(g => {
                if (g.platformList.length > 1) {
                    g.el.style.display = `none`;
                }
            });
        }
        // Hide completed games (if setting is enabled)
        if (_settings.prefs.loadAllHideCompleted.val) {
            games.forEach(g => {
                if (_settings.games.isCompleted(g.id)) {
                    g.el.style.display = `none`;
                }
            });
        }
        games.forEach(g => {
            table.appendChild(g.el);
        });
        monitorGames();
    }
}
async function onTrophyList() {
    const list = new _modules_trophies__WEBPACK_IMPORTED_MODULE_1__.TrophyList(), trophies = _modules_trophies__WEBPACK_IMPORTED_MODULE_1__.Trophy.getTrophies({ omitDLC: false }), h3 = document.querySelector(`#banner > div.banner-overlay > div > div.title-bar.flex.v-align > div.grow > h3`), anchor = document.querySelector(`div.title-bar.flex.v-align > div.grow`);
    // Normalize game title capitalization
    h3.style.textTransform = `none`;
    // Clicking a Recent Player's name will redirect to their list for the game, sorted by date (delay prevents a conflict with Husky's script)
    setTimeout(() => {
        list.recentPlayers.forEach(el => {
            const path = location.pathname.split(`/`);
            path[3] = el.querySelector(`.small-title`).textContent.trim() + `?order=date`;
            const newPath = `https://psnprofiles.com` + path.join(`/`);
            el.querySelector(`.small-title`).setAttribute(`href`, newPath);
        });
    }, 800);
    monitorGames();
    // Dev feature
    if (_settings.psnId === `GIONAScm2`) {
        new _modules_util__WEBPACK_IMPORTED_MODULE_2__.CopyCheckbox(...trophies);
        const cbAll = (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`input`, { type: `checkbox`, style: `margin-left:5px;` }, `All`);
        cbAll.addEventListener(`change`, function () {
            if (this.checked) {
                document.querySelectorAll(`input.copyCheck`).forEach(cb => {
                    if (!cb.checked) {
                        cb.click();
                    }
                });
            }
            else {
                document.querySelectorAll(`input.copyCheck`).forEach(cb => {
                    if (cb.checked) {
                        cb.click();
                    }
                });
            }
        });
        anchor.appendChild(cbAll);
    }
}
async function onTrophyPage() {
    const players = document.querySelectorAll(`div.col-xs-6 tr`); // both first & latest achievers
    setTimeout(() => {
        players.forEach(el => {
            const path = location.pathname.split(`/`);
            (path[1] = `trophies`), (path[3] = el.querySelector(`a.title`).textContent.trim() + `?order=date`);
            const newPath = `https://psnprofiles.com` + path.join(`/`);
            el.querySelector(`a.title`).setAttribute(`href`, newPath);
        });
    }, 800);
}
async function on100Club() {
    const noAchievers = document.querySelector(`div#content > div.center`), players = document.querySelectorAll(`.col-xs-4 tr`);
    if (noAchievers) {
        document.querySelector(`div#content`).replaceChildren(constructFastest());
        await insertFirstLatestFastest();
    }
    else if (_settings.prefs.flagged.val) {
        await insertFirstLatestFastest();
    }
    setTimeout(() => {
        players.forEach(el => {
            let path = location.pathname.split(`/`);
            (path[1] = `trophies`), (path[3] = el.querySelector(`a.title`).textContent.trim() + `?order=date`);
            path = `https://psnprofiles.com` + path.join(`/`);
            el.querySelector(`a.title`).setAttribute(`href`, path);
        });
    }, 800);
}
function onSeriesCatalog() {
    const table = _modules_util__WEBPACK_IMPORTED_MODULE_2__._page.gamesTableBody;
    const infoDiv = (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`div`, {
        style: `display: inline-block; padding:4px 8px 4px 8px; width:200px; color:white; font-weight:500; margin-right:10px;`,
    }, (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`span`, { id: `numLoaded`, style: `margin-right: 30px;` }), (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`span`, { id: `numHidden`, style: `` }));
    createLoadAllPagesBtn(cbSeries);
    header.appendChild(infoDiv);
    _modules_series__WEBPACK_IMPORTED_MODULE_4__.SeriesRow.refreshHeader(_settings.prefs.platify.val);
    /** Callback function for each page */
    function cbSeries(doc) {
        const seriesRows = _modules_game__WEBPACK_IMPORTED_MODULE_3__["default"].getNodes(doc).map(el => new _modules_series__WEBPACK_IMPORTED_MODULE_4__.SeriesRow(el));
        seriesRows.forEach(s => {
            table.appendChild(s.el);
        });
        _modules_series__WEBPACK_IMPORTED_MODULE_4__.SeriesRow.refreshHeader(_settings.prefs.platify.val);
    }
}
function onSeriesPage() {
    // monitorGames();
    const series = new _modules_series__WEBPACK_IMPORTED_MODULE_4__["default"]();
    if (_settings.prefs.platify.val) {
        series.platify();
    }
    // Displays series progress. Name is the user's PSN ID, unless they're viewing someone else's progress.
    const name = location.href.split(`/`).length === 6 ? location.href.split(`/`)[5] : _settings.psnId;
    series.showProgressHeader(name, _settings.prefs.platify.val);
}
function onTrophyGuide() {
    const roadmapStages = document.querySelectorAll(`div#roadmapSteps div[id] > div.guide`);
    // Ability to mass-copy the names and descriptions of each trophy in a given stage.
    if (_settings.psnId === `GIONAScm2`) {
        const rich = (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`div`, {});
        roadmapStages.forEach(stage => {
            const trophies = [...stage.querySelectorAll(`div.trophy`)].map(t => ({
                name: t.querySelector(`a.title`).textContent,
                desc: t.querySelector(`span`).textContent,
            })), 
            // Checkbox next to stage name to select (copy) all of its trophies
            cb = (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`input`, { type: `radio`, name: `stage`, style: `margin-left:5px;` });
            cb.addEventListener(`change`, function () {
                if (this.checked) {
                    rich.innerHTML = ``;
                    trophies.forEach(trophy => {
                        const richTrophyInfo = `<b>${trophy.name}</b>&shy;${`\v` + trophy.desc}`;
                        rich.innerHTML += `${richTrophyInfo}<br>`;
                        (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.copyToClipboard)(rich.innerHTML);
                    });
                }
            });
            stage.querySelector(`h1`).appendChild(cb);
        });
    }
}
async function onForumTopic() {
    const nav = await (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.waitForEl)('ul[itemscope]');
    // If viewing game topic, create shortcut to trophy list
    if (nav.querySelector(`li:nth-child(3) > a > span`)?.textContent?.trim() === `Game Forums`) {
        let url = nav.querySelector(`li:nth-child(5) a`).getAttribute(`href`);
        (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.fetchDoc)(url).then(doc => {
            url = doc.querySelector(`div.ipsType_richText.ipsType_normal > a`).getAttribute(`href`);
            document.querySelector(`#trophylist`).setAttribute(`href`, url);
        });
        const btnTrophyList = (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`li`, { itemprop: `itemListElement`, itemscope: `` }, (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`a`, { id: `trophylist` }, _settings.icons.trophy, (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`i`, { class: `fa fa-angle-right` })));
        nav.querySelector(`li:nth-child(5)`).before(btnTrophyList);
    }
}
/** Dynamically inserts completion time into First, Last, and Fastest Achievers. */
async function insertFirstLatestFastest(doc = document) {
    const tables = doc.querySelectorAll(`#content div.col-xs-4 tbody`), tFirst = tables[0], tFirstUsers = tFirst.querySelectorAll(`tr`), tLatest = tables[1], tLatestUsers = tLatest.querySelectorAll(`tr`), tFastest = tables[2], tFastestUsers = tFastest.querySelectorAll(`tr`), noAchievers = tFirstUsers.length === 0;
    // Fetching user's trophy list
    let url = window.location.href.replace(`100-club`, `trophies`);
    url = `${url}/${_settings.psnId}?order=date`;
    let trophyList = await (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.fetchDoc)(url);
    // Scraping the relevant data
    const avatar = trophyList.querySelector(`a > img.trophy`).getAttribute(`src`).replace(`/m/`, `/s/`);
    trophyList = trophyList.querySelector(`div.col-xs table.zebra > tbody`);
    const firstTrophy = trophyList.querySelector(`tr:first-of-type`), lastTrophy = _settings.prefs.platify.val
        ? trophyList.querySelector(`td img[title="Platinum"]`).closest(`tr`)
        : trophyList.querySelector(`tr:last-of-type`);
    if (!lastTrophy.classList.contains(`completed`)) {
        return false;
    }
    const dateElements = lastTrophy.querySelector(`td > span.separator.right`).childNodes, 
    // [First] Comparing dates and adjusting accordingly
    myDate = _modules_trophies__WEBPACK_IMPORTED_MODULE_1__.Trophy.parseDate(lastTrophy);
    let rankFirst = 0, qualified = false;
    tFirstUsers.forEach((tr, i) => {
        const theirDate = _modules_trophies__WEBPACK_IMPORTED_MODULE_1__.Trophy.parseDate(tr);
        if (!qualified && myDate <= theirDate) {
            rankFirst = i + 1;
            qualified = true;
        }
        if (qualified) {
            tr.querySelector(`td.rank`).textContent = i + 2;
        }
    });
    if (qualified && tFirstUsers[49]) {
        tFirstUsers[49].remove();
    }
    // [Latest] Comparing dates and adjusting accordingly
    let rankLatest = 0;
    qualified = false;
    tLatestUsers.forEach((tr, i) => {
        const theirDate = _modules_trophies__WEBPACK_IMPORTED_MODULE_1__.Trophy.parseDate(tr);
        if (!qualified && myDate >= theirDate) {
            rankLatest = i + 1;
            qualified = true;
        }
        if (qualified) {
            tr.querySelector(`td.rank`).textContent = i + 2;
        }
    });
    if (qualified && tLatestUsers[49]) {
        tLatestUsers[49].remove();
    }
    // [Fastest] Comparing speeds and adjusting accordingly
    const mySpeed = (_modules_trophies__WEBPACK_IMPORTED_MODULE_1__.Trophy.parseDate(lastTrophy) - _modules_trophies__WEBPACK_IMPORTED_MODULE_1__.Trophy.parseDate(firstTrophy)) / 1000;
    let rankFastest = 0;
    qualified = false;
    tFastestUsers.forEach((tr, i) => {
        const theirSpeed = _modules_game__WEBPACK_IMPORTED_MODULE_3__["default"].speedStringToSeconds(tr.querySelector(`span.typo-top-date nobr`).textContent);
        if (!qualified && mySpeed <= theirSpeed) {
            rankFastest = i + 1;
            qualified = true;
        }
        if (qualified) {
            tr.querySelector(`td.rank`).textContent = i + 2;
        }
    });
    if (qualified && tFastestUsers[49]) {
        tFastestUsers[49].remove();
    }
    // Adjusting ranks if page is empty
    if (noAchievers) {
        rankFirst++;
        rankLatest++;
        rankFastest++;
    }
    // Creating elements
    const myFirst = (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`tr`, { style: `background-color:${_modules_settings__WEBPACK_IMPORTED_MODULE_0__["default"].colors.completed};` }, (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`td`, {
        class: `rank`,
        style: [noAchievers ? `padding-left:10px;padding-right:10px;` : ``],
    }, `${rankFirst}`), (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`td`, {}, (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`a`, { href: `/${_settings.psnId}` }, (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`img`, { class: `trophy sm`, src: `${avatar}` }, ``))), (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`td`, { style: `width: 100%;` }, (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`a`, { class: `title`, href: `/${_settings.psnId}` }, `${_settings.psnId}`)), (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`td`, {}, (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`center`, {}, ...dateElements))), myLatest = myFirst.cloneNode(true);
    myLatest.querySelector(`td.rank`).textContent = rankLatest;
    const myFastest = myFirst.cloneNode(true);
    myFastest.querySelector(`td.rank`).textContent = rankFastest;
    myFastest.querySelector(`td:last-of-type`).classList.add(`right`);
    myFastest
        .querySelector(`td:last-of-type`)
        .replaceChildren((0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`span`, { class: `typo-top-date` }, (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`nobr`, {}, `${_modules_game__WEBPACK_IMPORTED_MODULE_3__["default"].secondsToSpeedString(mySpeed)}`)));
    // Inserting elements if ranked
    if (rankFirst > 0) {
        tFirst.insertBefore(myFirst, tFirstUsers[rankFirst - 1]);
    }
    else if (noAchievers) {
        tFirst.appendChild(myFirst);
    }
    if (rankLatest > 0) {
        tLatest.insertBefore(myLatest, tLatestUsers[rankLatest - 1]);
    }
    else if (noAchievers) {
        tLatest.appendChild(myLatest);
    }
    if (rankFastest > 0) {
        tFastest.insertBefore(myFastest, tFastestUsers[rankFastest - 1]);
    }
    else if (noAchievers) {
        tFastest.appendChild(myFastest);
    }
    return true;
}
/** Constructs a 100% Club for when there isn't one.
 * @param {document} doc */
function constructFastest() {
    const first = (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`div`, { class: `col-xs-4` }, (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`div`, { class: `title center flex v-align` }, (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`div`, { class: `grow` }, (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`h3`, {}, `First Achievers`))), (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`table`, { class: `box zebra no-top-border` }, (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`tbody`, {}))), latest = first.cloneNode(true);
    latest.querySelector(`h3`).textContent = `Latest Achievers`;
    const fastest = first.cloneNode(true);
    fastest.querySelector(`h3`).textContent = `Fastest Achievers`;
    return (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`div`, { class: `row` }, first, latest, fastest);
}
/** Applies enhancements to games once, or every `ms`. */
function monitorGames(ms) {
    const games = _modules_game__WEBPACK_IMPORTED_MODULE_3__["default"].getNodes().map(g => new _modules_game__WEBPACK_IMPORTED_MODULE_3__["default"](g));
    _settings.games.markOrHide(...games);
    _settings.games.appendOwnershipIcon(...games);
    if (ms) {
        setTimeout(() => {
            monitorGames(ms);
        }, ms);
    }
}
/** Creates and appends button */
async function createLoadAllPagesBtn(cb) {
    const btn = (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`a`, {
        href: `javascript:void(0);`,
        title: `Loads all rows from current page to last page`,
        style: `background:#64a75c; color: #fff; font-weight:500; text-transform:none; display:inline-block; font-family:'Roboto', Arial, Verdana, sans-serif;` +
            `text-align:center; padding:4px 8px 4px 8px; border-radius: 2px; white-space:nowrap; margin-right: 20px; margin-left: 50px; font-size:14px; float: none;`,
    }, `Load All`);
    btn.addEventListener(`click`, onclickLoadMore);
    // Prettifying DOM
    header.appendChild(btn);
    // Helper functions
    async function onclickLoadMore(e) {
        e.currentTarget.removeEventListener(`click`, onclickLoadMore);
        e.currentTarget.style.display = `none`;
        // Clearing DOM
        window.addEventListener(`scroll`, function (e) {
            e.stopPropagation();
        }, true);
        document.querySelectorAll(`ul.pagination`).forEach(ul => (ul.style.display = `none`));
        _modules_game__WEBPACK_IMPORTED_MODULE_3__["default"].getNodes().forEach(g => g.remove());
        document.querySelector(`#load-more`)?.remove();
        await iteratePages(cb);
    }
    async function iteratePages(cbPage) {
        const baseUrl = location.href.split(`?`)[0], pages = +document.querySelector(`#content ul.pagination:not(.small) > li:nth-last-child(2) > a`)
            .textContent, page = +sp.get(`page`) || 1, q = sp.has(`q`) ? `&q=${encodeURIComponent(sp.get(`q`))}` : ``, order = sp.has(`order`) ? `&order=${sp.get(`order`)}` : ``, platform = sp.has(`platform`) ? `&platform=${sp.get(`platform`)}` : ``;
        for (let i = page; i <= pages; i++) {
            const url = `${baseUrl}?page=${i}${q}${order}${platform}`, doc = await (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.fetchDoc)(url);
            cbPage(doc);
            await (0,_modules_util__WEBPACK_IMPORTED_MODULE_2__.sleep)(1000);
        }
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/modules/Profile.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/util.ts");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/game.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/index.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_2__]);
___WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/** PROFILE[?search=] */
async function Profile(_settings, _page) {
    class PSNProfile {
        psnId;
        stats;
        numPages;
        rarestTrophies;
        constructor(doc = document) {
            this.psnId = doc.querySelector(`div#user-bar span.username`).textContent.trim();
            this.stats = {
                gamesPlayed: +doc
                    .querySelector(`span.stat.grow:nth-of-type(1)`)
                    .childNodes[0].textContent.replace(/,/g, ``),
                gamesCompleted: +doc
                    .querySelector(`span.stat.grow:nth-of-type(2)`)
                    .childNodes[0].textContent.replace(/,/g, ``),
                completion: +doc
                    .querySelector(`span.stat.grow:nth-of-type(3)`)
                    .childNodes[0].textContent.replace(`%`, ``),
                unearnedTrophies: +doc
                    .querySelector(`span.stat.grow:nth-of-type(4)`)
                    .childNodes[0].textContent.replace(/,/g, ``),
                trophiesPerDay: +doc.querySelector(`span.stat.grow:nth-of-type(5)`).childNodes[0].textContent,
                views: +doc
                    .querySelector(`span.stat.grow:nth-of-type(6)`)
                    ?.childNodes[0].textContent.replace(/,/g, ``),
            };
            this.numPages = Math.ceil(this.stats.gamesPlayed / 100);
            this.rarestTrophies = (() => {
                const h3 = [...doc.querySelectorAll(`#content div.sidebar.col-xs-4 div.title.flex.v-align h3`)].find(h3 => h3.textContent === 'Rarest Trophies');
                const t = [
                    ...h3?.closest(`div.title.flex.v-align`)?.nextElementSibling?.querySelectorAll('table tr'),
                ].map(el => {
                    return {};
                });
                return t;
            })();
        }
        static #stayOnPage(e) {
            // Cancel the event as stated by the standard.
            e.preventDefault();
            // Chrome requires returnValue to be set.
            e.returnValue = ``;
            return ``;
        }
        /** Parses user's profile and caches all their games so that the data can be quickly accessed anytime. */
        static async cacheGames() {
            const profile = new PSNProfile();
            let done = false, updatedGames = [], unchangedGames = [], numNew = 0, parsed = 0;
            if (_settings.games.size < profile.stats.gamesPlayed) {
                window.addEventListener(`beforeunload`, this.#stayOnPage);
            }
            for (let i = 1; i <= profile.numPages && !done; i++) {
                const doc = i === 1
                    ? document
                    : await (0,_util__WEBPACK_IMPORTED_MODULE_0__.fetchDoc)(`https://psnprofiles.com/${_settings.psnId}?completion=all&order=last-played&pf=all&page=${i}`), nodes = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getNodes(doc);
                for (let j = 0; j < nodes.length; j++) {
                    // const num = (j + 1) + (100 * (i - 1));
                    const game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](nodes[j]), stored = _settings.games.get(game.id);
                    parsed++;
                    if (!stored) {
                        numNew++;
                        _settings.games.set(game.id, game);
                    }
                    else {
                        const unchanged = game.percent === stored.percent &&
                            game.stack === stored.stack &&
                            game.rarityBase === stored.rarityBase &&
                            game.rarityFull === stored.rarityFull;
                        /** If game looks to be already cached, stop updating after current page (considering late syncs). */
                        if (unchanged) {
                            unchangedGames.push(game);
                            /** A rare PSNP bug displays the same game twice, so this prevents stopping prematurely. */
                            if (unchangedGames.length >= 2) {
                                done = true;
                            }
                            continue;
                        }
                        else {
                            _settings.games.set(game.id, game);
                            const diff = { old: stored, new: game };
                            updatedGames.push(diff);
                        }
                    }
                }
                console.log(`${i}/${profile.numPages} pages parsed`);
            }
            await _settings.save();
            console.log(`Parsed ${parsed} games: ${numNew} new, ${updatedGames.length} updated, ${parsed - numNew - updatedGames.length} unchanged. (${_settings.games.size} in cache)`);
            if (updatedGames.length)
                console.log(updatedGames);
            window.removeEventListener(`beforeunload`, this.#stayOnPage);
        }
        /** Parses user's profile and shows only the games that stack, and how many stacks the user has completed. Shows only 1 game per set of stacks. */
        static async stackifyAll() {
            console.time('Stackify');
            this.remove();
            const profile = new PSNProfile();
            // Prepping the DOM
            window.addEventListener(`scroll`, function (e) {
                e.stopPropagation();
            }, true);
            document.querySelector(`#load-more`)?.remove();
            _game__WEBPACK_IMPORTED_MODULE_1__["default"].getNodes().forEach(g => g.remove());
            const lazyCheck = true; // TODO: Let user choose on the fly.
            const parsedGames = new Map();
            for (let i = 1; i <= profile.numPages; i++) {
                const doc = await (0,_util__WEBPACK_IMPORTED_MODULE_0__.fetchDoc)(`https://psnprofiles.com/${profile.psnId}?completion=all&order=last-played&pf=all&page=${i}`);
                const gamesOnPage = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getNodes(doc).map(g => new _game__WEBPACK_IMPORTED_MODULE_1__["default"](g));
                for (const game of gamesOnPage) {
                    game.updateStacks({ _settings, _page, parsedGames, lazyCheck });
                }
                await _settings.save();
            }
            console.timeEnd('Stackify');
        }
        /** Parses another user's profile and shows only the games that you don't own. */
        static async envy() {
            this.remove();
            const profile = new PSNProfile();
            // Prepping the DOM
            window.addEventListener(`scroll`, function (e) {
                e.stopPropagation();
            }, true);
            document.querySelector(`#load-more`)?.remove();
            _game__WEBPACK_IMPORTED_MODULE_1__["default"].getNodes().forEach(g => g.remove());
            // Check for filters/params
            const qp = {
                completion: _page.sp.get(`completion`) || `all`,
                order: _page.sp.get(`order`) || `last-played`,
                pf: _page.sp.get(`pf`) || `all`,
            };
            for (let i = 1; i <= profile.numPages; i++) {
                const url = `https://psnprofiles.com/${profile.psnId}?completion=${qp.completion}&order=${qp.order}&pf=${qp.pf}&page=${i}`, doc = await (0,_util__WEBPACK_IMPORTED_MODULE_0__.fetchDoc)(url), gameNodes = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getNodes(doc);
                for (let j = 0; j < gameNodes.length; j++) {
                    const game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](gameNodes[j]);
                    if (!_settings.games.has(game.id)) {
                        _page.gamesTableBody?.appendChild(game.el);
                    }
                }
                (0,___WEBPACK_IMPORTED_MODULE_2__.monitorGames)();
            }
        }
    }
    /** @param {Game} game */
    function buildGame(game) {
        let completion, // platinum|completed
        srcset, playedDate;
        const el = (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`tr`, { class: completion }, (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`td`, { style: `width: 1%;` }, (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`a`, { href: `/trophies/${game._pathKey}/${_settings.psnId}`, rel: `nofollow` }, (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`picture`, { class: `game`, alt: game.name }, (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`src`, { srcset: srcset }), (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`img`, { src: game.src })))), (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`td`, { style: `width: 100%;` }, (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`div`, { class: `ellipsis` }, (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`span`, {}, (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`a`, {
            class: `title`,
            href: `/trophies/${game._pathKey}/${_settings.psnId}`,
            rel: `nofollow`,
        }, game.name), (() => {
            //conditional bullet + text node (for stacks)
        })())), (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`div`, { class: `small-info`, style: `margin-top: 4px;` }
        /** TODO */
        ), (() => playedDate
            ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`div`, { class: `small-info`, style: `margin-top: 4px;` }, ` 28`, (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`sup`, {}, `th`), ` March 2022`)
            : null)()), (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`td`, {}), (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`td`, {}), (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`td`, {}), (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`td`, {}));
        return el;
    }
    const games = _game__WEBPACK_IMPORTED_MODULE_1__["default"].getNodes().map(g => new _game__WEBPACK_IMPORTED_MODULE_1__["default"](g));
    const anchor = document.querySelector(`#content div.col-xs-8 div.grow`), btnStackify = (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`a`, {
        href: `javascript:void(0);`,
        id: `btnStackify`,
        title: `Evaluates and marks your stack progress for all loaded games`,
        style: `background:#64a75c; color: #fff; font-weight:500; text-transform:none; display:inline-block; font-family:'Roboto', Arial, Verdana, sans-serif;` +
            `text-align:center; padding:4px 8px 4px 8px; border-radius: 2px; white-space:nowrap; margin-right: 20px; font-size:14px;`,
    }, `Stackify`);
    const profile = new PSNProfile();
    /******************************************************************************************************************************
                                                                OWN PROFILE
    ******************************************************************************************************************************/
    if (location.pathname === `/${_settings.psnId}`) {
        // Shows stack progress
        anchor.appendChild(btnStackify);
        btnStackify.addEventListener(`click`, PSNProfile.stackifyAll);
        // If flagged, hide red panel
        if (_settings.prefs.flagged.val) {
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.waitForEl)(`div.red`).then(el => {
                el.nextElementSibling.remove();
                el.remove();
            });
        }
        games.forEach(g => {
            g.el.querySelector(`a.title, span > a`)?.parentNode?.appendChild(_settings.icons.stack);
        });
        // Cache any new games
        await PSNProfile.cacheGames();
        // Distinct Rarest
        // if (_settings.prefs.rarestTrophiesDistinct.val) {
        // 	console.log('distinct rarest');
        // 	console.log(profile.rarestTrophies);
        // }
        // Add dropdown
        /** @type {HTMLUListElement} */
        const dropdown_order = document.querySelector(`#content div.col-xs-8 > div.title div.dropdown > a.order`)?.nextElementSibling;
        const times = Array.from(_settings.games.values())
            .filter(game => game.speed)
            .sort((a, b) => a.speed - b.speed);
    }
    else {
        /******************************************************************************************************************************
                                                                OTHER PROFILE
        ******************************************************************************************************************************/
        const btnEnvy = btnStackify.cloneNode(true);
        btnEnvy.textContent = `Envy`;
        btnEnvy.setAttribute(`id`, `btnEnvy`);
        btnEnvy.setAttribute(`title`, `Shows only the games you don't own.`);
        anchor.appendChild(btnEnvy);
        btnEnvy.addEventListener(`click`, PSNProfile.envy);
        (0,___WEBPACK_IMPORTED_MODULE_2__.monitorGames)(2000);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/modules/game.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stack": () => (/* binding */ Stack),
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _trophies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/trophies.ts");
/* harmony import */ var _psnp_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/psnp-util.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/util.ts");



var Stack;
(function (Stack) {
    Stack["NA"] = "North American";
    Stack["EU"] = "European";
    Stack["WW"] = "Worldwide";
    Stack["AS"] = "Asian";
    Stack["JP"] = "Japanese";
    Stack["CN"] = "Chinese";
    Stack["KR"] = "Korean";
    Stack["GER"] = "German";
    Stack["AU"] = "Australian";
    Stack["RU"] = "Russian";
    Stack["WE"] = "Western";
    Stack["UK"] = "United Kingdom";
    Stack["FR"] = "French";
    Stack["ES"] = "Spanish";
    // Non-regions:
    Stack["DG"] = "Digital";
    Stack["PH"] = "Physical";
    Stack["RR"] = "Rereleased";
    Stack["OR"] = "Original";
})(Stack || (Stack = {}));
var EPlatform;
(function (EPlatform) {
    EPlatform[EPlatform["Vita"] = 0] = "Vita";
    EPlatform[EPlatform["PS3"] = 1] = "PS3";
    EPlatform[EPlatform["PS4"] = 2] = "PS4";
    EPlatform[EPlatform["PS5"] = 3] = "PS5";
    EPlatform[EPlatform["VR"] = 4] = "VR";
})(EPlatform || (EPlatform = {}));
/** REFACTOR CHECKLIST
 * [ ] Organize Game field types (ones at top are final)
 * [ ] Re-implement them, if needed
 * [ ] Find unique way to identify the type of game, and parse it accordingly? See below for ideas:
         - Check number of <tr>
         - Use exact selectors
         - Check page type (_udo?) //Not a fan of this tight coupling, though.
 */
/** Models a PSNP game. */
class Game extends _psnp_util__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /** ID that uniquely identifies the game on PSNP. */
    id;
    /** Name of the game. */
    name;
    /** Path to the game's trophy list (E.G. `16201-mr-hibbl`). */
    _url;
    /** URL of the game's trophy list. */
    get url() {
        return `https://psnprofiles.com/trophies/${this._url}`;
    }
    /** Path to the game image's `src` attribute (E.G. `d48e8b/S9dbf10`). */
    _urlSrc;
    /** URL of the game image's `src` attribute. */
    get urlSrc() {
        return `https://i.psnprofiles.com/games/${this._urlSrc}.png`;
    }
    /** PSNP's abbreviated stack label. Defaults to `null` if no label is present, and gets set to `false` only upon verifying
     * that the game (currently) has no stacks. `true` indicates a platform stack.
     *
     * We do this because all stacks should be labelled for consistency, even if it's the generic `WW`. */
    stack;
    stackString;
    /** Array of the game's compatible platforms. */
    platformList;
    /** Object 'map' of all platforms and whether the game is compatible with each. */
    get platformString() {
        return this.platformList.join('/');
    }
    platforms;
    /** Number (int), otherwise undefined. */
    percent;
    /** Whether or not the game has a plat, or `null` if unknown. */
    hasPlat;
    /** Whether or not the game has DLC - or `null` if unknown - based on whether the game has 2 different rarity numbers.
     *
     * NOTE: PSNP currently doesn't show a base rarity for nonplats with DLC, so those cases are undetectable.  */
    hasDLC;
    /** Whether or not the user has platted the game, or `null` if unknown. */
    isPlatted;
    /** Whether or not the user has fully completed the game, or `null` if unknown. */
    get is100Percent() {
        return this?.percent ? this.percent === 100 : null;
    }
    /** Number (float) of the first displayed rarity. */
    rarityBase;
    /** Number (float) of the last displayed rarity. Equal to rarityBase for games without DLC. */
    rarityFull;
    /** Date that most recent trophy was earned. */
    datePlayed;
    /** String representing game completion speed, of the form of the form `<num> <timeMetric>(s), <num> <timeMetric>(s)`. */
    speedString;
    /** Completion speed in seconds, otherwise null. */
    speed;
    hasProgress() {
        return !!this.$(`div.progress-bar > span`);
    }
    constructor(tr) {
        super(tr);
        // this.el = tr;
        if (this.hasProgress()) {
            // Knows game has a progress bar
            // this.p
        }
        // Only the first matching game type gets used.
        let basic, gameFromSearch, gameFromSeries;
        (basic = !!tr.querySelector('picture.xs.game')) ||
            (gameFromSearch = !!tr.querySelector('li.icon-sprite')) ||
            (gameFromSeries = !!tr.querySelector('img.icon-sprite'));
        /** Determines whether game will have Owners, Recent, numTrophies, and numPoints.
         * (Assuming it's a profile game rather than a basic one.) */
        const played = ''; // check for progress bar or something.
        this.id = +this.$(`:is(a.title, td > span > span > a)`)
            .getAttribute(`href`)
            .split(`/`)
            .at(2)
            .split(`-`)
            .at(0);
        this.name = this.$(`:is(a.title, td > span > span > a)`)?.innerText.trim() ?? '';
        this._url = this.$(`:is(a.title, td > span > span > a)`).getAttribute(`href`)?.split('/').at(2) ?? null;
        this._urlSrc = /\w+\/\w+(?=\.[A-z]{3}$)/.exec(this.$('img')?.getAttribute('src') ?? '')?.at(0) ?? null;
        // Tests general case first (Games, Profile, and Series pages), then trophy list-specific case.
        this.stack = this.$(`tr :is(span, td) > bullet`)
            ? this.$(`:is(span, td) > bullet`).nextSibling.textContent.trim()
            : this.$(`td > span.separator > span.typo-top`)
                ? this.$(`td > span.separator > span.typo-top`).textContent.trim()
                : null;
        this.platformList = this.$$(`span.tag.platform`).map(tag => tag.textContent);
        this.platforms = {
            Vita: this.platformList.includes(`Vita`),
            PS3: this.platformList.includes(`PS3`),
            PS4: this.platformList.includes(`PS4`),
            PS5: this.platformList.includes(`PS5`),
            VR: this.platformList.includes(`VR`),
        };
        if (basic)
            return this;
        // Untested
        this.percent = +this.$(`div.progress-bar > span`)?.innerText?.replace(`%`, ``) || null;
        this.hasPlat = !!this.$(`:is(.icon-sprite.platinum-18, .icon-sprite.platinum)`);
        this.hasDLC = this.$$(`td > span.separator.completion-status > span`).length
            ? this.$$(`td > span.separator.completion-status > span`).length === 2
            : null;
        this.isPlatted = !!tr.querySelector(`img.icon-sprite.platinum-18.earned`);
        // this.platRarity = +tr.querySelector('span[title="Platinum Rarity"]')?.textContent.replace('%', '');
        this.rarityBase = this.$(`td > span.separator.completion-status > span:first-of-type`)
            ? +this.$(`td > span.separator.completion-status > span:first-of-type`).textContent.replace(`%`, ``)
            : null;
        this.rarityFull = this.$(`td > span.separator.completion-status > span:last-of-type`)
            ? +this.$(`td > span.separator.completion-status > span:last-of-type`).textContent.replace(`%`, ``)
            : null; //+tr.querySelector('span[title="Completion Rate"]')?.textContent.replace('%', '');
        this.speedString =
            this.$(`td[style*="width: 100%;"] > div.small-info:nth-of-type(3) > bullet + b`)?.textContent?.trim() ?? ``;
        this.speed = this.speedString ? Game.speedStringToSeconds(this.speedString) : null;
    }
    /** Returns NodeList of games from Profile(?q=), Games(?q=), Series, and TrophyList ("Other Platforms and Regions"). */
    static getNodes(doc = document) {
        if (doc.URL.includes(`/trophies/`)) {
            return new _trophies__WEBPACK_IMPORTED_MODULE_0__.TrophyList(doc).stacks;
        }
        return [
            ...doc.querySelectorAll(`:is(#game_list, #search-results:not([style='display: none;']), #gamesTable:not([style='display: none;']), table.series:not(.legend)) tbody > tr:not(:empty, [id='load-more'], [id='table-loading'])`),
        ];
    }
    toJSON() {
        return {
            name: this.name,
            id: this.id,
            stack: this.stack,
            platforms: this.platforms,
            url: this._url,
            hasPlat: this.hasPlat,
            isPlatted: this.isPlatted,
            hasDLC: this.hasDLC,
            percent: this.percent,
            rarityBase: this.rarityBase,
            rarityFull: this.rarityFull,
            speedString: this.speedString,
            speed: this.speed,
        };
    }
    /** Marks a list of `stacks` (assumes list is comprehensive) */
    static labelStacks(freshStacks, storedStacks) {
        /**
         * [] Get list of unique StackAbbrvs
         * [] Get list of unique platforms (to know whether platform should be included in the stack string)
         * 		- If only one unique platform
         * 		* Persona 5 is a good test case.
         */
        // If a single game is passed, mark it as having no stacks.
        if (freshStacks.length <= 1) {
            freshStacks.forEach(s => (s.stack = false));
            return;
        }
        // First we MUST break them down by platform, since we don't want to apply a `WW` label to, say, a PS5 list that doesn't have any other PS5 stacks.
        const stacksByPlatform = {};
        freshStacks.forEach(game => {
            if (!stacksByPlatform[game.platformString])
                stacksByPlatform[game.platformString] = [game];
            else
                stacksByPlatform[game.platformString]?.push(game);
        });
        const numPlatforms = Object.keys(stacksByPlatform).length;
        // THEN we iterate through each platform to assess its `StackAbbr`s and relabel `this.stack` accordingly, and assign a core `stackString`
        for (const [platform, games] of Object.entries(stacksByPlatform)) {
            // Whatever the case may be, this game shouldn't have a `StackAbbr`.
            if (games.length === 1) {
                const g = games.at(0);
                if (typeof g.stack !== 'string')
                    g.stack = true;
                g.stackString = g.platformString;
                continue;
            }
            const someStackAbbrs = games.some(g => typeof g.stack === 'string');
            // When there are duplicate platforms and at least one has a `StackAbbr`, mark any that don't as "WW"
            if (someStackAbbrs) {
                for (const g of games) {
                    if (!g.stack || typeof g.stack !== 'string') {
                        g.stack = 'WW';
                    }
                    g.stackString = numPlatforms > 1 ? g.platformString + ` (${g.stack})` : g.stack;
                }
            }
            else {
                // No StackAbbrs yet, but there should be. (e.g. 2 unlabelled PS5 stacks)
                freshStacks.forEach(s => (s.stackString = platform));
            }
        }
        return;
        /** If there are more stacks than `StackAbbr`s, find the ambiguous games and specify their platform. */
        // if (stackAbbrs.length < stacks.length) {
        // 	stackAbbrs
        // 		.map(abbr => stacks.filter(s => s.stack === abbr))
        // 		.filter(games => games.length > 1)
        // 		.flat()
        // 		.map(game => (game.stackString += ` (${game.platformList.join('/')})`));
        // }
    }
    async updateStacks({ _settings, _page, parsedGames, lazyCheck, manual = false, }) {
        if (this.$('.stackify'))
            return;
        const stored = _settings.games.get(this.id);
        let stackData = _settings.stacks.find(x => x.games.find(g => g.id === this.id));
        let numCompleted = 0, numTotal = 0;
        // Retroactively apply necessary getter
        if (stackData) {
            stackData.games.forEach(g => {
                if (!Object.hasOwn(g, 'platformString'))
                    Object.defineProperty(g, 'platformString', {
                        get: function () {
                            return this.platformList.join('/');
                        },
                    });
            });
        }
        // CASE 1: Game already parsed from an earlier stack.
        if (parsedGames?.get(this.id))
            return;
        // CASE 2: Lazy
        else if (stackData && lazyCheck) {
        } // CASE 3: Fetch latest stack data to update existing data.
        else if (stackData) {
            console.log(`${this.name} last updated ${new Date(stackData.lastUpdated)}`);
            const fetchedStacks = await fetchStacks(this.url);
            // STEP 1: Replace cached stackList with newly fetched stackList.
            stackData.games = [this, ...fetchedStacks];
            stackData.lastUpdated = Date.now();
            Game.labelStacks(stackData.games);
        }
        else {
            // create stack data
            const fetchedStacks = await fetchStacks(this.url);
            stackData = {
                games: [this, ...fetchedStacks],
                lastUpdated: Date.now(),
            };
            Game.labelStacks(stackData.games);
            _settings.stacks.push(stackData);
        }
        stackData.games.forEach(g => {
            parsedGames?.set(g.id, g);
            numTotal++;
            if (_settings.games.isCompleted(g.id))
                numCompleted++;
        });
        async function fetchStacks(url) {
            const stacks = [];
            const gamePage = await (0,_util__WEBPACK_IMPORTED_MODULE_2__.fetchDoc)(url);
            for (const stackNode of new _trophies__WEBPACK_IMPORTED_MODULE_0__.TrophyList(gamePage).stacks) {
                const stack = new Game(stackNode);
                stacks.push(stack);
            }
            return stacks;
        }
        // TODO: Update _settings.games with any new values.
        // Building & appending element
        if (stackData.games.length === 1 || (_settings.prefs.stackifyHideCompleted.val && numCompleted === numTotal)) {
            return;
        }
        const color = numCompleted === numTotal ? `green` : `red`;
        // this.$('td > div.ellipsis > span > a.title + bullet')?.nextSibling?.remove();
        const stacksIncomplete = stackData.games.filter(g => !_settings.games.isCompleted(g.id));
        const stacksComplete = stackData.games.filter(g => _settings.games.isCompleted(g.id));
        this.$(`td:nth-child(2) > div.ellipsis`)?.after((0,_util__WEBPACK_IMPORTED_MODULE_2__.newElement)('div', { class: `stackify`, style: `font-weight:500;` }, (0,_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`span`, {}, (0,_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`span`, { style: `color:${color};` }, `${numCompleted}/${numTotal}`)), stacksIncomplete.length ? ` — ` : '', (0,_util__WEBPACK_IMPORTED_MODULE_2__.newElement)('span', { style: `` }, stacksIncomplete.map(g => g.stackString).join(' | ')), stacksComplete.length ? ` — ` : '', (0,_util__WEBPACK_IMPORTED_MODULE_2__.newElement)('span', { style: `color:green;` }, stacksComplete.map(g => g.stackString).join(' | '))));
        // Clean up title
        [...(this.$(`td:nth-child(2) > div.ellipsis > span`)?.childNodes ?? [])]
            .filter(el => el.nodeName !== 'A')
            .forEach(el => el.remove());
        // const title = topRow.ch
        if (parsedGames) {
            _page.gamesTableBody?.appendChild(this.el);
        }
        if (manual) {
            await _settings.save();
        }
    }
}


/***/ }),

/***/ "./src/modules/psnp-util.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM_Object": () => (/* binding */ DOM_Object),
/* harmony export */   "default": () => (/* binding */ PSNP_Object)
/* harmony export */ });
const MONTHS = {
    January: 'Jan',
    February: 'Feb',
    March: 'Mar',
    April: 'Apr',
    May: 'May',
    June: 'Jun',
    July: 'Jul',
    August: 'Aug',
    September: 'Sep',
    October: 'Oct',
    November: 'Nov',
    December: 'Dec',
};
class DOM_Object {
    /** The object's HTML representation. */
    el;
    constructor(el) {
        this.el = el;
    }
    /** Shorthand for `this.el.querySelector(selector)` */
    $(selector) {
        return this.el.querySelector(selector);
    }
    /** Shorthand for `[...this.el.querySelectorAll(selector)]` */
    $$(selector) {
        return [...this.el.querySelectorAll(selector)];
    }
}
class PSNP_Object extends DOM_Object {
    constructor(el) {
        super(el);
    }
    static removeOrdinalFromDate(dateString) {
        return dateString.replace(/(\d+)(st|nd|rd|th)/, '$1');
    }
    // UNPOLISHED:
    static parseDateString(dateString) {
        let parsed;
        if (dateString.includes('Jan')) {
            dateString = dateString;
            dateString;
        }
        const parsable = dateString.replace(/(\d+)(st|nd|rd|th)/, '$1');
        return parsed;
    }
    /** Returns the Date (ms) a trophy was earned, or null if unearned. */
    static parseDate(tr) {
        let dateEarned = tr.querySelector('td > :is(span.separator.right, center)');
        if (!dateEarned?.querySelector('nobr')) {
            return null;
        }
        const date = dateEarned
            ?.querySelector('span.typo-top-date > nobr')
            ?.textContent.trim()
            .replace(/(\d+)(st|nd|rd|th)/, '$1'), // 4th Apr 2021 -> 4 Apr 2021
        time = dateEarned?.querySelector('span.typo-bottom-date > nobr')?.textContent.trim(); // 1:03:44 PM
        return new Date(Date.parse(`${date} ${time}`)); // 1622518461000
    }
    /** Parses a Fastest Achiever's speed as seconds. speedString is always of the form `<num> <timeMetric>(s), <num> <timeMetric>(s)`.
     */
    static speedStringToSeconds(speedString) {
        const speeds = speedString.split(`, `);
        let seconds = 0;
        for (const speed of speeds) {
            const time = Number.parseInt(speed.split(` `).at(0) ?? '');
            const timeMetric = speed?.split(` `)?.at(1)?.substring(0, 3);
            switch (timeMetric) {
                case `sec`:
                    seconds += time;
                    break;
                case `min`:
                    seconds += 60 * time;
                    break;
                case `hou`:
                    seconds += 60 * 60 * time;
                    break;
                case `day`:
                    seconds += 60 * 60 * 24 * time;
                    break;
                case `wee`:
                    seconds += 60 * 60 * 24 * 7 * time;
                    break;
                case `mon`:
                    seconds += 60 * 60 * 24 * 30.4 * time; // PSNP calculates a month as 30.4 days (https://forum.psnprofiles.com/topic/61709-bug-in-calculating-time-between-trophies/)
                    break;
                case `yea`:
                    seconds += 60 * 60 * 24 * 365 * time;
                    break;
            }
        }
        return seconds;
    }
    /** Converts seconds into a PSNP speedString of the form `<num> <timeMetric>(s), <num> <timeMetric>(s)`.
     *  The largest metrics are always used (EG: `2 years, 1 month`, even if it omits an additional 3 weeks). */
    static secondsToSpeedString(sec) {
        let speedString = ``;
        for (let i = 0; i < 2; i++) {
            if (i === 1) {
                speedString += `, `;
            }
            if (sec >= 31536000) {
                // YEARS
                const years = Math.floor(sec / 31536000);
                sec -= 31536000 * years;
                speedString += `${years} year${years > 1 ? `s` : ``}`;
            }
            else if (sec >= 2626560) {
                // MONTHS
                const months = Math.floor(sec / 2626560); // seconds in 30.4 days (PSNP calculates a month as 30.4 days)
                sec -= 2626560 * months;
                speedString += `${months} month${months > 1 ? `s` : ``}`;
            }
            else if (sec >= 604800) {
                // WEEKS
                const weeks = Math.floor(sec / 604800);
                sec -= 604800 * weeks;
                speedString += `${weeks} week${weeks > 1 ? `s` : ``}`;
            }
            else if (sec >= 86400) {
                // DAYS
                const days = Math.floor(sec / 86400);
                sec -= 86400 * days;
                speedString += `${days} day${days > 1 ? `s` : ``}`;
            }
            else if (sec >= 3600) {
                // HOURS
                const hours = Math.floor(sec / 3600);
                sec -= 3600 * hours;
                speedString += `${hours} hour${hours > 1 ? `s` : ``}`;
            }
            else if (sec >= 60) {
                // MINUTES
                const mins = Math.floor(sec / 60);
                sec -= 60 * mins;
                speedString += `${mins} minute${mins > 1 ? `s` : ``}`;
            }
            else {
                // SECONDS
                speedString += `${sec} second${sec > 1 ? `s` : ``}`;
                break;
            }
        }
        return speedString;
    }
}


/***/ }),

/***/ "./src/modules/series.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeriesRow": () => (/* binding */ SeriesRow),
/* harmony export */   "default": () => (/* binding */ SeriesPage)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/game.ts");
/* harmony import */ var _psnp_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/psnp-util.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/util.ts");



class SeriesBase {
}
/** A row from the Series Catalog. */
class SeriesRow extends SeriesBase {
    el;
    id;
    name;
    numGames;
    numPlats;
    numGold;
    numSilver;
    numBronze;
    get numTrophies() {
        return this.numBronze + this.numSilver + this.numGold + this.numPlats;
    }
    constructor(tr) {
        super();
        this.el = tr;
        this.id = +tr.querySelector(`a.title`).getAttribute(`href`).split(`/`)[2].split(`-`)[0];
        this.name = tr.querySelector(`a.title`).textContent.trim();
        this.numGames = +tr.querySelector(`td > span.small-info > b`).textContent.replace(/,/g, ``).trim();
        this.numPlats =
            +tr.querySelector(`span.icon-sprite.platinum`)?.nextElementSibling?.textContent.replace(/,/g, ``).trim() ||
                0;
        this.numGold =
            +tr.querySelector(`span.icon-sprite.gold`)?.nextElementSibling?.textContent.replace(/,/g, ``).trim() || 0;
        this.numSilver =
            +tr.querySelector(`span.icon-sprite.silver`)?.nextElementSibling?.textContent.replace(/,/g, ``).trim() || 0;
        this.numBronze =
            +tr.querySelector(`span.icon-sprite.bronze`)?.nextElementSibling?.textContent.replace(/,/g, ``).trim() || 0;
    }
    static refreshHeader(platify) {
        let seriesList = _game__WEBPACK_IMPORTED_MODULE_0__["default"].getNodes().map(n => new SeriesRow(n));
        if (platify) {
            // Hides series without plats and makes numGames = numPlats
            seriesList.forEach(series => {
                if (!series.numPlats) {
                    series.el.classList.add(`noplats`);
                    series.el.style.display = `none`;
                }
                else if (series.numPlats < series.numGames)
                    series.el.querySelector(`td > span.small-info > b`).textContent = series.numPlats;
            });
            const numHidden = document.querySelectorAll(`tbody > tr.noplats`).length;
            document.querySelector(`#numHidden`).textContent = `(${numHidden} hidden)`;
        }
        let numLoaded = platify ? document.querySelectorAll(`tbody > tr:not(.noplats)`).length : seriesList.length;
        document.querySelector(`#numLoaded`).textContent = `${numLoaded} loaded`;
    }
}
class SeriesPage extends _psnp_util__WEBPACK_IMPORTED_MODULE_1__["default"] {
    doc;
    id;
    name;
    stages;
    hasStage0;
    get numGames() {
        return this.games.length;
    }
    get numGold() {
        // return this.numBronze + this.numSilver + this.numGold + this.numPlats;
    }
    get numSilver() {
        // return this.numBronze + this.numSilver + this.numGold + this.numPlats;
    }
    get numBronze() {
        // return this.numBronze + this.numSilver + this.numGold + this.numPlats;
    }
    get numTrophies() {
        return this.numBronze + this.numSilver + this.numGold + this.numPlats;
    }
    constructor(doc = document) {
        const el = doc.querySelector(`div#content div.col-xs`);
        super(el);
        this.doc = doc;
        this.id = +(doc.querySelector(`picture.series > img`)?.getAttribute(`src`)?.split(`/`)?.at(4) ?? 0);
        this.name = doc.querySelector(`div.series-info div.ellipsis > span`)?.textContent?.trim() ?? null;
        this.stages = this.$$(`table.box.zebra.series`).map(s => new Stage(s));
        this.hasStage0 = this.stages.at(0)?.stageNum === 0;
    }
    /** @type {GameWithProgress[]} */
    get games() {
        return this.stages.flatMap(s => s.games);
    }
    get numPlats() {
        return this.stages.reduce((sum, s) => sum + s.numPlats, 0);
    }
    get numPlatted() {
        return this.stages.reduce((sum, s) => sum + s.numPlatted, 0);
    } //{ return this.games.filter(g => g.isPlatted).length; }
    get numCompleted() {
        return this.stages.reduce((sum, s) => sum + s.numCompleted, 0);
    } //{ return this.games.filter(g => g.percent === 100).length; }
    /** Visually transforms a series to be platinum-oriented by hiding nonplats and having the completion `.icon-sprite`s
     *  factor out nonplats and DLC. Also has the capacity to hide DLC rarity and make platted games appear 100% completed. */
    platify() {
        const nums = [];
        for (let i = 0; i < this.stages.length; i++) {
            const stage = this.stages[i];
            stage.platifyIconSprites();
            // Stage 0 is a special case (reserved for spinoff games), so if it's removed, it shouldn't be replaced.
            if (stage.stageNum === 0) {
                stage.platifyGames();
                continue;
            }
            // Each stageNum is stored in queue and assigned to the next eligible Stage (to maintain sequential stageNums)
            nums.push(stage.stageNum);
            if (stage.platifyGames())
                stage.stageNum = nums.shift();
        }
    }
    /** Creates and appends a header that displays aggregate series progress. */
    showProgressHeader(psnID, platify) {
        // Deleting series name's text node and normalizing capitalization
        document.querySelector(`h3`).style.textTransform = `none`;
        document.querySelector(`h3 > span`).nextSibling.remove();
        const completed = platify ? this.numPlatted : this.numCompleted, total = platify ? this.numPlats : this.games.length, progress = `<b>${this.name} (${completed}/${total})</b>`, header = (0,_util__WEBPACK_IMPORTED_MODULE_2__.newElement)(`span`, { style: `font-size:26px;` });
        // Header is colored cyan if series is completed
        header.innerHTML = `${completed === total ? progress.fontcolor(`#00ffff`) : progress} for <b>${psnID}</b>`;
        document.querySelector(`h3`).append(header);
    }
}
class Stage extends _psnp_util__WEBPACK_IMPORTED_MODULE_1__.DOM_Object {
    /** \<td\> containing stageNum; see platify() for details. */
    tdStageNum;
    tdStageicon;
    /** Stage number. "No stage" = 0. */
    #stageNum; // Private to implement custom setter.
    games;
    constructor(el) {
        super(el);
        this.tdStageNum = this.$(`tr:first-of-type td:first-of-type`);
        this.tdStageicon = this.$(`tr:first-of-type td:last-of-type`);
        this.#stageNum =
            this.tdStageNum.querySelector(`span.typo-top`)?.nextElementSibling === null
                ? +this.tdStageNum.querySelector(`span.typo-top`).textContent
                : 0;
        this.games = this.$$(`tr`).map(tr => new _game__WEBPACK_IMPORTED_MODULE_0__["default"](tr));
    }
    get numPlats() {
        return this.games.filter(g => g.hasPlat).length;
    }
    get numPlatted() {
        return this.games.filter(g => g.isPlatted).length;
    }
    get numCompleted() {
        return this.games.filter(g => g.percent === 100).length;
    }
    get stageNum() {
        return this.#stageNum;
    }
    set stageNum(n) {
        this.#stageNum = n;
        this.$(`span.typo-top`).textContent = `${n}`;
    }
    /** Modifies the Stage's completion icon-sprite to reflect only plats, showing Basic Completion (green icon + background)
     *  for 1 platted Stage game rather than 1 completed one, and Full Completion (blue icon + background) for platting all
     *  Stage games rather than completing them. */
    platifyIconSprites() {
        if (!this.numPlatted || this.numCompleted === this.games.length)
            return;
        const oldC = this.numCompleted > 0
            ? { bg: `basic-completion`, icon: `completion` }
            : { bg: `incomplete`, icon: `incomplete` }, newC = this.numPlatted === this.numPlats
            ? { bg: `full-completion`, icon: `completion-star` }
            : { bg: `basic-completion`, icon: `completion` };
        // The first 2 classList replacements affect the background color; 3rd affects icon type.
        this.el.classList.replace(oldC.bg, newC.bg);
        this.tdStageicon.classList.replace(oldC.bg, newC.bg);
        this.tdStageicon.querySelector(`img.icon-sprite`)?.classList.replace(oldC.icon, newC.icon);
    }
    /** Platifies a Stage's games and returns `true` if the Stage survives, or `false` if it's discarded due to having no plats.
     *  (Used in conjunction with Series.platify()) */
    platifyGames() {
        /** A 'Stage leader' is the first Game (\<tr\>) in a Stage (\<table\>). While other Games have 5 \<td\>, the Stage leader has 7, as
         *  it contains the Stage number and the icon-sprite representing Stage completion. So if the Stage leader has no plat, its \<td\>
         *  elements get iteratively passed to subsequent Games until a suitable Stage leader is found (or until the Stage is discarded). */
        let suitableLeader = false;
        for (let i = 0; i < this.games.length; i++) {
            const current = this.games[i];
            // Hiding DLC rarity
            // if (current.hasDLC) current.el.querySelector('td > span.separator.completion-status > span.completion').style.display = 'none';
            // If platted, put completion bar to 100%
            // if (current.isPlatted) {
            //     current.el.querySelector('div.progress-bar > div').style.width = '100%';
            //     current.el.querySelector('div.progress-bar > span').textContent = '100%';
            // }
            // If current game has plat, Stage has suitable leader and won't be discarded.
            if (current.hasPlat)
                suitableLeader = true;
            // If current game doesn't have plat...
            else {
                // ...And there's still no suitable Stage leader and no more Games, discard the entire Stage.
                if (!suitableLeader && i == this.games.length - 1)
                    this.el.style.display = `none`;
                else {
                    // ...And there's still no suitable Stage leader, make the next Game the Stage leader.
                    if (!suitableLeader) {
                        this.games[i + 1].el.insertBefore(this.tdStageNum, this.games[i + 1].el.childNodes[0]);
                        this.games[i + 1].el.appendChild(this.tdStageicon);
                    }
                    // Discard current game
                    current.el.style.display = `none`;
                }
            }
        }
        return suitableLeader;
    }
}


/***/ }),

/***/ "./src/modules/settings.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_load": () => (/* binding */ _load),
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/util.ts");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/modules/game.ts");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTrophy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/faTrophy.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faGear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/faGear.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faBoxes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/faBoxes.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCircleInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/faCircleInfo.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons_faPlusSquare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@fortawesome/free-regular-svg-icons/faPlusSquare.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons_faMinusSquare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@fortawesome/free-regular-svg-icons/faMinusSquare.js");









// import { fab } from '@fortawesome/free-brands-svg-icons'
/** Icons must first be registered in library */
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.library.add(_fortawesome_free_solid_svg_icons_faTrophy__WEBPACK_IMPORTED_MODULE_3__.faTrophy, _fortawesome_free_solid_svg_icons_faGear__WEBPACK_IMPORTED_MODULE_4__.faGear, _fortawesome_free_regular_svg_icons_faMinusSquare__WEBPACK_IMPORTED_MODULE_5__.faMinusSquare, _fortawesome_free_regular_svg_icons_faPlusSquare__WEBPACK_IMPORTED_MODULE_6__.faPlusSquare, _fortawesome_free_solid_svg_icons_faCircleInfo__WEBPACK_IMPORTED_MODULE_7__.faCircleInfo, _fortawesome_free_solid_svg_icons_faBoxes__WEBPACK_IMPORTED_MODULE_8__.faBoxes);
// dom.watch();
var viewingForumSubdomain = location.hostname.split(`.`)[0] === `forum`;
const _load = {
    body: (0,_util__WEBPACK_IMPORTED_MODULE_0__.waitForEl)(),
    userBar: (0,_util__WEBPACK_IMPORTED_MODULE_0__.waitForEl)(':is(a.dropdown-toggle.cf > span, #elUserLink)'),
    header: (0,_util__WEBPACK_IMPORTED_MODULE_0__.waitForEl)(`#content :is(div.col-xs-8 div.grow, div.col-xs-12 > div.title)`),
    search: (0,_util__WEBPACK_IMPORTED_MODULE_0__.waitForEl)('input#search'),
    table: (0,_util__WEBPACK_IMPORTED_MODULE_0__.waitForEl)(':is(#search-results tbody, #game_list > tbody, #gamesTable > tbody)'),
    /** When the footer is loaded, it should be safe to do pretty much anything. */
    footer: (0,_util__WEBPACK_IMPORTED_MODULE_0__.waitForEl)('.footer, footer'),
};
const Prefs = {
    platify: { val: false, name: `Platify`, desc: `Makes the site more platinum-oriented` },
    flagged: {
        val: false,
        name: `Flagged`,
        desc: `Hides the flag box from your profile and injects plat time into '100% Club'`,
    },
    ownershipIcons: {
        val: true,
        name: `Ownership Icons`,
        desc: `Lets you mark any game as 'owned', coloring it blue whenever it appears`,
    },
    loadAllHideCompleted: {
        val: false,
        name: `[Load All] Hide Completed`,
        desc: `"Load All" buttons will hide your completed games instead of coloring them`,
    },
    hideMultiplatform: {
        val: false,
        name: `Hide Multiplatform From Filtered`,
        desc: `Hides multiplatform games from the 'Games' page when a platform filter is applied`,
    },
    stackifyHideCompleted: {
        val: false,
        name: `Stackify - Hide Completed`,
        desc: `Doesn't show games for which you've completed all stacks.`,
    },
    // rarestTrophiesDistinct: {
    // 	val: false,
    // 	name: `Distinct 'Rarest Trophies' games`,
    // 	desc: `Only shows one trophy per game.`,
    // },
};
class Settings {
    // keys for GM.getValue(key)
    psnId;
    games;
    prefs;
    stacks;
    /** Returns array of instance properties (listed above) */
    static get keys() {
        return Object.getOwnPropertyNames(new Settings());
    }
    // static keys = Object.getOwnPropertyNames(new Settings());
    static colors = {
        /** Grey */
        completed: `hsl(40, 6%, 90%)`,
        /** Green */
        merelyPlatted: `hsl(120, 100%, 95%)`,
        /** Blue */
        playedOrOwned: `hsl(220, 100%, 95%)`,
    };
    constructor(data) {
        this.psnId = data?.psnId ?? '';
        this.prefs = data?.prefs ?? Prefs;
        this.games = data ? new GameMap(this, data?.games ?? []) : new GameMap(this);
        this.stacks = data?.stacks ?? [];
    }
    /** Loads (asynchronous) settings from instance's keys, then returns a Settings object. */
    static async init() {
        const keys = Settings.keys;
        const storedData = {};
        const settingsToLoad = [];
        // Load each property initialized in the constructor
        for (const key of keys) {
            settingsToLoad.push(GM.getValue(`psnplatinum-${key}`).then(value => {
                storedData[key] = value;
            }));
        }
        await Promise.all(settingsToLoad);
        storedData.prefs ??= {};
        // Add any new prefs
        Object.entries(Prefs).forEach(([key, val]) => {
            if (key in storedData?.prefs) {
                // console.log(`existing pref`);
            }
            else {
                console.log('new pref');
                storedData.prefs[key] = val;
            }
        });
        // Remove any obsolete Prefs
        Object.entries(storedData.prefs).forEach(([key, val]) => {
            if (key in Prefs) {
                // console.log(`existing pref`);
            }
            else {
                console.log(`Deleting obsolete pref "${key}"`);
                delete storedData.prefs[key];
            }
        });
        const settings = new Settings(storedData);
        // If no PSN ID was loaded, try to scrape it off DOM
        if (!settings.psnId) {
            console.warn('No PSN ID loaded; checking loggedIn element...');
            settings.psnId = await Settings.getLoggedInPsnId();
        }
        // Save and return populated settings
        await settings.save();
        return settings;
    }
    static async getLoggedInPsnId() {
        const userBar = await _load.userBar;
        return userBar?.textContent?.trim() ?? '';
    }
    /** Saves user settings to localStorage. */
    async save() {
        const keys = Settings.keys;
        const saves = [];
        for (const key of keys) {
            const val = this[key] instanceof Map ? [...this[key]] : this[key];
            saves.push(GM.setValue(`psnplatinum-${key}`, val));
        }
        await Promise.all(saves);
    }
    /** Creates and injects an interactive settings menu. */
    appendSettingsMenu() {
        const _s = this;
        /** Modal Settings window */
        const settingsWindow = (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`div`, {
            style: `width:100%; height:100%; z-index:2000000000; display:none; position:fixed; top:0; left:0; overflow:auto; background-color:rgba(0,0,0,0.4); padding: 200px;`,
        }, (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`div`, {
            id: `settings-outer`,
            style: `background-color:white; height:250px; max-width:1000px; margin:auto;`,
        }, (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`div`, {
            id: `settings-inner`,
            style: `position:relative; padding: 10px 20px 20px; height:100%;`,
        }, (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`h1`, {
            style: `color:#3385ff; text-align:center; font-weight:bold; margin-bottom:20px;`,
        }, `${GM_info.script.name} Settings`), (function generateCheckboxes(prefs) {
            const checkboxes = (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`div`, {
                id: `prefs`,
                style: `margin-top:10px; padding:10px; border:groove;`,
            });
            Object.entries(prefs).forEach(([key, value]) => {
                const el = (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`div`, {
                    class: `row option`,
                    style: `display:flex; flex-wrap:nowrap; margin-bottom:10px;`,
                }, //
                (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`div`, { style: `flex-basis: 250px;` }, (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`input`, {
                    type: `checkbox`,
                    id: `check-${key}`,
                    style: `margin-right:10px; `,
                    [value.val ? `checked` : `null`]: ``,
                }), (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`span`, { style: `font-weight:500;` }, prefs[key].name)), (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`span`, { style: `` }, `${value.desc}`));
                el.querySelector(`#check-${key}`).addEventListener(`click`, () => {
                    prefs[key].val = el.querySelector(`#check-${key}`).checked;
                    _s.save();
                    const msg = settingsWindow.querySelector(`#settings-saved`);
                    msg.style.visibility = `visible`;
                    setTimeout(() => {
                        msg.style.visibility = `hidden`;
                    }, 1000);
                });
                checkboxes.appendChild(el);
            });
            return checkboxes;
        })(this.prefs), 
        // 'Settings saved' message
        (function showSettingsSaved() {
            const el = (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`div`, { style: `position:absolute;  bottom:10px; visibility:hidden ` }, (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`span`, { id: `settings-saved`, style: `color:green; font-weight:bold;` }, `Settings saved`));
            return el;
        })())));
        settingsWindow.onclick = e => {
            if (e.target == settingsWindow) {
                settingsWindow.style.display = `none`;
            }
            window.history.replaceState({}, ``, window.location.href.replace(/#$/, ``));
        };
        document.body.appendChild(settingsWindow);
        // Adding Settings button to dropdown:
        const btnSettings = (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`li`, { class: `ipsMenu_item` }, (0,_util__WEBPACK_IMPORTED_MODULE_0__.newElement)(`a`, { id: `settingsbtn`, href: `javascript:void(0);` }, `PSNPlatinum `, this.icons.settings));
        btnSettings.querySelector(`#settingsbtn`).onclick = () => {
            settingsWindow.style.display = `block`;
        };
        const anchor = viewingForumSubdomain
            ? null //document.querySelector('#elUserLink_menu > li.ipsMenu_sep')  // No need to read user settings from forums just yet
            : document.querySelectorAll(`ul.dropdown-menu.right li.divider`)[1];
        anchor?.before(btnSettings);
    }
    get icons() {
        const _settings = this;
        return class Icon {
            static get settings() {
                return (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.icon)(_fortawesome_free_solid_svg_icons_faGear__WEBPACK_IMPORTED_MODULE_4__.faGear).node[0];
            }
            static get trophy() {
                return (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.icon)(_fortawesome_free_solid_svg_icons_faTrophy__WEBPACK_IMPORTED_MODULE_3__.faTrophy).node[0];
            }
            static get gameOwned() {
                const i = (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.icon)(_fortawesome_free_regular_svg_icons_faPlusSquare__WEBPACK_IMPORTED_MODULE_6__.faPlusSquare, {
                    styles: { cursor: 'pointer', 'margin-left': '5px', 'background-color': '#80ff80' },
                    attributes: { title: `Register game as 'owned'` },
                    classes: ['iconOwnership'],
                }).node[0];
                i.addEventListener(`click`, function onclickOwnIcon() {
                    const g = this.closest('tr');
                    if (!g) {
                        throw new Error(`No nearby game node found.`);
                    }
                    const game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](g);
                    if (!_settings.games.has(game.id)) {
                        _settings.games.set(game.id, game);
                        _settings.save();
                        _settings.games.markOrHide(game);
                        this.replaceWith(_settings.icons.gameNotOwned);
                    }
                });
                return i;
            }
            static get gameNotOwned() {
                const i = (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.icon)(_fortawesome_free_regular_svg_icons_faMinusSquare__WEBPACK_IMPORTED_MODULE_5__.faMinusSquare, {
                    styles: { cursor: 'pointer', 'margin-left': '5px', 'background-color': '#ff9999' },
                    attributes: { title: `Unregister game as 'owned'` },
                    classes: ['iconOwnership'],
                }).node[0];
                i.addEventListener(`click`, function onclickDisownIcon() {
                    const g = this.closest('tr');
                    if (!g) {
                        throw new Error(`No nearby game node found.`);
                    }
                    const game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](g);
                    if (!_settings.games.isPlayed(game.id)) {
                        // If game exists in cache, but is unplayed (played games shouldn't be uncached)
                        _settings.games.delete(game.id);
                        _settings.save();
                        _settings.games.markOrHide(game);
                        this.replaceWith(_settings.icons.gameOwned);
                    }
                });
                return i;
            }
            static get toolTip() {
                const i = (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.icon)(_fortawesome_free_solid_svg_icons_faCircleInfo__WEBPACK_IMPORTED_MODULE_7__.faCircleInfo, {
                    styles: { cursor: 'pointer', 'margin-left': '5px' },
                    classes: ['toolTip'],
                }).node[0];
                return i;
            }
            static get stack() {
                const i = (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.icon)(_fortawesome_free_solid_svg_icons_faBoxes__WEBPACK_IMPORTED_MODULE_8__.faBoxes, {
                    styles: { cursor: 'pointer', 'margin-left': '5px' },
                    classes: ['stack-icon'],
                }).node[0];
                i.addEventListener(`click`, async function onclickStackIcon() {
                    const g = this.closest('tr');
                    if (!g) {
                        throw new Error(`No nearby game node found.`);
                    }
                    const game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](g);
                    await game.updateStacks({ _settings, _page: _util__WEBPACK_IMPORTED_MODULE_0__._page, manual: true });
                    // Figure out best way to call stackify function
                });
                return i;
            }
        };
    }
}
class GameMap extends Map {
    settings;
    constructor(settings, map) {
        map ? super(map) : super();
        this.settings = settings;
    }
    /** Returns true if the passed Game ID is played (has numerical percent), otherwise false.
     * @param {number} id */
    isPlayed(id) {
        const g = this.get(id);
        return typeof g?.percent === 'number' && !Number.isNaN(g.percent);
    }
    /** Returns true if the passed Game ID is cached and completed (according to user prefs), otherwise false. */
    isCompleted(id) {
        if (!this.isPlayed(id)) {
            return false;
        }
        const g = this.get(id);
        return this.settings.prefs.platify.val ? !!g.isPlatted : g.percent === 100;
    }
    markOrHide(...games) {
        games.forEach(game => {
            const isCompleted = this.isCompleted(game.id);
            const isOnlyPlatted = !isCompleted && this.isPlayed(game.id) && this.get(game.id)?.isPlatted;
            const playedOrOwned = !isCompleted && this.has(game.id);
            if (isCompleted) {
                game.el.querySelectorAll(`td:not([rowspan])`).forEach(x => (x.style.backgroundColor = Settings.colors.completed));
                // Settings.bools.loadAllHideCompleted.val
                //     ? game.el.style.display='none'
                //     : game.el.querySelectorAll('td:not([rowspan])').forEach((x) => x.style.backgroundColor = Settings.colors.completed);
                // Green
            }
            else if (isOnlyPlatted) {
                game.el.querySelectorAll(`td:not([rowspan])`).forEach(x => (x.style.backgroundColor = Settings.colors.merelyPlatted));
            }
            // Blue
            else if (playedOrOwned) {
                game.el.querySelectorAll(`td:not([rowspan])`).forEach(x => (x.style.backgroundColor = Settings.colors.playedOrOwned));
            }
            // Clears any formatting
            else {
                game.el.querySelectorAll(`td:not([rowspan])`).forEach(x => (x.style.backgroundColor = ``));
            }
        });
    }
    appendOwnershipIcon(...games) {
        if (!this.settings.prefs.ownershipIcons) {
            return;
        }
        games.forEach(game => {
            if (this.isPlayed(game.id)) {
                return;
            }
            const icon = this.has(game.id) ? this.settings.icons.gameNotOwned : this.settings.icons.gameOwned;
            if (game.el.querySelector(`.iconOwnership`)) {
                game.el.querySelector(`.iconOwnership`).replaceWith(icon);
            }
            else {
                game.el.querySelector(`a.title, span > a`)?.parentNode?.appendChild(icon);
            }
        });
    }
}


/***/ }),

/***/ "./src/modules/trophies.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Trophy": () => (/* binding */ Trophy),
/* harmony export */   "TrophyGrades": () => (/* binding */ TrophyGrades),
/* harmony export */   "TrophyList": () => (/* binding */ TrophyList)
/* harmony export */ });
/* harmony import */ var _psnp_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/modules/psnp-util.ts");

var TrophyGrades;
(function (TrophyGrades) {
    TrophyGrades[TrophyGrades["Bronze"] = 15] = "Bronze";
    TrophyGrades[TrophyGrades["Silver"] = 30] = "Silver";
    TrophyGrades[TrophyGrades["Gold"] = 90] = "Gold";
    TrophyGrades[TrophyGrades["Platinum"] = 300] = "Platinum";
})(TrophyGrades || (TrophyGrades = {}));
var grade;
/** A basic trophy. Also contains static utility functions. */
class Trophy extends _psnp_util__WEBPACK_IMPORTED_MODULE_0__["default"] {
    el;
    name;
    desc;
    /** Number that uniquely identifies a trophy within a list, ranging from 1 to [number of trophies] */
    id;
    imgSrc;
    rarity;
    grade;
    isCompleted;
    /** Trophy earn date (ms), or null if unearned */
    dateEarned;
    constructor(tr) {
        super(tr);
        // Trophy list trophies each have 7 <td>, whereas Advisor and Log trophies have >7 and require a different rarity selector.
        const standard = tr.children.length === 7;
        this.el = tr;
        this.name = tr.querySelector('td > a.title')?.textContent?.trim() || '';
        this.desc = tr.querySelector('td > br')?.nextSibling?.textContent?.trim() || '';
        this.id = +tr.querySelector('a.title')?.getAttribute('href')?.split('/')?.at(3)?.split('-')?.at(0) ?? undefined;
        this.imgSrc = tr.querySelector('img')?.getAttribute('src');
        this.rarity = standard
            ? +tr.querySelector('td.hover-hide span.typo-top')?.textContent?.trim()?.replace('%', '')
            : +tr.querySelector('td:nth-last-of-type(2) > span > span.typo-top')?.textContent.trim()?.replace('%', '');
        this.grade = tr.querySelector(' td > span > img[title]')?.getAttribute('title')?.trim();
        this.isCompleted = standard
            ? tr.querySelector('td:nth-of-type(3) > span > span.typo-top-date') !== null
            : tr.querySelector('td:nth-of-type(6) > span > span.typo-top-date') !== null;
        this.dateEarned = Trophy.parseDate(tr);
    }
    get rarityString() {
        return this.rarity.toFixed(2);
    }
    /** Point value corresponding to trophy type */
    get points() {
        let pts = 0;
        switch (this.grade) {
            case 'Bronze':
                pts = 15;
                break;
            case 'Silver':
                pts = 30;
                break;
            case 'Gold':
                pts = 90;
                break;
            case 'Platinum':
                pts = 180;
                break;
        }
        return pts;
    }
    /** Returns trophy nodes from PSNP trophy lists, Trophy Log, and Trophy Advisor. */
    static getNodes(opts = {}) {
        const defaults = { omitDLC: false, doc: document };
        opts = Object.assign({}, defaults, opts);
        const trophyGroups = opts.doc.querySelectorAll('#content > div.row > :is(div.col-xs, div.col-xs-12) > div.box > table:last-child > tbody');
        if (trophyGroups.length === 0) {
            console.log('ERROR: No trophies selected');
            return [];
        }
        else if (opts.omitDLC) {
            return trophyGroups[0].querySelectorAll('tr:not(:empty)');
        }
        else {
            return opts.doc.querySelectorAll('#content > div.row > :is(div.col-xs, div.col-xs-12) > div.box > table:last-child > tbody > tr:not(:empty)');
        }
    }
    /** Returns an array of trophies from the supplied (or current) document. Works with PSNP trophy lists, Trophy Log, and Trophy Advisor.
     * @param {{omitDLC: boolean, doc: document}} opts
     * @returns {Trophy[]} */
    static getTrophies(opts = { omitDLC: false, doc: document }) {
        const trophies = [];
        this.getNodes(opts).forEach(tr => trophies.push(new Trophy(tr)));
        return trophies;
    }
}
/** A trophy with extra details: game, number, owners, achievers */
// class TrophyFromLog extends Trophy {
//     #game;
//     constructor(tr) {
//         super(tr);
//         this.game = tr.querySelector(`a > img.game`).getAttribute(`title`);
//     }
//     get game() { return this.#game }
// }
/** Utility class containing properties and methods unique to PSNP trophy lists */
class TrophyList {
    id;
    /** @type {HTMLTableRowElement[]} */
    stacks = [];
    /** @type {HTMLTableRowElement[]} */
    recentPlayers = [];
    constructor(doc = document) {
        doc.querySelectorAll(`div.col-xs-4 >  div.title.flex.v-align > div.grow > h3`).forEach(h3 => {
            if (h3.textContent === `Other Platforms and Regions`) {
                this.stacks = Array.from(h3.closest(`div.title.flex.v-align`).nextElementSibling.querySelectorAll(`tr`));
            }
            else if (h3.textContent === `Recent Players`)
                this.recentPlayers = Array.from(h3.closest(`div.title.flex.v-align`).nextElementSibling.querySelectorAll(`tr`));
        });
        // this.id = +doc.URL.split('/')[4].split('-')[0];
    }
}


/***/ }),

/***/ "./src/modules/util.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyCheckbox": () => (/* binding */ CopyCheckbox),
/* harmony export */   "Page": () => (/* binding */ Page),
/* harmony export */   "_page": () => (/* binding */ _page),
/* harmony export */   "assignSharedProps": () => (/* binding */ assignSharedProps),
/* harmony export */   "copyToClipboard": () => (/* binding */ copyToClipboard),
/* harmony export */   "fetchDoc": () => (/* binding */ fetchDoc),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "newElement": () => (/* binding */ newElement),
/* harmony export */   "sleep": () => (/* binding */ sleep),
/* harmony export */   "waitForEl": () => (/* binding */ waitForEl)
/* harmony export */ });
class Page {
    w;
    url;
    sp;
    constructor(w = window) {
        this.w = w;
        this.url = new URL(w.location.href);
        this.sp = new URLSearchParams(w.location.search);
    }
    get site() {
        switch (this.url.hostname) {
            case `psnprofiles.com`:
                return `PSNP`;
            case `forum.psnprofiles.com`:
                return `PSNPf`;
            case `www.trueachievements.com`:
                return `TA`;
            case `www.truetrophies.com`:
                return `TT`;
            default:
                return;
        }
    }
    get pageType() {
        switch (this.site) {
            case 'PSNP':
                switch (this.url.pathname) {
                    case `/series`:
                        return 'series catalog';
                    default:
                        return 'generic';
                }
            case 'PSNPf':
                if (this.url.pathname.split(`/`).at(1) === `topic`)
                    return 'thread';
                if (this.url.pathname.split(`/`).at(1) === `forum`)
                    return 'subforum';
            default:
                return;
        }
    }
    /** Returns the \<tbody\> that holds the games on the current (or passed) page. */
    get gamesTableBody() {
        return this.w.document.querySelector(`:is(#search-results tbody, #game_list > tbody, #gamesTable > tbody)`);
    }
}
const _page = new Page();
function newElement(tagname, attributes, ...children) {
    const el = document.createElement(tagname);
    for (const key in attributes) {
        el.setAttribute(key, attributes[key]);
    }
    children.forEach(child => {
        if (typeof child === 'string') {
            el.appendChild(document.createTextNode(child));
        }
        else {
            el.appendChild(child);
        }
    });
    return el;
}
/** Fetches a URL and returns the parsed HTML Document.
 * @param {string} url
 * @returns */
async function fetchDoc(url, opt) {
    const parser = new DOMParser();
    const res = await fetch(url, opt);
    const doc = await res.text();
    return parser.parseFromString(doc, `text/html`);
}
function copyToClipboard(text) {
    var type = `text/html`;
    var blob = new Blob([text], { type });
    // eslint-disable-next-line no-undef
    var data = [new ClipboardItem({ [type]: blob })];
    navigator.clipboard.write(data);
}
/** Returns true if `x` is a pure object, otherwise false if it's a primitive/null/array/function/Map/Set. */
function isObject(x) {
    return typeof x === `object` && x !== null && !Array.isArray(x) && !(x instanceof Map) && !(x instanceof Set);
}
/** Assigns all mutual enumerable properties of `source` to `target`. */
function assignSharedProps(target, source) {
    Object.keys(source)
        .filter(key => key in target)
        .forEach(key => {
        console.log(`${target[key]} = ${source[key]} (${key})`);
        if (isObject(target[key]) && isObject(source[key])) {
            assignSharedProps(target[key], source[key]);
        }
        else
            target[key] = source[key];
    });
}
/** Waits a specified number of `ms`. */
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// querySelector<E extends Element = Element>(selectors: string): E | null;
/** Waits for `document.body` to spawn, then either returns it (if no argument is passed)
 *  or returns HTMLElement matching `selector` if/when it spawns. */
async function waitForEl(selector) {
    while (!document.body) {
        await sleep(10);
    }
    return new Promise(function (resolve) {
        if (!selector) {
            resolve(document.body);
        }
        else if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
        }
        var observer = new MutationObserver(function (mutations) {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}
/** Populates a trophy/achievement list with checkboxes that allow easy copying to
 *  clipboard with RTF designed specifically for OneNote. */
class CopyCheckbox {
    members;
    selected;
    richContainer = newElement(`div`, {});
    /** @param {Trophy[]} trophies */
    constructor(...trophies) {
        this.members = [];
        this.selected = [];
        this.addMembers(...trophies);
    }
    addMembers(...trophies) {
        trophies.forEach(ach => {
            const cb = ach.el.querySelector(`input.copyCheck`) ||
                newElement(`input`, {
                    type: `checkbox`,
                    style: `margin-left:5px;`,
                    class: `copyCheck`,
                });
            cb.addEventListener(`change`, async (e) => {
                if (e.target.checked)
                    this.selected.push(ach);
                else
                    this.selected.splice(this.selected.indexOf(ach), 1);
                this.richContainer.innerHTML = ``;
                this.selected.forEach(sel => {
                    this.richContainer.innerHTML += `<b>${sel.name}</b>&shy;${`\v` + sel.desc}<br>`;
                });
                copyToClipboard(this.richContainer.innerHTML);
            });
            // if (ach.el.querySelector)
            ach.el.querySelector(`:is(td > a.title, .titleAnchor)`).after(cb);
        });
        this.members = [...this.members, ...trophies];
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => (err && reject(promise[webpackError] = err), outerResolve()));
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
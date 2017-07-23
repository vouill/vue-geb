(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs"));
	else if(typeof define === 'function' && define.amd)
		define("vue-geb", ["rxjs"], factory);
	else if(typeof exports === 'object')
		exports["vue-geb"] = factory(require("rxjs"));
	else
		root["vue-geb"] = factory(root["rxjs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gebHandler", function() { return gebHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bus", function() { return bus; });




var gebus = new __WEBPACK_IMPORTED_MODULE_0_rxjs___default.a.Subject();

var geb = {};
var gebInstance = {
  getBus: function getBus() {
    return gebus;
  },
  emit: function emit(obj) {
    gebus.next(obj);
  },
  getFilteredBus: function getFilteredBus(arg) {
    if (!isObject(arg)) {
      throw new Error("data provided to geb().filterBy() isn't an object");
    }
    return gebus.filter(function (gebItem) {
      var flag = true;
      var props = Object.getOwnPropertyNames(arg);
      props.forEach(function (prop) {
        if (gebItem[prop] !== arg[prop]) {
          flag = false;
        }
      });
      return flag;
    });
  }
};

geb.install = function (Vue, options) {
  Vue.directive('geb-click-emit', {
    componentUpdated: function componentUpdated(el, binding) {},
    inserted: function inserted(el, binding) {
      el.addEventListener('click', function (event) {
        gebus.next(binding.value);
      });
    }
  });
  Vue.directive('geb-keyupenter-emit', {
    componentUpdated: function componentUpdated(el, binding) {},
    inserted: function inserted(el, binding) {
      el.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
          gebus.next(binding.value);
        }
      });
    }
  });
  Vue.prototype.$geb = gebInstance;
};

function isObject(obj) {
  return obj === Object(obj);
}

/* harmony default export */ __webpack_exports__["default"] = geb;

var gebHandler = gebInstance;
var bus = gebus;

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-geb.js.map
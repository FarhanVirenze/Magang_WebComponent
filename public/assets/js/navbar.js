/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/navbar.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/navbar.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ======================== */
/* ====== DESKTOP NAV ===== */
/* ======================== */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  transition: all 0.3s ease;
}

.navbar.transparent {
  background-color: rgba(255, 255, 255, 0); /* transparan penuh */
  color: #1e293b;
  box-shadow: none;
}

.navbar.transparent .navbar-menu a {
  color: white;
}

.navbar.scrolled {
  background-color: white;
  color: #1e293b;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.navbar.scrolled .navbar-menu a {
  color: #1e293b;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 5px;
}

.navbar-logo img {
  height: 65px;
  width: auto;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 13px;
  line-height: 1.2;
  font-weight: 500;
}

.navbar.scrolled .logo-text {
  color: black;
}

.navbar-toggle {
  display: none;
  font-size: 1.5em;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
}

.navbar.scrolled .navbar-toggle {
  color: #1e293b;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 1.25rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.navbar-menu li {
  position: relative;
}

.navbar-menu a {
  color: inherit;
  font-weight: 500;
  font-size: 0.95em;
  text-decoration: none;
}

.navbar-menu .dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  color: #1e293b;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 0.5rem 0;
  z-index: 999;
  border-radius: 6px;
  min-width: 160px;
}

.navbar-menu .dropdown-menu li {
  padding: 0.5rem 1rem;
}

.navbar-menu .dropdown:hover .dropdown-menu {
  display: block;
}

.navbar-menu .dropdown-menu a:hover {
  color: var(--primary);
}

/* ============================ */
/* ========== MOBILE ========== */
/* ============================ */

@media (max-width: 1024px) {
  .navbar-toggle {
    display: block;
  }

  .navbar.transparent .navbar-menu a {
    color: black;
  }

  .navbar-menu {
    display: flex; /* jangan pakai display: none karena tidak bisa dianimasikan */
    flex-direction: column;
    width: 100%;
    background-color: #ffffff;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 1rem 0;
    border-top: 1px solid #e2e8f0;

    /* Animasi slide in */
    transform: translateX(100%);
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    pointer-events: none;
  }

  .navbar-menu.open {
    transform: translateX(0);
    opacity: 1;
    pointer-events: auto;
  }

  .navbar-menu li {
    padding: 0.5rem 1.5rem;
    width: 100%;
  }

  .navbar-menu .dropdown-menu {
    position: static;
    background: #f9fafb;
    margin-top: 0.5rem;
    box-shadow: none;
    display: none;
    border-left: 3px solid var(--primary);
    border-radius: 4px;
  }

  .navbar-menu .dropdown.open .dropdown-menu {
    display: block;
  }

  .navbar-menu .dropdown > a::after {
    content: '▼';
    display: inline-block;
    font-size: 0.75em;
    margin-left: 6px;
    transform: rotate(0deg);
    transition: transform 0.3s ease;
  }

  .navbar-menu .dropdown.open > a::after {
    transform: rotate(180deg);
  }
}
`, "",{"version":3,"sources":["webpack://./src/navbar.css"],"names":[],"mappings":"AAAA,6BAA6B;AAC7B,6BAA6B;AAC7B,6BAA6B;;AAE7B;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,uBAAuB;EACvB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,wCAAwC,EAAE,qBAAqB;EAC/D,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,cAAc;EACd,wCAAwC;AAC1C;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,SAAS;EACT,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,iBAAiB;EACjB,cAAc;EACd,0CAA0C;EAC1C,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,iCAAiC;AACjC,iCAAiC;AACjC,iCAAiC;;AAEjC;EACE;IACE,cAAc;EAChB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa,EAAE,8DAA8D;IAC7E,sBAAsB;IACtB,WAAW;IACX,yBAAyB;IACzB,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,eAAe;IACf,6BAA6B;;IAE7B,qBAAqB;IACrB,2BAA2B;IAC3B,UAAU;IACV,kDAAkD;IAClD,oBAAoB;EACtB;;EAEA;IACE,wBAAwB;IACxB,UAAU;IACV,oBAAoB;EACtB;;EAEA;IACE,sBAAsB;IACtB,WAAW;EACb;;EAEA;IACE,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,qCAAqC;IACrC,kBAAkB;EACpB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,YAAY;IACZ,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;IACvB,+BAA+B;EACjC;;EAEA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":["/* ======================== */\r\n/* ====== DESKTOP NAV ===== */\r\n/* ======================== */\r\n\r\n.navbar {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  padding: 0.75rem 1.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  z-index: 100;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.navbar.transparent {\r\n  background-color: rgba(255, 255, 255, 0); /* transparan penuh */\r\n  color: #1e293b;\r\n  box-shadow: none;\r\n}\r\n\r\n.navbar.transparent .navbar-menu a {\r\n  color: white;\r\n}\r\n\r\n.navbar.scrolled {\r\n  background-color: white;\r\n  color: #1e293b;\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar.scrolled .navbar-menu a {\r\n  color: #1e293b;\r\n}\r\n\r\n.navbar-left {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.navbar-logo {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.navbar-logo img {\r\n  height: 65px;\r\n  width: auto;\r\n  object-fit: contain;\r\n}\r\n\r\n.logo-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: white;\r\n  font-size: 13px;\r\n  line-height: 1.2;\r\n  font-weight: 500;\r\n}\r\n\r\n.navbar.scrolled .logo-text {\r\n  color: black;\r\n}\r\n\r\n.navbar-toggle {\r\n  display: none;\r\n  font-size: 1.5em;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\n.navbar.scrolled .navbar-toggle {\r\n  color: #1e293b;\r\n}\r\n\r\n.navbar-menu {\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 1.25rem;\r\n  margin: 0;\r\n  padding: 0;\r\n  align-items: center;\r\n}\r\n\r\n.navbar-menu li {\r\n  position: relative;\r\n}\r\n\r\n.navbar-menu a {\r\n  color: inherit;\r\n  font-weight: 500;\r\n  font-size: 0.95em;\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar-menu .dropdown-menu {\r\n  display: none;\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  background: white;\r\n  color: #1e293b;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\r\n  padding: 0.5rem 0;\r\n  z-index: 999;\r\n  border-radius: 6px;\r\n  min-width: 160px;\r\n}\r\n\r\n.navbar-menu .dropdown-menu li {\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.navbar-menu .dropdown:hover .dropdown-menu {\r\n  display: block;\r\n}\r\n\r\n.navbar-menu .dropdown-menu a:hover {\r\n  color: var(--primary);\r\n}\r\n\r\n/* ============================ */\r\n/* ========== MOBILE ========== */\r\n/* ============================ */\r\n\r\n@media (max-width: 1024px) {\r\n  .navbar-toggle {\r\n    display: block;\r\n  }\r\n\r\n  .navbar.transparent .navbar-menu a {\r\n    color: black;\r\n  }\r\n\r\n  .navbar-menu {\r\n    display: flex; /* jangan pakai display: none karena tidak bisa dianimasikan */\r\n    flex-direction: column;\r\n    width: 100%;\r\n    background-color: #ffffff;\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    padding: 1rem 0;\r\n    border-top: 1px solid #e2e8f0;\r\n\r\n    /* Animasi slide in */\r\n    transform: translateX(100%);\r\n    opacity: 0;\r\n    transition: transform 0.3s ease, opacity 0.3s ease;\r\n    pointer-events: none;\r\n  }\r\n\r\n  .navbar-menu.open {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n  }\r\n\r\n  .navbar-menu li {\r\n    padding: 0.5rem 1.5rem;\r\n    width: 100%;\r\n  }\r\n\r\n  .navbar-menu .dropdown-menu {\r\n    position: static;\r\n    background: #f9fafb;\r\n    margin-top: 0.5rem;\r\n    box-shadow: none;\r\n    display: none;\r\n    border-left: 3px solid var(--primary);\r\n    border-radius: 4px;\r\n  }\r\n\r\n  .navbar-menu .dropdown.open .dropdown-menu {\r\n    display: block;\r\n  }\r\n\r\n  .navbar-menu .dropdown > a::after {\r\n    content: '▼';\r\n    display: inline-block;\r\n    font-size: 0.75em;\r\n    margin-left: 6px;\r\n    transform: rotate(0deg);\r\n    transition: transform 0.3s ease;\r\n  }\r\n\r\n  .navbar-menu .dropdown.open > a::after {\r\n    transform: rotate(180deg);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/diskominfo.png":
/*!****************************!*\
  !*** ./src/diskominfo.png ***!
  \****************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/navbar.css":
/*!************************!*\
  !*** ./src/navbar.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./navbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/navbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/navbar.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.css */ "./src/navbar.css");
/* harmony import */ var _diskominfo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diskominfo.png */ "./src/diskominfo.png");


function renderNavbar() {
    return `
    <nav class="navbar transparent">
      <div class="navbar-left">
        <div class="navbar-logo">
          <img id="navbar-logo-img" src="${_diskominfo_png__WEBPACK_IMPORTED_MODULE_1__}" alt="Logo Diskominfo Jogja" />
        </div>
        <div class="logo-text">
          <div>Dinas Komunikasi dan Informatika</div>
          <div>Daerah Istimewa Yogyakarta</div>
        </div>
      </div>

      <button id="navbar-toggle" class="navbar-toggle">
        <span class="icon-menu">☰</span>
        <span class="icon-close" style="display: none;">✕</span>
      </button>

      <ul class="navbar-menu">
        <li><a href="#">Beranda</a></li>

        <li class="dropdown">
          <a href="#">Profil</a>
          <ul class="dropdown-menu">
            <li><a href="#">Visi & Misi</a></li>
            <li><a href="#">Struktur Organisasi</a></li>
          </ul>
        </li>

        <li class="dropdown">
          <a href="#">Program & Kegiatan</a>
          <ul class="dropdown-menu">
            <li><a href="#">Program Kerja</a></li>
            <li><a href="#">Agenda</a></li>
          </ul>
        </li>

        <li class="dropdown">
          <a href="#">Layanan</a>
          <ul class="dropdown-menu">
            <li><a href="#">Helpdesk</a></li>
            <li><a href="#">Pengaduan</a></li>
          </ul>
        </li>

        <li><a href="#">Berita</a></li>
        <li><a href="#">Galeri</a></li>
        <li><a href="#">Kontak</a></li>
        <li><a href="#">Kebijakan</a></li>
        <li><a href="#" aria-label="Pencarian"><strong>🔍</strong></a></li>
      </ul>
    </nav>
  `;
}
class MainNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = renderNavbar();
        const toggle = this.querySelector('#navbar-toggle');
        const menu = this.querySelector('.navbar-menu');
        const iconMenu = toggle === null || toggle === void 0 ? void 0 : toggle.querySelector('.icon-menu');
        const iconClose = toggle === null || toggle === void 0 ? void 0 : toggle.querySelector('.icon-close');
        toggle === null || toggle === void 0 ? void 0 : toggle.addEventListener('click', () => {
            const isOpen = menu === null || menu === void 0 ? void 0 : menu.classList.toggle('open');
            if (menu === null || menu === void 0 ? void 0 : menu.classList.contains('open')) {
                iconMenu.style.display = 'none';
                iconClose.style.display = 'inline';
            }
            else {
                iconMenu.style.display = 'inline';
                iconClose.style.display = 'none';
            }
        });
        // Mobile dropdown toggle (click instead of hover)
        const dropdownLinks = this.querySelectorAll('.dropdown > a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const dropdownItem = e.currentTarget.closest('.dropdown');
                    // Close other open dropdowns
                    this.querySelectorAll('.dropdown.open').forEach(openItem => {
                        if (openItem !== dropdownItem) {
                            openItem.classList.remove('open');
                        }
                    });
                    dropdownItem === null || dropdownItem === void 0 ? void 0 : dropdownItem.classList.toggle('open');
                }
            });
        });
        // Scroll behavior
        window.addEventListener('scroll', () => {
            const navbar = this.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar === null || navbar === void 0 ? void 0 : navbar.classList.add('scrolled');
                navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove('transparent');
            }
            else {
                navbar === null || navbar === void 0 ? void 0 : navbar.classList.add('transparent');
                navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove('scrolled');
            }
        });
    }
}
customElements.define('main-navbar', MainNavbar);

})();

/******/ })()
;
//# sourceMappingURL=navbar.js.map
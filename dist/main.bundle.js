"use strict";
(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["main"],{

/***/ "./modules/get.js":
/*!************************!*\
  !*** ./modules/get.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GET)
/* harmony export */ });
class GET {
  constructor() {
    this.index = 0;
  }

  getHome = async () => {
    // const fectedData = await fetch(url);
    // const jFormat = await fectedData.json();
    const footer = document.querySelector('footer');
    const overall = document.querySelector('.overall-container');
    
    const dynamic_section = document.createElement('section');
    dynamic_section.id = 'card-holder';
    dynamic_section.className = 'card-holder';

    // for (let i = 0; i < jFormat.length; i += 1) {
    //   dynamic_section.innerHTML += `
    //   <img src=${jFormat[i].show.image.medium}>
    //   <span>${jFormat[i].show.name}</span>
    //   <i id="heart${i}" class="fa fa-heart"></i>
    //   <button id="btn${i}">Comment</button>
    //   `;
    // }
    
    overall.insertBefore(dynamic_section, footer);
  }

  getSearch = async (url) => {
    const fectedData = await fetch(url);
    const jFormat = await fectedData.json();
    const dynamic_section = document.querySelector('.card-holder');
    // dynamic_section.innerHTML = "";

    for (let i = 0; i < jFormat.length; i += 1) {
      dynamic_section.innerHTML += `
      <div>
        <img src=${jFormat[i].show.image.medium}>
        <span>${jFormat[i].show.name}</span>
        <i id="heart${i}" class="fa fa-heart"></i>
        <button id="btn${i}">Comment</button>
      </div>
      `;
    }
  }
}


/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MENU)
/* harmony export */ });
class MENU {
  constructor() {
    this.index = 0;
  }
  
  toggleMenu = () => {
    const links = document.querySelector('#myLinks');
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n.overall-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n  margin: -10px;\r\n}\r\n\r\n.mobile-nav a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: x-large;\r\n  padding: 12px;\r\n}\r\n\r\n.mobile-nav a:hover {\r\n  color: #3c9ba5;\r\n}\r\n\r\n.separator {\r\n  color: white;\r\n  font-size: larger;\r\n}\r\n\r\n.search-bar {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.search {\r\n  height: 30px;\r\n  border-top-left-radius: 15px;\r\n  border-bottom-left-radius: 15px;\r\n  border-right: 0;\r\n  width: 60vw;\r\n}\r\n\r\n.search-btn {\r\n  border-top-right-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  border-left: 0;\r\n  background-color: #3c948b;\r\n  width: 30vw;\r\n}\r\n\r\n.menu-bar {\r\n  background-color: #3c948b;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 100vw;\r\n  height: 30px;\r\n  align-items: center;\r\n}\r\n\r\n.fa-bars,\r\n.menu-bar span {\r\n  color: #fbfaf9;\r\n}\r\n\r\n.fa-bars:hover {\r\n  color: #cacaca;\r\n}\r\n\r\n#myLinks {\r\n  display: none;\r\n  width: 100vw;\r\n}\r\n\r\n#myLinks a {\r\n  color: white;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n  display: block;\r\n  background-color: #1f4b47;\r\n}\r\n\r\n#myLinks a:hover {\r\n  background-color: #3f3f3f;\r\n}\r\n\r\nheader {\r\n  background-color: #272A31;\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n\r\n\r\n.card-holder{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n#heart {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n\r\n\r\n\r\n.span-one,\r\n.span-two {\r\n  font-size: larger;\r\n  color: #fbfaf9;\r\n  padding: 12px;\r\n}\r\n\r\n.left-footer,\r\n.right-footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.footer-three a,\r\n.footer-four a {\r\n  color: #3c9ba5;\r\n  text-decoration: none;\r\n  font-size: larger;\r\n  padding: 12px;\r\n}\r\n\r\n.footer-four a {\r\n  font-size: medium;\r\n}\r\n\r\n.footer-three a:hover,\r\n.footer-four a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nfooter {\r\n  /* display: flex; */\r\n  justify-content: space-between;\r\n  background-color: #272A31;\r\n  width: 100vw;\r\n  padding: 10px 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .logo {\r\n    order: 1;\r\n  }\r\n\r\n  .account {\r\n    order: 3;\r\n  }\r\n  \r\n  .menu-bar {\r\n    display: none;\r\n  }\r\n  .search-bar {\r\n    width: 50vw;\r\n    order: 2;\r\n  }\r\n\r\n  #myLinks {\r\n    display: flex;\r\n    order: 4;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  #myLinks a {\r\n    display: inline;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  footer {\r\n    display: flex;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,4BAA4B;EAC5B,+BAA+B;EAC/B,eAAe;EACf,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;EAChC,cAAc;EACd,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,6BAA6B;AAC/B;;;;AAIA;EACE,aAAa;EACb,sBAAsB;AACxB;;;AAGA;EACE,WAAW;EACX,YAAY;AACd;;;;;AAKA;;EAEE,iBAAiB;EACjB,cAAc;EACd,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,cAAc;EACd,qBAAqB;EACrB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,0BAA0B;AAC5B;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,yBAAyB;EACzB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE;IACE,QAAQ;EACV;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,aAAa;EACf;EACA;IACE,WAAW;IACX,QAAQ;EACV;;EAEA;IACE,aAAa;IACb,QAAQ;IACR,yBAAyB;EAC3B;;EAEA;IACE,eAAe;IACf,yBAAyB;EAC3B;;EAEA;IACE,aAAa;EACf;AACF","sourcesContent":["\r\n.overall-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n  margin: -10px;\r\n}\r\n\r\n.mobile-nav a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: x-large;\r\n  padding: 12px;\r\n}\r\n\r\n.mobile-nav a:hover {\r\n  color: #3c9ba5;\r\n}\r\n\r\n.separator {\r\n  color: white;\r\n  font-size: larger;\r\n}\r\n\r\n.search-bar {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.search {\r\n  height: 30px;\r\n  border-top-left-radius: 15px;\r\n  border-bottom-left-radius: 15px;\r\n  border-right: 0;\r\n  width: 60vw;\r\n}\r\n\r\n.search-btn {\r\n  border-top-right-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  border-left: 0;\r\n  background-color: #3c948b;\r\n  width: 30vw;\r\n}\r\n\r\n.menu-bar {\r\n  background-color: #3c948b;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 100vw;\r\n  height: 30px;\r\n  align-items: center;\r\n}\r\n\r\n.fa-bars,\r\n.menu-bar span {\r\n  color: #fbfaf9;\r\n}\r\n\r\n.fa-bars:hover {\r\n  color: #cacaca;\r\n}\r\n\r\n#myLinks {\r\n  display: none;\r\n  width: 100vw;\r\n}\r\n\r\n#myLinks a {\r\n  color: white;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n  display: block;\r\n  background-color: #1f4b47;\r\n}\r\n\r\n#myLinks a:hover {\r\n  background-color: #3f3f3f;\r\n}\r\n\r\nheader {\r\n  background-color: #272A31;\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n\r\n\r\n.card-holder{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n#heart {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n\r\n\r\n\r\n.span-one,\r\n.span-two {\r\n  font-size: larger;\r\n  color: #fbfaf9;\r\n  padding: 12px;\r\n}\r\n\r\n.left-footer,\r\n.right-footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.footer-three a,\r\n.footer-four a {\r\n  color: #3c9ba5;\r\n  text-decoration: none;\r\n  font-size: larger;\r\n  padding: 12px;\r\n}\r\n\r\n.footer-four a {\r\n  font-size: medium;\r\n}\r\n\r\n.footer-three a:hover,\r\n.footer-four a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nfooter {\r\n  /* display: flex; */\r\n  justify-content: space-between;\r\n  background-color: #272A31;\r\n  width: 100vw;\r\n  padding: 10px 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .logo {\r\n    order: 1;\r\n  }\r\n\r\n  .account {\r\n    order: 3;\r\n  }\r\n  \r\n  .menu-bar {\r\n    display: none;\r\n  }\r\n  .search-bar {\r\n    width: 50vw;\r\n    order: 2;\r\n  }\r\n\r\n  #myLinks {\r\n    display: flex;\r\n    order: 4;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  #myLinks a {\r\n    display: inline;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  footer {\r\n    display: flex;\r\n  }\r\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_twitter_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/twitter.png */ "./img/twitter.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/logo.png */ "./img/logo.png");
/* harmony import */ var _img_facebook_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/facebook.jpg */ "./img/facebook.jpg");
/* harmony import */ var _img_instagram_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/instagram.png */ "./img/instagram.png");
/* harmony import */ var _img_reddit_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/reddit.png */ "./img/reddit.png");
/* harmony import */ var _modules_get_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/get.js */ "./modules/get.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/menu.js */ "./modules/menu.js");






// import POST from '../modules/post.js';



const btn = document.querySelector('.search-btn');
const bars = document.querySelector('.fa-bars');
const input = document.querySelector('.search');
const bod = document.querySelector('body');

window.addEventListener('DOMContentLoaded', () => {
  const Getter = _modules_get_js__WEBPACK_IMPORTED_MODULE_6__["default"];
  const getterObj = new Getter();

  getterObj.getHome();

  btn.addEventListener('click', () => {
    getterObj.getSearch(`https://api.tvmaze.com/search/shows?q=${input.value}`);
  });

  const Menu = _modules_menu_js__WEBPACK_IMPORTED_MODULE_7__["default"];
  const menuObj = new Menu();
  bars.addEventListener('click', () => {
    menuObj.toggleMenu();
  });
});


/***/ }),

/***/ "./img/facebook.jpg":
/*!**************************!*\
  !*** ./img/facebook.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8665d57f63f10fe7f5de.jpg";

/***/ }),

/***/ "./img/instagram.png":
/*!***************************!*\
  !*** ./img/instagram.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "487c01c29874a2f72e20.png";

/***/ }),

/***/ "./img/logo.png":
/*!**********************!*\
  !*** ./img/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "852d0a86762c99070334.png";

/***/ }),

/***/ "./img/reddit.png":
/*!************************!*\
  !*** ./img/reddit.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "071038551db2204828c2.png";

/***/ }),

/***/ "./img/twitter.png":
/*!*************************!*\
  !*** ./img/twitter.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01f3fbf330ac5744ea3d.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNvQjtBQUNOO0FBQ1E7QUFDRTtBQUNOO0FBQ3ZDO0FBQ29DO0FBQ0U7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHVEQUFHO0FBQ3BCOztBQUVBOztBQUVBO0FBQ0EsaUVBQWlFLFlBQVk7QUFDN0UsR0FBRzs7QUFFSCxlQUFlLHdEQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL21vZHVsZXMvZ2V0LmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdFVCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICB9XHJcblxyXG4gIGdldEhvbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBmZWN0ZWREYXRhID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIC8vIGNvbnN0IGpGb3JtYXQgPSBhd2FpdCBmZWN0ZWREYXRhLmpzb24oKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xyXG4gICAgY29uc3Qgb3ZlcmFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVyYWxsLWNvbnRhaW5lcicpO1xyXG4gICAgXHJcbiAgICBjb25zdCBkeW5hbWljX3NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBkeW5hbWljX3NlY3Rpb24uaWQgPSAnY2FyZC1ob2xkZXInO1xyXG4gICAgZHluYW1pY19zZWN0aW9uLmNsYXNzTmFtZSA9ICdjYXJkLWhvbGRlcic7XHJcblxyXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBqRm9ybWF0Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAvLyAgIGR5bmFtaWNfc2VjdGlvbi5pbm5lckhUTUwgKz0gYFxyXG4gICAgLy8gICA8aW1nIHNyYz0ke2pGb3JtYXRbaV0uc2hvdy5pbWFnZS5tZWRpdW19PlxyXG4gICAgLy8gICA8c3Bhbj4ke2pGb3JtYXRbaV0uc2hvdy5uYW1lfTwvc3Bhbj5cclxuICAgIC8vICAgPGkgaWQ9XCJoZWFydCR7aX1cIiBjbGFzcz1cImZhIGZhLWhlYXJ0XCI+PC9pPlxyXG4gICAgLy8gICA8YnV0dG9uIGlkPVwiYnRuJHtpfVwiPkNvbW1lbnQ8L2J1dHRvbj5cclxuICAgIC8vICAgYDtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgb3ZlcmFsbC5pbnNlcnRCZWZvcmUoZHluYW1pY19zZWN0aW9uLCBmb290ZXIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VhcmNoID0gYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgY29uc3QgZmVjdGVkRGF0YSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBqRm9ybWF0ID0gYXdhaXQgZmVjdGVkRGF0YS5qc29uKCk7XHJcbiAgICBjb25zdCBkeW5hbWljX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1ob2xkZXInKTtcclxuICAgIC8vIGR5bmFtaWNfc2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgakZvcm1hdC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBkeW5hbWljX3NlY3Rpb24uaW5uZXJIVE1MICs9IGBcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIHNyYz0ke2pGb3JtYXRbaV0uc2hvdy5pbWFnZS5tZWRpdW19PlxyXG4gICAgICAgIDxzcGFuPiR7akZvcm1hdFtpXS5zaG93Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxpIGlkPVwiaGVhcnQke2l9XCIgY2xhc3M9XCJmYSBmYS1oZWFydFwiPjwvaT5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuJHtpfVwiPkNvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1FTlUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgfVxuICBcbiAgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUxpbmtzJyk7XG4gICAgaWYgKGxpbmtzLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgbGlua3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5rcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4ub3ZlcmFsbC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxuICBtYXJnaW46IC0xMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLW5hdiBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtbmF2IGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICMzYzliYTU7XFxyXFxufVxcclxcblxcclxcbi5zZXBhcmF0b3Ige1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxyXFxuICBib3JkZXItcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1idG4ge1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlci1sZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjOTQ4YjtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1iYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjOTQ4YjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWJhcnMsXFxyXFxuLm1lbnUtYmFyIHNwYW4ge1xcclxcbiAgY29sb3I6ICNmYmZhZjk7XFxyXFxufVxcclxcblxcclxcbi5mYS1iYXJzOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjY2FjYWNhO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlMaW5rcyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4jbXlMaW5rcyBhIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmNGI0NztcXHJcXG59XFxyXFxuXFxyXFxuI215TGlua3MgYTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZjNmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MkEzMTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5jYXJkLWhvbGRlcntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jaGVhcnQge1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5zcGFuLW9uZSxcXHJcXG4uc3Bhbi10d28ge1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICBjb2xvcjogI2ZiZmFmOTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LWZvb3RlcixcXHJcXG4ucmlnaHQtZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXRocmVlIGEsXFxyXFxuLmZvb3Rlci1mb3VyIGEge1xcclxcbiAgY29sb3I6ICMzYzliYTU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItZm91ciBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXRocmVlIGE6aG92ZXIsXFxyXFxuLmZvb3Rlci1mb3VyIGE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MkEzMTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubG9nbyB7XFxyXFxuICAgIG9yZGVyOiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFjY291bnQge1xcclxcbiAgICBvcmRlcjogMztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1lbnUtYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5zZWFyY2gtYmFyIHtcXHJcXG4gICAgd2lkdGg6IDUwdnc7XFxyXFxuICAgIG9yZGVyOiAyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI215TGlua3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBvcmRlcjogNDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjOTQ4YjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNteUxpbmtzIGEge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzk0OGI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COzs7O0FBSUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7Ozs7O0FBS0E7O0VBRUUsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztJQUNYLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGFBQWE7SUFDYixRQUFRO0lBQ1IseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi5vdmVyYWxsLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG4gIG1hcmdpbjogLTEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtbmF2IGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1uYXYgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzNjOWJhNTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcGFyYXRvciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlci1yaWdodDogMDtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJ0biB7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xcclxcbiAgYm9yZGVyLWxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M5NDhiO1xcclxcbiAgd2lkdGg6IDMwdnc7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M5NDhiO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtYmFycyxcXHJcXG4ubWVudS1iYXIgc3BhbiB7XFxyXFxuICBjb2xvcjogI2ZiZmFmOTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWJhcnM6aG92ZXIge1xcclxcbiAgY29sb3I6ICNjYWNhY2E7XFxyXFxufVxcclxcblxcclxcbiNteUxpbmtzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbiNteUxpbmtzIGEge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY0YjQ3O1xcclxcbn1cXHJcXG5cXHJcXG4jbXlMaW5rcyBhOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjNmM2Y7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyQTMxO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmNhcmQtaG9sZGVye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcblxcclxcbiNoZWFydCB7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnNwYW4tb25lLFxcclxcbi5zcGFuLXR3byB7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gIGNvbG9yOiAjZmJmYWY5O1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtZm9vdGVyLFxcclxcbi5yaWdodC1mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItdGhyZWUgYSxcXHJcXG4uZm9vdGVyLWZvdXIgYSB7XFxyXFxuICBjb2xvcjogIzNjOWJhNTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1mb3VyIGEge1xcclxcbiAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItdGhyZWUgYTpob3ZlcixcXHJcXG4uZm9vdGVyLWZvdXIgYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyQTMxO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5sb2dvIHtcXHJcXG4gICAgb3JkZXI6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWNjb3VudCB7XFxyXFxuICAgIG9yZGVyOiAzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubWVudS1iYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgLnNlYXJjaC1iYXIge1xcclxcbiAgICB3aWR0aDogNTB2dztcXHJcXG4gICAgb3JkZXI6IDI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbXlMaW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG9yZGVyOiA0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M5NDhiO1xcclxcbiAgfVxcclxcblxcclxcbiAgI215TGlua3MgYSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjOTQ4YjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgVHdpdHRlciBmcm9tICcuLi9pbWcvdHdpdHRlci5wbmcnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vaW1nL2xvZ28ucG5nJztcbmltcG9ydCBGYWNlYm9vayBmcm9tICcuLi9pbWcvZmFjZWJvb2suanBnJztcbmltcG9ydCBJbnN0YWdyYW0gZnJvbSAnLi4vaW1nL2luc3RhZ3JhbS5wbmcnO1xuaW1wb3J0IFJlZGRpdCBmcm9tICcuLi9pbWcvcmVkZGl0LnBuZyc7XG4vLyBpbXBvcnQgUE9TVCBmcm9tICcuLi9tb2R1bGVzL3Bvc3QuanMnO1xuaW1wb3J0IEdFVCBmcm9tICcuLi9tb2R1bGVzL2dldC5qcyc7XG5pbXBvcnQgTUVOVSBmcm9tICcuLi9tb2R1bGVzL21lbnUuanMnO1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ0bicpO1xuY29uc3QgYmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1iYXJzJyk7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKTtcbmNvbnN0IGJvZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IEdldHRlciA9IEdFVDtcbiAgY29uc3QgZ2V0dGVyT2JqID0gbmV3IEdldHRlcigpO1xuXG4gIGdldHRlck9iai5nZXRIb21lKCk7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdldHRlck9iai5nZXRTZWFyY2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9JHtpbnB1dC52YWx1ZX1gKTtcbiAgfSk7XG5cbiAgY29uc3QgTWVudSA9IE1FTlU7XG4gIGNvbnN0IG1lbnVPYmogPSBuZXcgTWVudSgpO1xuICBiYXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1lbnVPYmoudG9nZ2xlTWVudSgpO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
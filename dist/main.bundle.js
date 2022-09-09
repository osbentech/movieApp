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
/* harmony import */ var _modules_post_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/post.js */ "./modules/post.js");

class GET {
  constructor() {
    this.index = 0;
  }

  getHome = async (url) => {
    const fectedData = await fetch(url);
    const jFormat = await fectedData.json();
    const overall = document.querySelector('.overall-container');
    if (this.index === 0) {
      const prev = document.querySelector('.previous');
      prev.disabled = true;
    }
    const dynamic_section = document.createElement('section');
    dynamic_section.id = 'card-holder';
    dynamic_section.className = 'card-holder';

    const dynamic_paragraph = document.createElement('p');
    dynamic_paragraph.id = 'information';
    dynamic_paragraph.className = 'information';

    const dynamic_container = document.createElement('section');
    dynamic_container.id = 'container';
    dynamic_container.className = 'container';

    const pages = document.querySelector('.pages');
    for (let i = 0; i < 24; i += 1) {
      dynamic_section.innerHTML += `
      <div class="card">
        <br>
        <img src=${jFormat[i].image.medium}>
        <div>
          <span class="name">${jFormat[i].name}</span><br>
          <a type="submit" class="like" href="#"><i id="item${jFormat[i].id}" class="fa fa-heart"></i></a>
          <span class="counter"></span><span>&emsp;&emsp;&emsp;&emsp;&emsp;</span>
          <button id="cardBtn btn${i}">Comment</button><br>
        </div>
      </div>
      `;
    }
    
    overall.insertBefore(dynamic_paragraph, pages);
    overall.insertBefore(dynamic_container, pages);
    dynamic_container.appendChild(dynamic_section);
    
    this.addLikeEventListener(jFormat, 0);
    this.initializeLikeCounter(jFormat, 0);
  }

  getSearch = async (url) => {
    const fectedData = await fetch(url);
    const jFormat = await fectedData.json();
    console.log(jFormat);
    const dynamic_section = document.querySelector('.card-holder');
    const dynamic_paragraph = document.querySelector('.information');
    const pages = document.querySelector('.pages');
    dynamic_paragraph.innerHTML = '';
    dynamic_section.innerHTML = '';
    dynamic_paragraph.innerHTML = "<em><br>&nbsp;&nbsp;&nbsp;&nbsp;Search results for: " + url.split('=')[1] +" ("+jFormat.length+")</em>";

    for (let i = 0; i < jFormat.length; i += 1) {
      dynamic_section.innerHTML += `
      <div class="card">
        <br>
        <img src=${jFormat[i].show.image.medium}>
        <div>
          <span class="name">${jFormat[i].show.name}</span><br>
          <a type="submit" class="like" href="#"><i id="item${jFormat[i].show.id}" class="fa fa-heart"></i></a>
          <span class="counter"></span><span>&emsp;&emsp;&emsp;&emsp;&emsp;</span>
          <button id="cardBtn btn${i}">Comment</button><br>
        </div>
      </div>
      `;
    }
    this.addLikeEventListener(jFormat, 1);
    this.initializeLikeCounter(jFormat, 1);
  }

  getPrevious = async (url) => {
    this.index -= 1;
    if (this.index === 0) {
      const prev = document.querySelector('.previous');
      prev.disabled = true;
    }
    const fectedData = await fetch(url + this.index);
    const jFormat = await fectedData.json();
    const dynamic_section = document.querySelector('.card-holder');
    dynamic_section.innerHTML = '';

    for (let i = 0; i < 24; i += 1) {
      dynamic_section.innerHTML += `
      <div class="card">
        <br>
        <img src=${jFormat[i].image.medium}>
        <div>
          <span class="name">${jFormat[i].name}</span><br>
          <a type="submit" class="like" href="#"><i id="item${jFormat[i].id}" class="fa fa-heart"></i></a>
          <span class="counter"></span><span>&emsp;&emsp;&emsp;&emsp;&emsp;</span>
          <button id="cardBtn btn${i}">Comment</button><br>
        </div>
      </div>
      `;
    }
    this.addLikeEventListener(jFormat, 0);
    this.initializeLikeCounter(jFormat, 0);
  }

  getNext = async (url) => {
    this.index += 1;
    if (this.index !== 0) {
      const prev = document.querySelector('.previous');
      prev.disabled = false;
    }
    const fectedData = await fetch(url + this.index);
    const jFormat = await fectedData.json();
    const dynamic_section = document.querySelector('.card-holder');
    dynamic_section.innerHTML = '';
    console.log(jFormat);
    for (let i = 0; i < 24; i += 1) {
      dynamic_section.innerHTML += `
      <div class="card">
        <br>
        <img src=${jFormat[i].image.medium}>
        <div>
          <span class="name">${jFormat[i].name}</span><br>
          <a type="submit" class="like" href="#"><i id="item${jFormat[i].id}" class="fa fa-heart"></i></a>
          <span class="counter"></span><span>&emsp;&emsp;&emsp;&emsp;&emsp;</span>
          <button id="cardBtn btn${i}">Comment</button><br>
        </div>
      </div>
      `;
    }
    this.addLikeEventListener(jFormat, 0);
    this.initializeLikeCounter(jFormat, 0);
  }

  addLikeEventListener = async (jFormatold, bool) => {
    const Poster = _modules_post_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    const posterObj = new Poster();
    const like = document.querySelectorAll('.like');
    const likeArr = Array.prototype.slice.call(like);
    likeArr.forEach((_, index) => {
      like[index].addEventListener('click', async (e) => {
        const payload = { "item_id": `${e.target.id}` };
        await  new Promise((resolve) => {
          resolve(posterObj.postLike(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nf8mEtKRhZMSeyST7atx/likes`, payload));
        });
        let j = 0;
        let old = 0;
        if (bool) {
          old = jFormatold[j].show.id;
        } else {
          old = jFormatold[j].id;
        }
        while (old !== Number(e.target.id.substring(4))) {
          j += 1;
          if (bool) {
            old = jFormatold[j].show.id;
          } else {
            old = jFormatold[j].id;
          }
        }
        this.updateLikeCounter(j);
      });
    });
  }

  initializeLikeCounter = async (jFormatold, bool) => {
    const fectedData = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nf8mEtKRhZMSeyST7atx/likes`);
    const jFormat = await fectedData.json();
    const likeCounter = document.querySelectorAll('.counter');
    let len = 0;
    let old = 0;
    if (bool) {
      len = jFormatold.length;
    } else {
      len = 24;
    }
    for (let i = 0; i < jFormat.length; i++) {
      for (let j = 0; j < len; j++) {
        if (bool) {
          old = jFormatold[j].show.id;
        } else {
          old = jFormatold[j].id;
        }
        if (jFormat[i].item_id === 'item'+old) {
          likeCounter[j].innerHTML = jFormat[i].likes;
          break;
        }
      }
    }
  }

  updateLikeCounter = (item_number) => {
    const likeCounter = document.querySelectorAll('.counter');
    const likeCount = likeCounter[item_number].innerHTML;
    console.log(likeCount);
    if(likeCount === '') {
      likeCounter[item_number].innerHTML= '1';
    } else {
      likeCounter[item_number].innerHTML = Number(likeCounter[item_number].innerHTML) + 1;
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

/***/ "./modules/post.js":
/*!*************************!*\
  !*** ./modules/post.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ POST)
/* harmony export */ });
class POST {
  constructor() {
    this.index = 0;
  }

  postLike = async (url, payload) => {
    fetch(
      url, 
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify(payload),
      },
    );
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  border: 0;\r\n}\r\n\r\n.overall-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-self: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.mobile-nav a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: x-large;\r\n  padding: 12px;\r\n}\r\n\r\n.mobile-nav a:hover {\r\n  color: #3c9ba5;\r\n}\r\n\r\n.separator {\r\n  color: white;\r\n  font-size: larger;\r\n}\r\n\r\n.search-bar {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.search {\r\n  height: 30px;\r\n  border-top-left-radius: 15px;\r\n  border-bottom-left-radius: 15px;\r\n  border-right: 0;\r\n  width: 60vw;\r\n}\r\n\r\n.search-btn {\r\n  border-top-right-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  border-left: 0;\r\n  background-color: #3c948b;\r\n  width: 30vw;\r\n}\r\n\r\n.menu-bar {\r\n  background-color: #3c948b;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 100vw;\r\n  height: 30px;\r\n  align-items: center;\r\n}\r\n\r\n.fa-bars,\r\n.menu-bar span {\r\n  color: #fbfaf9;\r\n}\r\n\r\n.fa-bars:hover {\r\n  color: #cacaca;\r\n}\r\n\r\n#myLinks {\r\n  display: none;\r\n  width: 100vw;\r\n}\r\n\r\n#myLinks a {\r\n  color: white;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n  display: block;\r\n  background-color: #1f4b47;\r\n}\r\n\r\n#myLinks a:hover {\r\n  background-color: #3f3f3f;\r\n}\r\n\r\nheader {\r\n  background-color: #272A31;\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  /* border: 1px solid red; */\r\n  justify-content: center;\r\n  width: 100vw;\r\n}\r\n\r\n.card-holder{\r\n  display: flex;\r\n  width: 80vw;\r\n  /* border: 1px solid blue; */\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.card {\r\n  margin: 10px;\r\n  padding: 10px;\r\n  border: 2px solid #3c9ba5;\r\n  display: flex;\r\n  flex: auto;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  width:min-content;\r\n}\r\n\r\n#heart {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.pages {\r\n  padding: 15px;\r\n}\r\n\r\n.span-one,\r\n.span-two {\r\n  font-size: larger;\r\n  color: #fbfaf9;\r\n  padding: 12px;\r\n}\r\n\r\n.span-two {\r\n  font-size: medium;\r\n}\r\n\r\n.left-footer,\r\n.right-footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.footer-three a,\r\n.footer-four a {\r\n  color: #3c9ba5;\r\n  text-decoration: none;\r\n  font-size: larger;\r\n  padding: 12px;\r\n}\r\n\r\n.footer-four a {\r\n  font-size: medium;\r\n}\r\n\r\n.footer-three a:hover,\r\n.footer-four a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nfooter {\r\n  /* display: flex; */\r\n  justify-content: space-between;\r\n  background-color: #272A31;\r\n  width: 100vw;\r\n  padding: 10px 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .logo {\r\n    order: 1;\r\n  }\r\n\r\n  .account {\r\n    order: 3;\r\n  }\r\n  \r\n  .menu-bar {\r\n    display: none;\r\n  }\r\n  .search-bar {\r\n    width: 50vw;\r\n    order: 2;\r\n  }\r\n\r\n  #myLinks {\r\n    display: flex;\r\n    order: 4;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  #myLinks a {\r\n    display: inline;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  .card-holder{\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  footer {\r\n    display: flex;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,4BAA4B;EAC5B,+BAA+B;EAC/B,eAAe;EACf,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;EAChC,cAAc;EACd,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,WAAW;EACX,4BAA4B;EAC5B,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,UAAU;EACV,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,iBAAiB;EACjB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,cAAc;EACd,qBAAqB;EACrB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,0BAA0B;AAC5B;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,yBAAyB;EACzB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE;IACE,QAAQ;EACV;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,aAAa;EACf;EACA;IACE,WAAW;IACX,QAAQ;EACV;;EAEA;IACE,aAAa;IACb,QAAQ;IACR,yBAAyB;EAC3B;;EAEA;IACE,eAAe;IACf,yBAAyB;EAC3B;;EAEA;IACE,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,2BAA2B;EAC7B;;EAEA;IACE,aAAa;EACf;AACF","sourcesContent":["body {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  border: 0;\r\n}\r\n\r\n.overall-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-self: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.mobile-nav a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: x-large;\r\n  padding: 12px;\r\n}\r\n\r\n.mobile-nav a:hover {\r\n  color: #3c9ba5;\r\n}\r\n\r\n.separator {\r\n  color: white;\r\n  font-size: larger;\r\n}\r\n\r\n.search-bar {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.search {\r\n  height: 30px;\r\n  border-top-left-radius: 15px;\r\n  border-bottom-left-radius: 15px;\r\n  border-right: 0;\r\n  width: 60vw;\r\n}\r\n\r\n.search-btn {\r\n  border-top-right-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  border-left: 0;\r\n  background-color: #3c948b;\r\n  width: 30vw;\r\n}\r\n\r\n.menu-bar {\r\n  background-color: #3c948b;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 100vw;\r\n  height: 30px;\r\n  align-items: center;\r\n}\r\n\r\n.fa-bars,\r\n.menu-bar span {\r\n  color: #fbfaf9;\r\n}\r\n\r\n.fa-bars:hover {\r\n  color: #cacaca;\r\n}\r\n\r\n#myLinks {\r\n  display: none;\r\n  width: 100vw;\r\n}\r\n\r\n#myLinks a {\r\n  color: white;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n  display: block;\r\n  background-color: #1f4b47;\r\n}\r\n\r\n#myLinks a:hover {\r\n  background-color: #3f3f3f;\r\n}\r\n\r\nheader {\r\n  background-color: #272A31;\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  /* border: 1px solid red; */\r\n  justify-content: center;\r\n  width: 100vw;\r\n}\r\n\r\n.card-holder{\r\n  display: flex;\r\n  width: 80vw;\r\n  /* border: 1px solid blue; */\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.card {\r\n  margin: 10px;\r\n  padding: 10px;\r\n  border: 2px solid #3c9ba5;\r\n  display: flex;\r\n  flex: auto;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  width:min-content;\r\n}\r\n\r\n#heart {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.pages {\r\n  padding: 15px;\r\n}\r\n\r\n.span-one,\r\n.span-two {\r\n  font-size: larger;\r\n  color: #fbfaf9;\r\n  padding: 12px;\r\n}\r\n\r\n.span-two {\r\n  font-size: medium;\r\n}\r\n\r\n.left-footer,\r\n.right-footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.footer-three a,\r\n.footer-four a {\r\n  color: #3c9ba5;\r\n  text-decoration: none;\r\n  font-size: larger;\r\n  padding: 12px;\r\n}\r\n\r\n.footer-four a {\r\n  font-size: medium;\r\n}\r\n\r\n.footer-three a:hover,\r\n.footer-four a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nfooter {\r\n  /* display: flex; */\r\n  justify-content: space-between;\r\n  background-color: #272A31;\r\n  width: 100vw;\r\n  padding: 10px 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .logo {\r\n    order: 1;\r\n  }\r\n\r\n  .account {\r\n    order: 3;\r\n  }\r\n  \r\n  .menu-bar {\r\n    display: none;\r\n  }\r\n  .search-bar {\r\n    width: 50vw;\r\n    order: 2;\r\n  }\r\n\r\n  #myLinks {\r\n    display: flex;\r\n    order: 4;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  #myLinks a {\r\n    display: inline;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  .card-holder{\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  footer {\r\n    display: flex;\r\n  }\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _img_Debby_Benjamin_Logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/Debby-Benjamin-Logo.png */ "./img/Debby-Benjamin-Logo.png");
/* harmony import */ var _img_facebook_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/facebook.jpg */ "./img/facebook.jpg");
/* harmony import */ var _img_instagram_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/instagram.png */ "./img/instagram.png");
/* harmony import */ var _img_reddit_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/reddit.png */ "./img/reddit.png");
/* harmony import */ var _modules_get_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/get.js */ "./modules/get.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/menu.js */ "./modules/menu.js");






// import POST from '../modules/post.js';



const btn = document.querySelector('.search-btn');
const bars = document.querySelector('.fa-bars');
const input = document.querySelector('.search');

window.addEventListener('DOMContentLoaded', () => {
  const Getter = _modules_get_js__WEBPACK_IMPORTED_MODULE_6__["default"];
  const getterObj = new Getter();

  getterObj.getHome(`https://api.tvmaze.com/shows?page=0`);

  btn.addEventListener('click', () => {
    getterObj.getSearch(`https://api.tvmaze.com/search/shows?q=${input.value}`);
  });

  const Menu = _modules_menu_js__WEBPACK_IMPORTED_MODULE_7__["default"];
  const menuObj = new Menu();
  bars.addEventListener('click', () => {
    menuObj.toggleMenu();
  });

  const prev = document.querySelector('.previous');
  prev.addEventListener('click', () => {
    getterObj.getPrevious(`https://api.tvmaze.com/shows?page=`);
  });

  const next = document.querySelector('.next');
  next.addEventListener('click', () => {
    getterObj.getNext(`https://api.tvmaze.com/shows?page=`);
  });

});


/***/ }),

/***/ "./img/Debby-Benjamin-Logo.png":
/*!*************************************!*\
  !*** ./img/Debby-Benjamin-Logo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7430de4268322950630c.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDb0I7QUFDUztBQUNQO0FBQ0U7QUFDTjtBQUN2QztBQUNvQztBQUNFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1REFBRztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLFlBQVk7QUFDN0UsR0FBRztBQUNIO0FBQ0EsZUFBZSx3REFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL21vZHVsZXMvZ2V0LmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL21vZHVsZXMvcG9zdC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBPU1QgZnJvbSAnLi4vbW9kdWxlcy9wb3N0LmpzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR0VUIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0SG9tZSA9IGFzeW5jICh1cmwpID0+IHtcclxuICAgIGNvbnN0IGZlY3RlZERhdGEgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgakZvcm1hdCA9IGF3YWl0IGZlY3RlZERhdGEuanNvbigpO1xyXG4gICAgY29uc3Qgb3ZlcmFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVyYWxsLWNvbnRhaW5lcicpO1xyXG4gICAgaWYgKHRoaXMuaW5kZXggPT09IDApIHtcclxuICAgICAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aW91cycpO1xyXG4gICAgICBwcmV2LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGR5bmFtaWNfc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIGR5bmFtaWNfc2VjdGlvbi5pZCA9ICdjYXJkLWhvbGRlcic7XHJcbiAgICBkeW5hbWljX3NlY3Rpb24uY2xhc3NOYW1lID0gJ2NhcmQtaG9sZGVyJztcclxuXHJcbiAgICBjb25zdCBkeW5hbWljX3BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGR5bmFtaWNfcGFyYWdyYXBoLmlkID0gJ2luZm9ybWF0aW9uJztcclxuICAgIGR5bmFtaWNfcGFyYWdyYXBoLmNsYXNzTmFtZSA9ICdpbmZvcm1hdGlvbic7XHJcblxyXG4gICAgY29uc3QgZHluYW1pY19jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBkeW5hbWljX2NvbnRhaW5lci5pZCA9ICdjb250YWluZXInO1xyXG4gICAgZHluYW1pY19jb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XHJcblxyXG4gICAgY29uc3QgcGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZXMnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkgKz0gMSkge1xyXG4gICAgICBkeW5hbWljX3NlY3Rpb24uaW5uZXJIVE1MICs9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPGltZyBzcmM9JHtqRm9ybWF0W2ldLmltYWdlLm1lZGl1bX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7akZvcm1hdFtpXS5uYW1lfTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICA8YSB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJsaWtlXCIgaHJlZj1cIiNcIj48aSBpZD1cIml0ZW0ke2pGb3JtYXRbaV0uaWR9XCIgY2xhc3M9XCJmYSBmYS1oZWFydFwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50ZXJcIj48L3NwYW4+PHNwYW4+JmVtc3A7JmVtc3A7JmVtc3A7JmVtc3A7JmVtc3A7PC9zcGFuPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImNhcmRCdG4gYnRuJHtpfVwiPkNvbW1lbnQ8L2J1dHRvbj48YnI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvdmVyYWxsLmluc2VydEJlZm9yZShkeW5hbWljX3BhcmFncmFwaCwgcGFnZXMpO1xyXG4gICAgb3ZlcmFsbC5pbnNlcnRCZWZvcmUoZHluYW1pY19jb250YWluZXIsIHBhZ2VzKTtcclxuICAgIGR5bmFtaWNfY29udGFpbmVyLmFwcGVuZENoaWxkKGR5bmFtaWNfc2VjdGlvbik7XHJcbiAgICBcclxuICAgIHRoaXMuYWRkTGlrZUV2ZW50TGlzdGVuZXIoakZvcm1hdCwgMCk7XHJcbiAgICB0aGlzLmluaXRpYWxpemVMaWtlQ291bnRlcihqRm9ybWF0LCAwKTtcclxuICB9XHJcblxyXG4gIGdldFNlYXJjaCA9IGFzeW5jICh1cmwpID0+IHtcclxuICAgIGNvbnN0IGZlY3RlZERhdGEgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgakZvcm1hdCA9IGF3YWl0IGZlY3RlZERhdGEuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coakZvcm1hdCk7XHJcbiAgICBjb25zdCBkeW5hbWljX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1ob2xkZXInKTtcclxuICAgIGNvbnN0IGR5bmFtaWNfcGFyYWdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9ybWF0aW9uJyk7XHJcbiAgICBjb25zdCBwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlcycpO1xyXG4gICAgZHluYW1pY19wYXJhZ3JhcGguaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkeW5hbWljX3NlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkeW5hbWljX3BhcmFncmFwaC5pbm5lckhUTUwgPSBcIjxlbT48YnI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7U2VhcmNoIHJlc3VsdHMgZm9yOiBcIiArIHVybC5zcGxpdCgnPScpWzFdICtcIiAoXCIrakZvcm1hdC5sZW5ndGgrXCIpPC9lbT5cIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpGb3JtYXQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgZHluYW1pY19zZWN0aW9uLmlubmVySFRNTCArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxpbWcgc3JjPSR7akZvcm1hdFtpXS5zaG93LmltYWdlLm1lZGl1bX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7akZvcm1hdFtpXS5zaG93Lm5hbWV9PC9zcGFuPjxicj5cclxuICAgICAgICAgIDxhIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImxpa2VcIiBocmVmPVwiI1wiPjxpIGlkPVwiaXRlbSR7akZvcm1hdFtpXS5zaG93LmlkfVwiIGNsYXNzPVwiZmEgZmEtaGVhcnRcIj48L2k+PC9hPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudGVyXCI+PC9zcGFuPjxzcGFuPiZlbXNwOyZlbXNwOyZlbXNwOyZlbXNwOyZlbXNwOzwvc3Bhbj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJjYXJkQnRuIGJ0biR7aX1cIj5Db21tZW50PC9idXR0b24+PGJyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgIH1cclxuICAgIHRoaXMuYWRkTGlrZUV2ZW50TGlzdGVuZXIoakZvcm1hdCwgMSk7XHJcbiAgICB0aGlzLmluaXRpYWxpemVMaWtlQ291bnRlcihqRm9ybWF0LCAxKTtcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzID0gYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgdGhpcy5pbmRleCAtPSAxO1xyXG4gICAgaWYgKHRoaXMuaW5kZXggPT09IDApIHtcclxuICAgICAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aW91cycpO1xyXG4gICAgICBwcmV2LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGZlY3RlZERhdGEgPSBhd2FpdCBmZXRjaCh1cmwgKyB0aGlzLmluZGV4KTtcclxuICAgIGNvbnN0IGpGb3JtYXQgPSBhd2FpdCBmZWN0ZWREYXRhLmpzb24oKTtcclxuICAgIGNvbnN0IGR5bmFtaWNfc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWhvbGRlcicpO1xyXG4gICAgZHluYW1pY19zZWN0aW9uLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkgKz0gMSkge1xyXG4gICAgICBkeW5hbWljX3NlY3Rpb24uaW5uZXJIVE1MICs9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPGltZyBzcmM9JHtqRm9ybWF0W2ldLmltYWdlLm1lZGl1bX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7akZvcm1hdFtpXS5uYW1lfTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICA8YSB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJsaWtlXCIgaHJlZj1cIiNcIj48aSBpZD1cIml0ZW0ke2pGb3JtYXRbaV0uaWR9XCIgY2xhc3M9XCJmYSBmYS1oZWFydFwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50ZXJcIj48L3NwYW4+PHNwYW4+JmVtc3A7JmVtc3A7JmVtc3A7JmVtc3A7JmVtc3A7PC9zcGFuPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImNhcmRCdG4gYnRuJHtpfVwiPkNvbW1lbnQ8L2J1dHRvbj48YnI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hZGRMaWtlRXZlbnRMaXN0ZW5lcihqRm9ybWF0LCAwKTtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUxpa2VDb3VudGVyKGpGb3JtYXQsIDApO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV4dCA9IGFzeW5jICh1cmwpID0+IHtcclxuICAgIHRoaXMuaW5kZXggKz0gMTtcclxuICAgIGlmICh0aGlzLmluZGV4ICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlvdXMnKTtcclxuICAgICAgcHJldi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmVjdGVkRGF0YSA9IGF3YWl0IGZldGNoKHVybCArIHRoaXMuaW5kZXgpO1xyXG4gICAgY29uc3QgakZvcm1hdCA9IGF3YWl0IGZlY3RlZERhdGEuanNvbigpO1xyXG4gICAgY29uc3QgZHluYW1pY19zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtaG9sZGVyJyk7XHJcbiAgICBkeW5hbWljX3NlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zb2xlLmxvZyhqRm9ybWF0KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkgKz0gMSkge1xyXG4gICAgICBkeW5hbWljX3NlY3Rpb24uaW5uZXJIVE1MICs9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPGltZyBzcmM9JHtqRm9ybWF0W2ldLmltYWdlLm1lZGl1bX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7akZvcm1hdFtpXS5uYW1lfTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICA8YSB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJsaWtlXCIgaHJlZj1cIiNcIj48aSBpZD1cIml0ZW0ke2pGb3JtYXRbaV0uaWR9XCIgY2xhc3M9XCJmYSBmYS1oZWFydFwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50ZXJcIj48L3NwYW4+PHNwYW4+JmVtc3A7JmVtc3A7JmVtc3A7JmVtc3A7JmVtc3A7PC9zcGFuPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImNhcmRCdG4gYnRuJHtpfVwiPkNvbW1lbnQ8L2J1dHRvbj48YnI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hZGRMaWtlRXZlbnRMaXN0ZW5lcihqRm9ybWF0LCAwKTtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUxpa2VDb3VudGVyKGpGb3JtYXQsIDApO1xyXG4gIH1cclxuXHJcbiAgYWRkTGlrZUV2ZW50TGlzdGVuZXIgPSBhc3luYyAoakZvcm1hdG9sZCwgYm9vbCkgPT4ge1xyXG4gICAgY29uc3QgUG9zdGVyID0gUE9TVDtcclxuICAgIGNvbnN0IHBvc3Rlck9iaiA9IG5ldyBQb3N0ZXIoKTtcclxuICAgIGNvbnN0IGxpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZScpO1xyXG4gICAgY29uc3QgbGlrZUFyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpa2UpO1xyXG4gICAgbGlrZUFyci5mb3JFYWNoKChfLCBpbmRleCkgPT4ge1xyXG4gICAgICBsaWtlW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHsgXCJpdGVtX2lkXCI6IGAke2UudGFyZ2V0LmlkfWAgfTtcclxuICAgICAgICBhd2FpdCAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocG9zdGVyT2JqLnBvc3RMaWtlKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9OZjhtRXRLUmhaTVNleVNUN2F0eC9saWtlc2AsIHBheWxvYWQpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgaiA9IDA7XHJcbiAgICAgICAgbGV0IG9sZCA9IDA7XHJcbiAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgIG9sZCA9IGpGb3JtYXRvbGRbal0uc2hvdy5pZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb2xkID0gakZvcm1hdG9sZFtqXS5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKG9sZCAhPT0gTnVtYmVyKGUudGFyZ2V0LmlkLnN1YnN0cmluZyg0KSkpIHtcclxuICAgICAgICAgIGogKz0gMTtcclxuICAgICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgIG9sZCA9IGpGb3JtYXRvbGRbal0uc2hvdy5pZDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9sZCA9IGpGb3JtYXRvbGRbal0uaWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlTGlrZUNvdW50ZXIoaik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplTGlrZUNvdW50ZXIgPSBhc3luYyAoakZvcm1hdG9sZCwgYm9vbCkgPT4ge1xyXG4gICAgY29uc3QgZmVjdGVkRGF0YSA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9OZjhtRXRLUmhaTVNleVNUN2F0eC9saWtlc2ApO1xyXG4gICAgY29uc3QgakZvcm1hdCA9IGF3YWl0IGZlY3RlZERhdGEuanNvbigpO1xyXG4gICAgY29uc3QgbGlrZUNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY291bnRlcicpO1xyXG4gICAgbGV0IGxlbiA9IDA7XHJcbiAgICBsZXQgb2xkID0gMDtcclxuICAgIGlmIChib29sKSB7XHJcbiAgICAgIGxlbiA9IGpGb3JtYXRvbGQubGVuZ3RoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGVuID0gMjQ7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpGb3JtYXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGorKykge1xyXG4gICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICBvbGQgPSBqRm9ybWF0b2xkW2pdLnNob3cuaWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG9sZCA9IGpGb3JtYXRvbGRbal0uaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChqRm9ybWF0W2ldLml0ZW1faWQgPT09ICdpdGVtJytvbGQpIHtcclxuICAgICAgICAgIGxpa2VDb3VudGVyW2pdLmlubmVySFRNTCA9IGpGb3JtYXRbaV0ubGlrZXM7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUxpa2VDb3VudGVyID0gKGl0ZW1fbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBsaWtlQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3VudGVyJyk7XHJcbiAgICBjb25zdCBsaWtlQ291bnQgPSBsaWtlQ291bnRlcltpdGVtX251bWJlcl0uaW5uZXJIVE1MO1xyXG4gICAgY29uc29sZS5sb2cobGlrZUNvdW50KTtcclxuICAgIGlmKGxpa2VDb3VudCA9PT0gJycpIHtcclxuICAgICAgbGlrZUNvdW50ZXJbaXRlbV9udW1iZXJdLmlubmVySFRNTD0gJzEnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGlrZUNvdW50ZXJbaXRlbV9udW1iZXJdLmlubmVySFRNTCA9IE51bWJlcihsaWtlQ291bnRlcltpdGVtX251bWJlcl0uaW5uZXJIVE1MKSArIDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1FTlUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgfVxuICBcbiAgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUxpbmtzJyk7XG4gICAgaWYgKGxpbmtzLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgbGlua3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5rcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUE9TVCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICB9XHJcblxyXG4gIHBvc3RMaWtlID0gYXN5bmMgKHVybCwgcGF5bG9hZCkgPT4ge1xyXG4gICAgZmV0Y2goXHJcbiAgICAgIHVybCwgXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gfVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJhbGwtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtbmF2IGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1uYXYgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzNjOWJhNTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcGFyYXRvciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlci1yaWdodDogMDtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJ0biB7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xcclxcbiAgYm9yZGVyLWxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M5NDhiO1xcclxcbiAgd2lkdGg6IDMwdnc7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M5NDhiO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtYmFycyxcXHJcXG4ubWVudS1iYXIgc3BhbiB7XFxyXFxuICBjb2xvcjogI2ZiZmFmOTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWJhcnM6aG92ZXIge1xcclxcbiAgY29sb3I6ICNjYWNhY2E7XFxyXFxufVxcclxcblxcclxcbiNteUxpbmtzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbiNteUxpbmtzIGEge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY0YjQ3O1xcclxcbn1cXHJcXG5cXHJcXG4jbXlMaW5rcyBhOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjNmM2Y7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyQTMxO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWhvbGRlcntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzYzliYTU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogYXV0bztcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6bWluLWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbiNoZWFydCB7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2VzIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zcGFuLW9uZSxcXHJcXG4uc3Bhbi10d28ge1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICBjb2xvcjogI2ZiZmFmOTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5zcGFuLXR3byB7XFxyXFxuICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtZm9vdGVyLFxcclxcbi5yaWdodC1mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItdGhyZWUgYSxcXHJcXG4uZm9vdGVyLWZvdXIgYSB7XFxyXFxuICBjb2xvcjogIzNjOWJhNTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1mb3VyIGEge1xcclxcbiAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItdGhyZWUgYTpob3ZlcixcXHJcXG4uZm9vdGVyLWZvdXIgYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyQTMxO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5sb2dvIHtcXHJcXG4gICAgb3JkZXI6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWNjb3VudCB7XFxyXFxuICAgIG9yZGVyOiAzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubWVudS1iYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgLnNlYXJjaC1iYXIge1xcclxcbiAgICB3aWR0aDogNTB2dztcXHJcXG4gICAgb3JkZXI6IDI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbXlMaW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG9yZGVyOiA0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M5NDhiO1xcclxcbiAgfVxcclxcblxcclxcbiAgI215TGlua3MgYSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjOTQ4YjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLWhvbGRlcntcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztJQUNYLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGFBQWE7SUFDYixRQUFRO0lBQ1IseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi5vdmVyYWxsLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLW5hdiBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtbmF2IGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICMzYzliYTU7XFxyXFxufVxcclxcblxcclxcbi5zZXBhcmF0b3Ige1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxyXFxuICBib3JkZXItcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1idG4ge1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlci1sZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjOTQ4YjtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1iYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjOTQ4YjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWJhcnMsXFxyXFxuLm1lbnUtYmFyIHNwYW4ge1xcclxcbiAgY29sb3I6ICNmYmZhZjk7XFxyXFxufVxcclxcblxcclxcbi5mYS1iYXJzOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjY2FjYWNhO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlMaW5rcyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4jbXlMaW5rcyBhIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmNGI0NztcXHJcXG59XFxyXFxuXFxyXFxuI215TGlua3MgYTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZjNmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MkEzMTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1ob2xkZXJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjM2M5YmE1O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IGF1dG87XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOm1pbi1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhcnQge1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlcyB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3Bhbi1vbmUsXFxyXFxuLnNwYW4tdHdvIHtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgY29sb3I6ICNmYmZhZjk7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3Bhbi10d28ge1xcclxcbiAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LWZvb3RlcixcXHJcXG4ucmlnaHQtZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXRocmVlIGEsXFxyXFxuLmZvb3Rlci1mb3VyIGEge1xcclxcbiAgY29sb3I6ICMzYzliYTU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItZm91ciBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXRocmVlIGE6aG92ZXIsXFxyXFxuLmZvb3Rlci1mb3VyIGE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MkEzMTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubG9nbyB7XFxyXFxuICAgIG9yZGVyOiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFjY291bnQge1xcclxcbiAgICBvcmRlcjogMztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1lbnUtYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5zZWFyY2gtYmFyIHtcXHJcXG4gICAgd2lkdGg6IDUwdnc7XFxyXFxuICAgIG9yZGVyOiAyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI215TGlua3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBvcmRlcjogNDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjOTQ4YjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNteUxpbmtzIGEge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzk0OGI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZC1ob2xkZXJ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFR3aXR0ZXIgZnJvbSAnLi4vaW1nL3R3aXR0ZXIucG5nJztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vaW1nL0RlYmJ5LUJlbmphbWluLUxvZ28ucG5nJztcclxuaW1wb3J0IEZhY2Vib29rIGZyb20gJy4uL2ltZy9mYWNlYm9vay5qcGcnO1xyXG5pbXBvcnQgSW5zdGFncmFtIGZyb20gJy4uL2ltZy9pbnN0YWdyYW0ucG5nJztcclxuaW1wb3J0IFJlZGRpdCBmcm9tICcuLi9pbWcvcmVkZGl0LnBuZyc7XHJcbi8vIGltcG9ydCBQT1NUIGZyb20gJy4uL21vZHVsZXMvcG9zdC5qcyc7XHJcbmltcG9ydCBHRVQgZnJvbSAnLi4vbW9kdWxlcy9nZXQuanMnO1xyXG5pbXBvcnQgTUVOVSBmcm9tICcuLi9tb2R1bGVzL21lbnUuanMnO1xyXG5cclxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1idG4nKTtcclxuY29uc3QgYmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1iYXJzJyk7XHJcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgY29uc3QgR2V0dGVyID0gR0VUO1xyXG4gIGNvbnN0IGdldHRlck9iaiA9IG5ldyBHZXR0ZXIoKTtcclxuXHJcbiAgZ2V0dGVyT2JqLmdldEhvbWUoYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3M/cGFnZT0wYCk7XHJcblxyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGdldHRlck9iai5nZXRTZWFyY2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9JHtpbnB1dC52YWx1ZX1gKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgTWVudSA9IE1FTlU7XHJcbiAgY29uc3QgbWVudU9iaiA9IG5ldyBNZW51KCk7XHJcbiAgYmFycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1lbnVPYmoudG9nZ2xlTWVudSgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpb3VzJyk7XHJcbiAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGdldHRlck9iai5nZXRQcmV2aW91cyhgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cz9wYWdlPWApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQnKTtcclxuICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZ2V0dGVyT2JqLmdldE5leHQoYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3M/cGFnZT1gKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
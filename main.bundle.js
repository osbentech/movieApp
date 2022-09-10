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
/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/popup.js */ "./modules/popup.js");



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
          <button class="popBtn" id="btn${jFormat[i].id}">Comment</button><br>
        </div>
      </div>
      `;
    }
    
    overall.insertBefore(dynamic_paragraph, pages);
    overall.insertBefore(dynamic_container, pages);
    dynamic_container.appendChild(dynamic_section);

    const Popper = _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    const popperObj = new Popper();
    const commmentBtn = document.querySelectorAll('.popBtn');
    commmentBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        popperObj.openModal(btn.id.substring(3));
      });
    });
    
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
          <button class="popBtn" id="btn${jFormat[i].show.id}">Comment</button><br>
        </div>
      </div>
      `;
    }
    this.addLikeEventListener(jFormat, 1);
    this.initializeLikeCounter(jFormat, 1);

    const Popper = _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    const popperObj = new Popper();
    const commmentBtn = document.querySelectorAll('.popBtn');
    commmentBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        popperObj.openModal(btn.id.substring(3));
      });
    });
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
          <button class="popBtn" id="btn${jFormat[i].id}">Comment</button><br>
        </div>
      </div>
      `;
    }
    this.addLikeEventListener(jFormat, 0);
    this.initializeLikeCounter(jFormat, 0);

    const Popper = _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    const popperObj = new Popper();
    const commmentBtn = document.querySelectorAll('.popBtn');
    commmentBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        popperObj.openModal(btn.id.substring(3));
      });
    });
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
          <button class="popBtn" id="btn${jFormat[i].id}">Comment</button><br>
        </div>
      </div>
      `;
    }
    this.addLikeEventListener(jFormat, 0);
    this.initializeLikeCounter(jFormat, 0);

    const Popper = _modules_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    const popperObj = new Popper();
    const commmentBtn = document.querySelectorAll('.popBtn');
    commmentBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        popperObj.openModal(btn.id.substring(3));
      });
    });
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
        console.log(jFormatold);
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

/***/ "./modules/popup.js":
/*!**************************!*\
  !*** ./modules/popup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
class Popup {
    constructor() {
      this.index = 0;
    }

    closeModal = () => {
      let sectionModal = document.querySelector('.modal');
      sectionModal.style.display = 'none';
      sectionModal.classList.remove('open');
      //   htmlbody.style.webkitFilter = 'blur(0)';
    }

    openModal = async (id) => {
      const sectionModal = document.createElement('section');
      sectionModal.id = 'modal';
      sectionModal.className = 'modal';

      const fectedData = await fetch('https://api.tvmaze.com/shows/'+id);
      const jFormat = await fectedData.json();
      
      const detail = new Array(10);
      if (jFormat.image === null) {
        detail[0] = 'N/A';
      } else {
        detail[0] = jFormat.image.medium;
      }
      if (jFormat.name === null) {
        detail[1] = 'N/A';
      } else {
        detail[1] = jFormat.name;
      }
      if (jFormat.type === null) {
        detail[2] = 'N/A';
      } else {
        detail[2] = jFormat.type;
      }
      if (jFormat.language === null) {
        detail[3] = 'N/A';
      } else {
        detail[3] = jFormat.language;
      }
      if (jFormat.status === null) {
        detail[4] = 'N/A';
      } else {
        detail[4] = jFormat.status;
      }
      if (jFormat.network === null) {
        detail[5] = 'N/A';
      } else {
        detail[5] = jFormat.network.name;
      }
      if (jFormat.network === null) {
        detail[6] = 'N/A';
      } else {
        detail[6] = jFormat.network.country.code;
      }
      if (jFormat.rating === null) {
        detail[7] = 'N/A';
      } else {
        detail[7] = jFormat.rating.average;
      }

      sectionModal.innerHTML += `
      <div class="d-flex justify-content-end">
        <button id="close">&times;</button> 
      </div> 
      <div class="wrapper d-flex gap-5">
        <div>
          <img class="modalImg" src="${detail[0]}"/>
        </div>
        <div>
          <h1>${detail[1]}</h1>
          <div class="description">
            <div>
              <p><b>Type</b>: ${detail[2]}</p>
              <p><b>Language</b>: ${detail[3]}</p>
            </div>
            <div>
              <p><b>Status</b>: ${detail[4]}</p>
              <p><b>Network</b>: ${detail[5]} (${detail[6]})</p>
              <p><b>Rating</b>: ${detail[7]}</p>
             </div>
          </div>
        </div>
      </div>
        `;
        sectionModal.innerHTML += `<p><b>Genres</b>:`;
          for (let i = 0; i < jFormat.genres.length; i += 1) {
            sectionModal.innerHTML += `
              ${jFormat.genres[i]}, 
            `
          }
        sectionModal.innerHTML += `
          <p><b>Summary</b>: ${jFormat.summary}</p>
        `;
      document.body.appendChild(sectionModal);
      sectionModal.getBoundingClientRect();
      sectionModal.style.display = 'flex';
      sectionModal.style.backgroundColor = 'lightgray';
      sectionModal.style.width = '80vw';
      sectionModal.classList.add('open');
    //   htmlbody.style.webkitFilter = 'blur(2px)';
      let close = document.querySelector('#close');
      close.addEventListener('click', this.closeModal);
      getComments(sectionModal, id);
    }

    getComments = async (element, id) => {
      const fectedData = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nf8mEtKRhZMSeyST7atx/comments?item_id=item'+id);
      const jFormat = await fectedData.json();
      element.innerHTML += ` <h2>Comments (${jFormat.length})</h2>
      `
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  border: 0;\r\n}\r\n\r\n.overall-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-self: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.mobile-nav a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: x-large;\r\n  padding: 12px;\r\n}\r\n\r\n.mobile-nav a:hover {\r\n  color: #3c9ba5;\r\n}\r\n\r\n.separator {\r\n  color: white;\r\n  font-size: larger;\r\n}\r\n\r\n.search-bar {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.search {\r\n  height: 30px;\r\n  border-top-left-radius: 15px;\r\n  border-bottom-left-radius: 15px;\r\n  border-right: 0;\r\n  width: 60vw;\r\n}\r\n\r\n.search-btn {\r\n  border-top-right-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  border-left: 0;\r\n  background-color: #3c948b;\r\n  width: 30vw;\r\n}\r\n\r\n.menu-bar {\r\n  background-color: #3c948b;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 100vw;\r\n  height: 30px;\r\n  align-items: center;\r\n}\r\n\r\n.fa-bars,\r\n.menu-bar span {\r\n  color: #fbfaf9;\r\n}\r\n\r\n.fa-bars:hover {\r\n  color: #cacaca;\r\n}\r\n\r\n#myLinks {\r\n  display: none;\r\n  width: 100vw;\r\n}\r\n\r\n#myLinks a {\r\n  color: white;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n  display: block;\r\n  background-color: #1f4b47;\r\n}\r\n\r\n#myLinks a:hover {\r\n  background-color: #3f3f3f;\r\n}\r\n\r\nheader {\r\n  background-color: #272A31;\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  /* border: 1px solid red; */\r\n  justify-content: center;\r\n  width: 100vw;\r\n}\r\n\r\n.card-holder{\r\n  display: flex;\r\n  width: 80vw;\r\n  /* border: 1px solid blue; */\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.card {\r\n  margin: 10px;\r\n  padding: 10px;\r\n  border: 2px solid #3c9ba5;\r\n  display: flex;\r\n  flex: auto;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  width:min-content;\r\n}\r\n\r\n#heart {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.pages {\r\n  padding: 15px;\r\n}\r\n\r\n.span-one,\r\n.span-two {\r\n  font-size: larger;\r\n  color: #fbfaf9;\r\n  padding: 12px;\r\n}\r\n\r\n.span-two {\r\n  font-size: medium;\r\n}\r\n\r\n.left-footer,\r\n.right-footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.footer-three a,\r\n.footer-four a {\r\n  color: #3c9ba5;\r\n  text-decoration: none;\r\n  font-size: larger;\r\n  padding: 12px;\r\n}\r\n\r\n.footer-four a {\r\n  font-size: medium;\r\n}\r\n\r\n.footer-three a:hover,\r\n.footer-four a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nfooter {\r\n  /* display: flex; */\r\n  justify-content: space-between;\r\n  background-color: #272A31;\r\n  width: 100vw;\r\n  padding: 10px 0;\r\n}\r\n\r\n.modalImg {\r\n  width: 40vw;\r\n  height: 40vh;\r\n}\r\n\r\n.modal {\r\n  flex-direction: column;\r\n  padding: 0 3vw;\r\n  margin: 10vh 10vw;\r\n  height: 80vh;\r\n}\r\n\r\n.description {\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  gap: 80px;\r\n}\r\n\r\n#close {\r\n  margin-left: 30vw;\r\n  width: 35px;\r\n  text-align: center;\r\n  background-color: #272a31;\r\n  color: white;\r\n  margin-right: -3vw;\r\n}\r\n\r\n.wrapper {\r\n  flex-direction: column;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .logo {\r\n    order: 1;\r\n  }\r\n\r\n  .account {\r\n    order: 3;\r\n  }\r\n  \r\n  .menu-bar {\r\n    display: none;\r\n  }\r\n  .search-bar {\r\n    width: 50vw;\r\n    order: 2;\r\n  }\r\n\r\n  #myLinks {\r\n    display: flex;\r\n    order: 4;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  #myLinks a {\r\n    display: inline;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  .card-holder{\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  footer {\r\n    display: flex;\r\n  }\r\n\r\n  .wrapper {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .modalImg {\r\n    width: 20vw;\r\n    height: 40vh;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,4BAA4B;EAC5B,+BAA+B;EAC/B,eAAe;EACf,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;EAChC,cAAc;EACd,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,WAAW;EACX,4BAA4B;EAC5B,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,UAAU;EACV,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,iBAAiB;EACjB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,cAAc;EACd,qBAAqB;EACrB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,0BAA0B;AAC5B;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,yBAAyB;EACzB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;IACE,QAAQ;EACV;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,aAAa;EACf;EACA;IACE,WAAW;IACX,QAAQ;EACV;;EAEA;IACE,aAAa;IACb,QAAQ;IACR,yBAAyB;EAC3B;;EAEA;IACE,eAAe;IACf,yBAAyB;EAC3B;;EAEA;IACE,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,2BAA2B;EAC7B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,YAAY;EACd;AACF","sourcesContent":["body {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  border: 0;\r\n}\r\n\r\n.overall-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-self: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.mobile-nav a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: x-large;\r\n  padding: 12px;\r\n}\r\n\r\n.mobile-nav a:hover {\r\n  color: #3c9ba5;\r\n}\r\n\r\n.separator {\r\n  color: white;\r\n  font-size: larger;\r\n}\r\n\r\n.search-bar {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.search {\r\n  height: 30px;\r\n  border-top-left-radius: 15px;\r\n  border-bottom-left-radius: 15px;\r\n  border-right: 0;\r\n  width: 60vw;\r\n}\r\n\r\n.search-btn {\r\n  border-top-right-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  border-left: 0;\r\n  background-color: #3c948b;\r\n  width: 30vw;\r\n}\r\n\r\n.menu-bar {\r\n  background-color: #3c948b;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 100vw;\r\n  height: 30px;\r\n  align-items: center;\r\n}\r\n\r\n.fa-bars,\r\n.menu-bar span {\r\n  color: #fbfaf9;\r\n}\r\n\r\n.fa-bars:hover {\r\n  color: #cacaca;\r\n}\r\n\r\n#myLinks {\r\n  display: none;\r\n  width: 100vw;\r\n}\r\n\r\n#myLinks a {\r\n  color: white;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n  display: block;\r\n  background-color: #1f4b47;\r\n}\r\n\r\n#myLinks a:hover {\r\n  background-color: #3f3f3f;\r\n}\r\n\r\nheader {\r\n  background-color: #272A31;\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  /* border: 1px solid red; */\r\n  justify-content: center;\r\n  width: 100vw;\r\n}\r\n\r\n.card-holder{\r\n  display: flex;\r\n  width: 80vw;\r\n  /* border: 1px solid blue; */\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.card {\r\n  margin: 10px;\r\n  padding: 10px;\r\n  border: 2px solid #3c9ba5;\r\n  display: flex;\r\n  flex: auto;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  width:min-content;\r\n}\r\n\r\n#heart {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.pages {\r\n  padding: 15px;\r\n}\r\n\r\n.span-one,\r\n.span-two {\r\n  font-size: larger;\r\n  color: #fbfaf9;\r\n  padding: 12px;\r\n}\r\n\r\n.span-two {\r\n  font-size: medium;\r\n}\r\n\r\n.left-footer,\r\n.right-footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.footer-three a,\r\n.footer-four a {\r\n  color: #3c9ba5;\r\n  text-decoration: none;\r\n  font-size: larger;\r\n  padding: 12px;\r\n}\r\n\r\n.footer-four a {\r\n  font-size: medium;\r\n}\r\n\r\n.footer-three a:hover,\r\n.footer-four a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\nfooter {\r\n  /* display: flex; */\r\n  justify-content: space-between;\r\n  background-color: #272A31;\r\n  width: 100vw;\r\n  padding: 10px 0;\r\n}\r\n\r\n.modalImg {\r\n  width: 40vw;\r\n  height: 40vh;\r\n}\r\n\r\n.modal {\r\n  flex-direction: column;\r\n  padding: 0 3vw;\r\n  margin: 10vh 10vw;\r\n  height: 80vh;\r\n}\r\n\r\n.description {\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  gap: 80px;\r\n}\r\n\r\n#close {\r\n  margin-left: 30vw;\r\n  width: 35px;\r\n  text-align: center;\r\n  background-color: #272a31;\r\n  color: white;\r\n  margin-right: -3vw;\r\n}\r\n\r\n.wrapper {\r\n  flex-direction: column;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .logo {\r\n    order: 1;\r\n  }\r\n\r\n  .account {\r\n    order: 3;\r\n  }\r\n  \r\n  .menu-bar {\r\n    display: none;\r\n  }\r\n  .search-bar {\r\n    width: 50vw;\r\n    order: 2;\r\n  }\r\n\r\n  #myLinks {\r\n    display: flex;\r\n    order: 4;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  #myLinks a {\r\n    display: inline;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  .card-holder{\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  footer {\r\n    display: flex;\r\n  }\r\n\r\n  .wrapper {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .modalImg {\r\n    width: 20vw;\r\n    height: 40vh;\r\n  }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ29CO0FBQ1M7QUFDUDtBQUNFO0FBQ047QUFDdkM7QUFDb0M7QUFDRTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdURBQUc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxZQUFZO0FBQzdFLEdBQUc7QUFDSDtBQUNBLGVBQWUsd0RBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2svLi9tb2R1bGVzL2dldC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9tb2R1bGVzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQT1NUIGZyb20gJy4uL21vZHVsZXMvcG9zdC5qcyc7XHJcbmltcG9ydCBQb3B1cCBmcm9tICcuLi9tb2R1bGVzL3BvcHVwLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdFVCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICB9XHJcblxyXG4gIGdldEhvbWUgPSBhc3luYyAodXJsKSA9PiB7XHJcbiAgICBjb25zdCBmZWN0ZWREYXRhID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGpGb3JtYXQgPSBhd2FpdCBmZWN0ZWREYXRhLmpzb24oKTtcclxuICAgIGNvbnN0IG92ZXJhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmFsbC1jb250YWluZXInKTtcclxuICAgIGlmICh0aGlzLmluZGV4ID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlvdXMnKTtcclxuICAgICAgcHJldi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkeW5hbWljX3NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBkeW5hbWljX3NlY3Rpb24uaWQgPSAnY2FyZC1ob2xkZXInO1xyXG4gICAgZHluYW1pY19zZWN0aW9uLmNsYXNzTmFtZSA9ICdjYXJkLWhvbGRlcic7XHJcblxyXG4gICAgY29uc3QgZHluYW1pY19wYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkeW5hbWljX3BhcmFncmFwaC5pZCA9ICdpbmZvcm1hdGlvbic7XHJcbiAgICBkeW5hbWljX3BhcmFncmFwaC5jbGFzc05hbWUgPSAnaW5mb3JtYXRpb24nO1xyXG5cclxuICAgIGNvbnN0IGR5bmFtaWNfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgZHluYW1pY19jb250YWluZXIuaWQgPSAnY29udGFpbmVyJztcclxuICAgIGR5bmFtaWNfY29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xyXG5cclxuICAgIGNvbnN0IHBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VzJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpICs9IDEpIHtcclxuICAgICAgZHluYW1pY19zZWN0aW9uLmlubmVySFRNTCArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxpbWcgc3JjPSR7akZvcm1hdFtpXS5pbWFnZS5tZWRpdW19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj4ke2pGb3JtYXRbaV0ubmFtZX08L3NwYW4+PGJyPlxyXG4gICAgICAgICAgPGEgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwibGlrZVwiIGhyZWY9XCIjXCI+PGkgaWQ9XCJpdGVtJHtqRm9ybWF0W2ldLmlkfVwiIGNsYXNzPVwiZmEgZmEtaGVhcnRcIj48L2k+PC9hPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudGVyXCI+PC9zcGFuPjxzcGFuPiZlbXNwOyZlbXNwOyZlbXNwOyZlbXNwOyZlbXNwOzwvc3Bhbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3BCdG5cIiBpZD1cImJ0biR7akZvcm1hdFtpXS5pZH1cIj5Db21tZW50PC9idXR0b24+PGJyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb3ZlcmFsbC5pbnNlcnRCZWZvcmUoZHluYW1pY19wYXJhZ3JhcGgsIHBhZ2VzKTtcclxuICAgIG92ZXJhbGwuaW5zZXJ0QmVmb3JlKGR5bmFtaWNfY29udGFpbmVyLCBwYWdlcyk7XHJcbiAgICBkeW5hbWljX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkeW5hbWljX3NlY3Rpb24pO1xyXG5cclxuICAgIGNvbnN0IFBvcHBlciA9IFBvcHVwO1xyXG4gICAgY29uc3QgcG9wcGVyT2JqID0gbmV3IFBvcHBlcigpO1xyXG4gICAgY29uc3QgY29tbW1lbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wQnRuJyk7XHJcbiAgICBjb21tbWVudEJ0bi5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBvcHBlck9iai5vcGVuTW9kYWwoYnRuLmlkLnN1YnN0cmluZygzKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHRoaXMuYWRkTGlrZUV2ZW50TGlzdGVuZXIoakZvcm1hdCwgMCk7XHJcbiAgICB0aGlzLmluaXRpYWxpemVMaWtlQ291bnRlcihqRm9ybWF0LCAwKTtcclxuICB9XHJcblxyXG4gIGdldFNlYXJjaCA9IGFzeW5jICh1cmwpID0+IHtcclxuICAgIGNvbnN0IGZlY3RlZERhdGEgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgakZvcm1hdCA9IGF3YWl0IGZlY3RlZERhdGEuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coakZvcm1hdCk7XHJcbiAgICBjb25zdCBkeW5hbWljX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1ob2xkZXInKTtcclxuICAgIGNvbnN0IGR5bmFtaWNfcGFyYWdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9ybWF0aW9uJyk7XHJcbiAgICBjb25zdCBwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlcycpO1xyXG4gICAgZHluYW1pY19wYXJhZ3JhcGguaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkeW5hbWljX3NlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBkeW5hbWljX3BhcmFncmFwaC5pbm5lckhUTUwgPSBcIjxlbT48YnI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7U2VhcmNoIHJlc3VsdHMgZm9yOiBcIiArIHVybC5zcGxpdCgnPScpWzFdICtcIiAoXCIrakZvcm1hdC5sZW5ndGgrXCIpPC9lbT5cIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpGb3JtYXQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgZHluYW1pY19zZWN0aW9uLmlubmVySFRNTCArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxpbWcgc3JjPSR7akZvcm1hdFtpXS5zaG93LmltYWdlLm1lZGl1bX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7akZvcm1hdFtpXS5zaG93Lm5hbWV9PC9zcGFuPjxicj5cclxuICAgICAgICAgIDxhIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImxpa2VcIiBocmVmPVwiI1wiPjxpIGlkPVwiaXRlbSR7akZvcm1hdFtpXS5zaG93LmlkfVwiIGNsYXNzPVwiZmEgZmEtaGVhcnRcIj48L2k+PC9hPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudGVyXCI+PC9zcGFuPjxzcGFuPiZlbXNwOyZlbXNwOyZlbXNwOyZlbXNwOyZlbXNwOzwvc3Bhbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3BCdG5cIiBpZD1cImJ0biR7akZvcm1hdFtpXS5zaG93LmlkfVwiPkNvbW1lbnQ8L2J1dHRvbj48YnI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hZGRMaWtlRXZlbnRMaXN0ZW5lcihqRm9ybWF0LCAxKTtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUxpa2VDb3VudGVyKGpGb3JtYXQsIDEpO1xyXG5cclxuICAgIGNvbnN0IFBvcHBlciA9IFBvcHVwO1xyXG4gICAgY29uc3QgcG9wcGVyT2JqID0gbmV3IFBvcHBlcigpO1xyXG4gICAgY29uc3QgY29tbW1lbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wQnRuJyk7XHJcbiAgICBjb21tbWVudEJ0bi5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBvcHBlck9iai5vcGVuTW9kYWwoYnRuLmlkLnN1YnN0cmluZygzKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91cyA9IGFzeW5jICh1cmwpID0+IHtcclxuICAgIHRoaXMuaW5kZXggLT0gMTtcclxuICAgIGlmICh0aGlzLmluZGV4ID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlvdXMnKTtcclxuICAgICAgcHJldi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmZWN0ZWREYXRhID0gYXdhaXQgZmV0Y2godXJsICsgdGhpcy5pbmRleCk7XHJcbiAgICBjb25zdCBqRm9ybWF0ID0gYXdhaXQgZmVjdGVkRGF0YS5qc29uKCk7XHJcbiAgICBjb25zdCBkeW5hbWljX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1ob2xkZXInKTtcclxuICAgIGR5bmFtaWNfc2VjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpICs9IDEpIHtcclxuICAgICAgZHluYW1pY19zZWN0aW9uLmlubmVySFRNTCArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxpbWcgc3JjPSR7akZvcm1hdFtpXS5pbWFnZS5tZWRpdW19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj4ke2pGb3JtYXRbaV0ubmFtZX08L3NwYW4+PGJyPlxyXG4gICAgICAgICAgPGEgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwibGlrZVwiIGhyZWY9XCIjXCI+PGkgaWQ9XCJpdGVtJHtqRm9ybWF0W2ldLmlkfVwiIGNsYXNzPVwiZmEgZmEtaGVhcnRcIj48L2k+PC9hPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudGVyXCI+PC9zcGFuPjxzcGFuPiZlbXNwOyZlbXNwOyZlbXNwOyZlbXNwOyZlbXNwOzwvc3Bhbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3BCdG5cIiBpZD1cImJ0biR7akZvcm1hdFtpXS5pZH1cIj5Db21tZW50PC9idXR0b24+PGJyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgIH1cclxuICAgIHRoaXMuYWRkTGlrZUV2ZW50TGlzdGVuZXIoakZvcm1hdCwgMCk7XHJcbiAgICB0aGlzLmluaXRpYWxpemVMaWtlQ291bnRlcihqRm9ybWF0LCAwKTtcclxuXHJcbiAgICBjb25zdCBQb3BwZXIgPSBQb3B1cDtcclxuICAgIGNvbnN0IHBvcHBlck9iaiA9IG5ldyBQb3BwZXIoKTtcclxuICAgIGNvbnN0IGNvbW1tZW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcEJ0bicpO1xyXG4gICAgY29tbW1lbnRCdG4uZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwb3BwZXJPYmoub3Blbk1vZGFsKGJ0bi5pZC5zdWJzdHJpbmcoMykpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV4dCA9IGFzeW5jICh1cmwpID0+IHtcclxuICAgIHRoaXMuaW5kZXggKz0gMTtcclxuICAgIGlmICh0aGlzLmluZGV4ICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlvdXMnKTtcclxuICAgICAgcHJldi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmVjdGVkRGF0YSA9IGF3YWl0IGZldGNoKHVybCArIHRoaXMuaW5kZXgpO1xyXG4gICAgY29uc3QgakZvcm1hdCA9IGF3YWl0IGZlY3RlZERhdGEuanNvbigpO1xyXG4gICAgY29uc3QgZHluYW1pY19zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtaG9sZGVyJyk7XHJcbiAgICBkeW5hbWljX3NlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zb2xlLmxvZyhqRm9ybWF0KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkgKz0gMSkge1xyXG4gICAgICBkeW5hbWljX3NlY3Rpb24uaW5uZXJIVE1MICs9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPGltZyBzcmM9JHtqRm9ybWF0W2ldLmltYWdlLm1lZGl1bX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7akZvcm1hdFtpXS5uYW1lfTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICA8YSB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJsaWtlXCIgaHJlZj1cIiNcIj48aSBpZD1cIml0ZW0ke2pGb3JtYXRbaV0uaWR9XCIgY2xhc3M9XCJmYSBmYS1oZWFydFwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50ZXJcIj48L3NwYW4+PHNwYW4+JmVtc3A7JmVtc3A7JmVtc3A7JmVtc3A7JmVtc3A7PC9zcGFuPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcEJ0blwiIGlkPVwiYnRuJHtqRm9ybWF0W2ldLmlkfVwiPkNvbW1lbnQ8L2J1dHRvbj48YnI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hZGRMaWtlRXZlbnRMaXN0ZW5lcihqRm9ybWF0LCAwKTtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUxpa2VDb3VudGVyKGpGb3JtYXQsIDApO1xyXG5cclxuICAgIGNvbnN0IFBvcHBlciA9IFBvcHVwO1xyXG4gICAgY29uc3QgcG9wcGVyT2JqID0gbmV3IFBvcHBlcigpO1xyXG4gICAgY29uc3QgY29tbW1lbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wQnRuJyk7XHJcbiAgICBjb21tbWVudEJ0bi5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBvcHBlck9iai5vcGVuTW9kYWwoYnRuLmlkLnN1YnN0cmluZygzKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRMaWtlRXZlbnRMaXN0ZW5lciA9IGFzeW5jIChqRm9ybWF0b2xkLCBib29sKSA9PiB7XHJcbiAgICBjb25zdCBQb3N0ZXIgPSBQT1NUO1xyXG4gICAgY29uc3QgcG9zdGVyT2JqID0gbmV3IFBvc3RlcigpO1xyXG4gICAgY29uc3QgbGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlJyk7XHJcbiAgICBjb25zdCBsaWtlQXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlrZSk7XHJcbiAgICBsaWtlQXJyLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgIGxpa2VbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0geyBcIml0ZW1faWRcIjogYCR7ZS50YXJnZXQuaWR9YCB9O1xyXG4gICAgICAgIGF3YWl0ICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShwb3N0ZXJPYmoucG9zdExpa2UoYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL05mOG1FdEtSaFpNU2V5U1Q3YXR4L2xpa2VzYCwgcGF5bG9hZCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBqID0gMDtcclxuICAgICAgICBsZXQgb2xkID0gMDtcclxuICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgb2xkID0gakZvcm1hdG9sZFtqXS5zaG93LmlkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvbGQgPSBqRm9ybWF0b2xkW2pdLmlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAob2xkICE9PSBOdW1iZXIoZS50YXJnZXQuaWQuc3Vic3RyaW5nKDQpKSkge1xyXG4gICAgICAgICAgaiArPSAxO1xyXG4gICAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgICAgb2xkID0gakZvcm1hdG9sZFtqXS5zaG93LmlkO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2xkID0gakZvcm1hdG9sZFtqXS5pZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coakZvcm1hdG9sZCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaWtlQ291bnRlcihqKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemVMaWtlQ291bnRlciA9IGFzeW5jIChqRm9ybWF0b2xkLCBib29sKSA9PiB7XHJcbiAgICBjb25zdCBmZWN0ZWREYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL05mOG1FdEtSaFpNU2V5U1Q3YXR4L2xpa2VzYCk7XHJcbiAgICBjb25zdCBqRm9ybWF0ID0gYXdhaXQgZmVjdGVkRGF0YS5qc29uKCk7XHJcbiAgICBjb25zdCBsaWtlQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3VudGVyJyk7XHJcbiAgICBsZXQgbGVuID0gMDtcclxuICAgIGxldCBvbGQgPSAwO1xyXG4gICAgaWYgKGJvb2wpIHtcclxuICAgICAgbGVuID0gakZvcm1hdG9sZC5sZW5ndGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZW4gPSAyNDtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgakZvcm1hdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaisrKSB7XHJcbiAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgIG9sZCA9IGpGb3JtYXRvbGRbal0uc2hvdy5pZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb2xkID0gakZvcm1hdG9sZFtqXS5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGpGb3JtYXRbaV0uaXRlbV9pZCA9PT0gJ2l0ZW0nK29sZCkge1xyXG4gICAgICAgICAgbGlrZUNvdW50ZXJbal0uaW5uZXJIVE1MID0gakZvcm1hdFtpXS5saWtlcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlrZUNvdW50ZXIgPSAoaXRlbV9udW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGxpa2VDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvdW50ZXInKTtcclxuICAgIGNvbnN0IGxpa2VDb3VudCA9IGxpa2VDb3VudGVyW2l0ZW1fbnVtYmVyXS5pbm5lckhUTUw7XHJcbiAgICBjb25zb2xlLmxvZyhsaWtlQ291bnQpO1xyXG4gICAgaWYobGlrZUNvdW50ID09PSAnJykge1xyXG4gICAgICBsaWtlQ291bnRlcltpdGVtX251bWJlcl0uaW5uZXJIVE1MPSAnMSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsaWtlQ291bnRlcltpdGVtX251bWJlcl0uaW5uZXJIVE1MID0gTnVtYmVyKGxpa2VDb3VudGVyW2l0ZW1fbnVtYmVyXS5pbm5lckhUTUwpICsgMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTUVOVSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICB9XHJcbiAgXHJcbiAgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215TGlua3MnKTtcclxuICAgIGlmIChsaW5rcy5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgbGlua3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGlua3Muc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBzZWN0aW9uTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICAgICAgc2VjdGlvbk1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHNlY3Rpb25Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICAgIC8vICAgaHRtbGJvZHkuc3R5bGUud2Via2l0RmlsdGVyID0gJ2JsdXIoMCknO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Nb2RhbCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICBjb25zdCBzZWN0aW9uTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgIHNlY3Rpb25Nb2RhbC5pZCA9ICdtb2RhbCc7XHJcbiAgICAgIHNlY3Rpb25Nb2RhbC5jbGFzc05hbWUgPSAnbW9kYWwnO1xyXG5cclxuICAgICAgY29uc3QgZmVjdGVkRGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLycraWQpO1xyXG4gICAgICBjb25zdCBqRm9ybWF0ID0gYXdhaXQgZmVjdGVkRGF0YS5qc29uKCk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBkZXRhaWwgPSBuZXcgQXJyYXkoMTApO1xyXG4gICAgICBpZiAoakZvcm1hdC5pbWFnZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGRldGFpbFswXSA9ICdOL0EnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRldGFpbFswXSA9IGpGb3JtYXQuaW1hZ2UubWVkaXVtO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChqRm9ybWF0Lm5hbWUgPT09IG51bGwpIHtcclxuICAgICAgICBkZXRhaWxbMV0gPSAnTi9BJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZXRhaWxbMV0gPSBqRm9ybWF0Lm5hbWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGpGb3JtYXQudHlwZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGRldGFpbFsyXSA9ICdOL0EnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRldGFpbFsyXSA9IGpGb3JtYXQudHlwZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoakZvcm1hdC5sYW5ndWFnZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGRldGFpbFszXSA9ICdOL0EnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRldGFpbFszXSA9IGpGb3JtYXQubGFuZ3VhZ2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGpGb3JtYXQuc3RhdHVzID09PSBudWxsKSB7XHJcbiAgICAgICAgZGV0YWlsWzRdID0gJ04vQSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGV0YWlsWzRdID0gakZvcm1hdC5zdGF0dXM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGpGb3JtYXQubmV0d29yayA9PT0gbnVsbCkge1xyXG4gICAgICAgIGRldGFpbFs1XSA9ICdOL0EnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRldGFpbFs1XSA9IGpGb3JtYXQubmV0d29yay5uYW1lO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChqRm9ybWF0Lm5ldHdvcmsgPT09IG51bGwpIHtcclxuICAgICAgICBkZXRhaWxbNl0gPSAnTi9BJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZXRhaWxbNl0gPSBqRm9ybWF0Lm5ldHdvcmsuY291bnRyeS5jb2RlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChqRm9ybWF0LnJhdGluZyA9PT0gbnVsbCkge1xyXG4gICAgICAgIGRldGFpbFs3XSA9ICdOL0EnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRldGFpbFs3XSA9IGpGb3JtYXQucmF0aW5nLmF2ZXJhZ2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlY3Rpb25Nb2RhbC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2VcIj4mdGltZXM7PC9idXR0b24+IFxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyIGQtZmxleCBnYXAtNVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwibW9kYWxJbWdcIiBzcmM9XCIke2RldGFpbFswXX1cIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT4ke2RldGFpbFsxXX08L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHA+PGI+VHlwZTwvYj46ICR7ZGV0YWlsWzJdfTwvcD5cclxuICAgICAgICAgICAgICA8cD48Yj5MYW5ndWFnZTwvYj46ICR7ZGV0YWlsWzNdfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHA+PGI+U3RhdHVzPC9iPjogJHtkZXRhaWxbNF19PC9wPlxyXG4gICAgICAgICAgICAgIDxwPjxiPk5ldHdvcms8L2I+OiAke2RldGFpbFs1XX0gKCR7ZGV0YWlsWzZdfSk8L3A+XHJcbiAgICAgICAgICAgICAgPHA+PGI+UmF0aW5nPC9iPjogJHtkZXRhaWxbN119PC9wPlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBzZWN0aW9uTW9kYWwuaW5uZXJIVE1MICs9IGA8cD48Yj5HZW5yZXM8L2I+OmA7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpGb3JtYXQuZ2VucmVzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb25Nb2RhbC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICR7akZvcm1hdC5nZW5yZXNbaV19LCBcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIHNlY3Rpb25Nb2RhbC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgPHA+PGI+U3VtbWFyeTwvYj46ICR7akZvcm1hdC5zdW1tYXJ5fTwvcD5cclxuICAgICAgICBgO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlY3Rpb25Nb2RhbCk7XHJcbiAgICAgIHNlY3Rpb25Nb2RhbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgc2VjdGlvbk1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIHNlY3Rpb25Nb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmF5JztcclxuICAgICAgc2VjdGlvbk1vZGFsLnN0eWxlLndpZHRoID0gJzgwdncnO1xyXG4gICAgICBzZWN0aW9uTW9kYWwuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgLy8gICBodG1sYm9keS5zdHlsZS53ZWJraXRGaWx0ZXIgPSAnYmx1cigycHgpJztcclxuICAgICAgbGV0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlJyk7XHJcbiAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZU1vZGFsKTtcclxuICAgICAgZ2V0Q29tbWVudHMoc2VjdGlvbk1vZGFsLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tbWVudHMgPSBhc3luYyAoZWxlbWVudCwgaWQpID0+IHtcclxuICAgICAgY29uc3QgZmVjdGVkRGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9OZjhtRXRLUmhaTVNleVNUN2F0eC9jb21tZW50cz9pdGVtX2lkPWl0ZW0nK2lkKTtcclxuICAgICAgY29uc3QgakZvcm1hdCA9IGF3YWl0IGZlY3RlZERhdGEuanNvbigpO1xyXG4gICAgICBlbGVtZW50LmlubmVySFRNTCArPSBgIDxoMj5Db21tZW50cyAoJHtqRm9ybWF0Lmxlbmd0aH0pPC9oMj5cclxuICAgICAgYFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUE9TVCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICB9XHJcblxyXG4gIHBvc3RMaWtlID0gYXN5bmMgKHVybCwgcGF5bG9hZCkgPT4ge1xyXG4gICAgZmV0Y2goXHJcbiAgICAgIHVybCwgXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gfVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJhbGwtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtbmF2IGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1uYXYgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzNjOWJhNTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlcGFyYXRvciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlci1yaWdodDogMDtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJ0biB7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xcclxcbiAgYm9yZGVyLWxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M5NDhiO1xcclxcbiAgd2lkdGg6IDMwdnc7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M5NDhiO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtYmFycyxcXHJcXG4ubWVudS1iYXIgc3BhbiB7XFxyXFxuICBjb2xvcjogI2ZiZmFmOTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWJhcnM6aG92ZXIge1xcclxcbiAgY29sb3I6ICNjYWNhY2E7XFxyXFxufVxcclxcblxcclxcbiNteUxpbmtzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbiNteUxpbmtzIGEge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMTRweCAxNnB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY0YjQ3O1xcclxcbn1cXHJcXG5cXHJcXG4jbXlMaW5rcyBhOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjNmM2Y7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyQTMxO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWhvbGRlcntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzYzliYTU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogYXV0bztcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6bWluLWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbiNoZWFydCB7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2VzIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zcGFuLW9uZSxcXHJcXG4uc3Bhbi10d28ge1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICBjb2xvcjogI2ZiZmFmOTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5zcGFuLXR3byB7XFxyXFxuICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtZm9vdGVyLFxcclxcbi5yaWdodC1mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItdGhyZWUgYSxcXHJcXG4uZm9vdGVyLWZvdXIgYSB7XFxyXFxuICBjb2xvcjogIzNjOWJhNTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1mb3VyIGEge1xcclxcbiAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItdGhyZWUgYTpob3ZlcixcXHJcXG4uZm9vdGVyLWZvdXIgYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyQTMxO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxJbWcge1xcclxcbiAgd2lkdGg6IDQwdnc7XFxyXFxuICBoZWlnaHQ6IDQwdmg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMCAzdnc7XFxyXFxuICBtYXJnaW46IDEwdmggMTB2dztcXHJcXG4gIGhlaWdodDogODB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gIGdhcDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHZ3O1xcclxcbiAgd2lkdGg6IDM1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyYTMxO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtM3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5sb2dvIHtcXHJcXG4gICAgb3JkZXI6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWNjb3VudCB7XFxyXFxuICAgIG9yZGVyOiAzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubWVudS1iYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgLnNlYXJjaC1iYXIge1xcclxcbiAgICB3aWR0aDogNTB2dztcXHJcXG4gICAgb3JkZXI6IDI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbXlMaW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG9yZGVyOiA0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M5NDhiO1xcclxcbiAgfVxcclxcblxcclxcbiAgI215TGlua3MgYSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjOTQ4YjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkLWhvbGRlcntcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLndyYXBwZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsSW1nIHtcXHJcXG4gICAgd2lkdGg6IDIwdnc7XFxyXFxuICAgIGhlaWdodDogNDB2aDtcXHJcXG4gIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztJQUNYLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGFBQWE7SUFDYixRQUFRO0lBQ1IseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmFsbC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1uYXYgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLW5hdiBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjM2M5YmE1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VwYXJhdG9yIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIHtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDYwdnc7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYnRuIHtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XFxyXFxuICBib3JkZXItbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzk0OGI7XFxyXFxuICB3aWR0aDogMzB2dztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzk0OGI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS1iYXJzLFxcclxcbi5tZW51LWJhciBzcGFuIHtcXHJcXG4gIGNvbG9yOiAjZmJmYWY5O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtYmFyczpob3ZlciB7XFxyXFxuICBjb2xvcjogI2NhY2FjYTtcXHJcXG59XFxyXFxuXFxyXFxuI215TGlua3Mge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuI215TGlua3MgYSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjRiNDc7XFxyXFxufVxcclxcblxcclxcbiNteUxpbmtzIGE6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmM2YzZjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzJBMzE7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaG9sZGVye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzNjOWJhNTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiBhdXRvO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDptaW4tY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYXJ0IHtcXHJcXG4gIHdpZHRoOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZXMge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwYW4tb25lLFxcclxcbi5zcGFuLXR3byB7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gIGNvbG9yOiAjZmJmYWY5O1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwYW4tdHdvIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1mb290ZXIsXFxyXFxuLnJpZ2h0LWZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci10aHJlZSBhLFxcclxcbi5mb290ZXItZm91ciBhIHtcXHJcXG4gIGNvbG9yOiAjM2M5YmE1O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWZvdXIgYSB7XFxyXFxuICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci10aHJlZSBhOmhvdmVyLFxcclxcbi5mb290ZXItZm91ciBhOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgLyogZGlzcGxheTogZmxleDsgKi9cXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzJBMzE7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbEltZyB7XFxyXFxuICB3aWR0aDogNDB2dztcXHJcXG4gIGhlaWdodDogNDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAwIDN2dztcXHJcXG4gIG1hcmdpbjogMTB2aCAxMHZ3O1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgZ2FwOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvc2Uge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwdnc7XFxyXFxuICB3aWR0aDogMzVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzJhMzE7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC0zdnc7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLmxvZ28ge1xcclxcbiAgICBvcmRlcjogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hY2NvdW50IHtcXHJcXG4gICAgb3JkZXI6IDM7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tZW51LWJhciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAuc2VhcmNoLWJhciB7XFxyXFxuICAgIHdpZHRoOiA1MHZ3O1xcclxcbiAgICBvcmRlcjogMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNteUxpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgb3JkZXI6IDQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzk0OGI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbXlMaW5rcyBhIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M5NDhiO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtaG9sZGVye1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud3JhcHBlciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWxJbWcge1xcclxcbiAgICB3aWR0aDogMjB2dztcXHJcXG4gICAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgVHdpdHRlciBmcm9tICcuLi9pbWcvdHdpdHRlci5wbmcnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9pbWcvRGViYnktQmVuamFtaW4tTG9nby5wbmcnO1xyXG5pbXBvcnQgRmFjZWJvb2sgZnJvbSAnLi4vaW1nL2ZhY2Vib29rLmpwZyc7XHJcbmltcG9ydCBJbnN0YWdyYW0gZnJvbSAnLi4vaW1nL2luc3RhZ3JhbS5wbmcnO1xyXG5pbXBvcnQgUmVkZGl0IGZyb20gJy4uL2ltZy9yZWRkaXQucG5nJztcclxuLy8gaW1wb3J0IFBPU1QgZnJvbSAnLi4vbW9kdWxlcy9wb3N0LmpzJztcclxuaW1wb3J0IEdFVCBmcm9tICcuLi9tb2R1bGVzL2dldC5qcyc7XHJcbmltcG9ydCBNRU5VIGZyb20gJy4uL21vZHVsZXMvbWVudS5qcyc7XHJcblxyXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ0bicpO1xyXG5jb25zdCBiYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLWJhcnMnKTtcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCBHZXR0ZXIgPSBHRVQ7XHJcbiAgY29uc3QgZ2V0dGVyT2JqID0gbmV3IEdldHRlcigpO1xyXG5cclxuICBnZXR0ZXJPYmouZ2V0SG9tZShgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cz9wYWdlPTBgKTtcclxuXHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZ2V0dGVyT2JqLmdldFNlYXJjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT0ke2lucHV0LnZhbHVlfWApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBNZW51ID0gTUVOVTtcclxuICBjb25zdCBtZW51T2JqID0gbmV3IE1lbnUoKTtcclxuICBiYXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbWVudU9iai50b2dnbGVNZW51KCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlvdXMnKTtcclxuICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZ2V0dGVyT2JqLmdldFByZXZpb3VzKGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzP3BhZ2U9YCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dCcpO1xyXG4gIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBnZXR0ZXJPYmouZ2V0TmV4dChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cz9wYWdlPWApO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
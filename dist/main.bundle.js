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
/* harmony import */ var _post_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.js */ "./modules/post.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ "./modules/popup.js");
/* harmony import */ var _img_No_Image_Placeholder_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/No-Image-Placeholder.png */ "./img/No-Image-Placeholder.png");




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
    const dynamicSection = document.createElement('section');
    dynamicSection.id = 'card-holder';
    dynamicSection.className = 'card-holder';

    const dynamicParagraph = document.createElement('p');
    dynamicParagraph.id = 'information';
    dynamicParagraph.className = 'information';

    const dynamicContainer = document.createElement('section');
    dynamicContainer.id = 'container';
    dynamicContainer.className = 'container';

    const pages = document.querySelector('.pages');
    for (let i = 0; i < 24; i += 1) {
      dynamicSection.innerHTML += `
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

    overall.insertBefore(dynamicParagraph, pages);
    overall.insertBefore(dynamicContainer, pages);
    dynamicContainer.appendChild(dynamicSection);

    const Popper = _popup_js__WEBPACK_IMPORTED_MODULE_1__["default"];
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
    const dynamicSection = document.querySelector('.card-holder');
    const dynamicParagraph = document.querySelector('.information');
    dynamicParagraph.innerHTML = '';
    dynamicSection.innerHTML = '';
    dynamicParagraph.innerHTML = `<em><br>&nbsp;&nbsp;&nbsp;&nbsp;Search results for: ${url.split('=')[1]} (${jFormat.length})</em>`;

    for (let i = 0; i < jFormat.length; i += 1) {
      const detail = new Array(3);
      if (jFormat[i].show.image === null) {
        detail[0] = `${_img_No_Image_Placeholder_png__WEBPACK_IMPORTED_MODULE_2__}`;
      } else {
        detail[0] = jFormat[i].show.image.medium;
      }
      if (jFormat[i].show.name === null) {
        detail[1] = 'N/A';
      } else {
        detail[1] = jFormat[i].show.name;
      }
      if (jFormat[i].show.id === null) {
        detail[2] = 'N/A';
      } else {
        detail[2] = jFormat[i].show.id;
      }

      dynamicSection.innerHTML += `
      <div class="card">
        <br>
        <img src='${detail[0]}'>
        <div>
          <span class="name">${detail[1]}</span><br>
          <a type="submit" class="like" href="#"><i id="item${detail[2]}" class="fa fa-heart"></i></a>
          <span class="counter"></span><span>&emsp;&emsp;&emsp;&emsp;&emsp;</span>
          <button class="popBtn" id="btn${detail[2]}">Comment</button><br>
        </div>
      </div>
      `;
    }
    this.addLikeEventListener(jFormat, 1);
    this.initializeLikeCounter(jFormat, 1);

    const Popper = _popup_js__WEBPACK_IMPORTED_MODULE_1__["default"];
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
    const dynamicSection = document.querySelector('.card-holder');
    dynamicSection.innerHTML = '';

    for (let i = 0; i < 24; i += 1) {
      dynamicSection.innerHTML += `
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

    const Popper = _popup_js__WEBPACK_IMPORTED_MODULE_1__["default"];
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
    const dynamicSection = document.querySelector('.card-holder');
    dynamicSection.innerHTML = '';
    for (let i = 0; i < 24; i += 1) {
      dynamicSection.innerHTML += `
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

    const Popper = _popup_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    const popperObj = new Popper();
    const commmentBtn = document.querySelectorAll('.popBtn');
    commmentBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        popperObj.openModal(btn.id.substring(3));
      });
    });
  }

  addLikeEventListener = async (jFormatold, bool) => {
    const Poster = _post_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    const posterObj = new Poster();
    const like = document.querySelectorAll('.like');
    const likeArr = Array.prototype.slice.call(like);
    likeArr.forEach((_, index) => {
      like[index].addEventListener('click', async (e) => {
        const payload = { item_id: `${e.target.id}` };
        await new Promise((resolve) => {
          resolve(posterObj.postLike('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nf8mEtKRhZMSeyST7atx/likes', payload));
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
    const fectedData = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nf8mEtKRhZMSeyST7atx/likes');
    const jFormat = await fectedData.json();
    const likeCounter = document.querySelectorAll('.counter');
    let len = 0;
    let old = 0;
    if (bool) {
      len = jFormatold.length;
    } else {
      len = 24;
    }
    for (let i = 0; i < jFormat.length; i += 1) {
      for (let j = 0; j < len; j += 1) {
        if (bool) {
          old = jFormatold[j].show.id;
        } else {
          old = jFormatold[j].id;
        }
        if (jFormat[i].item_id === `item${old}`) {
          likeCounter[j].innerHTML = jFormat[i].likes;
          break;
        }
      }
    }
  }

  updateLikeCounter = (itemNumber) => {
    const likeCounter = document.querySelectorAll('.counter');
    const likeCount = likeCounter[itemNumber].innerHTML;
    if (likeCount === '') {
      likeCounter[itemNumber].innerHTML = '1';
    } else {
      likeCounter[itemNumber].innerHTML = Number(likeCounter[itemNumber].innerHTML) + 1;
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
    if (links.style.display === 'block') {
      links.style.display = 'none';
    } else {
      links.style.display = 'block';
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
    this.sectionModal = document.createElement('section');
    this.sectionModal.id = 'modal';
    this.sectionModal.className = 'modal';
  }

    closeModal = () => {
      const sectionModal = document.querySelector('.modal');
      sectionModal.style.display = 'none';
      sectionModal.classList.remove('open');
    }

    openModal = async (id) => {
      const fectedData = await fetch(`https://api.tvmaze.com/shows/${id}`);
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

      this.sectionModal.innerHTML += `
      <div class="modal-header d-flex justify-content-end">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button> 
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
      this.sectionModal.innerHTML += '<p><b>Genres</b>:';
      for (let i = 0; i < jFormat.genres.length; i += 1) {
        this.sectionModal.innerHTML += `${jFormat.genres[i]}, `;
      }
      this.sectionModal.innerHTML += `<p><b>Summary</b>: ${jFormat.summary}</p>`;
      this.getComments(this.sectionModal, id);
      this.sectionModal.innerHTML += ` <h2>Add a comment</h2>
      <form>
        <input size="50" id="input" type="text" placeholder="Your name"><br><br>
        <textarea rows="5" cols="40" id="comt" placeholder="Your insights"></textarea><br><br>
        <button id="${id}" class="combtn" type="button">Comment</button><br><br>
      </form>
      `;

      document.body.appendChild(this.sectionModal);
      this.sectionModal.getBoundingClientRect();
      this.sectionModal.style.display = 'flex';
      this.sectionModal.style.backgroundColor = 'lightgray';
      this.sectionModal.style.width = '80vw';
      this.sectionModal.classList.add('open');

      if (this.index === 0) {
        this.sectionModal.addEventListener('click', (e) => {
          if (e.target.classList.contains('combtn')) {
            const payload = {
              item_id: `item${e.target.id}`,
              username: document.getElementById('input').value,
              comment: document.getElementById('comt').value,
            };
            fetch(
              'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nf8mEtKRhZMSeyST7atx/comments',
              {
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
                method: 'POST',
                body: JSON.stringify(payload),
              },
            );
            this.updateComments(id, document.getElementById('input').value, document.getElementById('comt').value);
          }
        });
        this.sectionModal.addEventListener('click', (e) => {
          if (e.target.classList.contains('close')) {
            this.sectionModal.classList.remove('open');
            this.sectionModal.style.display = 'none';
            this.sectionModal.innerHTML = '';
          }
        });
        this.index += 1;
      }
    }

    getComments = async (element, id) => {
      const fectedData = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nf8mEtKRhZMSeyST7atx/comments?item_id=item${id}`);
      let count = 0;
      if (!fectedData.ok) {
        element.innerHTML += ` <h2 class="comments-header">Comments (${count})</h2>`;
        throw new Error(`status code ${fectedData.status}`);
      } else {
        const jFormat = await fectedData.json();
        if (jFormat.length !== undefined) {
          count = jFormat.length;
        }
        element.innerHTML += ` <h2 class="comments-header" >Comments (${count})</h2>`;
        for (let i = 0; i < jFormat.length; i += 1) {
          element.innerHTML += ` 
          <p>${jFormat[i].creation_date} ${jFormat[i].username}: ${jFormat[i].comment}</p>
          `;
        }
      }
    }

    updateComments = async (id, user, comment) => {
      const update = document.querySelector('.comments-header');
      update.textContent = `Comments (${Number(update.textContent.substring(10).replace(')', '')) + 1})`;
      const fectedData = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nf8mEtKRhZMSeyST7atx/comments?item_id=item${id}`);
      const jFormat = await fectedData.json();
      let date = '2022-09-10';
      if (jFormat.length - 1 >= 0) {
        date = jFormat[jFormat.length - 1].creation_date;
      }
      this.sectionModal.innerHTML += ` 
      <p>${date} ${user}: ${comment} </p>
      `;
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  border: 0;\r\n}\r\n\r\n.overall-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-self: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.footer-three a,\r\n.footer-four a {\r\n  color: #3c9ba5;\r\n  text-decoration: none;\r\n  font-size: larger;\r\n  padding: 12px;\r\n}\r\n\r\n.footer-four a {\r\n  font-size: medium;\r\n}\r\n\r\n.mobile-nav a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: x-large;\r\n  padding: 12px;\r\n}\r\n\r\n.footer-three a:hover,\r\n.footer-four a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.mobile-nav a:hover {\r\n  color: #3c9ba5;\r\n}\r\n\r\n.separator {\r\n  color: white;\r\n  font-size: larger;\r\n}\r\n\r\n.search-bar {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.search {\r\n  height: 30px;\r\n  border-top-left-radius: 15px;\r\n  border-bottom-left-radius: 15px;\r\n  border-right: 0;\r\n  width: 60vw;\r\n}\r\n\r\n.search-btn {\r\n  border-top-right-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  border-left: 0;\r\n  background-color: #3c948b;\r\n  width: 30vw;\r\n}\r\n\r\n.menu-bar {\r\n  background-color: #3c948b;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 100vw;\r\n  height: 30px;\r\n  align-items: center;\r\n}\r\n\r\n.fa-bars,\r\n.menu-bar span {\r\n  color: #fbfaf9;\r\n}\r\n\r\n.fa-bars:hover {\r\n  color: #cacaca;\r\n}\r\n\r\n#myLinks {\r\n  display: none;\r\n  width: 100vw;\r\n}\r\n\r\n#myLinks a {\r\n  color: white;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n  display: block;\r\n  background-color: #1f4b47;\r\n}\r\n\r\n#myLinks a:hover {\r\n  background-color: #3f3f3f;\r\n}\r\n\r\nheader {\r\n  background-color: #272a31;\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100vw;\r\n}\r\n\r\n.card-holder {\r\n  display: flex;\r\n  width: 80vw;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.card {\r\n  margin: 10px;\r\n  padding: 10px;\r\n  border: 2px solid #3c9ba5;\r\n  display: flex;\r\n  flex: auto;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  width: min-content;\r\n}\r\n\r\n#heart {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.pages {\r\n  padding: 15px;\r\n}\r\n\r\n.span-one,\r\n.span-two {\r\n  font-size: larger;\r\n  color: #fbfaf9;\r\n  padding: 12px;\r\n}\r\n\r\n.span-two {\r\n  font-size: medium;\r\n}\r\n\r\n.left-footer,\r\n.right-footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nfooter {\r\n  /* display: flex; */\r\n  justify-content: space-between;\r\n  background-color: #272a31;\r\n  width: 100vw;\r\n  padding: 10px 0;\r\n}\r\n\r\n.modalImg {\r\n  width: 40vw;\r\n  height: 40vh;\r\n}\r\n\r\n.modal {\r\n  flex-direction: column;\r\n  padding: 0 3vw;\r\n  margin: 10vh 10vw;\r\n  height: 80vh;\r\n}\r\n\r\n.description {\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  gap: 80px;\r\n}\r\n\r\n#close {\r\n  margin-left: 30vw;\r\n  width: 35px;\r\n  text-align: center;\r\n  background-color: #272a31;\r\n  color: white;\r\n  margin-right: -3vw;\r\n}\r\n\r\n.wrapper {\r\n  flex-direction: column;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .logo {\r\n    order: 1;\r\n  }\r\n\r\n  .account {\r\n    order: 3;\r\n  }\r\n\r\n  .menu-bar {\r\n    display: none;\r\n  }\r\n\r\n  .search-bar {\r\n    width: 50vw;\r\n    order: 2;\r\n  }\r\n\r\n  #myLinks {\r\n    display: flex;\r\n    order: 4;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  #myLinks a {\r\n    display: inline;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  .card-holder {\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  footer {\r\n    display: flex;\r\n  }\r\n\r\n  .wrapper {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .modalImg {\r\n    width: 20vw;\r\n    height: 40vh;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;;EAEE,cAAc;EACd,qBAAqB;EACrB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,aAAa;AACf;;AAEA;;EAEE,0BAA0B;AAC5B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,4BAA4B;EAC5B,+BAA+B;EAC/B,eAAe;EACf,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;EAChC,cAAc;EACd,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,UAAU;EACV,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,iBAAiB;EACjB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,yBAAyB;EACzB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;IACE,QAAQ;EACV;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;IACX,QAAQ;EACV;;EAEA;IACE,aAAa;IACb,QAAQ;IACR,yBAAyB;EAC3B;;EAEA;IACE,eAAe;IACf,yBAAyB;EAC3B;;EAEA;IACE,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,2BAA2B;EAC7B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,YAAY;EACd;AACF","sourcesContent":["body {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  border: 0;\r\n}\r\n\r\n.overall-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-self: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.footer-three a,\r\n.footer-four a {\r\n  color: #3c9ba5;\r\n  text-decoration: none;\r\n  font-size: larger;\r\n  padding: 12px;\r\n}\r\n\r\n.footer-four a {\r\n  font-size: medium;\r\n}\r\n\r\n.mobile-nav a {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-size: x-large;\r\n  padding: 12px;\r\n}\r\n\r\n.footer-three a:hover,\r\n.footer-four a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.mobile-nav a:hover {\r\n  color: #3c9ba5;\r\n}\r\n\r\n.separator {\r\n  color: white;\r\n  font-size: larger;\r\n}\r\n\r\n.search-bar {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.search {\r\n  height: 30px;\r\n  border-top-left-radius: 15px;\r\n  border-bottom-left-radius: 15px;\r\n  border-right: 0;\r\n  width: 60vw;\r\n}\r\n\r\n.search-btn {\r\n  border-top-right-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  border-left: 0;\r\n  background-color: #3c948b;\r\n  width: 30vw;\r\n}\r\n\r\n.menu-bar {\r\n  background-color: #3c948b;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 100vw;\r\n  height: 30px;\r\n  align-items: center;\r\n}\r\n\r\n.fa-bars,\r\n.menu-bar span {\r\n  color: #fbfaf9;\r\n}\r\n\r\n.fa-bars:hover {\r\n  color: #cacaca;\r\n}\r\n\r\n#myLinks {\r\n  display: none;\r\n  width: 100vw;\r\n}\r\n\r\n#myLinks a {\r\n  color: white;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n  display: block;\r\n  background-color: #1f4b47;\r\n}\r\n\r\n#myLinks a:hover {\r\n  background-color: #3f3f3f;\r\n}\r\n\r\nheader {\r\n  background-color: #272a31;\r\n  width: 100vw;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100vw;\r\n}\r\n\r\n.card-holder {\r\n  display: flex;\r\n  width: 80vw;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.card {\r\n  margin: 10px;\r\n  padding: 10px;\r\n  border: 2px solid #3c9ba5;\r\n  display: flex;\r\n  flex: auto;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  width: min-content;\r\n}\r\n\r\n#heart {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.pages {\r\n  padding: 15px;\r\n}\r\n\r\n.span-one,\r\n.span-two {\r\n  font-size: larger;\r\n  color: #fbfaf9;\r\n  padding: 12px;\r\n}\r\n\r\n.span-two {\r\n  font-size: medium;\r\n}\r\n\r\n.left-footer,\r\n.right-footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nfooter {\r\n  /* display: flex; */\r\n  justify-content: space-between;\r\n  background-color: #272a31;\r\n  width: 100vw;\r\n  padding: 10px 0;\r\n}\r\n\r\n.modalImg {\r\n  width: 40vw;\r\n  height: 40vh;\r\n}\r\n\r\n.modal {\r\n  flex-direction: column;\r\n  padding: 0 3vw;\r\n  margin: 10vh 10vw;\r\n  height: 80vh;\r\n}\r\n\r\n.description {\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  gap: 80px;\r\n}\r\n\r\n#close {\r\n  margin-left: 30vw;\r\n  width: 35px;\r\n  text-align: center;\r\n  background-color: #272a31;\r\n  color: white;\r\n  margin-right: -3vw;\r\n}\r\n\r\n.wrapper {\r\n  flex-direction: column;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .logo {\r\n    order: 1;\r\n  }\r\n\r\n  .account {\r\n    order: 3;\r\n  }\r\n\r\n  .menu-bar {\r\n    display: none;\r\n  }\r\n\r\n  .search-bar {\r\n    width: 50vw;\r\n    order: 2;\r\n  }\r\n\r\n  #myLinks {\r\n    display: flex;\r\n    order: 4;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  #myLinks a {\r\n    display: inline;\r\n    background-color: #3c948b;\r\n  }\r\n\r\n  .card-holder {\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  footer {\r\n    display: flex;\r\n  }\r\n\r\n  .wrapper {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .modalImg {\r\n    width: 20vw;\r\n    height: 40vh;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */









const btn = document.querySelector('.search-btn');
const bars = document.querySelector('.fa-bars');
const input = document.querySelector('.search');

window.addEventListener('DOMContentLoaded', () => {
  const Getter = _modules_get_js__WEBPACK_IMPORTED_MODULE_6__["default"];
  const getterObj = new Getter();

  getterObj.getHome('https://api.tvmaze.com/shows?page=0');

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
    getterObj.getPrevious('https://api.tvmaze.com/shows?page=');
  });

  const next = document.querySelector('.next');
  next.addEventListener('click', () => {
    getterObj.getNext('https://api.tvmaze.com/shows?page=');
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

/***/ "./img/No-Image-Placeholder.png":
/*!**************************************!*\
  !*** ./img/No-Image-Placeholder.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a60b9fe28adc7967a539.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2svLi9tb2R1bGVzL2dldC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9tb2R1bGVzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL215LXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQT1NUIGZyb20gJy4vcG9zdC5qcyc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9wb3B1cC5qcyc7XG5pbXBvcnQgTk9fSU1HIGZyb20gJy4uL2ltZy9Oby1JbWFnZS1QbGFjZWhvbGRlci5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHRVQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgfVxuXG4gIGdldEhvbWUgPSBhc3luYyAodXJsKSA9PiB7XG4gICAgY29uc3QgZmVjdGVkRGF0YSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgakZvcm1hdCA9IGF3YWl0IGZlY3RlZERhdGEuanNvbigpO1xuICAgIGNvbnN0IG92ZXJhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmFsbC1jb250YWluZXInKTtcbiAgICBpZiAodGhpcy5pbmRleCA9PT0gMCkge1xuICAgICAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aW91cycpO1xuICAgICAgcHJldi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGR5bmFtaWNTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGR5bmFtaWNTZWN0aW9uLmlkID0gJ2NhcmQtaG9sZGVyJztcbiAgICBkeW5hbWljU2VjdGlvbi5jbGFzc05hbWUgPSAnY2FyZC1ob2xkZXInO1xuXG4gICAgY29uc3QgZHluYW1pY1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkeW5hbWljUGFyYWdyYXBoLmlkID0gJ2luZm9ybWF0aW9uJztcbiAgICBkeW5hbWljUGFyYWdyYXBoLmNsYXNzTmFtZSA9ICdpbmZvcm1hdGlvbic7XG5cbiAgICBjb25zdCBkeW5hbWljQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGR5bmFtaWNDb250YWluZXIuaWQgPSAnY29udGFpbmVyJztcbiAgICBkeW5hbWljQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWluZXInO1xuXG4gICAgY29uc3QgcGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZXMnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpICs9IDEpIHtcbiAgICAgIGR5bmFtaWNTZWN0aW9uLmlubmVySFRNTCArPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxpbWcgc3JjPSR7akZvcm1hdFtpXS5pbWFnZS5tZWRpdW19PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7akZvcm1hdFtpXS5uYW1lfTwvc3Bhbj48YnI+XG4gICAgICAgICAgPGEgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwibGlrZVwiIGhyZWY9XCIjXCI+PGkgaWQ9XCJpdGVtJHtqRm9ybWF0W2ldLmlkfVwiIGNsYXNzPVwiZmEgZmEtaGVhcnRcIj48L2k+PC9hPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRlclwiPjwvc3Bhbj48c3Bhbj4mZW1zcDsmZW1zcDsmZW1zcDsmZW1zcDsmZW1zcDs8L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcEJ0blwiIGlkPVwiYnRuJHtqRm9ybWF0W2ldLmlkfVwiPkNvbW1lbnQ8L2J1dHRvbj48YnI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cblxuICAgIG92ZXJhbGwuaW5zZXJ0QmVmb3JlKGR5bmFtaWNQYXJhZ3JhcGgsIHBhZ2VzKTtcbiAgICBvdmVyYWxsLmluc2VydEJlZm9yZShkeW5hbWljQ29udGFpbmVyLCBwYWdlcyk7XG4gICAgZHluYW1pY0NvbnRhaW5lci5hcHBlbmRDaGlsZChkeW5hbWljU2VjdGlvbik7XG5cbiAgICBjb25zdCBQb3BwZXIgPSBQb3B1cDtcbiAgICBjb25zdCBwb3BwZXJPYmogPSBuZXcgUG9wcGVyKCk7XG4gICAgY29uc3QgY29tbW1lbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wQnRuJyk7XG4gICAgY29tbW1lbnRCdG4uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHBvcHBlck9iai5vcGVuTW9kYWwoYnRuLmlkLnN1YnN0cmluZygzKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLmFkZExpa2VFdmVudExpc3RlbmVyKGpGb3JtYXQsIDApO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUxpa2VDb3VudGVyKGpGb3JtYXQsIDApO1xuICB9XG5cbiAgZ2V0U2VhcmNoID0gYXN5bmMgKHVybCkgPT4ge1xuICAgIGNvbnN0IGZlY3RlZERhdGEgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IGpGb3JtYXQgPSBhd2FpdCBmZWN0ZWREYXRhLmpzb24oKTtcbiAgICBjb25zdCBkeW5hbWljU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWhvbGRlcicpO1xuICAgIGNvbnN0IGR5bmFtaWNQYXJhZ3JhcGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb3JtYXRpb24nKTtcbiAgICBkeW5hbWljUGFyYWdyYXBoLmlubmVySFRNTCA9ICcnO1xuICAgIGR5bmFtaWNTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICAgIGR5bmFtaWNQYXJhZ3JhcGguaW5uZXJIVE1MID0gYDxlbT48YnI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7U2VhcmNoIHJlc3VsdHMgZm9yOiAke3VybC5zcGxpdCgnPScpWzFdfSAoJHtqRm9ybWF0Lmxlbmd0aH0pPC9lbT5gO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqRm9ybWF0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBkZXRhaWwgPSBuZXcgQXJyYXkoMyk7XG4gICAgICBpZiAoakZvcm1hdFtpXS5zaG93LmltYWdlID09PSBudWxsKSB7XG4gICAgICAgIGRldGFpbFswXSA9IGAke05PX0lNR31gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGV0YWlsWzBdID0gakZvcm1hdFtpXS5zaG93LmltYWdlLm1lZGl1bTtcbiAgICAgIH1cbiAgICAgIGlmIChqRm9ybWF0W2ldLnNob3cubmFtZSA9PT0gbnVsbCkge1xuICAgICAgICBkZXRhaWxbMV0gPSAnTi9BJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRldGFpbFsxXSA9IGpGb3JtYXRbaV0uc2hvdy5uYW1lO1xuICAgICAgfVxuICAgICAgaWYgKGpGb3JtYXRbaV0uc2hvdy5pZCA9PT0gbnVsbCkge1xuICAgICAgICBkZXRhaWxbMl0gPSAnTi9BJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRldGFpbFsyXSA9IGpGb3JtYXRbaV0uc2hvdy5pZDtcbiAgICAgIH1cblxuICAgICAgZHluYW1pY1NlY3Rpb24uaW5uZXJIVE1MICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGltZyBzcmM9JyR7ZGV0YWlsWzBdfSc+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHtkZXRhaWxbMV19PC9zcGFuPjxicj5cbiAgICAgICAgICA8YSB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJsaWtlXCIgaHJlZj1cIiNcIj48aSBpZD1cIml0ZW0ke2RldGFpbFsyXX1cIiBjbGFzcz1cImZhIGZhLWhlYXJ0XCI+PC9pPjwvYT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50ZXJcIj48L3NwYW4+PHNwYW4+JmVtc3A7JmVtc3A7JmVtc3A7JmVtc3A7JmVtc3A7PC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3BCdG5cIiBpZD1cImJ0biR7ZGV0YWlsWzJdfVwiPkNvbW1lbnQ8L2J1dHRvbj48YnI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cbiAgICB0aGlzLmFkZExpa2VFdmVudExpc3RlbmVyKGpGb3JtYXQsIDEpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUxpa2VDb3VudGVyKGpGb3JtYXQsIDEpO1xuXG4gICAgY29uc3QgUG9wcGVyID0gUG9wdXA7XG4gICAgY29uc3QgcG9wcGVyT2JqID0gbmV3IFBvcHBlcigpO1xuICAgIGNvbnN0IGNvbW1tZW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcEJ0bicpO1xuICAgIGNvbW1tZW50QnRuLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwb3BwZXJPYmoub3Blbk1vZGFsKGJ0bi5pZC5zdWJzdHJpbmcoMykpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRQcmV2aW91cyA9IGFzeW5jICh1cmwpID0+IHtcbiAgICB0aGlzLmluZGV4IC09IDE7XG4gICAgaWYgKHRoaXMuaW5kZXggPT09IDApIHtcbiAgICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlvdXMnKTtcbiAgICAgIHByZXYuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBmZWN0ZWREYXRhID0gYXdhaXQgZmV0Y2godXJsICsgdGhpcy5pbmRleCk7XG4gICAgY29uc3QgakZvcm1hdCA9IGF3YWl0IGZlY3RlZERhdGEuanNvbigpO1xuICAgIGNvbnN0IGR5bmFtaWNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtaG9sZGVyJyk7XG4gICAgZHluYW1pY1NlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpICs9IDEpIHtcbiAgICAgIGR5bmFtaWNTZWN0aW9uLmlubmVySFRNTCArPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxpbWcgc3JjPSR7akZvcm1hdFtpXS5pbWFnZS5tZWRpdW19PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7akZvcm1hdFtpXS5uYW1lfTwvc3Bhbj48YnI+XG4gICAgICAgICAgPGEgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwibGlrZVwiIGhyZWY9XCIjXCI+PGkgaWQ9XCJpdGVtJHtqRm9ybWF0W2ldLmlkfVwiIGNsYXNzPVwiZmEgZmEtaGVhcnRcIj48L2k+PC9hPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRlclwiPjwvc3Bhbj48c3Bhbj4mZW1zcDsmZW1zcDsmZW1zcDsmZW1zcDsmZW1zcDs8L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBvcEJ0blwiIGlkPVwiYnRuJHtqRm9ybWF0W2ldLmlkfVwiPkNvbW1lbnQ8L2J1dHRvbj48YnI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH1cbiAgICB0aGlzLmFkZExpa2VFdmVudExpc3RlbmVyKGpGb3JtYXQsIDApO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUxpa2VDb3VudGVyKGpGb3JtYXQsIDApO1xuXG4gICAgY29uc3QgUG9wcGVyID0gUG9wdXA7XG4gICAgY29uc3QgcG9wcGVyT2JqID0gbmV3IFBvcHBlcigpO1xuICAgIGNvbnN0IGNvbW1tZW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcEJ0bicpO1xuICAgIGNvbW1tZW50QnRuLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwb3BwZXJPYmoub3Blbk1vZGFsKGJ0bi5pZC5zdWJzdHJpbmcoMykpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXROZXh0ID0gYXN5bmMgKHVybCkgPT4ge1xuICAgIHRoaXMuaW5kZXggKz0gMTtcbiAgICBpZiAodGhpcy5pbmRleCAhPT0gMCkge1xuICAgICAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aW91cycpO1xuICAgICAgcHJldi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBmZWN0ZWREYXRhID0gYXdhaXQgZmV0Y2godXJsICsgdGhpcy5pbmRleCk7XG4gICAgY29uc3QgakZvcm1hdCA9IGF3YWl0IGZlY3RlZERhdGEuanNvbigpO1xuICAgIGNvbnN0IGR5bmFtaWNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtaG9sZGVyJyk7XG4gICAgZHluYW1pY1NlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSArPSAxKSB7XG4gICAgICBkeW5hbWljU2VjdGlvbi5pbm5lckhUTUwgKz0gYFxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8aW1nIHNyYz0ke2pGb3JtYXRbaV0uaW1hZ2UubWVkaXVtfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj4ke2pGb3JtYXRbaV0ubmFtZX08L3NwYW4+PGJyPlxuICAgICAgICAgIDxhIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImxpa2VcIiBocmVmPVwiI1wiPjxpIGlkPVwiaXRlbSR7akZvcm1hdFtpXS5pZH1cIiBjbGFzcz1cImZhIGZhLWhlYXJ0XCI+PC9pPjwvYT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvdW50ZXJcIj48L3NwYW4+PHNwYW4+JmVtc3A7JmVtc3A7JmVtc3A7JmVtc3A7JmVtc3A7PC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwb3BCdG5cIiBpZD1cImJ0biR7akZvcm1hdFtpXS5pZH1cIj5Db21tZW50PC9idXR0b24+PGJyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG4gICAgdGhpcy5hZGRMaWtlRXZlbnRMaXN0ZW5lcihqRm9ybWF0LCAwKTtcbiAgICB0aGlzLmluaXRpYWxpemVMaWtlQ291bnRlcihqRm9ybWF0LCAwKTtcblxuICAgIGNvbnN0IFBvcHBlciA9IFBvcHVwO1xuICAgIGNvbnN0IHBvcHBlck9iaiA9IG5ldyBQb3BwZXIoKTtcbiAgICBjb25zdCBjb21tbWVudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3BCdG4nKTtcbiAgICBjb21tbWVudEJ0bi5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcG9wcGVyT2JqLm9wZW5Nb2RhbChidG4uaWQuc3Vic3RyaW5nKDMpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkTGlrZUV2ZW50TGlzdGVuZXIgPSBhc3luYyAoakZvcm1hdG9sZCwgYm9vbCkgPT4ge1xuICAgIGNvbnN0IFBvc3RlciA9IFBPU1Q7XG4gICAgY29uc3QgcG9zdGVyT2JqID0gbmV3IFBvc3RlcigpO1xuICAgIGNvbnN0IGxpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZScpO1xuICAgIGNvbnN0IGxpa2VBcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaWtlKTtcbiAgICBsaWtlQXJyLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XG4gICAgICBsaWtlW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7IGl0ZW1faWQ6IGAke2UudGFyZ2V0LmlkfWAgfTtcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHBvc3Rlck9iai5wb3N0TGlrZSgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvTmY4bUV0S1JoWk1TZXlTVDdhdHgvbGlrZXMnLCBwYXlsb2FkKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgaiA9IDA7XG4gICAgICAgIGxldCBvbGQgPSAwO1xuICAgICAgICBpZiAoYm9vbCkge1xuICAgICAgICAgIG9sZCA9IGpGb3JtYXRvbGRbal0uc2hvdy5pZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbGQgPSBqRm9ybWF0b2xkW2pdLmlkO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChvbGQgIT09IE51bWJlcihlLnRhcmdldC5pZC5zdWJzdHJpbmcoNCkpKSB7XG4gICAgICAgICAgaiArPSAxO1xuICAgICAgICAgIGlmIChib29sKSB7XG4gICAgICAgICAgICBvbGQgPSBqRm9ybWF0b2xkW2pdLnNob3cuaWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9sZCA9IGpGb3JtYXRvbGRbal0uaWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlTGlrZUNvdW50ZXIoaik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpemVMaWtlQ291bnRlciA9IGFzeW5jIChqRm9ybWF0b2xkLCBib29sKSA9PiB7XG4gICAgY29uc3QgZmVjdGVkRGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9OZjhtRXRLUmhaTVNleVNUN2F0eC9saWtlcycpO1xuICAgIGNvbnN0IGpGb3JtYXQgPSBhd2FpdCBmZWN0ZWREYXRhLmpzb24oKTtcbiAgICBjb25zdCBsaWtlQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3VudGVyJyk7XG4gICAgbGV0IGxlbiA9IDA7XG4gICAgbGV0IG9sZCA9IDA7XG4gICAgaWYgKGJvb2wpIHtcbiAgICAgIGxlbiA9IGpGb3JtYXRvbGQubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZW4gPSAyNDtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqRm9ybWF0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaiArPSAxKSB7XG4gICAgICAgIGlmIChib29sKSB7XG4gICAgICAgICAgb2xkID0gakZvcm1hdG9sZFtqXS5zaG93LmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9sZCA9IGpGb3JtYXRvbGRbal0uaWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGpGb3JtYXRbaV0uaXRlbV9pZCA9PT0gYGl0ZW0ke29sZH1gKSB7XG4gICAgICAgICAgbGlrZUNvdW50ZXJbal0uaW5uZXJIVE1MID0gakZvcm1hdFtpXS5saWtlcztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUxpa2VDb3VudGVyID0gKGl0ZW1OdW1iZXIpID0+IHtcbiAgICBjb25zdCBsaWtlQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3VudGVyJyk7XG4gICAgY29uc3QgbGlrZUNvdW50ID0gbGlrZUNvdW50ZXJbaXRlbU51bWJlcl0uaW5uZXJIVE1MO1xuICAgIGlmIChsaWtlQ291bnQgPT09ICcnKSB7XG4gICAgICBsaWtlQ291bnRlcltpdGVtTnVtYmVyXS5pbm5lckhUTUwgPSAnMSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpa2VDb3VudGVyW2l0ZW1OdW1iZXJdLmlubmVySFRNTCA9IE51bWJlcihsaWtlQ291bnRlcltpdGVtTnVtYmVyXS5pbm5lckhUTUwpICsgMTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1FTlUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlMaW5rcycpO1xuICAgIGlmIChsaW5rcy5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICBsaW5rcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5rcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy5zZWN0aW9uTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgdGhpcy5zZWN0aW9uTW9kYWwuaWQgPSAnbW9kYWwnO1xuICAgIHRoaXMuc2VjdGlvbk1vZGFsLmNsYXNzTmFtZSA9ICdtb2RhbCc7XG4gIH1cblxuICAgIGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzZWN0aW9uTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICAgIHNlY3Rpb25Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgc2VjdGlvbk1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICB9XG5cbiAgICBvcGVuTW9kYWwgPSBhc3luYyAoaWQpID0+IHtcbiAgICAgIGNvbnN0IGZlY3RlZERhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfWApO1xuICAgICAgY29uc3QgakZvcm1hdCA9IGF3YWl0IGZlY3RlZERhdGEuanNvbigpO1xuXG4gICAgICBjb25zdCBkZXRhaWwgPSBuZXcgQXJyYXkoMTApO1xuICAgICAgaWYgKGpGb3JtYXQuaW1hZ2UgPT09IG51bGwpIHtcbiAgICAgICAgZGV0YWlsWzBdID0gJ04vQSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXRhaWxbMF0gPSBqRm9ybWF0LmltYWdlLm1lZGl1bTtcbiAgICAgIH1cbiAgICAgIGlmIChqRm9ybWF0Lm5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgZGV0YWlsWzFdID0gJ04vQSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXRhaWxbMV0gPSBqRm9ybWF0Lm5hbWU7XG4gICAgICB9XG4gICAgICBpZiAoakZvcm1hdC50eXBlID09PSBudWxsKSB7XG4gICAgICAgIGRldGFpbFsyXSA9ICdOL0EnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGV0YWlsWzJdID0gakZvcm1hdC50eXBlO1xuICAgICAgfVxuICAgICAgaWYgKGpGb3JtYXQubGFuZ3VhZ2UgPT09IG51bGwpIHtcbiAgICAgICAgZGV0YWlsWzNdID0gJ04vQSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXRhaWxbM10gPSBqRm9ybWF0Lmxhbmd1YWdlO1xuICAgICAgfVxuICAgICAgaWYgKGpGb3JtYXQuc3RhdHVzID09PSBudWxsKSB7XG4gICAgICAgIGRldGFpbFs0XSA9ICdOL0EnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGV0YWlsWzRdID0gakZvcm1hdC5zdGF0dXM7XG4gICAgICB9XG4gICAgICBpZiAoakZvcm1hdC5uZXR3b3JrID09PSBudWxsKSB7XG4gICAgICAgIGRldGFpbFs1XSA9ICdOL0EnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGV0YWlsWzVdID0gakZvcm1hdC5uZXR3b3JrLm5hbWU7XG4gICAgICB9XG4gICAgICBpZiAoakZvcm1hdC5uZXR3b3JrID09PSBudWxsKSB7XG4gICAgICAgIGRldGFpbFs2XSA9ICdOL0EnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGV0YWlsWzZdID0gakZvcm1hdC5uZXR3b3JrLmNvdW50cnkuY29kZTtcbiAgICAgIH1cbiAgICAgIGlmIChqRm9ybWF0LnJhdGluZyA9PT0gbnVsbCkge1xuICAgICAgICBkZXRhaWxbN10gPSAnTi9BJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRldGFpbFs3XSA9IGpGb3JtYXQucmF0aW5nLmF2ZXJhZ2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VjdGlvbk1vZGFsLmlubmVySFRNTCArPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPiZ0aW1lczs8L2J1dHRvbj4gXG4gICAgICA8L2Rpdj4gXG4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlciBkLWZsZXggZ2FwLTVcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwibW9kYWxJbWdcIiBzcmM9XCIke2RldGFpbFswXX1cIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT4ke2RldGFpbFsxXX08L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+PGI+VHlwZTwvYj46ICR7ZGV0YWlsWzJdfTwvcD5cbiAgICAgICAgICAgICAgPHA+PGI+TGFuZ3VhZ2U8L2I+OiAke2RldGFpbFszXX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPjxiPlN0YXR1czwvYj46ICR7ZGV0YWlsWzRdfTwvcD5cbiAgICAgICAgICAgICAgPHA+PGI+TmV0d29yazwvYj46ICR7ZGV0YWlsWzVdfSAoJHtkZXRhaWxbNl19KTwvcD5cbiAgICAgICAgICAgICAgPHA+PGI+UmF0aW5nPC9iPjogJHtkZXRhaWxbN119PC9wPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgdGhpcy5zZWN0aW9uTW9kYWwuaW5uZXJIVE1MICs9ICc8cD48Yj5HZW5yZXM8L2I+Oic7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpGb3JtYXQuZ2VucmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuc2VjdGlvbk1vZGFsLmlubmVySFRNTCArPSBgJHtqRm9ybWF0LmdlbnJlc1tpXX0sIGA7XG4gICAgICB9XG4gICAgICB0aGlzLnNlY3Rpb25Nb2RhbC5pbm5lckhUTUwgKz0gYDxwPjxiPlN1bW1hcnk8L2I+OiAke2pGb3JtYXQuc3VtbWFyeX08L3A+YDtcbiAgICAgIHRoaXMuZ2V0Q29tbWVudHModGhpcy5zZWN0aW9uTW9kYWwsIGlkKTtcbiAgICAgIHRoaXMuc2VjdGlvbk1vZGFsLmlubmVySFRNTCArPSBgIDxoMj5BZGQgYSBjb21tZW50PC9oMj5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8aW5wdXQgc2l6ZT1cIjUwXCIgaWQ9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIj48YnI+PGJyPlxuICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjVcIiBjb2xzPVwiNDBcIiBpZD1cImNvbXRcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIj48L3RleHRhcmVhPjxicj48YnI+XG4gICAgICAgIDxidXR0b24gaWQ9XCIke2lkfVwiIGNsYXNzPVwiY29tYnRuXCIgdHlwZT1cImJ1dHRvblwiPkNvbW1lbnQ8L2J1dHRvbj48YnI+PGJyPlxuICAgICAgPC9mb3JtPlxuICAgICAgYDtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNlY3Rpb25Nb2RhbCk7XG4gICAgICB0aGlzLnNlY3Rpb25Nb2RhbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMuc2VjdGlvbk1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB0aGlzLnNlY3Rpb25Nb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmF5JztcbiAgICAgIHRoaXMuc2VjdGlvbk1vZGFsLnN0eWxlLndpZHRoID0gJzgwdncnO1xuICAgICAgdGhpcy5zZWN0aW9uTW9kYWwuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuXG4gICAgICBpZiAodGhpcy5pbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLnNlY3Rpb25Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29tYnRuJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICAgIGl0ZW1faWQ6IGBpdGVtJHtlLnRhcmdldC5pZH1gLFxuICAgICAgICAgICAgICB1c2VybmFtZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JykudmFsdWUsXG4gICAgICAgICAgICAgIGNvbW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb210JykudmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZmV0Y2goXG4gICAgICAgICAgICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9OZjhtRXRLUmhaTVNleVNUN2F0eC9jb21tZW50cycsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDb21tZW50cyhpZCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0JykudmFsdWUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb210JykudmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VjdGlvbk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbG9zZScpKSB7XG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdGhpcy5zZWN0aW9uTW9kYWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pbmRleCArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldENvbW1lbnRzID0gYXN5bmMgKGVsZW1lbnQsIGlkKSA9PiB7XG4gICAgICBjb25zdCBmZWN0ZWREYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL05mOG1FdEtSaFpNU2V5U1Q3YXR4L2NvbW1lbnRzP2l0ZW1faWQ9aXRlbSR7aWR9YCk7XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgaWYgKCFmZWN0ZWREYXRhLm9rKSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGAgPGgyIGNsYXNzPVwiY29tbWVudHMtaGVhZGVyXCI+Q29tbWVudHMgKCR7Y291bnR9KTwvaDI+YDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBzdGF0dXMgY29kZSAke2ZlY3RlZERhdGEuc3RhdHVzfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgakZvcm1hdCA9IGF3YWl0IGZlY3RlZERhdGEuanNvbigpO1xuICAgICAgICBpZiAoakZvcm1hdC5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvdW50ID0gakZvcm1hdC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gYCA8aDIgY2xhc3M9XCJjb21tZW50cy1oZWFkZXJcIiA+Q29tbWVudHMgKCR7Y291bnR9KTwvaDI+YDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqRm9ybWF0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gYCBcbiAgICAgICAgICA8cD4ke2pGb3JtYXRbaV0uY3JlYXRpb25fZGF0ZX0gJHtqRm9ybWF0W2ldLnVzZXJuYW1lfTogJHtqRm9ybWF0W2ldLmNvbW1lbnR9PC9wPlxuICAgICAgICAgIGA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDb21tZW50cyA9IGFzeW5jIChpZCwgdXNlciwgY29tbWVudCkgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWhlYWRlcicpO1xuICAgICAgdXBkYXRlLnRleHRDb250ZW50ID0gYENvbW1lbnRzICgke051bWJlcih1cGRhdGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKDEwKS5yZXBsYWNlKCcpJywgJycpKSArIDF9KWA7XG4gICAgICBjb25zdCBmZWN0ZWREYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL05mOG1FdEtSaFpNU2V5U1Q3YXR4L2NvbW1lbnRzP2l0ZW1faWQ9aXRlbSR7aWR9YCk7XG4gICAgICBjb25zdCBqRm9ybWF0ID0gYXdhaXQgZmVjdGVkRGF0YS5qc29uKCk7XG4gICAgICBsZXQgZGF0ZSA9ICcyMDIyLTA5LTEwJztcbiAgICAgIGlmIChqRm9ybWF0Lmxlbmd0aCAtIDEgPj0gMCkge1xuICAgICAgICBkYXRlID0gakZvcm1hdFtqRm9ybWF0Lmxlbmd0aCAtIDFdLmNyZWF0aW9uX2RhdGU7XG4gICAgICB9XG4gICAgICB0aGlzLnNlY3Rpb25Nb2RhbC5pbm5lckhUTUwgKz0gYCBcbiAgICAgIDxwPiR7ZGF0ZX0gJHt1c2VyfTogJHtjb21tZW50fSA8L3A+XG4gICAgICBgO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQT1NUIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gIH1cblxuICBwb3N0TGlrZSA9IGFzeW5jICh1cmwsIHBheWxvYWQpID0+IHtcbiAgICBmZXRjaChcbiAgICAgIHVybCxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmFsbC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci10aHJlZSBhLFxcclxcbi5mb290ZXItZm91ciBhIHtcXHJcXG4gIGNvbG9yOiAjM2M5YmE1O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWZvdXIgYSB7XFxyXFxuICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1uYXYgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLXRocmVlIGE6aG92ZXIsXFxyXFxuLmZvb3Rlci1mb3VyIGE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtbmF2IGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICMzYzliYTU7XFxyXFxufVxcclxcblxcclxcbi5zZXBhcmF0b3Ige1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxyXFxuICBib3JkZXItcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1idG4ge1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlci1sZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjOTQ4YjtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1iYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjOTQ4YjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWJhcnMsXFxyXFxuLm1lbnUtYmFyIHNwYW4ge1xcclxcbiAgY29sb3I6ICNmYmZhZjk7XFxyXFxufVxcclxcblxcclxcbi5mYS1iYXJzOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjY2FjYWNhO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlMaW5rcyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4jbXlMaW5rcyBhIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmNGI0NztcXHJcXG59XFxyXFxuXFxyXFxuI215TGlua3MgYTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZjNmO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MmEzMTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1ob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjM2M5YmE1O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IGF1dG87XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYXJ0IHtcXHJcXG4gIHdpZHRoOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZXMge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwYW4tb25lLFxcclxcbi5zcGFuLXR3byB7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gIGNvbG9yOiAjZmJmYWY5O1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwYW4tdHdvIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1mb290ZXIsXFxyXFxuLnJpZ2h0LWZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyYTMxO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxJbWcge1xcclxcbiAgd2lkdGg6IDQwdnc7XFxyXFxuICBoZWlnaHQ6IDQwdmg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMCAzdnc7XFxyXFxuICBtYXJnaW46IDEwdmggMTB2dztcXHJcXG4gIGhlaWdodDogODB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gIGdhcDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb3NlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHZ3O1xcclxcbiAgd2lkdGg6IDM1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyYTMxO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtM3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5sb2dvIHtcXHJcXG4gICAgb3JkZXI6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWNjb3VudCB7XFxyXFxuICAgIG9yZGVyOiAzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtYmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWFyY2gtYmFyIHtcXHJcXG4gICAgd2lkdGg6IDUwdnc7XFxyXFxuICAgIG9yZGVyOiAyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI215TGlua3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBvcmRlcjogNDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjOTQ4YjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNteUxpbmtzIGEge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzk0OGI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZC1ob2xkZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud3JhcHBlciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWxJbWcge1xcclxcbiAgICB3aWR0aDogMjB2dztcXHJcXG4gICAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsUUFBUTtJQUNSLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJhbGwtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItdGhyZWUgYSxcXHJcXG4uZm9vdGVyLWZvdXIgYSB7XFxyXFxuICBjb2xvcjogIzNjOWJhNTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1mb3VyIGEge1xcclxcbiAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtbmF2IGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci10aHJlZSBhOmhvdmVyLFxcclxcbi5mb290ZXItZm91ciBhOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLW5hdiBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjM2M5YmE1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VwYXJhdG9yIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIHtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDYwdnc7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYnRuIHtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XFxyXFxuICBib3JkZXItbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzk0OGI7XFxyXFxuICB3aWR0aDogMzB2dztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzk0OGI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS1iYXJzLFxcclxcbi5tZW51LWJhciBzcGFuIHtcXHJcXG4gIGNvbG9yOiAjZmJmYWY5O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtYmFyczpob3ZlciB7XFxyXFxuICBjb2xvcjogI2NhY2FjYTtcXHJcXG59XFxyXFxuXFxyXFxuI215TGlua3Mge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuI215TGlua3MgYSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjRiNDc7XFxyXFxufVxcclxcblxcclxcbiNteUxpbmtzIGE6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmM2YzZjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzJhMzE7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaG9sZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzNjOWJhNTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiBhdXRvO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbiNoZWFydCB7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2VzIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zcGFuLW9uZSxcXHJcXG4uc3Bhbi10d28ge1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICBjb2xvcjogI2ZiZmFmOTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5zcGFuLXR3byB7XFxyXFxuICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtZm9vdGVyLFxcclxcbi5yaWdodC1mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MmEzMTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsSW1nIHtcXHJcXG4gIHdpZHRoOiA0MHZ3O1xcclxcbiAgaGVpZ2h0OiA0MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDAgM3Z3O1xcclxcbiAgbWFyZ2luOiAxMHZoIDEwdnc7XFxyXFxuICBoZWlnaHQ6IDgwdmg7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBnYXA6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbiNjbG9zZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzB2dztcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MmEzMTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogLTN2dztcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubG9nbyB7XFxyXFxuICAgIG9yZGVyOiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFjY291bnQge1xcclxcbiAgICBvcmRlcjogMztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWJhciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VhcmNoLWJhciB7XFxyXFxuICAgIHdpZHRoOiA1MHZ3O1xcclxcbiAgICBvcmRlcjogMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNteUxpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgb3JkZXI6IDQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzk0OGI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbXlMaW5rcyBhIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M5NDhiO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmQtaG9sZGVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLndyYXBwZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsSW1nIHtcXHJcXG4gICAgd2lkdGg6IDIwdnc7XFxyXFxuICAgIGhlaWdodDogNDB2aDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFR3aXR0ZXIgZnJvbSAnLi4vaW1nL3R3aXR0ZXIucG5nJztcbmltcG9ydCBMb2dvIGZyb20gJy4uL2ltZy9EZWJieS1CZW5qYW1pbi1Mb2dvLnBuZyc7XG5pbXBvcnQgRmFjZWJvb2sgZnJvbSAnLi4vaW1nL2ZhY2Vib29rLmpwZyc7XG5pbXBvcnQgSW5zdGFncmFtIGZyb20gJy4uL2ltZy9pbnN0YWdyYW0ucG5nJztcbmltcG9ydCBSZWRkaXQgZnJvbSAnLi4vaW1nL3JlZGRpdC5wbmcnO1xuaW1wb3J0IEdFVCBmcm9tICcuLi9tb2R1bGVzL2dldC5qcyc7XG5pbXBvcnQgTUVOVSBmcm9tICcuLi9tb2R1bGVzL21lbnUuanMnO1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ0bicpO1xuY29uc3QgYmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1iYXJzJyk7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IEdldHRlciA9IEdFVDtcbiAgY29uc3QgZ2V0dGVyT2JqID0gbmV3IEdldHRlcigpO1xuXG4gIGdldHRlck9iai5nZXRIb21lKCdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzP3BhZ2U9MCcpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBnZXR0ZXJPYmouZ2V0U2VhcmNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPSR7aW5wdXQudmFsdWV9YCk7XG4gIH0pO1xuXG4gIGNvbnN0IE1lbnUgPSBNRU5VO1xuICBjb25zdCBtZW51T2JqID0gbmV3IE1lbnUoKTtcbiAgYmFycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtZW51T2JqLnRvZ2dsZU1lbnUoKTtcbiAgfSk7XG5cbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aW91cycpO1xuICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdldHRlck9iai5nZXRQcmV2aW91cygnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cz9wYWdlPScpO1xuICB9KTtcblxuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQnKTtcbiAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBnZXR0ZXJPYmouZ2V0TmV4dCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cz9wYWdlPScpO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
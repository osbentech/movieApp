import POST from '../modules/post.js';
export default class GET {
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
    const Poster = POST;
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

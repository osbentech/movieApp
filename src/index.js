import './style.css';
import Twitter from '../img/twitter.png';
import Logo from '../img/logo.png';
import Facebook from '../img/facebook.jpg';
import Instagram from '../img/instagram.png';
import Reddit from '../img/reddit.png';
// import POST from '../modules/post.js';
import GET from '../modules/get.js';

const btn = document.querySelector('.search-btn');
const input = document.querySelector('.search');
const bod = document.querySelector('body');

window.addEventListener('DOMContentLoaded', () => {
  const Getter = GET;
  const getterObj = new Getter();
  btn.addEventListener('click', (pressed) => {
    console.log('working');
    getterObj.get(`https://api.tvmaze.com/search/shows?q=${input.value}`);
  });
});

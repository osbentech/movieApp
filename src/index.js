import './style.css';
import Twitter from '../img/twitter.png';
import Logo from '../img/logo.png';
import Facebook from '../img/facebook.jpg';
import Instagram from '../img/instagram.png';
import Reddit from '../img/reddit.png';
// import POST from '../modules/post.js';
import GET from '../modules/get.js';
import MENU from '../modules/menu.js';

const btn = document.querySelector('.search-btn');
const bars = document.querySelector('.fa-bars');
const input = document.querySelector('.search');
const bod = document.querySelector('body');

window.addEventListener('DOMContentLoaded', () => {
  const Getter = GET;
  const getterObj = new Getter();

  getterObj.getHome();

  btn.addEventListener('click', () => {
    getterObj.getSearch(`https://api.tvmaze.com/search/shows?q=${input.value}`);
  });

  const Menu = MENU;
  const menuObj = new Menu();
  bars.addEventListener('click', () => {
    menuObj.toggleMenu();
  });
});

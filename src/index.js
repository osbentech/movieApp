import './style.css';
import Twitter from '../img/twitter.png';
import Logo from '../img/Debby-Benjamin-Logo.png';
import Facebook from '../img/facebook.jpg';
import Instagram from '../img/instagram.png';
import Reddit from '../img/reddit.png';
// import POST from '../modules/post.js';
import GET from '../modules/get.js';
import MENU from '../modules/menu.js';

const btn = document.querySelector('.search-btn');
const bars = document.querySelector('.fa-bars');
const input = document.querySelector('.search');

window.addEventListener('DOMContentLoaded', () => {
  const Getter = GET;
  const getterObj = new Getter();

  getterObj.getHome(`https://api.tvmaze.com/shows?page=0`);

  btn.addEventListener('click', () => {
    getterObj.getSearch(`https://api.tvmaze.com/search/shows?q=${input.value}`);
  });

  const Menu = MENU;
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

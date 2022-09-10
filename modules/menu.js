export default class MENU {
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

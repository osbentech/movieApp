export default class GET {
  constructor() {
    this.index = 0;
  }

  get = async (url) =>{
    const fectedData = await fetch(url);
    const jFormat = await fectedData.json();
    const footer = document.querySelector('footer');
    const overall = document.querySelector('.overall-container');

    console.log(jFormat);
    const dynamic_section = document.createElement('section');
    dynamic_section.id = 'card-holder';
    dynamic_section.className = 'card-holder';
    for (let i = 0; i < jFormat.length; i += 1) {
      dynamic_section.innerHTML += `
      <img src=${jFormat[i].show.image.medium}>
      <span>${jFormat[i].show.name}</span>
      <i id="heart${i}" class="fa fa-heart"></i>
      <button id="btn${i}">Comment</button>
      `;
      overall.insertBefore(dynamic_section, footer)
    }
  }
}

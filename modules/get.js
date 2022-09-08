export default class GET {
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

    const dynamic_paragraph = document.createElement('p');
    dynamic_paragraph.id = 'information';
    dynamic_paragraph.className = 'information';

    const dynamic_pages = document.createElement('div');
    dynamic_pages.id = 'pages';
    dynamic_pages.className = 'pages';

    // for (let i = 0; i < jFormat.length; i += 1) {
    //   dynamic_section.innerHTML += `
    //   <img src=${jFormat[i].show.image.medium}>
    //   <span>${jFormat[i].show.name}</span>
    //   <i id="heart${i}" class="fa fa-heart"></i>
    //   <button id="btn${i}">Comment</button>
    //   `;
    // }
    
    overall.insertBefore(dynamic_paragraph, footer);
    overall.insertBefore(dynamic_section, footer);
    overall.insertBefore(dynamic_pages, footer);
  }

  getSearch = async (url) => {
    const fectedData = await fetch(url);
    const jFormat = await fectedData.json();
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
          <i id="heart${i}" class="fa fa-heart"></i>
          <button id="cardBtn btn${i}">Comment</button><br>
        </div>
      </div>
      `;
    }
    pages.innerHTML += `
      <button class="previous">
        <i class='fa fa-arrow-left'></i>
        Previous
      </button>
      <button class="next">
        Next
        <i class='fa fa-arrow-right'></i>
      </button>
    `;
  }
}

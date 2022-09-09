export default class Popup {
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
      <div class="d-flex gap-5">
        <div>
          <img class="modalImg" src="${detail[0]}"/>
        </div>
        <div>
          <button id="close">&times;</button>
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
    }

}
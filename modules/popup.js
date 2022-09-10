export default class Popup {
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
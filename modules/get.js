export default class GET {
  constructor() {
    this.index = 0;
  }

  get = async (url) =>{
    const fectedData = await fetch(url);
    const jFormat = await fectedData.json();
    console.log(jFormat);
    for (let i = 0; i < jFormat.length; i += 1) {
      console.log(jFormat[i].show.name);
    }
  }
}

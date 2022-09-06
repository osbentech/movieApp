POSTER = async (url, payload) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((param) => param.json()).then((saved) => saved);
}
export default POSTER;
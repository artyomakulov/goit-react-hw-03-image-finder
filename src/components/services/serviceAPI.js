
function getData (nextName) {
  return fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=25323007-3d609b483f4fcb74c4bf2a361&image_type=photo&orientation=horizontal&per_page=12`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Нет такой картинки`));
  } )
}

const api = {
  getData,
};
export default api;

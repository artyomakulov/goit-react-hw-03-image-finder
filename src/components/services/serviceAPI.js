import axios from 'axios';


// https://pixabay.com/api/?q=cat&page=1&key=25323007-3d609b483f4fcb74c4bf2a361&image_type=photo&orientation=horizontal&per_page=12

// export default function getImages(imageName, page) {
//     return axios
//     .get(`https://pixabay.com/api/?q=${imageName}&page=${page}&key=25323007-3d609b483f4fcb74c4bf2a361&image_type=photo&orientation=horizontal&per_page=12`)
//     .then((responce) => {
//         if (responce.data.hits.length > 0) {
//             return responce.data.hits;
//         }
//         return Promise.reject(new Error(`there is no picture`));
//     })
// }


// function fetchApi(imageName, numberPage) {
//     return fetch(`https://pixabay.com/api/?q=${imageName}&page=${numberPage}&key=25323007-3d609b483f4fcb74c4bf2a361&image_type=photo&orientation=horizontal&per_page=12`)
// }
        
// export default  fetchApi 

// axios.defaults.baseURL = 'https://pixabay.com/api/?q=dog&page=1&key=25323007-3d609b483f4fcb74c4bf2a361&image_type=photo&orientation=horizontal&per_page=12';

// export const getData = async() => {
//     const response = await axios.get();
//     return response.data.hits;
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const KEY = "25323007-3d609b483f4fcb74c4bf2a361";
const BASE_URL = "https://pixabay.com/api/";
const PARAMETRS = "image_type=photo&orientation=horizontal&per_page=12";
export function getData(materials, page) {
  return axios
    .get(`${BASE_URL}?q=${materials}&page=${page}&key=${KEY}&${PARAMETRS}`)
    .then((response) => {
      if (response.data.hits.length > 0) {
        return response.data.hits;
      }
      return Promise.reject(new Error(`Нет такой картинки`));
    });
}



import axios from 'axios';


const KEY = "25323007-3d609b483f4fcb74c4bf2a361"
const BASE_URL = 'https://pixabay.com/api/'
const PARAMS = 'image_type=photo&orientation=horizontal&per_page=12'

// https://pixabay.com/api/?q=cat&page=1&key=25323007-3d609b483f4fcb74c4bf2a361&image_type=photo&orientation=horizontal&per_page=12

export default function fetchApi(imageName, page) {
    return axios.get(`${BASE_URL}?q=${imageName}&page=${page}&key=${KEY}&${PARAMS}`).then((responce) => {
        if (responce.data.hits.length > 0) {
            return responce.data.hits;
        }
        return Promise.reject(new Error(`there is no picture`));
    })
}
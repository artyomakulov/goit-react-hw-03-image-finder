import React from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import ImageGallery from 'components/ItemGallery/ItemGallery';
// import * as API from './components/services/serviceAPI';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';



// function getImages(searchName, page) {
//   return axios
//   .get(`https://pixabay.com/api/?q=${searchName}&page=${page}&key=25323007-3d609b483f4fcb74c4bf2a361&image_type=photo&orientation=horizontal&per_page=12`)
//   .then((responce) => {
//       if (responce.data.hits.length > 0) {
//           return responce.data.hits;
//       }
//       return Promise.reject(new Error(`there is no picture`));
//   })
// }

// const ImageGalleryItem = ({data}) => (
//   <ul>
//     {data.map(({id, webformatURL, tags}) => (
//       <li key={id}>
//       <img src={webformatURL} alt={tags} width='200px' height='200px'/>
//       </li>
//     ))}
//   </ul>
// )



export class App extends React.Component {
 state = {
  searchName: '',
  // materials: [],
  isLoading: false,
  error: null,
  page: 1,
 }

//   async componentDidMount() {
//     this.setState({loading: true})
//     fetch('https://pixabay.com/api/?q=cat&page=1&key=25323007-3d609b483f4fcb74c4bf2a361&image_type=photo&orientation=horizontal&per_page=12').then(res => res.json()).then(imageName => this.setState({imageName})).finally(() => this.setState({loading: false}))
//   }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// может нужно

// async componentDidMount() {
//   const materials = await API.getImages();
//   this.setState({materials, isLoading: false,});
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// async componentDidMount() {
//   this.setState({ isLoading: true });
//   const response = await axios.getImages(this.state.searchName);
//   this.setState({ data: response.data.hits, isLoading: false, });
// }

// fetchImages = await API.getData(this.state.searchName, this.state.page)
// .then((res) => {this.setState({materials:res, name: this.state.searchName,})})

// getImagesFromApi = (searchName) => {
//   API.getData().then(searchName => {
//     this.setState({materials: [...this.state.materials, ...searchName]})
//   })
// }



// async componentDidMount() {
//   const materials = await API.getData(this.state.searchName, this.state.page);
//   this.setState({materials})
// }


// handleSearchFormSubmit = searchName => {
//   this.setState({searchName})
//   console.log(searchName)
// }





// componentDidMount() {
//   this.setState({isLoading: true})
//   fetch('https://pixabay.com/api/?q=dog&page=1&key=25323007-3d609b483f4fcb74c4bf2a361&image_type=photo&orientation=horizontal&per_page=12')
//   .then(res => res.json())
//   .then(searchName => this.setState({searchName}))
//   .finally(() => this.setState({isLoading: false}))
// }

handleSearchFormSubmit = searchName => {
  this.setState({searchName})
  console.log(searchName)
}




 render() {
  // const {materials} = this.state
  return (
   
    <div>
        {/* {this.state.isLoading && <h1>загружаем</h1>}
        {this.state.searchName && <div>тут будет картинка когдато</div> } */}
        <Searchbar onSubmit={this.handleSearchFormSubmit}/>
        <ImageGalleryItem searchName={this.state.searchName}/>
    </div>

  )
 }
}


import React from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

// import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends React.Component {
 state = {
  searchName: {},
  // loading: false
 }

//   async componentDidMount() {
//     this.setState({loading: true})
//     fetch('https://pixabay.com/api/?q=cat&page=1&key=25323007-3d609b483f4fcb74c4bf2a361&image_type=photo&orientation=horizontal&per_page=12').then(res => res.json()).then(imageName => this.setState({imageName})).finally(() => this.setState({loading: false}))
//   }

handleSearchFormSubmit = searchName => {
  this.setState({searchName})
  console.log(searchName)
}


 render() {
  return (
    <div>
        <Searchbar onSubmit={this.handleSearchFormSubmit}/>
        {/* {this.state.loading && <h1>загружаем...</h1>}
        {this.state.searchName && <div>{this.state.searchName.webformatURL}</div>} */}
        {/* <ImageGalleryItem searchName={this.state.searchName}/> */}
    </div>

  )
 }
}


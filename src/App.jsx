import React from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from 'App.module.css';
import LoadMore from 'components/Button/Button';


export class App extends React.Component {
 state = {
  searchName: '',
  // materials: [],
  isLoading: false,
  error: null,
  page: 1,
 }


handleSearchFormSubmit = searchName => {
  this.setState({searchName})
  console.log(searchName)
}




 render() {
  return (
   
    <div className={css.App}>
        <Searchbar onSubmit={this.handleSearchFormSubmit}/>
        <ImageGalleryItem searchName={this.state.searchName}/>
        <LoadMore/>
    </div>

  )
 }
}


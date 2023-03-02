import React from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends React.Component {
 render() {
  return (
    <div>
        <Searchbar/>
        <ImageGallery/>
    </div>

  )
 }
}
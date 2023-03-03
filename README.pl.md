ItemGallery


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images, onClick }) => (
  <ul className="ImageGallery">
    {images.map((image) => (
      <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
    ))}
  </ul>
);

export default ImageGallery;
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




ItemGalleryItem

1st
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


export default class ImageGalleryItem extends React.Component {
 state = {
    error: null,
    isLoaded: false,
    items: []
 }

 componentDidMount() {
    fetch('https://pixabay.com/api/?q=cat&page=1&key=25323007-3d609b483f4fcb74c4bf2a361&image_type=photo&orientation=horizontal&per_page=12')
    .then(res => res.json())
    .then((result) => {
        this.setState({
            isLoaded:true,
            items: result.hits
        });
    },
    (error) => {
        this.setState({
            isLoaded:true,
            error
        });
    }
    )
 }



 render() {
    const {error, isLoaded, items} = this.state;
    if (error) {
        return <p>error {error.message}</p>
    } else if (!isLoaded) {
        return <p>loading..</p>
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id} class="gallery-item">
                        <img 
                        width='200px'
                        height='200px'
                        src={item.webformatURL} 
                        alt="" />
                    </li>
                ))}
            </ul>
        )
    }
 }

}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
2nd
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


import React from 'react';

import { fetchApi } from '../services/serviceAPI';


export default class ImageGalleryItem extends React.Component {
    state = {
        imageName: null,
        error: null,
        status: 'idle',
        page: 0,
        data: []
    }

    componentDidMount(prevProps, prevState) {
        const prevName = prevProps.searchName;
        const nextName = this.props.searchName;
        if (prevName !== nextName) {
            this.setState({status: 'pending', imageName: null})

           fetchApi(nextName, 1)
            .then(imageName => this.setState({imageName, status: 'resolved'}))
            .catch(error => this.setState({error, status: 'rejected'}))
        }
    }



    render() {
        const {status} = this.state
    
        if (status === 'idle') {
            return <div>введите имя поиска</div>
        }

        if (status === 'pending') {
            return <div>загружаем</div>
        }

        if (status === 'rejected') {
            return <div>сломалось</div>
        }

        if (status === 'resolved') {
            return (
                <ul>
                    {data.map(data => (
                        <li key={data.id} class="gallery-item">
                        <img 
                        height='200px'
                        width='200px'
                        src={item.webformatURL}
                        alt="" 
                        />
                        </li>
                    ))}
                </ul>
            
            )
        }


    }
}

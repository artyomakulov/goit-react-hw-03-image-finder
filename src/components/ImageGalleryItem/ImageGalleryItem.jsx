import { Component } from "react";
import ImageGallery from "components/ItemGallery/ImageGallery";
import { MagnifyingGlass } from 'react-loader-spinner';
import serviceAPI from "components/services/serviceAPI";
import css from './ImageGalleryItem.module.css'



export default class ImageGalleryItem extends Component {
  
  state = {
    hits: null,
    error: null,
    status: 'idle'
  }
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName
    if (prevName !== nextName) {
      console.log("изменилось имя поиска")
      this.setState({status: 'pending'})

      serviceAPI
      .getData(nextName)
      .then(hits => this.setState({ ...hits, status: 'resolved' }))
      .catch(error => this.setState({ error, status: 'rejected' }))
      
    }
  }


  render() {
    const {hits, error, status} = this.state;

    if (status === 'idle') {
      return <div>введите имя</div>
    }
    if (status === 'pending') {
      return <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor = '#c0efff'
      color = '#e15b64'
    />
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>
    }
    if (status === 'resolved') {
      return <div>
      <ImageGallery>
      {hits.map(({...hits}) => {
        return (
          <li className={css.ImageGalleryItem} key={hits.id}>
          <img className={css.ImageGalleryItem_image} width='250px' height='250px' src={hits.webformatURL} alt={hits.tags}/>
          </li>
        )
      })}
      </ImageGallery>  
      </div>
    
  
    }
  }
}
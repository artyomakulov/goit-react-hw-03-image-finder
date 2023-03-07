// export const ImageGalleryItem = ({ items }) => {
//     return (
//         <ul>
//     {items.map((item) => (
//       <li key={item.id}>
//       <img width='200px' height='200px' src={item.webformatURL} alt={item.tags}/>
//       </li>
//     ))}
//   </ul>
//     )
// }





import { Component } from "react";


export default class ImageGalleryItem extends Component {
  
  state = {
    hits: [],

    error: null,
    status: 'idle'
  }
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName
    if (prevName !== nextName) {
      console.log("изменилось имя поиска")
      this.setState({status: 'pending'})
      fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=25323007-3d609b483f4fcb74c4bf2a361&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`Нет такой картинки`));
      } )
      .then(hits => this.setState({ ...hits, status: 'resolved' }))
      .catch(error => this.setState({ error, status: 'rejected' }))
      
    }
  }


  render() {
    const {hits, error, status} = this.state;

    if (status === 'idle') {
      return <div>введите имя</div>
    }
    if (status === 'prending') {
      return <div>загружаем</div>
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>
    }
    if (status === 'resolved') {
      return <div>
      <ul>
      {hits.map(({...hits}) => {
        return (
          <li key={hits.id}>
          <img width='250px' height='250px' src={hits.webformatURL} alt={hits.tags}/>
          </li>
        )
      })}
      </ul>  
      </div>
    
  
    }
  }
}


// {hits.map(({ id, webformatURL, tags }) => {
//   return (
   
//       <li key={id}>
//   <img width='250px' height='250px' src={webformatURL} alt={tags}/>
//   </li>
  
//   )
// })}
// </ul>
// </div>
// )
// }
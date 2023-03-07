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
    isLoading: false,
    error: null,
  }
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName
    if (prevName !== nextName) {
      console.log("изменилось имя поиска")
      this.setState({isLoading: true})
      fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=25323007-3d609b483f4fcb74c4bf2a361&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`Нет такой картинки`));
      } )
      .then(hits => this.setState({ ...hits }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }))
    }
  }


  render() {
    const {hits, isLoading, error} = this.state
    return (
    <div>
     <ul>
     {error && <h1>{error.message}</h1>}
    {isLoading && <div>загружаем</div>}
    {hits.map(({ id, webformatURL, tags }) => {
      return (
       
          <li key={id}>
      <img width='250px' height='250px' src={webformatURL} alt={tags}/>
      </li>
      
      )
    })}
    </ul>
    </div>
    )
  }
}
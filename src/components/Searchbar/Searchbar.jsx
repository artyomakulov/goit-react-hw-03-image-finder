import React from 'react';


export default class Searchbar extends React.Component {
    state = {
      searchName: '',
    }

    handleSearchName = event => {
      this.setState({searchName: event.currentTarget.value.toLowerCase()});
    }

    handleSubmit = event => {
      event.preventDefault();
      if (this.state.searchName.trim() === '') {
        alert('Введите объект поиска')
        return;
      }

      this.props.onSubmit(this.state.searchName);
      this.setState({searchName: ''})
    }


    render() {
            return (
              <header class="searchbar">
              <form class="form" onSubmit={this.handleSubmit}>
                <button type="submit" class="button">
                  <span class="button-label">Search</span>
                </button>
            
                <input
                  class="input"
                  type="text"
                  name="searchName"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                  value={this.state.searchName}
                  onChange={this.handleSearchName}
                />
              </form>
            </header>)
    }
}

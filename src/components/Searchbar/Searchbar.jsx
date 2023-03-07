import React from 'react';
import css from './Searchbar.module.css'

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
              <header className={css.Searchbar}>
              <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={css.SearchForm_button}>
                  <span className={css.SearchForm_button_label}>Search</span>
                </button>
            
                <input
                  className={css.SearchForm_input}
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

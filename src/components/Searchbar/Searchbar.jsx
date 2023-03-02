import React from 'react';


export default class Searchbar extends React.Component {
    state = {
        input: '',
    }


    render() {
            return (
        <header class="searchbar">
  <form class="form">
    <button type="submit" class="button" onClick={() => console.log()}>
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
    }
}

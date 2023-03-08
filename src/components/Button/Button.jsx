import css from "./Button.module.css";
import { Component } from "react";
export default class LoadMore extends Component {
  

  render() {
    return (
      <>
        <button onClick={this.loadMore} className={css.Button} type="submit">
          Load more
        </button>
      </>
    );
  }
}
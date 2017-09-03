import React, { Component } from "react";
import PropTypes from "prop-types";
import { get, update } from "./BooksAPI";
import { updateShelf } from "./helpers/UpdateShelf";

class Book extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired
  };

  updateBook(value) {
    const id = this.props.id;
    this.props.updateShelf(id, value);
  }

  handleClick(value) {
    this.updateBook(value);
  }

  render() {
    const { shelf } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.url})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={e => this.handleClick(e.target.value)}
              defaultValue={shelf}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">
          {this.props.title}
        </div>
        <div className="book-authors">
          {this.props.authors}
        </div>
      </div>
    );
  }
}

export default Book;

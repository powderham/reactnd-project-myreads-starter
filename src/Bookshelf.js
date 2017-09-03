import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array,
    title: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired,
  };

  render() {
    const { title, books = [] } = this.props;
    return (
      <div className="bookshelf">
        {console.log(books)}
        <h2 className="bookshelf-title">
          {title}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book =>
              <li key={book.id}>
                <Book
                  id={book.id}
                  title={book.title}
                  authors={book.authors}
                  url={book.imageLinks.thumbnail}
                  shelf={book.shelf}
                  updateShelf={this.props.updateShelf}
                />
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;

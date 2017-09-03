import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import { getAll } from "./BooksAPI";
import { updateBook } from "./helpers/UpdateShelf";

class List extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    getAll().then(response => {
      this.setState({ books: response });
    });
    this.updateShelf = this.updateShelf.bind(this);
  }

  updateShelf(id, value) {
    updateBook(id, value);
    var books = this.state.books;
    for (var book in books) {
      if (books[book].id === id) {
        books[book].shelf = value;
      }
    }
    this.setState({ books: books });
  }

  render() {
    const { books } = this.state;
    const currentlyReading = books.filter(
      book => book.shelf === "currentlyReading"
    );
    const wantToRead = books.filter(book => book.shelf === "wantToRead");
    const read = books.filter(book => book.shelf === "read");
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Bookshelf
              title="Currently reading"
              books={currentlyReading}
              updateShelf={this.updateShelf}
            />
            <Bookshelf
              title="Want to read"
              books={wantToRead}
              updateShelf={this.updateShelf}
            />
            <Bookshelf
              title="Read"
              books={read}
              updateShelf={this.updateShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" />
        </div>
      </div>
    );
  }
}

export default List;

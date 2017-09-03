import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import { updateBook } from "./helpers/UpdateShelf";

class Search extends Component {
  state = {
    books: [],
    search: "",
    searchResult: []
  };
  updateSearch(search) {
    this.searchBooks(search);
    this.setState({
      search: search
    });
  }

  searchBooks(term) {
    BooksAPI.search(term, 10).then(searchResult => {
      this.setState({ searchResult });
    });
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }
  render() {
    const { search, books, searchResult = [] } = this.state;
    const returnedBooks = searchResult.length > 0;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.search}
              onChange={event => {
                this.updateSearch(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {returnedBooks
              ? searchResult.map(book =>
                  <li key={book.id}>
                    {console.log(book)}
                    <Book
                      id={book.id}
                      title={book.title}
                      authors={book.authors}
                      url={book.imageLinks.thumbnail}
                      shelf={book.shelf}
                      updateShelf={updateBook}
                    />
                  </li>
                )
              : "No books"}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;

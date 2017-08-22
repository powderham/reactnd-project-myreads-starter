import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book'
import escapeRegExp from 'escape-string-regexp';

class Search extends Component {
  state = {
    books: [],
    //Question for Jens/Lorjenso: why does this need to be set to avoid warning about input element switching from controlled to uncontrolled?
    search: '',
    searchResult: []
  }
  updateSearch(search) {
    this.setState({
      search: search
    })
    //@TODO fix case where thumbnail is undefined (assuming no books in array)
    this.searchBooks(search)
  }
  searchBooks(term) {
    BooksAPI.search(term,10).then((searchResult) => {
      this.setState({searchResult})
    })
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  render() {
    const { search, books, searchResult } = this.state

    let showingBooks
    if (search) {
      // const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = searchResult
    } else {
      showingBooks = books
    }
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
          to="/"
          className="close-search">
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
            onChange={(event) => {
              this.updateSearch(event.target.value)
              }}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              //@TODO guard against showingBooks being empty
              <li key={book.id}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  url={book.imageLinks.thumbnail}
                />
              </li>
            ))
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;

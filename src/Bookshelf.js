import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array
  }

  render() {
    console.log(this.props)
    const {title, books = []} = this.props;
    return(
      <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {books.map((book) => {
                <li key={book.id}>
                  <Book
                  title={book.title}
                  authors={book.authors}
                  url={book.imageLinks.thumbnail}
                  />
                </li>
              })}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf;

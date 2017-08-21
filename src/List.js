import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

class List extends Component {
  render() {
    return(
      <div>
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <Bookshelf
              title="Currently reading"
            />
            <Bookshelf
              title="Want to read"
            />
            <Bookshelf
              title="Read"
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
          </Link>
        </div>
      </div>
    )
  }
}

export default List;

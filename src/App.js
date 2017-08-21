import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import Book from './Book'
import Search from './Search'
import List from './List'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <Search/>
        )}
        />
        <Route exact path="/" render={() => (
          <div className="list-books">
            <List/>
          </div>
        )}/>
      </div>
  )}
}

export default BooksApp

import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.fetchBooks()
    }

    fetchBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    moveBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then(this.fetchBooks())
    }

    render() {
        return (
            <div>
                <Route exact path='/' render={() => (
                    <Bookshelf
                        books={this.state.books}
                        moveBook={this.moveBook}
                    />
                )}/>
                <Route path='/search' render={() => (
                    <Search
                        books={this.state.books}
                        moveBook={this.moveBook}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp

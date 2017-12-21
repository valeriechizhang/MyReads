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
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    moveBook = (book, shelf) => {
        var temp = this.state.books
        if (this.state.books.filter(b => b.id === book.id).length === 0) {
            book.shelf = shelf
            temp.push(book)
        } else {
            for (var t of temp) {
                if (t.id === book.id) {
                    t.shelf = shelf
                }
            }
        }
        this.setState({ books: temp })
        BooksAPI.update(book, shelf)
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

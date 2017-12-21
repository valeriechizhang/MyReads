import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookgrid from './Bookgrid'

function filterBooks(books, filter) {
    return books.filter(book => book.shelf === filter)
}

class Bookshelf extends Component {
    static propTypes = {
        moveBook: PropTypes.func.isRequired
    }

    render() {
        const { books, moveBook } = this.props

        return(
            <div className='list-books'>
                <div className='list-books-title'>
                    <h1>MyReads</h1>
                    <Link to='/search'>Search</Link>
                </div>
                <div className='list-books-content'>
                    <div>
                        <div className='bookshelf'>
                            <h2 className='bookshelf-title'>Currently Reading</h2>
                            <div className='bookshelf-books'>
                                <Bookgrid books={filterBooks(books, 'currentlyReading')} moveBook={moveBook}/>
                            </div>
                        </div>
                        <div className='bookshelf'>
                            <h2 className='bookshelf-title'>Want to Read</h2>
                            <div className='bookshelf-books'>
                                <Bookgrid books={filterBooks(books, 'wantToRead')} moveBook={moveBook}/>
                            </div>
                        </div>
                        <div className='bookshelf'>
                            <h2 className='bookshelf-title'>Read</h2>
                            <div className='bookshelf-books'>
                                <Bookgrid books={filterBooks(books, 'read')} moveBook={moveBook}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bookshelf
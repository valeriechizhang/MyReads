import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class Bookgrid extends Component {

    static propTypes = {
        moveBook: PropTypes.func.isRequired
    }

    render() {
        const { books, moveBook } = this.props

        return (
            <ol className='books-grid'>
                {(books != null && books.length > 0) && (books.map((book) => (
                    <li key={book.id}>
                        <Book book={book} moveBook={moveBook}/>
                </li>
                )))}
            </ol>
        )
    }
}

export default Bookgrid
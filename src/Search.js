import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import Bookgrid from './Bookgrid'


class Search extends Component {
    static propTypes = {
        moveBook: PropTypes.func.isRequired
    }

    state = {
        query: '',
        results: []
    }

    updateQuery = (query) => {
        if (query.length > 0) {
            this.setState({ query: query.trim() })
            BooksAPI.search(query).then((books) => {
                this.setState({ results:books })
            })
        }
    }

    render() {
        const { books, moveBook } = this.props
        const { query, results } = this.state

        var combined = []
        for (var result of results) {
            var intersect = books.filter(book => book.id === result.id)
            if (intersect == null || intersect.length === 0) {
                combined.push(result)
            } else {
                combined.push(intersect[0])
            }
        }

        combined.sort(sortBy('title'))

        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                    <Link className='close-search' to='/'>Close</Link>
                    <div className='search-books-input-wrapper'>
                        <input type='text' placeholder='Search by title or author'
                        value={query} onChange={(event)=>this.updateQuery(event.target.value)}/>
                    </div>
                </div>
                <div className='search-books-results'>
                    <Bookgrid books={combined} moveBook={moveBook}/>
                </div>
            </div>
        )
    }
}

export default Search


// src/components/BookList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('/api/books');
                setBooks(response.data);
            } catch (error) {
                setError('Failed to fetch books. Please try again.');
            }
        };

        fetchBooks();
    }, []);

    if (error) {
        return <p className="error">{error}</p>;
    }

    return (
        <div className="book-list">
            <h2>Book List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>{book.title}</Link>
                        <p><strong>Author:</strong> {book.author}</p>
                        <p><strong>ISBN:</strong> {book.isbn}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;

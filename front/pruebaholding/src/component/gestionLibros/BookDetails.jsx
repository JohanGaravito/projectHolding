// src/components/BookDetails.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams(); // Obtén el ID del libro desde los parámetros de la URL
    const [book, setBook] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await axios.get(`/api/books/${id}`);
                setBook(response.data);
            } catch (error) {
                setError('Failed to fetch book details. Please try again.');
            }
        };

        fetchBookDetails();
    }, [id]);

    if (error) {
        return <p className="error">{error}</p>;
    }

    if (!book) {
        return <p>Loading...</p>;
    }

    return (
        <div className="book-details">
            <h2>Book Details</h2>
            <div className="details">
                <p><strong>Title:</strong> {book.title}</p>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>ISBN:</strong> {book.isbn}</p>
                <p><strong>Published Date:</strong> {new Date(book.published_date).toLocaleDateString()}</p>
                <p><strong>Stock:</strong> {book.stock}</p>
            </div>
        </div>
    );
};

export default BookDetails;

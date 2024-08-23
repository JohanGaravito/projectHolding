// src/components/AddBookForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const AddBookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [stock, setStock] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('/api/books', {
                title,
                author,
                isbn,
                published_date: publishedDate,
                stock,
            });

            setSuccess('Book added successfully!');
            // Clear form fields
            setTitle('');
            setAuthor('');
            setIsbn('');
            setPublishedDate('');
            setStock('');
        } catch (error) {
            setError('Failed to add the book. Please try again.');
        }
    };

    return (
        <div className="add-book-form">
            <h2>Add New Book</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="isbn">ISBN</label>
                    <input
                        type="text"
                        id="isbn"
                        value={isbn}
                        onChange={(e) => setIsbn(e.target.value)}
                        required
                        maxLength="13"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="publishedDate">Published Date</label>
                    <input
                        type="date"
                        id="publishedDate"
                        value={publishedDate}
                        onChange={(e) => setPublishedDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="stock">Stock</label>
                    <input
                        type="number"
                        id="stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                        min="0"
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBookForm;

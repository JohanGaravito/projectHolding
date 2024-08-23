// src/components/EditBookForm.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditBookForm = () => {
    const { id } = useParams(); // Obtener el ID del libro desde los parámetros de la URL
    const navigate = useNavigate(); // Para redirigir después de la actualización
    const [book, setBook] = useState({
        title: '',
        author: '',
        isbn: '',
        published_date: '',
        stock: 0,
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`/api/books/${id}`);
                setBook(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch book details. Please try again.');
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`/api/books/${id}`, book);
            navigate(`/books/${id}`); // Redirige a la página de detalles del libro después de la actualización
        } catch (error) {
            setError('Failed to update book. Please try again.');
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    return (
        <div className="edit-book-form">
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={book.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={book.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="isbn">ISBN:</label>
                    <input
                        type="text"
                        id="isbn"
                        name="isbn"
                        value={book.isbn}
                        onChange={handleChange}
                        required
                        maxLength="13"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="published_date">Published Date:</label>
                    <input
                        type="date"
                        id="published_date"
                        name="published_date"
                        value={book.published_date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="stock">Stock:</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={book.stock}
                        onChange={handleChange}
                        required
                        min="0"
                    />
                </div>
                <button type="submit">Update Book</button>
            </form>
        </div>
    );
};

export default EditBookForm;

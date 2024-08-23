import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PopularBooks = () => {
    const [popularBooks, setPopularBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Función para obtener los libros más populares
        const fetchPopularBooks = async () => {
            try {
                const response = await axios.get('/api/popular-books');
                setPopularBooks(response.data);
            } catch (err) {
                setError(err.message || 'Error al obtener los libros más populares');
            } finally {
                setLoading(false);
            }
        };

        fetchPopularBooks();
    }, []);

    if (loading) return <p>Cargando libros populares...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="popular-books-container">
            <h2>Libros Más Populares</h2>
            {popularBooks.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>ISBN</th>
                            <th>Fecha de Publicación</th>
                            <th>Préstamos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {popularBooks.map((book, index) => (
                            <tr key={index}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.isbn}</td>
                                <td>{new Date(book.published_date).toLocaleDateString()}</td>
                                <td>{book.total_loans}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No hay libros populares en este momento.</p>
            )}
        </div>
    );
};

export default PopularBooks;

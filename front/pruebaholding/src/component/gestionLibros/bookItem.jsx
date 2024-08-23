import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookItemManager = () => {
    const [bookItems, setBookItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Cargar la lista de items de libros desde la API cuando el componente se monte
        const fetchBookItems = async () => {
            try {
                const response = await axios.get('/api/book-items');
                setBookItems(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchBookItems();
    }, []);

    const handleAddBookItem = () => {
        // Lógica para agregar un nuevo item de libro
        console.log('Agregar ítem de libro');
    };

    const handleEditBookItem = (bookItemId) => {
        // Lógica para editar un ítem de libro existente
        console.log(`Editar ítem de libro con ID: ${bookItemId}`);
    };

    const handleDeleteBookItem = (bookItemId) => {
        // Lógica para eliminar un ítem de libro
        console.log(`Eliminar ítem de libro con ID: ${bookItemId}`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Gestión de Ítems de Libros</h1>
            <button onClick={handleAddBookItem}>Agregar Ítem de Libro</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID de Libro</th>
                        <th>Código</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {bookItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.book_id}</td>
                            <td>{item.code}</td>
                            <td>{item.status}</td>
                            <td>
                                <button onClick={() => handleEditBookItem(item.id)}>Editar</button>
                                <button onClick={() => handleDeleteBookItem(item.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookItemManager;

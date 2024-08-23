import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ActiveUsers = () => {
    const [activeUsers, setActiveUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Función para obtener los usuarios activos
        const fetchActiveUsers = async () => {
            try {
                const response = await axios.get('/api/active-users');
                setActiveUsers(response.data);
            } catch (err) {
                setError(err.message || 'Error al obtener los usuarios activos');
            } finally {
                setLoading(false);
            }
        };

        fetchActiveUsers();
    }, []);

    if (loading) return <p>Cargando usuarios activos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="active-users-container">
            <h2>Usuarios Activos</h2>
            {activeUsers.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo Electrónico</th>
                            <th>Fecha de Creación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activeUsers.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{new Date(user.created_at).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No hay usuarios activos en este momento.</p>
            )}
        </div>
    );
};

export default ActiveUsers;

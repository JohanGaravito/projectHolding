import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
    const history = useHistory();

    const handleLogout = async () => {
        try {
            // Realizar solicitud para cerrar sesión en el backend
            await axios.post('/api/logout', {}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            // Eliminar el token del almacenamiento local
            localStorage.removeItem('authToken');

            // Redirigir al usuario a la página de inicio de sesión o a otra página
            history.push('/login');
        } catch (err) {
            console.error('Error al cerrar sesión:', err);
        }
    };

    return (
        <button onClick={handleLogout}>
            Cerrar sesión
        </button>
    );
};

export default LogoutButton;

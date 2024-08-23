// src/components/EditUserForm.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const EditUserForm = () => {
    const { id } = useParams(); // Obtiene el ID del usuario desde los parámetros de la URL
    const history = useHistory(); // Permite redirigir al usuario después de la actualización
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // Fetch user data for the given ID
        axios.get(`users/${id}`)
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/users/${id}`, user)
            .then(response => {
                setSuccess(true);
                setTimeout(() => {
                    history.push('/users'); // Redirige al listado de usuarios después de la actualización
                }, 2000);
            })
            .catch(error => {
                setError(error.message);
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="edit-user-form">
            <h2>Edit User</h2>
            {success && <div className="success-message">User updated successfully!</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default EditUserForm;

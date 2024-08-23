// src/components/AddUserForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddUserForm = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/users', user)
            .then(response => {
                setSuccess(true);
                setTimeout(() => {
                    history.push('/users'); // Redirige al listado de usuarios después de agregar
                }, 2000);
            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <div className="add-user-form">
            <h2>Add User</h2>
            {success && <div className="success-message">User added successfully!</div>}
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
                <button type="submit">Add User</button>
            </form>
            {error && <div className="error-message">Error: {error}</div>}
        </div>
    );
};

export default AddUserForm;

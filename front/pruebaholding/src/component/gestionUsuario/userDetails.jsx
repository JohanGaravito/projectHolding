// src/components/UserDetails.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams(); // Get the user ID from the URL
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch user details when component mounts
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`/api/users/${id}`);
                setUser(response.data);
            } catch (error) {
                setError('Failed to fetch user details.');
            }
        };

        fetchUserDetails();
    }, [id]);

    if (error) return <p className="error">{error}</p>;
    if (!user) return <p>Loading...</p>;

    return (
        <div className="user-details">
            <h2>User Details</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Created At:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
            <p><strong>Updated At:</strong> {new Date(user.updated_at).toLocaleDateString()}</p>
        </div>
    );
};

export default UserDetails;

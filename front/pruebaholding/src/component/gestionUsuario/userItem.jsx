// src/components/UserItem.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
    return (
        <div className="user-item">
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Created At:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
            <p><strong>Updated At:</strong> {new Date(user.updated_at).toLocaleDateString()}</p>
            <Link to={`/users/${user.id}`} className="btn btn-primary">View Details</Link>
        </div>
    );
};

export default UserItem;

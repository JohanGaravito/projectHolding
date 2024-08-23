// src/components/UserList.jsx

import React, { useEffect, useState } from 'react';
//import UserItem from './UserItem';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch users from API
        axios.get('/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // return (
    //     <div className="user-list">
    //         <h2>Users</h2>
    //         {users.length > 0 ? (
    //             users.map(user => (
    //                 <UserItem key={user.id} user={user} />
    //             ))
    //         ) : (
    //             <p>No users found.</p>
    //         )}
    //     </div>
    // );
};

export default UserList;

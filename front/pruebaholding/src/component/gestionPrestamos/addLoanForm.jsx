// src/components/AddLoanForm.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddLoanForm = () => {
    const [users, setUsers] = useState([]);
    const [books, setBooks] = useState([]);
    const [loan, setLoan] = useState({
        user_id: '',
        book_id: '',
        loan_date: '',
        return_date: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [usersResponse, booksResponse] = await Promise.all([
                    axios.get('/api/users'),
                    axios.get('/api/books')
                ]);

                setUsers(usersResponse.data);
                setBooks(booksResponse.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch users or books. Please try again.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoan((prevLoan) => ({
            ...prevLoan,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/loans', loan);
            navigate('/loans'); // Redirige a la página de préstamos después de agregar uno
        } catch (error) {
            setError('Failed to add loan. Please try again.');
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    return (
        <div className="add-loan-form">
            <h2>Add New Loan</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="user_id">User:</label>
                    <select
                        id="user_id"
                        name="user_id"
                        value={loan.user_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a user</option>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="book_id">Book:</label>
                    <select
                        id="book_id"
                        name="book_id"
                        value={loan.book_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a book</option>
                        {books.map(book => (
                            <option key={book.id} value={book.id}>
                                {book.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="loan_date">Loan Date:</label>
                    <input
                        type="date"
                        id="loan_date"
                        name="loan_date"
                        value={loan.loan_date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="return_date">Return Date:</label>
                    <input
                        type="date"
                        id="return_date"
                        name="return_date"
                        value={loan.return_date}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Add Loan</button>
            </form>
        </div>
    );
};

export default AddLoanForm;

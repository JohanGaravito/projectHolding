// src/components/ReturnLoanForm.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReturnLoanForm = () => {
    const [formData, setFormData] = useState({
        loan_id: '',
        return_date: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        // Fetch loans to populate the dropdown
        const fetchLoans = async () => {
            try {
                const response = await axios.get('/api/loans');
                setLoans(response.data);
            } catch (error) {
                setError('Failed to load loans.');
            }
        };

        fetchLoans();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/loans/return', formData);
            setSuccess('Loan successfully returned!');
            setFormData({
                loan_id: '',
                return_date: ''
            });
        } catch (error) {
            setError('Failed to return loan. Please try again.');
        }
    };

    return (
        <div className="return-loan-form">
            <h2>Return Loan</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="loan_id">Loan ID:</label>
                    <select
                        id="loan_id"
                        name="loan_id"
                        value={formData.loan_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a loan</option>
                        {loans.map((loan) => (
                            <option key={loan.id} value={loan.id}>
                                {loan.id} - {loan.book.title} ({loan.user.name})
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="return_date">Return Date:</label>
                    <input
                        type="date"
                        id="return_date"
                        name="return_date"
                        value={formData.return_date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Return Loan</button>
            </form>
        </div>
    );
};

export default ReturnLoanForm;

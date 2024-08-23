// src/components/LoanDetails.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LoanDetails = () => {
    const { id } = useParams(); // Obtiene el ID del préstamo de la URL
    const [loan, setLoan] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLoanDetails = async () => {
            try {
                const response = await axios.get(`/api/loans/${id}`);
                setLoan(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch loan details. Please try again.');
                setLoading(false);
            }
        };

        fetchLoanDetails();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    return (
        <div className="loan-details">
            <h2>Loan Details</h2>
            {loan ? (
                <div>
                    <p><strong>Book ID:</strong> {loan.book_id}</p>
                    <p><strong>User ID:</strong> {loan.user_id}</p>
                    <p><strong>Loan Date:</strong> {loan.loan_date}</p>
                    <p><strong>Return Date:</strong> {loan.return_date}</p>
                    <p><strong>Status:</strong> {loan.status}</p>
                </div>
            ) : (
                <p>No details available for this loan.</p>
            )}
        </div>
    );
};

export default LoanDetails;

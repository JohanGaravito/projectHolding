// src/components/LoanItem.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const LoanItem = ({ loan }) => {
    return (
        <div className="loan-item">
            <p><strong>Book ID:</strong> {loan.book_id}</p>
            <p><strong>User ID:</strong> {loan.user_id}</p>
            <p><strong>Loan Date:</strong> {loan.loan_date}</p>
            <p><strong>Return Date:</strong> {loan.return_date}</p>
            <p><strong>Status:</strong> {loan.status}</p>
            <Link to={`/loans/${loan.id}`} className="btn btn-primary">View Details</Link>
        </div>
    );
};

export default LoanItem;

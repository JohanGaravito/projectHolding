// src/components/LoansList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import LoanItem from './LoanItem'; // Asegúrate de que LoanItem esté en la misma carpeta o ajusta la ruta según corresponda

const LoansList = () => {
    const [loans, setLoans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLoans = async () => {
            try {
                const response = await axios.get('/api/loans');
                setLoans(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch loans. Please try again.');
                setLoading(false);
            }
        };

        fetchLoans();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    // return (
    //     <div className="loans-list">
    //         <h2>Loans List</h2>
    //         {loans.length > 0 ? (
    //             loans.map(loan => (
    //                 <LoanItem key={loan.id} loan={loan} />
    //             ))
    //         ) : (
    //             <p>No loans available.</p>
    //         )}
    //     </div>
    // );
};

export default LoansList;

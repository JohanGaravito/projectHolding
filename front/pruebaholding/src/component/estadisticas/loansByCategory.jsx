import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoansByCategory = () => {
    const [loansByCategory, setLoansByCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Función para obtener los préstamos por categoría
        const fetchLoansByCategory = async () => {
            try {
                const response = await axios.get('/api/loans-by-category');
                setLoansByCategory(response.data);
            } catch (err) {
                setError(err.message || 'Error al obtener los préstamos por categoría');
            } finally {
                setLoading(false);
            }
        };

        fetchLoansByCategory();
    }, []);

    if (loading) return <p>Cargando préstamos por categoría...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="loans-by-category-container">
            <h2>Préstamos por Categoría</h2>
            {loansByCategory.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Categoría</th>
                            <th>Título del Libro</th>
                            <th>Fecha de Préstamo</th>
                            <th>Fecha de Devolución</th>
                            <th>Usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loansByCategory.map((loan, index) => (
                            <tr key={index}>
                                <td>{loan.category}</td>
                                <td>{loan.book_title}</td>
                                <td>{new Date(loan.loan_date).toLocaleDateString()}</td>
                                <td>{loan.return_date ? new Date(loan.return_date).toLocaleDateString() : 'No Devuelto'}</td>
                                <td>{loan.user_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No hay préstamos por categoría en este momento.</p>
            )}
        </div>
    );
};

export default LoansByCategory;

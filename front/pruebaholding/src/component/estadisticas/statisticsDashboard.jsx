import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StaticsDashboard = () => {
    const [statistics, setStatistics] = useState({
        totalBooks: 0,
        totalUsers: 0,
        totalLoans: 0,
        totalCategories: 0,
        totalAuthors: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Función para obtener estadísticas
        const fetchStatistics = async () => {
            try {
                const response = await axios.get('/api/statistics');
                setStatistics(response.data);
            } catch (err) {
                setError(err.message || 'Error al obtener las estadísticas');
            } finally {
                setLoading(false);
            }
        };

        fetchStatistics();
    }, []);

    if (loading) return <p>Cargando estadísticas...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="statics-dashboard">
            <h2>Estadísticas del Dashboard</h2>
            <div className="statistics">
                <div className="statistic-item">
                    <h3>Total de Libros</h3>
                    <p>{statistics.totalBooks}</p>
                </div>
                <div className="statistic-item">
                    <h3>Total de Usuarios</h3>
                    <p>{statistics.totalUsers}</p>
                </div>
                <div className="statistic-item">
                    <h3>Total de Préstamos</h3>
                    <p>{statistics.totalLoans}</p>
                </div>
                <div className="statistic-item">
                    <h3>Total de Categorías</h3>
                    <p>{statistics.totalCategories}</p>
                </div>
                <div className="statistic-item">
                    <h3>Total de Autores</h3>
                    <p>{statistics.totalAuthors}</p>
                </div>
            </div>
        </div>
    );
};

export default StaticsDashboard;

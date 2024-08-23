import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('/api/login', { email, password });
            // Guardar el token en el almacenamiento local o en el estado global
            localStorage.setItem('authToken', response.data.token);

            // Llamar a la función onLogin si se pasa como prop
            if (onLogin) {
                onLogin(response.data.user);
            }
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error desconocido');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                </button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </form>
        </div>
    );
};

export default Login;

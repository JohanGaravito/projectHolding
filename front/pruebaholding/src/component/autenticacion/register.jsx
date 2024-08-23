import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [errors, setErrors] = useState({});
    const history = useHistory();

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
            // Enviar solicitud POST para registrar el nuevo usuario
            await axios.post('/api/register', formData);

            // Redirigir al usuario a la página de inicio de sesión después del registro exitoso
            history.push('/login');
        } catch (error) {
            // Manejar errores de validación o solicitud fallida
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            }
        }
    };

    return (
        <div className="register-container">
            <h2>Registrarse</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name[0]}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email[0]}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password[0]}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="password_confirmation">Confirmar contraseña</label>
                    <input
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        className={`form-control ${errors.password_confirmation ? 'is-invalid' : ''}`}
                    />
                    {errors.password_confirmation && <div className="invalid-feedback">{errors.password_confirmation[0]}</div>}
                </div>

                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;

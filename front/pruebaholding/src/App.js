import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css'; // Archivo de estilos globales si lo tienes

// Importa tus componentes
import StaticsDashboard from './components/StaticsDashboard';
import Login from './components/Login';
import LogoutButton from './components/LogoutButton';
import Register from './components/Register';
import ActiveUsers from './components/ActiveUsers';
import LoansByCategory from './components/LoansByCategory';
import PopularBooks from './components/PopularBooks';
import BookManagement from './components/BookManagement';

// Crea el componente App que configura las rutas
const App = () => {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/dashboard/statistics" component={StaticsDashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={LogoutButton} />
                    <Route path="/register" component={Register} />
                    <Route path="/active-users" component={ActiveUsers} />
                    <Route path="/loans-by-category" component={LoansByCategory} />
                    <Route path="/popular-books" component={PopularBooks} />
                    <Route path="/book-management" component={BookManagement} />
                    <Route path="/" exact component={BookManagement} /> {/* Ruta por defecto */}
                </Switch>
            </div>
        </Router>
    );
};

// Renderiza la aplicación
ReactDOM.render(<App />, document.getElementById('root'));

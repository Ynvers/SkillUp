import React from 'react';
import { Link } from 'react-router-dom'; // Correct import syntax
import '../../index.css';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/admin/login">Connexion Admin</Link></li>
                    <li><Link to="/admin/dashboard">Dashboard Admin</Link></li>
                    <li><Link to="/student/login">Connexion Étudiant</Link></li>
                    <li><Link to="/student/dashboard">Dashboard Étudiant</Link></li>
                    <li><Link to="/student/explore">Explorer</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Login;
import React from 'react';
import Dashboard from './Dashboard';

const NavBar = () => {
    return (
        <div>
            <ul>
                <li><a href="/dashboard">Dashboard</a></li>
                <li>Gestion de Usuarios</li>
                <li>Transacciones</li>
                <li>Tarjetas</li>
                <li>Blacklist</li>
            </ul>
        </div>
    )
}

export default NavBar;
import React from 'react';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <ul>
                <li className='list-style'><a href="/Dashboard">Dashboard</a></li>
                <li><a href="/GestionUsuarios">Gestion de Usuarios</a></li>
                <li><a href="/Transacciones">Transacciones</a></li>
                <li><a href="/Tarjetas">Tarjetas</a></li>
                <li><a href="/Blacklist">Blacklist/Whitelist</a></li>
                <li><a href="/GestionAlertas">Gestión de Alertas</a></li>
                <li><a href="Parametrizaciones">Parametrizaciones</a></li>
                <li><a href="Clientes">Clientes</a></li>
                <li><a href="ReportesOperativos">Reportes Operativos</a></li>
                <li><a href="ReportesAuditoria">Reportes de Auditoría</a></li>
                <li><a href="Configuracion">Configuración</a></li>
                <li><a href="">Acerca</a></li>
            </ul>
        </div>
    )
}

export default NavBar;
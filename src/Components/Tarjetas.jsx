import React from 'react';
import NavBar from './NavBar';
import Container from './Container';

const Tarjetas = () => {
    return (
        <div>
            <div>
                <img src={'../images/logo-pluspagos.png'} />
            </div>

            <div className='p-style-title'>
                <p>Tarjetas</p>
            </div>

            <div className='icon-user-style'>
                <p>Nombre Usuario</p>
            </div>
            <img className='img-user-style' src={'../images/user.png'} />
            <NavBar/>
            <Container/>
        </div>
    )
}

export default Tarjetas;
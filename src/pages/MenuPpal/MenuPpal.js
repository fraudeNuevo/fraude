import React, {useState} from "react";
import './MenuPpal.css';
import NavBar from "../../Components/NavBar";
import Container from "../../Components/Container";

const MenuPpal = () => {

    return (
            
            <div className="menu-container">
                <div>
                    <img src={'../images/logo-pluspagos.png'} />
                </div>
                <NavBar />
                <Container />
                <div>
                    <img className='img-style-container' src={'../images/logo-pluspagos.png'} />
            
                    <p className='p-style-container'>Bienvenido</p>
                </div>

            </div>
            
    )
}

export default MenuPpal

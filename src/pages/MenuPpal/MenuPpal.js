import React, {useState} from "react";
import './MenuPpal.css';
import NavBar from "../../Components/NavBar";

const MenuPpal = () => {

    return (
            
            <div className="menu-container">
                <div className="img-style">
                    <img src={'../images/logo-pluspagos.png'} />
                </div>
                <NavBar />
            </div>
            
    )
}

export default MenuPpal

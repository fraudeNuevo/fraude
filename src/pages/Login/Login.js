import React, {useState} from "react";
import './Login.css';
import Input from "../../Components/Input";

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(name, value) {
        if(name === 'Usuario') {
            setUser(value)
        } 
        else {
            setPassword(value)
        }
    }

    function handleSubmit() {
        let account = {user, password}
        if(account) {
        console.log('Account:', account)
        }
    }

    return (
        
            <div className="login-container">
                <div>
                    <img src={'../images/logo-pluspagos.png'} />
                </div>
                
                <Input 
                attribute={{
                    id: 'Usuario',
                    name: 'Usuario',
                    type: 'text',
                    placeholder: 'Usuario'
                }}
                handleChange={handleChange}
                />
                <Input 
                attribute={{
                    id: 'Contraseña',
                    name: 'Contraseña',
                    type: 'password',
                    placeholder: 'Contraseña'
                }}
                handleChange={handleChange}
                />
                
                <button onClick={handleSubmit} className="login-btn">
                    <a href="/menu">Ingresar</a>
                </button>
               
            </div>
            
    )
}

export default Login
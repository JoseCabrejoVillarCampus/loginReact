import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Formulary({ usuario, contraseña }) {
    const [username, setUsername] = useState(usuario);
    const [password, setPassword] = useState(contraseña);
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const usuario = document.querySelector('#usuario').value;
        const contraseña = document.querySelector('#contraseña').value;
        setUsername(usuario);
        setPassword(contraseña);
    
        try {
            const response = await fetch("http://127.43.34.121:5056/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    usuario: usuario,
                    contraseña: contraseña,
                }),
            });
    
            if (response.ok) {
                const data = await response.json(); 
                const authToken = data.token; 
                setToken(authToken);
                navigate("/home")
                
            } else {
                alert("Nombre o contraseña erroneos!!");
            }
        } catch (error) {
            console.error(error);
        }
    }
    

    return (
        <>
            <div>Iniciar Sesión</div>

            <input id="usuario" placeholder='Usuario' ></input>
            <br />
            <input id="contraseña" placeholder='Contraseña'></input>
            <br />
            <button onClick={handleSubmit}>Entrar</button>
            <br />
        </>
    )
}

import React, { useState } from 'react';
import axios from 'axios';

export default function Formulary({ usuario, contraseña }) {
    const [username, setUsername] = useState(usuario);
    const [password, setPassword] = useState(contraseña);

    const handleSubmit = async () => {
        const usuario = document.querySelector('#usuario').value;
        const contraseña = document.querySelector('#contraseña').value;
        setUsername(usuario);
        setPassword(contraseña);

        const response = await fetch("http://127.43.34.121:5056/login", {
            
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                usuario,
                contraseña,
            })
        });

        if (response.status === 200) {
            const authToken = response.data.token;
            setToken(authToken);
            alert("Logueado correctamente :)");
        } else {
            alert("Usuario o contraseña incorrectos!!");
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

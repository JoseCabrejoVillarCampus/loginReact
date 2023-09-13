import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Formulary({ usuario, contraseña }) {
    const [username, setUsername] = useState(usuario);
    const [password, setPassword] = useState(contraseña);
    const [token, setToken] = useState(null);

    const handleSubmit = async () => {
        const usuario = document.querySelector('#usuario').value;
        const contraseña = document.querySelector('#contraseña').value;
        setUsername(usuario);
        setPassword(contraseña);

        try {
            const response = await axios.post("http://127.43.34.121:5056/login", {
                username,
                password,
            });

            if (response.status === 200) {
                const authToken = response.data.token;
                setToken(authToken);
                alert("Logueado correctamente :)");
            } else {
                alert("Usuario o contraseña incorrectos!!");
            }
        } catch (error) {
            console.error(error);
        }
    }

    const hacerSolicitudAutenticada = async () => {
        try {
            const response = await axios.get("http://127.43.34.121:5056/ruta-autenticada", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                // Maneja la respuesta de la ruta autenticada aquí
                console.log("Acceso a la ruta autenticada:", response.data);
            } else {
                alert("Error al acceder a la ruta autenticada");
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setUsername('');
        setPassword('');
    }, []);

    return (
        <>
            <div>Iniciar Sesión</div>

            <input id="usuario" placeholder='Usuario'></input>
            <br />
            <input id="contraseña" placeholder='Contraseña'></input>
            <br />
            <button onClick={handleSubmit}>Entrar</button>
            <br />
            {token && (
                <button onClick={hacerSolicitudAutenticada}>Hacer Solicitud Autenticada</button>
            )}
        </>
    )
}

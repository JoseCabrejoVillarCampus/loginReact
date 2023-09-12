import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function Formulary({usuario, contraseña}) {
    const [username, setUsername] = useState(usuario);
    const [password, setPassword] = useState(contraseña);
    const [token, setToken] = useState(null);

    const handleSubmit = async()=> {
        const usuario = document.querySelector('#usuario').value
        const contraseña = document.querySelector('#contraseña').value
        setUsername(usuario);
        setPassword(contraseña);
    
        await axios.post("http://127.43.34.121:5056/login", {
            username,
            password,
        });
        

        if(res.status === 200) {
            const authToken = response.data.token;
            setToken(authToken);
            alert("Logueado correctamente :)")
        } else {
            alert("Usuario o contraseña incorrectos!!")
        }
    }

    const hacerSolicitudAutenticada = async () => {
        try {
            const response = await axios.get("http://127.43.34.121:5056/login", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <div>Iniciar Sesión</div>

        <input id="usuario" placeholder='Usuario'></input>
        <br/>
        <input id="contraseña" placeholder='Contraseña'></input>
        <br/>
        <button onClick={handleSubmit}>Entrar</button>
        </>
    )
    useEffect(() => {
        setUsername('');
        setPassword('');
    }, []);
}

import React, {useState, useEffect} from 'react'
import  PropTypes  from 'prop-types';

const url= "http://127.10.10.10:5011/login"


export default function Formulary({usuario, contraseña}) {
    const [username, setUsername] = useState(usuario);
    const [password, setPassword] = useState(contraseña);
    
    const handleSubmit = async()=> {
        const usuario = document.querySelector('#usuario').value
        const contraseña = document.querySelector('#contraseña').value
        setUsername(usuario);
        setPassword(contraseña);
        
        const res = await fetch("http://127.24.43.221:5076/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
            password,
            })
        });
        if(!res.ok) {
            alert("Usuario o contraseña incorrectos!!")
        } else {
            alert("Logueado correctamente :)")
        }
    }

    const register = async() =>{
        const user = document.querySelector("#usuarioR").value;
        const password = document.querySelector("#contraseñaR").value;
        setUsername(user);
        setPassword(password);

        const res = await fetch("http://127.24.43.221:5076/register", {
            method: "POST",
            headers: {
            "Content-Type": "applSication/json",
            },
        body: JSON.stringify({
            user,
            password,
            })
        });
        console.log("holaaaaaaaaaaaaaaaaaaaaaa");
        console.log("res",res);

        if(!res.ok) {
            alert("Error al realizar el registro!!")
            console.log(res);
        } else {
            alert("Registrado correctamente :D")
        }
    }

    return (
        <>
        <div>Registrarse</div>
            
        <input id="usuarioR" placeholder='Usuario'></input>
        <br/>
        <input id="contraseñaR" placeholder='Contraseña'></input>
        <br/>
        <button onClick={register}>Entrar2</button>

        <div>Iniciar Sesión</div>

        <input id="usuario" placeholder='Usuario'></input>
        <br/>
        <input id="contraseña" placeholder='Contraseña'></input>
        <br/>
        <button onClick={handleSubmit}>Entrar2</button>
        </>
    )
}
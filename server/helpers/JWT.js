import { SignJWT, jwtVerify } from "jose"
import {coneccion} from "../db/atlas.js";
import { ObjectId } from "mongodb";
import dotenv from 'dotenv';
import { token } from "morgan";
dotenv.config("../");

const conexionDB = await coneccion();

const crearToken = async (req, res, next) => {
    console.log(req.body);
    if (Object.keys(req.body).length === 0) return res.status(400).send({message: "Datos no enviados"});
    const result = await conexionDB.collection('usuarios').findOne({"nombre": req.body.usuario});
    console.log("result", result);
    if (!result) return res.status(401).send({message: "Usuario no encontrado"});
    
    const encoder = new TextEncoder();
    const id = result._id.toString();
    const jwtConstructor = await new SignJWT({ id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    
        req.data = {
            status: 200,
            token: jwtConstructor,
        };
        console.log("token", jwtConstructor);
        next();
};

const validarToken = async (req, token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        let res = await conexionDB.collection('usuarios').findOne(
            {
                _id:new ObjectId(jwtData.payload.id)
            }
        );
        let {_id, ...usuarios} = res;
        console.log("res",res);
        return usuarios;
    } catch (error) {
        return false;
    }
}
export {
    crearToken,
    validarToken
}

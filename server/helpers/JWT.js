import { SignJWT, jwtVerify } from "jose"
import {coneccion} from "../db/atlas.js";
import { ObjectId } from "mongodb";
import dotenv from 'dotenv';
dotenv.config("../");

const conexionDB = await coneccion();

const crearToken = async (req, res, next) => {
    console.log(req.body);
    if (Object.keys(req.body).length === 0) return res.status(400).send({message: "Datos no enviados"});
    const result = await conexionDB.collection('usuarios').findOne(req.body);
    console.log(result);
    if (!result) return res.status(401).send({message: "Usuario no encontrado"});
    
    const encoder = new TextEncoder();
    const id = result._id.toString();
    const jwtConstructor = await new SignJWT({ id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    
        res.status(200).json({ token: jwtConstructor });

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
                _id:new ObjectId(jwtData.payload.id),
                [`permisos.${req.baseUrl}`]: `${req.headers["accept-version"]}`
            }
        );
        let {_id, ...usuarios} = res;
        return usuarios;
    } catch (error) {
        return false;
    }
}
async function generateJWTToken(userId) {
    try {
        const jwt = new SignJWT();

        jwt
            .claim("sub", userId)  
            .setProtectedHeader({ alg: 'HS256' })  
            .setIssuedAt()  
            .setExpirationTime("3h");  
        const token = await jwt.sign(process.env.JWT_PRIVATE_KEY);

        return token;
    } catch (error) {
        console.error("Error al generar el token JWT:", error);
        throw error;
    }
}
export {
    crearToken,
    validarToken,
    generateJWTToken
}

import { Router } from "express";
import { getUsuario, insertUsuario } from "../api/version1/usuario.js";


const appUsuario = Router();
const registerUsuario = Router();

appUsuario.post('/', getUsuario );
registerUsuario.post('/', insertUsuario);

export {appUsuario, registerUsuario};
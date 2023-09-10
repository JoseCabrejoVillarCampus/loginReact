import { Router } from "express";
import { getUsuario } from "../api/version1/usuario.js";


const appUsuario = Router();

appUsuario.post('/', getUsuario );

export {appUsuario};
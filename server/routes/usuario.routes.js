import { limitLogin } from "../helpers/limit.js";
import passPortHelper from "../helpers/passPortHelper.js";
import { crearToken } from "../helpers/JWT.js";
import { Router } from "express";
import { getUsuario } from "../api/version1/usuario.js";

const appUsuario = Router();

appUsuario.use(limitLogin(), passPortHelper.authenticate("bearer", {session: false}));

appUsuario.post('/login', crearToken ,getUsuario );

export {appUsuario};

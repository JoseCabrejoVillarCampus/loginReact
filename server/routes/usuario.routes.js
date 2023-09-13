import { limitLogin } from "../helpers/limit.js";
import passPortHelper from "../helpers/passPortHelper.js";
import { crearToken } from "../helpers/JWT.js";
import { Router } from "express";
import { getUsuario } from "../api/version1/usuario.js";
import passport from "../helpers/passPortHelper.js";

const appUsuario = Router();
const app = Router();

appUsuario.post('/login', crearToken ,getUsuario ); 
appUsuario.use(limitLogin(), passPortHelper.authenticate("bearer", {session: false}));
app.get("/ruta-autenticada", passport.authenticate("bearer", { session: false }), (req, res) => {
    res.json({ message: "Ruta autenticada" });
});



export {appUsuario};

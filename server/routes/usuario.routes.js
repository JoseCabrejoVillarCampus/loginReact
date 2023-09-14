import { limitLogin } from "../helpers/limit.js";
import { Router } from "express";
import { crearToken } from "../helpers/JWT.js";
import passport from "../helpers/passPortHelper.js";
import { loginV1 } from "../api/version1/loginV1.js";

const appLogin = Router();

appLogin.use(limitLogin());
appLogin.post('/', crearToken, loginV1); 

export {appLogin};
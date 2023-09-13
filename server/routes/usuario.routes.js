import { limitLogin } from "../helpers/limit.js";
import { Router } from "express";
import { crearToken } from "../helpers/JWT.js";
import passport from "../helpers/passPortHelper.js";

const appLogin = Router();

appLogin.use(limitLogin());
appLogin.post('/',crearToken, passport.authenticate('bearer', { session: false })); 

export {appLogin};
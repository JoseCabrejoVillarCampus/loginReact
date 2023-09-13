import { limitLogin } from "../helpers/limit.js";
import { Router } from "express";
import { crearToken } from "../helpers/JWT.js";
import passport from "../helpers/passPortHelper.js";
import morgan from "morgan";

const appLogin = Router();

appLogin.use(morgan("dev"))

appLogin.use(limitLogin());
appLogin.post('/',crearToken, passport.authenticate('bearer', { session: false })); 

export {appLogin};
import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import {appLogin} from "./routes/usuario.routes.js";
import morgan from "morgan";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use('/login', appLogin);

console.log(process.env.MY_SERVER);
const config = JSON.parse(process.env.MY_SERVER);
app.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});
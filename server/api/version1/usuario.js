import { coneccion } from "../../db/atlas.js";

let db = await coneccion();
let usuarios = db.collection("usuarios");

export const getUsuario = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await usuarios.findOne(
            {
                nombre: username,
                password
            }
        );
        if (!user) return res.status(404).send("Datos incorrectos");
        if (user.password != password) return res.status(404).send("Ingreso "), console.log("NO entraste");
        console.log("Entraste");
        res.status(200).send(user);
    } catch (error) {
        throw error;
    }
}

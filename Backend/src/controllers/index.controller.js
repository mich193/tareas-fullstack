import {pool} from "../db.js"

export const index= (req, res) => {
    res.json({message: "Bienvenido a la API de tareas"});
};

export const ping= async (req, res) => {
    try {
       const  result = await pool.query("SELECT NOW() AS now");
       res.json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "No se pudo conectar con la base de datos"});
    }
}
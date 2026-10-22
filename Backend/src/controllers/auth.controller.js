import bcrypt from "bcryptjs";
import {pool} from "../db.js"

export const register = async (req, res) => {
   const {username, email, password} = req.body ?? {};

   if (!username || !email || !password) { //no user es verdadero (o)
    return res
    .status(400)
    .json({message: "username, email, password son obligatorios"});
   }

   if (password.length < 6){
    return res
    .status(400)
    .json({message: "la contraseña debe tener al menos 6 caracteres"});
   }

   try {
    const existing = await pool.query("SELECT id FROM users WHERE email = $1", [
        email,
    ]);
    if (existing.rows.length > 0){
        return res.status(400).json({message: "el correo ya esta registrado"});
    }
    const passwordHash = await bcrypt.hash(password, 10);

    const result = await pool.query (
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email, created_at",
        [username, email, passwordHash]
    );
    return res.status(201).json(result.rows[0]);
   } catch (error) {
     console.error (error);
     return res.status(500).json({message: "Error al registrar el usuario"});
   }
};





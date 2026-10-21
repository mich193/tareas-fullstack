export const index= (req, res) => {
    res.json({message: "Bienvenido a la API de tareas"});
};

export const ping=(req, res) => {
    res.json({message: "pong"});
}; //recibe la peticion del navegador y da respuesta
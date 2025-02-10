import { validarToken } from "../helper/generate-jwt.js";



export const validareole = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop() // capturar solo el token
        const tokenData = await validarToken(token) // función que verifica el token 
        if (tokenData._id) {
            next()
        } else {
            res.status(400)
            res.send({ error: 'notienes permiso para esta funcion ' })
        }
    } catch (err) {
        console.log("denegado")
    }
}

export default validareole;





import argon2 from "argon2";
import { generateJWT } from "../helper/generate-jwt.js";
import User from "../user/user.model.js";

export const register = async (req, res) => {
    try {
        const data = req.body;
        let profilePicture = req.file ? req.file.filename : null;
        
        // Usamos argon2.hash en lugar de hash
        const encryptedPassword = await argon2.hash(data.password);

        data.password = encryptedPassword;
        data.profilePicture = profilePicture;
        const user = await User.create(data);

        return res.status(201).json({
            message: "User has been registered",
            nombre: user.nombre,
            email: user.email
        });

    } catch (err) {
        console.log(err.message);

        if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
            return res.status(400).json({
                message: "El email ya fue registrado anteriormente."
            });
        }

        return res.status(500).json({
            message: "User registration failed",
            error: err.message
        });
    }
};



export const login = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        console.log("Buscando usuario...");
        const user = await User.findOne({ 
            $or: [{ email: email }, { username: username }] 
        });

        if (!user) {
            console.log("Usuario no encontrado");
            return res.status(400).json({
                message: "Credenciales inválidas",
                error: "No existe el usuario o correo ingresado"
            });
        }

        console.log("Usuario encontrado:", user);

        console.log("Verificando contraseña...");
        const validPassword = await argon2.verify(user.password, password);
        console.log("Contraseña válida:", validPassword);

        if (!validPassword) {
            console.log("Contraseña incorrecta");
            return res.status(400).json({
                message: "Credenciales inválidas",
                error: "Contraseña incorrecta"
            });
        }

        console.log("Generando token...");
        const token = await generateJWT(user);
        console.log("Token generado:", token);

        return res.status(200).json({
            message: "Login successful",
            userDetails: {
                token: token,
                profilePicture: user.profilePicture
            }
        });

    } catch (err) {
        console.error("Error en login:", err);
        return res.status(500).json({
            message: "Login failed, server error",
            error: err.message
        });
    }
};
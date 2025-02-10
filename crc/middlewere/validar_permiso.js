import { validarToken } from "../helper/generate-jwt.js";
import userModel from "../user/user.model.js";

export const validarPermiso = (roles) => async (req, res, next) => {
  try {
 
    const token = req.headers.authorization.split(" ").pop();
    const tokenData = await validarToken(token);
    const userData = await userModel.findById(tokenData._id);
    if ([].concat(roles).includes(userData.role)) {
      next();
    } else {
      res.status(400).send({ error: "No tienes permiso para esta función" });
    }
  } catch (err) {
    res.status(500).send({ error: "Error en la validación de permisos" });
  }
};



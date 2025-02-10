import { body, param } from "express-validator";
import {handleErrors} from "../middlewere/handle-errors.js"

export const registerTeeachersValidator = [
    body("nombre").notEmpty().withMessage("El nombre del maestro es requerido"),
    body("apellido").notEmpty().withMessage("El apellido del maestro es requerido"),
    body("email").isEmail().withMessage("No es un email válido"),
    handleErrors
];

export const updateTeachersValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    body("nombre").optional().notEmpty().withMessage("El nombre no puede estar vacío"),
    body("apellido").optional().notEmpty().withMessage("El apellido no puede estar vacío"),
    body("email").optional().isEmail().withMessage("No es un email válido"),
    handleErrors
];

export const deleteTeachersValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    handleErrors
];

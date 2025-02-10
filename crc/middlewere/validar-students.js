import { body, param } from "express-validator";
import { handleErrors } from "../middlewere/handle-errors.js";

export const registerStudentsValidator = [
    body("nombre").notEmpty().withMessage("El nombre del estudiante es requerido"),
    body("apellido").notEmpty().withMessage("El apellido del estudiante es requerido"),
    body("email").isEmail().withMessage("No es un email válido"),
    body("materias").optional().isArray().withMessage("Las materias deben ser un arreglo de IDs"),
    body("materias.*").optional().isMongoId().withMessage("Cada materia debe ser un ID válido de MongoDB"),
    handleErrors
];

export const updateStudentsValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    body("nombre").optional().notEmpty().withMessage("El nombre no puede estar vacío"),
    body("apellido").optional().notEmpty().withMessage("El apellido no puede estar vacío"),
    body("email").optional().isEmail().withMessage("No es un email válido"),
    body("materias").optional().isArray().withMessage("Las materias deben ser un arreglo de IDs"),
    body("materias.*").optional().isMongoId().withMessage("Cada materia debe ser un ID válido de MongoDB"),
    handleErrors
];

export const deleteStudentsValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    handleErrors
];


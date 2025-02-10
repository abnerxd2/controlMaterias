import { body, param } from "express-validator";
import { handleErrors } from "../middlewere/handle-errors.js";

export const registerSubjectsValidator = [
    body("nombre").notEmpty().withMessage("El nombre de la materia es requerido"),
    body("descripcion").notEmpty().withMessage("La descripción de la materia es requerida"),
    body("maestro").isMongoId().withMessage("Debe ser un ID válido de MongoDB"),
    handleErrors
    
];

export const updateSubjectsValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    body("nombre").optional().notEmpty().withMessage("El nombre no puede estar vacío"),
    body("descripcion").optional().notEmpty().withMessage("La descripción no puede estar vacía"),
    body("maestro").optional().isMongoId().withMessage("Debe ser un ID válido de MongoDB"),
    handleErrors
];

export const deleteSubjectsValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    handleErrors
];

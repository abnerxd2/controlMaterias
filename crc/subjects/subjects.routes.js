import { Router } from "express";
import { addSubjects, deleteSubject,listSubjects, } from "./subjects.controller.js";
import {validareole} from "../middlewere/validar_role.js"
import{validarPermiso}from  "../middlewere/validar_permiso.js"

const router = Router();

router.post("/add", addSubjects);
router.delete("/:id", validareole,validarPermiso(['TEACHER_ROLE']), deleteSubject);
router.get("/", listSubjects);


export default router;

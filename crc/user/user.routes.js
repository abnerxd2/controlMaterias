
import { Router } from "express";
import { addSubjectToUser,listStudents, } from "../user/user.controller.js"; 

const router = Router();


// agrgar materias por separado
router.post("/add", addSubjectToUser);
// listar materias por usuario

// listar solo los estudiantes 
router.get("/students", listStudents);
export default router;



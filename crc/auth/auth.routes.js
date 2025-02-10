import { Router } from "express";
import { register, login } from "./auth.controller.js"
import{registerUserValidator,loginValidator} from "../middlewere/validar-usuers.js"


const router = Router()

router.post(
    "/register",
    registerUserValidator, 
    register
)

router.post("/login", loginValidator, login)

export default router
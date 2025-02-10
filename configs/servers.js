import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { dbConnection } from './mongo.js';
import authRoutes from '../crc/auth/auth.routes.js';
import userRoutes from '../crc/user/user.routes.js';
import subjectsRoutes from "../crc/subjects/subjects.routes.js"
import apiLimiter from "../crc/middlewere/validar-peticiones.js"


const routes = (app) => {
    app.use("/schoolsystem/v1/auth", authRoutes)
    app.use("/schoolsystem/v1/user", userRoutes)
    app.use("/schoolsystem/v1/subjects", subjectsRoutes)
}
const middlewares = (app) => {
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
    app.use(apiLimiter)
}

const conectarDB = async () => {
    try {
        await dbConnection()
    } catch (err) {
        console.log(`Database conection failed: ${err}`)
    }
}

export const initServer = () => {
    const app = express()
    try {
        middlewares(app)
        conectarDB()
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running on part: ${process.env.PORT}`)
    } catch (err) {
        console.log(`Server init failed: ${err}`)
    }
}
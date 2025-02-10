import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    nombre: {
         type: String, 
         required: true 
    },
    apellido: { 
        type: String, 
        required: true 
    },
    username:{
        type: String,
    },
    email: { 
        type: String, 
        required: true, 
        unique: true
     },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        enum: ["STUDENT_ROLE", "TEACHER_ROLE"], 
        default: "STUDENT_ROLE" 
    },
    materias: [{
        type: Schema.Types.ObjectId,
        ref: "Materia"
    }]
}, { timestamps: true });

export default model("User", UserSchema);

import { Schema, model } from "mongoose";

const materiaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre de la materia es obligatorio"],
        trim: true
    },
    descripcion: {
        type: String,
        required: [true, "La descripción de la materia es obligatoria"]
    },
    maestro: {
        type: Schema.Types.ObjectId,
        ref: "User", // Cambiado para que haga referencia al modelo User
        required: [true, "Cada materia debe tener un maestro asignado"]
    }
},);

export default model("Subjects", materiaSchema);

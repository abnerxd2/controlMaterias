import Subjects from "../subjects/subjects.model.js";
import User from "../user/user.model.js";
export const addSubjects = async (req, res) => {
    const { nombre, descripcion, maestro } = req.body;
    try {
        const nuevaMateria = new Subjects({
            nombre,
            descripcion,
            maestro
        });
        await nuevaMateria.save();
        return res.status(201).json({
            message: "Materia agregada exitosamente",
            materia: nuevaMateria
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al agregar materia",
            error: error.message
        });
    }
};



export const deleteSubject = async (req, res) => {
  const { id } = req.params; 
  try {
   
    const deletedSubject = await Subjects.findByIdAndDelete(id);
    if (!deletedSubject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    await User.updateMany(
      { materias: id },
      { $pull: { materias: id } }
    );

    return res.status(200).json({
      message: "Subject deleted successfully, and removed from assigned students",
      subject: deletedSubject
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting subject",
      error: error.message
    });
  }
};




export const listSubjects = async (req, res) => {
    try {
        // Consulta todas las materias y opcionalmente popula el campo "maestro"
        const subjects = await Subjects.find().populate("maestro");
        return res.status(200).json({
            message: "Materias listadas exitosamente",
            subjects
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al listar las materias",
            error: error.message
        });
    }
};

export const updateSubjects = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;


        const course = await Course.findById(id);
        
        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Curso no encontrado",
            });
        }

   
        const updatedCourse = await Course.findByIdAndUpdate(id, data, { new: true });

        return res.status(200).json({
            success: true,
            msg: 'Curso actualizado',
            name: req.user.name,
            course: updatedCourse,
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "No se pudo actualizar el curso",
            error: err.message,
    });
    }
};

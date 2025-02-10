import User from "../user/user.model.js"; 


export const addSubjectToUser = async (req, res) => {
    const { userId, subjectId } = req.body;
  try {
    // buscamoa al usuario
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // miramos si no tiene la materia ya integrada
    const subjectExists = user.materias.some(
      (id) => id.toString() === subjectId
    );
    if (subjectExists) {
      return res.status(400).json({ message: "La materia ya ha sido agregada" });
    }

    //revisadmos si no teiene mas de 3 materias
    if (user.materias.length >= 3) {
      return res.status(400).json({
        message: "No puedes agregar más de 3 materias"
      });
    }

    // y  si no la agregamos 
    user.materias.push(subjectId);
    await user.save();

    return res.status(200).json({
      message: "Materia agregada exitosamente",
      materias: user.materias
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error en el servidor",
      error: error.message
    });
  }
};

// listar Estudiantes  por medio del role 

export const listStudents = async (req, res) => {
  try {
    // buscamos el role Studiante
    const students = await User.find({ role: "STUDENT_ROLE" });
    return res.status(200).json({

      students
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error listing students",
      error: error.message
    });
  }
};




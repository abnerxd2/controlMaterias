import User from "../user/user.model.js"


export const emailExists = async (email = "") => {
    const existe = await User.findOne({email})
    if(existe){
        throw new Error(`The email ${email} is already registered`)
    }
}

export const usernameExists = async (nombre = "") => {
    const existe = await User.findOne({nombre})
    if(existe){
        throw new Error(`The username ${nombre} is already registered`)
    }
}

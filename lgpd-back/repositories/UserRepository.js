import User from "../models/User.js"

const saveUser=async(UserModel)=>{
    const save=await User.create (UserModel);
    return save;
}
const getUserById=async(id)=>{
    return await User.findByPk(id) ;
}

const getAllUsers=async()=>{
    return await User.findAll ({
        order:[
            ['id', 'ASC']
        ]}
    );
}
const deleteUserById=async(id)=>{
    return await User.destroy({where: {id: id}}) ;
}

const updateUserById=async(id, UserModel)=>{
    try {
        const result=await User.update(UserModel,{where: {id: id}} );
        if (result[0]===1){
            return {message: "Usuário atualizado com sucesso!"};
        } else {
            return {message: "Usuário não foi encontrado."};
        }
    } catch (error) {
        return error;
    }
};

const factory = {
    saveUser,
    getUserById,
    getAllUsers,
    deleteUserById,
    updateUserById
}

export default factory;
import Teacher from "../models/Teacher.js"

const saveTeacher=async(TeacherModel)=>{
    const save=await Teacher.create (TeacherModel);
    return save;
}
const getTeacherById=async(id)=>{
    return await Teacher.findByPk(id) ;
}

const getAllTeachers=async()=>{
    return await Teacher.findAll ({
        order:[
            ['id', 'ASC']
        ]}
    );
}
const deleteTeacherById=async(id)=>{
    return await Teacher.destroy({where: {id: id}}) ;
}

const updateTeacherById=async(id, TeacherModel)=>{
    try {
        const result=await Teacher.update(TeacherModel,{where: {id: id}} );
        if (result[0]===1){
            return {message: "Professsor atualizado com sucesso!"};
        } else {
            return {message: "Professor não foi encontrado."};
        }
    } catch (error) {
        console.error();
    }
}
const factory = {
    saveTeacher,
    getTeacherById,
    getAllTeachers,
    deleteTeacherById,
    updateTeacherById
}

export default factory;
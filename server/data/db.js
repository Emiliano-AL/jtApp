import mongoose from 'mongoose'

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/jtApp', {useNewUrlParser: true})
mongoose.set('setFindAndModify', false)
//Usuarios 

const usuariosSchema = new mongoose.Schema({
    nombre : String,
    apellido : String,
    puesto  : String,
    email : String
})

const Users = mongoose.model('usuarios', usuariosSchema)

//Tareas
const taskSchema = new mongoose.Schema({
    nombre : String,
    fechaInicio: String,
    fechaFin: String,
    desarrolladores: Array
})
const Task = mongoose.model('tareas', taskSchema)

//proyectos
const projectsSchema = new mongoose.Schema({
    nombre : String,
    fechaInicio: String,
    fechaFin: String,
    tareas: Array
})
const Project = mongoose.model('proyectos', projectsSchema)

export { Users, Task, Project }
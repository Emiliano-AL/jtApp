import mongoose from 'mongoose'
import { Users, Task, Project } from './db'


export const resolvers = {
    Query: {
        getUsers: (root, {limite}) => {
            return Users.find({}).limit(limite);
        },
        getUser : (root, {id}) => {
            return new Promise((resolve, reject) => {
                Users.findById(id, (err, user) => {
                    if(err) reject(err)
                    else resolve(user)
                })
            })
        },

        getTasks: (root, {limite}) => {
            return Task.find({}).limit(limite);
        },
        getTask: (root, {id}) => {
            return new Promise((resolve, reject) => {
                Task.findById(id, (err, task) => {
                    if(err) reject(err)
                    else resolve(task)
                })
            })
        },

        // getProjects: (root, {limite}) => {
        //     return Project.find({}).limit(limite);
        // },
        // getProject: (root, {id}) => {
        //     return new Promise((resolve, reject) => {
        //         Project.findById(id, (err, project) => {
        //             if(err) reject(err)
        //             else resolve(project)
        //         })
        //     })
        // } 
    },
    Mutation:{
        createUser: (root, {input}) => {
           const newUser = new Users({
                nombre : input.nombre,
                apellido : input.apellido,
                puesto : input.puesto,
                emails : input.email
           })
           newUser.id = newUser._id
           return new Promise((resolve, reject) => {
                newUser.save(err => {
                   if(err) reject(err)
                   else resolve(newUser)
               })
           }) 
        },
        updateUser: (root, {input}) =>{
            return new Promise((resolve, reject) => {
                Users.findOneAndUpdate(
                    {_id: input.id}, input, {new: true},
                    (err, user) => {
                        if(err) reject(err)
                        else resolve(user)
                    })
            })
        },
        deleteUser: (root, {id}) => {
            return new Promise((resolve, reject) => {
                Users.findOneAndRemove(
                    {_id: id},  (err) => {
                        if(err) reject(err)
                        else resolve("Se Elimino Correctamente.")
                    })
            })
        },


        createTask: (root, {input}) => {
            const newTask = new Task({
                nombre : input.nombre,
                fechaInicio: input.fechaInicio,
                fechaFin: input.fechaFin,
                desarrolladores: input.desarrolladores
           })
           newTask.id = newTask._id
           return new Promise((resolve, reject) => {
                newTask.save(err => {
                   if(err) reject(err)
                   else resolve(newTask)
               })
           }) 
        },
        updateTask: (root, {input}) =>{
            return new Promise((resolve, reject) => {
                Task.findOneAndUpdate(
                    {_id: input.id}, input, {new: true},
                    (err, task) => {
                        if(err) reject(err)
                        else resolve(task)
                    })
            })
        },
        deleteTask: (root, {id}) => {
            return new Promise((resolve, reject) => {
                Task.findOneAndRemove(
                    {_id: id},  (err) => {
                        if(err) reject(err)
                        else resolve("Se Elimino Correctamente.")
                    })
            })
        },
 
        // createProject: (root, {input}) => {
        //     console.log('Llega...', input)
        //     const newProject = new Project({
        //         nombre : input.nombre,
        //         fechaInicio: input.fechaInicio,
        //         fechaFin: input.fechaFin,
        //         tareas: input.tareas
        //    })
        //    newProject.id = newProject._id
        //    return new Promise((resolve, reject) => {
        //         newProject.save(err => {
        //            if(err) reject(err)
        //            else resolve(newProject)
        //        })
        //    }) 
        // },
        // updateProject: (root, {input}) =>{
        //     return new Promise((resolve, reject) => {
        //         Project.findOneAndUpdate(
        //             {_id: input.id}, input, {new: true},
        //             (err, project) => {
        //                 if(err) reject(err)
        //                 else resolve(project)
        //             })
        //     })
        // }, 
        // deleteProject: (root, {id}) => {
        //     return new Promise((resolve, reject) => {
        //         Project.findOneAndRemove(
        //             {_id: id},  (err) => {
        //                 if(err) reject(err)
        //                 else resolve("Se Elimino Correctamente.")
        //             })
        //     })
        // }
    } 
}
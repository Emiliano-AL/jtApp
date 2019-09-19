import gql from 'graphql-tag'

export const NUEVO_USER = gql `
    mutation createUser($input: UserInput ){
        createUser(input: $input){
            id
            nombre
            apellido
            puesto
            email
        }
    }`

export const ACTUALIZAR_USER = gql `
    mutation actualizarUser($input: UserInput){
        updateUser(input: $input){
            id
            nombre
            apellido
            puesto
            email
        }
    }`

export const ELIMINAR_USER = gql `
    mutation deleteUser($id: ID!){
        deleteUser(id: $id)
    }`

export const ACTUALIZAR_TASK = gql `
    mutation actualizarTask($input: TaskInput){
        updateTask(input: $input){
            id
            nombre
            fechaInicio
            fechaFin
        }
    }`

export const NUEVO_TASK = gql `
    mutation createTask($input: TaskInput ){
        createTask(input: $input){
            id
            nombre
            fechaInicio
            fechaFin
        }
    }`
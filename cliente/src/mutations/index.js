import gql from 'graphql-tag'

export const NUEVO_USER = gql `
    mutation createUser($input: UserInput ){
        createUser(input: $input){
            id
            nombre
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
    }
`
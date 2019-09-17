import gql from 'graphql-tag'

export const USERS_QUERY = gql `{
     getUsers{
        id
        nombre
        apellido
        puesto
    }
}`;

export const USER_QUERY = gql `
    query ConsultingUser($id: ID){
        getUser(id: $id){
            nombre
            id
            apellido
            puesto
            email
        }
    }
`
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
`;

export const TASKS_QUERY = gql `{
    getTasks{
        id
        nombre
        fechaInicio
        fechaFin
   }
}`;


export const TASK_QUERY = gql `
    query ConsultingTask($id: ID){
        getTask(id: $id){
            nombre
            id
            fechaFin
            fechaInicio
        }
    }
`;
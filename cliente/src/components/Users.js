import React, {Fragment}  from 'react'
import { Query, Mutation } from 'react-apollo'    
import {Link} from 'react-router-dom'

import { USERS_QUERY } from '../queries'
import { ELIMINAR_USER } from '../mutations'

const Users = () => ( 
    <Query query={USERS_QUERY} pollInterval={1000}>
        {
        ({loading, error, data, startPolling, stopPolling}) => {
            if(loading) return "Cargando..."
            if(error) return `Error: ${error.message}`
            return (
                <Fragment>
                    <h2 className="text-center">Listado de Usuarios</h2>
                    <ul className="list-group mt-4">
                        {
                            data.getUsers.map(item => { 
                                const {id} = item
                                return(
                                    <li className="list-group-item" key={item.id}>
                                        <div className="row justify-content-between aling-item-center">
                                            <div className="col-md-8 d-flex justify-content-between aling-item-center">
                                                {item.nombre} {item.apellido} - {item.puesto}
                                            </div>
                                            <div className="col-md-4 d-flex justify-content-end">
                                                <Mutation mutation={ELIMINAR_USER}>
                                                {
                                                    deleteUser => (
                                                        <button 
                                                            type="button" 
                                                            className="btn btn-danger d-block d-md-inline-block mr-2"
                                                            onClick={ () => {
                                                              if(window.confirm('¿Seguro que deseas Eliminar?')){
                                                                deleteUser({
                                                                    variables:{id}
                                                                })
                                                              }
                                                            }}
                                                            >
                                                            &times; Eliminar
                                                        </button>
                                                    )
                                                }                                               
                                                </Mutation>
                                                <Link to={`/user/edit/${item.id}`} className="btn btn-success d-block d-md-inline-block">
                                                    Editar usuario
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                            )
                        }
                    </ul>
                </Fragment>
            )
        }
        }
    </Query>
)

export default Users
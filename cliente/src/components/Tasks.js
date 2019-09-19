import React, { Fragment } from 'react'
import {QUERY, Query} from 'react-apollo'
import {Link} from 'react-router-dom'

import { TASKS_QUERY } from '../queries'

const Tasks = () => (
    <Query query={TASKS_QUERY} pollInterval={1000}>
        {
            ({loading, error, data, startPolling, stopPolling}) => {
                if(loading) return "Cargando..."
                if(error) return `Error: ${error.message}`
                return (
                    <Fragment>
                        <h2 className="text-center">Listado de Tareas</h2>
                        <ul className="list-group mt-4">
                        {
                            data.getTasks.map(item => {
                                const {id} = item
                                return(
                                    <li className="list-group-item" key={item.id}>
                                        <div className="row justify-content-between aling-item-center">
                                            <div className="col-md-8 d-flex justify-content-between aling-item-center">
                                                {item.nombre}  {item.fechaInicio} - {item.fechaFin}
                                            </div>
                                            <div className="col-md-4 d-flex justify-content-end">

                                                <Link to={`/task/edit/${item.id}`} className="btn btn-success d-block d-md-inline-block">
                                                    Editar Tarea
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </Fragment>
                )
            }
        }
    </Query>
)

export default Tasks

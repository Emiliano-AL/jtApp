import React, { Component, Fragment } from 'react'
import {TASK_QUERY} from '../queries'
import {Query} from 'react-apollo'
import FormularioEditarTask from './FormularioEditarTask'

export default class UpdateTask extends Component {
    render() {
        const {id} = this.props.match.params
        return (
            <Fragment>
                <h2 className="text-center"> Actualizar </h2>
                <div className="row justify-content-center">
                    <Query query={TASK_QUERY} variables={{id}}>
                        {
                            ({loading, error, data}) => {
                                if(loading) return "Cargando..."
                                if(error) return error
                                return(
                                    <FormularioEditarTask
                                        task={data.getTask}
                                    />
                                )
                            }
                        }
                    </Query>
                </div>
            </Fragment>
        )
    }
}

import React, { Component, Fragment } from 'react'
import {USER_QUERY} from '../queries'
import {Query} from 'react-apollo'
import FormularioEditarUser from './FormularioEditarUser'

export default class UpdateUser extends Component {
    render() {
        //id del usuario
        const {id} = this.props.match.params
        return (
            <Fragment>
                <h2 className="text-center"> Actualizar </h2>
                <div className="row justify-content-center">
                    <Query query={USER_QUERY} variables={{id}}>
                    {
                        ({loading, error, data}) => {
                            if(loading) return "Cargando..."
                            if(error) return error
                            return(
                                <FormularioEditarUser 
                                    usuario={data.getUser}
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


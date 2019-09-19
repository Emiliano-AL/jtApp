import React, { Component } from 'react'
import {ACTUALIZAR_TASK} from '../mutations'
import {Mutation} from 'react-apollo'
import {withRouter} from 'react-router-dom'

class FormularioEditarTask extends Component {
    state = {
        task:this.props.task
    }
    render() {
        // console.log('TASK: ',this.props.task)
        const {nombre, fechaFin, fechaInicio} = this.state.task
        return (
            <Mutation mutation={ACTUALIZAR_TASK}
                onCompleted={ () => this.props.history.push('/task')}>
            {
                actualizarTask => (
                    <form className="col-md-8 m-3" onSubmit={e => {
                        e.preventDefault()
                        const {id, nombre, fechaFin, fechaInicio} = this.state.task

                        const input = {
                            id,
                            nombre, 
                            fechaFin,
                            fechaInicio
                        }
                        actualizarTask({
                            variables: {input}
                        })
                    }}>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label>Nombre</label>
                                <input
                                    type="text" 
                                    className="form-control" 
                                    defaultValue={nombre}
                                    onChange={ e => {
                                        this.setState({
                                            task:{
                                                ...this.state.task,
                                                nombre: e.target.value
                                            }
                                        })
                                    }}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Fecha Inicio</label>
                                <input
                                    type="text" 
                                    className="form-control" 
                                    defaultValue={fechaInicio}
                                    onChange={ e => {
                                        this.setState({
                                            task:{
                                                ...this.state.task,
                                                fechaInicio: e.target.value
                                            }
                                        })
                                    }}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Fecha Fin</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    defaultValue={fechaFin}
                                    onChange={ e => {
                                        this.setState({
                                            task:{
                                                ...this.state.task,
                                                fechaFin: e.target.value
                                            }
                                        })
                                    }}
                                    />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success float-right">Guardar Cambios</button>
                    </form>
                )
            }
            </Mutation>
        )
    }
}

export default withRouter(FormularioEditarTask)
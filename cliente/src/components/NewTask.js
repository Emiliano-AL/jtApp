import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import { NUEVO_TASK } from '../mutations'

export default class NewTask extends Component {
    state = {
        task:{
            nombre : '',
            fechaInicio : '',
            fechaFin  : ''
        },
        error: false
    }


    render() {
        const { error } = this.state
        let respuesta = (error) ? <p className="alert alert-danger p-3 text-center">
            Los campos nombre, son obligatorios</p> : ''
        return (
            <Fragment>
                 <h2 className="text-center"> Nueva Tarea </h2>
                {respuesta}
                <div className="row justify-content-center">
                    <Mutation 
                        mutation={NUEVO_TASK}
                        onCompleted={() => this.props.history.push('/task')}>
                    {
                        createTask => (
                            <form className="col-md-8 m-3"
                                onSubmit={ e => {
                                    e.preventDefault()
                                    const {nombre, fechaFin, fechaInicio} = this.state.task
                                    if(nombre === ''){
                                        this.setState({
                                            error:true
                                        })
                                        return
                                    }
                                    this.setState({
                                        error:false
                                    })
                                    const input = {
                                        nombre, 
                                        fechaFin,
                                        fechaInicio
                                    }
                                    createTask({
                                        variables:{input}
                                    })
                                }}>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label>Nombre</label>
                                        <input
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Nombre Tarea"
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
                                            placeholder="Fecha de inicio de la Tarea"
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
                                            placeholder="Fecha de fin de la Tarea"
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
                                <button type="submit" className="btn btn-success float-right">Agregar Tarea</button>
                            </form>
                        )
                    }
                    </Mutation>
                </div>
            </Fragment>
        )
    }
}

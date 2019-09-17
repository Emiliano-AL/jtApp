import React, { Component } from 'react';
import {ACTUALIZAR_USER} from '../mutations'
import {Mutation} from 'react-apollo'

class FormularioEditar extends Component {

    state =  {
        usuario: this.props.usuario
    }

    render() { 
        const {nombre, apellido, puesto, email} = this.state.usuario
        return (
            <Mutation mutation={ACTUALIZAR_USER}>
            { 
                actualizarUser => (
                <form className="col-md-8 m-3" onSubmit={e => {
                    e.preventDefault()
                    const {id, nombre, apellido, puesto, email} = this.state.usuario

                    const input = {
                        id,
                        nombre, 
                        apellido,
                        puesto,
                        email
                    }
                    actualizarUser({
                        variables:{input}
                    })
                }}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Nombre</label>
                        <input
                            type="text" 
                            className="form-control" 
                            defaultValue={nombre}
                            onChange={ e => {
                                this.setState({
                                    usuario:{
                                        ...this.state.usuario,
                                        nombre: e.target.value
                                    }
                                })
                            }}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Apellido</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            defaultValue={apellido}
                            onChange={ e => {
                                this.setState({
                                    usuario:{
                                        ...this.state.usuario,
                                        apellido: e.target.value
                                    }
                                })
                            }}
                            />
                    </div>
                </div>
                    
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Puesto</label>
                        <input
                            type="text" 
                            className="form-control" 
                            defaultValue={puesto}
                            onChange={ e => {
                                this.setState({
                                    usuario:{
                                        ...this.state.usuario,
                                        puesto: e.target.value
                                    }
                                })
                            }}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label>Email</label>
                        <input
                            type="email" 
                            className="form-control" 
                            defaultValue={email}
                            onChange={ e => {
                                this.setState({
                                    usuario:{
                                        ...this.state.usuario,
                                        email: e.target.value
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
 

export default FormularioEditar;
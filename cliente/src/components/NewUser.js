import React, { Component, Fragment } from 'react'
import {NUEVO_USER} from './../mutations'
import {Mutation} from 'react-apollo'

export default class NewUser extends Component {
    state = {
        user:{
            nombre : '',
            apellido : '',
            puesto  : '',
            email : ''
        },
        error: false
    }

    render() {
        const { error } = this.state
        let respuesta = (error) ? <p className="alert alert-danger p-3 text-center">
            Los campos nombre y apellido, son obligatorios</p> : ''
        return (
            <Fragment>
                <h2 className="text-center"> Nuevo Cliente </h2>
                {respuesta}
                <div className="row justify-content-center">
                <Mutation
                    mutation={NUEVO_USER} 
                    onCompleted={() => this.props.history.push('/')}>
                    {
                        createUser => (
                        <form className="col-md-8 m-3" 
                        onSubmit={e => {
                            e.preventDefault()
                            const {nombre, apellido, puesto, email} = this.state.user
                            if(nombre === '' || apellido === ''){
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
                                apellido,
                                puesto,
                                email
                            }
                            createUser({
                                variables:{input}
                            })
                        }}
                        >
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Nombre</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Nombre"
                                        onChange={e => {
                                            this.setState({
                                                user: {
                                                    ...this.state.user,
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
                                    placeholder="Apellido"
                                    onChange={e => {
                                            this.setState({
                                                user: {
                                                    ...this.state.user,
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
                                    placeholder="Puesto"
                                    onChange={e => {
                                            this.setState({
                                                user: {
                                                    ...this.state.user,
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
                                    placeholder="Email"
                                    onChange={e => {
                                            this.setState({
                                                user: {
                                                    ...this.state.user,
                                                    email: e.target.value
                                                }
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success float-right">Agregar Usuario</button>
                        </form>
                                  
                        )
                    }
                </Mutation>
                </div>
            </Fragment>
        )
    }
}

import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => (
    <nav className="navbar mb-4 navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
        <div className="container">
            <Link to="/" className="navbar-brand text-light font-weight-bold">JtApp</Link>
            <Link to="/" className="navbar-brand">Usuarios</Link>
            <Link to="/task" className="navbar-brand">Tareas</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegacion" aria-controls="navegacion" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navegacion">
                <ul className="navbar-nav ml-auto text-right">
                    <li className="nav-item mr-1">
                        <Link to="/task/new" className="btn btn-success">
                        Nueva Tarea
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/user/new" className="btn btn-success">
                        Nuevo Cliente
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;
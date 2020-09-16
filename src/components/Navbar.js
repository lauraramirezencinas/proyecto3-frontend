import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export class Encabezado extends Component {

    render() {

        let authLink = (
            <>
                <li className="nav-item">
                    <Link to="/login">Login   </Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup">Sign up</Link>
                </li>
            </>
        )

        if (this.props.user) {
            console.log("Hay usuario logueado!")
            authLink = (
                <>
                    <li className="nav-item">
                        <Link to='/profile' className="nav-link">Perfil</Link >
                    </li>
                    <li className="nav-item">
                        <Link to='/pedidos' className="nav-link">Pedidos</Link >
                    </li>
                    <li className="nav-item">
                        <Link to='/reviews' className="nav-link">Reseñas</Link >
                    </li>
                    <li className="nav-item">
                        <Link to='/logout' className="nav-link">Hola {this.props.user.nombre},Logout </Link >
                    </li>
                </>
            )
        }

        return (


                <Navbar expand="lg">
                    <div className="container">
                    <Navbar.Brand className="nav-logo"href="/">Sugar-Place</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {authLink}
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                    
                </Navbar>
            

        )
    }
}

export default Encabezado

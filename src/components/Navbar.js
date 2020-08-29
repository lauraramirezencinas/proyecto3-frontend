import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'


export class Encabezado extends Component {

    render() {

        let authLink = (
            <>
                <li className="nav-item">
                    <Nav.Link href="/login">Login</Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link href="/signup">Sign up</Nav.Link>
                </li>
            </>
        )

        if (this.props.user) {
            console.log("Hay usuario logueado!", this.props.user)
            authLink = (
                <li className="nav-item">
                    
                    <Nav.Link href='/logout' className="nav-link">Hola {this.props.user.nombre},Logout </Nav.Link >
                </li>
            )
        }

        return (

            <div>
                <Navbar expand="lg">
                    <Navbar.Brand href="/">Sugar-Place</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {authLink}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default Encabezado

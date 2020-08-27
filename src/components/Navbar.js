import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export class Encabezado extends Component {

    render() {
        return (

            <div>
                <Navbar  expand="lg">
                    <Navbar.Brand href="/">Sugar-Place</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/login">Login</Nav.Link>                           
                            <Nav.Link href="/signup">Sign up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default Encabezado

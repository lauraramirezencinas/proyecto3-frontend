import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


export class FormBaker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombreNegocio: '',
            descripcion: '',
            calle: '',
            numero: '',
            cuidad: '',
            horario: '',
            logoUrl: '',
            facebook: '',
            instagram: '',
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })

    }

    handleFormSubmit = (event) => {

        let loggedInUser = JSON.parse(localStorage.getItem('user'))
        console.log(loggedInUser._id)
        const { nombreNegocio, descripcion, calle, numero, cuidad, horario } = this.state;
        event.preventDefault()
        axios.patch(`http://localhost:3000/usuario/${loggedInUser._id}`, {
            nombreNegocio, descripcion, calle,
            numero, cuidad, horario
        }, { withCredentials: true })
            .then(response => response)
        this.setState({ redirect: true })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/profile' />
        }
    }



    render() {

        return (
            <div>
                <h1 className="title-form">Panderia</h1>
                <form onSubmit={this.handleFormSubmit} >
                    <div class="form-group">
                        <label >Nombre del Negocio</label>
                        <input type="text" class="form-control" placeholder=""
                            name="nombreNegocio" value={this.state.nombreNegocio}
                            onChange={e => this.handleChange(e)} />
                    </div>
                    <div class="form-group">
                        <label >Descripción</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
                        name="descripcion" value={this.state.descripcion} 
                        onChange={e => this.handleChange(e)}></textarea>
                         <small class="form-text text-muted">Introduce una descripcion de tu panaderia</small>
                    </div>
                    

                    <div className="col-xs-12 col-sm-6 col-md-8 ">
                        <input className="boton-form" type="submit" value="Entrar" />
                    </div>
                    {this.renderRedirect()}

                </form>

            </div>
        )
    }
}

export default FormBaker

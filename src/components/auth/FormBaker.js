import React, { Component } from 'react';
import axios from 'axios';


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
            instagram: ''
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

    }

    // componentDidMount() {
    //     const id = this.props.match.params.id
    //     axios.get(`http://localhost:3000/auth/${id}`)
    //         .then(response => {
    //             this.setState(response.data)
    //         })
    // }

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
    }



    render() {

        return (
            <div>
                <h1>form baker </h1>
                <form onSubmit={this.handleFormSubmit} >
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <label>Nombre del Negocio</label>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <input type="text" name="nombreNegocio" value={this.state.nombreNegocio} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <label>Descripcion:</label>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <input type="text" name="descripcion" value={this.state.descripcion} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <label>calle:</label>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <input type="text" name="calle" value={this.state.calle} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <label>Numero:</label>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <input type="text" name="numero" value={this.state.numero} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <label>Cuidad:</label>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <input type="text" name="cuidad" value={this.state.cuidad} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <label>Horario:</label>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <input type="text" name="horario" value={this.state.horario} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <input type="submit" value="Entrar" />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">

                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

export default FormBaker

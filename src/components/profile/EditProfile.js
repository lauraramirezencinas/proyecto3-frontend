import React, { Component } from 'react';
import axios from "axios";
import { Modal } from "react-bootstrap";

export class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: this.props.user.nombre,
            apellido: this.props.user.apellido,
            email: this.props.user.email,
            nombreNegocio: this.props.user.nombreNegocio,
            descripcion: this.props.user.descripcion,
            calle: this.props.user.direccion.calle,
            numero: this.props.user.direccion.numero,
            ciudad: this.props.user.direccion.ciudad,
            horario: this.props.user.horario,
            logoUrl: this.props.user.logoUrl,
            facebook: this.props.user.facebook,
            instagram: this.props.user.instagram,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };


    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onHide()
        const { nombre, apellido, email, nombreNegocio, descripcion, calle, numero, ciudad,
            horario, logoUrl, facebook, instagram } = this.state;
        axios.patch(`http://localhost:3000/usuario/${this.props.user._id}`,
            {
                nombre, apellido, email, nombreNegocio, descripcion, calle, numero, ciudad,
                horario, logoUrl, facebook, instagram
            }, { withCredentials: true })
            .then(response=>{
               
                this.props.getUser(response.data.user)
                let url = "/profile/";
                window.location.href = url;
            })
    };

    render() {
        return (

            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title>Editar Perfil</Modal.Title>
                </Modal.Header>
                <div className="container">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="nombre"
                                value={this.state.nombre}
                                onChange={(e) => this.handleChange(e)}
                            />
                            <input
                                type="hidden"
                                className="form-control"
                                placeholder=""
                                name="logoUrl"
                                value={this.state.logoUrl}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Apellido</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="apellido"
                                value={this.state.apellido}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="email"
                                value={this.state.email}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <h4 className="direccion">Dirección</h4>
                        <div className="form-group">
                            <label className="label-form">Calle</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="calle"
                                value={this.state.calle}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="label-form">Numero</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="numero"
                                value={this.state.numero}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="label-form">Ciudad</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="ciudad"
                                value={this.state.ciudad}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nombre de la Panaderia</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="nombreNegocio"
                                value={this.state.nombreNegocio}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Descripción</label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                name="descripcion"
                                value={this.state.descripcion}
                                onChange={(e) => this.handleChange(e)}
                            ></textarea>
                            <small className="form-text text-muted">
                                Introduce una descripcion de tu producto
                            </small>
                        </div>
                        <div className="form-group">
                            <label>Horario</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="horario"
                                value={this.state.horario}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <Modal.Footer>
                            <button className="btn boton-form" type="submit" >
                                Guardar
                            </button>
                        </Modal.Footer>

                    </form>
                </div>
            </Modal>


        )
    }
}

export default EditProfile

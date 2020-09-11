import React, { Component } from 'react';
import { Modal } from "react-bootstrap";
import axios from 'axios';


export class TramitarPedido extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nombre: "",
            telefono: "",
            email: "",
            recogida:""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };



    handleFormSubmit = (event) => {
        event.preventDefault();
        let newItems = [];
        for (let i = 0; i < this.props.pedidos.length; ++i) {
            let newitem = {
                nombre: this.props.pedidos[i].nombre,
                precio: this.props.pedidos[i].precio,
                cantidad: this.props.pedidos[i].quantity,
            }
            newItems.push(newitem)
            console.log(newItems)
        }


        const { nombre, telefono, email, recogida } = this.state;
        const precioFinal=this.props.precioFinal;
        const idUsuario = this.props.pedidos[0].idUsuario;
        const data = {
            idUsuario: idUsuario,
            items: newItems,
            nombre: nombre,
            telefono: telefono,
            email: email, 
            recogida:recogida,
            precioTotal: precioFinal

        }
        axios.post("http://localhost:3000/pedido/", data, { withCredentials: true })
            .then(response => {
                this.setState({
                    nombre: "",
                    telefono: "",
                    email: "",
                })
                let id= response.data._id
                let url = "/pedido/"+ id 
                window.location.href = url;
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title>Finaliza tu pedido</Modal.Title>
                </Modal.Header>
                <div className="container">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <label>Nombre*</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="nombre"
                                value={this.state.nombre}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Telefono*</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="telefono"
                                value={this.state.telefono}
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
                        <div class="form-group">
                            <div className="row">
                                <div className="col">
                                    <label class="mr-sm-2">Recoger en tienda en*:  </label>
                                </div>
                                <div className="col">
                                    <select class="custom-select mr-sm-2" name="recogida" 
                                    value={this.state.recogida}
                                    onChange={(e) => this.handleChange(e)} >
                                        <option value="1 hora">1 hora</option>
                                        <option value="2 horas">2 horas</option>
                                        <option value="3 horas">3 horas</option>
                                        <option value="4 horas">4 horas</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <small className="form-text text-muted">
                            *Campos obligatorios
                        </small>

                        <Modal.Footer>
                            <button className="btn boton-form" type="submit" >
                                Pedir
                        </button>
                        </Modal.Footer>
                    </form>
                </div>
            </Modal>
        )
    }
}

export default TramitarPedido

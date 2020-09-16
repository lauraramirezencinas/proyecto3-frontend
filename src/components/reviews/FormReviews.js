import React, { Component } from 'react';
import axios from 'axios';
import { Modal } from "react-bootstrap";
import Rating from './Rating';


export class FormReviews extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nombre: "",
            numeroPedido: "",
            comentario: "",
            rating: "",
            message: ""
        }
        this.valorRating=this.valorRating.bind(this)
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    valorRating=(valor)=>{
        this.setState({rating:valor})
    }


    handleFormSubmit = (event) => {
        event.preventDefault();

        const { nombre, numeroPedido, comentario, rating } = this.state;
        const idUsuario = this.props.user._id;
        const data = {
            idUsuario: idUsuario,
            nombre: nombre,
            numeroPedido: numeroPedido,
            comentario: comentario,
            rating: rating,
        }
        axios.post(`${process.env.REACT_APP_API_URL}/api/review/`, data, { withCredentials: true })
            .then(response => {
                this.setState({
                    nombre: "",
                    numeroPedido: "",
                    comentario: "",
                    rating: ""
                })
                this.props.onHide()
                this.props.actualizarReviews(response.data)
                
            })
            .catch((error) => {
                console.log(error.response.data.message)
                this.setState({ message: error.response.data.message })
            });
    };


    render() {

        let message = ""
        if (this.state.message) {
            message =
                <small className="form-text errores">
                    {this.state.message}
                </small>
        } else {

        }

        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title>Añadir comentario</Modal.Title>
                </Modal.Header>
                <div className="container">
                    <form onSubmit={this.handleFormSubmit}>

                        <div className="row">
                            <div className="col">
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
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label>Numero de Pedido*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="numeroPedido"
                                        value={this.state.numeroPedido}
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Rating*</label>
                            <Rating valorRating={this.valorRating} />                           
                        </div>
                        <div className="form-group">
                            <label>Comentario</label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                name="comentario"
                                value={this.state.comentario}
                                onChange={(e) => this.handleChange(e)}
                            ></textarea>
                        </div>
                        <small className="form-text text-muted">
                            *Campos obligatorios
                        </small>
                        <Modal.Footer>
                            <button className="btn boton-form" type="submit" >
                                Guardar
                            </button>
                        </Modal.Footer>
                        {message}
                    </form>
                </div>
            </Modal>
        )
    }
}

export default FormReviews

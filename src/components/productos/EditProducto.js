import React, { Component } from 'react';
import axios from "axios";
import { Modal } from "react-bootstrap";

export class EditProducto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: this.props.producto.nombre,
            descripcion: this.props.producto.descripcion,
            precio: this.props.producto.precio,
            ingredientes: this.props.producto.ingredientes,
            imagenUrl: this.props.producto.imagenUrl,
          };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onHide()
        const { nombre, descripcion, precio, ingredientes } = this.state;
        axios.patch(`http://localhost:3000/producto/${this.props.producto._id}`,
        { nombre, descripcion, precio, ingredientes},{ withCredentials: true } )
        .then(res=>{
          let url = "/profile/";
          window.location.href = url;
        }) 
        
      };

    render() {
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
              <Modal.Title>Editar Producto</Modal.Title>
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
                </div>
                <div className="form-group">
                  <label>Descripción</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    maxLength="90"
                    rows="3"
                    name="descripcion"
                    value={this.state.descripcion}
                    onChange={(e) => this.handleChange(e)}
                  ></textarea>
                  <small className="form-text text-muted">
                    Introduce una descripcion de tu producto (máximo 90 caracteres)
                </small>
                </div>
                <div className="form-group">
                  <label>Precio</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="precio"
                    value={this.state.precio}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Ingredientes</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="ingredientes"
                    value={this.state.ingredientes}
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

export default EditProducto

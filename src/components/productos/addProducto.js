import React, { Component } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import UploadImage from "./UploadImage";

export class AddProducto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      descripcion: "",
      precio: "",
      ingredientes: "",
      imagenUrl: ""
    };
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleImageChange = (file) => {
    this.setState({imagenUrl:file})
	};

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onHide()

    const producto = new FormData();
    producto.append('nombre', this.state.nombre);
    producto.append('descripcion', this.state.descripcion);
    producto.append('precio', this.state.precio);
    producto.append('ingredientes', this.state.ingredientes);
    producto.append('imagenUrl', this.state.imagenUrl);
    const idUsuario = this.props.user._id;
       
    axios
      .post(
        "http://localhost:3000/producto/",producto,
        {headers: { 'content-type': 'multipart/form-data' }, 
        withCredentials: true}
      )
      .then((response) => {
        console.log(response.data)
        this.setState({
          nombre: "",
          descripcion: "",
          precio: "",
          ingredientes: "",
          imagenUrl:""
        })
        let url = "/profile/";
        window.location.href = url;
      })
      .catch(error => console.log(error))
  };

 

  render() {

    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>Producto</Modal.Title>
        </Modal.Header>
        <div className="container">
          <form onSubmit={this.handleFormSubmit}>

            <div className="form-group">
              <input
                type="hidden"
                className="form-control"
                name="idUsuario"
                //value={this.props.user._id}
                onChange={(e) => this.handleChange(e)}
              />
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
              <label>Descripción*</label>
              <textarea
                className="form-control"
                maxlength="90"
                id="exampleFormControlTextarea1"
                rows="3"
                name="descripcion"
                value={this.state.descripcion}
                onChange={(e) => this.handleChange(e)}
              ></textarea>
              <small className="form-text text-muted">
                Introduce una descripcion de tu producto(máximo 90 caracteres)
            </small>
            </div>
            <div className="form-group">
              <label>Precio*</label>
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
              <label>Ingredientes*</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="ingredientes"
                value={this.state.ingredientes}
                onChange={(e) => this.handleChange(e)}
              />
              <small className="form-text text-muted">
                Introducir los ingredientes principales
            </small>
            </div>
            
            <UploadImage handleImageChange={this.handleImageChange} fieldName="imageUrl"/>
            <small className="form-text text-muted">
                *Campos obligatorios
            </small>
            <Modal.Footer>
            
              <button className="btn boton-form" type="submit" >
                Guardar
          </button>
            </Modal.Footer>

          </form>
        </div>
      </Modal>
    );
  }
}

export default AddProducto;

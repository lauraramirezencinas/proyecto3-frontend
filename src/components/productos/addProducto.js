import React, { Component } from "react";
import axios from "axios";

export class addProducto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      descripcion: "",
      precio: "",
      ingredientes: "",
      imagenUrl: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    const { nombre, descripcion, precio, ingredientes } = this.state;
    axios
      .post(
        "http://localhost:3000/producto",
        nombre,
        descripcion,
        precio,
        ingredientes
      )
      .then((prodcuto) => {
        this.setState({
          nombre: "",
          descripcion: "",
          precio: "",
          ingredientes: "",
        })
      });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title-form">Producto</h1>
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
          <button class="btn boton-form" type="submit">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default addProducto;

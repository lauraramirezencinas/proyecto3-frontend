import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import UploadImage from "../productos/UploadImage";

export class FormBaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreNegocio: "",
      descripcion: "",
      calleNumero: "",
      //numero: "",
      ciudad: "",
      horario: "",
      logoUrl: "",
      facebook: "",
      instagram: "",
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleImageChange = (file) => {
    this.setState({logoUrl:file})
	};

  handleFormSubmit = (event) => {
    let loggedInUser = JSON.parse(localStorage.getItem("user"));
    console.log(loggedInUser._id);
    event.preventDefault();

    const baker = new FormData();
    baker.append('nombreNegocio', this.state.nombreNegocio);
    baker.append('descripcion', this.state.descripcion);
    baker.append('calleNumero', this.state.calleNumero);
    //baker.append('numero', this.state.numero);
    baker.append('ciudad', this.state.ciudad);
    baker.append('horario', this.state.horario);
    baker.append('logoUrl', this.state.logoUrl);
    
   
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/api/usuario/${loggedInUser._id}`,baker,
        {headers: { 'content-type': 'multipart/form-data' }, 
        withCredentials: true}
      )
      .then((response) => {
        this.props.getUser(response.data.user);
        this.setState({ redirect: true });
      });
  };



  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/profile" />;
    }
  };

  render() {
    return (
      <div className="container mt-50 mb-100">
        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
          <h1 className="title-form">Panderia</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label className="label-form">Nombre del Negocio*</label>
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
              <label className="label-form">Descripción*</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="descripcion"
                value={this.state.descripcion}
                onChange={(e) => this.handleChange(e)}
              ></textarea>
              <small className="form-text text-muted">
                Introduce una descripcion de tu panaderia
            </small>
            </div>
            <h4 className="direccion">Dirección*</h4>
            <div className="form-group">
              <label className="label-form">Calle, Numero y Ciudad</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="calleNumero"
                value={this.state.calleNumero}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label className="label-form">Horario</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="horario"
                value={this.state.horario}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <UploadImage handleImageChange={this.handleImageChange} fieldName="logoUrl"/>
            <button class="btn boton-form" type="submit" userUpdate={this.updateProfile}>
              Guardar
          </button>

            {this.renderRedirect()}
          </form>
        </div>

      </div>
    );
  }
}

export default FormBaker;

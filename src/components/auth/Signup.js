import React, { Component } from "react";
import AuthService from "../../auth/auth-service";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      isBaker: false,
      redirect: false,
    };
    this.service = new AuthService();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { nombre, apellido, email, password, isBaker } = this.state;
    this.service
      .signup(nombre, apellido, email, password, isBaker)
      .then((response) => {
        this.props.getUser(response);
        this.setState({
          nombre: "",
          apellido: "",
          email: "",
          password: "",
          isBaker: response.isBaker,
          redirect: true,
        });
      })
      .catch((error) => console.log(error));
  };

  renderRedirect = () => {
    if (this.state.redirect === true && this.state.isBaker === false) {
      return <Redirect to="/" />;
    } else if (this.state.redirect === true && this.state.isBaker === true) {
      let id = this.props.getUser.id;
      return <Redirect to="/formbaker" />;
    }
  };

  render() {
    return (      
        <div className="container">
          <form onSubmit={this.handleFormSubmit}>
            <div className="mt-30">
              <h4 className="title-form">Registrate</h4>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={this.state.nombre}
                onChange={(e) => this.handleChange(e)}
                aria-describedby="emailHelp"
                placeholder="Introduce tu nombre"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="apellido"
                value={this.state.apellido}
                onChange={(e) => this.handleChange(e)}
                aria-describedby="emailHelp"
                placeholder="Introduce tu apellido"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={(e) => this.handleChange(e)}
                aria-describedby="emailHelp"
                placeholder="Introduce tu email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
                placeholder="Password"
              />
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                name="isBaker"
                onChange={(e) => this.handleChange(e)}
                value="true"
              />
              <label
                className="form-check-label"
                for="exampleCheck1"
                
              >
                Soy una panaderia{" "}
              </label>
            </div>
            <button className="btn boton-form" type="submit">Registrame</button>
            <div className="mt-30">
              <p>¿Ya tienes una cuenta?</p>
              <Link to={"/login"}> Login</Link>
            </div>
            {this.renderRedirect()}
          </form>
        </div>
    );
  }
}

export default Signup;

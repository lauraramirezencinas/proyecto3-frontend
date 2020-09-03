import React, { Component } from "react";
import AuthService from "../../auth/auth-service";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    console.log("hola");
    const { email, password } = this.state;
    this.service
      .login(email, password)
      .then((response) => {
        this.props.getUser(response);
        this.setState({
          email: "",
          password: "",
          redirect: true,
        });
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  renderRedirect = () => {
    if (this.state.redirect === true) {
      return <Redirect to="/profile" />;
    }
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <div className="mt-30">
            <h4 className="title-form"> Inicia sesión</h4>
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
          <button class="btn boton-form" type="submit">
            Log in
          </button>

          <div className="mt-30">
            <p>¿No tienes una cuenta?</p>
            <Link to={"/signup"}> Registrate</Link>
          </div>

          {this.renderRedirect()}
        </form>
      </div>
    );
  }
}

export default Login;

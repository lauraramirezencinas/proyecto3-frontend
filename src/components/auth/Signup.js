import React, { Component } from 'react'
import AuthService from '../../auth/auth-service';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            isBaker: false,
            redirect: false
        };
        this.service = new AuthService();
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { nombre, apellido, email, password, isBaker } = this.state;
        this.service.signup(nombre, apellido, email, password, isBaker)
            .then(response => {
                this.setState({
                    nombre: '',
                    apellido: '',
                    email: '',
                    password: '',
                    isBaker: response.isBaker,
                    redirect: true

                })
                this.props.getUser(response)


            })
            .catch(error => console.log(error))
    }

    renderRedirect = () => {
        if (this.state.redirect === true && this.state.isBaker === false) {
            return <Redirect to='/' />
        } else if (this.state.redirect === true && this.state.isBaker === true) {
            let id = this.props.getUser.id
            return <Redirect to="/formbaker" />
        }
    }


    render() {

        return (
            <div className="signup">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="col-xs-12 col-sm-6 col-md-8 mt-30">
                        <h4 className="title-form" >Registrate</h4>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" name="nombre"
                            value={this.state.nombre} onChange={e => this.handleChange(e)}
                            aria-describedby="emailHelp" placeholder="Introduce tu nombre" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" name="apellido"
                            value={this.state.apellido} onChange={e => this.handleChange(e)}
                            aria-describedby="emailHelp" placeholder="Introduce tu apellido" />
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" name="email"
                            value={this.state.email} onChange={e => this.handleChange(e)}
                            aria-describedby="emailHelp" placeholder="Introduce tu email" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={this.state.password}
                            onChange={e => this.handleChange(e)} placeholder="Password" />
                    </div>

                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1" name="isBaker" 
                        onChange={e => this.handleChange(e)} value="true" >Soy una panaderia  </label>
                    </div>

                   
                    <div className="col-xs-12 col-sm-6 col-md-8 ">
                        <input className="boton-form" type="submit" value="Registrame" />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-8 mt-30">
                        <p>¿Ya tienes una cuenta?</p>
                        <Link to={"/login"}> Login</Link>
                    </div>
                    {this.renderRedirect()}
                </form>

            </div>
        )
    }
}

export default Signup

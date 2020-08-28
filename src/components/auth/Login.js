import React, { Component } from 'react';
import AuthService from '../../auth/auth-service';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';


export class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
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
        const { email, password } = this.state;
        this.service.login(email, password)
            .then(response => {
                this.setState({
                    email: '',
                    password: '',
                    redirect: true
                })
                this.props.getUser(response)
            })
            .catch(error => console.log(error))
    }
    renderRedirect = () => {
        if(this.state.redirect){
            return <Redirect to= '/profile'/>
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit} className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-8">
                            <h4>Inicia sesión con correo electrónico</h4>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <label>Email:</label>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <input type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <label>Password:</label>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <input name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <input type="submit" value="Entrar" />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-8 ">
                            <p>¿No tienes una cuenta?</p>
                            <Link to={"/signup"}> Sign up</Link>
                        </div>
                    </div>
                    {this.renderRedirect()}
                </form>

            </div>
        )
    }
}

export default Login

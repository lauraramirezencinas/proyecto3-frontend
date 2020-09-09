import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import EditProfile from '../profile/EditProfile';


export class Bakery extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // nombre: this.props.user.nombre,
            // apellido: this.props.user.apellido,
            // email: this.props.user.email,
            // nombreNegocio: this.props.user.nombreNegocio,
            // descripcion: this.props.user.descripcion,
            // calle: this.props.user.direccion.calle,
            // numero: this.props.user.direccion.numero,
            // ciudad: this.props.user.direccion.ciudad,
            // horario: this.props.user.horario,
            // logoUrl: this.props.user.logoUrl,
            // facebook: this.props.user.facebook,
            // instagram: this.props.user.instagram,
            modalOpen: false
        }
        this.openModal = this.openModal.bind();
        this.closeModal = this.closeModal.bind();
    }
    openModal = () => {
        this.setState({
            modalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }


    // componentDidMount(){
    //     axios.get(`http://localhost:3000/usuario/${this.props.user._id}`)
    //     .then(response=>{
    //         console.log("usuario", response.data)
    //         this.setState({ nombre: response.data.nombre,
    //             apellido: response.data.apellido, 
    //             email: response.data.email, 
    //             nombreNegocio: response.data.nombreNegocio,
    //             descripcion: response.data.descripcion, 
    //             calle: response.data.direccion.calle, 
    //             numero: response.data.direccion.numero,
    //             ciudad: response.data.direccion.ciudad, 
    //             horario: response.data.horario, 
    //             logoUrl: response.data.logoUrl,
    //             facebook: response.data.facebook,
    //             instagram: response.data.instagram, })

    //     })
    // }

    render() {
        let bakery = "";

        if (this.props.user) {
            if (this.props.profile) {
                bakery =
                    <>
                        <div className="col-xs-12 col-md-4 mt-20">
                            <img src={this.props.user.logoUrl} className="img-perfil rounded-circle" alt="logo" />
                        </div>
                        {/* <div className="col-xs-12 col-md-4 mt-20">
                            <p className="bak-campos">NOMBRE:  <span className="bak-val">{this.state.nombre}</span></p>
                            <p className="bak-campos">APELLIDO:  <span className="bak-val">{this.state.apellido}</span></p>
                            <p className="bak-campos">EMAIL: <span className="bak-val">{this.state.email}</span></p>
                            <p className="bak-campos">DIRECCÓN: <span className="bak-val">{this.state.calle} {this.state.numero} </span></p>
                            <p className="bak-campos">CIUDAD: <span className="bak-val">{this.state.ciudad}</span></p>
                            <p className="bak-campos">NOMBRE DE LA PANADERIA:  <span className="bak-val">{this.state.nombreNegocio}</span></p>
                            <p className="bak-campos">DESCRIPCION:  <span className="bak-val">{this.state.descripcion}</span></p>
                            <p className="bak-campos">HORARIO:  <span className="bak-val">{this.state.horario}</span></p>
                            <Button className="boton-editar" variant="primary" onClick={this.openModal}>Editar perfil</Button>
                            <EditProfile user={this.props.user} show={this.state.modalOpen} onHide={() => this.closeModal()}/>
                        </div> */}
                        <div className="col-xs-12 col-md-4 mt-20">
                            <p className="bak-campos">NOMBRE:  <span className="bak-val">{this.props.user.nombre}</span></p>
                            <p className="bak-campos">APELLIDO:  <span className="bak-val">{this.props.user.apellido}</span></p>
                            <p className="bak-campos">EMAIL: <span className="bak-val">{this.props.user.email}</span></p>
                            <p className="bak-campos">DIRECCÓN: <span className="bak-val">{this.props.user.direccion.calle} {this.props.user.direccion.numero} </span></p>
                            <p className="bak-campos">CIUDAD: <span className="bak-val">{this.props.user.direccion.ciudad}</span></p>
                            <p className="bak-campos">NOMBRE DE LA PANADERIA:  <span className="bak-val">{this.props.user.nombreNegocio}</span></p>
                            <p className="bak-campos">DESCRIPCION:  <span className="bak-val">{this.props.user.descripcion}</span></p>
                            <p className="bak-campos">HORARIO:  <span className="bak-val">{this.props.user.horario}</span></p>
                            <Button className="boton-editar" variant="primary" onClick={this.openModal}>Editar perfil</Button>
                            <EditProfile user={this.props.user} getUser={this.props.getUser} show={this.state.modalOpen} onHide={() => this.closeModal()}/>
                        </div>
                    </>
            } else {
                bakery =
                    <>
                        <div className="col-xs-12 col-md-4 mt-20">
                            <img src={this.props.user.logoUrl} className="img-perfil rounded-circle" alt="logo" />
                        </div>
                        <div className="col-xs-12 col-md-4 mt-20">
                            <p className="bak-campos">NOMBRE:  <span className="bak-val">{this.props.user.nombreNegocio}</span></p>
                            <p className="bak-campos">DESCRIPCION:  <span className="bak-val">{this.props.user.descripcion}</span></p>
                            <p className="bak-campos">DIRECCÓN: <span className="bak-val">{this.props.user.direccion.calle} {this.props.user.direccion.numero} </span></p>
                            <p className="bak-campos">CIUDAD: <span className="bak-val">{this.props.user.direccion.ciudad}</span></p>
                            <p className="bak-campos">HORARIO:  <span className="bak-val">{this.props.user.horario}</span></p>
                        </div>
                    </>
            }
        }
        return (
            <div className="row container" >
                {bakery}
            </div>
        )
    }
}

export default Bakery

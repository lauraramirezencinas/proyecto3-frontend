import React, { Component } from 'react';
import { Button } from "react-bootstrap";

export class Bakery extends Component {
    render() {
        let bakery = "";

        if (this.props.user) {
            bakery =
                <>
                    <p className="bak-campos">NOMBRE:<span className="bak-val">{this.props.user.nombre}</span></p>
                    <p className="bak-campos">APELLIDO:<span className="bak-val">{this.props.user.apellido}</span></p>
                    <p className="bak-campos">EMAIL: <span className="bak-val">{this.props.user.email}</span></p>
                    <p className="bak-campos">DIRECCÓN: <span className="bak-val">{this.props.user.direccion.calle}{this.props.user.direccion.numero} </span></p>
                    <p className="bak-campos">CUIDAD: <span className="bak-val">{this.props.user.direccion.cuidad}</span></p>
                    <p className="bak-campos">NOMBRE DE LA PANADERIA:<span className="bak-val">{this.props.user.nombreNegocio}</span></p>
                    <p className="bak-campos">DESCRIPCCION:<span className="bak-val">{this.props.user.descripcion}</span></p>
                    <p className="bak-campos">HORARIO:<span className="bak-val">{this.props.user.horario}</span></p>
                    <Button className="boton-editar" variant="primary">Editar</Button>
                </>
        } else {
            bakery =
                <>
                    <p className="bak-campos">NOMBRE:<span className="bak-val">{this.props.user.nombreNegocio}</span></p>
                    <p className="bak-campos">DESCRIPCCION:<span className="bak-val">{this.props.user.descripcion}</span></p>
                    <p className="bak-campos">DIRECCÓN: <span className="bak-val">{this.props.user.direccion.calle}{this.props.user.direccion.numero} </span></p>
                    <p className="bak-campos">CUIDAD: <span className="bak-val">{this.props.user.direccion.cuidad}</span></p>
                    <p className="bak-campos">HORARIO:<span className="bak-val">{this.props.user.horario}</span></p>
                </>
        }

        return (
            <div className="row">
                <div className="col-xs-12 col-md-4">
                    <img src={this.props.user.logoUrl} className="img-perfil rounded-circle" />
                </div>
                <div className="col-xs-12 col-md-4">
                    {bakery}
                    
                </div>

            </div>
        )
    }
}

export default Bakery

import React, { Component } from 'react';
import axios from 'axios';
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import Item from './Item';
function timeConversion(millisec) {

    var seconds = (millisec / 1000).toFixed(0);

    var minutes = (millisec / (1000 * 60)).toFixed(0);

    var hours = (millisec / (1000 * 60 * 60)).toFixed(0);

    var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(0);

    if (seconds < 60) {
        return seconds + " Segundos";
    } else if (minutes < 60) {
        return minutes + " Min";
    } else if (hours < 24) {
        return hours + " Horas" +  ", " + minutes%60 + " minutos";
    } else {
        return days + " Días" +  ", " + hours%24 + " horas"
    }
}
export class Pedido extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: this.props.pedido.status
        }
    }

    handleChange = async (event) => {
        await this.setState({ status: event.target.value })
        this.handleFormSubmit(event)
    };


    handleFormSubmit = async (event) => {
        // event.preventDefault();
        const status = this.state.status
        axios.patch(`${process.env.REACT_APP_API_URL}/api/pedido/${this.props.pedido._id}`,
            { status: status }, { withCredentials: true })
            .then(res => {
                console.log(res.data)         
            })
    }

    render() {
        const listaStatus = [
            { name: "Nuevo", value: "Nuevo" },
            { name: "Preparacion", value: "EnPreparacion" },
            { name: "Finalizado", value: "Finalizado" },
            { name: "Entregado", value: "Entregado" },
            { name: "Cancelado", value: "Cancelado" }
        ]

        const pintarLista = listaStatus.map((status, idx) =>
            <ToggleButton
                key={idx}
                className="toggle nuevo "
                type="radio"
                variant="secondary"
                name="status"
                value={status.value}
                checked={this.state.status === status.value}
                onChange={(e) => this.handleChange(e)}
            >
                {status.name}
            </ToggleButton>
        )


        const detallePedido = this.props.pedido.items.map(infoPedido =>
            <Item key={infoPedido._id} infoPedido={infoPedido} />)

        let date1 = Date.parse(this.props.pedido.created_at)
        var date2 = new Date();
        var ms = date2 - date1; // Miliseconds
        var tiempo = timeConversion(ms);
        
        return (
            <div className="pedido-baker">
                <div className="container  mb-50 mt-30">
                    <div className="row">
                        <div className="col">
                            <p className="numero-pedido">Pedido Numero {this.props.pedido.numeroPedido} </p>
                        </div>
                        <div className="col">
                            <p className="fecha">Hace {tiempo} </p>
                        </div>
                    </div>

                    <div className=" row">
                        <div className="col">
                            <p className="datos">Nombre: {this.props.pedido.nombre} </p>
                        </div>
                        <div className="col">
                            <p className="datos">Telefono: {this.props.pedido.telefono}</p>
                        </div>
                    </div>
                    <p className="fecha">Entregar en:  {this.props.pedido.recogida} </p>
                    <p className="detalles">Detalles del pedido:</p>
                    {detallePedido}
                    <p className="precio-total">Total:{this.props.pedido.precioTotal}€</p>
                    <p> Estado:{this.state.status}</p>
                    <ButtonGroup vertical toggle>
                        {pintarLista}
                    </ButtonGroup>

                </div>
            </div>
        )
    }
}

export default Pedido

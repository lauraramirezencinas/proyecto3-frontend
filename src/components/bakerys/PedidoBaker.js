import React, { Component } from 'react';
import axios from 'axios';
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import Item from './Item';

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
        event.preventDefault();
        const status = this.state.status
        axios.patch(`${process.env.REACT_APP_API_URL}/pedido/${this.props.pedido._id}`,
            { status: status }, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                let url = "/pedidos/"
                window.location.href = url;
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
                className="toggle "
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

        return (
            <div className="pedido-baker">
                <div className="container  mb-50 mt-30">
                    <div className="row">
                        <div className="col">
                            <p className="numero-pedido">Pedido Numero {this.props.pedido.numeroPedido} </p>
                        </div>
                        <div className="col">
                            <p className="fecha">{this.props.pedido.created_at} </p>
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

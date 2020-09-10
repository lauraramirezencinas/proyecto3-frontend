import React, { Component } from 'react';
import Articulo from './Articulo';
import { Button } from "react-bootstrap";
import TramitarPedido from './TramitarPedido';



export class Pedido extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            items: [],
        }
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

    render() {

        let pedidos = []
        let total = 0;
        for (let key in this.props.pedido) {
            if (this.props.pedido.hasOwnProperty(key)) {
                total += this.props.pedido[key]["precio"] *this.props.pedido[key]["quantity"]
                pedidos.push({
                    producto_id: key,
                    quantity: this.props.pedido[key]["quantity"],
                    precio: this.props.pedido[key]["precio"],
                    nombre: this.props.pedido[key]["nombre"], 
                    idUsuario: this.props.pedido[key]["idUsuario"]
                })
            }

        }

        let items = pedidos.map((producto) =>
            <Articulo key={producto.producto_id} id={producto.producto_id} prod={producto}  />)

        console.log("pedidos", pedidos)

        return (
            <div>
                <h1 className="tit-pedido">Pedido</h1>
                {items}
                <div className="row total">
                    <div className="col">
                        <p className="precioTotal">TOTAL: {total} €</p>
                    </div>
                    <div className="col">
                        <Button className="btn-tramitar" variant="primary" onClick={this.openModal} >
                            Tramitar Pedido
                        </Button>
                    </div>

                </div>

                <TramitarPedido show={this.state.modalOpen} onHide={() => this.closeModal()}
                    pedidos={pedidos} precioFinal={total} />
 
            </div>
        )
    }
}

export default Pedido

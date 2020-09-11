import React, { Component } from 'react'

export class Item extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    < div className="col">
                        <p>{this.props.infoPedido.nombre}</p>
                    </div>
                    < div className="col">
                        <p>Precio: {this.props.infoPedido.precio}</p>
                    </ div>
                    < div className="col">
                        <p>Cantidad: {this.props.infoPedido.cantidad}</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Item

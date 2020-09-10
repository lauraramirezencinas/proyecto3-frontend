import React, { Component } from 'react'

export class Pedido extends Component {
    render() {
        return (
            <div>
                <p>Pedido Numero {this.props.pedido.numeroPedido}</p>
            </div>
        )
    }
}

export default Pedido

import React, { Component } from 'react'
import Articulo from './Articulo'

export class Pedido extends Component {

   
    render() {
        let pedidos = []
        for (var key in this.props.pedido) {
            if (this.props.pedido.hasOwnProperty(key)) {     
                pedidos.push({
                    producto_id:key,
                    quantity:this.props.pedido[key]
                })
            }
        }
        
         let items= pedidos.map((producto)=>
         <Articulo key={producto.producto_id} id={producto.producto_id} qte={producto.quantity} />)
        
        return (
            <div>
                <h1>Pedido</h1>
              {items}
            </div>
        )
    }
}

export default Pedido

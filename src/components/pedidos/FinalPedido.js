import React, { Component } from 'react'
import axios from 'axios'

export class FinalPedido extends Component {

    constructor(props){
        super(props)
        this.state={
            pedido:{}
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/pedido/' + this.props.match.params.id, { withCredentials: true })
        .then(response=>{
            this.setState({
                pedido: response.data[0]
            })
            console.log(response.data)
        })
    }

    render() {
        
        return (
            <div className="container fin-pedido">
                
                Gracias {this.state.pedido.nombre} por realizar tu pedido.
                <br></br>
                Tu pedido es el numero <b>{this.state.pedido.numeroPedido}</b>.
                <br></br>
                Lo podras recoger en {this.state.pedido.recogida}.
                
                
            </div>
        )
    }
}

export default FinalPedido

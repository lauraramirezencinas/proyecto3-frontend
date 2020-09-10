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
            <div>
                <h1>
                Gracias por tu compra {this.state.pedido.nombre}
                <br></br>
                Tu pedido es el numero {this.state.pedido.numeroPedido}
                </h1>
                
            </div>
        )
    }
}

export default FinalPedido

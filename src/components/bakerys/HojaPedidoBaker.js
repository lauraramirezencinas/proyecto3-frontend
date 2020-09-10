import React, { Component } from 'react';
import axios from 'axios';
import PedidoBaker from './PedidoBaker';

export class HojaPedidoBaker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pedidos: [],

        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/pedido/all/'+ "?time=" + new Date().valueOf(), { withCredentials: true })
            .then(response => {
                console.log("pedidos", response.data)
                this.setState({ pedidos: response.data })
                
            })
            .catch(err=>{
                console.log(err)
            })
    }


    render() {
        const pedidosTodos = this.state.pedidos.map((pedido) => 
            <PedidoBaker key={pedido._id}  pedido={pedido}/>)
    

        return (
            <div className="container ">
                {pedidosTodos}
            </div>

        )
    }
}

export default HojaPedidoBaker


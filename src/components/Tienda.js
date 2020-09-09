import React, { Component } from 'react'
import Bakery from './bakerys/Bakery'
import axios from 'axios'
import ProductsGrid from './productos/ProductsGrid'
import Pedido from './pedidos/Pedido'



export class Tienda extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:null, 
            pedido:{}
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/usuario/' + this.props.match.params.id, { withCredentials: true })
                .then(response => {
                    this.setState({ user: response.data })
    
                })
    }

    modifyItem=(itemId, quantity)=>{
        let pedido = this.state.pedido
        pedido[itemId] = quantity
        this.setState({
            pedido:pedido
        })
        
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <h1 className="mt-30 perfil">Tienda</h1>
                 <Bakery user={this.state.user} /> 
                 <ProductsGrid userId={this.props.match.params.id} modifyItem={this.modifyItem}/> 
                 <Pedido pedido={this.state.pedido} />
                
            </div>
        )
    }
}

export default Tienda

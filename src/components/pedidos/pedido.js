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

    totalPedido = (producto, qte)=> {
        let item ={
            producto:producto,
            qte:qte
        }
        let found = false;
        for (let i=0;i<this.state.items.length && !found;++i){
            let itemi = this.state.items[i];
            if (itemi.producto._id == producto._id){
                found = true;
                this.state.items[i].qte=qte;
                this.state.items[i].producto=producto;
            }
        }
        if (!found && producto._id){
            this.state.items.push(item);
        }
        console.log("items", this.state.items)
    
    }

   
    

    render() {
        
        let pedidos = []
        for (let key in this.props.pedido) {
            if (this.props.pedido.hasOwnProperty(key)) {
                pedidos.push({
                    producto_id: key,
                    quantity: this.props.pedido[key]
                })
            }
            
        }

        let items = pedidos.map((producto) =>
            <Articulo key={producto.producto_id} id={producto.producto_id} qte={producto.quantity} totalpedido={this.totalPedido} />)

        let total= this.state.items.map(item=>{ 

        })
        
        
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

                <TramitarPedido show={this.state.modalOpen} onHide={() => this.closeModal() } 
                items={this.state.items} />
            </div>
        )
    }
}

export default Pedido

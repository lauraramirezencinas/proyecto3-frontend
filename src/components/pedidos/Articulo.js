import React, { Component } from 'react';
import axios from "axios";


export class Articulo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            producto: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/producto/' + this.props.id, { withCredentials: true })
            .then(response => {
                this.setState({
                    producto: response.data                
                })           
            })
            
    }

    refresh = ()=>{
        this.props.totalpedido(this.state.producto, this.props.qte )
    }

    render() {
        
        this.refresh()
        let total = this.state.producto.precio * this.props.qte
        let producto = ""
        if (this.props.qte === 0) {
            producto = ""
        } else {
            producto =
                <div className="row articulo">
                    <div className="col">
                    {this.props.qte} x {this.state.producto.nombre}
                    </div>
                    <div className="col">
                        Precio: {this.state.producto.precio}€
                    </div>
                    <div className="col">
                        Total: {total}€
                    </div>
                </div>
        }

        return (
            <div className="">
                {producto}             
            </div>

        )
    }
}

export default Articulo

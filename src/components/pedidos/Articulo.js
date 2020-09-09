import React, { Component } from 'react';
import axios from "axios";


export class Articulo extends Component {
    
    constructor(props){
        super(props)
        this.state={
            producto:{}
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/producto/'+ this.props.id , { withCredentials: true })
        .then(response=>{
            console.log(response.data )
            this.setState({
                producto:response.data 
            })
        })

    }


    render() {
        let total = this.state.producto.precio * this.props.qte
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                    {this.state.producto.nombre}
                    </div>
                    <div className="col">
                    Precio: {this.state.producto.precio}
                    </div>
                    <div className="col">
                    Cantidad: {this.props.qte}
                    </div>
                    <div className="col">
                    Total: {total}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Articulo

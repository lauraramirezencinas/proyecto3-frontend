import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import ProductCard from "./ProductCard";

class ProductsGrid extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productos: []
        }
    }

    componentDidMount() {
        if (this.props.profile){
        axios.get('http://localhost:3000/producto/profile/', { withCredentials: true })
            .then(response => {
                console.log("prodcut", response.data)
                this.setState({ productos: response.data })

            })
        } else {
            axios.get('http://localhost:3000/producto/all/')
            .then(response => {
                console.log("prodcut", response.data)
                this.setState({ productos: response.data })

            })
        }
    }

    render() {
        const productosTodos = this.state.productos.map((producto) => <ProductCard key={producto._id} producto={producto} editable={this.props.editable}/>);

        return (
            
                <div className="card-columns grid">

                    {productosTodos}
                </div>

        

        )
    }

}

export default ProductsGrid

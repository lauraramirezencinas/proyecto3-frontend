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
        axios.get('http://localhost:3000/producto/all/', { withCredentials: true })
            .then(response => {
                console.log("prodcut", response.data)
                this.setState({ productos: response.data })

            })
    }

    render() {
        const productosTodos = this.state.productos.map((producto) => <ProductCard producto={producto}/>);

        return (
            <div>
                {productosTodos}
            </div>

        )
    }

}

export default ProductsGrid

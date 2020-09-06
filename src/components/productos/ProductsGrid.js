import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import ProductCard from "./ProductCard";
import Busqueda from "../Busqueda";

class ProductsGrid extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productos: []
        }
    }

    refresh() {
        if(this.props.productos && this.props.productos.length!=0){
            this.setState({ productos: this.props.productos })
        }
        else if (this.props.profile) {
            axios.get('http://localhost:3000/producto/profile/', { withCredentials: true })
                .then(response => {
                    console.log("prodcut", response.data)
                    this.setState({ productos: response.data })

                })
        } else {
            if (this.props.userId) {
                axios.get('http://localhost:3000/producto/all/?user_id=' + this.props.userId)
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
    }

    componentDidUpdate(prevProps) {
        if (prevProps.productos !== this.props.productos) {
          this.refresh()
        }
      }

    componentDidMount() {
        this.refresh()
    }

    

    render() {
        const productosTodos = this.state.productos.map((producto) => <ProductCard key={producto._id} producto={producto} editable={this.props.editable} isStore={this.props.userId!=null}/>);

        return (
            
            <div className="card-columns container grid mt-40">
                {productosTodos}
            </div>



        )
    }

}

export default ProductsGrid
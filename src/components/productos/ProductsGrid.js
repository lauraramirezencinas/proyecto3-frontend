import React, { Component } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";


class ProductsGrid extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productos: [],
            
        }
    }


refresh() {
    if (this.props.productos && this.props.productos.length != 0) {
        this.setState({ productos: this.props.productos })
    }
    else if (this.props.profile) {
        axios.get(`${process.env.REACT_APP_API_URL}/api/producto/profile/`, { withCredentials: true })
            .then(response => {
                
                this.setState({ productos: response.data })

            })
    } else {
        if (this.props.userId) {
            axios.get(`${process.env.REACT_APP_API_URL}/api/producto/all/?user_id=` + this.props.userId)
                .then(response => {
                    
                    this.setState({ productos: response.data })

                })
        } else {

            axios.get(`${process.env.REACT_APP_API_URL}/api/producto/all/`+ "?time=" + new Date().valueOf())
                .then(response => {
                   
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
    const productosTodos = this.state.productos.map((producto) =>
        <ProductCard key={producto._id} producto={producto} editable={this.props.editable}
            isStore={this.props.userId != null} modifyItem={this.props.modifyItem}/>);

    return (

        <div className="card-columns container grid mt-40">
            {productosTodos}
        </div>



    )
}

}

export default ProductsGrid

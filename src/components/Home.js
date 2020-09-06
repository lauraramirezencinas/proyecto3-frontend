import React, { Component } from 'react';
import Busqueda from './Busqueda';
import ProductsGrid from './productos/ProductsGrid';



export class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productos: []
        }
    }

    changeProducts = (products) => {
        this.setState({
            productos: products
        })
    }
    
    
    render() {
        const  editable=false;
        const  profile=false;
        return (
            <div>
              <Busqueda changeProducts={this.changeProducts} />
              <ProductsGrid  editable={editable} profile={profile} productos={this.state.productos}/>
            </div>
        )
    }
}

export default Home

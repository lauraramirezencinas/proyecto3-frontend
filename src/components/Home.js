import React, { Component } from 'react';
import Busqueda from './Busqueda';
import ProductsGrid from './productos/ProductsGrid';



export class Home extends Component {

    
    
    render() {
        const  editable=false;
        const  profile=false;
        return (
            <div>
              <Busqueda />
              <ProductsGrid  editable={editable} profile={profile}/>
            </div>
        )
    }
}

export default Home

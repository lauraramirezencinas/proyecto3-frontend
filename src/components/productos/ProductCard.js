import React, { Component } from "react";
import axios from "axios";
import { Card, Button} from "react-bootstrap";

class ProductCard extends Component  {

    constructor(props){
        super(props)
        // this.state = {
        //     nombre: "",
        //     descripcion: "",
        //     precio: "",
        //     ingredientes: "",
        //     imagenUrl: "",
        // }
    }

    // componentDidMount(){
    //     axios.get('http://localhost:3000/producto/all/', { withCredentials: true })
    //         .then(response => {
    //             console.log("prodcut",response.data)
    //             this.setState(response.data)

    //         })
    // }

    render(){

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.producto.nombre}</Card.Title>
                    <Card.Text>
                        {this.props.producto.descripcion}
                    </Card.Text>
                    <Button variant="primary">Editar</Button>
                </Card.Body>
            </Card>
        )
    }
    
}

export default ProductCard

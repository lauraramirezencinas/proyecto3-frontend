import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class ProductCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        console.log("RENDERR")
        let editar = "";
        if (this.props.editable) {

            editar = <div>
                <Button className="boton" variant="primary">Editar</Button>
                <Card.Text>
                    Descripción: {this.props.producto.descripcion}
                    <br />
                        Ingredientes:{this.props.producto.ingredientes}
                </Card.Text>
            </div>
        }
        else {
            editar= <p>{this.props.producto.ingredientes}</p>
            
        console.log("BAKER NAME " + this.props.producto.bakerName )
        }

        return (
            <Card  >
                <Card.Body className="productCard">
                    <Card.Img className="img-productCard" variant="top" src={this.props.producto.imagenUrl} />
                    <div className="row">
                        <div className="col-8">
                            <Card.Title>{this.props.producto.nombre}</Card.Title>
                        </div>
                        <div className="col-4">
                            <p>{this.props.producto.precio} €</p>
                        </div>
                    </div>

                    {editar}
                </Card.Body>
            </Card>
        )
    }

}

export default ProductCard

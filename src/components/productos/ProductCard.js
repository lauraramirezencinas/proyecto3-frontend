import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class ProductCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
    
        let editar = "";
        if (this.props.editable) {

            editar = <div>
                <Button className="boton-editar" variant="primary">Editar</Button>
                <Button className="boton-borrar" variant="primary">Borrar</Button>
                <Card.Text>
                    Descripción: {this.props.producto.descripcion}
                    <br />
                        Ingredientes:{this.props.producto.ingredientes}
                </Card.Text>
            </div>
        }
        else {
            editar= <>
            <p>{this.props.producto.idUsuario.nombreNegocio}</p>
            <p>{this.props.producto.idUsuario.direccion.cuidad}</p>
            </>
        }

        return (
            <Card  >
                <Card.Body className="productCard">
                    <Card.Img className="img-productCard" variant="top" src={this.props.producto.imagenUrl} />
                    <div className="row">
                        <div className="col-8 ">
                            <Card.Title className="nombre-producto">{this.props.producto.nombre}</Card.Title>
                        </div>
                        <div className="col-4">
                            <p className="precio">{this.props.producto.precio} €</p>
                        </div>
                    </div>

                    {editar}
                </Card.Body>
            </Card>
        )
    }

}

export default ProductCard

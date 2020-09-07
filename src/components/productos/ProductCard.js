import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
//import {useHistory } from "react-router-dom";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import EditProducto from "./EditProducto";
import axios from "axios";

class ProductCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false
        }
        this.handleClick = this.handleClick.bind();
        this.openModal = this.openModal.bind();
        this.closeModal = this.closeModal.bind();
        this.deleteProduct = this.deleteProduct.bind()
    }

    handleClick = () => {
        let id = this.props.producto.idUsuario._id
        let url = "/baker/" + id;
        window.location.href = url;
        // let history = useHistory();
        // history.push(url);       
    }

    openModal = () => {
        this.setState({
            modalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    deleteProduct = () => {
        axios.delete(`http://localhost:3000/producto/${this.props.producto._id}`)
            .then(() => {
                // this.props.history.push('/profile');   
                let url = "/profile/";
                window.location.href = url;
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        let editar = "";
        if (this.props.editable) {
            editar = <>
                <Card.Body className="productCard">
                    {/* <Card.Img className="img-productCard" variant="top" src={this.props.producto.imagenUrl} /> */}
                    <CloudinaryContext cloudName="dry1b4yex">


                    <Image className="img-cloudy" publicId={this.props.producto.imageName} height="200" width="350" crop="fill"/>
                    </CloudinaryContext>
                    <div className="container">
                        <div className="row card-row">
                            <div className="col-8 ">
                                <Card.Title className="nombre-producto">{this.props.producto.nombre}</Card.Title>
                            </div>
                            <div className="col-4">
                                <p className="precio">{this.props.producto.precio} €</p>
                            </div>
                        </div>
                        <Card.Text className="mb-30">
                            <p className="baker-card mh-100">{this.props.producto.descripcion}</p>
                            <p className="ingredients-card">{this.props.producto.ingredientes}</p>
                        </Card.Text>
                        <Button className="boton-editar" variant="primary" onClick={this.openModal}>Editar</Button>
                        <EditProducto producto={this.props.producto} show={this.state.modalOpen} onHide={() => this.closeModal()} />
                        <Button className="boton-borrar" variant="primary" onClick={this.deleteProduct}>Borrar</Button>
                       
                    </div>
                </Card.Body>
            </>
        }
        else if (this.props.isStore) {
            editar = <>
                <Card.Body className="productCard card-clik" onClick={this.handleClick}>
                    <Card.Img className="img-productCard" variant="top" src={this.props.producto.imagenUrl} />
                    <div className="container ">
                        <div className="row card-row">
                            <div className="col-8">
                                <Card.Title className="nombre-producto">{this.props.producto.nombre}</Card.Title>
                            </div>
                            <div className="col-4">
                                <p className="precio">{this.props.producto.precio} €</p>
                            </div>
                        </div>

                        <Card.Text>
                            <p className="baker-card mh-100">{this.props.producto.descripcion}</p>
             <p className="ingredients-card">{this.props.producto.ingredientes}</p>
                        </Card.Text>
                    </div>

                </Card.Body>
            </>
        }
        else {
            editar = <>
                <Card.Body className="productCard card-clik" onClick={this.handleClick}>
                    <Card.Img className="img-productCard" variant="top" src={this.props.producto.imagenUrl} />
                    <div className="container ">
                        <div className="row card-row">
                            <div className="col-8 ">
                                <Card.Title className="nombre-producto">{this.props.producto.nombre}</Card.Title>
                            </div>
                            <div className="col-4">
                                <p className="precio">{this.props.producto.precio} €</p>
                            </div>
                        </div>

                        <Card.Text>
                            <p className="baker-card mh-100">{this.props.producto.descripcion}</p>
                 <p className="ingredients-card">{this.props.producto.ingredientes}</p>
                        </Card.Text>
                        <div className="row mt-30 mb-30">
                            <div className="col-3">
                                <img src={this.props.producto.idUsuario.logoUrl} className="img-card rounded-circle" />
                            </div>
                            <div className="col-6 col-logo">
                                <p className="baker-card baker-name">{this.props.producto.idUsuario.nombreNegocio}</p>
                                <p className="baker-card">{this.props.producto.idUsuario.direccion.ciudad}</p>
                            </div>
                            <div className="col-3">
                                <img src="../images/tienda.png" className="img-tienda" />
                            </div>

                        </div>
                    </div>

                </Card.Body>
            </>
        }

        return (
            <Card className="shadow mb-5" >
                {editar}
            </Card>
        )
    }

}

export default ProductCard

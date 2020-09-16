import React, { Component } from 'react'
import Bakery from './bakerys/Bakery'
import axios from 'axios'
import ProductsGrid from './productos/ProductsGrid'
import Pedido from './pedidos/Pedido';
import FormReviews from './reviews/FormReviews';
import { Button } from "react-bootstrap";
import HojaReviews from './reviews/HojaReviews';





export class Tienda extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            pedido: {}, 
            modalOpen: false, 
            reviews:[]

        }
        this.openModal = this.openModal.bind();
        this.closeModal = this.closeModal.bind();
        this.actualizarReviews=this.actualizarReviews.bind(this)
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

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/api/usuario/` + this.props.match.params.id, { withCredentials: true })
            .then(response => {
                this.setState({ user: response.data })
            })
        this.actualizarReviews()
    }

    modifyItem = (itemId, quantity, precio, nombre, idUsuario) => {
        let pedido = this.state.pedido
        pedido[itemId] = {
            quantity:quantity,
            precio:precio,
            nombre:nombre,
            idUsuario:idUsuario
        }
        this.setState({
            pedido: pedido
        })
        console.log(pedido)

    }

    actualizarReviews(){
        axios.get(`${process.env.REACT_APP_API_URL}/api/review/`+ this.props.match.params.id + "?time=" + new Date().valueOf(), { withCredentials: true })
        .then(response=>{
            this.setState({reviews:response.data})
            
        })
        .catch(err => {
            console.log(err)
        })
    }


    render() {
        
        let pedido = ""
        if (Object.keys(this.state.pedido).length===0) {
            pedido=""
        }else{
            pedido =
                <div className="pedido">
                    <div className="container">
                        <Pedido pedido={this.state.pedido} ordenFinalizada={this.ordenFinalizada} />
                    </div>
                </div>
        }

        return (
            <div>
                <div className="container tienda mb-60">
                    <h1 className="mt-30 perfil"></h1>
                    <Bakery user={this.state.user} />
                    <ProductsGrid userId={this.props.match.params.id} modifyItem={this.modifyItem} />
                    <Button className="boton-editar reseña" variant="primary" onClick={this.openModal}>Añadir reseña</Button>
                    <FormReviews user={this.state.user} show={this.state.modalOpen} onHide={() => this.closeModal()} actualizarReviews={this.actualizarReviews}/>
                    <HojaReviews userId={this.props.match.params.id} reviews={this.state.reviews} actualizarReviews={this.actualizarReviews} />
                
                </div>
                {pedido}
            </div>
        )
    }
}

export default Tienda

import React, { Component } from 'react';
import axios from 'axios';
import { ButtonGroup, ToggleButton } from "react-bootstrap";

export class Pedido extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: this.props.pedido.status
        }
    }

    handleChange = async (event) => {
       await this.setState({status: event.target.value})
       this. handleFormSubmit(event)
    };


    handleFormSubmit =  async (event) => {
        event.preventDefault();
        const status = this.state.status
          axios.patch(`http://localhost:3000/pedido/${this.props.pedido._id}`,
            { status: status }, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                let url = "/pedidos/" 
                window.location.href = url;
            })
    }

    render() {
        const listaStatus = [
            { name:"Nuevo", value: "Nuevo" },
            { name:"Preparacion", value: "EnPreparacion" },
            { name:"Finalizado", value: "Finalizado" },
            { name:"Entregado", value: "Entregado" },
            { name:"Cancelado", value: "Cancelado" }
        ]

        const pintarLista = listaStatus.map((status, idx) =>
            <ToggleButton
                key={idx}
                className="toggle"
                type="radio"
                variant="secondary"
                name="status"
                value={status.value}
                checked={this.state.status === status.value}
                onChange={(e) => this.handleChange(e)}
                >
                {status.name}
            </ToggleButton>
        )

        return (
            <div className="container">
                <p>Pedido Numero {this.props.pedido.numeroPedido} Estado:{this.state.status} </p>
                
                <ButtonGroup vertical toggle>                
                {pintarLista}
                </ButtonGroup>
                






                {/* <form onSubmit={this.handleFormSubmit}> 
                    <div class="form-group">
                        <div className="row">
                            <div className="col">
                                <label class="mr-sm-2">Estado:{this.props.pedido.status} </label>
                            </div>
                            <div className="col">
                                <select class="custom-select mr-sm-2" name="status"
                                    value={this.state.status}
                                    onChange={(e) => this.handleChange(e)} >
                                    <option value={this.state.status} >{this.props.pedido.status}</option>
                                    <option value="EnPreparacion">En Preparacion</option>
                                    <option value="Finalizado">Finalizado</option>
                                    <option value="Recogido">Recogido</option>
                                    <option value="Cancelado">Cancelado</option>
                                </select>
                            </div>
                        </div>        
                    </div>
                    <input type="submit" value="actualizar estado"/>
                </form> */}
            </div>
        )
    }
}

export default Pedido

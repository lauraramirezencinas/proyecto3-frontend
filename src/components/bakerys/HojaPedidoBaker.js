import React, { Component } from 'react';
import axios from 'axios';
import PedidoBaker from './PedidoBaker';

export class HojaPedidoBaker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pedidos: [],
            filtroEstado: null,
            filtro: false

        }
    }

    handleChange = async (event) => {
        const { name, value } = event.target;
        await this.setState({
            [name]: value,
            filtro: true
        });
        this.actualizarPedidos()
    };

    actualizarPedidos() {
        if(this.state.filtro){
            axios.get(`${process.env.REACT_APP_API_URL}/api/pedido/all/?status=`+ this.state.filtroEstado + "&time=" + new Date().valueOf(), 
            { withCredentials: true })
                .then(response => {
                    console.log("pedidos", response.data)
                    this.setState({ pedidos: response.data })

                })
                .catch(err => {
                    console.log(err)
                })
        }else{
            axios.get(`${process.env.REACT_APP_API_URL}/api/pedido/all/` + "?time=" + new Date().valueOf(), { withCredentials: true })
                .then(response => {
                    console.log("pedidos", response.data)
                    this.setState({ pedidos: response.data })

                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

   

    componentDidMount() {
        this.actualizarPedidos()
    }


    render() {
        
        const pedidosOrdenados= this.state.pedidos.sort((a,b)=>
       {return b.numeroPedido - a.numeroPedido} )

        const pedidosTodos = pedidosOrdenados.map((pedido) =>
            <PedidoBaker key={pedido._id} pedido={pedido} />)


        return (
            <div className="" >
                <div className="container">
                    <form>
                        <div class="form-group ">
                            <div className="row mt-30">
                                <div className="col">
                                    <label class="mr-sm-2">Filtrar por estado:</label>
                                </div>
                                <div className="col-5 col-md-4 col-lg-4">
                                    <select class="custom-select sel-status" name="filtroEstado"
                                        value={this.state.filtroEstado}
                                        onChange={(e) => this.handleChange(e)} >
                                        <option value="" selected>Todos</option>
                                        <option value="Nuevo">Nuevo</option>
                                        <option value="EnPreparacion">En preparacion</option>
                                        <option value="Finalizado">Finalizado</option>
                                        <option value="Entregado">Entregado</option>
                                        <option value="Cancelado">Cancelado</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                    
                </div>
                {pedidosTodos}
            </div>

        )
    }
}

export default HojaPedidoBaker


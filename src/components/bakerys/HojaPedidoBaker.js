import React, { Component } from 'react';
import axios from 'axios';
import PedidoBaker from './PedidoBaker';
import { Alert } from 'react-bootstrap';

export class HojaPedidoBaker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            first: true,
            pedidos: [],
            filtroEstado: null,
            filtro: false,
            notification: false
        }

    }

    handleChange = async (event) => {
        const { name, value } = event.target;
        await this.setState({
            [name]: value,
            filtro: true,
            first: true
        });
        this.actualizarPedidos()
    };

    componentWillUnmount() {
        this.timer = null;
    }

    closeNotification() {
        this.setState({ notification: false })
    }

    actualizarPedidos() {
        if (this.state.filtro && this.state.filtroEstado != "all") {
                axios.get(`${process.env.REACT_APP_API_URL}/api/pedido/all/?status=` + this.state.filtroEstado + "&time=" + new Date().valueOf(),
                    { withCredentials: true })
                    .then(response => {
                        this.setState({ pedidos: response.data, first: false })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            
        } else {
            axios.get(`${process.env.REACT_APP_API_URL}/api/pedido/all/` + "?time=" + new Date().valueOf(), { withCredentials: true })
                .then(response => {
                    let total = this.state.pedidos.length
                    let newTotal = response.data.length
                    if (this.state.first || total > 0 && total < newTotal) {
                        if (!this.state.first) {
                            this.setState({ notification: true })
                        }
                        this.setState({ pedidos: response.data, first: false })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }


    componentDidMount() {
        this.timer = setInterval(() => this.actualizarPedidos(), 10000);
        this.actualizarPedidos()
    }


    render() {

        const pedidosOrdenados = this.state.pedidos.sort((a, b) => { return b.numeroPedido - a.numeroPedido })

        const pedidosTodos = pedidosOrdenados.map((pedido) =>
            <PedidoBaker key={pedido._id} pedido={pedido} />)
        let notificacion = ""
        if (this.state.notification) {
            notificacion = <Alert variant='success' onClose={() => this.closeNotification()} dismissible>
                Pedido nuevo
        </Alert>
        }



        return (
            <div className="" >
                <div className="container">
                    {notificacion}
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
                                        <option value="all" selected>Todos</option>
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


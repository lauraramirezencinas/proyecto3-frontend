import React, { Component } from 'react'
import RatingPintado from '../reviews/RatingPintado'

export class ReviewBaker extends Component {
    render() {

        let d = Date.parse(this.props.comentario.created_at)
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

        return (
            <div className="review-baker pb-40 pt-40 ">
                <div className="container">
                    <p className="fecha-re">{da} {mo} {ye}</p>
                    <div class="row">
                        <div className="col col-md-4 col-lg-3">
                            <p className="nombre-coment">Pedido: {this.props.comentario.numeroPedido}</p>
                        </div>
                        <div className="col">
                            <p>{this.props.comentario.nombre}</p>
                        </div>
                    </div>
                    <RatingPintado valor={this.props.comentario.rating} />
                    <p className="info-coment">{this.props.comentario.comentario}</p>
                </div>
            </div>

        )
    }
}

export default ReviewBaker

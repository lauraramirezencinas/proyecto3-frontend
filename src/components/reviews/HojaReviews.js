import React, { Component } from 'react';
import axios from 'axios';
import Review from './Review';

export class HojaReviews extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comentarios: [],
        }

    }



    componentDidMount(){
        //this.actualizarReviews()    
    }

    render() {
        let  comentarios= this.props.reviews.map(comentario=>
            <Review key={comentario._id} comentario={comentario}/>)
        console.log("usuario",this.props.userId)


        return (
            <div className="container ">
                <h5 className="tit-comentarios">Reseñas</h5>
                <hr></hr>
                {comentarios} 
            </div>
        )
    }
}

export default HojaReviews

import React, { Component } from 'react';
import axios from 'axios';
import ReviewBaker from './ReviewBaker';

export class HojaReviewsBaker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comentarios: [],
        }
    }

    componentDidMount(){
        axios.get(`${process.env.REACT_APP_API_URL}/api/review/` + this.props.user._id +  "?time=" + new Date().valueOf(), { withCredentials: true })
        .then(response=>{
            this.setState({comentarios:response.data})            
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        let  comentarios= this.state.comentarios.map(comentario=>
            <ReviewBaker key={comentario._id} comentario={comentario}/>)
        


        return (
            <div className="mt-50" > 
                
                {comentarios} 

            </div>
        )
    }
}

export default HojaReviewsBaker

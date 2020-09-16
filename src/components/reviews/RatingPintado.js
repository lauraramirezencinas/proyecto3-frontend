import React, { Component } from 'react';
import BeautyStars from 'beauty-stars';

export class RatingPintado extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.valor
        }
    }

   

    

    render() {
        return (
            <BeautyStars className="rating"
                value={this.state.value}
                activeColor="#E32283" size="25px"
                inactiveColor="#E6E6E6"
            />
        )
    }
}


export default RatingPintado

import React, { Component } from 'react';
import BeautyStars from 'beauty-stars';


export class Rating extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }

    handleChange=async (value)=>{
        await this.setState({ value })
        this.props.valorRating(value)
    }

    

    render() {
        return (
            <BeautyStars className="rating"
                value={this.state.value}
                name="value"
                onChange={this.handleChange}
                activeColor="#E32283" size="25px"
                inactiveColor="#E6E6E6"
                
            />
        )
    }
}

export default Rating

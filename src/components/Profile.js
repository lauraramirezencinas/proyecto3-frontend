import React, { Component } from 'react'

export class Profile extends Component {

    

    render() {

        console.log(this.props)
        return (
            <div>
                 <h1>Perfil</h1>
                <h5>{this.props.user.nombre}</h5>
                <h5>{this.props.user.apellido}</h5>
                <h5>{this.props.user.email}</h5>
                {/* <h5>{this.props.user.direccion.calle}</h5>*/}
                <button>Añadir producto</button> 
            </div>
        )
    }
}

export default Profile

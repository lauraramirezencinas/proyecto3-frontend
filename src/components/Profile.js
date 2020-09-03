import React, { Component } from 'react'

export class Profile extends Component {

    

    render() {

        console.log(this.props)
        return (
            <div>
                 <h1>Perfil</h1>
                <h4>{this.props.user.nombre}</h4>
                <h4>{this.props.user.apellido}</h4>
                <button>Añadir producto</button>
            </div>
        )
    }
}

export default Profile

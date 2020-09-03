import React, { useState } from 'react'
import { Button } from "react-bootstrap";
import AddProducto from './productos/AddProducto';

export default function Profile(props) {

    const [modalShow, setModalShow] = useState(false);
    let loggedInUser = JSON.parse(localStorage.getItem("user"));

    

    console.log("loggedInUser",loggedInUser)

    
    return (
        <div>
            <h1>Perfil</h1>
            <h5>{props.user.nombre}</h5>
            <h5>{props.user.apellido}</h5>
            <h5>{props.user.email}</h5>
            <h5>{props.user.direccion.calle}</h5>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Añadir producto 
            </Button>
            <AddProducto show={modalShow} onHide={() => setModalShow(false)} user={loggedInUser}/>     
        </div>
    )
}



// import React, { Component } from 'react'

// export class Profile extends Component {

//     constructor()

//     render() {

//         console.log(this.props)
//         return (
//             <div>
//                  <h1>Perfil</h1>
//                 <h5>{this.props.user.nombre}</h5>
//                 <h5>{this.props.user.apellido}</h5>
//                 <h5>{this.props.user.email}</h5>
//                 {/* <h5>{this.props.user.direccion.calle}</h5>*/}
//                 <button>Añadir producto</button> 
//             </div>
//         )
//     }
// }

// export default Profile
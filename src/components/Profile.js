import React, { useState } from 'react'
import { Button } from "react-bootstrap";
import AddProducto from './productos/AddProducto';
import ProductsGrid from './productos/ProductsGrid';
import Bakery from './bakerys/Bakery';

export default function Profile(props) {

    const [modalShow, setModalShow] = useState(false);
    let loggedInUser = JSON.parse(localStorage.getItem("user"));
    console.log("loggedInUser",loggedInUser)
    const editable=true;

    console.log(props)

    return (
        <div className="container">
            <h1> Mi Perfil</h1>
            <Bakery user={loggedInUser} />
            <Button className="boton" variant="primary" onClick={() => setModalShow(true)}>
                Añadir producto 
            </Button>
            <AddProducto show={modalShow} onHide={() => setModalShow(false)} user={loggedInUser}/>  
            <ProductsGrid editable={editable} profile={loggedInUser}/>
        </div>
    )
}




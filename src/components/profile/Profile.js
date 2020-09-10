import React, { useState } from 'react'
import { Button } from "react-bootstrap";
import ProductsGrid from '../productos/ProductsGrid';
import Bakery from '../bakerys/Bakery';
import AddProducto from '../productos/addProducto';

 function Profile(props) {

    const [modalShow, setModalShow] = useState(false);
    let loggedInUser = JSON.parse(localStorage.getItem("user"));
    console.log("loggedInUser", loggedInUser)
    const editable = true;

   

    return (
        <div className="container mt-30">
            <h1 className="perfil"> Mi Perfil</h1>
            <Bakery user={loggedInUser} getUser={props.getUser} profile={true}/>
            <div className="col-12">
                <Button className="boton" variant="primary" onClick={() => setModalShow(true)}>
                    Añadir producto
            </Button>
            </div>
            <AddProducto show={modalShow} onHide={() => setModalShow(false)} 
            user={loggedInUser} />
            <ProductsGrid editable={editable} profile={loggedInUser} />
        </div>
    )
}

export default Profile


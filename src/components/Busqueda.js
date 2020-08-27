import React, { Component } from 'react'
//import Background from '../public/images/busqueda.jpeg'

let sectionStyle = {
    width: "100%",
    height: "200px",
    backgroundImage: "url(/images/busqueda.jpeg)",
    opacity:"0.6"

};



export class Busqueda extends Component {


    render() {
        return (
            <div className="fondoBusqueda" style={sectionStyle}>
                <form>
                    <div className="container contai-busqueda">
                        <div className="row d-flex justify-content-center ">
                            <label className="ubication">¡Productos deliciosos!</label>
                        </div>
                        <div className="row d-flex justify-content-center">
                        <input className="formBusqueda " type="text" name="busqueda"
                            // value={this.state.busqueda}
                            // onChange={this.handleChange} 
                            
                            placeholder="&#xF002; Busca por articulo" />
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default Busqueda

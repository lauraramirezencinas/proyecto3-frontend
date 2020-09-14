import React, { Component } from 'react';
import axios from 'axios'

let sectionStyle = {
    width: "100%",
    height: "290px",
    backgroundImage: "url(/images/busqueda.png)",
};


export class Busqueda extends Component {

    constructor(props){
        super(props)
        this.state={
            search: "",
        }
    }

    handleChange = async (e) => {
         await this.setState({ search: e.target.value })
        this.updateIt()      
    }

    updateIt()  {
        axios.get(`${process.env.REACT_APP_API_URL}/api/producto/all/?search=`+ this.state.search + "&time="+new Date().valueOf())
            .then(resp => {             
                console.log(resp.data.length)  
                this.props.changeProducts(resp.data)
            })
    }
    

    render() {
        return (
            <div className="fondoBusqueda  " style={sectionStyle}>
                <form>
                    <div className="container contai-busqueda">
                        
                            <div className="row  d-flex  justify-content-center">
                                <label className="busqueda">Los mejores productos...</label>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <input className="formBusqueda  col-10 col-md-8 col-lg-6 offset-1 offset-md-2 offset-lg-3" type="text" name="search"
                                    value={this.state.search}
                                    onChange={this.handleChange} 
                                    placeholder= "Busca por articulo" />
                            </div>
                        
                    </div>

                </form>
            </div>
        )
    }
}

export default Busqueda

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios'

export class Map extends Component {

    constructor(props) {
        super(props)
        this.state={
            lat:"",
            lng:"",
            calleNumero: this.props.bakery.direccion.calleNumero
        }
    }

    componentDidMount(){
        //let direccion= this.state.calleNumero.concat(this.state.cuidad)
        axios.get(`${process.env.REACT_APP_API_URL}/api/maps?search=`+ this.state.calleNumero + "&time=" + new Date().valueOf())
        .then(response => {
            console.log("mapa",response.data)
            // volver a renderizar el mapa con CENTER = lat, lng y un PIN =  lat, lng
            this.setState({
                lat: response.data.candidates[0].geometry.location.lat,
                lng: response.data.candidates[0].geometry.location.lng,
                direccion: response.data.candidates[0].formatted_address
            })

        })
    }

    render() {

        const center={
            lat:this.state.lat,
            lng:this.state.lng 
        }
        const zoom=15

        const getMapOptions = (maps) => {
            return {
                disableDefaultUI: false,
                mapTypeControl: true,
                streetViewControl: true,
                styles: [{ featureType: 'poi', 
                    elementType: 'labels', 
                    stylers: [{ visibility: 'on' }] }],
                }
        }

        const renderMarkers = (map, maps) => {

            const position = {
                lat: this.state.lat,
                lng: this.state.lng
            }

            let marker = new maps.Marker({
                position: position,
                map,
                title: this.state.direccion})
        }

        return (
            <div className="mapa">
                 
                 <GoogleMapReact 
                    key={this.state.direccion}
                    bootstrapURLKeys={ { key: 'AIzaSyBT0RpL1Yw7Q5WC4WemS6hyJ_Y3PnSUyfY'} }
                    defaultCenter={center}
                    defaultZoom={zoom}
                    options={getMapOptions}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}

                />
            </div>
        )
    }
}

export default Map

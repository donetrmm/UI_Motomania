import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



const API_KEY ='AIzaSyDC0kdj6TnO7F3GYn3Mfw5vYI5s0zlom70';

class GumMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      mapsLoaded: false,
      map: null,
      maps: null,
      selectedLocation: 1,
    }
  }
  handleApiLoaded = ({ map, maps }) => {
    this.setState({
      ...this.state,
      isMapsLoaded: true,
      map: map,
      maps: maps
    })
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY}}
          center={this.selectCenter()}
          defaultZoom={5}
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded({ map, maps })}
        >        
        </GoogleMapReact>
    </div>
    )
  }
};

export default GumMap;
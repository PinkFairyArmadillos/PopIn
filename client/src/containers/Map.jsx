/* eslint-disable func-names */
// import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>

//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />

//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyC6vH8jJpTwdaLSv4TwoGTJHqNVnP43Yic',
// })(MapContainer)

import React, { Component, createRef } from 'react';

class GoogleMap extends Component {
  // googleMapRef = react.createRef();
  constructor(props) {
    super(props);
    this.googleMapRef = createRef();
  }

  componentDidMount() {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC6vH8jJpTwdaLSv4TwoGTJHqNVnP43Yic&libraries=places';
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = { lat: position.coords.latitude, lng: position.coords.longitude };
        this.googleMap = this.createGoogleMap(pos);
        this.marker = this.createMarker(pos);
      });
    });
  }

  createGoogleMap(pos) {
    return new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 16,
      center: {
        lat: pos.lat,
        lng: pos.lng,
      },
      disableDefaultUI: true,
    });
  }

  createMarker(pos) {
    return new window.google.maps.Marker({
      position: { lat: pos.lat, lng: pos.lng },
      map: this.googleMap,
    });
  }

  render() {
    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: '400px', height: '300px' }}
      />
    );
  }
}

export default GoogleMap;

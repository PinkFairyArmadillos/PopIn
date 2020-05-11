import React, { Component, createRef } from 'react';
/* 
  followed this tutorial for this component:
  https://engineering.universe.com/building-a-google-map-in-react-b103b4ee97f1
*/
class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.googleMapRef = createRef();
  }

  componentDidMount() {
    const googleMapScript = document.createElement('script');
    /* might not need to do .src not sure copied and pasted from tutorial */
    googleMapScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC6vH8jJpTwdaLSv4TwoGTJHqNVnP43Yic&libraries=places';
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      /* when the script is loaded by the browser get the current position of geolocation */
      navigator.geolocation.getCurrentPosition((position) => {
        /* save the latitude and longitude */
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

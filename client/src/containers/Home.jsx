import React, { Component } from 'react';
import GoogleMap from './Map';
import EventForm from './EventForm';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  handleSubmit(event) {
    event.persist(); // persist the event so we can look at the event properties in chrome console
    event.preventDefault(); // stop refresh that the webbrowser does by dfault on clicking submit
  }

  render() {
    return (<>
      <GoogleMap />
      <EventForm />
    </>)
  }
}
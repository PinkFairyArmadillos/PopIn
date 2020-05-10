import React, { Component } from "react";
import Button from "../components/Button";

export default class Home extends Component {
  static handleOauth() {
    console.log("pressed handleOuath");
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log(this);
    // this.handleOauth = this.handleOauth.bind(this);
  }

  render() {
    return <Button title="Log in with Instagram" onClick={Home.handleOauth} />;
  }
}

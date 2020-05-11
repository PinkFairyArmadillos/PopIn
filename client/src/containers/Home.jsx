import React, { Component } from 'react';
import GoogleMap from './Map';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (<>
      <GoogleMap />
      <div>
            <form>
                    <br/>
                    <input type="text" placeholder="Title"/>
                    <br/>

                    <input type="text" placeholder="Time"/>
                    <br/>

                    <input type="text" placeholder="Description"/>
                    <br/>

                    {/* Since it's hidden, you don't need line break for them */}
                    <input hidden={true} type="text" placeholder="GeoLocation"/>
                    <input hidden={true} type="text" placeholder="UserId"/>

                    <input type="text" placeholder="Address"/>
                    <br/>

                    <input type="submit" placeholder="Submit"/>
            </form>
      </div>
    </>)
  }
}
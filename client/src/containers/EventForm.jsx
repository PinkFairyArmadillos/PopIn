import React, { Component } from 'react';

export default class EventForm extends Component {
    constructor(props){
        super(props);
        // hold states of input values that we can then post on handleing submit
        this.state = {title: '', time: '', description: '', geolocation: {}, userID: ''};
    }
render () {
    return (
    
            <form onSubmit={this.handleSubmit}>
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
    );
    }
}



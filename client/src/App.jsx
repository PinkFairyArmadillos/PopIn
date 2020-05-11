import React from 'react';
import './App.css';
import Login from './containers/Login';
import Home from './containers/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const App = () => { 
    return(
    <Router>
        <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/">
                <Login />
            </Route>
        </Switch>
    </Router>
    )
};

export default App;

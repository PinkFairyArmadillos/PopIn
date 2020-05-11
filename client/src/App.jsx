import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home';


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

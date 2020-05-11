import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home';


const App = () => {
    // this tutorial for react routers: https://reacttraining.com/react-router/web/guides/quick-start
    /*
        load react Home component when web path is /home
        load react Login component when web patb is /login
    */
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

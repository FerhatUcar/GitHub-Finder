// components or react imports
import React, {useState, Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

// router
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// state
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

// styling
import './App.css';


const App = () => {
    return (
        <GithubState>
            <AlertState>
                <Router>
                    <div className="App">
                        <Navbar title="Github Finder" icon="fab fa-github" />
                        <div className="container">
                            <Alert />
                            <Switch>
                                <Route exact path="/" render={() => (
                                    <Fragment>
                                        <Search />
                                        <Users />
                                    </Fragment>
                                )}/>
                                <Route exact path="/about" component={About} />
                                <Route exact path="/user/:login" component={User} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    );
};

export default App;

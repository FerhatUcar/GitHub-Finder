// components or react imports
import React from 'react';
import Navbar from './components/layout/Navbar';
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import Home from './components/pages/Home';
import NotFound from "./components/pages/404";

// router
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// state
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

// styling
import './assets/App.scss';


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
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/about" component={About} />
                                <Route exact path="/user/:login" component={User} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    );
};

export default App;

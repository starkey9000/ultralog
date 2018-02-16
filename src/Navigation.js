import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Base from "./Base";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";





class Navigation extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <h1>Run Harford Ultralog</h1>
                    <ul className="header">
                        <li><NavLink to="/Home">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={ Base} />
                        <Route path="/Home" component={ Home } />
                        <Route path="/stuff" component={ Stuff } />
                        <Route path="/contact" component={ Contact } />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Navigation;

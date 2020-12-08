import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Indosoft from "./Indosoft";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Front End task - Indosoft</h1>
          <ul className="header">
            <li><NavLink to="/">Task 1</NavLink></li>
           
            <li><NavLink to="/contact">Result</NavLink></li>
			<li><NavLink to="/indosoft">Result</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
          
            <Route path="/contact" component={Contact}/>
			<Route path="/indosoft" component={Indosoft}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
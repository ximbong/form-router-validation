import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Title from "./components/Title";
import PersonalInfo from "./components/PersonalInfo";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <form>
            <Route path="/" component={NavBar} />
            <Route path="/" component={Title} />
            <Route path="/" exact={true} component={PersonalInfo} />
            <Route path="/part2" component={Skill} />
            <Route path="/part3" component={Portfolio} />
          </form>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

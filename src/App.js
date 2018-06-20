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

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <form>
          <Title />
          <PersonalInfo />
          <Skill />
          <Portfolio />
          <button className="submitButton">Submit</button>
        </form>
      </Router>
    );
  }
}

export default App;

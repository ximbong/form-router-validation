import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Title from "./components/Title";
import PersonalInfo from "./components/PersonalInfo";
import Skill from "./components/Skill";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {},
      skill: {},
      portfolio: {}
    };
  }

  handleSubmit = (name, data) => {
    this.setState({
      [name]: data
    });
  };

  render() {
    const { personalInfo, skill, portfolio } = this.state;

    return (
      <Router>
        <div className="wrapper">
          <div className="content">
            <Route path="/" component={NavBar} />
            <Route path="/" component={Title} />
            <Route
              path="/"
              exact={true}
              render={() => (
                <PersonalInfo
                  data={personalInfo}
                  handleSubmit={this.handleSubmit}
                />
              )}
            />
            <Route
              path="/part2"
              render={() => (
                <Skill data={skill} handleSubmit={this.handleSubmit} />
              )}
            />
            <Route
              path="/part3"
              render={() => (
                <Portfolio data={portfolio} handleSubmit={this.handleSubmit} />
              )}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

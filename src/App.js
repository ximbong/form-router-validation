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
      personalInfo: {
        info: {
          fullname: "",
          email: "",
          email2: "",
          address: "",
          phone: "",
          country: "",
          state: "",
          city: "",
          zipcode: "",
          notice: ""
        },
        userClick: {
          fullname: false,
          email: false,
          email2: false,
          address: false,
          phone: false,
          country: false,
          state: false,
          city: false,
          zipcode: false,
          notice: false
        }
      },
      skill: {
        selected_option: "option_1",
        discipline: {
          discipline_1: false,
          discipline_2: false,
          discipline_3: false,
          discipline_4: false
        },
        location: {
          vietnam: false,
          thailand: false,
          singapore: false,
          malaysia: false
        }
      },
      portfolio: {
        url: "",
        otherInfo: ""
      }
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

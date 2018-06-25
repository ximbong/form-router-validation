import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  changeID = event => {
    this.setState({ selected_option: event.target.value });
  };

  handleCheck = (event, type) => {
    const proxy = { ...this.state[type] };
    proxy[event.target.id] = !this.state[type][event.target.id];

    this.setState({
      [type]: proxy
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { location } = this.state;

    const formValidity = Object.values(location).some(e => e === true);

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="sectionTitle">2. Skills and location</div>
        <div className="questions">
          Which is your primary design discipline?*
        </div>
        <div className="custom-radios">
          <div>
            <input
              type="radio"
              id="option_1"
              value="option_1"
              onChange={this.changeID}
              checked={this.state.selected_option === "option_1"}
            />
            <label htmlFor="option_1">
              <span>Option 1</span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="option_2"
              value="option_2"
              onChange={this.changeID}
              checked={this.state.selected_option === "option_2"}
            />
            <label htmlFor="option_2">
              <span>Option 2</span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="option_3"
              value="option_3"
              onChange={this.changeID}
              checked={this.state.selected_option === "option_3"}
            />
            <label htmlFor="option_3">
              <span>Option 3</span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="option_4"
              value="option_4"
              onChange={this.changeID}
              checked={this.state.selected_option === "option_4"}
            />
            <label htmlFor="option_4">
              <span>Option 4</span>
            </label>
          </div>
        </div>
        <div className="twoCols">
          <div className="leftCol">
            <div className="questions">
              Do you have experience with any other disciplines?
            </div>
            <div className="checkboxDiv">
              <label className="label">
                Discipline 1
                <input
                  type="checkbox"
                  id="discipline_1"
                  value={this.state.discipline_1}
                  onChange={e => this.handleCheck(e, "discipline")}
                />
                <span className="checkmark" />
              </label>
              <label className="label">
                Discipline 2
                <input
                  type="checkbox"
                  id="discipline_2"
                  value={this.state.discipline_2}
                  onChange={e => this.handleCheck(e, "discipline")}
                />
                <span className="checkmark" />
              </label>
              <label className="label">
                Discipline 3
                <input
                  type="checkbox"
                  id="discipline_3"
                  value={this.state.discipline_3}
                  onChange={e => this.handleCheck(e, "discipline")}
                />
                <span className="checkmark" />
              </label>
              <label className="label">
                Discipline 4
                <input
                  type="checkbox"
                  id="discipline_4"
                  value={this.state.discipline_4}
                  onChange={e => this.handleCheck(e, "discipline")}
                />
                <span className="checkmark" />
              </label>
            </div>
          </div>
          <div className="rightCol">
            <div className="questions">
              Where are you interested in working?
            </div>
            <div className="details">
              You must be legally authorized to work without visa sponsorship in
              the location(s) you choose. You have to choose at least one.
            </div>
            <div className="checkboxDiv">
              <label className="label">
                Vietnam
                <input
                  type="checkbox"
                  id="vietnam"
                  value={this.state.vietnam}
                  onChange={e => this.handleCheck(e, "location")}
                />
                <span className="checkmark" />
              </label>
              <label className="label">
                Thailand
                <input
                  type="checkbox"
                  id="thailand"
                  value={this.state.thailand}
                  onChange={e => this.handleCheck(e, "location")}
                />
                <span className="checkmark" />
              </label>
              <label className="label">
                Malaysia
                <input
                  type="checkbox"
                  id="malaysia"
                  value={this.state.malaysia}
                  onChange={e => this.handleCheck(e, "location")}
                />
                <span className="checkmark" />
              </label>
              <label className="label">
                Singapore
                <input
                  type="checkbox"
                  id="singapore"
                  value={this.state.singapore}
                  onChange={e => this.handleCheck(e, "location")}
                />
                <span className="checkmark" />
              </label>
            </div>
          </div>
        </div>
        <button className="submitButton" disabled={!formValidity}>
          {formValidity ? <Link to="/part3">Next</Link> : "Next"}
        </button>
      </form>
    );
  }
}

export default Skill;

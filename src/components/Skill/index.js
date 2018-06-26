import React, { Component } from "react";
import { Link } from "react-router-dom";

import RadioButtonField from "../RadioButtonField";
import CheckboxField from "../CheckboxField";

import "./index.css";

class Skill extends Component {
  componentDidMount() {
    this.props.handlePaging(2);
  }

  changeID = event => {
    const newState = {
      ...this.props.data,
      selected_option: event.target.value
    };

    this.props.handleSubmit("skill", newState);
  };

  handleCheck = (event, category) => {
    const fieldID = event.target.id;
    const proxy = {
      ...this.props.data[category],
      [fieldID]: !this.props.data[category][fieldID] //negation of previous checked state
    };
    const newState = { ...this.props.data, [category]: proxy };

    this.props.handleSubmit("skill", newState);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { selected_option, discipline, location } = this.props.data;
    const formValidity = Object.values(location).some(e => e === true);

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="sectionTitle">2. Skills and location</div>
        <div className="questions">
          Which is your primary design discipline?*
        </div>
        <div className="custom-radios">
          <RadioButtonField
            text="Option 1"
            id="option_1"
            changeID={this.changeID}
            selected_option={selected_option}
          />

          <RadioButtonField
            text="Option 2"
            id="option_2"
            changeID={this.changeID}
            selected_option={selected_option}
          />

          <RadioButtonField
            text="Option 3"
            id="option_3"
            changeID={this.changeID}
            selected_option={selected_option}
          />

          <RadioButtonField
            text="Option 4"
            id="option_4"
            changeID={this.changeID}
            selected_option={selected_option}
          />
        </div>
        <div className="twoCols">
          <div className="leftCol">
            <div className="questions">
              Do you have experience with any other disciplines?
            </div>
            <div className="checkboxDiv">
              <CheckboxField
                text="Discipline 1"
                category="discipline"
                data={discipline}
                id="discipline_1"
                handleCheck={this.handleCheck}
              />
              <CheckboxField
                text="Discipline 2"
                category="discipline"
                data={discipline}
                id="discipline_2"
                handleCheck={this.handleCheck}
              />
              <CheckboxField
                text="Discipline 3"
                category="discipline"
                data={discipline}
                id="discipline_3"
                handleCheck={this.handleCheck}
              />
              <CheckboxField
                text="Discipline 4"
                category="discipline"
                data={discipline}
                id="discipline_4"
                handleCheck={this.handleCheck}
              />
            </div>
          </div>
          <div className="rightCol">
            <div className="questions">
              Where are you interested in working?
            </div>
            <div className="details">
              You must be legally authorized to work without visa sponsorship in
              the location(s) you choose. <br />
              <b> You have to choose at least one.</b>
            </div>
            <div className="checkboxDiv">
              <CheckboxField
                text="Vietnam"
                category="location"
                data={location}
                id="Vietnam"
                handleCheck={this.handleCheck}
              />
              <CheckboxField
                text="Thailand"
                category="location"
                data={location}
                id="Thailand"
                handleCheck={this.handleCheck}
              />
              <CheckboxField
                text="Malaysia"
                category="location"
                data={location}
                id="Malaysia"
                handleCheck={this.handleCheck}
              />
              <CheckboxField
                text="Singapore"
                category="location"
                data={location}
                id="Singapore"
                handleCheck={this.handleCheck}
              />
            </div>
          </div>
        </div>
        <button className="submitButton previous">
          <Link to="/form-router-validation/">Previous</Link>
        </button>
        <button className="submitButton next" disabled={!formValidity}>
          {formValidity ? (
            <Link to="/form-router-validation/part3">Next</Link>
          ) : (
            <span>Next</span>
          )}
        </button>
      </form>
    );
  }
}

export default Skill;

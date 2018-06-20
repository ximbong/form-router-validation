import React from "react";

import "./index.css";

const Skill = () => {
  return (
    <form>
      <div className="sectionTitle">2.Skills and location</div>
      <div className="questions">Which is your primary design discipline?*</div>
      <div className="custom-radios">
        <div>
          <input
            type="radio"
            id="radio-1"
            name="radio"
            defaultValue="radio-1"
            defaultChecked
          />
          <label htmlFor="radio-1">
            <span>check</span>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="radio-2"
            name="radio"
            defaultValue="radio-2"
          />
          <label htmlFor="radio-2">
            <span>check </span>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="radio-3"
            name="radio"
            defaultValue="radio-3"
          />
          <label htmlFor="radio-3">
            <span>check </span>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="radio-4"
            name="radio"
            defaultValue="radio-4"
          />
          <label htmlFor="radio-4">
            <span>check </span>
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
              One
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
            <label className="label">
              Two
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="label">
              Three
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="label">
              Four
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
        <div className="rightCol">
          <div className="questions">Where are you interested in working?</div>
          <div className="details">
            You must be legally authorized to work without visa sponsorship in
            the location(s) you choose.
          </div>
          <div className="checkboxDiv">
            <label className="label">
              One
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
            <label className="label">
              Two
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="label">
              Three
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="label">
              Four
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Skill;

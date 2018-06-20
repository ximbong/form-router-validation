import React, { Component } from "react";

import "./index.css";

class PersonalInfo extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <form>
        <div className="sectionTitle">1. Personal information</div>
        <div className="basicInfo">
          <div className="leftCol">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full name*"
            />
            <input type="text" name="email" id="email" placeholder="Email*" />
            <input
              type="text"
              name="email2"
              id="email2"
              placeholder="Re-enter email*"
            />
          </div>
          <div className="rightCol">
            <input name="text" id="phone" placeholder="Phone*" />
          </div>
        </div>

        <div className="addressInfo">
          <input type="text" id="address" placeholder="Address*" />
          <div className="fourCols">
            <input type="text" id="country" placeholder="Country*" />
            <input type="text" id="state" placeholder="State*" />
            <input type="text" id="city" placeholder="City*" />
            <input type="text" id="zipcode" placeholder="Zip code*" />
          </div>
          <input type="text" placeholder="How did you hear about us" />
        </div>
      </form>
    );
  }
}

export default PersonalInfo;

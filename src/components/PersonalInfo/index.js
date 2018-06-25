import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  validate = ({
    fullname,
    email,
    email2,
    address,
    phone,
    country,
    state,
    city,
    zipcode,
    notice
  }) => {
    const fullnameTest = /^(([A-Z]?[a-z]*)\s)*([A-Z][a-z]*)$/;
    const emailTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneTest = /^(\+?\d{0,3}\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    const countryTest = /^[a-zA-Z]{2,}$/;
    const cityTest = /^[a-zA-Z]{2,}$/;
    const zipcodeTest = /\d{4,8}/;

    const errors = {
      fullname: fullnameTest.test(fullname),
      email: emailTest.test(email),
      email2: email2 === email,
      phone: phoneTest.test(phone),
      address: address.trim().length > 0,
      country: countryTest.test(country),
      state: state.trim().length > 0,
      city: cityTest.test(city),
      zipcode: zipcodeTest.test(zipcode)
    };

    return errors;
  };

  handleValidEffect = (value, bool) => {
    return !value || bool ? "valid" : "invalid";
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit("personalInfo", this.state);
  };

  render() {
    const {
      fullname,
      email,
      email2,
      address,
      phone,
      country,
      state,
      city,
      zipcode,
      notice
    } = this.state;

    const errors = this.validate(this.state);
    const formValidity = !Object.values(errors).some(e => e === false);

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="sectionTitle">1. Personal information</div>
        <div className="basicInfo">
          <div className="leftCol">
            <input
              id="fullname"
              placeholder="Full name*"
              value={fullname}
              onChange={this.handleChange}
              className={this.handleValidEffect(fullname, errors.fullname)}
            />
            <input
              id="email"
              placeholder="Email*"
              value={email}
              onChange={this.handleChange}
              className={this.handleValidEffect(email, errors.email)}
            />
            <input
              id="email2"
              placeholder="Re-enter email*"
              value={email2}
              onChange={this.handleChange}
              className={this.handleValidEffect(email2, errors.email2)}
            />
          </div>
          <div className="rightCol">
            <input
              id="phone"
              placeholder="Phone*"
              value={phone}
              onChange={this.handleChange}
              className={this.handleValidEffect(phone, errors.phone)}
            />
          </div>
        </div>
        <div className="addressInfo">
          <input
            id="address"
            placeholder="Address*"
            value={address}
            onChange={this.handleChange}
            className={this.handleValidEffect(address, errors.address)}
          />
          <div className="fourCols">
            <input
              id="country"
              placeholder="Country*"
              value={country}
              onChange={this.handleChange}
              className={this.handleValidEffect(country, errors.country)}
            />
            <input
              id="state"
              placeholder="State*"
              value={state}
              onChange={this.handleChange}
              className={this.handleValidEffect(state, errors.state)}
            />
            <input
              id="city"
              placeholder="City*"
              value={city}
              onChange={this.handleChange}
              className={this.handleValidEffect(city, errors.city)}
            />
            <input
              id="zipcode"
              placeholder="Zip code*"
              value={zipcode}
              onChange={this.handleChange}
              className={this.handleValidEffect(zipcode, errors.zipcode)}
            />
          </div>
          <input
            id="notice"
            placeholder="How did you hear about us"
            value={notice}
            onChange={this.handleChange}
          />
        </div>
        <button className="submitButton" disabled={!formValidity}>
          {formValidity ? <Link to="/part2">Next</Link> : "Next"}
        </button>
      </form>
    );
  }
}

export default PersonalInfo;

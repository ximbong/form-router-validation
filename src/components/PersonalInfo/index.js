import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

class PersonalInfo extends Component {
  handleChange = event => {
    const fieldID = event.target.id;
    const newInfo = {
      ...this.props.data.info,
      [fieldID]: event.target.value
    };
    const newState = { ...this.props.data, info: newInfo };

    this.props.handleSubmit("personalInfo", newState);
  };

  handleClickStatus = event => {
    const fieldID = event.target.id;
    const newUserClick = {
      ...this.props.data.userClick,
      [fieldID]: true
    };

    const newState = { ...this.props.data, userClick: newUserClick };
    this.props.handleSubmit("personalInfo", newState);
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

  handleValidEffect = (userClick, truthy) => {
    return !userClick || truthy ? "valid" : "invalid";
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const {
      info: {
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
      },
      userClick
    } = this.props.data;

    const errors = this.validate(this.props.data.info);
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
              onFocus={this.handleClickStatus}
              onChange={this.handleChange}
              className={this.handleValidEffect(
                userClick.fullname,
                errors.fullname
              )}
            />
            <input
              id="email"
              placeholder="Email*"
              value={email}
              onFocus={this.handleClickStatus}
              onChange={this.handleChange}
              className={this.handleValidEffect(userClick.email, errors.email)}
            />
            <input
              id="email2"
              placeholder="Re-enter email*"
              value={email2}
              onFocus={this.handleClickStatus}
              onChange={this.handleChange}
              className={this.handleValidEffect(
                userClick.email2,
                errors.email2
              )}
            />
          </div>
          <div className="rightCol">
            <input
              id="phone"
              placeholder="Phone*"
              value={phone}
              onFocus={this.handleClickStatus}
              onChange={this.handleChange}
              className={this.handleValidEffect(userClick.phone, errors.phone)}
            />
          </div>
        </div>
        <div className="addressInfo">
          <input
            id="address"
            placeholder="Address*"
            value={address}
            onFocus={this.handleClickStatus}
            onChange={this.handleChange}
            className={this.handleValidEffect(
              userClick.address,
              errors.address
            )}
          />
          <div className="fourCols">
            <input
              id="country"
              placeholder="Country*"
              value={country}
              onFocus={this.handleClickStatus}
              onChange={this.handleChange}
              className={this.handleValidEffect(
                userClick.country,
                errors.country
              )}
            />
            <input
              id="state"
              placeholder="State*"
              value={state}
              onFocus={this.handleClickStatus}
              onChange={this.handleChange}
              className={this.handleValidEffect(userClick.state, errors.state)}
            />
            <input
              id="city"
              placeholder="City*"
              value={city}
              onFocus={this.handleClickStatus}
              onChange={this.handleChange}
              className={this.handleValidEffect(userClick.city, errors.city)}
            />
            <input
              id="zipcode"
              placeholder="Zip code*"
              value={zipcode}
              onFocus={this.handleClickStatus}
              onChange={this.handleChange}
              className={this.handleValidEffect(
                userClick.zipcode,
                errors.zipcode
              )}
            />
          </div>
          <input
            id="notice"
            placeholder="How did you hear about us"
            onFocus={this.handleClickStatus}
            value={notice}
            onChange={this.handleChange}
          />
        </div>
        <button className="submitButton" disabled={!formValidity}>
          {formValidity ? <Link to="/part2">Next</Link> : <span>Next</span>}
        </button>
      </form>
    );
  }
}

export default PersonalInfo;

import React, { Component } from "react";
import { Link } from "react-router-dom";

import InputField from "../InputField";

import "./index.css";

class PersonalInfo extends Component {
  componentDidMount() {
    this.props.handlePaging(1);
  }

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
      fullname: fullnameTest.test(fullname) ? "" : "Please enter a valid name",
      email: emailTest.test(email) ? "" : "Please enter a valid email address",
      email2: email2 && email2 === email ? "" : "Your email doesn't match",
      phone: phoneTest.test(phone) ? "" : "Please enter a valid phone number",
      address: address.trim().length > 0 ? "" : "Please enter a valid address",
      country: countryTest.test(country)
        ? ""
        : "Please enter a valid country name",
      state: state.trim().length > 0 ? "" : "Please enter a valid state name",
      city: cityTest.test(city) ? "" : "Please enter a valid city name",
      zipcode: zipcodeTest.test(zipcode) ? "" : "Please enter a valid zipcode"
    };

    return errors;
  };

  handleValidEffect = (userClick, errorMsg) => {
    //no error returns empty string, therefore errorMsg truthy should be false
    return !userClick || !errorMsg ? "valid" : "invalid";
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
    const formValidity = !Object.values(errors).some(e => e !== ""); //it means some error msgs are not empty

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="sectionTitle">1. Personal information</div>
        <div className="basicInfo">
          <div className="leftCol">
            <InputField
              id="fullname"
              placeholder="Full name*"
              value={fullname}
              handleChange={this.handleChange}
              handleClickStatus={this.handleClickStatus}
              handleValidEffect={this.handleValidEffect}
              userClick={userClick.fullname}
              error={errors.fullname}
              errorMsg=""
            />
            <InputField
              id="email"
              placeholder="Email*"
              value={email}
              handleChange={this.handleChange}
              handleClickStatus={this.handleClickStatus}
              handleValidEffect={this.handleValidEffect}
              userClick={userClick.email}
              error={errors.email}
              errorMsg=""
            />
            <InputField
              id="email2"
              placeholder="Re-enter email*"
              value={email2}
              handleChange={this.handleChange}
              handleClickStatus={this.handleClickStatus}
              handleValidEffect={this.handleValidEffect}
              userClick={userClick.email2}
              error={errors.email2}
              errorMsg=""
            />
          </div>
          <div className="rightCol">
            <InputField
              id="phone"
              placeholder="Phone*"
              value={phone}
              handleChange={this.handleChange}
              handleClickStatus={this.handleClickStatus}
              handleValidEffect={this.handleValidEffect}
              userClick={userClick.phone}
              error={errors.phone}
            />
          </div>
        </div>
        <div className="addressInfo">
          <InputField
            id="address"
            placeholder="Address*"
            value={address}
            handleChange={this.handleChange}
            handleClickStatus={this.handleClickStatus}
            handleValidEffect={this.handleValidEffect}
            userClick={userClick.address}
            error={errors.address}
          />
          <div className="fourCols">
            <InputField
              id="country"
              placeholder="Country*"
              value={country}
              handleChange={this.handleChange}
              handleClickStatus={this.handleClickStatus}
              handleValidEffect={this.handleValidEffect}
              userClick={userClick.country}
              error={errors.country}
            />
            <InputField
              id="state"
              placeholder="State*"
              value={state}
              handleChange={this.handleChange}
              handleClickStatus={this.handleClickStatus}
              handleValidEffect={this.handleValidEffect}
              userClick={userClick.state}
              error={errors.state}
            />
            <InputField
              id="city"
              placeholder="City*"
              value={city}
              handleChange={this.handleChange}
              handleClickStatus={this.handleClickStatus}
              handleValidEffect={this.handleValidEffect}
              userClick={userClick.city}
              error={errors.city}
            />
            <InputField
              id="zipcode"
              placeholder="Zip code*"
              value={zipcode}
              handleChange={this.handleChange}
              handleClickStatus={this.handleClickStatus}
              handleValidEffect={this.handleValidEffect}
              userClick={userClick.zipcode}
              error={errors.zipcode}
            />
          </div>
          <InputField
            id="notice"
            placeholder="How did you hear about us"
            value={notice}
            handleChange={this.handleChange}
          />
        </div>
        <button className="submitButton next" disabled={!formValidity}>
          {formValidity ? (
            <Link to="/form-router-validation/part2">Next</Link>
          ) : (
            <span>Next</span>
          )}
        </button>
      </form>
    );
  }
}

export default PersonalInfo;

import React from "react";

import "./index.css";

const Summary = ({ personalInfo, location, url }) => {
  const {
    address,
    city,
    country,
    email,
    fullname,
    phone,
    state,
    zipcode
  } = personalInfo;

  const filteredLocation = Object.keys(location).filter(
    name => location[name] === true
  );
  const locationString = filteredLocation.join(", ") + ".";

  return (
    <div className="summary">
      <h1>Summary</h1>
      <section>
        <div className="title">Personal Info</div>
        <div className="fullname">Full name: {fullname}</div>
        <div className="email">Email: {email}</div>
        <div className="phone">Phone number: {phone}</div>
        <div className="address">Address: {address}</div>
        <div className="city">City: {city}</div>
        <div className="state">State: {state}</div>
        <div className="country">Country: {country}</div>
        <div className="zipcode">Zip Code: {zipcode}</div>
      </section>
      <section>
        <div className="title">Perferred Work Location</div>
        <div>{locationString}</div>
      </section>
      <section>
        <div className="title">Portfolio URL</div>
        <div>{url}</div>
      </section>
    </div>
  );
};

export default Summary;

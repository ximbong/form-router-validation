import React, { Component } from "react";

import "./index.css";

class Portfolio extends Component {
  handleChange = event => {
    const newState = {
      ...this.props.data,
      [event.target.id]: event.target.value
    };

    this.props.handleSubmit("portfolio", newState);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { url, otherInfo } = this.props.data;
    // eslint-disable-next-line
    const formValidity = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
      url
    );

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="sectionTitle">3. Portfolio</div>
        <div className="questions">
          Prove you're IBM's next great designer by showing us who you are. What
          you've done. How you think. Tell us your story.
        </div>
        <input
          placeholder="Portfolio link*"
          onChange={this.handleChange}
          value={url}
          id="url"
        />
        <textarea
          placeholder="Anything else"
          onChange={this.handleChange}
          value={otherInfo}
          id="otherInfo"
        />
        <button className="submitButton" disabled={!formValidity}>
          <span>Submit</span>
        </button>
      </form>
    );
  }
}

export default Portfolio;

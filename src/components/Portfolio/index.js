import React, { Component } from "react";

import "./index.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.data.url || "",
      otherInfo: props.data.url || ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit("portfolio", this.state);
  };

  render() {
    const url = this.state.url;
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
          value={this.state.url}
          id="url"
        />
        <textarea placeholder="Anything else" id="otherInfo" />
        <button className="submitButton" disabled={!formValidity}>
          Submit
        </button>
      </form>
    );
  }
}

export default Portfolio;

import React, { Component } from "react";

import "./index.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  handleChange = event => {
    this.setState({
      url: event.target.value
    });
  };

  render() {
    const url = this.state.url;
    // eslint-disable-next-line
    const formValidity = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
      url
    );

    return (
      <form>
        <div className="sectionTitle">3. Portfolio</div>
        <div className="questions">
          Prove you're IBM's next great designer by showing us who you are. What
          you've done. How you think. Tell us your story.
        </div>
        <input
          placeholder="Portfolio link*"
          onChange={this.handleChange}
          value={this.state.url}
        />
        <textarea placeholder="Anything else" />
        <button className="submitButton" disabled={!formValidity}>
          Submit
        </button>
      </form>
    );
  }
}

export default Portfolio;

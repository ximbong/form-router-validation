import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

class Portfolio extends Component {
  componentDidMount() {
    this.props.handlePaging(3);
  }

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
    const validity = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
      url
    );
    const validityEffect = !url || validity ? "valid" : "invalid";

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
          className={validityEffect}
        />
        <textarea
          placeholder="Anything else"
          onChange={this.handleChange}
          value={otherInfo}
          id="otherInfo"
        />
        <button className="submitButton previous">
          <Link to="/form-router-validation/part2">Previous</Link>
        </button>
        <button className="submitButton next" disabled={!validity}>
          <span>Submit</span>
        </button>
      </form>
    );
  }
}

export default Portfolio;

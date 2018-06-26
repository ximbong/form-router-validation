import React, { PureComponent } from "react";

import "./index.css";

class InputField extends PureComponent {
  render() {
    const {
      id,
      placeholder,
      value,
      handleClickStatus,
      handleChange,
      handleValidEffect,
      userClick,
      error
    } = this.props;

    const errorEffect =
      handleValidEffect && handleValidEffect(userClick, error);
    const errorMsg = errorEffect === "valid" ? "" : error;

    return (
      <div className="input-field">
        <input
          id={id}
          placeholder={placeholder}
          value={value}
          onBlur={handleClickStatus && handleClickStatus}
          onChange={handleChange}
          className={errorEffect}
        />
        <div className="error-msg">{errorMsg}</div>
      </div>
    );
  }
}

export default InputField;

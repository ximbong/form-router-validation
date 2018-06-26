import React from "react";

import "./index.css";

const InputField = ({
  id,
  placeholder,
  value,
  handleClickStatus,
  handleChange,
  handleValidEffect,
  userClick,
  error
}) => {
  const errorEffect = handleValidEffect && handleValidEffect(userClick, error);
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
};

export default InputField;

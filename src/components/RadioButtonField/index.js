import React from "react";

import "./index.css";

const RadioButtonField = ({ text, id, selected_option, changeID }) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        value={id}
        onChange={changeID}
        checked={selected_option === id}
      />
      <label htmlFor={id}>
        <span>{text}</span>
      </label>
    </div>
  );
};

export default RadioButtonField;

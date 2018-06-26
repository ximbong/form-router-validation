import React from "react";

import "./index.css";

const CheckboxField = ({ text, category, id, handleCheck, data }) => {
  return (
    <label className="label">
      {text}
      <input
        type="checkbox"
        id={id}
        checked={data[id]}
        onChange={e => handleCheck(e, category)}
      />
      <span className="checkmark" />
    </label>
  );
};

export default CheckboxField;

// formatting for Field elements
import React from "react";
const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div className="inputContainer">
      <input
        {...input}
        placeholder={label}
        type={type}
        style={{border: touched && error ? 'red 2px solid' : ''}}
      />
      <div style={{color: 'red'}}>
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
  </div>
);
export default renderField;

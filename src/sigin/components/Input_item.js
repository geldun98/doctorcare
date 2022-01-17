import React from 'react';

const Input_item = ({ type, labelText, name, value, placeholder, errlabel }) => {
  return (
    <div>
      <label>
        {labelText}
        <br />
        <input type={type} name={name} value={value} placeholder={placeholder}></input>
        <span>{errlabel}</span>
      </label>
    </div>
  );
};

export default Input_item;

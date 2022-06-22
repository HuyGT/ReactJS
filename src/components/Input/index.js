import React from "react";
import "./style.css";

export default function Input(props) {
  const { placeholder, handleChangeInput, value } = props;
  return (
    <input
      className="input__task"
      placeholder={placeholder}
      onChange={handleChangeInput}
      value={value}
    ></input>
  );
}

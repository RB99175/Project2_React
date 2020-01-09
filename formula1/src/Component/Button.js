import React from "react";
import "../App.css";

//In order to make it resuable , created a separate component for button passing the name and on click function
const Button = ({ name, onclick }) => {
  return <button onClick={() => onclick()}>{name}</button>;
};

export default Button;

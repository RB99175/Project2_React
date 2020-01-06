import React from "react";
import "../App.css";

const Button= ({name, onclick}) => {
    
  return (
    <button onClick={() => onclick()}>{name}</button>
     
        
  );
};

export default Button;

import React from "react";
import "../App.css";


//Create two button:
//one for year input and another one to click it to navigate to another page
const Button= ({name, onclick}) => {
    
  return (
    <button onClick={() => onclick()}>{name}</button>
     
        
  );
};

export default Button;

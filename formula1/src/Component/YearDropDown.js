import React from "react";
import "../App.css";

const YearDropDown = ({seasons}) => {
    console.log(seasons);
  return (
    <select>
      {seasons.map(seasonItem => (
        <option value={seasonItem.seasons}>{seasonItem.season}</option>
      ))}
    </select>
  );
};

export default YearDropDown;

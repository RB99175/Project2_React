import React from "react";
import "../App.css";

//Adding the data from setstate(seasons) in yeardropdown button
const YearDropDown = ({ seasons }) => {
  //console.log to fetch all seasons detials
  console.log(seasons);

  return (
    <select>
      {/* Using map function to call each item in a string and returing those in results */}
      {seasons.map(seasonItem => (
        <option value={seasonItem.seasons}>{seasonItem.season}</option>
      ))}
    </select>
  );
};

export default YearDropDown;

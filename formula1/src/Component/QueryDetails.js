import React from "react";
import "../App.css";

//Adding the data from setstate(seasons) in yeardropdown button
const QueryDetails = ({ seasons, results }) => {
  //console.log to fetch all seasons detials
  console.log(seasons, results);

  return (
    <table class="response">
      <tbody>
        <tr>
          <th>Query Details</th>
        </tr>
        <tr>
          <th>Series</th>
          <th>Season</th>
          <th>Results</th>
        </tr>
        <tr>
          <td>f1</td>
          <td>{seasons}</td>
          <td>{results}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default QueryDetails;

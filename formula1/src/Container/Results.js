import React, { Component } from "react";
import "../App.css";
import formula1 from "../formula1.jpg";
import { withRouter } from "react-router-dom";
import QueryDetails from "../Component/QueryDetails";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      race: [],
      seasons: "",
      results: ""
    };
  }
  //Fetching the data from API
  componentDidMount() {
    fetch("http://ergast.com/api/f1/2005.json")
      .then(response => response.json())
      .then(data => {
        console.log(data.MRData.total);
        console.log(data.MRData.RaceTable.season);
        console.log(data.MRData.RaceTable.Races);

        // Passing  the console log data in setstate and creating prop
        this.setState({
          races: data.MRData.RaceTable.Races,
          season: data.MRData.RaceTable.season,
          results: data.MRData.total
        });
        // this.setState({ seasons: data.MRData.SeasonTable.Seasons });
        // console.log(JSON.stringify(this.state.seasons));
      });
  }

  render() {
    // logging the entire above setState to make sure I get the data
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={formula1} className="App-logo" alt="logo" />{" "}
        </header>
        {/* Passing the season state and the result state */}
        <QueryDetails
          seasons={this.state.season}
          results={this.state.results}
        />
      </div>
    );
  }
}

export default withRouter(Results);

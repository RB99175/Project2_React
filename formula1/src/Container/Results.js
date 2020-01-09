import React, { Component } from "react";
import "../App.css";
import formula1 from "../formula1.jpg";
import { withRouter } from "react-router-dom";
import QueryDetails from "../Component/QueryDetails";
import RaceTable from "../Component/RaceTable";
import Button from "../Component/Button";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      races: [],
      seasons: "",
      results: ""
    };
  }
  //Fetching the data from API
  componentDidMount() {
    //Getting id in the url and setting up equal to year 
    //used that as a parameter and fetch the api data 
    const year = this.props.match.params.id;
    fetch(`http://ergast.com/api/f1/${year}.json`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.MRData.total);
        console.log(data.MRData.RaceTable.season);
        console.log(data.MRData.RaceTable.Races);

        // Passing  the console log data in setstate and creating state
        this.setState({
          races: data.MRData.RaceTable.Races,
          season: data.MRData.RaceTable.season,
          results: data.MRData.total
        });
        // this.setState({ seasons: data.MRData.SeasonTable.Seasons });
        // console.log(JSON.stringify(this.state.seasons));
      });
  }
  //pusing back to home page
  handleClick() {
    this.props.history.push("/");
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
        {/*  Created back button */}
         <Button
          name="Click here"
          onclick={() => {
            this.handleClick();
          }}
        />
        
        {/* passing state as prop to child component- racetable */}
        <RaceTable races={this.state.races} />
      </div>
    );
  }
}

export default withRouter(Results);

import React, { Component } from "react";
import "../App.css";
import YearDropDown from '../Component/YearDropDown';
import Button from '../Component/Button';
import formula1 from '../formula1.jpg';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: []
    };
  }

  componentDidMount() {
    fetch("http://ergast.com/api/f1/seasons.json?limit=71")
      .then(response => response.json())
      .then(data => {
          console.log(data.MRData.SeasonTable.Seasons);
          
          //Setting the api data with setstate in constructor setstate
          this.setState({seasons: data.MRData.SeasonTable.Seasons})
          console.log(JSON.stringify(this.state.seasons))
      }
    )};
  

  render() {
    function handleClick() {
        console.log("Clicked");
    }
    return (
      <div className="App">
        <header className="App-header">
            <img src={formula1} className='App-logo' alt = 'logo' /> {' '}
            </header>
        <YearDropDown seasons={this.state.seasons}/>
        <Button name="click me" onclick={handleClick}/>
      </div>
    );
  }
}

export default HomePage;


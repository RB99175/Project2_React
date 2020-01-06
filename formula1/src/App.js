import React from "react";
import "./App.css";
import HomePage from "./Container/HomePage";
import { Route, BrowserRouter } from "react-router-dom";
import Results from "./Container/Results";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Created home page and Result page */}
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/Results" component={Results} />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import logo from './formula1.jpg';
import './App.css';
import HomePage from './Container/HomePage';
import { Route ,BrowserRouter, Link } from 'react-router-dom';
import Results from './Container/Results';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact={true} path="/" component={HomePage}/>
      <Route path="/Results" component={Results}/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

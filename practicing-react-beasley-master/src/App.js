import React, { Component } from "react";
import { Route } from "react-router-dom";
import './App.css';
import Welcome from "./components/welcome/welcome";
import Clock from "./components/clock/clock";
import Contact from "./components/contact/contact";
import Navigation from './components/navigation/Navigation';
//Import the Route component

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" 
      render={(props) => <Welcome {...props} name ="Osi"/>}/>
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
      </div>
    )
  
};
export default App;

import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Find from "./Find.js";
import Home from "./Home.js";
import Upload from "./Upload.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Home />
        </Router>
      </div>
    );
  }
}

export default App;

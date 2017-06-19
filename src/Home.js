import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App.js";
import Find from "./Find.js";
import Upload from "./Upload.js";
import MuiThemeThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from "material-ui/FlatButton";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleSelectionClick = this.handleSelectionClick.bind(this);
  }

  handleHomeClick() {
    this.setState({
      clicked: false
    });
  }

  handleSelectionClick() {
    this.setState({
      clicked: true
    });
  }

  render() {
    let selection = (
      <div className="Find-Upload-Buttons">
        <Link to="/Find">
          <FlatButton onClick={this.handleSelectionClick}>
            Find
          </FlatButton>
        </Link>

        <Link to="/Upload">
          <FlatButton onClick={this.handleSelectionClick}>Upload</FlatButton>
        </Link>
      </div>
    );
    if (this.state.clicked) {
      selection = null;
    }
    return (
      <MuiThemeThemeProvider>
        <Router>
          <div>
            <div>
              <Link to="/">
                <img
                  src={require("./Images/Ok.png")}
                  onClick={this.handleHomeClick}
                />
              </Link>
              <Route exact path="/App" component={App} />
            </div>

            {/*Find and Upload Buttons*/}
            {selection}
            <Route exact path="/Find" component={Find} />
            <Route exact path="/Upload" component={Upload} />
          </div>
        </Router>
      </MuiThemeThemeProvider>
    );
  }
}

export default Home;

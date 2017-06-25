import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import * as firebase from "firebase";
import config from "./config.js";
var fire = firebase.initializeApp(config);

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantName: "",
      dealItem: "",
      dealPrice: "",
      dealDescription: "",
      formSubmitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(field, e) {
    this.setState({
      ...this.state,
      [field]: e.target.value
    });
  }
  handleSubmit(e) {
    console.log(this.state.restaurantName);
    const rootRef = firebase.database().ref().child("restaurantDeals");
    const restaurantDeal = {
      restaurantName: this.state.restaurantName,
      dealItem: this.state.dealItem,
      dealPrice: this.state.dealPrice,
      dealDescription: this.state.dealDescription
    };
    fire.database().ref("restaurantDeals").push(restaurantDeal);
    e.preventDefault();
    this.setState({
      ...this.state,
      formSubmitted: true
    });
  }
  render() {
    let form = null;
    if (!this.state.formSubmitted) {
      form = (
        <div className="Upload-Form">
          <Paper style={style} zDepth={1}>
            <TextField
              hintText="Name of Restaurant"
              onChange={e => this.handleChange("restaurantName", e)}
            />
            <br />
            <TextField
              hintText="Deal Item"
              onChange={e => this.handleChange("dealItem", e)}
            />
            <br />
            <TextField
              hintText="Deal Price"
              onChange={e => this.handleChange("dealPrice", e)}
            />
            <br />
            <TextField
              hintText="DealDescription"
              onChange={e => this.handleChange("dealDescription", e)}
            />
            <br />
            <FlatButton label="Submit" onClick={e => this.handleSubmit(e)} />
            <br />
          </Paper>
        </div>
      );
    } else {
      form = <div className="Thank-You">Thank you for your submission!</div>;
    }
    return (
      <MuiThemeProvider>
        <div className="Upload-Page">
          {form}
        </div>
      </MuiThemeProvider>
    );
  }
}
const style = {
  height: 500,
  width: 500,
  margin: 20,
  textAlign: "center",
  display: "inline-block"
};

export default Upload;

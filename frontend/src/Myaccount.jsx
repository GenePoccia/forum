import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

class UnconnectedAccount extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   // username: "",
    //   // firstName: "",
    //   // lastName: ""
    // };
  }
  logout = () => {
    fetch("http://localhost:4000/logout", { credentials: "include" })
      .then(header => {
        return header.text();
      })
      .then(responseBody => {
        let body = JSON.parse(responseBody);
        if (body.success) {
          this.props.dispatch({ type: "logout" });
          this.props.history.push("/");
        }
      });
  };
  render = () => {
    return (
      <div>
        <div>
          <img
            className="img"
            src="http://simpleicon.com/wp-content/uploads/account.png"
          />
        </div>
        <div className="accountinfos">
          <p>Your personal informations: </p>
          <p>Your username: </p>
          <p id="user">{this.props.username}</p>
          <p>Your first name: </p>
          <p id="user">{this.props.firstName}</p>
          <p>Your last name: </p>
          <p id="user">{this.props.lastName}</p>
          <p>Your are: </p>
          <p id="user">{this.props.age} years old</p>
        </div>
        <div className="logout">
          <button onClick={this.logout}>log out!</button>
        </div>
      </div>
    );
  };
}

let mapStateToProps = state => {
  return {
    username: state.username,
    firstName: state.firstName,
    lastName: state.lastName,
    age: state.age
  };
};
let Myaccount = connect(mapStateToProps)(UnconnectedAccount);

export default withRouter(Myaccount);

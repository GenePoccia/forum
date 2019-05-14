import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import MainForum from "./MainForum.jsx";
import Account from "./Account.jsx";
import UserDetails from "./UserDetails.jsx";
import Basketball from "./Basketball.jsx";
import Hockey from "./Hockey.jsx";
import Soccer from "./Soccer.jsx";
import RockClimbing from "./RockClimbing.jsx";
import Tennis from "./Tennis.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

class UnconnectedApp extends Component {
  renderRoot = () => {
    return (
      <div>
        <div className="description">Image placeholder</div>
        <div className="description">Description</div>
        <MainForum />
        <div>Buy/Sell</div>
        <div>Talk Sport</div>
      </div>
    );
  };

  renderAccount = () => {
    return (
      <div>
        <Account />
      </div>
    );
  };

  renderUserDetails = () => {
    return (
      <div>
        <UserDetails />
      </div>
    );
  };

  both = () => {
    return (
      <div>
        <Signup />
        <Login />
      </div>
    );
  };

  renderSport = routerData => {
    if (routerData.match.params.sport === "Basketball")
      return (
        <div>
          <Basketball />
        </div>
      );
    if (routerData.match.params.sport === "Hockey")
      return (
        <div>
          <Hockey />
        </div>
      );
    if (routerData.match.params.sport === "RockClimbing")
      return (
        <div>
          <RockClimbing />
        </div>
      );
    if (routerData.match.params.sport === "Soccer")
      return (
        <div>
          <Soccer />
        </div>
      );
    if (routerData.match.params.sport === "Tennis")
      return (
        <div>
          <Tennis />
        </div>
      );
    if (routerData.match.params.sport === "Misc")
      return (
        <div>
          <Misc />
        </div>
      );
  };
  renderThread = routerData => {
    if (routerData.match.params.id === "1") {
      return <div>test replies</div>;
    }
    //<Thread props={this.obj} />
    if (routerData.match.params.id === "3") {
      return <div>test replies 2</div>;
    }
  };
  render = () => {
    return (
      <BrowserRouter>
        <div>
          <TopBar />
          <Route exact={true} path="/both" render={this.both} />
        </div>
        <div>
          <Route exact={true} path="/" render={this.renderRoot} />
          <Route exact={true} path="/Account" render={this.renderAccount} />
          <Route
            exact={true}
            path="/UserDetails"
            render={this.renderUserDetails}
          />
          <Route exact={true} path="/:sport" render={this.renderSport} />
          <Route exact={true} path="/:sport/:id" render={this.renderThread} />
        </div>
      </BrowserRouter>
    );
  };
}

let App = connect()(UnconnectedApp);
export default App;

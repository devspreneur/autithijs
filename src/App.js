import { BrowserRouter, Route, Switch } from "react-router-dom"
import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import PropartyList from "./components/PropartyList";
// import PropartyDetail from "./components/PropartyDetail"
import NavBar from "./components/navbar/navbar"
import LoginForm from "./components/login/LoginForm"
import RegistrationForm from "./components/login/RegistrationForm"
import Home from "./components/home/HomeComponent"
import Show from "./components/demo/show"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="container">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/login/" component={LoginForm} />
              <Route path="/registration/" component={RegistrationForm} />
              <Route path="/propertylist/" component={PropartyList} />
              {/* <Route path="/propartylist/" component={PropartyDetail} /> */}
              <Route path="/show/" component={Show} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

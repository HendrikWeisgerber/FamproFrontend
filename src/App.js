
//Allgemeines
import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//Pages
import Test from "./Pages/Test2"
import DWE from "./Pages/DWE"



class App extends Component {
 
  render(){
    //Links
    const HomeLink="/";
    const DWELink = "/DWE";

    return<Router>
        <Switch>
            <Route exact path={HomeLink} component = {Test} />
            <Route exact path={DWELink} component = {DWE} />
        </Switch>
    </Router>

  }
}
export default App;
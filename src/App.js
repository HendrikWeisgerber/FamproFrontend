
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


class App extends Component {
 
  render(){
    //Links
    const HomeLink="/";



    return<Router>
        <Switch>
            <Route exact path={HomeLink} component = {Test} />

        </Switch>
    </Router>

  }
}
export default App;
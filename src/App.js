
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
import Fehler from "./Components/Fehler/FehlerPage"
import DWE from "./Pages/DWE"



class App extends Component {
 
  render(){
    //Links
    const HomeLink="/";
    const FehlerLink="/Fehler404";
    const DWELink = "/DWE";

    

    return<Router>
        <Switch>
            <Route exact path={HomeLink} component = {Test} />
            <Route exact path={FehlerLink} component = {Fehler} />
            <Route exact path={DWELink} component = {DWE} />


           

            <Redirect to ={FehlerLink}/>
        </Switch>
    </Router>

  }
}
export default App;
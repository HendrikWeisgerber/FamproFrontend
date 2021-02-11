
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
<<<<<<< HEAD
import Fehler from "./Components/Fehler/FehlerPage"
=======
import DWE from "./Pages/DWE"

>>>>>>> 0868420763d96a906b0ce48f2df237d64fdff111


class App extends Component {
 
  render(){
    //Links
    const HomeLink="/";
<<<<<<< HEAD
    const FehlerLink="/Fehler404";


=======
    const DWELink = "/DWE";
>>>>>>> 0868420763d96a906b0ce48f2df237d64fdff111

    return<Router>
        <Switch>
            <Route exact path={HomeLink} component = {Test} />
<<<<<<< HEAD
            <Route exact path={FehlerLink} component = {Fehler} />



            <Redirect to ={FehlerLink}/>

=======
            <Route exact path={DWELink} component = {DWE} />
>>>>>>> 0868420763d96a906b0ce48f2df237d64fdff111
        </Switch>
    </Router>

  }
}
export default App;
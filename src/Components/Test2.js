import React, { Component } from "react";

import { Link } from "react-router-dom";


class Test2 extends Component {




  render(){

  
    var Text = localStorage.getItem('Text1')

  

    return(
        <div>
    <h1>Es hat Funktioniert </h1>
        Ich speichere die änderung erst wenn der Server fertig geladen hat. Der Server Start dauert immer ewig, aber wenn er einmal läuft dann läufts :D, so Speichere jetzt
            </div>
    )
  }
}
export default Test2;
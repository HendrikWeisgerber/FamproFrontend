import React, { Component } from "react";

import { Link } from "react-router-dom";

class Fehler extends Component {
  

  render() {
    const HomeLink = "/";
    return (
      <div >
        <div>
          <div> Sorry, da hat etwas nicht geklappt</div>
        </div>
        <div >
          Der von Ihnen aufgerufene Link kann leider nicht verarbeitet werden.
          Dies tut uns sehr Leid. <br />
          Über diesen Link gelangen Sie wieder zurück auf die Startseite: <br />
          <Link to={HomeLink}>Startseite</Link>
        </div>
        <br />
      </div>
    );
  }
}
export default Fehler;
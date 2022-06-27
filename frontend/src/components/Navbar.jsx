import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="App-header">
      <h1> Ceci est mon header</h1>
      <div className="navbar-nav">
        {/** englober les deux div suivantes d'un lien permettant d'accéder à la page  */}
        <div> Birds</div>

        <div> Dogs</div>

        <div> Add animals</div>
      </div>
    </nav>
  );
}

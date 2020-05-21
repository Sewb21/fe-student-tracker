import React from "react";
import { Link } from "@reach/router";

function Header() {
  return (
    <header className="App-header">
      <Link to="/">
        <h1>Northcoders Student Tracker</h1>
      </Link>
    </header>
  );
}

export default Header;

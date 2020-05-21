import React from "react";
import { Link } from "@reach/router";

function NavBar() {
  return (
    <nav className="student--block--links">
      <h4>Links:</h4>
      <Link to="/students">
        <p>Students</p>
      </Link>
      <Link to="/students/block/grad">
        <p>Graduated Students</p>
      </Link>
      <Link to="/students/block/fe">
        <p>Front End Students</p>
      </Link>
      <Link to="/students/block/be">
        <p>Back End Students</p>
      </Link>
      <Link to="/students/block/fun">
        <p>Fundementals Students</p>
      </Link>
    </nav>
  );
}

export default NavBar;

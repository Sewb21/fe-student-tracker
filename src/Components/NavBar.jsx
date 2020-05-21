import React from "react";
import { Link } from "@reach/router";

function NavBar() {
  return (
    <nav>
      <Link to="/students">
        <p>Students</p>
      </Link>
    </nav>
  );
}

export default NavBar;

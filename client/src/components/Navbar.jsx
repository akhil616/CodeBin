import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>CodeBin</h1>
        </Link>
        <nav>
          <div>
            <button>+ Paste</button>
            <button>Find</button>
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

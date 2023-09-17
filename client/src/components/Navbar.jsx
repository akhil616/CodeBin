import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <h1>Paste Bin</h1>
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

import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = (e) => {
    logout();
  };
  return (
    <header>
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>CodeBin</h1>
        </Link>
        <div className="menu"></div>
        <nav>
          <Link to="/">
            <button>+ Paste</button>
          </Link>
          <form className="search-form">
            <input
              type="text"
              name="query"
              className="search-box"
              placeholder="Search..."
              autoComplete="off"
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Logout</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

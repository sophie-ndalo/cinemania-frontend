import React from "react";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ liststyle: "none" }}
            >
              <li className="nav-item" style={{ liststyle: "none" }}>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/moviesusers"
                >
                  MoviesUsers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movielist">
                  MovieList
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/loginform">
                  LoginForm
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ background: "gray", height: "10vh" }}>
        <div className="container-fluid" >
          {/* <Link className="navbar-brand" to="/">
            Home
          </Link> */}
          {/* <h1 style={{ color: "white" }}>CinemaMania</h1> */}
          <div className="collapse navbar-collapse" id="navbarText" style={{ marginRight: "10%",background: "gray" }}>
  <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ listStyle: "none", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end", width: "100%", gap: "1rem" }}>
    <li className="nav-item" style={{ marginTop: "50px" }}>
      <Link className="nav-link active" aria-current="page" to="/">
        Home
      </Link>
    </li>
    <li className="nav-item" style={{ marginTop: "50px" }}>
      <Link className="nav-link" to="/moviesusers">
        Movies
      </Link>
    </li>
    <li className="nav-item" style={{ marginTop: "50px" }}>
      <Link className="nav-link" to="/movielist">
        Admin
      </Link>
    </li>
    {/* <li className="nav-item">
      <Link className="nav-link" to="/loginform">
        LoginForm
      </Link>
    </li> */}
    <li className="nav-item" style={{ marginTop: "50px" }}>
      <Link className="nav-link" to="/signuplogin">
        Signup/Login
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

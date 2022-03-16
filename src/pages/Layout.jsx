import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
            <button type="button" class="btn btn-danger">Home</button>
            </Link>
          </li>
          <li>
            <Link to="/VisualEditor">
            <button type="button" class="btn btn-warning">VisualEditor</button>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <button type="button" class="btn btn-primary">About</button>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
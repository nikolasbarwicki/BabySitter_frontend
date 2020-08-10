import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        YourBabySitter
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/sitters">
              Babysitter wanted
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jobs">
              Babysitting jobs
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item mr-2">
            <Link to="/register" className="btn btn-primary">
              Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="btn btn-secondary">
              Log in
            </Link>
          </li>
        </ul>
        {/* <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
          >
            Dashboard
          </button>
          <ul className="dropdown-menu dropdown-menu-right">
            <li>
              <button className="dropdown-item" type="button">
                Edit profile
              </button>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Logout
              </button>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  </nav>
);

export default Navigation;

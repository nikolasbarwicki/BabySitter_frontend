import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

const Navigation = ({ isAuthenticated, loading, logout, name }) => {
  const authLinks = (
    <div className="btn-group d-flex">
      <button
        type="button"
        className="btn btn-outline-light dropdown-toggle"
        data-toggle="dropdown"
      >
        Hi, {name}{' '}
      </button>
      <ul className="dropdown-menu dropdown-menu-right">
        <li>
          <Link to="/dashboard" className="dropdown-item">
            Dashboard
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button onClick={logout} className="dropdown-item" type="button">
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <ul className="navbar-nav mb-2 mb-lg-0 ">
      <li className="nav-item mr-2">
        <Link to="/login" className="nav-link">
          Sign In
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="btn btn-primary">
          Sign up
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
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
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/sitters"
              >
                Babysitter wanted
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/jobs">
                Babysitting jobs
              </NavLink>
            </li>
          </ul>
          {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.auth.user.name,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { logout })(Navigation);

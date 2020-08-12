import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

const Navigation = ({ isAuthenticated, loading, logout }) => {
  const authLinks = (
    <div className="btn-group">
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
          <button onClick={logout} className="dropdown-item" type="button">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
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
  );

  return (
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
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { logout })(Navigation);

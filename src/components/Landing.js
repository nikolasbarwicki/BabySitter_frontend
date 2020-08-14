import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  const [query, setQuery] = useState('');

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container ">
      <div className="row justify-content-md-center align-items-center vh-100">
        <div className="col col-lg-3 d-flex flex-column justify-content-center">
          <h5 className="mb-3 text-center">Quickly find a babysitter</h5>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Link
              to={{
                pathname: '/sitters',
                search: `?location.city=${query}`,
              }}
              className="btn btn-outline-secondary"
              type="button"
            >
              <svg
                width="1.2em"
                height="1.2em"
                viewBox="0 0 16 16"
                className="bi bi-search"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fillRule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="col col-lg-3 d-flex flex-column justify-content-center">
          <h5 className="mb-3 text-center">Looking far a babysitting job?</h5>
          <Link to="/register" className="btn btn-primary">
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);

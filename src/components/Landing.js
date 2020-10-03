import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  faPiggyBank,
  faChild,
  faGlobeEurope,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated, history: { push } }) => {
  const [query, setQuery] = useState('');

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container ">
      <div
        className="row d-flex flex-column flex-md-row justify-content-center align-items-center"
        style={{ height: '60vh' }}
      >
        <div className="col-12 col-sm-8 col-md-4 col-lg-4 mb-3">
          <h5 className="mb-3 text-center">Quickly find a babysitter</h5>
          <form
            className="input-group"
            onSubmit={(e) => {
              e.preventDefault();
              push({
                pathname: '/sitters',
                search: `?city=${query}`,
              });
            }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Enter city"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
            <button className="btn btn-outline-secondary" type="submit">
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
            </button>
          </form>
        </div>
        <div className="col-12 col-sm-8 col-md-4 col-lg-4 mb-3">
          <h5 className="mb-3 text-center">Looking for a babysitting job?</h5>
          <Link to="/register" className="btn btn-primary d-block">
            Sign up for free
          </Link>
        </div>
      </div>
      <div className="row d-flex flex-row text-center justify-content-center">
        <h3 className="mb-5">
          Together we make babysitting transparent and trustworthy
        </h3>
        <div className="col-6 col-lg-2">
          <div>
            <FontAwesomeIcon icon={faChild} size="4x" color="#0052cc" />
            <h5 className="mt-3">Free for babysitters</h5>
          </div>
        </div>
        <div className="col-6 col-lg-2">
          <div>
            <FontAwesomeIcon icon={faPiggyBank} size="4x" color="#0052cc" />
            <h5 className="mt-3">Affordable for parents</h5>
          </div>
        </div>
        <div className="col-6 col-lg-2">
          <div>
            <FontAwesomeIcon icon={faGlobeEurope} size="4x" color="#0052cc" />
            <h5 className="mt-3">Babysitters across England</h5>
          </div>
        </div>
        <div className="col-6 col-lg-2">
          <div>
            <FontAwesomeIcon icon={faShieldAlt} size="4x" color="#0052cc" />
            <h5 className="mt-3">Trustworthy user verifications</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);

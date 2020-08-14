import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="d-block">Page not found...</h2>
          <h4 className="d-block">
            We&apos;re unable to find the page you&apos;re looking for
          </h4>

          <Link to="/" className="btn btn-primary mt-5 col-2">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const SittersItem = ({ name, age, city, desc, id }) => {
  return (
    <div className="card mb-4" style={{ minHeight: '10rem' }}>
      <div className="row g-0">
        <div className="col-md-4 col-lg-3 d-flex justify-content-center align-items-center">
          <img
            className="rounded-circle m-2"
            width="120px"
            height="120px"
            src="https://t4.ftcdn.net/jpg/03/20/77/15/240_F_320771526_waXiA8ga1jM62AiGpAaqYFD0MggrwnHj.jpg"
            alt="..."
          />
        </div>
        <div className="col-md-8 col-lg-9">
          <div className="card-body h-100 d-flex flex-column justify-content-center">
            <h5 className="card-title">
              {name}, {age}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">Babysitter {city}</h6>
            <p className="card-text mb-0">
              {_.truncate(desc, {
                length: 120,
                separator: ' ',
              })}
            </p>
            <Link to={`/sitters/${id}`} className="stretched-link" />
          </div>
        </div>
      </div>
    </div>
  );
};

SittersItem.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SittersItem;

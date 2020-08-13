import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const SittersItem = ({ name, dateOfBirth, city, desc, id }) => {
  return (
    <div className="card mb-4">
      <div className="row g-0">
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <img
            className="rounded-circle m-2"
            width="120px"
            height="120px"
            src="https://t4.ftcdn.net/jpg/03/20/77/15/240_F_320771526_waXiA8ga1jM62AiGpAaqYFD0MggrwnHj.jpg"
            alt="..."
          />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">
              {name}, {moment().diff(dateOfBirth, 'years')}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">Babysitter {city}</h6>
            <p className="card-text">{desc}</p>
            <Link to={`/sitters/${id}`} className="stretched-link" />
          </div>
        </div>
      </div>
    </div>
  );
};

SittersItem.propTypes = {
  name: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SittersItem;

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const JobsItem = ({
  name,
  numberOfChildren,
  ageOfChildren,
  city,
  desc,
  id,
}) => {
  function listAges() {
    const array = [];
    if (numberOfChildren) {
      Object.entries(ageOfChildren).forEach((el) =>
        el[1] ? array.push(el[0]) : null,
      );
    }
    switch (array.length) {
      case 1:
        return array;
      case 2:
        return `${array[0]} and ${array[1]}`;
      default:
        return array.join(', ');
    }
  }

  return (
    <div className="card mb-4 shadow-sm bg-light">
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
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Babysitting job {city}
            </h6>
            <h6 className="card-subtitle mb-2">
              {numberOfChildren === 1
                ? `${numberOfChildren} child`
                : `${numberOfChildren} children`}{' '}
              ({listAges()})
            </h6>
            <p className="card-text">
              {_.truncate(desc, {
                length: 120,
                separator: ' ',
              })}
            </p>
            <Link to={`/jobs/${id}`} className="stretched-link" />
          </div>
        </div>
      </div>
    </div>
  );
};

JobsItem.propTypes = {
  name: PropTypes.string.isRequired,
  numberOfChildren: PropTypes.number.isRequired,
  ageOfChildren: PropTypes.shape({
    baby: PropTypes.bool.isRequired,
    toddler: PropTypes.bool.isRequired,
    preschooler: PropTypes.bool.isRequired,
    gradeschooler: PropTypes.bool.isRequired,
    teenager: PropTypes.bool.isRequired,
  }).isRequired,
  city: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default JobsItem;

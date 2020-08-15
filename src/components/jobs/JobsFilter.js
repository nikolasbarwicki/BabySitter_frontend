import React, { useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFilteredJobs } from '../../actions/jobs';

const JobsFilter = ({ getFilteredJobs, history: { push } }) => {
  const [formData, setFormData] = useState({
    city: null,
    radius: null,
    baby: null,
    toddler: null,
    preschooler: null,
    gradeschooler: null,
    teenager: null,
    minHourlyRate: '',
    pets: null,
    cooking: null,
    chores: null,
    sort: null,
  });

  const {
    city,
    radius,
    baby,
    toddler,
    preschooler,
    gradeschooler,
    teenager,
    minHourlyRate,
    pets,
    cooking,
    chores,
    sort,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onCheck = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.checked });

  const onSubmit = async (e) => {
    e.preventDefault();

    const query = {
      city,
      radius,
      'ageOfChildren.baby': baby,
      'ageOfChildren.toddler': toddler,
      'ageOfChildren.preschooler': preschooler,
      'ageOfChildren.gradeschooler': gradeschooler,
      'ageOfChildren.teenager': teenager,
      'comfortableWith.pets': pets,
      'comfortableWith.cooking': cooking,
      'comfortableWith.chores': chores,
      sort,
      'hourlyRate[lte]': minHourlyRate,
    };

    for (const key of Object.keys(query)) {
      if (query[key] === '' || !query[key]) {
        delete query[key];
      }
    }

    push({
      pathname: '/jobs',
      search: queryString.stringify(query),
    });

    getFilteredJobs(query);
  };

  return (
    <div className="col-4">
      <h4>Filters</h4>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              id="city"
              className="form-control"
              placeholder="City"
              value={city}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className="col-sm-6">
            <label htmlFor="radius" className="form-label">
              Distance
            </label>
            <select
              className="form-select"
              id="radius"
              value={radius}
              onChange={(e) => onChange(e)}
            >
              <option value="">Set radius</option>
              <option value="10">10 km</option>
              <option value="20">20 km</option>
              <option value="50">50 km</option>
              <option value="100">100 km</option>
              <option value="200">200 km</option>
            </select>
          </div>
        </div>

        <div>
          Experience with age(s)
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              autoComplete="off"
              id="baby"
              checked={baby}
              onChange={(e) => onCheck(e)}
            />
            <label className="form-check-label" htmlFor="baby">
              baby
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              autoComplete="off"
              id="toddler"
              checked={toddler}
              onChange={(e) => onCheck(e)}
            />
            <label className="form-check-label" htmlFor="toddler">
              toddler
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              autoComplete="off"
              id="preschooler"
              checked={preschooler}
              onChange={(e) => onCheck(e)}
            />
            <label className="form-check-label" htmlFor="preschooler">
              preschooler
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              autoComplete="off"
              id="gradeschooler"
              checked={gradeschooler}
              onChange={(e) => onCheck(e)}
            />
            <label className="form-check-label" htmlFor="gradeschooler">
              gradeschooler
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              autoComplete="off"
              id="teenager"
              checked={teenager}
              onChange={(e) => onCheck(e)}
            />
            <label className="form-check-label" htmlFor="teenager">
              teenager
            </label>
          </div>
        </div>

        <label htmlFor="minHourlyRate" className="form-label">
          Minimum pay per hour
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>

          <input
            type="text"
            className="form-control"
            id="minHourlyRate"
            value={minHourlyRate}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div>
          Needs a babysitter comfortable with
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              autoComplete="off"
              id="pets"
              checked={pets}
              onChange={(e) => onCheck(e)}
            />
            <label className="form-check-label" htmlFor="pets">
              pets
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              autoComplete="off"
              id="cooking"
              checked={cooking}
              onChange={(e) => onCheck(e)}
            />
            <label className="form-check-label" htmlFor="cooking">
              cooking
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              autoComplete="off"
              id="chores"
              checked={chores}
              onChange={(e) => onCheck(e)}
            />
            <label className="form-check-label" htmlFor="chores">
              chores
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="sort" className="form-label">
            Sort by
          </label>
          <select
            className="form-select"
            id="sort"
            value={sort}
            onChange={(e) => onChange(e)}
          >
            <option value="" defaultValue>
              Sort by
            </option>
            <option value="hourlyRate">Hourly rate</option>
            <option value="numberOfChildren">Number of children</option>
          </select>
          <button type="submit" className="btn btn-primary btn-lg mt-4 mb-4">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

JobsFilter.propTypes = {
  getFilteredJobs: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, { getFilteredJobs })(withRouter(JobsFilter));

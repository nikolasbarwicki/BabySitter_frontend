import React, { useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFilteredSitters } from '../../actions/sitters';

const SittersFilter = ({ getFilteredSitters, history: { push } }) => {
  const [formData, setFormData] = useState({
    city: '',
    radius: '',
    minAge: '',
    maxAge: '',
    baby: false,
    toddler: false,
    preschooler: false,
    gradeschooler: false,
    teenager: false,
    maxHourlyRate: '',
    crafting: false,
    drawing: false,
    reading: false,
    music: false,
    language: false,
    games: false,
    pets: false,
    cooking: false,
    chores: false,
    sort: '',
  });

  const {
    city,
    radius,
    minAge,
    maxAge,
    baby,
    toddler,
    preschooler,
    gradeschooler,
    teenager,
    maxHourlyRate,
    crafting,
    drawing,
    reading,
    music,
    language,
    games,
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
      'experienceAges.baby': baby,
      'experienceAges.toddler': toddler,
      'experienceAges.preschooler': preschooler,
      'experienceAges.gradeschooler': gradeschooler,
      'experienceAges.teenager': teenager,
      'skills.crafting': crafting,
      'skills.drawing': drawing,
      'skills.reading': reading,
      'skills.music': music,
      'skills.language': language,
      'skills.games': games,
      'comfortableWith.pets': pets,
      'comfortableWith.cooking': cooking,
      'comfortableWith.chores': chores,
      'age[gte]': minAge,
      'age[lte]': maxAge,
      sort,
      'hourlyRate[lte]': maxHourlyRate,
    };

    for (const key of Object.keys(query)) {
      if (query[key] === '' || !query[key]) {
        delete query[key];
      }
    }

    push({
      pathname: '/sitters',
      search: queryString.stringify(query),
    });

    getFilteredSitters(query);
  };

  return (
    <div className="col-12 col-sm-4">
      <h4 className="mb-4">Filters</h4>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="row g-3 mb-4">
          <div className="col-12 col-lg-6">
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

          <div className="col-12 col-lg-6">
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
        <div className="row g-3 mt-1">
          <div className="col-12 col-lg-6">
            <label htmlFor="inputEmail4" className="form-label">
              Minimum age
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Minimum age"
              id="minAge"
              value={minAge}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className="col-12 col-lg-6">
            <label htmlFor="inputEmail4" className="form-label">
              Maximum age
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Maximum age"
              id="maxAge"
              value={maxAge}
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div className="mt-3">
          <span className="font-weight-bold">Experience with age(s)</span>
          <div className="form-check mt-2">
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
          <div className="form-check mt-2">
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
          <div className="form-check mt-2">
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
          <div className="form-check mt-2">
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
          <div className="form-check mt-2">
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

        <label htmlFor="maxHourlyRate" className="form-label mt-3 ">
          Maxium pay per hour
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>

          <input
            type="text"
            className="form-control"
            id="maxHourlyRate"
            value={maxHourlyRate}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="mb-3">
          <span className="font-weight-bold">Skills</span>
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              autoComplete="off"
              id="crafting"
              checked={crafting}
              onChange={(e) => onCheck(e)}
            />
            <label className="form-check-label" htmlFor="crafting">
              crafting
            </label>
          </div>
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              autoComplete="off"
              id="drawing"
              checked={drawing}
              onChange={(e) => onCheck(e)}
            />
            <label className="form-check-label" htmlFor="drawing">
              drawing
            </label>
          </div>
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              autoComplete="off"
              id="reading"
              checked={reading}
              onChange={(e) => onCheck(e)}
            />
            <label className="form-check-label" htmlFor="reading">
              reading
            </label>
          </div>
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              autoComplete="off"
              id="music"
              checked={music}
              onChange={(e) => onCheck(e)}
            />
            <label className="form-check-label" htmlFor="music">
              music
            </label>
          </div>
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              autoComplete="off"
              id="language"
              checked={language}
              onChange={(e) => onCheck(e)}
            />
            <label className="form-check-label" htmlFor="language">
              language
            </label>
          </div>
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              autoComplete="off"
              id="games"
              checked={games}
              onChange={(e) => onCheck(e)}
            />
            <label className="form-check-label" htmlFor="games">
              games
            </label>
          </div>
        </div>
        <div className="mb-3">
          <span className="font-weight-bold">Comfortable with</span>
          <div className="form-check mt-2">
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
          <div className="form-check mt-2">
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
          <div className="form-check mt-2">
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
          </select>
          <button type="submit" className="btn btn-primary btn-lg mt-4 mb-4">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

SittersFilter.propTypes = {
  getFilteredSitters: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, { getFilteredSitters })(withRouter(SittersFilter));

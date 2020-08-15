import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createParentProfile } from '../../actions/jobs';

const CreateParentProfile = ({ createParentProfile, history }) => {
  const [formData, setFormData] = useState({
    address: '',
    description: '',
    baby: false,
    toddler: false,
    preschooler: false,
    gradeschooler: false,
    teenager: false,
    hourlyRate: 0,
    numberOfChildren: 1,
    pets: false,
    cooking: false,
    chores: false,
    contactPhone: '',
    contactEmail: '',
  });

  const {
    address,
    description,
    baby,
    toddler,
    preschooler,
    gradeschooler,
    teenager,
    hourlyRate,
    numberOfChildren,
    pets,
    cooking,
    chores,
    contactPhone,
    contactEmail,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onCheck = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.checked });

  const onSubmit = async (e) => {
    e.preventDefault();
    createParentProfile(formData, history);
  };

  return (
    <div className="container">
      <h4 className="mt-3">Edit your profile</h4>
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-xl-8">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="card p-4">
              <div className="row">
                <div className="col-12 mt-3">
                  <label htmlFor="hourlyRate" className="form-label">
                    Hourly rate for babysitting
                  </label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">
                      $
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      id="hourlyRate"
                      value={hourlyRate}
                      onChange={(e) => onChange(e)}
                    />
                    <span className="input-group-text">/hr</span>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="test"
                  className="form-control"
                  id="address"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => onChange(e)}
                />
                <div id="cityHelp" className="form-text">
                  Please provide either city or city and street
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Message to babysitters
                </label>
                <textarea
                  className="form-control"
                  rows="5"
                  id="description"
                  placeholder="Tell us something more about your children and you"
                  value={description}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>

            <div className="card p-4 mt-4">
              <h5 className="mb-3">About us</h5>
              <div className="mb-3">
                <label htmlFor="numberOfChildren" className="form-label">
                  Number of children
                </label>
                <select
                  id="numberOfChildren"
                  className="form-select"
                  value={numberOfChildren}
                  onChange={(e) => onChange(e)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <label htmlFor="experience" className="form-label">
                Age of children
              </label>
              <div className="d-flex flex-row flex-wrap">
                <div className="mr-3 mb-3 mb-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="baby"
                    autoComplete="off"
                    checked={baby}
                    onChange={(e) => onCheck(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="baby">
                    Baby
                  </label>
                </div>
                <div className="mr-3 mb-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="toddler"
                    autoComplete="off"
                    checked={toddler}
                    onChange={(e) => onCheck(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="toddler">
                    Toddler
                  </label>
                </div>
                <div className="mr-3 mb-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="preschooler"
                    autoComplete="off"
                    checked={preschooler}
                    onChange={(e) => onCheck(e)}
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="preschooler"
                  >
                    Preschooler
                  </label>
                </div>
                <div className="mr-3 mb-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="gradeschooler"
                    autoComplete="off"
                    checked={gradeschooler}
                    onChange={(e) => onCheck(e)}
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="gradeschooler"
                  >
                    Gradeschooler
                  </label>
                </div>
                <div className="mr-3 mb-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="teenager"
                    autoComplete="off"
                    checked={teenager}
                    onChange={(e) => onCheck(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="teenager">
                    Teenager
                  </label>
                </div>
              </div>
            </div>
            <div className="card p-4 mt-4">
              <h5 className="mb-3">We need a babysitter comfortable with</h5>
              <div className="d-flex flex-row flex-wrap">
                <div className="mr-3 mb-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="pets"
                    autoComplete="off"
                    checked={pets}
                    onChange={(e) => onCheck(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="pets">
                    pets
                  </label>
                </div>
                <div className="mr-3 mb-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="cooking"
                    autoComplete="off"
                    checked={cooking}
                    onChange={(e) => onCheck(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="cooking">
                    cooking
                  </label>
                </div>
                <div className="mr-3 mb-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="chores"
                    autoComplete="off"
                    checked={chores}
                    onChange={(e) => onCheck(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="chores">
                    chores
                  </label>
                </div>
              </div>
            </div>
            <div className="card p-4 mt-4">
              <h5 className="mb-2">Contact</h5>
              <div className="row">
                <div className="col-12 col-md-6 mt-3">
                  <label htmlFor="contactEmail" className="form-label">
                    Contact email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="contactEmail"
                    placeholder="Enter your contact email"
                    value={contactEmail}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="col-12 col-md-6 mt-3">
                  <label htmlFor="contactPhone" className="form-label">
                    Contact phone
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="phone"
                      className="form-control"
                      id="contactPhone"
                      placeholder="Enter your contact phone"
                      value={contactPhone}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-lg mt-4 mb-4">
              Create profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

CreateParentProfile.propTypes = {
  createParentProfile: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, { createParentProfile })(
  withRouter(CreateParentProfile),
);

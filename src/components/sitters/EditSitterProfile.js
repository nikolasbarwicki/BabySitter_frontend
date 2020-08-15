import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { getCurrentProfile } from '../../actions/profile';
import { editSitterProfile } from '../../actions/sitters';

const EditSitterProfile = ({
  profile: { profile, loading },
  editSitterProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    address: '',
    dateOfBirth: '',
    description: '',
    experience: '<1 year',
    baby: false,
    toddler: false,
    preschooler: false,
    gradeschooler: false,
    teenager: false,
    hourlyRate: 0,
    crafting: false,
    drawing: false,
    reading: false,
    music: false,
    language: false,
    games: false,
    pets: false,
    cooking: false,
    chores: false,
    contactPhone: '',
    contactEmail: '',
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      address:
        loading || !profile.location
          ? ''
          : `${profile.location.city} ${profile.location.street}`,
      dateOfBirth:
        loading || !profile.dateOfBirth
          ? ''
          : moment(profile.dateOfBirth).format('yyyy-MM-DD'),
      description: loading || !profile.description ? '' : profile.description,
      experience: loading || !profile.experience ? '' : profile.experience,
      baby:
        loading || !profile.experienceAges.baby
          ? false
          : profile.experienceAges.baby,
      toddler:
        loading || !profile.experienceAges.toddler
          ? false
          : profile.experienceAges.toddler,
      preschooler:
        loading || !profile.experienceAges.preschooler
          ? false
          : profile.experienceAges.preschooler,
      gradeschooler:
        loading || !profile.experienceAges.gradeschooler
          ? false
          : profile.experienceAges.gradeschooler,
      teenager:
        loading || !profile.experienceAges.teenager
          ? false
          : profile.experienceAges.teenager,
      hourlyRate: loading || !profile.hourlyRate ? 0 : profile.hourlyRate,
      crafting:
        loading || !profile.skills.crafting ? false : profile.skills.crafting,
      drawing:
        loading || !profile.skills.drawing ? false : profile.skills.drawing,
      reading:
        loading || !profile.skills.reading ? false : profile.skills.reading,
      music: loading || !profile.skills.music ? false : profile.skills.music,
      language:
        loading || !profile.skills.language ? false : profile.skills.language,
      games: loading || !profile.skills.games ? false : profile.skills.games,
      pets:
        loading || !profile.comfortableWith.pets
          ? false
          : profile.comfortableWith.pets,
      cooking:
        loading || !profile.comfortableWith.cooking
          ? false
          : profile.comfortableWith.cooking,
      chores:
        loading || !profile.comfortableWith.chores
          ? false
          : profile.comfortableWith.chores,
      contactPhone:
        loading || !profile.contactPhone ? '' : profile.contactPhone,
      contactEmail:
        loading || !profile.contactEmail ? '' : profile.contactEmail,
    });
  }, [loading]);

  const {
    address,
    dateOfBirth,
    description,
    experience,
    baby,
    toddler,
    preschooler,
    gradeschooler,
    teenager,
    hourlyRate,
    crafting,
    drawing,
    reading,
    music,
    language,
    games,
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
    // eslint-disable-next-line no-underscore-dangle
    editSitterProfile(formData, history, profile._id);
  };

  return (
    <div className="container">
      <h4 className="mt-3">Edit your profile</h4>
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-xl-8">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="card p-4">
              <div className="row">
                <div className="col-12 col-md-6 mt-3">
                  <label htmlFor="dateOfBirth" className="form-label">
                    Date of birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateOfBirth"
                    value={dateOfBirth}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="col-12 col-md-6 mt-3">
                  <label htmlFor="hourlyRate" className="form-label">
                    Hourly rate
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
                <label htmlFor="experience" className="form-label">
                  Experience
                </label>
                <select
                  id="experience"
                  className="form-select"
                  value={experience}
                  onChange={(e) => onChange(e)}
                >
                  <option defaultValue disabled checked>
                    Choose your experience...
                  </option>
                  <option value="<1 year">less than 1 year</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="2-5 years">2-5 years</option>
                  <option value=">5 years">more than 5 years</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  rows="5"
                  id="description"
                  placeholder="Tell us something more about you"
                  value={description}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className="card p-4 mt-4">
              <h5 className="mb-3">Age of children</h5>
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
              <h5 className="mb-3">My skills</h5>
              <div className="d-flex flex-row flex-wrap">
                <div className="mr-3 mb-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="crafting"
                    autoComplete="off"
                    checked={crafting}
                    onChange={(e) => onCheck(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="crafting">
                    Crafting
                  </label>
                </div>
                <div className="mr-3 mb-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="drawing"
                    autoComplete="off"
                    checked={drawing}
                    onChange={(e) => onCheck(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="drawing">
                    Drawing
                  </label>
                </div>
                <div className="mr-3 mb-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="reading"
                    autoComplete="off"
                    checked={reading}
                    onChange={(e) => onCheck(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="reading">
                    Reading
                  </label>
                </div>
                <div className="mr-3 mb-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="music"
                    autoComplete="off"
                    checked={music}
                    onChange={(e) => onCheck(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="music">
                    Music
                  </label>
                </div>
                <div className="mr-3 mb-3">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="language"
                    autoComplete="off"
                    checked={language}
                    onChange={(e) => onCheck(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="language">
                    Language
                  </label>
                </div>
                <div className="mr-3 mb-3">
                  <input
                    type="checkbox"
                    className="btn-check "
                    id="games"
                    autoComplete="off"
                    checked={games}
                    onChange={(e) => onCheck(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor="games">
                    Games
                  </label>
                </div>
              </div>
            </div>
            <div className="card p-4 mt-4">
              <h5 className="mb-3">I&apos;m comfortable with</h5>
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
              Update profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

EditSitterProfile.propTypes = {
  profile: PropTypes.shape({
    profile: PropTypes.shape({
      location: PropTypes.shape({
        city: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
      }).isRequired,
      dateOfBirth: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      experience: PropTypes.string.isRequired,
      experienceAges: PropTypes.shape({
        baby: PropTypes.bool.isRequired,
        toddler: PropTypes.bool.isRequired,
        preschooler: PropTypes.bool.isRequired,
        gradeschooler: PropTypes.bool.isRequired,
        teenager: PropTypes.bool.isRequired,
      }).isRequired,
      hourlyRate: PropTypes.number.isRequired,
      skills: PropTypes.shape({
        crafting: PropTypes.bool.isRequired,
        drawing: PropTypes.bool.isRequired,
        reading: PropTypes.bool.isRequired,
        music: PropTypes.bool.isRequired,
        language: PropTypes.bool.isRequired,
        games: PropTypes.bool.isRequired,
      }).isRequired,
      comfortableWith: PropTypes.shape({
        pets: PropTypes.bool.isRequired,
        cooking: PropTypes.bool.isRequired,
        chores: PropTypes.bool.isRequired,
      }).isRequired,
      contactPhone: PropTypes.string.isRequired,
      contactEmail: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  editSitterProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

EditSitterProfile.defaultProps = {};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  editSitterProfile,
  getCurrentProfile,
})(withRouter(EditSitterProfile));

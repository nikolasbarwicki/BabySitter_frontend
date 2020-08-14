import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  faTools,
  faPencilAlt,
  faBook,
  faMusic,
  faLanguage,
  faPuzzlePiece,
  faDog,
  faUtensils,
  faBroom,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import moment from 'moment';
import { getProfileById } from '../../actions/profile';
import ContactModal from './ContactModal';

const SittersProfile = ({
  getProfileById,
  match,
  profile: { profile, loading },
  auth: { isAuthenticated },
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById]);

  return (
    <div className="container">
      {profile === null || loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="row">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                {/* TODO: Add reactive breadcrumbs link */}
                <li className="breadcrumb-item">
                  <Link to="/dashboard">Babysitter</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/dashboard">Wrocław</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Nikolas
                </li>
              </ol>
            </nav>
          </div>
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="card mb-4 " style={{ height: '10rem' }}>
                <div className="row">
                  <div className="col-md-4 col-lg-3 align-self-center col-4 d-none d-sm-block">
                    <img
                      src="https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144849704.jpg"
                      alt="gosciu"
                      style={{ width: '140px' }}
                      className="rounded float-left m-2"
                    />
                  </div>
                  <div className="col-sm-8 col-md-8 col-lg-9 align-self-center col-12">
                    <div className="">
                      <h5 className="">
                        {profile.user.name},{' '}
                        {moment().diff(profile.dateOfBirth, 'years')}
                      </h5>
                      <h6 className="mb-2 text-muted">
                        Babysitter {profile.location.city}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div
                className="card d-flex-column align-items-center justify-content-center"
                style={{ height: '10rem' }}
              >
                <div>
                  <h5 className="text-center">${profile.hourlyRate}.00/hr</h5>
                  <h6 className="mb-2 text-muted text-center">Hourly rate</h6>
                  {isAuthenticated ? (
                    <>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#contactModal"
                      >
                        Contact {profile.user.name}
                      </button>

                      <ContactModal
                        name={profile.user.name}
                        email={profile.contactEmail}
                        phone={profile.contactPhone}
                      />
                    </>
                  ) : (
                    <Link to="/login" className="btn btn-primary">
                      Login to see contact info
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <h3>Hello, I&apos;m {profile.user.name}!</h3>
            <p>{profile.description}</p>
          </div>
          <hr className="mt-2 mb-3" />
          <h5>Experience with babysitting</h5>
          <p>{profile.experience}</p>
          <hr className="mt-2 mb-3" />
          <div className="row">
            <div className="col-12 col-sm-6">
              <h5>Skills</h5>
              <ul className="list-group list-group-flush">
                <li
                  className={`list-group-item ${
                    profile.skills.crafting
                      ? null
                      : 'text-decoration-line-through'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faTools}
                    className="mr-3"
                    style={{ width: '20px' }}
                  />
                  Crafting
                </li>
                <li
                  className={`list-group-item ${
                    profile.skills.drawing
                      ? null
                      : 'text-decoration-line-through'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="mr-3"
                    style={{ width: '20px' }}
                  />
                  Drawing
                </li>
                <li
                  className={`list-group-item ${
                    profile.skills.reading
                      ? null
                      : 'text-decoration-line-through'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faBook}
                    className="mr-3"
                    style={{ width: '20px' }}
                  />
                  Reading
                </li>
                <li
                  className={`list-group-item ${
                    profile.skills.music ? null : 'text-decoration-line-through'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faMusic}
                    className="mr-3"
                    style={{ width: '20px' }}
                  />
                  Music
                </li>
                <li
                  className={`list-group-item ${
                    profile.skills.language
                      ? null
                      : 'text-decoration-line-through'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faLanguage}
                    className="mr-3"
                    style={{ width: '20px' }}
                  />
                  Language
                </li>
                <li
                  className={`list-group-item ${
                    profile.skills.games ? null : 'text-decoration-line-through'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faPuzzlePiece}
                    className="mr-3"
                    style={{ width: '20px' }}
                  />
                  Games
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <h5>I&apos;m comfortable with</h5>
              <ul className="list-group list-group-flush">
                <li
                  className={`list-group-item ${
                    profile.comfortableWith.pets
                      ? null
                      : 'text-decoration-line-through'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faDog}
                    className="mr-3"
                    style={{ width: '20px' }}
                  />
                  Pets
                </li>
                <li
                  className={`list-group-item ${
                    profile.comfortableWith.cooking
                      ? null
                      : 'text-decoration-line-through'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faUtensils}
                    className="mr-3"
                    style={{ width: '20px' }}
                  />
                  Cooking
                </li>
                <li
                  className={`list-group-item ${
                    profile.comfortableWith.chores
                      ? null
                      : 'text-decoration-line-through'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faBroom}
                    className="mr-3"
                    style={{ width: '20px' }}
                  />
                  Chores
                </li>
              </ul>
            </div>
            <hr className="mt-2 mb-3" />
            <div className="row">
              <div className="col-12 mb-4">
                <h3>Experience with age(s)</h3>
                <ul className="w-100 list-group list-group-horizontal flex-md-row flex-column">
                  <li
                    className={`p-3 list-group-item flex-fill text-center ${
                      profile.experienceAges.baby ? 'active' : null
                    }`}
                  >
                    Baby
                  </li>
                  <li
                    className={`p-3 list-group-item flex-fill text-center ${
                      profile.experienceAges.toddler ? 'active' : null
                    }`}
                  >
                    Toddler
                  </li>
                  <li
                    className={`p-3 list-group-item flex-fill text-center ${
                      profile.experienceAges.preschooler ? 'active' : null
                    }`}
                  >
                    Preschooler
                  </li>
                  <li
                    className={`p-3 list-group-item flex-fill text-center ${
                      profile.experienceAges.gradeschooler ? 'active' : null
                    }`}
                  >
                    Gradeschooler
                  </li>
                  <li
                    className={`p-3 list-group-item flex-fill text-center ${
                      profile.experienceAges.teenager ? 'active' : null
                    }`}
                  >
                    Teenager
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

SittersProfile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    profile: PropTypes.oneOfType([
      'PropTypes.string.isRequired',
      'PropTypes.number.isRequired',
    ]).isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(SittersProfile);

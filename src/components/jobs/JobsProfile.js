import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  faDog,
  faUtensils,
  faBroom,
  faChild,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { getJobById } from '../../actions/jobs';
import ContactModal from './ContactModal';

const JobsProfile = ({
  getJobById,
  match,
  profile: { profile, loading },
  auth: {
    isAuthenticated,
    user: { role },
  },
}) => {
  useEffect(() => {
    getJobById(match.params.id);
  }, [getJobById, match.params.id]);

  return (
    <div className="container mt-4">
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
                <li className="breadcrumb-item">
                  <Link to="/jobs">Babysitting jobs</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link
                    to={{
                      pathname: '/jobs',
                      search: `?city=${profile.location.city}`,
                    }}
                  >
                    {profile.location.city}
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {profile.user.name}
                </li>
              </ol>
            </nav>
          </div>
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="card mb-4" style={{ height: '10rem' }}>
                <div className="d-flex d-flex-row align-items-center">
                  <div className="mr-4">
                    <img
                      src="https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144849704.jpg"
                      alt="gosciu"
                      style={{ width: '140px' }}
                      className="rounded float-left m-2"
                    />
                  </div>
                  <div>
                    <h5 className="">{profile.user.name}</h5>
                    <h6 className="mb-2 text-muted">
                      Babysitter {profile.location.city}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div
                className="card d-flex-column align-items-center justify-content-center "
                style={{ height: '10rem' }}
              >
                <div>
                  <h5 className="text-center">${profile.hourlyRate}.00/hr</h5>
                  <h6 className="mb-2 text-muted text-center">Hourly rate</h6>
                  {isAuthenticated && role === 'parent' && (
                    <p className="w-75 text-center mx-auto text-danger">
                      To contact this user, you need to change your user type.
                    </p>
                  )}
                  {isAuthenticated && role === 'sitter' && (
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
                  )}
                  {!isAuthenticated && (
                    <Link to="/login" className="btn btn-primary">
                      Login to see contact info
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <h2 className="my-3">Hello, I&apos;m {profile.user.name}!</h2>
            <p>{profile.description}</p>
          </div>
          <hr className="mt-2 mb-3" />
          <div className="row my-3">
            <div className="col-12 col-md-6">
              <h5 className="mb-3">We need a babysitter comfortable with</h5>
              <ul className="list-group list-group-flush">
                <li
                  className={`list-group-item rounded mb-3 ${
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
                  className={`list-group-item rounded mb-3 ${
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
                  className={`list-group-item rounded mb-3 ${
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
            <div className="col-12 col-md-6">
              <h5 className="mb-3">Number of children</h5>
              <ul className="list-group list-group-flush">
                <li
                  className={`list-group-item rounded mb-3 ${
                    profile.comfortableWith.chores
                      ? null
                      : 'text-decoration-line-through'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faChild}
                    className="mr-3"
                    style={{ width: '20px' }}
                  />
                  {profile.numberOfChildren > 1
                    ? `${profile.numberOfChildren} children`
                    : `${profile.numberOfChildren} child`}
                </li>
              </ul>
            </div>
            <hr className="mt-2 mb-3" />
            <div className="col-12 my-3">
              <div className="col-12 mb-4">
                <h5 className="mb-2">Experience with age(s)</h5>
                <ul className="col-12 list-group flex-md-row flex-column">
                  <li
                    className={`font-weight-bold p-3 list-group-item rounded  m-2 flex-fill text-center ${
                      profile.ageOfChildren.baby ? 'active' : null
                    }`}
                  >
                    Baby
                  </li>
                  <li
                    className={`font-weight-bold p-3 list-group-item rounded m-2 flex-fill text-center ${
                      profile.ageOfChildren.toddler ? 'active' : null
                    }`}
                  >
                    Toddler
                  </li>
                  <li
                    className={`font-weight-bold p-3 list-group-item rounded m-2 flex-fill text-center ${
                      profile.ageOfChildren.preschooler ? 'active' : null
                    }`}
                  >
                    Preschooler
                  </li>
                  <li
                    className={`font-weight-bold p-3 list-group-item rounded m-2 flex-fill text-center ${
                      profile.ageOfChildren.gradeschooler ? 'active' : null
                    }`}
                  >
                    Gradeschooler
                  </li>
                  <li
                    className={`font-weight-bold p-3 list-group-item rounded m-2 flex-fill text-center ${
                      profile.ageOfChildren.teenager ? 'active' : null
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

JobsProfile.propTypes = {
  getJobById: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    profile: PropTypes.shape({
      location: PropTypes.shape({
        city: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
      numberOfChildren: PropTypes.number.isRequired,
      ageOfChildren: PropTypes.shape({
        baby: PropTypes.bool.isRequired,
        toddler: PropTypes.bool.isRequired,
        preschooler: PropTypes.bool.isRequired,
        gradeschooler: PropTypes.bool.isRequired,
        teenager: PropTypes.bool.isRequired,
      }).isRequired,
      hourlyRate: PropTypes.number.isRequired,
      comfortableWith: PropTypes.shape({
        pets: PropTypes.bool.isRequired,
        cooking: PropTypes.bool.isRequired,
        chores: PropTypes.bool.isRequired,
      }).isRequired,
      contactPhone: PropTypes.string.isRequired,
      contactEmail: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }),
    loading: PropTypes.bool.isRequired,
  }),
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      role: PropTypes.string,
    }),
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

JobsProfile.defaultProps = {
  profile: {},
  auth: {
    user: {
      role: null,
    },
  },
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getJobById })(JobsProfile);

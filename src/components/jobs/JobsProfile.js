import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faDog, faUtensils, faBroom } from '@fortawesome/free-solid-svg-icons';
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
  }, [getJobById]);

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
            <div className="col-12 col-md-8">
              <div className="card mb-4 shadow-sm" style={{ height: '10rem' }}>
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
                      <h5 className="">{profile.user.name}</h5>
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
                className="card d-flex-column align-items-center justify-content-center shadow-sm"
                style={{ height: '10rem' }}
              >
                <div>
                  <h5 className="text-center">${profile.hourlyRate}.00/hr</h5>
                  <h6 className="mb-2 text-muted text-center">Hourly rate</h6>
                  {isAuthenticated && role === 'parent' ? (
                    <p className="w-75 text-center mx-auto text-danger">
                      To contact this user, you need to change your user type.
                    </p>
                  ) : (
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
                  {!isAuthenticated ? (
                    <Link to="/login" className="btn btn-primary">
                      Login to see contact info
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <h3>Hello, I&apos;m {profile.user.name}!</h3>
            <p>{profile.description}</p>
          </div>
          <hr className="mt-2 mb-3" />
          <div className="row">
            <div className="col-12">
              <h5>We need a babysitter comfortable with</h5>
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
                <h5>Experience with age(s)</h5>
                <ul className="w-100 list-group list-group-horizontal flex-md-row flex-column mt-3">
                  <li
                    className={`font-weight-bold p-3 list-group-item flex-fill text-center ${
                      profile.ageOfChildren.baby ? 'active' : null
                    }`}
                  >
                    Baby
                  </li>
                  <li
                    className={`font-weight-bold p-3 list-group-item flex-fill text-center ${
                      profile.ageOfChildren.toddler ? 'active' : null
                    }`}
                  >
                    Toddler
                  </li>
                  <li
                    className={`font-weight-bold p-3 list-group-item flex-fill text-center ${
                      profile.ageOfChildren.preschooler ? 'active' : null
                    }`}
                  >
                    Preschooler
                  </li>
                  <li
                    className={`font-weight-bold p-3 list-group-item flex-fill text-center ${
                      profile.ageOfChildren.gradeschooler ? 'active' : null
                    }`}
                  >
                    Gradeschooler
                  </li>
                  <li
                    className={`font-weight-bold p-3 list-group-item flex-fill text-center ${
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
    profile: PropTypes.oneOfType([
      'PropTypes.string.isRequired',
      'PropTypes.number.isRequired',
    ]).isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      role: PropTypes.string.isRequired,
    }).isRequired,
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

export default connect(mapStateToProps, { getJobById })(JobsProfile);

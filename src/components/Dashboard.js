import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../actions/profile';
import { deleteSitterProfile } from '../actions/sitters';
import { deleteParentProfile } from '../actions/jobs';
import Modal from './Modal';
import Spinner from './Spinner';

const Dashboard = ({
  getCurrentProfile,
  deleteParentProfile,
  deleteSitterProfile,
  profile,
  user: { name, role },
  userLoading,
  profileLoading,
}) => {
  useEffect(() => {
    !userLoading && getCurrentProfile(role);
  }, [userLoading]);

  function renderDashboard() {
    if (profileLoading && profile == null) {
      return <Spinner />;
    }

    if (!profileLoading && profile == null) {
      return (
        <>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="card bg-warning mt-3 mb-3 shadow">
                <div className="card-header font-weight-bolder">
                  Profile Status
                </div>
                <div className="card-body">
                  <h5 className="card-title">Post your profile</h5>
                  <p className="card-text">
                    Your profile does not appear in the search results yet.
                    Complete all required fields first.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card bg-light mt-3 mb-3 shadow">
                <div className="card-header font-weight-bolder">
                  Create profile
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Click the button below to create your profile
                  </p>
                  <Link
                    to={`${role}/create-profile`}
                    className="btn btn-primary"
                  >
                    Create profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

    if (!profileLoading && profile) {
      return (
        <>
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="card text-white bg-success mt-3 mb-3 shadow">
                <div className="card-header font-weight-bolder">
                  Profile Status
                </div>
                <div className="card-body">
                  <h5 className="card-title">Your profile is public</h5>
                  <p className="card-text">
                    Other users can view your profile. They will contact you via
                    email or phone.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="card bg-light mt-3 mb-3 shadow">
                <div className="card-header font-weight-bolder">
                  Edit profile
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Click the button below to update your profile
                  </p>
                  <Link to={`${role}/edit-profile`} className="btn btn-primary">
                    Edit profile
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="card bg-light mt-3 mb-3 shadow">
                <div className="card-header font-weight-bolder">
                  Delete profile
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Click the button below to delete your profile
                  </p>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Delete profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

    return null;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          {profileLoading ? (
            <Spinner />
          ) : (
            <>
              <h2>Dashboard</h2>
              <h4 className="mt-3">Welcome, {name}!</h4>
              {renderDashboard()}
              <Modal
                role={role}
                deleteParentProfile={deleteParentProfile}
                deleteSitterProfile={deleteSitterProfile}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteSitterProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({}),
  user: PropTypes.shape({
    role: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  profileLoading: PropTypes.bool.isRequired,
  userLoading: PropTypes.bool.isRequired,
  deleteParentProfile: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {
  profile: {},
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  user: state.auth.user,
  profileLoading: state.profile.loading,
  userLoading: state.auth.loading,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteSitterProfile,
  deleteParentProfile,
})(Dashboard);

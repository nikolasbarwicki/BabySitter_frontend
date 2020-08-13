import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile, deleteProfile } from '../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteProfile,
  profile,
  user: { name },
  userLoading,
  profileLoading,
}) => {
  useEffect(() => {
    !userLoading && getCurrentProfile();
  }, [userLoading, getCurrentProfile]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {profileLoading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              <h2>Dashboard</h2>
              <h5>Welcome {name}</h5>
              {profile == null ? (
                <>
                  <h6>
                    You have not yet setup a profile, please add some info
                  </h6>
                  <Link to="/create-profile" className="btn btn-primary">
                    Create profile
                  </Link>
                </>
              ) : (
                <>
                  <h4>Has profile</h4>
                  <Link to="/edit-profile" className="btn btn-primary">
                    Edit profile
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger ml-2"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Delete profile
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="deleteProfileModal"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="deleteProfileModal">
                            Delete profile
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          Are you sure? This can NOT be undone!
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            onClick={deleteProfile}
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Delete profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({}),
  user: PropTypes.shape({
    role: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  profileLoading: PropTypes.bool.isRequired,
  userLoading: PropTypes.bool.isRequired,
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

export default connect(mapStateToProps, { getCurrentProfile, deleteProfile })(
  Dashboard,
);

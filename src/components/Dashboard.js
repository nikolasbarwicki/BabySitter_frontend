import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  profile,
  user: { role, name },
  userLoading,
  profileLoading,
}) => {
  useEffect(() => {
    !userLoading && getCurrentProfile(role);
  }, [userLoading]);

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
                  <Link to="/edit-profile" className="btn btn-primary">
                    Edit profile
                  </Link>
                </>
              ) : (
                <h4>Has profile</h4>
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

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

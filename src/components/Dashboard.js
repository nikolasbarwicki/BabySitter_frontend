import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../actions/profile';

const Dashboard = ({ getCurrentProfile, role, loading }) => {
  useEffect(() => {
    !loading && getCurrentProfile(role);
  }, [loading]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">Dashboard</div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  role: state.auth.user.role,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

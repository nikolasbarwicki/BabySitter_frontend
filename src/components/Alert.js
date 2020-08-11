import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 && (
    <div className="mt-5 container col-12 col-md-8 col-lg-6 col-xl-4 d-flex flex-column justify-content-center">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`alert alert-${alert.alertType} col-12`}
          role="alert"
        >
          {alert.message}
        </div>
      ))}
    </div>
  );

Alert.propTypes = {
  alerts: PropTypes.arrayOf('strings').isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, null)(Alert);

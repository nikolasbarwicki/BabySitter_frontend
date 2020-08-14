import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 && (
    <div className="container fixed-bottom mb-5 d-flex flex-column justify-content-center">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`mx-auto shadow alert alert-${alert.alertType} col-12 col-sm-8 col-md-6 alert-dismissible fade show`}
          role="alert"
        >
          {alert.message}
        </div>
      ))}
    </div>
  );

Alert.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, null)(Alert);

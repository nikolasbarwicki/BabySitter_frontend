import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SittersFilter from './SittersFilter';
import SittersItem from './SittersItem';
import { getProfiles } from '../../actions/profile';

const SittersList = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <div className="container ">
      <div className="row">
        <SittersFilter />
        <div className="col-8">
          <h4>Find babysitter </h4>
          <p>
            Are you looking for a suitable babysitter? Babysits has a large
            overview of babysitters, with {profiles.count || 'many'} babysitters
            currently available matching your search criteria. Start contacting
            babysitters now to find a great babysitter to care for your
            child(ren) in no time!
          </p>
          {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {profiles.count > 0 ? (
                // eslint-disable-next-line react/prop-types
                profiles.data.map((sitter) => (
                  <SittersItem
                    key={sitter._id}
                    id={sitter._id}
                    name={sitter.user.name}
                    dateOfBirth={sitter.dateOfBirth}
                    city={sitter.location.city}
                    desc={sitter.description}
                  />
                ))
              ) : (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

SittersList.propTypes = {
  profile: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    profiles: PropTypes.shape({
      data: PropTypes.arrayOf().isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  getProfiles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(SittersList);

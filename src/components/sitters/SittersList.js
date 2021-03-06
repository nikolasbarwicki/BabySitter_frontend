import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import SittersFilter from './SittersFilter';
import SittersItem from './SittersItem';
import { getSitters, getFilteredSitters } from '../../actions/sitters';
import Spinner from '../Spinner';

const SittersList = ({
  getSitters,
  getFilteredSitters,
  sitters: { sitters, loading },
  location: { search },
}) => {
  useEffect(() => {
    if (search) {
      getFilteredSitters(queryString.parse(search));
    } else {
      getSitters();
    }
  }, [getSitters, getFilteredSitters, search]);

  return (
    <div className="container mt-4">
      <div className="row">
        <SittersFilter />
        <div className="col-12 col-sm-8">
          <h2>Find babysitter </h2>
          <p className="my-4">
            Are you looking for a suitable babysitter? Babysits has a large
            overview of babysitters, with {sitters.count || 'many'} babysitters
            currently available matching your search criteria. Start contacting
            babysitters now to find a great babysitter to care for your
            child(ren) in no time!
          </p>
          {loading ? (
            <Spinner />
          ) : (
            <>
              {sitters.count > 0 ? (
                // eslint-disable-next-line react/prop-types
                sitters.data.map((sitter) => (
                  <SittersItem
                    key={sitter._id}
                    id={sitter.user._id}
                    name={sitter.user.name}
                    age={sitter.age}
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
  getSitters: PropTypes.func.isRequired,
  getFilteredSitters: PropTypes.func.isRequired,
  sitters: PropTypes.shape({
    sitters: PropTypes.shape({
      count: PropTypes.number.isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  sitters: state.sitters,
});

export default connect(mapStateToProps, { getSitters, getFilteredSitters })(
  SittersList,
);

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import JobsFilter from './JobsFilter';
import JobsItem from './JobsItem';
import { getJobs } from '../../actions/jobs';

const JobsList = ({ getJobs, jobs: { jobs, loading } }) => {
  useEffect(() => {
    getJobs();
  }, [getJobs]);

  return (
    <div className="container ">
      <div className="row">
        <JobsFilter />
        <div className="col-8">
          <h4>Find babysitter </h4>
          <p>
            Are you looking for a babysitting job? Babysits has a large overview
            of babysitting jobs, with {jobs.count || 'many'} jobs currently
            available matching your search criteria. Find yourself a babysitting
            job on the babysitting community in no time!
          </p>
          {loading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {jobs.count > 0 ? (
                // eslint-disable-next-line react/prop-types
                jobs.data.map((job) => (
                  <JobsItem
                    key={job._id}
                    id={job.user._id}
                    name={job.user.name}
                    numberOfChildren={job.numberOfChildren}
                    ageOfChildren={job.ageOfChildren}
                    city={job.location.city}
                    desc={job.description}
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

JobsList.propTypes = {
  jobs: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    jobs: PropTypes.shape({
      data: PropTypes.arrayOf().isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  getJobs: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
});

export default connect(mapStateToProps, { getJobs })(JobsList);
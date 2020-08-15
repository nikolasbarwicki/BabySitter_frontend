import { GET_JOBS } from '../actions/types';

const initialState = {
  jobs: [],
  loading: true,
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_JOBS:
      return { ...state, jobs: payload, loading: false };
    default:
      return state;
  }
};

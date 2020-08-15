import {
  GET_PROFILE,
  GET_JOB,
  GET_SITTER,
  PROFILE_ERROR,
  CLEAR_PROFILE,
} from '../actions/types';

const initialState = {
  profile: null,
  loading: true,
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_JOB:
      return { ...state, profile: payload, loading: false };
    case GET_SITTER:
      return { ...state, profile: payload, loading: false };
    case GET_PROFILE:
      return { ...state, profile: payload, loading: false };
    case PROFILE_ERROR:
      return { ...state, error: payload, loading: false };
    case CLEAR_PROFILE:
      return { ...state, profile: null, loading: false };
    default:
      return state;
  }
};

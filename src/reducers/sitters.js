import { GET_SITTERS } from '../actions/types';

const initialState = {
  sitters: [],
  loading: true,
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SITTERS:
      return { ...state, sitters: payload, loading: false };
    default:
      return state;
  }
};

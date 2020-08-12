import axios from 'axios';

import { GET_PROFILE, PROFILE_ERROR } from './types';

// Get current users profile
// eslint-disable-next-line import/prefer-default-export
export const getCurrentProfile = (role) => async (dispatch) => {
  try {
    if (role === 'sitter') {
      const res = await axios.get(`/api/sitters/me`);
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } else {
      const res = await axios.get(`/api/jobs/me`);
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    }
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

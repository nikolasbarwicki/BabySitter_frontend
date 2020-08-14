import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  CLEAR_PROFILE,
} from './types';

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/sitters/me`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
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

// Get all profiles
export const getProfiles = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await axios.get(`/api/sitters`);

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (error) {
    // dispatch({
    //   type: PROFILE_ERROR,
    //   payload: {
    //     msg: error.response.statusText,
    //     status: error.response.status,
    //   },
    // });
  }
};

// Get all profiles with query params
export const getFilteredProfiles = (query) => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await axios.get(`/api/sitters`, {
      params: query,
    });

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
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

// Get profile by ID
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/sitters/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
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

// Create profile
export const createProfile = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/sitters', formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert('Profile Created', 'success'));

    history.push('/dashboard');
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });

    const { errors } = error.response.data;

    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
    }
  }
};

// Edit profile
export const editProfile = (formData, history, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`/api/sitters/${id}`, formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert('Profile Updated', 'success'));

    history.push('/dashboard');
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });

    const { errors } = error.response.data;

    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
    }
  }
};

// Delete profile
export const deleteProfile = () => async (dispatch) => {
  try {
    const res = await axios.delete('/api/sitters/user');

    dispatch({ type: CLEAR_PROFILE });

    dispatch(setAlert(res.data.msg, 'success'));
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

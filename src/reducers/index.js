import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import jobs from './jobs';
import sitters from './sitters';

export default combineReducers({
  alert,
  auth,
  profile,
  jobs,
  sitters,
});

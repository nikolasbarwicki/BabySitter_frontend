import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/Alert';
import Dashboard from './components/Dashboard';
import EditSitterProfile from './components/sitters/EditSitterProfile';
import EditParentProfile from './components/jobs/EditParentProfile';
import CreateSitterProfile from './components/sitters/CreateSitterProfile';
import CreateParentProfile from './components/jobs/CreateParentProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import SittersList from './components/sitters/SittersList';
import SittersProfile from './components/sitters/SittersProfile';
import JobsList from './components/jobs/JobsList';
import JobsProfile from './components/jobs/JobsProfile';
import NotFound from './components/NotFound';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sitters" component={SittersList} />
          <Route exact path="/sitters/:id" component={SittersProfile} />
          <Route exact path="/jobs" component={JobsList} />
          <Route exact path="/jobs/:id" component={JobsProfile} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/sitter/edit-profile"
            component={EditSitterProfile}
          />
          <PrivateRoute
            exact
            path="/parent/edit-profile"
            component={EditParentProfile}
          />
          <PrivateRoute
            exact
            path="/sitter/create-profile"
            component={CreateSitterProfile}
          />
          <PrivateRoute
            exact
            path="/parent/create-profile"
            component={CreateParentProfile}
          />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

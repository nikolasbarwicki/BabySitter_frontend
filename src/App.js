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
import EditProfile from './components/EditProfile';
import CreateProfile from './components/CreateProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import SittersList from './components/sitters/SittersList';
import SittersProfile from './components/sitters/SittersProfile';

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
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

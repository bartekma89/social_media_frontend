import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Navigation from './components/Navigation/Navigation.container';
import Footer from './components/Footer/Footer.component';
import Landing from './features/LandingPage/Landing.component';
import Login from './features/LoginPage/Login.container';
import Register from './features/RegisterPage/Register.container';
import Dashboard from './features/DashboardPage/Dashboard.component';
import PageNotFound from './features/NotFoundPage/PageNotFound.component';
import CreateProfile from './features/ProfileActionsPage/CreateProfile.container';
import EditProfile from './features/ProfileActionsPage/EditProfile.container';
import AddEducation from './features/ProfileActionsPage/AddEducation.container';
import AddExperience from './features/ProfileActionsPage/AddExperience.container';
import Profiles from './features/ProfilesPage/Profiles.container';
import Profile from './features/ProfilePage/Profile.container';

import { loadUser } from './actions/auth';
import { setAuthToken } from './helpers';

import './App.scss';

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
        <div className="app">
          <Navigation>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/create-profile" component={CreateProfile} />
              <Route path="/edit-profile" component={EditProfile} />
              <Route path="/add-education" component={AddEducation} />
              <Route path="/add-experience" component={AddExperience} />
              <Route path="/profiles" component={Profiles} />
              <Route path="/profile/:id" component={Profile} />
              <Route component={PageNotFound} />
            </Switch>
          </Navigation>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;

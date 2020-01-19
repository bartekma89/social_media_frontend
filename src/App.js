import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store';
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
import Post from './features/PostPage/Post.container';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.component';
import Spinner from './components/Spinner/Spinner.component';

import { loadUser } from './actions/auth';
import { setAuthToken } from './helpers';

import './App.scss';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const { store, persistor } = configureStore();

  useEffect(() => {
    store.dispatch(loadUser());
  }, [store]);

  return (
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <Router>
          <div className="app">
            <Navigation>
              <Switch>
                <Route exact path="/">
                  <Landing />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <PrivateRoute path="/dashboard">
                  <Dashboard />
                </PrivateRoute>
                <PrivateRoute path="/create-profile">
                  <CreateProfile />
                </PrivateRoute>
                <PrivateRoute path="/edit-profile">
                  <EditProfile />
                </PrivateRoute>
                <PrivateRoute path="/add-education">
                  <AddEducation />
                </PrivateRoute>
                <PrivateRoute path="/add-experience">
                  <AddExperience />
                </PrivateRoute>
                <Route path="/profiles">
                  <Profiles />
                </Route>
                <Route path="/profile/:id">
                  <Profile />
                </Route>
                <PrivateRoute path="/post">
                  <Post />
                </PrivateRoute>
                <Route>
                  <PageNotFound />
                </Route>
              </Switch>
            </Navigation>
            <Footer />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;

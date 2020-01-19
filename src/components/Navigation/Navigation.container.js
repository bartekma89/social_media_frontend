import React, { useState, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { func, bool } from 'prop-types';

import { logout } from '../../actions/auth';
import { getAuthStatus, getAuthLoading } from '../../selectors';

import './Navigation.scss';

const Navigation = (props) => {
  const [isOpen, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!isOpen);
  };

  const guestLinks = (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={Link} to="/login">
          Sign in
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/register">
          Sign up
        </NavLink>
      </NavItem>
    </Nav>
  );

  const authLinks = (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={Link} to="/profiles" className="nav-link">
          Developers
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/post" className="nav-link">
          Post
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
      </NavItem>
      <NavItem onClick={props.logout}>
        <NavLink tag={Link} to="/">
          Logout
        </NavLink>
      </NavItem>
    </Nav>
  );

  return (
    <Fragment>
      <div className="nav-position">
        <Navbar color="black" dark expand="sm">
          <div className="container">
            <NavbarBrand tag={Link} to="/">
              DevelopersHub
            </NavbarBrand>

            <NavbarToggler style={{ margin: '0' }} onClick={onToggle} />
            <Collapse isOpen={isOpen} navbar>
              {!props.loading && (
                <>{props.isAuthenticated ? authLinks : guestLinks}</>
              )}
            </Collapse>
          </div>
        </Navbar>
      </div>
      {props.children}
    </Fragment>
  );
};

Navigation.propTypes = {
  logout: func,
  isAuthenticated: bool,
  loading: bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthStatus(state),
  loading: getAuthLoading(state)
});

const mapDispatchToProps = {
  logout
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Navigation);

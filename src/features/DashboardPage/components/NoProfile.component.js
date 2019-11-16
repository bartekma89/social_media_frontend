import React, { Fragment } from 'react';
import { string } from 'prop-types';

import { NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const NoProfile = ({ error }) => {
  return (
    <Fragment>
      <p className="my-3">
        <strong>{error}</strong>
      </p>
      <NavLink tag={Link} className="p-0" to="/create-profile">
        <Button className="btn-purple my-1">Create Profile</Button>
      </NavLink>
    </Fragment>
  );
};

NoProfile.propTypes = {
  error: string
};

export default NoProfile;

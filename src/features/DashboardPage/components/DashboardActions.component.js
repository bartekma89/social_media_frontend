import React from 'react';
import { NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div>
      <NavLink
        className="d-sm-inline p-0 pl-sm-0 pr-sm-3 py-sm-2"
        tag={Link}
        to="/edit-profile"
      >
        <Button color="primary">Edit profile</Button>
      </NavLink>
      <NavLink
        className="d-sm-inline p-0 px-sm-3 py-sm-2"
        tag={Link}
        to="/add-education"
      >
        <Button color="primary">Add education</Button>
      </NavLink>
      <NavLink
        className="d-sm-inline p-0 px-sm-3 py-sm-2"
        tag={Link}
        to="/add-experience"
      >
        <Button color="primary">Add experience</Button>
      </NavLink>
    </div>
  );
};

export default DashboardActions;

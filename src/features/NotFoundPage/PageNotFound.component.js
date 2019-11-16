import React from "react";
import { Link } from "react-router-dom";
import { NavLink, Button } from "reactstrap";

const PageNotFound = ({ location }) => {
  return (
    <div className="text-center">
      <h2>No match found for</h2>
      <code>{location.pathname}</code>
      <br />
      <NavLink tag={Link} className="p-0" to="/">
        <Button className="my-3">Back to main page</Button>
      </NavLink>
    </div>
  );
};

export default PageNotFound;

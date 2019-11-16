import React from "react";
import { bool, oneOfType, node, element } from "prop-types";

import "./Spinner.scss";

const LoadingWrapper = ({ active, children }) => {
  let result;

  if (active) {
    result = <div className="loader">Loading...</div>;
  } else {
    result = children;
  }

  return result;
};

LoadingWrapper.propTypes = {
  active: bool,
  children: oneOfType([node, element])
};

export default LoadingWrapper;

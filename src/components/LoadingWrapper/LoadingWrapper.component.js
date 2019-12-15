import React from 'react';
import { bool, oneOfType, node, element, number } from 'prop-types';

import './Loader.scss';

const LoadingWrapper = ({ active, size, children }) => {
  let result;

  if (active) {
    result = (
      <div className="d-flex justify-content-center">
        <svg
          className="loader"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
    );
  } else {
    result = children;
  }

  return result;
};

LoadingWrapper.defaultProps = {
  size: 96
};

LoadingWrapper.propTypes = {
  active: bool,
  size: number,
  children: oneOfType([node, element])
};

export default LoadingWrapper;

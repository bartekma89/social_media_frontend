import React from 'react';
import { bool, oneOfType, node, element, number } from 'prop-types';

import Spinner from '../Spinner/Spinner.component';

const LoadingWrapper = ({ active, size, children }) => {
  let result;

  if (active) {
    result = <Spinner size={size} />;
  } else {
    result = children;
  }

  return result;
};

LoadingWrapper.propTypes = {
  active: bool,
  size: number,
  children: oneOfType([node, element])
};

export default LoadingWrapper;

import React from 'react';
import { bool, oneOfType, node, element, number } from 'prop-types';

import './Loader.scss';

const LoadingWrapper = ({ active, size, children }) => {
  let result;

  if (active) {
    result = (
      <div className="d-flex justify-content-center">
        <svg className="donut" width={size} height={size} />
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

import React from 'react';

import './Spinner.scss';

const Spinner = ({ size }) => (
  <div className="d-flex justify-content-center">
    <svg className="donut" width={size} height={size} />
  </div>
);

Spinner.defaultProps = {
  size: 96
};

export default Spinner;

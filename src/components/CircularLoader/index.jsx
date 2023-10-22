import React from 'react';
import PropTypes from 'prop-types';
import { Size } from '@lumx/react';

const CircularLoader = ({ size }) => <span className={`loader ${size}`} />;

CircularLoader.defaultProps = {
  size: 's',
};

CircularLoader.propTypes = {
  size: PropTypes.oneOf(Size),
};

export default CircularLoader;

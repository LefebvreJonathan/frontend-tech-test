import React from 'react';
import PropTypes from 'prop-types';

const PageWrapper = ({ children, className }) => (
	<div className={`page-wrapper ${className}`}>
		{children}
	</div>
);

PageWrapper.defaultProps = {
  className: '',
};

PageWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageWrapper;

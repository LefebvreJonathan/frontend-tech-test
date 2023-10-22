import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../PageWrapper';

const Error = ({ message }) => (
	<PageWrapper>
		<p>
			{message}
		</p>
	</PageWrapper>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;

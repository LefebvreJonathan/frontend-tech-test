import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../PageWrapper';

const NotFound = ({ search }) => (
	<PageWrapper className="not-found">
		<p>
			No result found for
			<span className="search">{search}</span>
		</p>
	</PageWrapper>
);

NotFound.defaultProps = {
  search: '',
};

NotFound.propTypes = {
  search: PropTypes.string,
};

export default NotFound;

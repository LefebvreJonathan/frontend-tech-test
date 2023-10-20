import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

const Search = ({ onChange, onKeyPress, placeholder }) => (
	<TextField theme={Theme.dark} placeholder={placeholder} icon={mdiMagnify} onKeyPress={onKeyPress} onChange={onChange} />
);

Search.defaultProps = {
  onChange: () => null,
  onKeyPress: () => null,
  placeholder: 'Search ...',
};


Search.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Search;

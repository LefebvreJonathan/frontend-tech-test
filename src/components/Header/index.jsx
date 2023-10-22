import React from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';

const Header = ({ onChange, onKeyPress }) => (
	<header className="lumx-spacing-padding-big header">
		<img src={`${process.env.PUBLIC_URL}/marvel_logo.png`} alt="marvel" className="logo" loading="lazy" />
		<Search onChange={onChange} onKeyPress={onKeyPress} />
	</header>
);

Header.defaultProps = {
  onChange: () => null,
  onKeyPress: () => null,
};

Header.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
};


export default Header;

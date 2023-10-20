import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import PropTypes from 'prop-types';
import Search from '../Search';

const Header = ({ onChange, onKeyPress }) => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox vAlign={Alignment.right}>
			<Search onChange={onChange} onKeyPress={onKeyPress} />
		</FlexBox>
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

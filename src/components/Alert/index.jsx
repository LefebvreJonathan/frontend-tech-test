import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Size } from '@lumx/react';
import { mdiClose } from '@lumx/icons';


const Alert = ({ message, type }) => {
  const [hide, setHidden] = useState(false);
  return (
	<div className={`alert ${type} ${hide ? 'hide' : ''}`}>
		<button type="button" className="close-btn" onClick={() => setHidden(true)}>
			<Icon icon={mdiClose} size={Size.s} />
		</button>
		{message}
	</div>
  );
};

Alert.defaultProps = {
  type: '',
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Alert;

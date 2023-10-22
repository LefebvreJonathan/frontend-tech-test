import React from 'react';
import { Size } from '@lumx/react';
import CircularLoader from '../../components/CircularLoader';
import PageWrapper from '../PageWrapper';


const Loading = () => (
	<PageWrapper>
		<CircularLoader size={Size.xl} />
	</PageWrapper>
);


export default Loading;

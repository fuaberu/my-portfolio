import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../static/image.svg';

const Seo = ({ title }) => {
	return (
		<Helmet title={title} htmlAttributes={{ lang: 'en' }}>
			<link rel="icon" href={favicon} />
		</Helmet>
	);
};

export default Seo;

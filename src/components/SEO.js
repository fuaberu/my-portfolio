import React from 'react'
import { Helmet } from 'react-helmet'
import favicon from '../static/favicon.ico.png'

const Seo = ({title}) => {
    return (
			<Helmet title={title} htmlAttributes={{lang: 'en' }}>
				<link rel="icon" href={favicon} />
			</Helmet>
		);
}

export default Seo

import React from 'react';

function Footer() {
	return (
		<footer className='footer'>
			<p>
				&copy; <span>{new Date().getFullYear()}</span> Build by{' '}
				<span>Kevin Fabel</span>. Powered by{' '}
				<a href="https://www.gatsbyjs.com/">
					<span>Gatsby</span>
				</a>
			</p>
		</footer>
	);
}

export default Footer;

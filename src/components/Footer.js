import React from 'react';

function Footer() {
	return (
		<footer className='footer'>
			<p>
				&copy; <span>{new Date().getFullYear()}</span> Build by{' '}
				<span>Kevin Fabel</span>.
			</p>
		</footer>
	);
}

export default Footer;

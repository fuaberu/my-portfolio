import React from 'react';
import { footer } from '../styles/footer.module.css';

function Footer({ background }) {
	return (
		<footer className={footer} style={{ backgroundColor: { background } }}>
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

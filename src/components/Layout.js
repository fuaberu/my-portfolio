import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';

import 'normalize.css';


function Layout({ children }) {
	return (
		<>
			<div>
				<Navbar />
				{children}
			</div>
			<Footer />
		</>
	);
}

export default Layout;

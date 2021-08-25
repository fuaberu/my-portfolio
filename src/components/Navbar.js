import React from 'react';
import { Link } from 'gatsby';
import UseAnimations from 'react-useanimations';
import menu4 from 'react-useanimations/lib/menu4';

import {
	navContainer,
	activeLink,
	link,
	linksContainer,
	button,
	headName,
	navHeader,
} from '../styles/navbar.module.css';

function Navbar() {
	return (
		<nav className={navContainer}>
			<div className={navHeader}>
				<h2>
					<Link to="/" className={headName}>
						Kevin Fabel
					</Link>
				</h2>

				<button className={button}>
					<UseAnimations
						animation={menu4}
						size={70}
						strokeColor='white'
					/>
				</button>
			</div>
			<div className={linksContainer}>
				<Link to="/about" className={link} activeClassName={activeLink}>
					About me
				</Link>

				<Link to="/skills" className={link} activeClassName={activeLink}>
					Skills
				</Link>

				<Link to="/portfolio" className={link} activeClassName={activeLink}>
					Portfolio
				</Link>

				<Link to="/contact-me" className={link} activeClassName={activeLink}>
					Contact Me
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;

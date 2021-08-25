import React, { useState } from 'react';
import { Link } from 'gatsby';
import UseAnimations from 'react-useanimations';
import menu4 from 'react-useanimations/lib/menu4';

const Navbar = () => {
	const [show, setShow] = useState(false);
	return (
		<nav className="nav-container">
			<div className="nav-header">
				<Link to="/" className="header-name">
					Kevin Fabel
				</Link>
				<button className="button" onClick={() => setShow(!show)}>
					<UseAnimations animation={menu4} size={70} strokeColor="white" />
				</button>
			</div>
			<div className={show ? 'links-container show-link' : 'links-container'}>
				<Link
					to="/about"
					className="link"
					activeClassName="active-link"
					onClick={() => setShow(false)}
				>
					About me
				</Link>

				<Link
					to="/skills"
					className="link"
					activeClassName="active-link"
					onClick={() => setShow(false)}
				>
					Skills
				</Link>

				<Link
					to="/portfolio"
					className="link"
					activeClassName="active-link"
					onClick={() => setShow(false)}
				>
					Portfolio
				</Link>

				<Link
					to="/contact-me"
					className="link"
					activeClassName="active-link"
					onClick={() => setShow(false)}
				>
					Contact Me
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;

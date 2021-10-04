import React, { useState } from 'react';
import { Link } from 'gatsby';
import { MdDehaze } from 'react-icons/md';

const Navbar = () => {
	const [show, setShow] = useState(false);
	return (
		<nav className="nav-container">
			<div className="nav-header">
				<Link to="/" className="header-name">
					Kevin Fabel
				</Link>
				<button className="nav-button" onClick={() => setShow(!show)}>
					<MdDehaze style={{ color: 'white', fontSize: '2.5rem' }} />
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

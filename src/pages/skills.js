import React from 'react';
import Layout from '../components/Layout';
import html from 'devicon/icons/html5/html5-original.svg';
import css from 'devicon/icons/css3/css3-original.svg';
import javascript from 'devicon/icons/javascript/javascript-original.svg';
import git from 'devicon/icons/git/git-original.svg';
import react from 'devicon/icons/react/react-original.svg';
import gatsby from 'devicon/icons/gatsby/gatsby-original.svg';
import Seo from '../components/SEO';

function skills() {
	return (
		<main className="skills-container">
			<Seo title='Skills' />
			<Layout>
					<h1>skills</h1>
				<div className="skills-section">
					<div className="skill-div">
						<img className="skills-imgs" src={html} alt="fcce" />
						<p>html5</p>
					</div>
					<div className="skill-div">
						<img className="skills-imgs" src={css} alt="fcce" />
						<p>css3</p>
					</div>
					<div className="skill-div">
						<img className="skills-imgs" src={javascript} alt="fcce" />
						<p>javascript</p>
					</div>
					<div className="skill-div">
						<img className="skills-imgs" src={git} alt="fcce" />
						<p>git</p>
					</div>
					<div className="skill-div">
						<img className="skills-imgs" src={react} alt="fcce" />
						<p>react</p>
					</div>
					<div className="skill-div">
						<img className="skills-imgs" src={gatsby} alt="fcce" />
						<p>gatsby</p>
					</div>
				</div>
			</Layout>
		</main>
	);
}

export default skills;

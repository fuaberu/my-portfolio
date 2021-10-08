import React from 'react';
import Layout from '../components/Layout';
import html from 'devicon/icons/html5/html5-original.svg';
import css from 'devicon/icons/css3/css3-original.svg';
import javascript from 'devicon/icons/javascript/javascript-original.svg';
import git from 'devicon/icons/git/git-original.svg';
import react from 'devicon/icons/react/react-original.svg';
import gatsby from 'devicon/icons/gatsby/gatsby-original.svg';
import sass from 'devicon/icons/sass/sass-original.svg';
import firebase from 'devicon/icons/firebase/firebase-plain.svg';
import typescript from 'devicon/icons/typescript/typescript-original.svg';
import bootstrap from 'devicon/icons/bootstrap/bootstrap-original.svg';
import Seo from '../components/SEO';

function skills() {
	return (
		<main className="skills-container">
			<Seo title="Skills" />
			<Layout>
				<h1>skills</h1>
				<div className="skills-section">
					<div className="skill-div">
						<img className="skills-imgs" src={html} alt="html5 icon" />
						<p>html5</p>
					</div>
					<div className="skill-div">
						<img className="skills-imgs" src={css} alt="css3 icon" />
						<p>css3</p>
					</div>
					<div className="skill-div">
						<img className="skills-imgs" src={javascript} alt="JavaScript icon" />
						<p>javascript</p>
					</div>
					<div className="skill-div">
						<img className="skills-imgs" src={typescript} alt="TypeScript icon" />
						<p>typescript</p>
					</div>
					<div className="skill-div">
						<img className="skills-imgs" src={sass} alt="sass icon" />
						<p>Sass</p>
					</div>
					<div className="skill-div">
						<img className="skills-imgs" src={react} alt="react icon" />
						<p>react</p>
					</div>
					<div className="skill-div">
						<img className="skills-imgs" src={git} alt="git icon" />
						<p>git</p>
					</div>
					<div className="skill-div">
						<img className="skills-imgs" src={gatsby} alt="gatsby icon" />
						<p>gatsby</p>
					</div>
					<div className="skill-div">
						<img className="skills-imgs" src={firebase} alt="firebase icon" />
						<p>firebase</p>
					</div>
					<div className="skill-div">
						<img className="skills-imgs" src={bootstrap} alt="Bootstrap icon" />
						<p>bootstrap</p>
					</div>
				</div>
			</Layout>
		</main>
	);
}

export default skills;

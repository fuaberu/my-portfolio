import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/SEO';

function about() {
	return (
		<main className="about-container">
			<Seo title="About" />
			<Layout>
				<h1>about me</h1>
				<div className="about-text">
					<p>
						Hi, I am Kevin Fabel. I am a self-taught Front-end developer from
						Brazil. I have been learning to code using HTML, CSS, and javascript
						alongside some other Front-End technologies for the past year
						(2021). Every day try to improve my coding skills as well as learn
						new concepts to keep up with the high standards of the fast-evolving
						industry that is web development.
					</p>
					<p>
						After starting learning, I got a linking for the whole process of
						web development. The journey to becoming self-taught has not been an
						easy task. But really rewarding. I am fluent in English (spoken and
						written) and pursuing a high level of Japanese proficiency. Apart
						from designing and programming websites, my passions are travel and
						playing beach volleyball.
					</p>
				</div>
			</Layout>
		</main>
	);
}

export default about;

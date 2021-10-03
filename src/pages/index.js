import React from 'react';
import Layout from '../components/Layout';
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
import download from 'react-useanimations/lib/download';
import '../styles/main.css';
import ParticleBackground from '../particle/ParticleBackground';
import downloadFile from '../static/stop-cv-format.pdf';
import Seo from '../components/SEO';

function index() {
	return (
		<Layout className="layout">
			<Seo title="Main page" />
			<section className="hero">
				<ParticleBackground className="partilces" />
				<div className="text">
					<p className="hi">Hi, I am</p>
					<h1>Kevin Fabel</h1>
					<p className="description">Front-end Developer</p>
				</div>

				<div className="flex">
					<a
						href="https://www.linkedin.com/in/kevin-fabel/"
						target="_blank"
						rel="noreferrer"
						className="icons"
					>
						<UseAnimations
							animation={linkedin}
							size={56}
							strokeColor="white"
							wrapperStyle={{ padding: 2 }}
						/>
					</a>
					<a
						href="https://github.com/fuaberu"
						target="_blank"
						rel="noreferrer"
						className="icons"
					>
						<UseAnimations
							animation={github}
							size={56}
							strokeColor="white"
							wrapperStyle={{ padding: 2 }}
						/>
					</a>
					<a
						href={downloadFile}
						target="_blank"
						rel="noreferrer"
						className="icons"
					>
						<UseAnimations
							animation={download}
							size={56}
							strokeColor="white"
							wrapperStyle={{ padding: 2, cursor: 'pointer' }}
						/>
					</a>
				</div>
			</section>
		</Layout>
	);
}

export default index;

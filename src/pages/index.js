import React, { useState } from 'react';
import Layout from '../components/Layout';
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';
import download from 'react-useanimations/lib/download';
import { AiOutlineMail } from 'react-icons/ai';
import '../styles/main.css';
import ParticleBackground from '../particle/ParticleBackground';
import downloadFile from '../static/stop-cv-format.pdf';
import Seo from '../components/SEO';

function Index() {
	const [loading, setLoading] = useState(true);

	setInterval(() => {
		setLoading(false);
	}, 2000);

	return (
		<main className="hero">
			<div className={loading ? 'hide' : 'wrapper'}>
				<Layout>
					<Seo title="Main page" />
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
						<a
							className="icons"
							href="mailto:kevinfabel@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<AiOutlineMail
								style={{ color: 'white', fontSize: '3rem', width: '60px' }}
							/>
						</a>
					</div>
				</Layout>
			</div>

			<div className={loading ? 'loading' : 'loading hide'}>
				<Seo title="Main page" />
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 586 584">
					<g id="Layer_2">
						<polygon
							id="k-polygon"
							fill="#d7d7d7"
							points="155.167,99.833 155.167,225.358 425.014,527.422 425.014,371.02 312.912,249.523 449.85,99.833 322.98,99.833    256.527,174.342 256.527,99.833  "
						/>
						<polygon
							id="first-line-polygon"
							fill="#e8871e"
							points="155.167,247.173 155.167,287.113 256.526,399.885 256.526,358.938  "
						/>
						<polygon
							id="second-line-polygon"
							fill="#e8871e"
							points="155.167,309.936 155.167,384.111 256.526,493.861 256.526,421.699  "
						/>
					</g>
					<g id="Layer_3">
						<path
							fill="#d7d7d7"
							id="circle-path"
							d="M295.998,26.667c-148.73,0-269.302,120.063-269.302,268.165C26.696,442.938,147.268,563,295.998,563   c148.736,0,269.307-120.064,269.307-268.168C565.305,146.729,444.734,26.667,295.998,26.667z M296.969,537.387   c-134.741,0-243.973-108.77-243.973-242.943c0-134.171,109.232-242.941,243.973-242.941c134.744,0,243.973,108.77,243.973,242.941   S431.713,537.387,296.969,537.387z"
						/>
					</g>
				</svg>
			</div>
		</main>
	);
}

export default Index;

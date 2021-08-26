import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/SEO';

function portfolio() {
	return (
		<section className="portfolio-container">
			<Seo title='Portfolio' />
			<Layout>
				<h1>Portfolio</h1>
				<div className="portfolio-card">
					<StaticImage
						src="../static/images/nigiri-with-souce.jpg"
						alt="image"
						className="portfolio-img"
						placeholder="blurred"
					/>
					<div className="portfolio-text">
						<h2>Project name</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
							eveniet voluptatem earum dolorum possimus eos.
						</p>
						<div className="page-links">
							<a href="http://">page</a>
							<a href="http://">git</a>
						</div>
						<div className="stacks">
							<i>html</i>
							<i>java script</i>
							<i>css</i>
							<i>react</i>
						</div>
					</div>
				</div>
				<hr
					style={{
						color: 'blue',
					}}
				/>
				<div className="portfolio-card">
					<StaticImage
						src="../static/images/nigiri-with-souce.jpg"
						alt="image"
						className="portfolio-img"
						placeholder="blurred"
					/>
					<div className="portfolio-text">
						<h2>Project name</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
							eveniet voluptatem earum dolorum possimus eos.
						</p>
						<div className="page-links">
							<a href="http://">page</a>
							<a href="http://">git</a>
						</div>
						<div className="stacks">
							<i>html</i>
							<i>java script</i>
							<i>css</i>
							<i>react</i>
						</div>
					</div>
				</div>
				<div className="portfolio-card">
					<StaticImage
						src="../static/images/nigiri-with-souce.jpg"
						alt="image"
						className="portfolio-img"
						placeholder="blurred"
					/>
					<div className="portfolio-text">
						<h2>Project name</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
							eveniet voluptatem earum dolorum possimus eos.
						</p>
						<div className="page-links">
							<a href="http://">page</a>
							<a href="http://">git</a>
						</div>
						<div className="stacks">
							<i>html</i>
							<i>java script</i>
							<i>css</i>
							<i>react</i>
						</div>
					</div>
				</div>
			</Layout>
		</section>
	);
}

export default portfolio;

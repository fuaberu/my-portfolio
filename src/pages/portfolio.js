import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/SEO';
import PortfolioCard from '../components/PortfolioCard';

function portfolio() {
	return (
		<main className="portfolio-container">
			<Seo title="Portfolio" />
			<Layout>
				<h1>Portfolio</h1>
				<PortfolioCard
					stacks={[
						{ icon: 'html5-plain colored', text: 'HTML' },
						{ icon: 'javascript-plain colored', text: 'JavaScript' },
						{ icon: 'sass-original colored', text: 'SASS' },
						{ icon: 'react-original colored', text: 'React' },
					]}
					title="fake store"
					liveLink="https://my-ecommerce-3ce47.web.app/"
					gitLink="https://github.com/fuaberu/ecommerce-website"
				>
					<StaticImage
						src="../assets/eCommerce.png"
						alt="mobile view of the eCommerce website"
						className="portfolio-img"
						placeholder="blurred"
					/>
				</PortfolioCard>
				<PortfolioCard
					stacks={[
						{ icon: 'html5-plain colored', text: 'HTML' },
						{ icon: 'javascript-plain colored', text: 'JavaScript' },
						{ icon: 'sass-original colored', text: 'SASS' },
					]}
					title="Weather App"
					liveLink="https://weather-visualiser.netlify.app/"
					gitLink="https://github.com/fuaberu/weather-app"
				>
					<StaticImage
						src="../assets/weather.png"
						alt="mobile view of the eCommerce website"
						className="portfolio-img"
						placeholder="blurred"
					/>
				</PortfolioCard>
			</Layout>
		</main>
	);
}

export default portfolio;

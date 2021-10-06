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
					description="Fake Store is an application design to be an ecommerce website to sell 
					any product in the web. It has built in google and user authentication using firebase. Uses
					FIREBASE FIRESTORE as the database to store the products and user's data.
					Integrated with PAYPAL for checkout and payment."
					stacks={[
						{ icon: 'javascript-plain colored', text: 'JavaScript' },
						{ icon: 'sass-original colored', text: 'SASS' },
						{ icon: 'react-original colored', text: 'React' },
						{ icon: 'firebase-plain colored', text: 'firebase' },
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
					description="Weather-app is an application design to be easy 
					to use as it contains all the information needed on one page.
					Can check the on-time, hourly, and 7 days weather in any place.
					Choose your configuration as wind speed, temperature, time, etc."
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

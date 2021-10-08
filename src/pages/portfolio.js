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
					description="Fake Store is an application design to be an 
					eCommerce website to sell any product on the web. It has a
					built-in Google and user authentication using Firebase. It
					uses Firebase as the database to store the products and
					users' data. And has integration with PAYPAL for checkout
					and payment."
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
						alt="view of the eCommerce website"
						className="portfolio-img"
						placeholder="blurred"
					/>
				</PortfolioCard>
				<PortfolioCard
					description="Weather App is an application design to be easy to use, 
					as it contains all the information needed on one page. The user can
					check the on-time, hourly, and seven days weather in any localization
					in the world. In the Weather App, the users can choose their preferred
					units configuration of wind speed, temperature, time, and others."
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
						alt="view of the Weather App"
						className="portfolio-img"
						placeholder="blurred"
					/>
				</PortfolioCard>
				<PortfolioCard
					description="Web app built to help players in the game Albion 
					Online to have a better understanding of the house system in-game
					and to optimize the player profit. The website UI is built with
					HTML and bootstrap 5. For the logic and unit validation of the
					tables was used TypeScript, to ensure the quality of the data.
					The player can choose from which city's market the prices will
					be used and change the variables such as market taxes and
					happiness of the worker in the house."
					stacks={[
						{ icon: 'html5-plain colored', text: 'HTML' },
						{ icon: 'typescript-plain colored', text: 'TypeScript' },
						{ icon: 'bootstrap-plain colored', text: 'Bootstrap' },
					]}
					title="Albion Labourer Calculator"
					liveLink="https://albion-labourer-calculator.netlify.app/"
					gitLink="https://github.com/fuaberu/albion-laborers-profit"
				>
					<StaticImage
						src="../assets/albion-labourer-calculator.png"
						alt="view of the Albion Labourer Calculator"
						className="portfolio-img"
						placeholder="blurred"
					/>
				</PortfolioCard>
			</Layout>
		</main>
	);
}

export default portfolio;

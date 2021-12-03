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
					description="SayHi is a messenger application to send real-time 
					messages. The application has a front-end in React.js with
					styled-components and a backend as an API in node.js with express.
					It Uses MongoDB as the database to store the messages and users'
					data. And in integrated with Socket.io for the real-time data
					connection between users."
					stacks={[
						{ icon: 'react-original colored', text: 'React' },
						{ icon: 'nodejs-plain colored', text: 'Nodejs' },
						{ icon: 'express-original', text: 'Express' },
						{ icon: 'mongodb-plain colored', text: 'MongoDB' },
					]}
					title="SayHi"
					liveLink="https://say-hi.netlify.app/"
					gitLink="https://github.com/fuaberu/say-hi-client"
				>
					<StaticImage
						src="../assets/sayHi.png"
						alt="view of the SayHi messenger website"
						className="portfolio-img"
						placeholder="blurred"
					/>
				</PortfolioCard>
				<PortfolioCard
					description="CryptoBoard is a cryptocurrency information board. Displays the information gathered from the Coinranking API, and Bing news API as statistics or, in the form of charts utilizing the historical data and the chart.js. It has the redux as state management for the website theme and gets the initial state from the OS."
					stacks={[
						{ icon: 'react-original colored', text: 'React' },
						{ icon: 'redux-original colored', text: 'Redux' },
					]}
					title="CryptoBoard"
					liveLink="https://cryptos-board.netlify.app/"
					gitLink="https://github.com/fuaberu/crypto-board/"
				>
					<StaticImage
						src="../assets/cryptoboard.png"
						alt="view of the CryptoBoard website"
						className="portfolio-img"
						placeholder="blurred"
					/>
				</PortfolioCard>
				<PortfolioCard
					description="Photo Album is a photo gallery using photos from the pexels API."
					stacks={[
						{ icon: 'react-original colored', text: 'React' },
						{ icon: 'sass-original colored', text: 'SASS' },
						{ icon: 'redux-original colored', text: 'Redux' },
					]}
					title="Photo Album"
					liveLink="https://photo-gallery-fuaberu.netlify.app/"
					gitLink="https://github.com/fuaberu/photo-album"
				>
					<StaticImage
						src="../assets/photo-gallery.png"
						alt="view of the photo-galley website"
						className="portfolio-img"
						placeholder="blurred"
					/>
				</PortfolioCard>
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
					title="Fake Store"
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

import React from 'react';
import Layout from '../components/Layout';

function contactMe() {
	return (
		<Layout>
			<main className="csa">
				<h1>Let's talk</h1>
				<section>
					<form
						className="form"
						action="https://formspree.io/f/mwkawdny"
						method="POST"
					>
						<div className="form-row">
							<label htmlFor="name">Enter your name</label>
							<input type="text" name="name" id="name" />
						</div>
						<div className="form-row">
							<label htmlFor="email">Enter your email</label>
							<input type="email" name="email" id="email" />
						</div>
						<div className="form-row">
							<label htmlFor="message">Message</label>
							<input type="textarea" name="message" id="message" />
						</div>
						<button type="submit" className="asxa">
							Submit
						</button>
					</form>
				</section>
			</main>
		</Layout>
	);
}

export default contactMe;

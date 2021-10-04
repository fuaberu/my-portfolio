import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/SEO';

function contactMe() {
	return (
		<main className="contact">
			<Seo title="Contact-me" />
			<Layout>
				<section className="lets-talk">
					<h1>Reach out!</h1>
					<form
						className="form"
						action="https://formspree.io/f/mwkawdny"
						method="POST"
					>
						<div className="form-row">
							<label className="lable" htmlFor="name">
								Enter your name
							</label>
							<input
								className="input"
								type="text"
								name="name"
								id="name"
								required
							/>
						</div>
						<div className="form-row">
							<label className="lable" htmlFor="email">
								Enter your email
							</label>
							<input
								className="input"
								type="email"
								name="email"
								id="email"
								required
							/>
						</div>
						<div className="form-row">
							<label className="message-lable" htmlFor="message">
								Message
							</label>
							<textarea
								className="texterea"
								type="textarea"
								name="message"
								id="message"
								rows="4"
								required
							/>
						</div>
						<button type="submit" className="submit-btn">
							Submit
						</button>
					</form>
				</section>
			</Layout>
		</main>
	);
}

export default contactMe;

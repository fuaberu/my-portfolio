import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

function Error() {
	return (
		<Layout>
			<main className="container-404">
				<section className="section-404">
					<h1>404</h1>
					<h3>Page Not Found</h3>
					<p>
						Please go back to the <Link to="/">main page</Link>
					</p>
				</section>
			</main>
		</Layout>
	);
}

export default Error;
